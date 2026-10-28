/* KitBench service worker: keeps the app and its libraries so it opens with no connection. */
const V = 'kitbench-v1';
const SHELL = [
  './', 'index.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'offline/libs/blockly/blockly_compressed.js', 'offline/libs/blockly/blocks_compressed.js', 'offline/libs/blockly/msg/en.js',
  'offline/libs/three/three.module.js', 'offline/libs/three/addons/controls/OrbitControls.js',
  'offline/libs/three/addons/environments/RoomEnvironment.js', 'offline/libs/three/addons/geometries/RoundedBoxGeometry.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  if (r.mode === 'navigate') {
    // pages: try the network first so updates arrive, fall back to the saved copy
    e.respondWith(fetch(r).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put('index.html', cp)); }
      return res;
    }).catch(() => caches.match('index.html').then(m => m || caches.match('./'))));
    return;
  }
  // everything else: saved copy first, then the network (and save what it returns)
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
    return res;
  })));
});
