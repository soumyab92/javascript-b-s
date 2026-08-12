# Seeing who opens this site

The wiring is already in place ([js/analytics.js](js/analytics.js)), but it stays switched
off until you do two things: **host the site** and **paste a token**. Until then it sends
nothing — which is why opening `index.html` from `D:\` still works normally and logs no errors.

## Why hosting comes first

Right now the page loads over `file://`. Nobody else can reach `D:\Work Book\...`, so there
are no visitors to count. Analytics only becomes meaningful once the page has a URL.

Two things also worth knowing up front, so the numbers don't disappoint you:

- **You get places, not people.** Country and (roughly) city from IP, plus referrer, browser,
  OS, and device. No names, no emails, no street addresses. "Who" is not something these tools
  can tell you, by design.
- **The privacy gate is the provider's login, not the app's.** The course's own login screen
  cannot protect a dashboard — all its code ships to the browser. Keeping the stats private
  works because the provider's server refuses to hand them to anyone who isn't signed in
  as you.

---

## Step 1 — Put the site online

Any static host works. Pick one:

### GitHub Pages (free; your `javascript-b-s` repo is already halfway there)

```bash
cd "d:/Work Book/2026/Aug/12.08.26/learn js"
git init
git add .
git commit -m "JavaScript course site"
git branch -M main
git remote add origin https://github.com/<you>/javascript-b-s.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: `main`, folder `/ (root)` → Save**.
A minute later it is live at `https://<you>.github.io/javascript-b-s/`.

### Netlify or Vercel (free)

Drag the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Done —
no repo, no build step. Vercel works the same way via `vercel --prod`.

All three serve plain static files, which is exactly what this project is. No build needed.

---

## Step 2 — Get a token

Pick **one** provider. Both are free and neither sets cookies, so neither normally requires
a cookie banner.

### Option A — Cloudflare Web Analytics (recommended)

Free, unlimited, no cookies, no fingerprinting. Works on any host — you do **not** need your
domain on Cloudflare.

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) → **Analytics & Logs → Web Analytics**
2. **Add a site**, enter your hostname (e.g. `<you>.github.io`)
3. Copy the **site token** from the snippet it shows you

Shows: visits, page views, top pages, referrers, countries, browsers, OS, device type.

### Option B — GoatCounter

Simpler and lighter; free for personal use.

1. Create a site at [goatcounter.com](https://www.goatcounter.com) — you pick a subdomain
2. Your endpoint is `https://<yourcode>.goatcounter.com/count`

Shows: page views, referrers, countries, browsers, screen sizes.

---

## Step 3 — Paste it in

Edit [js/analytics.js](js/analytics.js) — only these two lines change:

```js
const ANALYTICS = {
  provider: 'cloudflare',                  // or 'goatcounter'
  token: '0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d' // <-- your token / endpoint
};
```

For GoatCounter, `token` is the whole URL:

```js
const ANALYTICS = {
  provider: 'goatcounter',
  token: 'https://yourcode.goatcounter.com/count'
};
```

Commit, push, and open the live URL in a browser. Your own visit should appear on the
provider's dashboard within a minute or two.

Set `provider: ''` at any time to switch tracking off completely.

---

## Verifying it works

1. Open the **live URL** (not the local file) with devtools → Network
2. Look for a request to `cloudflareinsights.com` or `gc.zgo.at`
3. If it is missing, check in order: token actually pasted? URL is `https://` and not
   `file://`? An ad blocker on your own browser? (Blockers hide *your* visit, not other
   people's.)

## If you later want the dashboard inside the app

That needs a backend — a serverless function writing visits to a database, and an
`admin.html` whose data the *server* refuses to send without a secret. That is the only way
to also record which course account someone signed in as, since the anonymous providers
above never see it. Ask and I can build it; it is a real project, not a snippet.
