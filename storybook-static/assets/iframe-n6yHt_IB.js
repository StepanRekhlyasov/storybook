import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},m={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in m)return;m[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!l)for(let u=t.length-1;u>=0;u--){const a=t[u];if(a.href===r&&(!c||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":d,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((u,a)=>{n.addEventListener("load",u),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,O=f({page:"preview"});R.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const w={"./src/stories/Auth.stories.ts":async()=>o(()=>import("./Auth.stories-q5bJYLco.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./src/stories/Button.stories.ts":async()=>o(()=>import("./Button.stories-XCitARFC.js"),__vite__mapDeps([4,2,1]),import.meta.url)};async function P(_){return w[_]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-4xtVrFsz.js"),__vite__mapDeps([5,6,1]),import.meta.url),o(()=>import("./entry-preview-docs-73odvUEE.js"),__vite__mapDeps([7,8,9,1,10]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([11,12]),import.meta.url),o(()=>import("./preview-oqiSrpCd.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([13,14]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([15,14]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([16,14]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([17,9]),import.meta.url),o(()=>import("./preview-Aqzj_zmV.js"),__vite__mapDeps([18,6,1,19,9,10,20]),import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Auth.stories-q5bJYLco.js","./vue.esm-bundler-murK3Aya.js","./button-yAvEuxp7.js","./Auth-ANHNDlJE.css","./Button.stories-XCitARFC.js","./entry-preview-4xtVrFsz.js","./chunk-UXHY756F-OOFGDGLn.js","./entry-preview-docs-73odvUEE.js","./index-lXit2Ocd.js","./_commonjsHelpers-5-cIlDoe.js","./lodash-MJs2EnKU.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-OnO0tzRj.js","./index-PPLHz8o0.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js","./preview-Aqzj_zmV.js","./extends-dGVwEr9R.js","./preview-p6zr1amg.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}