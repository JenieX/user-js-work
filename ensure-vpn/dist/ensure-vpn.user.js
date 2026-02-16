// ==UserScript==
// @name           jx-ensure-vpn
// @version        1.0.1
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/ensure-vpn
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/ensure-vpn/dist/ensure-vpn.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/ensure-vpn/dist/ensure-vpn.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function n(){}const o=GM.info.script.name;const r=function(r=!1){const t=window.console,e=`[${o}]:`;return{log:t.log.bind(t,e),warn:t.warn.bind(t,e),error:t.error.bind(t,e),debug:r?t.log.bind(t,e):n}}(!0);function t(){GM.xmlHttpRequest({url:"https://vk.com/",method:"HEAD",onload(){r.debug("VPN is ON!")},onerror({status:n}){var t;0===n&&(r.error("VPN is OFF!"),void 0!==(t="VPN is OFF!")?window.alert(`[ ${o} ]\n\n${t}`):window.alert(`[ ${o} ]`))},onloadend(){setTimeout(()=>{t()},7e3)}})}t();
