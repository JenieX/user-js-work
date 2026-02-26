// ==UserScript==
// @name           jx-haraj-clean
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @match          https://haraj.com.sa/*
// @grant          GM.xmlHttpRequest
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

function t(){}const e=GM.info.script.name;function n(t,e=document.documentElement){const n=document.createElement("style");return n.setAttribute("type","text/css"),n.textContent=t,e.append(n),n}const o=function(n=!1){const o=window.console,s=`[${e}]:`;return{log:o.log.bind(o,s),warn:o.warn.bind(o,s),error:o.error.bind(o,s),debug:n?o.log.bind(o,s):t}}(!0);function s(t){return t.startsWith("file:///")}async function r(t,e){const{method:n,anonymous:o,headers:r,body:a,timeOut:u,onProgress:i}=e??{};return new Promise((e,c)=>{GM.xmlHttpRequest({url:t,method:n??"GET",headers:r,anonymous:o,data:a,responseType:"blob",timeout:u,onprogress:i,onload({response:n,statusText:o,status:r,finalUrl:a}){if(!(r>=200&&r<300)&&!s(a))return void c(new Error(`Request to ${t} ended with ${r} status.`));const u=new Response(n,{statusText:o,status:s(a)?200:r});Object.defineProperty(u,"url",{value:a}),e(u)},onerror({status:e}){c(new Error(`Request to ${t} ended with ${e} status.`))}})})}function a(t,e){return function(t,e,n){const o=async()=>t(e,n);return{response:async()=>o(),blob:async()=>(await o()).blob(),buffer:async()=>(await o()).arrayBuffer(),json:async()=>(await o()).json(),text:async()=>(await o()).text(),document:async()=>{const t=await o(),e=await t.text();return(new DOMParser).parseFromString(e,"text/html")},multi:async t=>{const e=await o(),n={response:e};if(t.includes("blob")&&(n.blob=await e.clone().blob()),t.includes("buffer")&&(n.buffer=await e.clone().arrayBuffer()),t.includes("json")&&(n.json=await e.clone().json()),t.includes("text")&&(n.text=await e.clone().text()),t.includes("document")){const t=await e.clone().text(),o=new DOMParser;n.document=o.parseFromString(t,"text/html")}return n}}}(r,t,e)}(async function(){const t=await a("https://example.com/").multi(["blob","buffer","text","document"]),e=t.response,s=t.blob,r=t.buffer,u=t.json,i=t.text,c=t.document;o.log({response:e,blob:s,buffer:r,json:u,text:i,document:c,headers:[...e.headers]});const l=await a("https://httpbin.org/anything").json();o.log({jsonOnly:l}),n("body>.bg-background-card.w-full>div>.col-span-1{display:none}body>.bg-background-card.w-full>div>.col-span-full{grid-column:1/-1!important;margin-inline:auto;max-width:75vw;width:100%}")})().catch(t=>{var n;o.log(t.message),void 0!==(n=t.message)?window.alert(`[ ${e} ]\n\n${n}`):window.alert(`[ ${e} ]`)});
