if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>a(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/221-43060a53df106202fd48.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/409-f5d6c02960735983aa3e.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/422-253e8f5fb85a06fc2634.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/443-a984747f032853db47c8.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/636-29a1c9479685c97c7d87.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/728-c676d0b271f4a2ab49a6.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/782-2b1196751ac0c96358d6.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/main-4f5cd88fa5bdeefbb1f6.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/401-8fb2e05f8c403a8e777f.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/404-d8a5d8778ff8ee9eb3f8.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/500-a92cc2853ffb359baaf6.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/_app-f39b94da480649d0d512.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/account/%5Buser%5D-eb6531b0485b3d8520fd.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/auth/success-abbbd2dc69dff94f40e8.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/ayuda-6ca6d15aeebff1b43334.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/escanear-qr-8fd45b8a97b9313c8f2f.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/features-c1d5c58ded46898085dc.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/folders-a593decfa17e02116bda.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/folders/%5Bfolder%5D-28f07687c53a92d7b7ab.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/index-c175b823dd67d4861665.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/links-ccd76c216c3c5f2aacc9.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/links/%5Blink%5D-46772495e222a4b3fc0b.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/login-d08fb7c0bfb3bebd727a.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/privacidad-a9a6f1d8075213dbda2b.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/privacidad-en-ef87a585405f0acb85df.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/recuperar-password-5d29f67008093b85d9c5.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/reportar-9692ede7a1ef2e6b31a3.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/pages/signup-3b3998459ab36cce3751.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/chunks/webpack-0e3c274fd8419109d37b.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/cnIRvqAHzpQoa95eDpKP9/_buildManifest.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/cnIRvqAHzpQoa95eDpKP9/_ssgManifest.js",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/css/0cb4dd0e61c6937d502e.css",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/css/2a515b6568231955e122.css",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/css/7fef526c5c44a5ed4ffd.css",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/css/ddcef8668296e4332d39.css",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/css/e5cbcf282edfb8a553c6.css",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-brands-400.330e879afe4a0abb35f235e29be3084f.ttf",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-brands-400.5f63cb7f47b6ea89773b43a6e687e5a5.woff",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-brands-400.6e63bd22128f27b83f228bf5ef541156.woff2",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-brands-400.98f20b9ec79b2fee02a300f4b716629f.eot",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-brands-400.991c1c761fc31f9c3252dbfb2a22fd7a.svg",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-regular-400.2c154b0f8c0d8d1661627d1ddb317b12.woff2",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-regular-400.62a07ffeac77696f17ef438f49ce6790.eot",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-regular-400.ac2367644e559de4ff330fbb7c273e70.ttf",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-regular-400.ea5a41ec4a24ce93298ee053b6357e18.woff",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-regular-400.f3187c7462849ed261a89dc27e7a4733.svg",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-solid-900.0454203f26b33fc02e2b686b317aab3d.svg",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-solid-900.3eb06c702e27fb110194f5a16c45cb8e.woff2",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-solid-900.6606667d9800a27eb8b5f61ccb66d510.eot",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-solid-900.915a0b79c22a1c1f64da9e0a90a12f02.ttf",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/_next/static/media/fa-solid-900.f4f93856730733912b1e06ad64c0baf7.woff",revision:"cnIRvqAHzpQoa95eDpKP9"},{url:"/assets/gifs/app/gif-speed.gif",revision:"73d2a841fe864a3c8091de60360d511b"},{url:"/assets/icons/facebook (1).png",revision:"021ada146ffb7c1753557ff29618d04c"},{url:"/assets/icons/facebook (2).png",revision:"61a96c78b48018b48fbb6254a93b93f8"},{url:"/assets/icons/facebook.png",revision:"8f5ce27564945d2c9a10ef827549a78c"},{url:"/assets/icons/github.png",revision:"b37b05a713d8eebcbb475119e587859b"},{url:"/assets/icons/github2.png",revision:"db110fd167f389134afac9db37d20e82"},{url:"/assets/icons/github3.png",revision:"a29dc3691124638b000809a7696281d5"},{url:"/assets/icons/google.png",revision:"ca2f7db280e9c773e341589a81c15082"},{url:"/assets/icons/twitter.png",revision:"8f35a40403a84631c4125c4f1859c7a6"},{url:"/assets/icons/twitter2.png",revision:"88aa93c7d7d0b4f3bb45a0c7ad8f9a4b"},{url:"/assets/icons/twitter3.png",revision:"f29106f6f82f24c14018283fd2e3a917"},{url:"/assets/img/landing-playa-screen.png",revision:"c5c68de765529e8812730124496414c8"},{url:"/assets/img/landing-playa.jpg",revision:"fe1d2c6f909e33ce0ef8f68bb6e22749"},{url:"/assets/img/landing-playa2 (1).jpg",revision:"f77d335164c473b4282f580373a9e8c3"},{url:"/assets/img/landing-playa2.jpg",revision:"a12a840c86e5638ef593138a8f1d7f51"},{url:"/assets/img/vantes.jpg",revision:"98fb0adf6816ef552034e4dc12ca5457"},{url:"/assets/logo-icon/apple-touch-icon.png",revision:"32a24375e02b546e7a92c0b2c6b4b6d3"},{url:"/assets/logo-icon/favicon-16x16.png",revision:"342252c87f541e085cd496885079cdea"},{url:"/assets/logo-icon/favicon-32x32.png",revision:"e9adbf1e62e41399d23473b49009830f"},{url:"/assets/logo-icon/icon-192x192.png",revision:"6d5f8b1e9c87ae5cd482a2ac1ab3ee43"},{url:"/assets/logo-icon/icon-512x512.png",revision:"4f048f97df99cf97deac5bcfbeb47074"},{url:"/assets/logo-icon/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/favicon-default.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/favicon.ico",revision:"c7c272b37cfb3bc07f08bc4ba164b525"},{url:"/favicon2.ico",revision:"20416088699b0dbd9ff2a488c754426a"},{url:"/manifest.json",revision:"7a3148a6bd2a0179069a1e916696aef3"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
