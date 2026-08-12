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

---

# Part 2 — Your own dashboard at `/admin.html`

This is built and deployed alongside the site. Unlike Part 1 it shows **which course account**
signed in, because it is your own backend rather than an anonymous third party.

| File | Role |
|---|---|
| [admin.html](admin.html) + [js/admin.js](js/admin.js) | the dashboard page |
| [api/visit.js](api/visit.js) | records one event per page load |
| [api/stats.js](api/stats.js) | returns the aggregates — **only** with the right key |
| [api/_shared.js](api/_shared.js) | Redis helper (not a route; Vercel skips `_` files) |

It needs **two** things set in Vercel. Until both are set, `/admin.html` loads but shows a
setup message instead of data — it never silently opens up.

## Step A — Add a store (2 minutes)

Vercel functions are stateless, so visits need somewhere to live. Upstash Redis has a free
tier and speaks HTTPS, so no npm packages are involved.

1. Vercel project → **Storage** → **Marketplace** → **Upstash → Redis** → create
2. Connect it to the `javascript-b-s` project

That injects `KV_REST_API_URL` and `KV_REST_API_TOKEN` (or the `UPSTASH_REDIS_REST_*` pair)
automatically. Both naming schemes are accepted.

## Step B — Set your admin key

Vercel project → **Settings → Environment Variables** → add:

| Name | Value |
|---|---|
| `ADMIN_KEY` | a long random string you invent — this is your dashboard password |

Generate one with `node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"`.

**Redeploy** after adding variables — Vercel only picks them up on a new build.

Then open `https://javascript-b-s.vercel.app/admin.html` and paste the key.

## Why this is actually private

The key is checked inside `api/stats.js`, **on the server**. Without a matching
`x-admin-key` header the data is never sent, so it does not matter that `admin.html` is a
public URL — anyone can open the page, nobody else can fill it. The comparison is
constant-time, and if `ADMIN_KEY` is unset the endpoint refuses *everyone* rather than
defaulting to open.

Your key lives in `sessionStorage`, so closing the tab logs you out. Use **Lock** to clear it
immediately.

## What it shows

Page views, logins, distinct accounts, countries, active days, first/last seen; then
breakdowns by country, city, referrer, day, browser, platform, and chosen language; the
most active course accounts; and the 60 most recent events.

Location comes from headers Vercel attaches at the edge (`x-vercel-ip-country`,
`x-vercel-ip-city`), so there is no third-party geo lookup and no added latency.
**Raw IPs are never stored** — only country and city.

## Limits worth knowing

- **Newest 5,000 events only.** Older ones roll off; the dashboard warns when the buffer is full.
- **`/api/visit` is public**, as it must be — every visitor calls it. Inputs are length-clipped
  and type-checked, so someone could inflate your counts but not corrupt the store or inject
  markup (the dashboard escapes every field it renders).
- **Ad blockers hide some visits.** The ping goes to your own domain, so it survives more
  blockers than Part 1's third-party beacon, but not all of them.
- **Still not "who".** You get a course account name if the person signed in, plus a city.
  No names, no emails, no exact addresses.
- **Privacy duty.** City-level location tied to an account name is personal data under
  GDPR-style rules. If people other than you will use this, publish a short privacy note
  saying what you collect and why.

## Local development

`/api/*` does not exist over `file://`, so opening `admin.html` from disk shows a "could not
reach /api/stats" message. That is expected. To run the whole thing locally:

```bash
npm i -g vercel
vercel dev
```

`vercel dev` serves the static files and the functions together, and pulls your environment
variables down with `vercel env pull`.
