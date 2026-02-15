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

function t(){}const s=GM.info.script.name;const n=function(n=!1){const e=window.console,a=`[${s}]:`;return{log:e.log.bind(e,a),warn:e.warn.bind(e,a),error:e.error.bind(e,a),debug:n?e.log.bind(e,a):t}}(!0);function e(t){const s=t.filter(t=>t.tags.includes("حراج الأجهزة")),e=t.filter(t=>!s.includes(t));return n.debug({goodItems:s,badItems:e}),s}(async function(){const t=unsafeWindow.fetch;unsafeWindow.fetch=async(...s)=>{const n=s[1]?.body;if("string"==typeof n&&function(t){return t.includes('"variables":{"id":[')}(n))return t(...s);const a=s[0]instanceof Request?s[0].url:s[0].toString(),r=await t(...s),o=await r.text();if(a.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||a.startsWith("https://graphql.haraj.com.sa/?queryName=search&")){const t=JSON.parse(o);if("posts"in t.data){const s=t.data.posts.items;t.data.posts.items=e(s)}else{const s=t.data.search.items;t.data.search.items=e(s)}return new Response(JSON.stringify(t),{status:r.status,statusText:r.statusText,headers:r.headers})}return r}})().catch(t=>{var n;void 0!==(n=t.message)?window.alert(`[ ${s} ]\n\n${n}`):window.alert(`[ ${s} ]`)});
