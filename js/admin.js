// Dashboard front-end. Holds no secrets and enforces nothing -- the admin key is only
// carried to /api/stats, which decides whether to answer. Hiding this page would add no
// security, which is why it is a plain public URL with a server-side gate behind it.
//
// The key is kept in sessionStorage (cleared when the tab closes), never localStorage.

const KEY_STORE = 'js-course-admin-key';

const el = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function getKey(){
  try{ return sessionStorage.getItem(KEY_STORE) || ''; }catch(e){ return ''; }
}
function setKey(k){
  try{ k ? sessionStorage.setItem(KEY_STORE, k) : sessionStorage.removeItem(KEY_STORE); }catch(e){}
}

function unlock(e){
  e.preventDefault();
  const k = el('key').value.trim();
  if(!k){ el('gateerr').textContent = 'Enter the key.'; return false; }
  setKey(k);
  load();
  return false;
}

function lock(){
  setKey('');
  el('key').value = '';
  el('dash').style.display = 'none';
  el('gate').style.display = 'flex';
  return false;
}

const fmtTime = iso => {
  if(!iso) return '—';
  const d = new Date(iso);
  return isNaN(d) ? '—' : d.toLocaleString();
};

function ago(iso){
  if(!iso) return '';
  const secs = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if(!isFinite(secs) || secs < 0) return '';
  const steps = [[60, 'second'], [60, 'minute'], [24, 'hour'], [365, 'day']];
  let v = secs, unit = 'second';
  for(const [size, name] of steps){
    if(v < size){ unit = name; break; }
    v = Math.floor(v / size);
    unit = name;
  }
  if(unit === 'second' && v < 45) return 'just now';
  return `${v} ${unit}${v === 1 ? '' : 's'} ago`;
}

function tile(label, value, hint){
  return `<div class="tile">
    <div class="tval">${esc(value)}</div>
    <div class="tlabel">${esc(label)}</div>
    ${hint ? `<div class="thint">${esc(hint)}</div>` : ''}
  </div>`;
}

// Horizontal bars, each scaled against the largest count in its own list.
function barPanel(title, rows, opts){
  const o = opts || {};
  if(!rows || !rows.length){
    return `<div class="panel"><h3>${esc(title)}</h3><div class="empty">No data yet</div></div>`;
  }
  const max = Math.max(...rows.map(r => r.count));
  const body = rows.map(r => `
    <div class="bar">
      <div class="barlabel" title="${esc(r.label)}">${esc(o.map ? o.map(r.label) : r.label)}</div>
      <div class="bartrack"><div class="barfill" style="width:${(r.count / max * 100).toFixed(1)}%"></div></div>
      <div class="barnum">${r.count}</div>
    </div>`).join('');
  return `<div class="panel"><h3>${esc(title)}</h3>${body}</div>`;
}

const LANG_NAMES = { en: 'English', bn: 'বাংলা', hi: 'हिन्दी' };

function render(d){
  const t = d.totals;
  el('freshness').textContent =
    `${t.events} events · last activity ${t.lastSeen ? ago(t.lastSeen) : 'never'} · refreshed ${fmtTime(d.generatedAt)}`;

  el('notice').innerHTML = t.events === 0
    ? `<div class="notice">No visits recorded yet. Open the course in another browser or share the link, then refresh this page.</div>`
    : (t.capped ? `<div class="notice">The 5,000-event buffer is full, so older events have rolled off. Totals below cover the retained window only.</div>` : '');

  el('tiles').innerHTML = [
    tile('Page views', t.views),
    tile('Logins', t.logins, `${t.accounts} distinct account${t.accounts === 1 ? '' : 's'}`),
    tile('Countries', t.countries),
    tile('Active days', t.activeDays),
    tile('First seen', t.firstSeen ? fmtTime(t.firstSeen).split(',')[0] : '—'),
    tile('Last seen', t.lastSeen ? ago(t.lastSeen) : '—')
  ].join('');

  const dayRows = (d.byDay || []).map(x => ({ label: x.day, count: x.views + x.logins }));
  el('panels').innerHTML = [
    barPanel('By country', d.byCountry),
    barPanel('By city', d.byCity),
    barPanel('Traffic source', d.byReferrer),
    barPanel('Per day', dayRows),
    barPanel('Browser', d.byBrowser),
    barPanel('Platform', d.byPlatform),
    barPanel('Language chosen', d.byLang, { map: k => LANG_NAMES[k] || k }),
    barPanel('Most active accounts', d.byAccount)
  ].join('');

  const rows = d.recent || [];
  el('recent').innerHTML = rows.length
    ? `<thead><tr><th>When</th><th>Event</th><th>Account</th><th>Where</th><th>Browser</th><th>Source</th></tr></thead><tbody>` +
      rows.map(r => `<tr>
        <td>${esc(fmtTime(r.ts))}</td>
        <td><span class="badge ${r.type === 'login' ? 'login' : ''}">${esc(r.type)}</span></td>
        <td>${esc(r.user || '—')}</td>
        <td>${esc(r.place || '—')}</td>
        <td>${esc(r.browser)} · ${esc(r.platform)}</td>
        <td>${esc(r.ref)}</td>
      </tr>`).join('') + '</tbody>'
    : `<tbody><tr><td class="empty">Nothing recorded yet</td></tr></tbody>`;

  el('gate').style.display = 'none';
  el('dash').style.display = 'block';
}

async function load(){
  const key = getKey();
  if(!key){ return lock(); }

  el('gateerr').textContent = 'Checking…';
  try{
    const res = await fetch('/api/stats', { headers: { 'x-admin-key': key }, cache: 'no-store' });

    if(res.status === 401){
      setKey('');
      el('gateerr').textContent = 'Wrong key.';
      el('dash').style.display = 'none';
      el('gate').style.display = 'flex';
      return;
    }

    let data = null;
    try{ data = await res.json(); }catch(e){ data = null; }

    if(!res.ok){
      // 503/502 carry a setup message worth showing verbatim rather than "failed".
      el('gateerr').textContent = (data && data.message) || `Server returned ${res.status}.`;
      el('dash').style.display = 'none';
      el('gate').style.display = 'flex';
      return;
    }

    el('gateerr').textContent = '';
    render(data);
  }catch(err){
    el('gateerr').textContent =
      `Could not reach /api/stats (${err.message}). If you opened this file from disk, the API only exists on the deployed site.`;
    el('dash').style.display = 'none';
    el('gate').style.display = 'flex';
  }
}

// Resume straight into the dashboard if the tab already holds a key.
if(getKey()){
  load();
}else{
  el('gate').style.display = 'flex';
}
