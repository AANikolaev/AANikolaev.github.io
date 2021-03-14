'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01119dfb10345ae18a2d2f2fa67f05e7",
"index.html": "c318083bb5e3ac9e29e338f4b0fd1bb4",
"/": "c318083bb5e3ac9e29e338f4b0fd1bb4",
"main.dart.js": "76e262f2e2d26e8bc3ab574e653537dc",
"favicon.png": "89236dab3ff7a76918da061c9baf0460",
"icons/Icon-192.png": "20221c06230f9b6be57aa16eb5d5eba0",
"icons/Icon-512.png": "0e403013fb0eca46ad1767cbb0e725b0",
"manifest.json": "1d056ae478d8cfd057c1b39e727b61e8",
".git/config": "ae120d0e43215cc8c2d9c0b4451a8250",
".git/objects/57/12a9bd21fa506bbc07ae65588796c283a16a63": "4062c945235d8127d62a300db63b9ac1",
".git/objects/03/60f7c33bdfc58c16bf73aa826f726813174628": "aba0752ee06a1dd981d494ad9bcbf185",
".git/objects/56/e5523a187f567078e902e9a7cafd9be205ad66": "96d7cbe30bf157cad4b42653a43243b4",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/02/81c1d3d6edd6d77de6f9acebf6cfa09dab1a97": "c9c8d4cab3d6f47057fd0f773d6ee881",
".git/objects/b4/f0ef7c6f446f718aa84e13d9976c0ef3b384e1": "67413fe16f481b4e0304396422d4c6d3",
".git/objects/a5/250e9246e9dd17c3217ff3f92affcf2de033cf": "d04e2fdf52e09cc2e6b5da37b27adf2b",
".git/objects/d6/b92bb38ad7ef257cea39ac4443abf10dedaba2": "d2dc7d190076beedcd6c3f7373a24fd1",
".git/objects/f3/3ee96216e473c4d8745f7c8b8e99356bad4cf6": "5c6218e01b20808a0ac1b6e735569467",
".git/objects/cf/d49bc175f3d34e044da745ca791eebbd5b2cfe": "28e38d0b7e9b0f5b14eaca1770f06315",
".git/objects/c6/f01a4d97565696e3a631f3154046414bc2a9a5": "c29d454888147d0367195fd46cd23705",
".git/objects/20/29afedd1a2459df1b578b9fc96a5e6b69ca84d": "2aa6a298372fb6d4e49f3046cd5d2913",
".git/objects/27/23d6b669cf068ed2c4da70156fe5722268aa9a": "892f782d3529098798c0b26cf427aef7",
".git/objects/pack/pack-4d37ae76add9f326b048b49a14ddf65ef5ec842f.pack": "c2493109a69b1c06d4893cee531d6285",
".git/objects/pack/pack-4d37ae76add9f326b048b49a14ddf65ef5ec842f.idx": "e86a549f041098baaabf2d5cfcba1536",
".git/objects/7b/015218ec9e504b340389242c5330d6c4f4ab88": "a2e2b830cba6bf0fe5371d2609debe1f",
".git/objects/00/9356fa18171772562d702e38e6dd6bdd172545": "00102f47bb7053338f95ff72dead4e62",
".git/objects/5c/362b42380ae6fc4cf185b6840d79860d24d92c": "f3ac00760df01cc470f06dc191a7b09e",
".git/objects/54/cd277ce1e084a6ab783b08372bbcf11c2fcf3d": "ef8654163fa43af5a9172a7b4eefcf12",
".git/objects/39/6e8e72a9c41a8a393f40a0aa9ce55619bd80c7": "8591078d20d8e2545e57d55f03964be9",
".git/objects/ba/ac79698fec2934c71ddfb1811b45800c1bec78": "31dcdae86a05c4a9448055e6504debf2",
".git/objects/b1/809fdf9cbf753a39219c9105b80c90b0fa627f": "173b96998f7dd8df5dd5e02bf1991e1a",
".git/objects/db/988688a539fd499e129c0a639fc9cbc4ac56d7": "56db52d72330cacce95634eaa9418e08",
".git/objects/a8/9af3ae6f42c041e6fea43322fd4f49a492c292": "d5cf7740bb233f289656012f68e9a7d9",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/2edc4566f3c04f78a3713b0fad088d99fd51dd": "c89dbe3ea98f1cb8a365f54653b21333",
".git/objects/f9/7c3a585b21ef638c767e387c8d3ca6ed636070": "72552a70490a8c0799c0660c5582b3b9",
".git/objects/f9/ed3d645c67f0b4ff30bbd231394f637a8ea2c4": "d3ae83fda9ef1b803e079ff3a86c2145",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0de2ad0db9f7215e57a05f4e3f172ece",
".git/logs/refs/heads/master": "0de2ad0db9f7215e57a05f4e3f172ece",
".git/logs/refs/remotes/origin/master": "bc0066e708ae9511adbf15bb4a96e93b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/master": "f6d3ad8bedd67c89ac85c135e79c51e4",
".git/refs/remotes/origin/master": "f6d3ad8bedd67c89ac85c135e79c51e4",
".git/index": "a012b4d50e710d2204aa5432e9f91ff2",
".git/COMMIT_EDITMSG": "175388b0347c53b5a93c13cc12efd711",
".git/FETCH_HEAD": "14c254f21604f26baafede41febbf223",
"assets/AssetManifest.json": "931aee4ba862da114ffcf00d8e48775f",
"assets/NOTICES": "c66d387927120febb8eb85bfc7352a61",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/avatar.png": "d1f37a0e786a14357e47829b945247da",
"assets/assets/images/icons8-github-100.png": "c32eeecb603b5442bdf45bd65a0b8fd1",
"assets/assets/images/icons8-twitter-100.png": "19717d1381e1a7f72151674a7bd89f95",
"assets/assets/images/icons8-linkedin-100.png": "335f50cee53cf4e40e93fc9ba6b47fa5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
