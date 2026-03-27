// ==UserScript==
// @name           jx-haraj-search-history
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @match          *://*/*
// @match          file:///*
// @run-at         document-start
// @noframes
// @compatible     chrome Violentmonkey
// @compatible     edge Violentmonkey
// @supportURL     https://github.com/JenieX/user-js-work/issues
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-search-history
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-search-history/dist/haraj-search-history.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-search-history/dist/haraj-search-history.user.js
// @icon           https://github.com/JenieX/assets/raw/main/icons/violentmonkey.png
// @license        MIT
// ==/UserScript==

const e=GM.info.script.name;const a=[{href:"/search/oneplus?duringdate=1days",label:{ar:"oneplus",en:"oneplus",ur:"oneplus"}},{href:"/search/pixel?duringdate=1days",label:{ar:"pixel",en:"pixel",ur:"pixel"}},{href:"/search/sata?duringdate=1days",label:{ar:"sata",en:"sata",ur:"sata"}},{href:"/search/xperia?duringdate=1days",label:{ar:"xperia",en:"xperia",ur:"xperia"}},{href:"/search/لاب توب?duringdate=1days",label:{ar:"لاب توب",en:"لاب توب",ur:"لاب توب"}}];(async function(){const{setItem:e}=localStorage,{fetch:r}=unsafeWindow;!function(e){localStorage.setItem=function(a,r){"searchHistory"!==a&&e.call(this,a,r)}}(e),function(e,a){const r={state:{items:e},version:3};a.call(localStorage,"searchHistory",JSON.stringify(r))}(a,e),function(e){unsafeWindow.fetch=async(...a)=>{if((a[0]instanceof Request?a[0].url:a[0].toString()).startsWith("https://graphql.haraj.com.sa/?queryName=getTrendingKeywords&"))throw new Error("Trending posts are not allowed.");return e(...a)}}(r)})().catch(a=>{var r;void 0!==(r=a.message)?window.alert(`[ ${e} ]\n\n${r}`):window.alert(`[ ${e} ]`)});
