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

const s=GM.info.script.name;function t(s){for(const t of s)t.URL=`${t.URL.split("/").shift()}/`}(async function(){const s=unsafeWindow.fetch;unsafeWindow.fetch=async(...a)=>{const e=a[0]instanceof Request?a[0].url:a[0].toString(),r=await s(...a);if(e.startsWith("https://graphql.haraj.com.sa/?queryName=favPosts&")||e.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||e.startsWith("https://graphql.haraj.com.sa/?queryName=search&")||e.startsWith("https://graphql.haraj.com.sa/?queryName=similarPosts&")){const s=await r.clone().text(),a=JSON.parse(s);if("posts"in a.data)t(a.data.posts.items);else if("search"in a.data)t(a.data.search.items);else if("favPosts"in a.data)t(a.data.favPosts.items);else for(const{posts:s}of a.data.similarPosts.groupTags)t(s.items);return new Response(JSON.stringify(a),{status:r.status,statusText:r.statusText,headers:r.headers})}return r}})().catch(t=>{var a;void 0!==(a=t.message)?window.alert(`[ ${s} ]\n\n${a}`):window.alert(`[ ${s} ]`)});
