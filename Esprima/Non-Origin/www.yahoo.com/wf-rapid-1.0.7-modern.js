!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("wafer-rapid",[],r):"object"==typeof exports?exports["wafer-rapid"]=r():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-rapid"]=r())}("undefined"!=typeof self?self:this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="https://s.yimg.com/aaq/wf/",r(r.s="./src/entry.js")}({"./src/entry.js":function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),u=window.wafer.utils,a=u.convertNodeListToArray,f=u.get,c=u.findAncestor,l=null,s=null,d=function(e){var r={id:e.id},t=e.getAttribute("data-i13n");return t&&(r=t.split(";").reduce(function(e,r){var t=r.split(":");return 2===t.length&&(e[t[0]]=t[1]),e},r)),r},p=function(){return!l&&s&&(l=f(window,s))&&"function"!=typeof l.refreshModule&&(s=null,l=null),l},w=function(e){if(!e.id)return!1;var r=p();if(!r)return!1;var t=d(e),n=t.id;if(r.isModuleTracked(n))r.refreshModule(n);else{var i=t.sec?o({},n,t.sec):[n];r.addModulesWithViewability(i)}return!0},y=function(){function e(){n(this,e),s=(document.body.getAttribute("data-wf-rapid")||"rapidInstance").split(".")}return i(e,[{key:"sync",value:function(e){if(e){var r=c(e,"wafer-rapid-module");r&&w(r);var t=a(e.getElementsByClassName("wafer-rapid-module"));t.length>0&&Array.prototype.forEach.call(t,function(e){w(e)})}}}]),e}(),b=y;r.default=new b}})});