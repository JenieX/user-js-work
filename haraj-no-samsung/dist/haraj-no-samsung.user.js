// ==UserScript==
// @name           jx-haraj-no-samsung
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-no-samsung
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-no-samsung/dist/haraj-no-samsung.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-no-samsung/dist/haraj-no-samsung.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){}const s=GM.info.script.name;const a=function(a=!1){const e=window.console,n=`[${s}]:`;return{log:e.log.bind(e,n),warn:e.warn.bind(e,n),error:e.error.bind(e,n),debug:a?e.log.bind(e,n):t}}(!0);function e(t){const s=t.filter(({title:t})=>!t.includes("سامسونق")&&(!t.includes("سامسونج")&&!t.includes("جالكسي"))),e=t.filter(t=>!s.includes(t));return a.debug({goodItems:s,badItems:e}),s}(async function(){const t=unsafeWindow.fetch;unsafeWindow.fetch=async(...s)=>{if(!location.href.startsWith("https://haraj.com.sa/tags/")&&!location.href.startsWith("https://haraj.com.sa/search/"))return t(...s);const a=s[1]?.body;if("string"==typeof a&&function(t){return t.includes('"variables":{"id":[')}(a))return t(...s);const n=s[0]instanceof Request?s[0].url:s[0].toString(),r=await t(...s);if(n.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||n.startsWith("https://graphql.haraj.com.sa/?queryName=search&")){const t=await r.text(),s=JSON.parse(t);if("posts"in s.data){const t=s.data.posts.items;s.data.posts.items=e(t)}else{const t=s.data.search.items;s.data.search.items=e(t)}return new Response(JSON.stringify(s),{status:r.status,statusText:r.statusText,headers:r.headers})}return r}})().catch(t=>{var a;void 0!==(a=t.message)?window.alert(`[ ${s} ]\n\n${a}`):window.alert(`[ ${s} ]`)});
