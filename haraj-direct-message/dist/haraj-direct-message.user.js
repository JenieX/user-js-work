// ==UserScript==
// @name           jx-haraj-direct-message
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @include        https://haraj.com.sa/*
// @grant          none
// @run-at         document-start
// @noframes
// @compatible     chrome Violentmonkey
// @compatible     edge Violentmonkey
// @supportURL     https://github.com/JenieX/user-js-work/issues
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-direct-message
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-direct-message/dist/haraj-direct-message.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-direct-message/dist/haraj-direct-message.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function e(){}const t=GM.info.script.name;function n(e){void 0!==e?window.alert(`[ ${t} ]\n\n${e}`):window.alert(`[ ${t} ]`)}function o(e,t=document.documentElement){const n=document.createElement("style");return n.setAttribute("type","text/css"),n.textContent=e,t.append(n),n}const r=function(n=!1){const o=window.console,r=`[${t}]:`;return{log:o.log.bind(o,r),warn:o.warn.bind(o,r),error:o.error.bind(o,r),debug:n?o.log.bind(o,r):e}}(!0),s=new Set;let i=!1;function a(e,t){const n=function(...n){const o={args:n,result:void 0};return t?.before?.(o),o.result=e.apply(this,o.args),t?.after?.(o),o.result};return n.__fn=e,n}function d(){for(const e of s)e()}function c(e){return i||(i=!0,window.history.pushState=a(window.history.pushState,{after:d}),window.history.replaceState=a(window.history.replaceState,{after:d}),window.addEventListener("popstate",d)),s.add(e),()=>{s.delete(e)}}function l(e,t,n){e.parentElement.setAttribute("href",`/chat/${t}/#${n}`),e.style.setProperty("display","block")}(async function(){document.documentElement.insertAdjacentHTML("beforeend",'<a><span class="haraj-direct-message">محادثة</span></a>');const e=function(e,t){const n=(t??document).querySelector(function(e,t=","){return function(e){return"string"==typeof e}(e)?e:e.join(t)}(e));if(null===n)throw new Error(`Could not find the element with the selector ${e}`);return n}(".haraj-direct-message");e.style.setProperty("display","none"),o(".haraj-direct-message{background-color:#1b79c3;border-bottom-right-radius:10px;border-top-right-radius:10px;color:#fff;font-weight:600;left:0;outline:unset;position:fixed;z-index:999}"),GM.info.platform.mobile?o(".haraj-direct-message{bottom:12%;font-size:12px;padding:12px}"):o(".haraj-direct-message{bottom:11%;font-size:15px;padding:11px}"),function(){const e=Node.prototype.removeChild;Node.prototype.removeChild=function(t){return t instanceof HTMLElement&&t.matches(".haraj-direct-message")?(n("Removal of the `.haraj-direct-message` element was prevented."),r.error("Removal of the `.haraj-direct-message` element was prevented."),t):e.call(this,t)}}(),window.addEventListener("authorId",t=>{const{authorId:n,author:o}=t.detail;l(e,n,o)}),c(()=>{const t=location.pathname.split("/")[1].slice(2);if(/^\d{9}$/.test(t)){const n=function(){const e=sessionStorage.getItem("saved-posts");return null===e?{}:JSON.parse(e)}();if(void 0===n[t])e.style.setProperty("display","none");else{const{authorId:o,author:r}=n[t];l(e,o,r)}}else e.style.setProperty("display","none")})})().catch(e=>{n(e.message)});
