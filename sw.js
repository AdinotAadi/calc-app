if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let f={};const o=e=>r(e,n),t={module:{uri:n},exports:f,require:o};s[n]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-c43bc35f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"4b76434aeb881619d946df79ff0abff1"},{url:"manifest.json",revision:"7f87e486b69b5089f6eabfe94d479bb7"},{url:"README.md",revision:"f1fbfb84bf58cd590ae741e442541ff0"},{url:"src/app.js",revision:"e08752fb41910851b0f47b6f138cf38d"},{url:"src/assets/icon-192.png",revision:"75adc28cf1fc8361d42223449ba4dc26"},{url:"src/assets/icon-384.png",revision:"a6b835302e63588a265cb4e59c74a40a"},{url:"src/assets/icon-512.png",revision:"0e6ac5b90a70b8986de9497ea9277b5c"},{url:"src/styles.css",revision:"41ea6b5562246c2a43ed4a60ec64fc0a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
