!function(t){var e={};function __webpack_require__(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,n){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},__webpack_require__.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)__webpack_require__.d(n,r,function(e){return t[e]}.bind(null,r));return n},__webpack_require__.n=function(t){var e=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="https://sta-op.douyucdn.cn/front-publish/live-master/",__webpack_require__(__webpack_require__.s=0)}({0:function(t,e,n){t.exports=n("08e1d")},"00c22":function(t,e,n){var r=n("1139d"),o=n("1ae51").set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,u="process"==n("0116c")(a);t.exports=function(){var t,e,n,s=function(){var r,o;for(u&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(u)n=function(){a.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve();n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,d=document.createTextNode("");new i(s).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},"0116c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"08e1d":function(t,e,n){"use strict";"Promise"in window?n("593df"):(n("a8e29"),n("593df"))},"0e717":function(t,e,n){var r=n("4d073");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"0fcd6":function(t,e,n){"use strict";var r=n("4d073");t.exports.f=function(t){return new function PromiseCapability(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},"1139d":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},12323:function(t,e,n){var r=n("d3439"),o=n("d394d"),i=n("5f6ed")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"145c4":function(t,e,n){var r=n("e3136"),o=n("380c0");t.exports=Object.keys||function keys(t){return r(t,o)}},"1ae51":function(t,e,n){var r,o,i,a=n("0e717"),c=n("5a3b9"),u=n("5b9dc"),s=n("68a98"),f=n("1139d"),l=f.process,d=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,v=f.Dispatch,y=0,_={},m=function(){var t=+this;if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},b=function(t){m.call(t.data)};d&&p||(d=function setImmediate(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return _[++y]=function(){c("function"==typeof t?t:Function(t),e)},r(y),y},p=function clearImmediate(t){delete _[t]},"process"==n("0116c")(l)?r=function(t){l.nextTick(a(m,t,1))}:v&&v.now?r=function(t){v.now(a(m,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=b,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){u.appendChild(s("script")).onreadystatechange=function(){u.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:d,clear:p}},"1b01d":function(t,e,n){var r=n("79c91"),o=n("bc1a3"),i=n("4ef7a"),a=Object.defineProperty;e.f=n("5975c")?Object.defineProperty:function defineProperty(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"1f315":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"2076e":function(t,e,n){var r=n("efae1"),o=n("ca19e"),i=n("23d43");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},"224ae":function(t,e){t.exports={}},"23d43":function(t,e,n){var r=n("1f315"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},"273d2":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"2d13d":function(t,e,n){var r=n("1139d"),o=n("5925d"),i=n("5f25c"),a=n("88db2"),c=n("0e717"),u=function(t,e,n){var s,f,l,d,p=t&u.F,h=t&u.G,v=t&u.S,y=t&u.P,_=t&u.B,m=h?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,b=h?o:o[e]||(o[e]={}),w=b.prototype||(b.prototype={});for(s in h&&(n=e),n)l=((f=!p&&m&&void 0!==m[s])?m:n)[s],d=_&&f?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,m&&a(m,s,l,t&u.U),b[s]!=l&&i(b,s,d),y&&w[s]!=l&&(w[s]=l)};r.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},30701:function(t,e,n){"use strict";var r=n("a5e6f"),o=n("dabaa"),i=n("224ae"),a=n("efae1");t.exports=n("429cf")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},"3128e":function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function echelon(t,e){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,echelon),this.nextEchelon=null,this.config=t,this.name=e}return echelon.prototype.pull=function pull(){var t=this;this.requires.load(this.config,function(){t.goNext()},this.name)},echelon.prototype.goNext=function goNext(){this.nextEchelon&&this.nextEchelon.pull()},echelon.prototype.setNext=function setNext(t){this.nextEchelon=t},echelon.prototype.setRequires=function setRequires(t){this.requires=t},echelon}();e.default=r},"32b71":function(t,e,n){var r=n("0116c"),o=n("621a6")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},"340db":function(t,e,n){"use strict";var r=n("770f7")(!0);n("429cf")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},"380c0":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"4133d":function(t,e,n){var r=n("0e717"),o=n("43572"),i=n("71d3e"),a=n("79c91"),c=n("ca19e"),u=n("f8851"),s={},f={};(e=t.exports=function(t,e,n,l,d){var p,h,v,y,_=d?function(){return t}:u(t),m=r(n,l,e?2:1),b=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(i(_)){for(p=c(t.length);p>b;b++)if((y=e?m(a(h=t[b])[0],h[1]):m(t[b]))===s||y===f)return y}else for(v=_.call(t);!(h=v.next()).done;)if((y=o(v,m,h.value,e))===s||y===f)return y}).BREAK=s,e.RETURN=f},"429cf":function(t,e,n){"use strict";var r=n("46a1a"),o=n("2d13d"),i=n("88db2"),a=n("5f25c"),c=n("d3439"),u=n("224ae"),s=n("5c5d3"),f=n("62828"),l=n("12323"),d=n("621a6")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,y,_,m){s(n,e,v);var b,w,g,x=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":return function keys(){return new n(this,t)};case"values":return function values(){return new n(this,t)}}return function entries(){return new n(this,t)}},S=e+" Iterator",O="values"==y,A=!1,M=t.prototype,L=M[d]||M["@@iterator"]||y&&M[y],j=!p&&L||x(y),C=y?O?x("entries"):j:void 0,E="Array"==e&&M.entries||L;if(E&&(g=l(E.call(new t)))!==Object.prototype&&g.next&&(f(g,S,!0),r||c(g,d)||a(g,d,h)),O&&L&&"values"!==L.name&&(A=!0,j=function values(){return L.call(this)}),r&&!m||!p&&!A&&M[d]||a(M,d,j),u[e]=j,u[S]=h,y)if(b={values:O?j:x("values"),keys:_?j:x("keys"),entries:C},m)for(w in b)w in M||i(M,w,b[w]);else o(o.P+o.F*(p||A),e,b);return b}},43572:function(t,e,n){var r=n("79c91");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},"43a62":function(t,e,n){var r=n("1139d"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},"46a1a":function(t,e){t.exports=!1},"4d073":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"4ef7a":function(t,e,n){var r=n("a459a");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"503a0":function(t,e,n){var r=n("88db2");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},"574ea":function(t,e,n){var r=n("621a6")("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},"5925d":function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},"593df":function(t,e,n){"use strict";var r=_interopRequireDefault(n("a38f1")),o=_interopRequireDefault(n("3128e"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}if(!window.SHARK_LOADER_CONFIG)throw new Error("\u627e\u4e0d\u5230\u52a0\u8f7d\u914d\u7f6e");var i=SHARK_LOADER_CONFIG||{},a={},c=[],u=function _loop(t){var e=[];if(i[t].map(function(t){e.push(t.name),a[t.name]=t.url}),"Tasync"!==t){var n=new o.default({appName:e},t);c.push(n)}};for(var s in i)u(s);for(var f=1;f<c.length;f++)c[f-1].setNext(c[f]);var l=new r.default(a);c.map(function(t){t.setRequires(l)}),c[0].pull(),window.loader={dispatch:function dispatch(t,e){l.load({appName:t},e)},loadFile:function loadFile(t,e){"[object Array]"===Object.prototype.toString.call(t)&&l.loadByArray(t,e),"[object String]"===Object.prototype.toString.call(t)&&l.loadDynamicJs(t,e)},loadAsyncModule:function loadAsyncModule(t,e){if(!window.SHARK_LOADER_CONFIG)throw new Error("\u627e\u4e0d\u5230\u52a0\u8f7d\u914d\u7f6e");(window.SHARK_LOADER_CONFIG||{}).Tasync.forEach(function(n){var r=n.name,o=n.url;t===r&&window.loader.loadFile(o,e)})},getAsyncModule:function getAsyncModule(t,e){if(!window.SHARK_LOADER_CONFIG)throw new Error("\u627e\u4e0d\u5230\u52a0\u8f7d\u914d\u7f6e");(window.SHARK_LOADER_CONFIG||{}).Tasync.forEach(function(n){var r=n.name,o=n.url;t===r&&l.getAsyncModule(t,o[0],e)})},setAsyncModule:function setAsyncModule(t){l.setAsyncModule(t)}}},"5975c":function(t,e,n){t.exports=!n("7a773")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"5a3b9":function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"5b9dc":function(t,e,n){var r=n("1139d").document;t.exports=r&&r.documentElement},"5c5d3":function(t,e,n){"use strict";var r=n("ef09c"),o=n("9d559"),i=n("62828"),a={};n("5f25c")(a,n("621a6")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},"5f25c":function(t,e,n){var r=n("1b01d"),o=n("9d559");t.exports=n("5975c")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"5f6ed":function(t,e,n){var r=n("43a62")("keys"),o=n("273d2");t.exports=function(t){return r[t]||(r[t]=o(t))}},"621a6":function(t,e,n){var r=n("43a62")("wks"),o=n("273d2"),i=n("1139d").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},62828:function(t,e,n){var r=n("1b01d").f,o=n("d3439"),i=n("621a6")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"68a98":function(t,e,n){var r=n("a459a"),o=n("1139d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"71d3e":function(t,e,n){var r=n("224ae"),o=n("621a6")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"770f7":function(t,e,n){var r=n("1f315"),o=n("7ad2c");t.exports=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},"79c91":function(t,e,n){var r=n("a459a");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7a773":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"7ad2c":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"88db2":function(t,e,n){var r=n("1139d"),o=n("5f25c"),i=n("d3439"),a=n("273d2")("src"),c=Function.toString,u=(""+c).split("toString");n("5925d").inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,a)||o(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function toString(){return"function"==typeof this&&this[a]||c.call(this)})},89701:function(t,e,n){"use strict";var r,o,i,a,c=n("46a1a"),u=n("1139d"),s=n("0e717"),f=n("32b71"),l=n("2d13d"),d=n("a459a"),p=n("4d073"),h=n("fd8b6"),v=n("4133d"),y=n("8b246"),_=n("1ae51").set,m=n("00c22")(),b=n("0fcd6"),w=n("b784f"),g=n("8cea4"),x=u.TypeError,S=u.process,O=u.Promise,A="process"==f(S),M=function(){},L=o=b.f,j=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[n("621a6")("species")]=function(t){t(M,M)};return(A||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof e}catch(t){}}(),C=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},E=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a=o?e.ok:e.fail,c=e.resolve,u=e.reject,s=e.domain;try{a?(o||(2==t._h&&T(t),t._h=1),!0===a?n=r:(s&&s.enter(),n=a(r),s&&s.exit()),n===e.promise?u(x("Promise-chain cycle")):(i=C(n))?i.call(n,c,u):c(n)):u(r)}catch(t){u(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&P(t)})}},P=function(t){_.call(u,function(){var e,n,r,o=t._v,i=k(t);if(i&&(e=w(function(){A?S.emit("unhandledRejection",o,t):(n=u.onunhandledrejection)?n({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=A||k(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},k=function(t){return 1!==t._h&&0===(t._a||t._c).length},T=function(t){_.call(u,function(){var e;A?S.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},R=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),E(e,!0))},N=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw x("Promise can't be resolved itself");(e=C(t))?m(function(){var r={_w:n,_d:!1};try{e.call(t,s(N,r,1),s(R,r,1))}catch(t){R.call(r,t)}}):(n._v=t,n._s=1,E(n,!1))}catch(t){R.call({_w:n,_d:!1},t)}}};j||(O=function Promise(t){h(this,O,"Promise","_h"),p(t),r.call(this);try{t(s(N,this,1),s(R,this,1))}catch(t){R.call(this,t)}},(r=function Promise(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("503a0")(O.prototype,{then:function then(t,e){var n=L(y(this,O));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=A?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&E(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(N,t,1),this.reject=s(R,t,1)},b.f=L=function(t){return t===O||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!j,{Promise:O}),n("62828")(O,"Promise"),n("89a21")("Promise"),a=n("5925d").Promise,l(l.S+l.F*!j,"Promise",{reject:function reject(t){var e=L(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!j),"Promise",{resolve:function resolve(t){return g(c&&this===a?O:this,t)}}),l(l.S+l.F*!(j&&n("574ea")(function(t){O.all(t).catch(M)})),"Promise",{all:function all(t){var e=this,n=L(e),r=n.resolve,o=n.reject,i=w(function(){var n=[],i=0,a=1;v(t,!1,function(t){var c=i++,u=!1;n.push(void 0),a++,e.resolve(t).then(function(t){u||(u=!0,n[c]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function race(t){var e=this,n=L(e),r=n.reject,o=w(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},"89a21":function(t,e,n){"use strict";var r=n("1139d"),o=n("1b01d"),i=n("5975c"),a=n("621a6")("species");t.exports=function(t){var e=r[t];i&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},"8b246":function(t,e,n){var r=n("79c91"),o=n("4d073"),i=n("621a6")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},"8cea4":function(t,e,n){var r=n("79c91"),o=n("a459a"),i=n("0fcd6");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},"9d559":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},a38f1:function(t,e,n){"use strict";e.__esModule=!0;var r=function MockReplay(){var t=null,e=new Promise(function(e){t=e});return e.next=function(){return t()},e},o=function(){function Loader(t){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Loader),this.config=t,this.asyncModuleCB={},this.asyncModule={},this.body=document.getElementsByTagName("body")[0],this.loader=document.createElement("div"),this.cacheVersions="v0.0.1",this.loadHistory={},this.loader.setAttribute("data-module","loader"),this.loader.style.display="none",this.body.appendChild(this.loader),window.player_video_ready=r(),window.onload_notify=r(),window.onload=function(){return window.onload_notify.next()}}return Loader.prototype.filterUrl=function filterUrl(t,e){if((t=t?t.split(/\?/)[0]:"").match(/\..+$/))e&&e(null,t);else{var n=t;(t=this.config[n]||"")?e&&e(null,t):e&&e("\u627e\u4e0d\u5230\u6a21\u5757")}},Loader.prototype.loadStart=function loadStart(t,e){if(t.indexOf(".css")>=0)this.loadCSS(t,function(){e&&e(null)});else{if(!(t.indexOf(".js")>=0))throw new Error("\u65e0\u6cd5\u8bc6\u522b\u7684\u683c\u5f0f");this.loadJS(t,function(){e&&e(null)})}},Loader.prototype.loadJS=function loadJS(t,e){var n=document.createElement("script");n.type="text/javascript",n.charset="UTF-8",-1===t.toLowerCase().indexOf("sta-op.douyucdn")&&-1===t.toLowerCase().indexOf("sta-op-test.douyucdn")||(n.crossOrigin="anonymous"),n.defer=!0,n.async=!1,n.src=t,/MSIE ([6789]\.\d+;)/.exec(navigator.userAgent)||-1!==t.indexOf("room/page")?(n.onload=function(){e&&e()},n.onerror=function(){e&&e()},this.loader.appendChild(n)):(this.loader.appendChild(n),e&&e())},Loader.prototype.loadDynamicJs=function loadDynamicJs(t,e){var n=document.createElement("script");n.type="text/javascript",n.charset="UTF-8",-1===t.toLowerCase().indexOf("sta-op.douyucdn")&&-1===t.toLowerCase().indexOf("sta-op-test.douyucdn")||(n.crossOrigin="anonymous"),n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e&&e())}:(n.onload=function(){e&&e()},n.onerror=function(t){e&&e(t)}),n.src=t,this.loader.appendChild(n)},Loader.prototype.getAsyncModule=function getAsyncModule(t,e,n){var r=this.asyncModuleCB[t];if(r)this.asyncModuleCB[t].push(n);else{r=[];var o=document.createElement("script");o.type="text/javascript",o.charset="UTF-8",-1===e.toLowerCase().indexOf("sta-op.douyucdn")&&-1===e.toLowerCase().indexOf("sta-op-test.douyucdn")||(o.crossOrigin="anonymous"),r.push(n),this.asyncModuleCB[t]=r,o.src=e,this.loader.appendChild(o)}var i=this.asyncModule[t];i&&this.setAsyncModule(i)},Loader.prototype.setAsyncModule=function setAsyncModule(t){var e=t.options.name;this.asyncModule[e]||(this.asyncModule[e]=t);var n=this.asyncModuleCB[e];if(!n)throw new Error("\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\u5217\u8868\u3002");for(var r=n.length,o=0;o<r;o++){var i=n.shift();if("function"!==typeof i)throw new Error("\u5f02\u6b65\u56de\u8c03\u5fc5\u987b\u662f\u4e00\u4e2a\u51fd\u6570\u3002");i.call(t,t)}},Loader.prototype.loadCSS=function loadCSS(t,e){var n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=t,document.head.appendChild(n),e&&e()},Loader.prototype.loading=function loading(t,e){var n=this;switch(this.loadHistory[t]=this.loadHistory[t]||"waiting",this.loadHistory[t]){case"done":e&&e(null);break;case"loading":var r=setInterval(function(){(n.loadHistory[t]="done")&&(clearInterval(r),e&&e(null))},100);break;case"waiting":this.loadHistory[t]="loading",this.loadStart(t,function(r,o){n.loadHistory[t]="done",o?e&&e(r):e&&e()})}},Loader.prototype.loadByArray=function loadByArray(t,e){for(var n=0,r=t.length,o=0,i=0;i<t.length;i++)this.loading(t[i],function(t){t&&o++,++n===r&&e&&e(o)})},Loader.prototype.load=function load(t,e,n){var r=this;if(t.appName&&!(t.appName.length<1)){for(var o=0,i=t.appName.length,a=!1,c=0;c<i;c++)if("player"===t.appName[c]){a=!0;break}for(var u=0;u<t.appName.length;u++)this.filterUrl(t.appName[u],function(t,c){c instanceof Array?r.loadByArray(c,function(t){if(t>0&&t,++o===i){var c=window.SHARK_LOADER_ASYNC_CONFIG&&window.SHARK_LOADER_ASYNC_CONFIG[n];c?c().then(function(){r.nextCallback(a,e)}):r.nextCallback(a,e)}}):r.loading(c,function(t){t&&0,++o===i&&e&&e()})})}},Loader.prototype.nextCallback=function nextCallback(t,e){t?Promise.race([Promise.all([window.player_video_ready,window.onload_notify]),new Promise(function(t){return setTimeout(t,2e3)})]).then(function(){e&&e()}):e&&e()},Loader}();e.default=o},a459a:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},a537d:function(t,e,n){var r=n("0116c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},a5e6f:function(t,e,n){var r=n("621a6")("unscopables"),o=Array.prototype;void 0==o[r]&&n("5f25c")(o,r,{}),t.exports=function(t){o[r][t]=!0}},a6d64:function(t,e,n){var r=n("1b01d"),o=n("79c91"),i=n("145c4");t.exports=n("5975c")?Object.defineProperties:function defineProperties(t,e){o(t);for(var n,a=i(e),c=a.length,u=0;c>u;)r.f(t,n=a[u++],e[n]);return t}},a8e29:function(t,e,n){n("aae15"),n("340db"),n("c08bb"),n("89701"),t.exports=n("5925d").Promise},aae15:function(t,e,n){"use strict";var r=n("32b71"),o={};o[n("621a6")("toStringTag")]="z",o+""!="[object z]"&&n("88db2")(Object.prototype,"toString",function toString(){return"[object "+r(this)+"]"},!0)},b784f:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},bc1a3:function(t,e,n){t.exports=!n("5975c")&&!n("7a773")(function(){return 7!=Object.defineProperty(n("68a98")("div"),"a",{get:function(){return 7}}).a})},c08bb:function(t,e,n){for(var r=n("30701"),o=n("145c4"),i=n("88db2"),a=n("1139d"),c=n("5f25c"),u=n("224ae"),s=n("621a6"),f=s("iterator"),l=s("toStringTag"),d=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(p),v=0;v<h.length;v++){var y,_=h[v],m=p[_],b=a[_],w=b&&b.prototype;if(w&&(w[f]||c(w,f,d),w[l]||c(w,l,_),u[_]=d,m))for(y in r)w[y]||i(w,y,r[y],!0)}},ca19e:function(t,e,n){var r=n("1f315"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},d3439:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},d394d:function(t,e,n){var r=n("7ad2c");t.exports=function(t){return Object(r(t))}},dabaa:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},e3136:function(t,e,n){var r=n("d3439"),o=n("efae1"),i=n("2076e")(!1),a=n("5f6ed")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},ef09c:function(t,e,n){var r=n("79c91"),o=n("a6d64"),i=n("380c0"),a=n("5f6ed")("IE_PROTO"),c=function(){},u=function(){var t,e=n("68a98")("iframe"),r=i.length;for(e.style.display="none",n("5b9dc").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function create(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},efae1:function(t,e,n){var r=n("a537d"),o=n("7ad2c");t.exports=function(t){return r(o(t))}},f8851:function(t,e,n){var r=n("32b71"),o=n("621a6")("iterator"),i=n("224ae");t.exports=n("5925d").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},fd8b6:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}}});
//# sourceMappingURL=http://fedci.dz11.com:4567/room/online/sourcemaps/shark-file-loader_9b06df1.js.map