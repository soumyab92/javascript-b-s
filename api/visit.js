// POST /api/visit -- records one visit event.
//
// Called by every page load. It must never break the site, so every failure path ends in a
// quiet 204: no storage configured, malformed body, Redis down -- the visitor sees nothing.
//
// Location comes from headers Vercel adds to every request (x-vercel-ip-country / -city), so
// there is no third-party geo-IP lookup and no extra latency. Raw IPs are deliberately NOT
// stored -- country and city are enough to answer "where from" without keeping an identifier.

const { VISITS_KEY, MAX_EVENTS, redisConfig, pipeline } = require('./_shared');

const LANGS = ['en', 'bn', 'hi'];
const clip = (v, n) => (typeof v === 'string' && v ? v.slice(0, n) : null);

module.exports = async (req, res) => {
  if(req.method !== 'POST'){
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    return res.end();
  }

  const cfg = redisConfig();
  if(!cfg){
    res.statusCode = 204; // storage not wired up yet -- accept and discard
    return res.end();
  }

  // Vercel pre-parses JSON bodies, but be tolerant of a raw string too.
  let body = req.body;
  if(typeof body === 'string'){
    try{ body = JSON.parse(body); }catch(e){ body = {}; }
  }
  if(!body || typeof body !== 'object') body = {};

  const city = req.headers['x-vercel-ip-city'];
  const event = {
    ts: new Date().toISOString(),
    type: body.type === 'login' ? 'login' : 'view',
    user: clip(body.user, 40),
    lang: LANGS.includes(body.lang) ? body.lang : null,
    country: clip(req.headers['x-vercel-ip-country'], 8),
    region: clip(req.headers['x-vercel-ip-country-region'], 16),
    // Vercel percent-encodes city names ("New%20Delhi").
    city: city ? clip(decodeURIComponent(city), 60) : null,
    ref: clip(req.headers['referer'], 200),
    ua: clip(req.headers['user-agent'], 200)
  };

  try{
    await pipeline(cfg, [
      ['LPUSH', VISITS_KEY, JSON.stringify(event)],
      ['LTRIM', VISITS_KEY, '0', String(MAX_EVENTS - 1)]
    ]);
  }catch(e){
    // Swallowed on purpose: analytics failing must never surface to a learner.
  }

  res.statusCode = 204;
  res.end();
};
