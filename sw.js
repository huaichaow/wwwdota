// Service worker: makes the game installable and playable offline against bots after one online visit.
// The boot loading screen fetches every asset, so that first visit fills the cache.
// - Pages: network first, cached copy offline (a new deploy is picked up on the next online load).
// - assets/* (Vite's hashed bundles): cache first; the hash changes when the content does.
// - Everything else under the game's asset folders: the cached copy at once, refreshed in the background.
// - Never cached: ws (online play), healthz, non-GET, cross-origin, Range requests (the streamed
//   <audio> music, which falls back to procedural music offline), and any non-200 or HTML response for
//   a file (the dev server answers a missing file with index.html; caching that would break it for good).
const VERSION = 'v2';
const PAGES = `pages-${VERSION}`;
const BUNDLES = `bundles-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
// Paths are relative to where this worker is served, so the game also works under a sub-path.
const BASE = new URL('./', self.location).pathname; // e.g. '/' or '/dota/'
const PAGE = new URL('./', self.location).href; // the one cache key for the SPA shell
const SHELL = ['./', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
// Path below BASE ('assets/x.js'), or null for one outside it.
const rel = (path) => (path.startsWith(BASE) ? path.slice(BASE.length) : null);

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(PAGES).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  const keep = new Set([PAGES, BUNDLES, ASSETS]);
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => !keep.has(k)).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const cacheable = (res) => res.ok && res.status === 200 && res.type === 'basic';
const isHtml = (res) => (res.headers.get('Content-Type') ?? '').includes('text/html');

async function networkFirstPage(req) {
  const cache = await caches.open(PAGES);
  try {
    const res = await fetch(req);
    if (cacheable(res)) cache.put(PAGE, res.clone()); // one page: every navigation is the SPA shell
    return res;
  } catch {
    return (await cache.match(PAGE)) ?? Response.error();
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(BUNDLES);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (cacheable(res) && !isHtml(res)) cache.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(e) {
  const cache = await caches.open(ASSETS);
  const hit = await cache.match(e.request);
  const refresh = fetch(e.request).then((res) => {
    if (cacheable(res) && !isHtml(res)) cache.put(e.request, res.clone());
    else if (res.status === 404) cache.delete(e.request); // asset removed from the server
    return res;
  });
  if (hit) {
    e.waitUntil(refresh.catch(() => {}));
    return hit;
  }
  return refresh;
}

const bypass = (r) => r === null || r.startsWith('ws') || r === 'healthz' || r === 'sw.js';

// The page sends the URLs it loaded before this worker took control (first visit); cache the files.
async function cacheUrls(urls) {
  const bundles = await caches.open(BUNDLES), assets = await caches.open(ASSETS);
  await Promise.all(urls.map(async (u) => {
    const url = new URL(u);
    const r = rel(url.pathname);
    // The page itself is cached by navigation; music/ is streamed with Range requests (never cached).
    if (url.origin !== self.location.origin || bypass(r) || r === '' || r.startsWith('music/')) return;
    const cache = r.startsWith('assets/') ? bundles : assets;
    if (await cache.match(url.href)) return;
    try {
      const res = await fetch(url.href);
      if (cacheable(res) && !isHtml(res)) await cache.put(url.href, res);
    } catch { /* offline again: skip */ }
  }));
}

self.addEventListener('message', (e) => {
  if (e.data?.type === 'cache-urls' && Array.isArray(e.data.urls)) e.waitUntil(cacheUrls(e.data.urls));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('Range')) return;
  const url = new URL(req.url);
  const r = rel(url.pathname);
  if (url.origin !== self.location.origin || bypass(r)) return;
  if (req.mode === 'navigate') e.respondWith(networkFirstPage(req));
  else if (r.startsWith('assets/')) e.respondWith(cacheFirst(req));
  else e.respondWith(staleWhileRevalidate(e));
});
