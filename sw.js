// install service worker
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-cache-name-02')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/script.js',
                    '/db.js',
                    '/manifest.json',
                    '/styles.css',
                    '/taskicon_400x400.png',
                    '/dexie.js',
                    '/favicon.ico',
                    '/dexie.js.map',
                ])
            })
    );
    return self.clients.claim();
});

// activat service worker
self.addEventListener('activate', function (event) {
    console.log('Service worker activated', event);
})

// return cached response
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                return res;
            })
    );
});
