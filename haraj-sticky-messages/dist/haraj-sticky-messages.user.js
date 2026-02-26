// ==UserScript==
// @name           jx-haraj-sticky-messages
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @match          https://haraj.com.sa/*
// @grant          none
// @run-at         document-start
// @noframes
// @compatible     chrome Violentmonkey
// @compatible     edge Violentmonkey
// @supportURL     https://github.com/JenieX/user-js-work/issues
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-sticky-messages
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-sticky-messages/dist/haraj-sticky-messages.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-sticky-messages/dist/haraj-sticky-messages.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){}const e=GM.info.script.name;const n=function(n=!1){const o=window.console,r=`[${e}]:`;return{log:o.log.bind(o,r),warn:o.warn.bind(o,r),error:o.error.bind(o,r),debug:n?o.log.bind(o,r):t}}(!0);!function(t,e=document.documentElement){const n=document.createElement("style");n.setAttribute("type","text/css"),n.textContent=t,e.append(n)}(".bg-background-card.mx-auto.w-full.items-center{display:none}.haraj-sticky{border-bottom-right-radius:10px;border-top-right-radius:10px;bottom:3%;color:#fff;font-weight:600;height:fit-content;left:0;outline:unset;position:fixed;width:fit-content;z-index:999}.haraj-sticky,.haraj-sticky:hover{background-color:#1b79c3}.haraj-sticky a[data-testid=chat-link]>span{padding:11px}.haraj-sticky a[data-testid=chat-link]>span>span{font-family:sans-serif;font-size:15px}"),async function(){const t=await async function(){return new Promise((t,e)=>{const n=new MutationObserver((e,n)=>{try{const e=function(t,e){const n=(e??document).querySelector(function(t,e=","){return function(t){return"string"==typeof t}(t)?t:t.join(e)}(t));if(null===n)throw new Error(`Could not find the element with the selector ${t}`);return n}('[data-testid="chat-link"]');t(e),n.disconnect()}catch{}});n.observe(document,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),setTimeout(()=>{n.disconnect(),e(new Error("Element is not found."))},5e3)})}(),e=t.parentElement;new IntersectionObserver(([t])=>{t.isIntersecting?e.classList.remove("haraj-sticky"):e.classList.add("haraj-sticky")},{threshold:0}).observe(t.closest(".bg-primary"))}().catch(t=>{n.error(t.message)});
