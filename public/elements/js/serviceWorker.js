self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/home',
          '/elements/img/home.css',
          '/elements/img/general.css',
          '/home.js',
          '/elements/img/logo.png',
          '/elements/img/logo-192.png',

        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  