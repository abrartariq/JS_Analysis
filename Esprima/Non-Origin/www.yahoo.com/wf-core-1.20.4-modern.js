!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer",[],t):"object"==typeof exports?exports.wafer=t():e.wafer=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function c(e){return Array.isArray(e)?e:Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var h={};n.d(h,"localStorage",function(){return m}),n.d(h,"visibilityMeta",function(){return y}),n.d(h,"transformProperty",function(){return p}),n.d(h,"mutationObserver",function(){return g});var w={};n.d(w,"isVisible",function(){return x}),n.d(w,"debounce",function(){return j}),n.d(w,"elementInView",function(){return A}),n.d(w,"throttle",function(){return D}),n.d(w,"bindEvent",function(){return P}),n.d(w,"unbindEvent",function(){return I}),n.d(w,"get",function(){return L}),n.d(w,"loadScriptAsync",function(){return N}),n.d(w,"loadCSSSync",function(){return R}),n.d(w,"each",function(){return B}),n.d(w,"findAncestor",function(){return W}),n.d(w,"fireBeacon",function(){return M}),n.d(w,"isNodeName",function(){return z}),n.d(w,"parseUrl",function(){return V}),n.d(w,"getElementsByAttrValues",function(){return H}),n.d(w,"convertNodeListToArray",function(){return X}),n.d(w,"getConfigFromJSONScriptNode",function(){return U}),n.d(w,"urlify",function(){return Y}),n.d(w,"fetchWithCache",function(){return J});var m=function(){try{return window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),!0}catch(e){return!1}}(),y=function(){var e=void 0,t=void 0;return void 0!==document.hidden?(e="hidden",t="visibilitychange"):void 0!==document.mozHidden?(e="mozHidden",t="mozvisibilitychange"):void 0!==document.msHidden?(e="msHidden",t="msvisibilitychange"):void 0!==document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{hidden:e,visibilityChange:t}}(),p=function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}(),g=function(){for(var e=["WebKit","Moz","O","Ms",""],t=0;t<e.length;t++)if(e[t]+"MutationObserver"in window)return!0;return!1}(),b=["rid","crumb"],_={omit:1,"same-origin":1,include:1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return e.replace(new RegExp("[?&]"+t+"=[^&#]*(#.*)?$"),"$1").replace(new RegExp("([?&])"+t+"=[^&]*&"),"$1")},T=function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.body,r=t.cache,i=void 0===r?1:r,o=t.cacheKey,a=t.cacheStrategy,s=void 0===a?"networkFirst":a,c=t.cacheTtl,u=void 0===c?60:c,l=t.credentials,f=void 0===l?"same-origin":l,d=t.paramsToNotCache,v=void 0===d?{}:d,h=t.timeout,w=void 0===h?6e3:h;return new Promise(function(t,r){var a=Date.now(),c=T(v),l=c?e+(-1===e.indexOf("?")?"?":"&")+c:e;o||(o=e,b.forEach(function(e){o=E(o,e)})),f||_[f]||(f="same-origin");var d=i,h="GET",m=!1,y=void 0,p=void 0,g=!1;if(n)try{n=JSON.stringify(JSON.parse(n)),h="POST",d=!1}catch(e){n={}}var C=setTimeout(function(){if(m=!0,y)return void t(Object.assign({},y,{_fetchMeta:{duration:Date.now()-a,source:"CACHE_IS_STALE"}}));r(new Error("Request timed out"))},w);p=d&&window.wafer.db&&"cacheFirst"===s?window.wafer.db.get(o,"fetch",{timeout:1e3}).then(function(e){if(e){var n=e.ttl,r=e.value,i=e.cachedTime,o=(Date.now()-i)/1e3;try{y=JSON.parse(r)}catch(e){}o<n&&(clearTimeout(C),m||(g=!0,t(Object.assign({},y,{_fetchMeta:{duration:Date.now()-a,source:"CACHE"}}))))}}).catch(function(e){}):Promise.resolve(!1),p.then(function(){if(!g){var e=new Headers;"POST"===h&&e.append("Content-Type","application/json"),fetch(l,{credentials:f,body:n,headers:e,method:h}).then(function(e){if(clearTimeout(C),!m){if(200===e.status){var n=e.headers.get("Content-Type");if(d&&window.wafer.db&&u&&n&&n.match(/application\/json/i)){var r=Date.now();e.clone().text().then(function(e){return window.wafer.db.set({ttl:u,key:o,value:e,cachedTime:r},"fetch",{timeout:w}).catch(function(e){}),!0})}return e.json().then(function(e){t(Object.assign({},e,{_fetchMeta:{duration:Date.now()-a,source:d?y?"NETWORK_AS_CACHE_IS_EXPIRED":"NETWORK":"NETWORK_WITHOUT_CACHE"}}))}).catch(function(e){throw new Error("Malformed response")})}throw new Error("Malformed response")}}).catch(function(e){m||(clearTimeout(C),y?t(Object.assign({},y,{_fetchMeta:{duration:Date.now()-a,source:"CACHE_IS_STALE"}})):d?(window.wafer.db||r(e),window.wafer.db.get(o,"fetch",{timeout:w}).then(function(n){if(!n)return void r(e);var i=n.ttl,o=n.value,s=n.cachedTime,c=(Date.now()-s)/1e3;try{y=JSON.parse(o)}catch(e){}t(Object.assign({},y,{_fetchMeta:{duration:Date.now()-a,source:c<i?"CACHE_SECOND_ATTEMPT":"CACHE_SECOND_ATTEMPT_STALE"}}))}).catch(function(e){r(e)})):r(e))})}})})},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.offsetX,i=void 0===r?0:r,o=n.offsetY,a=void 0===o?0:o;return e.right+i>=t.left&&e.bottom+a>=t.top&&e.left-i<=t.right&&e.top-a<=t.bottom},O=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k=function e(t,n,r,i){if(r.hasAttribute(t)){var o=r.getAttribute(t);i[o]&&i[o].push(r)}var a=r.children;if(!a)return i;for(var s=a.length;s--;)e(t,n,a[s],i);return i},x=O,j=function(e,t,n){var r=void 0;return function(){for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];clearTimeout(r),r=setTimeout(function(){e.apply(n,o)},t)}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.container,r=t.containerClass,i=t.offsetX,o=void 0===i?0:i,a=t.offsetY,s=void 0===a?0:a,c=arguments[2];if(!O(e))return!1;if(n&&Element.prototype.closest){var u=e.closest(r);if(u){var l=u.getBoundingClientRect();if(S(l,c)){var f=l.bottom+s,d=l.left-o,v=l.right+o,h=l.top-s,w={top:h>c.top?h:c.top,right:v<c.right?v:c.right,bottom:f<c.bottom?f:c.bottom,left:d>c.left?d:c.left},m=e.getBoundingClientRect();return S(m,w)}return!1}}var y=e.getBoundingClientRect();return S(y,c,{offsetX:o,offsetY:s})},D=function(e,t,n){var r=0;return function(){for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];var s=+new Date;s-r<t||(r=s,e.apply(n,o))}},P=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.passive,o=void 0===i||i;e.addEventListener(t,n,{capture:!1,passive:o})},I=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.passive,o=void 0===i||i;e.removeEventListener(t,n,{capture:!1,passive:o})},L=function(e,t){return t.reduce(function(e,t){return e&&e[t]?e[t]:null},e)},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.src,n=e.type,r=e.text,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},o=arguments[2];if(o&&L(window,o.split(".")))return void i();if("text/javascript"!==(n=n||"text/javascript"))return void i(new Error("can load only script of type text/javascript"));var a=document.createElement("script");a.type=n,t?(a.src=t,a.async=!0,a.defer=!0,a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,i())}:a.onload=function(){i()}):(a.textContent="try{"+r+"}catch(e){window.console && window.console.error(e);}",i()),document.getElementsByTagName("head")[0].appendChild(a)},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.src,n=e.text,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},i=document.getElementsByTagName("head")[0];if(n){var o=document.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n)),i.appendChild(o),r()}else{var a=document.createElement("link");a.rel="stylesheet",a.href=t,i.parentNode.insertBefore(a,i),r()}},B=function(e,t){if(e&&t)for(var n=e.length,r=0;r<n&&!1!==t(e[r],r);r++);},W=function(e,t){for(;e&&!e.classList.contains(t);)e=e.parentElement;return e},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.useNavigator,r=void 0===n||n,i=0;if(r)if(window.navigator&&"function"==typeof window.navigator.sendBeacon)try{window.navigator.sendBeacon(e)||(i="bcn_unsuccessful")}catch(e){i="bcn_error"}else i="bcn_unsupported";else i="bcn_useimg";if(i){var o=new Image;P(o,"error",function(){o=null}),P(o,"load",function(){o=null}),P(o,"abort",function(){o=null}),o.src=e+(-1===e.indexOf("?")?"?":"&")+(new Date).getTime()+"&r="+i}},z=function(e,t){return e.nodeName.toLowerCase()===t},V=function(e){if(!(e=e?e.split("?")[0]:"")||"/"===e.charAt(0))return{host:"undefined"!=typeof window?window.location.host:"",pathname:e||""};var t=e.split("/");return{host:t[2],pathname:"/"+t.slice(3).join("/")}},H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body;if(!Array.isArray(t))return{};var r={};return t.forEach(function(e){r[e]=[]}),k(e,t,n,r),r},X=function(e){for(var t,n=[],r=0;t=e[r];++r)n.push(t);return n},U=function(e){if(!e)return{};var t={};try{t=JSON.parse(e.textContent)}catch(e){}return t},Y=T,J=C,F=Object.freeze({ATTR_PREFIX:"data-wf-"}),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),$=function(){function e(){r(this,e)}return q(e,[{key:"init",value:function(){this._util={listeners:{}}}},{key:"emit",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._util.listeners;n&&n[e]&&n[e].forEach(function(n){n.call(void 0,K({type:e},t))})}},{key:"on",value:function(e,t){var n=this._util.listeners;n&&(n[e]||(n[e]=[]),n[e].push(t))}},{key:"removeListener",value:function(e,t){var n=this._util.listeners;if(n&&n[e]){var r=n[e].indexOf(t);r>-1&&n[e].splice(r,1)}}},{key:"destroy",value:function(){this._util.listeners=null}}]),e}(),G=$,Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=t.version,o=t.tables,a=void 0===o?["fetch"]:o,s=t.cb,c=void 0===s?function(){}:s;i(this,e),this._utils={cb:c,connection:null,db:null,name:n,startTime:Date.now(),tables:a};var u=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;u&&n&&r&&(this._utils.connection=u.open(n,r),this.addEventListener())}return Q(e,[{key:"addEventListener",value:function(){var e=this,t=this._utils,n=t.cb,r=t.connection,i=t.startTime,o=t.tables;r.onsuccess=function(t){var r=t.target.result,a=!0;o.some(function(e){return!r.objectStoreNames.contains(e)&&(a=!1,!0)}),a&&(e._utils.db=r,n("success",{duration:Date.now()-i}))},r.onerror=function(t){e._utils.db=null,n("error",{duration:Date.now()-i})},r.onupgradeneeded=function(t){var r=t.target.result;o.forEach(function(e){r.createObjectStore(e,{keyPath:"key"}).createIndex("key",["cachedTime","key","ttl"])}),t.target.transaction.oncomplete=function(){e._utils.db=r,n("success",{duration:Date.now()-i})}}}},{key:"get",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.timeout,o=void 0===i?1e3:i,a=this._utils.db;return new Promise(function(r,i){if(!a)return void i(new Error("Connection missing"));if(!t)return void i(new Error("Table missing"));var s=!1,c=setTimeout(function(){s=!0,i(new Error("Cache lookup timed out"))},o);if(!a.objectStoreNames.contains(t))return clearTimeout(c),void i(new Error("Store does not exist : "+t));var u=void 0;try{u=n._utils.db.transaction(t,"readonly")}catch(e){return clearTimeout(c),void i(e)}u.onerror=function(e){clearTimeout(c),s||i(e)},u.onabort=function(e){clearTimeout(c),s||i(e)};var l=u.objectStore(t);if(!l)return clearTimeout(c),void i(new Error("store doesn't exist for table : "+t));var f=l.get(e);f.onsuccess=function(e){if(clearTimeout(c),!s){var t=e.target.result;r(t)}},f.onerror=function(e){clearTimeout(c),s||i(e)}})}},{key:"set",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.timeout,o=void 0===i?1e3:i,a=this._utils,s=a.cb,c=a.db;return new Promise(function(r,i){if(!c)return void i(new Error("Connection missing"));if(!t)return void i(new Error("Table missing"));var a=!1,u=setTimeout(function(){a=!0,i(new Error("Cache write timed out"))},o);if(!c.objectStoreNames.contains(t))return clearTimeout(u),s("error",{action:"deleting db",message:"Store does not exist : "+t}),n.deleteDB().catch(function(){}),void i(new Error("Store does not exist : "+t));var l=void 0;try{l=n._utils.db.transaction(t,"readwrite")}catch(e){return clearTimeout(u),e instanceof DOMException&&(s("error",{action:"deleting db",message:e.message}),n.deleteDB().catch(function(){})),void i(e)}l.onerror=function(e){clearTimeout(u),a||i(e)},l.onabort=function(e){clearTimeout(u),a||i(e)};var f=l.objectStore(t);if(!f)return clearTimeout(u),void i(new Error("store doesn't exist for table : "+t));var d=f.put(e);d.onsuccess=function(e){if(clearTimeout(u),!a){var t=e.target.result;r(t)}},d.onerror=function(e){clearTimeout(u),a||i(e)}})}},{key:"delete",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.timeout,o=void 0===i?1e3:i,a=this._utils.db;return new Promise(function(r,i){if(!a)return void i(new Error("Connection missing"));if(!t)return void i(new Error("Table missing"));var s=!1,c=setTimeout(function(){s=!0,i(new Error("Cache delete timed out"))},o);if(!a.objectStoreNames.contains(t))return clearTimeout(c),void i(new Error("Store does not exist : "+t));var u=void 0;try{u=n._utils.db.transaction(t,"readwrite")}catch(e){return clearTimeout(c),void i(e)}u.onerror=function(e){clearTimeout(c),s||i(e)},u.onabort=function(e){clearTimeout(c),s||i(e)};var l=u.objectStore(t);if(!l)return clearTimeout(c),void i(new Error("store doesn't exist for table : "+t));var f=l.delete(e);f.onsuccess=function(e){if(clearTimeout(c),!s){var t=e.target.result;r(t)}},f.onerror=function(e){clearTimeout(c),s||i(e)}})}},{key:"clean",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.timeout,i=void 0===r?1e4:r,o=n.timeDiffToDelete,a=void 0===o?864e5:o,s=this._utils.db,c=Date.now();return new Promise(function(n,r){if(!s)return void r(new Error("Connection missing"));if(!e)return void r(new Error("Table missing"));var o=!1,u=setTimeout(function(){o=!0,r(new Error("Cache clean timed out"))},i);if(!s.objectStoreNames.contains(e))return clearTimeout(u),void r(new Error("Store does not exist : "+e));var l=void 0;try{l=t._utils.db.transaction(e,"readonly")}catch(e){return clearTimeout(u),void r(e)}l.onerror=function(e){clearTimeout(u),o||r(e)},l.onabort=function(e){clearTimeout(u),o||r(e)};var f=l.objectStore(e);if(!f)return clearTimeout(u),void r(new Error("store doesn't exist for table : "+e));var d=f.openCursor(),v=[];d.onsuccess=function(i){if(clearTimeout(u),!o){var s=i.target.result;if(s){var l=s.value.cachedTime;c-l>a&&v.push(t.delete(s.key,e)),s.continue()}else Promise.all(v).then(function(e){n(e)}).catch(function(e){r(e)})}},d.onerror=function(e){clearTimeout(u),o||r(e)}})}},{key:"deleteDB",value:function(){var e=this,t=this._utils.db,n=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;return new Promise(function(r,i){if(!n)return void i(new Error("Connection missing"));t&&(t.close(),e._utils.db=null);var o=e._utils.name,a=!1,s=setTimeout(function(){a=!0,i(new Error("Could not delete"))},1e3),c=n.deleteDatabase(o);c.onerror=function(e){clearTimeout(s),a||i(new Error("Could not delete"))},c.onsuccess=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};clearTimeout(s),a||r(e.result)}})}}]),e}(),ee=Z,te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),re=function(e){document.attachEvent&&void 0!==document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&setTimeout(e,0)}):"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,{capture:!1,passive:!0}):setTimeout(e,0)},ie=function(){function e(){var t=this;o(this,e),this._viewport={top:0,left:0},this._state={},this._isPageVisible=!0,this._observerMapping={},this._saveViewportOffset(),this._updateState(),this._initHostConfig(),this._handleVisibilityChange=this._handleVisibilityChange.bind(this),re(function(){window.wafer&&window.wafer.utils&&(t._initDB(),t._setup())})}return ne(e,[{key:"addObserver",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this._observerMapping[e]||(this._observerMapping[e]=[]),this._observerMapping[e].push(t)}},{key:"sync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._sync&&this._sync(e)}},{key:"trigger",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._wafers.forEach(function(t){t._state&&t._state.mounted&&t.handleTrigger&&t.handleTrigger(e)})}},{key:"prefetch",value:function(e){this._wafers.forEach(function(t){var n=t&&t.configs;if(n){var r=n.allowPrefetch,i=n.selector;r&&i&&Array.prototype.slice.call(e.getElementsByClassName(i.replace(".",""))).forEach(function(e){return t.loadElement(e,!0)})}})}},{key:"emitError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.elem,n=e.meta,r=e.name,i=e.stack;this._emit({elem:t,meta:n,name:r,stack:i})}},{key:"emitLog",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.elem,n=e.meta,r=e.name;this._emit({elem:t,meta:n,name:r},"log")}},{key:"emitWaferEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.elem,r=t.meta;this._emit({elem:n,meta:r},e)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.destroySelf,r=void 0===n||n,i=window.wafer.utils,o=i.unbindEvent;if(e){var a=e.children;if(a)for(var s=a.length;s--;)this.destroy(a[s])}else o(document,window.wafer.features.visibilityMeta.visibilityChange,this._handleVisibilityChange),o(window,"resize",this._handleResizeWithThrottle),o(window,"scroll",this._handleScrollWithThrottle),o(window,"click",this._handleDelegatedEvent,{passive:!1}),o(window,"change",this._handleDelegatedEvent,{passive:!1}),this._ee.destroy();r&&this._wafers.forEach(function(t){t.destroy&&t.destroy(e)})}},{key:"clearOldCache",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.timeDiffToDelete,n=void 0===t?864e5:t;window.wafer.db&&window.wafer.db.clean("fetch",{timeDiffToDelete:n})}},{key:"_initDB",value:function(){var e=this,t=document.getElementById("wafer-db-config"),n={};if(t)try{Object.assign(n,JSON.parse(t.textContent))}catch(e){this.emitError({meta:{},name:"initDb",stack:e.stack})}window.wafer.db=new ee(Object.assign({},n,{cb:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t){case"success":e.emitLog({name:"IDB-connection-success",meta:n});break;case"error":e.emitError({name:"IDB",meta:n}),e.emitLog({name:"IDB-connection-error",meta:n})}}}))}},{key:"_initHostConfig",value:function(){var e=document.getElementById("wafer-config");if(e)try{var t=JSON.parse(e.textContent);Object.defineProperty(this,"_hostConfig",{value:t,writable:!1})}catch(e){this.emitError({meta:{},name:"initConfig",stack:e.stack})}}},{key:"_emit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";this._ee&&this._ee.emit(t,e)}},{key:"_setup",value:function(){var e=this;if(!this._ee){var t=window.wafer.utils,n=t.bindEvent,r=t.throttle;this._ee=new G,this._ee.init(),window.wafer.on=this._ee.on.bind(this._ee),window.wafer.removeListener=this._ee.removeListener.bind(this._ee),Object.defineProperty(window.wafer,"state",{configurable:!0,set:function(t){e.state=t}}),this._handleResizeWithThrottle=r(function(){return e._handleResize.call(e)},10,this),this._handleScrollWithThrottle=r(function(){return e._handleScroll.call(e)},10,this),this._handleDelegatedEvent=this._handleDelegatedEvent.bind(this),this._sync=r(function(t){e._wafers.forEach(function(e){e.sync&&e.sync(t)}),e._updateState(t)},0,this),this._saveViewportOffsetWithThrottle=r(function(){e._saveViewportOffset()},50,this),n(document,window.wafer.features.visibilityMeta.visibilityChange,this._handleVisibilityChange),n(window,"resize",this._handleResizeWithThrottle),n(window,"scroll",this._handleScrollWithThrottle),n(document.body,"click",this._handleDelegatedEvent,{passive:!1}),n(document.body,"change",this._handleDelegatedEvent,{passive:!1}),this.__excuteAllRegisteredReadyFns()}}},{key:"_saveViewportOffset",value:function(){this._viewport.bottom=window.innerHeight||document.documentElement.clientHeight,this._viewport.right=window.innerWidth||document.documentElement.clientWidth}},{key:"_updateState",value:function(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=t.querySelectorAll("script.wafer-state"),r=0;e=n[r];++r){if(!e.classList){try{this.state=JSON.parse(e.textContent)}catch(e){}return}if(!e.classList.contains("state-added")){try{this.state=JSON.parse(e.textContent)}catch(t){e.classList.add("state-error")}e.classList.add("state-added")}}}},{key:"_handleResize",value:function(){this._saveViewportOffsetWithThrottle(),this._wafers.forEach(function(e){e._state&&e._state.mounted&&e.handleResize&&e.handleResize()})}},{key:"_handleVisibilityChange",value:function(){var e=!document[window.wafer.features.visibilityMeta.hidden];this._isPageVisible=e,this._wafers.forEach(function(t){t._state&&t._state.mounted&&t.handleVisibilityChange&&t.handleVisibilityChange(e)})}},{key:"_handleScroll",value:function(e){var t={scrollX:window.scrollX||window.pageXOffset,scrollY:window.scrollY||window.pageYOffset};this._ee.emit("scroll",t),this._wafers.forEach(function(e){e._state&&e._state.mounted&&e.handleScroll&&e.handleScroll(t)})}},{key:"_handleDelegatedEvent",value:function(e){for(var t=e.target,n=t;n;)this._wafers.forEach(function(t){t._state&&t._state.mounted&&n.classList.contains(t._options.selector.replace(".",""))&&t.handleEvent(e.type,n,e)}),n=n.parentElement}},{key:"viewport",get:function(){return this._viewport}},{key:"state",get:function(){return this._state},set:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in t)!function(n){if(t.hasOwnProperty(n)){var r=e._state[n];if(void 0===r){var i=e._observerMapping||{};Object.defineProperty(e._state,n,{configurable:!0,get:function(){return r},set:function(e){var t=i[n]||[];r=e,setTimeout(function(){t.forEach(function(e){return e()})},0)}})}Object(t[n])===t[n]?e._state[n]=te({},e._state[n],t[n]):e._state[n]=t[n]}}(n)}},{key:"isPageVisible",get:function(){return this._isPageVisible}},{key:"isIORetrySupported",get:function(){var e=this._hostConfig||{},t=e.retryIODisable;return!(void 0!==t&&t)}},{key:"_wafers",get:function(){return(window.wafer.wafers&&Object.keys(window.wafer.wafers)||[]).reduce(function(e,t){return!0===window.wafer.wafers[t].__esModule?(e.push(window.wafer.wafers[t].default),e):(e.push(window.wafer.wafers[t]),e)},[])}}]),e}(),oe=ie,ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ue=/\[([\w\.-]*)]/g,le=/\[([\w\.-]*)]/g,fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.get;return e.replace(ue,function(e){e=e.slice(1,-1);var t=e.split("."),r=t.slice(1,t.length);return n(window.wafer.base.state,r)})},de=new Map([["focusin",{passive:!1}],["focusout",{passive:!1}],["keydown",{passive:!1}],["keyup",{passive:!1}],["focusin",{passive:!1}],["mousedown",{passive:!1}],["mouseup",{passive:!0}],["mouseleave",{passive:!1}],["mouseover",{passive:!1}],["mousemove",{passive:!0}],["touchstart",{passive:!0}],["touchend",{passive:!0}],["touchmove",{passive:!1}]]),ve=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.selector,o=arguments[2],a=o.STATE_ATTRS,s=o.DEFAULT_STATE_KEY_TO_UPDATE,l=void 0===s?"":s;u(this,e),this._util={elem:t,selector:i};var f=window.wafer,d=f.constants,v=f.utils,h=d.ATTR_PREFIX,w=void 0===h?"data-wf-":h,m=window.wafer.base,y=this.stateDidUpdate&&this.stateDidUpdate.bind(this),p=(t.getAttribute(w+"on")||"").split(":"),g=se(p,3),b=g[0],_=void 0===b?"complete":b,E=g[1],T=void 0===E?"setState":E,C=g[2],S=void 0===C?l:C;_=_||"complete",S&&"complete"===_&&("setState"===T?this._util.shouldUpdateState=!0:"toggleState"===T&&(this._util.shouldToggleState=!0),this._util.stateKeysToUpdate=S.split(".")),y&&a.forEach(function(e){var r=t.getAttribute(w+"["+e+"]")||t.getAttribute(w+"state-"+e),i=t.getAttribute(""+w+e);if(r)for(var o=void 0;null!==(o=le.exec(r));){var a=o[1],s=a.split("."),u=c(s),l=u[0],f=u.slice(1);if("state"===l){var d=fe(r,v);i||-1!==d.indexOf(null)||(n._util[e]=d),m.addObserver(f[0],function(){n._util[e]=fe(r,v),-1===n._util[e].indexOf(null)&&y({stateAttr:e})})}}})}return ce(e,[{key:"addEventListeners",value:function(){this._addEventListenerToEvents(window.wafer.utils.bindEvent,"bindEvent")}},{key:"removeEventListeners",value:function(){this._addEventListenerToEvents(window.wafer.utils.unbindEvent,"unbindEvent")}},{key:"_addEventListenerToEvents",value:function(e,t){var n=this,r=this._util.elem,i=this.constructor.events,o="bindEvent"===t;if(i){for(var a in i){(function(t){if(i.hasOwnProperty(t)){var a=function(){if(!de.has(t))return{v:"continue"};var a=i[t],c=de.get(t),u=!0,l=!1,f=void 0;try{for(var d,v=a[Symbol.iterator]();!(u=(d=v.next()).done);u=!0){var h=d.value,w=se(h,2),m=w[0],y=w[1];!function(i,a){var u=void 0;(u="_self"===i?r:[].concat(s(r.getElementsByClassName(i))))&&n[a]&&(o&&(n[a]=n[a].bind(n)),Array.isArray(u)?u.forEach(function(r){e.call(n,r,t,n[a],c)}):e.call(n,u,t,n[a],c))}(m,y)}}catch(e){l=!0,f=e}finally{try{!u&&v.return&&v.return()}finally{if(l)throw f}}}();if("object"===(void 0===a?"undefined":ae(a)))a.v}})(a)}}}},{key:"didComplete",value:function(e,t){var n=this._util,r=n.shouldToggleState,i=n.shouldUpdateState,o=n.stateKeysToUpdate;if(i){var s={};o.reduce(function(e,n,r){return e[n]=e[n]||{},r===o.length-1&&(e[n]=t),e[n]},s),window.wafer.base.state=s}else if(r){var u=c(o),l=u[0],f=u.slice(1),d=f.length;if(d){var v=window.wafer.base.state[l]||{};f.reduce(function(e,t,n){return e[t]=n===d-1?!e[t]:e[t]||{},e[t]},v),window.wafer.state=a({},l,v)}else window.wafer.state=a({},l,!window.wafer.base.state[l])}}},{key:"destroy",value:function(){var e=this._util,t=e.elem,n=e.selector;t&&(n&&t.classList.remove(n.replace(".","")),t.classList.add("wafer-destroyed")),this._util={},this._state={}}}]),e}(),he=ve,we=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),pe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.root,r=t.selector,i=t.props,o=void 0===i?{}:i,a=t.WaferClass;l(this,e),this._state={elementInstances:new Map,mounted:!1},this._options={props:o,root:n,selector:r,WaferClass:a},a&&a.events&&Object.keys(a.events).forEach(function(e){a.events[e]=new Map(a.events[e])})}return ye(e,[{key:"handleResize",value:function(){var e=this._state.elementInstances,t=!0,n=!1,r=void 0;try{for(var i,o=e.values()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=a.instance,c=s.handleResize;c&&c.call(s)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}},{key:"handleEvent",value:function(e,t,n){var r=this._options.WaferClass;if(r&&r.events){var i=this._state.elementInstances,o=i.get(t);o&&this._handleEvent(e,n,o)}}},{key:"sync",value:function(e){var t=this._state.elementInstances,n=this._options,r=n.props,i=n.root,o=n.selector,a=n.successClass,s=n.WaferClass,c=[];o&&(c=Array.prototype.slice.call((e||i).getElementsByClassName(o.replace(".",""))).filter(function(e){return!e.classList.contains(a)}));var u=c.length;if(u){var l=this.willSync;l&&l.call(this,e),c.forEach(function(e){t.has(e)||t.set(e,{instance:s&&new s(e,me({},r,{selector:o}))})})}if(this.validate(e),u){var f=this.didSync;f&&f.call(this,e)}}},{key:"handleTrigger",value:function(e){var t=this._options,n=t.selector,r=t.successClass;if(e.classList.contains(n.replace(".",""))&&!e.classList.contains(r)){var i=this.willTrigger,o=this.trigger,a=this.didTrigger;i&&i.call(this,e),o&&this.trigger(e),a&&a.call(this,e)}}},{key:"validate",value:function(e){if(0===this._state.elementInstances.size)return void this.destroy();var t=this.willValidate,n=this.didValidate;t&&t.call(this,e),this._state.mounted=!0,n&&n.call(this,e)}},{key:"destroy",value:function(e){var t=this.willDestroy,n=this.didDestroy;if(e){var r=this._state.elementInstances;if(r.has(e)){t&&t.call(this,e);var i=r.get(e),o=i.instance;o&&o.destroy(),r.delete(e),n&&n.call(this,e)}}else t&&t.call(this),this._destroyAll(),n&&n.call(this)}},{key:"_destroyAll",value:function(){var e=this._state,t=!0,n=!1,r=void 0;try{for(var i,o=e.elementInstances.values()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=a.instance;s&&s.destroy()}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}e.elementInstances.clear(),e.mounted=!1}},{key:"_handleEvent",value:function(e,t,n){var r=this._options.WaferClass,i=r.events[e];if(i)for(var o=t.target;o;)if(o.className){var a=void 0,s=!0,c=!1,u=void 0;try{for(var l,f=i.entries()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var d=l.value,v=we(d,2),h=v[0],w=v[1];if(o.classList.contains(h)){var m=n.instance,y=m&&m[w];t.eventTarget=o,y&&y(t),a=!0;break}}}catch(e){c=!0,u=e}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}o=a?null:o.parentElement}else o=o.parentElement}}]),e}(),ge=pe,be=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Te=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.containerClass,r=void 0===n?null:n,i=e.error,o=void 0!==i&&i,a=e.errorClass,s=void 0===a?"wafer-error":a,c=e.root,u=void 0===c?document:c,l=e.selector,v=e.src,h=void 0===v?"data-wf-src":v,w=e.success,m=void 0!==w&&w,y=e.successClass,p=void 0===y?"wafer-lazy-loaded":y,g=e.validateDelay,b=void 0===g?25:g;f(this,t);var _=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:u,selector:l})),E=window.wafer.utils.throttle;return _._options=_e({},_._options,{container:!!r&&u.getElementsByClassName(r),containerClass:r,error:o,errorClass:s,isRetina:window.devicePixelRatio>1,src:h,success:m,successClass:p}),_._validateWithThrottle=E(function(){_.validate()},b,_),_}return v(t,e),Ee(t,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"willDestroy",value:function(){var e=this,t=this._options.container;if(t){var n=window.wafer.utils,r=n.each,i=n.unbindEvent;r(t,function(t){i(t,"scroll",e._validateWithThrottle)})}}},{key:"didSync",value:function(){var e=this,t=this._state,n=t.elementInstances,r=t.mounted;if(0!==n.size){var i=this._options,o=i.container,a=i.defaultOffsetY,s=void 0===a?100:a,c=i.defaultOffsetX,u=void 0===c?0:c,l=!0,f=!1,d=void 0;try{for(var v,h=n.entries()[Symbol.iterator]();!(l=(v=h.next()).done);l=!0){var w=v.value,m=be(w,2),y=m[0],p=m[1];p=void 0===p?{}:p;var g=p.offsetX,b=p.offsetY;if(void 0===g||void 0===b){var _=n.get(y),E=(y.getAttribute("data-wf-margin")||"").split(" "),T=be(E,2),C=T[0],S=T[1];_.offsetY=Number(C)||s,_.offsetX=Number(S)||u}}}catch(e){f=!0,d=e}finally{try{!l&&h.return&&h.return()}finally{if(f)throw d}}if(!r&&(this._state.mounted=!0,o)){var O=window.wafer.utils,k=O.bindEvent;(0,O.each)(o,function(t){k(t,"scroll",e._validateWithThrottle)})}}}},{key:"willValidate",value:function(){var e=this._state.elementInstances,t=window.wafer,n=t.base,r=t.utils,i=r.elementInView,o=this._options,a=!0,s=!1,c=void 0;try{for(var u,l=e.entries()[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var f=u.value,d=be(f,2),v=d[0],h=d[1];h=void 0===h?{}:h;var w=h.offsetX,m=h.offsetY;"onLoad"===(v.getAttribute("data-wf-trigger")||"viewport")?(this._load(v,!0),e.delete(v)):(i(v,_e({},o,{offsetX:w,offsetY:m}),n.viewport)||v.classList.contains(o.successClass))&&(this._load(v),e.delete(v))}}catch(e){s=!0,c=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw c}}}},{key:"_shouldLoadElement",value:function(e,t){var n=this._options.successClass;return!e.classList.contains(n)&&(t||e.offsetWidth>0&&e.offsetHeight>0)}},{key:"_loadElement",value:function(e,t){var n=this,r=this._state.elementInstances,i=r.get(e),o=parseInt(e.getAttribute("data-wf-timeout"),10)||0;!0!==i.pending&&(o?setTimeout(function(){return n.loadElement(e,t)},o):this.loadElement(e,t),i.pending=!0)}},{key:"_load",value:function(e,t){var n=this;if(e&&void 0===e.length)this._loadElement(e);else{(0,window.wafer.utils.each)(e,function(e){n._loadElement(e,t)})}}},{key:"_itemLoaded",value:function(e){var t=this._options,n=t.src,r=t.selector,i=t.success,o=t.successClass;e.classList.remove(r.replace(".","")),e.classList.add(o),i&&i(e),e.removeAttribute(n)}}]),t}(ge),Ce=Te,Se=function(){var e=[];return{add:function(t,n){if("function"==typeof t)return window.wafer.on?void t.call(n):void e.push({scope:n,fn:t})},executeAll:function(){e.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fn,n=e.scope;t.call(n)}),e=[]}}}();n.d(t,"base",function(){return xe}),n.d(t,"controllers",function(){return je}),n.d(t,"ready",function(){return ke}),n.d(t,"constants",function(){return F}),n.d(t,"features",function(){return h}),n.d(t,"utils",function(){return w}),n.d(t,"WaferBaseClass",function(){return he});var Oe=Se.executeAll,ke=Se.add,xe=new oe;xe.__excuteAllRegisteredReadyFns=Oe;var je={WaferBaseController:ge,WaferLazyController:Ce}}})});