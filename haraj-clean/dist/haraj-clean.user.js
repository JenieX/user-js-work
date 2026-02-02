// ==UserScript==
// @name           jx-haraj-clean
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-clean
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-clean/dist/haraj-clean.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-clean/dist/haraj-clean.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

const n=GM.info.script.name;(async function(){!function(n,t=document.documentElement){const e=document.createElement("style");e.setAttribute("type","text/css"),e.textContent=n,t.append(e)}("body>.bg-background-card.w-full>div>.col-span-1{display:none}body>.bg-background-card.w-full>div>.col-span-full{grid-column:1/-1!important;margin-inline:auto;max-width:75vw;width:100%}")})().catch(t=>{var e;void 0!==(e=t.message)?window.alert(`[ ${n} ]\n\n${e}`):window.alert(`[ ${n} ]`)});
