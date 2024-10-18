let cacheName = "my-first-pwa";
let filesToCache = ["/", "/index.html",
     "/css/style.css", "/js/main.js"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.opem(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    );
});


self.addEventListener("fetch", (e) => {
    e.respondWidth(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});