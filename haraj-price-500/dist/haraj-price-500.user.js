// ==UserScript==
// @name           jx-haraj-price-500
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-price-500
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-price-500/dist/haraj-price-500.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-price-500/dist/haraj-price-500.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){}const e=GM.info.script.name;const s=function(s=!1){const n=window.console,r=`[${e}]:`;return{log:n.log.bind(n,r),warn:n.warn.bind(n,r),error:n.error.bind(n,r),debug:s?n.log.bind(n,r):t}}(!0);function n(t){const e=t.filter(t=>{if(null===t.price)return!1;return!(Number(t.price.formattedPrice.replaceAll(",",""))>500)}),n=t.filter(t=>!e.includes(t));return s.debug({goodItems:e,badItems:n}),e}(async function(){const t=unsafeWindow.fetch;unsafeWindow.fetch=async(...e)=>{const s=e[1]?.body;if("string"==typeof s&&function(t){return t.includes('"variables":{"id":[')}(s))return t(...e);const r=e[0]instanceof Request?e[0].url:e[0].toString(),a=await t(...e),i=await a.text();if(r.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||r.startsWith("https://graphql.haraj.com.sa/?queryName=search&")){const t=JSON.parse(i);if("posts"in t.data){const e=t.data.posts.items;t.data.posts.items=n(e)}else{const e=t.data.search.items;t.data.search.items=n(e)}return new Response(JSON.stringify(t),{status:a.status,statusText:a.statusText,headers:a.headers})}return a}})().catch(t=>{var s;void 0!==(s=t.message)?window.alert(`[ ${e} ]\n\n${s}`):window.alert(`[ ${e} ]`)});
