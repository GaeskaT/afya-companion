/* Afya Companion offline shell -------------------------------------------------
   People open this app in waiting rooms, wards and rural clinics where the
   signal drops. Strategy:
     - navigations: network first, fall back to cache, then to /offline
     - static assets: stale-while-revalidate
     - anything under /api: never cached
--------------------------------------------------------------------------- */

const VERSION = "cc-v1";
const SHELL = `${VERSION}-shell`;
const RUNTIME = `${VERSION}-runtime`;

/* Everything is scope-relative so the same worker serves both a root
   deployment and a subpath one (GitHub Pages at /carecircle/). */
const BASE = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const OFFLINE = `${BASE}/offline`;

const PRECACHE = [
  `${BASE}/`,
  OFFLINE,
  `${BASE}/care/crisis`,
  `${BASE}/tools/breathing`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((cache) => cache.addAll(PRECACHE))
      .catch(() => undefined)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => !k.startsWith(VERSION))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith(`${BASE}/api/`)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match(OFFLINE)),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(RUNTIME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    }),
  );
});
