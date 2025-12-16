// ==UserScript==
// @name           jx-haraj-sticky-header
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-sticky-header
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-sticky-header/dist/haraj-sticky-header.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-sticky-header/dist/haraj-sticky-header.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

const t=GM.info.script.name;!function(t,e=document.documentElement){const n=document.createElement("style");n.setAttribute("type","text/css"),n.textContent=t,e.append(n)}(".bg-background-card.mx-auto.w-full.items-center{display:none}body.sticky>.bg-primary,body>.bg-primary{background-color:rgba(16,115,192,.95);box-shadow:0 2px 6px rgba(0,0,0,.15);position:fixed;top:0;z-index:999}"),async function(){await async function(t){return new Promise(e=>{"complete"!==document.readyState?!0!==t?document.addEventListener("DOMContentLoaded",()=>e()):window.addEventListener("load",()=>e()):e()})}();const t=function(t,e){const n=(e??document).querySelector(function(t,e=","){return function(t){return"string"==typeof t}(t)?t:t.join(e)}(t));if(null===n)throw new Error(`Could not find the element with the selector ${t}`);return n}("body > .bg-primary").clientHeight;document.body.style.setProperty("margin-top",`${t}px`)}().catch(e=>{var n;void 0!==(n=e.message)?window.alert(`[ ${t} ]\n\n${n}`):window.alert(`[ ${t} ]`)});
