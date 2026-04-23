const CACHE = 'french-gcse-v7';

const FILES = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap',
  'https://fonts.gstatic.com/s/fraunces/v33/6NUu8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnDpToK8f5JmA.woff2',
  'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.woff2'
];

// Install: cache everything
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache the app shell first (must succeed)
      return cache.addAll(['./index.html']).then(() => {
        // Cache fonts best-effort (don't fail install if network is down)
        return Promise.allSettled(
          FILES.filter(f => f.startsWith('https')).map(f =>
            cache.add(new Request(f, { mode: 'cors' })).catch(() => {})
          )
        );
      });
    })
  );
  self.skipWaiting();
});

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for same-origin + Google Fonts, network-first otherwise
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isAppFile = url.origin === self.location.origin;
  const isFontFile = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

  if (isAppFile || isFontFile) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => {
          // If offline and not cached, return the app shell for navigation requests
          if (e.request.mode === 'navigate') return caches.match('./index.html');
        });
      })
    );
  }
});
