// ==UserScript==
// @name           jx-haraj-clean-urls
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-clean-urls
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-clean-urls/dist/haraj-clean-urls.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-clean-urls/dist/haraj-clean-urls.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

const t=GM.info.script.name;function s(t){for(const s of t)s.URL=`${s.URL.split("/").shift()}/`}(async function(){const t=unsafeWindow.fetch;unsafeWindow.fetch=async(...a)=>{const e=a[0]instanceof Request?a[0].url:a[0].toString(),n=await t(...a),r=await n.text();if(e.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||e.startsWith("https://graphql.haraj.com.sa/?queryName=search&")){const t=JSON.parse(r);"posts"in t.data?s(t.data.posts.items):s(t.data.search.items);return new Response(JSON.stringify(t),{status:n.status,statusText:n.statusText,headers:n.headers})}return new Response(r,{status:n.status,statusText:n.statusText,headers:n.headers})}})().catch(s=>{var a;void 0!==(a=s.message)?window.alert(`[ ${t} ]\n\n${a}`):window.alert(`[ ${t} ]`)});
