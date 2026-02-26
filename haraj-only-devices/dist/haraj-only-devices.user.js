// ==UserScript==
// @name           jx-haraj-only-devices
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @match          https://haraj.com.sa/*
// @run-at         document-start
// @noframes
// @compatible     chrome Violentmonkey
// @compatible     edge Violentmonkey
// @supportURL     https://github.com/JenieX/user-js-work/issues
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-only-devices
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-only-devices/dist/haraj-only-devices.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-only-devices/dist/haraj-only-devices.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){}const e=GM.info.script.name;const s=function(s=!1){const a=window.console,n=`[${e}]:`;return{log:a.log.bind(a,n),warn:a.warn.bind(a,n),error:a.error.bind(a,n),debug:s?a.log.bind(a,n):t}}(!0);function a(t){const e=t.filter(t=>t.tags.includes("حراج الأجهزة")),a=t.filter(t=>!e.includes(t));return s.debug({goodItems:e,badItems:a}),e}(async function(){!function(t,e=document.documentElement){const s=document.createElement("style");s.setAttribute("type","text/css"),s.textContent=t,e.append(s)}(".box-border.w-full.relative>.bg-background-card[data-test-postid^=bad-]{opacity:0;transition:opacity .3s ease-in-out;will-change:opacity}.box-border.w-full.relative>.bg-background-card[data-test-postid^=bad-]:hover{opacity:1}");const t=unsafeWindow.fetch;unsafeWindow.fetch=async(...e)=>{if(!location.href.startsWith("https://haraj.com.sa/tags/")&&!location.href.startsWith("https://haraj.com.sa/search/"))return t(...e);const s=e[1]?.body;if("string"==typeof s&&function(t){return t.includes('"variables":{"id":[')}(s))return t(...e);const n=e[0]instanceof Request?e[0].url:e[0].toString(),o=await t(...e);if(n.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||n.startsWith("https://graphql.haraj.com.sa/?queryName=search&")){const t=await o.text(),e=JSON.parse(t);if("posts"in e.data){const t=e.data.posts.items;e.data.posts.items=a(t)}else{const t=e.data.search.items;e.data.search.items=a(t)}return new Response(JSON.stringify(e),{status:o.status,statusText:o.statusText,headers:o.headers})}return o}})().catch(t=>{var s;void 0!==(s=t.message)?window.alert(`[ ${e} ]\n\n${s}`):window.alert(`[ ${e} ]`)});
