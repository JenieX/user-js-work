// ==UserScript==
// @name           jx-haraj-dm
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @include        /https:\/\/haraj\.com\.sa/\d+?/
// @grant          none
// @run-at         document-start
// @noframes
// @compatible     chrome Violentmonkey
// @compatible     edge Violentmonkey
// @supportURL     https://github.com/JenieX/user-js-work/issues
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-dm
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-dm/dist/haraj-dm.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-dm/dist/haraj-dm.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){}const e=GM.info.script.name;async function n(t,e){const n=await fetch(t,e);if(!n.ok&&!n.url.startsWith("file:///"))throw new Error(`Request to ${n.url} ended with ${n.status} status.`);return n}async function o(t,e){const{method:n,anonymous:o,headers:r,body:s,timeOut:a,onProgress:i}=e??{};return new Promise((e,u)=>{GM.xmlHttpRequest({url:t,method:n??"GET",headers:r,anonymous:o,data:s,responseType:"blob",timeout:a,onprogress:i,onload({response:n,statusText:o,status:r,finalUrl:s}){const a=s.startsWith("file:///");if(!(r>=200&&r<300)&&!a)return void u(new Error(`Request to ${t} ended with ${r} status.`));const i=new Response(n,{statusText:o,status:a?200:r});Object.defineProperty(i,"url",{value:s}),e(i)},onerror({status:e}){u(new Error(`Request to ${t} ended with ${e} status.`))}})})}const r=async(t,e)=>async function(t,e,r){return(await(r?o:n)(t,e)).json()}(t,e);function s(t,e){const n=(e??document).querySelector(function(t,e=","){return function(t){return"string"==typeof t}(t)?t:t.join(e)}(t));if(null===n)throw new Error(`Could not find the element with the selector ${t}`);return n}function a(t,e=document.documentElement){const n=document.createElement("style");return n.setAttribute("type","text/css"),n.textContent=t,e.append(n),n}const i=function(n=!1){const o=window.console,r=`[${e}]:`;return{log:o.log.bind(o,r),warn:o.warn.bind(o,r),error:o.error.bind(o,r),debug:n?o.log.bind(o,r):t}}(!0);a(".haraj-dm{background-color:#1b79c3;border-bottom-right-radius:10px;border-top-right-radius:10px;color:#fff;font-weight:600;left:0;position:fixed;z-index:999}"),GM.info.platform.mobile?a(".haraj-dm{bottom:12%;font-size:12px;padding:12px}"):a(".haraj-dm{bottom:5%;font-size:15px;padding:15px}"),async function(){const t=JSON.parse(localStorage.getItem("login"));let e;document.documentElement.insertAdjacentHTML("beforeend",'<button class="haraj-dm">محادثة</button>'),s(".haraj-dm").addEventListener("click",async()=>{if(void 0!==e)return void window.open(e);const n=s('[data-testid="post-author"]').textContent,o=await r(`https://api-chat.haraj.com.sa/chat/users?usernames=${n}`,{headers:{authorization:`Bearer ${t.state.accessToken}`}});i.log(o),e=`https://haraj.com.sa/chat/${o.data.users[0].user_id}/`,window.open(e)})}().catch(t=>{var n;void 0!==(n=t.message)?window.alert(`[ ${e} ]\n\n${n}`):window.alert(`[ ${e} ]`)});
