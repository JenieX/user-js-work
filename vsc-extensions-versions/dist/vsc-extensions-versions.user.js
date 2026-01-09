// ==UserScript==
// @name           jx-vsc-extensions-versions
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @match          https://marketplace.visualstudio.com/items?itemName=*
// @grant          GM.xmlHttpRequest
// @run-at         document-start
// @noframes
// @compatible     chrome Violentmonkey
// @compatible     edge Violentmonkey
// @supportURL     https://github.com/JenieX/user-js-work/issues
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/vsc-extensions-versions
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/vsc-extensions-versions/dist/vsc-extensions-versions.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/vsc-extensions-versions/dist/vsc-extensions-versions.user.js
// @icon           http://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=128
// @license        MIT
// ==/UserScript==

function e(e,t=","){return function(e){return"string"==typeof e}(e)?e:e.join(t)}const t=GM.info.script.name;async function n(e,t){const n=await fetch(e,t);if(!n.ok&&!n.url.startsWith("file:///"))throw new Error(`Request to ${n.url} ended with ${n.status} status.`);return n}async function o(e,t){const{method:n,anonymous:o,headers:s,body:r,timeOut:i,onProgress:a}=t??{};return new Promise((t,c)=>{GM.xmlHttpRequest({url:e,method:n??"GET",headers:s,anonymous:o,data:r,responseType:"blob",timeout:i,onprogress:a,onload({response:n,statusText:o,status:s,finalUrl:r}){const i=r.startsWith("file:///");if(!(s>=200&&s<300)&&!i)return void c(new Error(`Request to ${e} ended with ${s} status.`));const a=new Response(n,{statusText:o,status:i?200:s});Object.defineProperty(a,"url",{value:r}),t(a)},onerror({status:t}){c(new Error(`Request to ${e} ended with ${t} status.`))}})})}const s=async(e,t)=>async function(e,t,s){return(await(s?o:n)(e,t)).json()}(e,t,!0);function r(t,n){const o=(n??document).querySelector(e(t));if(null===o)throw new Error(`Could not find the element with the selector ${t}`);return o}async function i(e){const t=await s("https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",{method:"POST",anonymous:!0,headers:{"Content-Type":"application/json",Accept:"application/json;api-version=3.0-preview.1","User-Agent":"node"},body:JSON.stringify({filters:[{criteria:[{filterType:7,value:e}]}],flags:1})});console.log(t);return t.results[0].extensions[0].versions}async function a(){return new Promise(e=>{new MutationObserver((t,n)=>{for(const{target:o}of t)if(o.nodeType===Node.ELEMENT_NODE&&o instanceof HTMLDivElement&&o.matches("#version-history-tab-content")){n.disconnect();const t=r(".version-history-table-body",o);e(t)}}).observe(document,{childList:!0,subtree:!0})})}function c(t){const n=function(t,n){const o=(n??document).querySelectorAll(e(t));if(0===o.length)throw new Error(`Could not find any element with the selector ${t}`);return o}("thead th",t.parentElement),[o,,s]=[...n];o.textContent="Download",s.textContent="Release Date"}(async function(){const e=function(e,t){const{searchParams:n}=new URL(t??window.location.href),o=n.get(e);if(null!==o)return o}("itemName"),[t,n]=e.split("."),[o,s]=await Promise.all([a(),i(e)]);c(o),o.replaceChildren();for(const{version:e,lastUpdated:r}of s){const s='<tr class="version-history-container-row"> <td class="version-history-container-column"> <a href="https://marketplace.visualstudio.com/_apis/public/gallery/publishers/{publisher}/vsextensions/{extensionName}/{version}/vspackage" title="Download">{version}</a> </td> <td class="version-history-container-column"></td> <td class="version-history-container-column">{data}</td> </tr>'.replaceAll("{version}",e).replace("{data}",r.slice(0,10)).replace("{publisher}",t).replace("{extensionName}",n);o.insertAdjacentHTML("beforeend",s)}})().catch(e=>{var n;void 0!==(n=e.message)?window.alert(`[ ${t} ]\n\n${n}`):window.alert(`[ ${t} ]`)});
