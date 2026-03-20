self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("Budget Tracker-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
