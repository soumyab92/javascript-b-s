// Visitor analytics loader.
//
// Deliberately inert until BOTH conditions hold:
//   1. a real http(s) origin -- analytics beacons are rejected over file://, so opening
//      index.html straight from disk never sends anything and never logs a console error
//   2. a token has been filled into ANALYTICS below
//
// Nothing here can show you visitors on its own. It only forwards a page view to the
// provider; the dashboard lives on the provider's site, behind their login. That login
// is the part that makes the numbers yours alone -- see ANALYTICS.md for setup.
//
// What you will be able to see: page views, visits, referrer, country, browser, OS,
// device type. What you will NOT see: names, emails, exact addresses, or which course
// account someone used. These providers are deliberately anonymous.

const ANALYTICS = {
  // 'cloudflare' | 'goatcounter' | '' to disable entirely
  provider: 'cloudflare',

  // Cloudflare Web Analytics: the site token from the dashboard, e.g. '0a1b2c3d4e5f...'
  // GoatCounter: your full endpoint, e.g. 'https://yourcode.goatcounter.com/count'
  token: ''
};

(function loadAnalytics(){
  const token = (ANALYTICS.token || '').trim();
  const isHosted = location.protocol === 'http:' || location.protocol === 'https:';

  if(!token || !isHosted || !ANALYTICS.provider) return;

  const s = document.createElement('script');
  s.defer = true;

  if(ANALYTICS.provider === 'cloudflare'){
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token }));
  }else if(ANALYTICS.provider === 'goatcounter'){
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', token);
  }else{
    return; // unknown provider -- fail silently rather than loading something unexpected
  }

  document.head.appendChild(s);
})();
