// ==UserScript==
// @name           jx-ensure-vpn
// @version        1.0.0
// @namespace      https://github.com/JenieX/user-js-work
// @description    Awesome script!
// @author         JenieX
// @match          *://*/*
// @match          file:///*
// @grant          GM.xmlHttpRequest
// @run-at         document-start
// @noframes
// @compatible     chrome Violentmonkey
// @compatible     edge Violentmonkey
// @supportURL     https://github.com/JenieX/user-js-work/issues
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/ensure-vpn
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/ensure-vpn/dist/ensure-vpn.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/ensure-vpn/dist/ensure-vpn.user.js
// @icon           https://github.com/JenieX/assets/raw/main/icons/violentmonkey.png
// @license        MIT
// ==/UserScript==

function n(){}const t=GM.info.script.name;const o=function(o=!1){const i=window.console,a=`[${t}]:`;return{log:i.log.bind(i,a),warn:i.warn.bind(i,a),error:i.error.bind(i,a),debug:o?i.log.bind(i,a):n}}(!1);async function i(){try{await GM.xmlHttpRequest({url:"https://vk.com/",method:"HEAD"}),o.debug("VPN is ON!")}catch{void 0!==(n="VPN is OFF!")?window.alert(`[ ${t} ]\n\n${n}`):window.alert(`[ ${t} ]`)}var n}(async function(){await i(),setInterval(async()=>{await i()},5e3)})().catch(()=>{});
