// Shared helpers for the /api functions.
// Vercel excludes files starting with "_" from routing, so this is not an endpoint.

const crypto = require('crypto');

const VISITS_KEY = 'visits';
const MAX_EVENTS = 5000; // ring buffer -- oldest events fall off the end

// Accepts either naming scheme: Vercel KV (legacy) or the Upstash marketplace integration.
function redisConfig(){
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if(!url || !token) return null;
  return { url: String(url).replace(/\/+$/, ''), token: String(token) };
}

// Upstash exposes Redis over HTTPS, so no client library and no dependencies are needed.
async function pipeline(cfg, commands){
  const res = await fetch(`${cfg.url}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${cfg.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands)
  });
  if(!res.ok) throw new Error(`redis responded ${res.status}`);
  return res.json();
}

// Constant-time compare so the admin key can't be guessed a character at a time.
function keysMatch(given, expected){
  const a = Buffer.from(String(given || ''));
  const b = Buffer.from(String(expected || ''));
  if(a.length === 0 || a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function sendJson(res, status, payload){
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

module.exports = { VISITS_KEY, MAX_EVENTS, redisConfig, pipeline, keysMatch, sendJson };
