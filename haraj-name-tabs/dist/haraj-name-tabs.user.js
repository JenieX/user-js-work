// ==UserScript==
// @name           jx-haraj-name-tabs
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
// @homepageURL    https://github.com/JenieX/user-js-work/tree/main/haraj-name-tabs
// @updateURL      https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-name-tabs/dist/haraj-name-tabs.meta.js
// @downloadURL    https://github.com/JenieX/user-js-work/raw/refs/heads/main/haraj-name-tabs/dist/haraj-name-tabs.user.js
// @icon           http://www.google.com/s2/favicons?domain=haraj.com.sa&sz=128
// @license        MIT
// ==/UserScript==

function t(){location.pathname.startsWith("/search/")&&(document.title=decodeURIComponent(location.pathname).split("/")[2])}setInterval(()=>{t()},1500);
