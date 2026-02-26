// ==UserScript==
// @name           jx-haraj-no-apple
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-no-apple
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-no-apple/dist/haraj-no-apple.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-no-apple/dist/haraj-no-apple.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){}const s=GM.info.script.name;const e=function(e=!1){const n=window.console,a=`[${s}]:`;return{log:n.log.bind(n,a),warn:n.warn.bind(n,a),error:n.error.bind(n,a),debug:e?n.log.bind(n,a):t}}(!0);function n(t){const s=t.filter(({title:t})=>!(t.includes("Iphone")||t.includes("iPhone")||t.includes("iphone")||t.includes("آيفون")||t.includes("أيفون")||t.includes("اي فون")||t.includes("ايفن")||t.includes("ايفون"))&&!(t.includes("MacBook")||t.includes("mac book")||t.includes("ماك بوك"))),n=t.filter(t=>!s.includes(t));return e.debug({goodItems:s,badItems:n}),s}(async function(){const t=unsafeWindow.fetch;unsafeWindow.fetch=async(...s)=>{if(!location.href.startsWith("https://haraj.com.sa/tags/")&&!location.href.startsWith("https://haraj.com.sa/search/"))return t(...s);const e=s[1]?.body;if("string"==typeof e&&function(t){return t.includes('"variables":{"id":[')}(e))return t(...s);const a=s[0]instanceof Request?s[0].url:s[0].toString(),i=await t(...s);if(a.startsWith("https://graphql.haraj.com.sa/?queryName=posts&")||a.startsWith("https://graphql.haraj.com.sa/?queryName=search&")){const t=await i.text(),s=JSON.parse(t);if("posts"in s.data){const t=s.data.posts.items;s.data.posts.items=n(t)}else{const t=s.data.search.items;s.data.search.items=n(t)}return new Response(JSON.stringify(s),{status:i.status,statusText:i.statusText,headers:i.headers})}return i}})().catch(t=>{var e;void 0!==(e=t.message)?window.alert(`[ ${s} ]\n\n${e}`):window.alert(`[ ${s} ]`)});
