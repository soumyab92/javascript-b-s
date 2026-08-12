// GET /api/stats -- returns the aggregated visit log for the dashboard.
//
// This is the part that makes the dashboard private. The check happens HERE, on the server:
// without the right x-admin-key header the data is never sent, so it does not matter that
// admin.html itself is a public URL. Anyone can load the page; nobody else can fill it.
//
// Fails CLOSED: if ADMIN_KEY is not set in the environment, the endpoint refuses everyone
// rather than defaulting to open.

const { VISITS_KEY, redisConfig, pipeline, keysMatch, sendJson } = require('./_shared');

function browserOf(ua){
  if(!ua) return 'unknown';
  if(/Edg\//.test(ua)) return 'Edge';
  if(/OPR\/|Opera/.test(ua)) return 'Opera';
  if(/SamsungBrowser/.test(ua)) return 'Samsung Internet';
  if(/Firefox\//.test(ua)) return 'Firefox';
  if(/Chrome\//.test(ua)) return 'Chrome';
  if(/Safari\//.test(ua)) return 'Safari';
  return 'other';
}

function platformOf(ua){
  if(!ua) return 'unknown';
  if(/Android/.test(ua)) return 'Android';
  if(/iPhone|iPad|iPod/.test(ua)) return 'iOS';
  if(/Windows/.test(ua)) return 'Windows';
  if(/Mac OS X/.test(ua)) return 'macOS';
  if(/Linux/.test(ua)) return 'Linux';
  return 'other';
}

// Bare hostname of the referrer, dropping self-referrals (in-site navigation).
function refHost(ref, selfHost){
  if(!ref) return 'direct / none';
  try{
    const h = new URL(ref).hostname.replace(/^www\./, '');
    if(selfHost && h === String(selfHost).replace(/^www\./, '')) return 'direct / none';
    return h;
  }catch(e){ return 'direct / none'; }
}

const tally = (rows, pick) => {
  const counts = new Map();
  rows.forEach(r => {
    const k = pick(r) || 'unknown';
    counts.set(k, (counts.get(k) || 0) + 1);
  });
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
};

module.exports = async (req, res) => {
  if(req.method !== 'GET'){
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    return res.end();
  }

  const expected = process.env.ADMIN_KEY || '';
  if(!expected){
    return sendJson(res, 503, {
      error: 'not_configured',
      message: 'ADMIN_KEY is not set on the server, so this endpoint stays closed. Set it in the Vercel project environment variables and redeploy.'
    });
  }

  if(!keysMatch(req.headers['x-admin-key'], expected)){
    return sendJson(res, 401, { error: 'unauthorized', message: 'Wrong or missing admin key.' });
  }

  const cfg = redisConfig();
  if(!cfg){
    return sendJson(res, 503, {
      error: 'no_storage',
      message: 'No Redis/KV credentials found. Add the Upstash integration to this Vercel project (see ANALYTICS.md) and redeploy.'
    });
  }

  let rows = [];
  try{
    const out = await pipeline(cfg, [['LRANGE', VISITS_KEY, '0', '-1']]);
    const raw = (out && out[0] && out[0].result) || [];
    rows = raw.map(s => { try{ return JSON.parse(s); }catch(e){ return null; } }).filter(Boolean);
  }catch(e){
    return sendJson(res, 502, { error: 'storage_unreachable', message: String(e.message || e) });
  }

  const selfHost = req.headers['x-forwarded-host'] || req.headers['host'] || '';
  const views = rows.filter(r => r.type === 'view');
  const logins = rows.filter(r => r.type === 'login');

  const byDayMap = new Map();
  rows.forEach(r => {
    const day = String(r.ts || '').slice(0, 10);
    if(!day) return;
    if(!byDayMap.has(day)) byDayMap.set(day, { day, views: 0, logins: 0 });
    byDayMap.get(day)[r.type === 'login' ? 'logins' : 'views']++;
  });
  const byDay = [...byDayMap.values()].sort((a, b) => a.day.localeCompare(b.day)).slice(-30);

  sendJson(res, 200, {
    generatedAt: new Date().toISOString(),
    totals: {
      events: rows.length,
      views: views.length,
      logins: logins.length,
      countries: new Set(rows.map(r => r.country).filter(Boolean)).size,
      accounts: new Set(logins.map(r => r.user).filter(Boolean)).size,
      activeDays: byDayMap.size,
      firstSeen: rows.length ? rows[rows.length - 1].ts : null,
      lastSeen: rows.length ? rows[0].ts : null,
      capped: rows.length >= 5000 // ring buffer full: older events have rolled off
    },
    byDay,
    byCountry: tally(rows, r => r.country),
    byCity: tally(rows.filter(r => r.city), r => (r.country ? `${r.city}, ${r.country}` : r.city)).slice(0, 15),
    byReferrer: tally(rows, r => refHost(r.ref, selfHost)).slice(0, 15),
    byBrowser: tally(rows, r => browserOf(r.ua)),
    byPlatform: tally(rows, r => platformOf(r.ua)),
    byLang: tally(rows.filter(r => r.lang), r => r.lang),
    byAccount: tally(logins.filter(r => r.user), r => r.user).slice(0, 20),
    recent: rows.slice(0, 60).map(r => ({
      ts: r.ts,
      type: r.type,
      user: r.user,
      lang: r.lang,
      place: [r.city, r.country].filter(Boolean).join(', ') || null,
      browser: browserOf(r.ua),
      platform: platformOf(r.ua),
      ref: refHost(r.ref, selfHost)
    }))
  });
};
