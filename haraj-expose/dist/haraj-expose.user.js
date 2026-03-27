// ==UserScript==
// @name           jx-haraj-expose
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-expose
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-expose/dist/haraj-expose.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-expose/dist/haraj-expose.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){}const s=GM.info.script.name;const o=function(o=!1){const a=window.console,n=`[${s}]:`;return{log:a.log.bind(a,n),warn:a.warn.bind(a,n),error:a.error.bind(a,n),debug:o?a.log.bind(a,n):t}}(!0);function a({id:t,bodyTEXT:s,authorId:a,title:n,authorUsername:e}){const r=function(){const t=sessionStorage.getItem("saved-posts");return null===t?{}:JSON.parse(t)}();r[t.toString()]={authorId:a,bodyTEXT:s,title:n,author:e},sessionStorage.setItem("saved-posts",JSON.stringify(r));const i=location.pathname.split("/")[1].slice(2);t.toString()===i&&(o.log("Dispatching authorId.."),window.dispatchEvent(new CustomEvent("authorId",{detail:{authorId:a,author:e}})))}(async function(){const t=unsafeWindow.fetch;unsafeWindow.fetch=async(...s)=>{const o=s[0]instanceof Request?s[0].url:s[0].toString(),n=await t(...s);if(o.startsWith("https://graphql.haraj.com.sa/?queryName=favPosts&")||o.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||o.startsWith("https://graphql.haraj.com.sa/?queryName=search&")||o.startsWith("https://graphql.haraj.com.sa/?queryName=similarPosts&")){const t=await n.clone().text(),s=JSON.parse(t);if("posts"in s.data){const t=s.data.posts.items;for(const s of t)a(s)}else if("search"in s.data){const t=s.data.search.items;for(const s of t)a(s)}else if("favPosts"in s.data){const t=s.data.favPosts.items;for(const s of t)a(s)}else for(const{posts:t}of s.data.similarPosts.groupTags)for(const s of t.items)a(s)}return n}})().catch(t=>{var o;void 0!==(o=t.message)?window.alert(`[ ${s} ]\n\n${o}`):window.alert(`[ ${s} ]`)});
