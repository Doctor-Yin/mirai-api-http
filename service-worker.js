/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "302dc3060575a8b8075af8c9b42e1f4f"
  },
  {
    "url": "API.html",
    "revision": "ddd742103b8c04cbbe3178f818c27c5f"
  },
  {
    "url": "assets/css/0.styles.d298e7d4.css",
    "revision": "a9f716797a39868a2c924dbd8700c426"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.9d2758e9.js",
    "revision": "75eff01a47196549f3906c3809a1cc54"
  },
  {
    "url": "assets/js/11.36d9e40a.js",
    "revision": "b1246b982625f6cb4bedbed2d568c8a4"
  },
  {
    "url": "assets/js/12.d2794380.js",
    "revision": "8553107168d8cc28351d7933d5e85bee"
  },
  {
    "url": "assets/js/2.eba207a4.js",
    "revision": "6188e751d9ea0a607e2c6d0e1ac2d1b1"
  },
  {
    "url": "assets/js/3.1b65837f.js",
    "revision": "fbf58b9ed28208c69a0dc9c6046051fb"
  },
  {
    "url": "assets/js/4.79e06109.js",
    "revision": "d3769e05c7a0efdfebe2179e2bb6e3f0"
  },
  {
    "url": "assets/js/5.ca660288.js",
    "revision": "d12cfe72b062e33b2e1f7293f7169cde"
  },
  {
    "url": "assets/js/6.73590551.js",
    "revision": "6e13c85755c0c9f1dbf8b04476bf8b7b"
  },
  {
    "url": "assets/js/7.017fe42c.js",
    "revision": "8e0ff14d7a8d14848bd51ff144b7e581"
  },
  {
    "url": "assets/js/8.4614edb7.js",
    "revision": "810d737eb5b49e55ef8c20117c81965e"
  },
  {
    "url": "assets/js/9.a50c648b.js",
    "revision": "39c464610dfeea2a7fb8ccf9255a5cba"
  },
  {
    "url": "assets/js/app.b335ed6c.js",
    "revision": "18c72b7662839efc08c513e93daba59f"
  },
  {
    "url": "EventType.html",
    "revision": "c22e012757014dae26a7dd2152bf26b9"
  },
  {
    "url": "Heartbeat.html",
    "revision": "d4ca391a8febf0f46bd48f8b552a6a23"
  },
  {
    "url": "index.html",
    "revision": "7e29384f850c339e9032d23e2da6a609"
  },
  {
    "url": "MessageType.html",
    "revision": "763472f74492c37291abf259e8f5d757"
  },
  {
    "url": "Report.html",
    "revision": "63ae10fb97e1d855979c55ae525f25d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
