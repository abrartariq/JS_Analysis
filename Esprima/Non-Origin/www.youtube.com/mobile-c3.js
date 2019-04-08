(function(){var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ca(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function da(a){if(!(a instanceof Array)){a=ca(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Hc:!0},ja={};try{ja.__proto__=ia;ha=ja.Hc;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=fa;
function la(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ba=b.prototype}
var ma="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},na="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function oa(a,b){if(b){for(var c=na,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ma(c,d,{configurable:!0,writable:!0,value:f})}}
function qa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
oa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
oa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
oa("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){d=g;break a}}d=void 0}return d}});
function ra(){ra=function(){};
na.Symbol||(na.Symbol=sa)}
function ta(a,b){this.b=a;ma(this,"description",{configurable:!0,writable:!0,value:b})}
ta.prototype.toString=function(){return this.b};
var sa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ta("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ua(){ra();var a=na.Symbol.iterator;a||(a=na.Symbol.iterator=na.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ma(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return va(aa(this))}});
ua=function(){}}
function va(a){ua();a={next:a};a[na.Symbol.iterator]=function(){return this};
return a}
function wa(a,b){ua();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
function xa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ya="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)xa(d,e)&&(a[e]=d[e])}return a};
oa("Object.assign",function(a){return a||ya});
oa("Promise",function(a){function b(g){this.f=0;this.g=void 0;this.b=[];var h=this.o();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.b=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.f=function(g){if(null==this.b){this.b=[];var h=this;this.g(function(){h.B()})}this.b.push(g)};
var e=na.setTimeout;c.prototype.g=function(g){e(g,0)};
c.prototype.B=function(){for(;this.b&&this.b.length;){var g=this.b;this.b=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(n){this.o(n)}}}this.b=null};
c.prototype.o=function(g){this.g(function(){throw g;})};
b.prototype.o=function(){function g(n){return function(q){l||(l=!0,n.call(h,q))}}
var h=this,l=!1;return{resolve:g(this.Y),reject:g(this.B)}};
b.prototype.Y=function(g){if(g===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ea(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.W(g):this.C(g)}};
b.prototype.W=function(g){var h=void 0;try{h=g.then}catch(l){this.B(l);return}"function"==typeof h?this.fa(h,g):this.C(g)};
b.prototype.B=function(g){this.K(2,g)};
b.prototype.C=function(g){this.K(1,g)};
b.prototype.K=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.g=h;this.S()};
b.prototype.S=function(){if(null!=this.b){for(var g=0;g<this.b.length;++g)f.f(this.b[g]);this.b=null}};
var f=new c;b.prototype.ea=function(g){var h=this.o();g.wa(h.resolve,h.reject)};
b.prototype.fa=function(g,h){var l=this.o();try{g.call(h,l.resolve,l.reject)}catch(n){l.reject(n)}};
b.prototype.then=function(g,h){function l(A,D){return"function"==typeof A?function(S){try{n(A(S))}catch(ba){q(ba)}}:D}
var n,q,v=new b(function(A,D){n=A;q=D});
this.wa(l(g,n),l(h,q));return v};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.wa=function(g,h){function l(){switch(n.f){case 1:g(n.g);break;case 2:h(n.g);break;default:throw Error("Unexpected state: "+n.f);}}
var n=this;null==this.b?f.f(l):this.b.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var n=ca(g),q=n.next();!q.done;q=n.next())d(q.value).wa(h,l)})};
b.all=function(g){var h=ca(g),l=h.next();return l.done?d([]):new b(function(n,q){function v(S){return function(ba){A[S]=ba;D--;0==D&&n(A)}}
var A=[],D=0;do A.push(void 0),D++,d(l.value).wa(v(A.length-1),q),l=h.next();while(!l.done)})};
return b});
oa("Array.prototype.entries",function(a){return a?a:function(){return wa(this,function(b,c){return[b,c]})}});
oa("WeakMap",function(a){function b(h){this.b=(g+=Math.random()+1).toString();if(h){h=ca(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){xa(h,f)||ma(h,f,{value:new c})}
function e(h){var l=Object[h];l&&(Object[h]=function(n){if(n instanceof c)return n;d(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),n=new a([[h,2],[l,3]]);if(2!=n.get(h)||3!=n.get(l))return!1;n["delete"](h);n.set(l,4);return!n.has(h)&&4==n.get(l)}catch(q){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(h,l){d(h);if(!xa(h,f))throw Error("WeakMap key fail: "+h);h[f][this.b]=l;return this};
b.prototype.get=function(h){return xa(h,f)?h[f][this.b]:void 0};
b.prototype.has=function(h){return xa(h,f)&&xa(h[f],this.b)};
b.prototype["delete"]=function(h){return xa(h,f)&&xa(h[f],this.b)?delete h[f][this.b]:!1};
return b});
oa("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var n=h.b;return va(function(){if(n){for(;n.head!=h.b;)n=n.previous;for(;n.next!=n.head;)return n=n.next,{done:!1,value:l(n)};n=null}return{done:!0,value:void 0}})}
function d(h,l){var n=l&&typeof l;"object"==n||"function"==n?f.has(l)?n=f.get(l):(n=""+ ++g,f.set(l,n)):n="p_"+l;var q=h.f[n];if(q&&xa(h.f,n))for(var v=0;v<q.length;v++){var A=q[v];if(l!==l&&A.key!==A.key||l===A.key)return{id:n,list:q,index:v,M:A}}return{id:n,list:q,index:-1,M:void 0}}
function e(h){this.f={};this.b=b();this.size=0;if(h){h=ca(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(ca([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var n=l.entries(),q=n.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=n.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!n.next().done?!1:!0}catch(v){return!1}}())return a;
ua();var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var n=d(this,h);n.list||(n.list=this.f[n.id]=[]);n.M?n.M.value=l:(n.M={next:this.b,previous:this.b.previous,head:this.b,key:h,value:l},n.list.push(n.M),this.b.previous.next=n.M,this.b.previous=n.M,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.M&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.f[h.id],h.M.previous.next=h.M.next,h.M.next.previous=h.M.previous,h.M.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).M};
e.prototype.get=function(h){return(h=d(this,h).M)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var n=this.entries(),q;!(q=n.next()).done;)q=q.value,h.call(l,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
oa("Set",function(a){function b(c){this.b=new Map;if(c){c=ca(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ca([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ua();b.prototype.add=function(c){c=0===c?0:c;this.b.set(c,c);this.size=this.b.size;return this};
b.prototype["delete"]=function(c){c=this.b["delete"](c);this.size=this.b.size;return c};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(c){return this.b.has(c)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.b.forEach(function(f){return c.call(d,f,f,e)})};
return b});
oa("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
oa("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
oa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==qa(this,b,"includes").indexOf(b,c||0)}});
(function(){function a(){function c(){}
Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ea(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}})();
oa("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
var m=this;function za(a){return void 0!==a}
function Aa(a){return"string"==typeof a}
function p(a,b,c){a=a.split(".");c=c||m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&za(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function Ba(a){if(a&&a!=m)return Ca(a.document);null===Da&&(Da=Ca(m.document));return Da}
var Ea=/^[\w+/_-]+[=]{0,2}$/,Da=null;function Ca(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ea.test(a)?a:""}
function r(a,b){for(var c=a.split("."),d=b||m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function t(){}
function Fa(a){a.Ra=void 0;a.O=function(){return a.Ra?a.Ra:a.Ra=new a}}
function Ga(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ha(a){return"array"==Ga(a)}
function Ia(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ja(a){return"function"==Ga(a)}
function Ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Pa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Pa=Na:Pa=Oa;return Pa.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ra=Date.now||function(){return+new Date};
function Sa(a,b){function c(){}
c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Qd=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;var Ua=window;function Va(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Va);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
Sa(Va,Error);Va.prototype.name="CustomError";var Wa;var Xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(Aa(a))return Aa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ya=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Aa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=Aa(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=Aa(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Ya(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},bb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Aa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},cb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Aa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function db(a,b){var c=eb(a,b);return 0>c?null:Aa(a)?a.charAt(c):a[c]}
function eb(a,b){for(var c=a.length,d=Aa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1}
function fb(a,b){var c=Xa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function gb(a,b){var c=eb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function jb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function kb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Ha(d))for(var e=0;e<d.length;e+=8192){var f=jb(d,e,e+8192);f=kb.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function lb(a,b){return 0==a.lastIndexOf(b,0)}
function mb(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}
var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ob(a,b){if(b)a=a.replace(pb,"&amp;").replace(qb,"&lt;").replace(rb,"&gt;").replace(sb,"&quot;").replace(tb,"&#39;").replace(ub,"&#0;");else{if(!vb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ub,"&#0;"))}return a}
var pb=/&/g,qb=/</g,rb=/>/g,sb=/"/g,tb=/'/g,ub=/\x00/g,vb=/[\x00&<>"']/;function wb(a){return a=ob(a,void 0)}
function xb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function yb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function zb(a){var b=Aa(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(c,d,e){return d+e.toUpperCase()})}
;var Ab;a:{var Bb=m.navigator;if(Bb){var Cb=Bb.userAgent;if(Cb){Ab=Cb;break a}}Ab=""}function Db(a){return-1!=Ab.indexOf(a)}
;function Fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Gb(a,b){var c=Ia(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Hb(a){var b=Ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Jb(a){for(var b in a)return!1;return!0}
function Kb(){var a=Lb,b={},c;for(c in a)b[c]=a[c];return b}
function Mb(a){var b=Ga(a);if("object"==b||"array"==b){if(Ja(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Mb(a[c]);return b}return a}
var Nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Nb.length;f++)c=Nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Pb(){return Db("iPhone")&&!Db("iPod")&&!Db("iPad")}
;var Qb=Db("Opera"),Rb=Db("Trident")||Db("MSIE"),Sb=Db("Edge"),Tb=Db("Gecko")&&!(-1!=Ab.toLowerCase().indexOf("webkit")&&!Db("Edge"))&&!(Db("Trident")||Db("MSIE"))&&!Db("Edge"),Ub=-1!=Ab.toLowerCase().indexOf("webkit")&&!Db("Edge"),Vb=Pb()||Db("iPad")||Db("iPod");function Wb(){var a=m.document;return a?a.documentMode:void 0}
var Xb;a:{var Yb="",Zb=function(){var a=Ab;if(Tb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Sb)return/Edge\/([\d\.]+)/.exec(a);if(Rb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ub)return/WebKit\/(\S+)/.exec(a);if(Qb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Zb&&(Yb=Zb?Zb[1]:"");if(Rb){var $b=Wb();if(null!=$b&&$b>parseFloat(Yb)){Xb=String($b);break a}}Xb=Yb}var ac=Xb,bc;var cc=m.document;bc=cc&&Rb?Wb()||("CSS1Compat"==cc.compatMode?parseInt(ac,10):5):void 0;var dc=Pb()||Db("iPod"),ec=Db("iPad");function fc(a){this.b=a||{cookie:""}}
k=fc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');za(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ra()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=za(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var gc=new fc("undefined"==typeof document?null:document);function hc(a){var b=r("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(Aa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,ic[b]?b=ic[b]:(b=String(b),ic[b]||(c=/function\s+([^\(]+)/m.exec(b),ic[b]=c?c[1]:"[Anonymous]"),b=ic[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var ic={};function jc(a){return a}
function kc(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function lc(a,b){this.b=a===mc&&b||"";this.f=nc}
lc.prototype.V=!0;lc.prototype.P=function(){return this.b};
lc.prototype.toString=function(){return"Const{"+this.b+"}"};
function oc(a){return a instanceof lc&&a.constructor===lc&&a.f===nc?a.b:"type_error:Const"}
function pc(a){return new lc(mc,a)}
var nc={},mc={};var qc=!Rb||9<=Number(bc);function rc(a){this.b=a}
rc.prototype.toString=function(){return this.b};function sc(){this.b="";this.f=tc}
sc.prototype.V=!0;var tc={};sc.prototype.P=function(){return this.b.toString()};function uc(){this.b="";this.f=vc}
uc.prototype.V=!0;uc.prototype.P=function(){return this.b.toString()};
uc.prototype.Qa=!0;uc.prototype.Pa=function(){return 1};
function wc(a){return xc(a).toString()}
function xc(a){if(a instanceof uc&&a.constructor===uc&&a.f===vc)return a.b;Ga(a);return"type_error:TrustedResourceUrl"}
function yc(a,b){var c=oc(a);if(!zc.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);var d=c.replace(Ac,function(e,f){if(!Object.prototype.hasOwnProperty.call(b,f))throw Error('Found marker, "'+f+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));var g=b[f];return g instanceof lc?oc(g):encodeURIComponent(String(g))});
return Bc(d)}
var Ac=/%{(\w+)}/g,zc=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,Cc=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,vc={};function Bc(a){var b=new uc;b.b=a;return b}
function Dc(a,b,c){if(null==c)return b;if(Aa(c))return c?a+encodeURIComponent(c):"";for(var d in c){var e=c[d];e=Ha(e)?e:[e];for(var f=0;f<e.length;f++){var g=e[f];null!=g&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(g)))}}return b}
;function Ec(){this.b="";this.f=Gc}
Ec.prototype.V=!0;Ec.prototype.P=function(){return this.b.toString()};
Ec.prototype.Qa=!0;Ec.prototype.Pa=function(){return 1};
function Hc(a){return Ic(a).toString()}
function Ic(a){if(a instanceof Ec&&a.constructor===Ec&&a.f===Gc)return a.b;Ga(a);return"type_error:SafeUrl"}
var Jc=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))$/i,Kc=/^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i,Lc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Mc(a){if(a instanceof Ec)return a;a="object"==typeof a&&a.V?a.P():String(a);Lc.test(a)||(a="about:invalid#zClosurez");return Nc(a)}
function Oc(a,b){if(a instanceof Ec)return a;a="object"==typeof a&&a.V?a.P():String(a);if(b&&/^data:/i.test(a)){var c=a.replace(/(%0A|%0D)/g,"");var d=c.match(Kc);d=d&&Jc.test(d[1]);c=Nc(d?c:"about:invalid#zClosurez");if(c.P()==a)return c}Lc.test(a)||(a="about:invalid#zClosurez");return Nc(a)}
var Gc={};function Nc(a){var b=new Ec;b.b=a;return b}
Nc("about:blank");function Pc(){this.b=Qc}
Pc.prototype.V=!0;var Qc={};Pc.prototype.P=function(){return""};function Rc(){this.b="";this.g=Sc;this.f=null}
Rc.prototype.Qa=!0;Rc.prototype.Pa=function(){return this.f};
Rc.prototype.V=!0;Rc.prototype.P=function(){return this.b.toString()};
function Tc(a){a instanceof Rc&&a.constructor===Rc&&a.g===Sc?a=a.b:(Ga(a),a="type_error:SafeHtml");return a.toString()}
var Sc={};function Uc(a,b){var c=new Rc;c.b=a;c.f=b;return c}
Uc("<!DOCTYPE html>",0);Uc("",0);Uc("<br>",0);function Vc(a,b){oc(a);oc(a);return Bc(b)}
;function Wc(a,b){var c=b instanceof Ec?b:Oc(b);a.href=Ic(c)}
function Xc(a,b){if(b instanceof Ec)var c=b;else c=/^data:image\//i.test(b),c=Oc(b,c);a.src=Ic(c)}
function Yc(a,b){a.src=xc(b);var c=Ba();c&&a.setAttribute("nonce",c)}
function Zc(a,b){var c=b instanceof Ec?b:Oc(b);a.href=Ic(c)}
function $c(a){a=a instanceof Ec?a:Oc(a);window.open(Ic(a),"",void 0,void 0)}
;function ad(a,b){this.x=za(a)?a:0;this.y=za(b)?b:0}
ad.prototype.clone=function(){return new ad(this.x,this.y)};
ad.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
ad.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
ad.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function bd(a,b){this.width=a;this.height=b}
k=bd.prototype;k.clone=function(){return new bd(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function cd(a,b){Fb(b,function(c,d){c&&"object"==typeof c&&c.V&&(c=c.P());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:dd.hasOwnProperty(d)?a.setAttribute(dd[d],c):lb(d,"aria-")||lb(d,"data-")?a.setAttribute(d,c):a[d]=c})}
var dd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ed(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!qc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',wb(g.name),'"');if(g.type){f.push(' type="',wb(g.type),'"');var h={};Ob(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(Aa(g)?f.className=g:Ha(g)?f.className=g.join(" "):cd(f,g));2<d.length&&fd(e,f,d);return f}
function fd(a,b,c){function d(g){g&&b.appendChild(Aa(g)?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ia(f)||Ka(f)&&0<f.nodeType?d(f):Ya(gd(f)?hb(f):f,d)}}
function gd(a){if(a&&"number"==typeof a.length){if(Ka(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ja(a))return"function"==typeof a.item}return!1}
function hd(a,b){if(!b)return null;var c=b?String(b).toUpperCase():null;return id(a,function(d){if(d=!c||d.nodeName==c)d=!0;return d},void 0)}
function id(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function jd(a){this.b=a||m.document||document}
jd.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
jd.prototype.createElement=function(a){return this.b.createElement(String(a))};function kd(a){ld();return Bc(a)}
var ld=t;function md(a){var b=nd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function od(){var a=[];md(function(b){a.push(b)});
return a}
var nd={vd:"allow-forms",wd:"allow-modals",xd:"allow-orientation-lock",yd:"allow-pointer-lock",zd:"allow-popups",Ad:"allow-popups-to-escape-sandbox",Bd:"allow-presentation",Cd:"allow-same-origin",Dd:"allow-scripts",Ed:"allow-top-navigation",Fd:"allow-top-navigation-by-user-activation"},pd=kc(function(){return od()});
function qd(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};Ya(pd(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function rd(a,b){if(Aa("background-image")){var c=sd(a,"background-image");c&&(a.style[c]=b)}else for(c in"background-image"){var d=a,e="background-image"[c],f=sd(d,c);f&&(d.style[f]=e)}}
var td={};function sd(a,b){var c=td[b];if(!c){var d=yb(b);c=d;void 0===a.style[d]&&(d=(Ub?"Webkit":Tb?"Moz":Rb?"ms":Qb?"O":null)+zb(d),void 0!==a.style[d]&&(c=d));td[b]=c}return c}
;var ud=(new Date).getTime();function vd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var wd=window,xd=document,yd=wd.location;function zd(){}
var Ad=/\[native code\]/;function Bd(a,b,c){return a[b]=a[b]||c}
function Cd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Dd(){var a;if((a=Object.create)&&Ad.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ed=Bd(wd,"gapi",{});var Fd;Fd=Bd(wd,"___jsl",Dd());Bd(Fd,"I",0);Bd(Fd,"hel",10);function Gd(){var a=yd.href;if(Fd.dpo)var b=Fd.h;else{b=Fd.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Hd(a){var b=Bd(Fd,"PQ",[]);Fd.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Id(a){return Bd(Bd(Fd,"H",Dd()),a,Dd())}
;function Jd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=n=0}
function b(v){for(var A=g,D=0;64>D;D+=4)A[D/4]=v[D]<<24|v[D+1]<<16|v[D+2]<<8|v[D+3];for(D=16;80>D;D++)v=A[D-3]^A[D-8]^A[D-14]^A[D-16],A[D]=(v<<1|v>>>31)&4294967295;v=e[0];var S=e[1],ba=e[2],pa=e[3],Fc=e[4];for(D=0;80>D;D++){if(40>D)if(20>D){var Ta=pa^S&(ba^pa);var Eb=1518500249}else Ta=S^ba^pa,Eb=1859775393;else 60>D?(Ta=S&ba|pa&(S|ba),Eb=2400959708):(Ta=S^ba^pa,Eb=3395469782);Ta=((v<<5|v>>>27)&4294967295)+Ta+Fc+Eb+A[D]&4294967295;Fc=pa;pa=ba;ba=(S<<30|S>>>2)&4294967295;S=v;v=Ta}e[0]=e[0]+v&4294967295;
e[1]=e[1]+S&4294967295;e[2]=e[2]+ba&4294967295;e[3]=e[3]+pa&4294967295;e[4]=e[4]+Fc&4294967295}
function c(v,A){if("string"===typeof v){v=unescape(encodeURIComponent(v));for(var D=[],S=0,ba=v.length;S<ba;++S)D.push(v.charCodeAt(S));v=D}A||(A=v.length);D=0;if(0==n)for(;D+64<A;)b(v.slice(D,D+64)),D+=64,q+=64;for(;D<A;)if(f[n++]=v[D++],q++,64==n)for(n=0,b(f);D+64<A;)b(v.slice(D,D+64)),D+=64,q+=64}
function d(){var v=[],A=8*q;56>n?c(h,56-n):c(h,64-(n-56));for(var D=63;56<=D;D--)f[D]=A&255,A>>>=8;b(f);for(D=A=0;5>D;D++)for(var S=24;0<=S;S-=8)v[A++]=e[D]>>S&255;return v}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var n,q;a();return{reset:a,update:c,digest:d,Lc:function(){for(var v=d(),A="",D=0;D<v.length;D++)A+="0123456789ABCDEF".charAt(Math.floor(v[D]/16))+"0123456789ABCDEF".charAt(v[D]%16);return A}}}
;function Kd(a,b,c){var d=[],e=[];if(1==(Ha(c)?2:1))return e=[b,a],Ya(d,function(h){e.push(h)}),Ld(e.join(" "));
var f=[],g=[];Ya(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Ya(d,function(h){e.push(h)});
a=Ld(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ld(a){var b=Jd();b.update(a);return b.Lc().toLowerCase()}
;var Md=Bd(Fd,"perf",Dd());Bd(Md,"g",Dd());var Nd=Bd(Md,"i",Dd());Bd(Md,"r",[]);Dd();Dd();function Od(a,b,c){b&&0<b.length&&(b=Pd(b),c&&0<c.length&&(b+="___"+Pd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=Bd(Nd,"_p",Dd()),Bd(b,c,Dd())[a]=(new Date).getTime(),b=Md.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Pd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Qd=Dd(),Rd=[];function Sd(a){throw Error("Bad hint"+(a?": "+a:""));}
Rd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Fd[b]=Bd(Fd,b,[]).concat(c):Bd(Fd,b,c)}if(b=a.u)a=Bd(Fd,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Td=/^(\/[a-zA-Z0-9_\-]+)+$/,Ud=[/\/amp\//,/\/amp$/,/^\/amp$/],Wd=/^[a-zA-Z0-9\-_\.,!]+$/,Xd=/^gapi\.loaded_[0-9]+$/,Yd=/^[a-zA-Z0-9,._-]+$/;function Zd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Qd[f],h=null;g?h=g(e,b,c,d):Sd("no hint processor for: "+f);h||Sd("failed to generate load url");b=h;c=b.match($d);(d=b.match(ae))&&1===d.length&&be.test(b)&&c&&1===c.length||Sd("failed sanity: "+a);return h}
function ce(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=de(a);Xd.test(c)||Sd("invalid_callback");b=ee(b);d=d&&d.length?ee(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.nb?"/am="+e(a.nb):"",a.Jb?"/rs="+e(a.Jb):"",a.Rb?"/t="+e(a.Rb):"","/cb=",e(c)].join("")}
function de(a){"/"!==a.charAt(0)&&Sd("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Sd("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Td.test(b)||Sd("invalid_prefix");c=0;for(d=Ud.length;c<d;++c)Ud[c].test(b)&&Sd("invalid_prefix");c=fe(a,
"k",!0);d=fe(a,"am");e=fe(a,"rs");a=fe(a,"t");return{pathPrefix:b,version:c,nb:d,Jb:e,Rb:a}}
function ee(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Yd.test(e)&&b.push(e)}return b.join(",")}
function fe(a,b,c){a=a[b];!a&&c&&Sd("missing: "+b);if(a){if(Wd.test(a))return a;Sd("invalid: "+b)}return null}
var be=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ae=/\/cb=/g,$d=/\/\//g;function ge(){var a=Gd();if(!a)throw Error("Bad hint");return a}
Qd.m=function(a,b,c,d){(a=a[0])||Sd("missing_hint");return"https://apis.google.com"+ce(a,b,c,d)};
var he=decodeURI("%73cript"),ie=/^[-+_0-9\/A-Za-z]+={0,2}$/;function je(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function ke(){var a=Fd.nonce;return void 0!==a?a&&a===String(a)&&a.match(ie)?a:Fd.nonce=null:xd.querySelector?(a=xd.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(ie)?Fd.nonce=a:Fd.nonce=null):null:null}
function le(a){if("loading"!=xd.readyState)me(a);else{var b=ke(),c="";null!==b&&(c=' nonce="'+b+'"');xd.write("<"+he+' src="'+encodeURI(a)+'"'+c+"></"+he+">")}}
function me(a){var b=xd.createElement(he);b.setAttribute("src",a);a=ke();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=xd.getElementsByTagName(he)[0])?a.parentNode.insertBefore(b,a):(xd.head||xd.body||xd.documentElement).appendChild(b)}
function ne(a,b){var c=b&&b._c;if(c)for(var d=0;d<Rd.length;d++){var e=Rd[d][0],f=Rd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function oe(a,b,c){pe(function(){var d=b===Gd()?Bd(Ed,"_",Dd()):Dd();d=Bd(Id(b),"_",d);a(d)},c)}
function qe(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);ne(a,c);var d=a?a.split(":"):[],e=c.h||ge(),f=Bd(Fd,"ah",Dd());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split(".");l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e;var n=g.length&&g[g.length-1]||null,q=n;n&&n.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(h)}var v=g.length;if(1<v){var A=c.callback;A&&(c.callback=function(){0==--v&&A()})}for(;d=g.shift();)re(d.features,c,d.hint)}else re(d||[],c,e)}
function re(a,b,c){function d(Ta,Eb){if(v)return 0;wd.clearTimeout(q);A.push.apply(A,S);var Vd=((Ed||{}).config||{}).update;Vd?Vd(f):f&&Bd(Fd,"cu",[]).push(f);if(Eb){Od("me0",Ta,D);try{oe(Eb,c,n)}finally{Od("me1",Ta,D)}}return 1}
a=Cd(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var q=null,v=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=Bd(Id(c),"r",[]).sort();var A=Bd(Id(c),"L",[]).sort(),D=[].concat(l);0<g&&(q=wd.setTimeout(function(){v=!0;h()},g));
var S=je(a,A);if(S.length){S=je(a,l);var ba=Bd(Fd,"CP",[]),pa=ba.length;ba[pa]=function(Ta){function Eb(){var df=ba[pa+1];df&&df()}
function Vd(df){ba[pa]=null;d(S,Ta)&&Hd(function(){e&&e();df()})}
if(!Ta)return 0;Od("ml1",S,D);0<pa&&ba[pa-1]?ba[pa]=function(){Vd(Eb)}:Vd(Eb)};
if(S.length){var Fc="loaded_"+Fd.I++;Ed[Fc]=function(Ta){ba[pa](Ta);Ed[Fc]=null};
a=Zd(c,S,"gapi."+Fc,l);l.push.apply(l,S);Od("ml0",S,D);b.sync||wd.___gapisync?le(a):me(a)}else ba[pa](zd)}else d(S)&&e&&e()}
function pe(a,b){if(Fd.hee&&0<Fd.hel)try{return a()}catch(c){b&&b(c),Fd.hel--,qe("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ed.load=function(a,b){return pe(function(){return qe(a,b)})};function se(a,b){this.g=a;this.o=b;this.f=0;this.b=null}
se.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function te(a,b){a.o(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function ue(a){m.setTimeout(function(){throw a;},0)}
function ve(a){a=we(a);!Ja(m.setImmediate)||m.Window&&m.Window.prototype&&!Db("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(xe||(xe=ye()),xe(a)):m.setImmediate(a)}
var xe;
function ye(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Db("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";e.src="";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write("");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Pa(function(l){if(("*"==h||l.origin==h)&&l.data==
g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Db("Trident")&&!Db("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(za(c.next)){c=c.next;var e=c.pb;c.pb=null;e()}};
return function(e){d.next={pb:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){m.setTimeout(e,0)}}
var we=jc;function ze(){this.f=this.b=null}
var Be=new se(function(){return new Ae},function(a){a.reset()});
ze.prototype.add=function(a,b){var c=Be.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
ze.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Ae(){this.next=this.scope=this.b=null}
Ae.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Ae.prototype.reset=function(){this.next=this.scope=this.b=null};function Ce(a,b){De||Ee();Fe||(De(),Fe=!0);Ge.add(a,b)}
var De;function Ee(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);De=function(){a.then(He)}}else De=function(){ve(He)}}
var Fe=!1,Ge=new ze;function He(){for(var a;a=Ge.remove();){try{a.b.call(a.scope)}catch(b){ue(b)}te(Be,a)}Fe=!1}
;function Ie(){this.g=this.g;this.o=this.o}
Ie.prototype.g=!1;Ie.prototype.dispose=function(){this.g||(this.g=!0,this.ga())};
Ie.prototype.ga=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Je(a){a.preventDefault()}
;function Ke(a){a.prototype.$goog_Thenable=!0}
function Le(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Me(a,b){this.b=0;this.K=void 0;this.o=this.f=this.g=null;this.B=this.C=!1;if(a!=t)try{var c=this;a.call(b,function(d){Ne(c,2,d)},function(d){Ne(c,3,d)})}catch(d){Ne(this,3,d)}}
function Oe(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
Oe.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var Pe=new se(function(){return new Oe},function(a){a.reset()});
function Qe(a,b,c){var d=Pe.get();d.f=a;d.onRejected=b;d.context=c;return d}
function Re(a){if(a instanceof Me)return a;var b=new Me(t);Ne(b,2,a);return b}
function Se(a){return new Me(function(b,c){c(a)})}
function Te(a,b,c){Ue(a,b,c,null)||Ce(Qa(b,a))}
function Ve(a){return new Me(function(b,c){var d=a.length,e=[];if(d)for(var f=function(n,q){d--;e[n]=q;0==d&&b(e)},g=function(n){c(n)},h=0,l;h<a.length;h++)l=a[h],Te(l,Qa(f,h),g);
else b(e)})}
function We(){var a,b,c=new Me(function(d,e){a=d;b=e});
return new Xe(c,a,b)}
Me.prototype.then=function(a,b,c){return Ye(this,Ja(a)?a:null,Ja(b)?b:null,c)};
Ke(Me);function Ze(a,b){return Ye(a,null,b,void 0)}
Me.prototype.cancel=function(a){0==this.b&&Ce(function(){var b=new $e(a);af(this,b)},this)};
function af(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?af(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):bf(c),cf(c,e,3,b)))}a.g=null}else Ne(a,3,b)}
function ef(a,b){a.f||2!=a.b&&3!=a.b||ff(a);a.o?a.o.next=b:a.f=b;a.o=b}
function Ye(a,b,c,d){var e=Qe(null,null,null);e.b=new Me(function(f,g){e.f=b?function(h){try{var l=b.call(d,h);f(l)}catch(n){g(n)}}:f;
e.onRejected=c?function(h){try{var l=c.call(d,h);!za(l)&&h instanceof $e?g(h):f(l)}catch(n){g(n)}}:g});
e.b.g=a;ef(a,e);return e.b}
Me.prototype.W=function(a){this.b=0;Ne(this,2,a)};
Me.prototype.Y=function(a){this.b=0;Ne(this,3,a)};
function Ne(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Ue(c,a.W,a.Y,a)||(a.K=c,a.b=b,a.g=null,ff(a),3!=b||c instanceof $e||gf(a,c)))}
function Ue(a,b,c,d){if(a instanceof Me)return ef(a,Qe(b||t,c||null,d)),!0;if(Le(a))return a.then(b,c,d),!0;if(Ka(a))try{var e=a.then;if(Ja(e))return hf(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function hf(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function ff(a){a.C||(a.C=!0,Ce(a.S,a))}
function bf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
Me.prototype.S=function(){for(var a;a=bf(this);)cf(this,a,this.b,this.K);this.C=!1};
function cf(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.B;a=a.g)a.B=!1;if(b.b)b.b.g=null,jf(b,c,d);else try{b.g?b.f.call(b.context):jf(b,c,d)}catch(e){kf.call(null,e)}te(Pe,b)}
function jf(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function gf(a,b){a.B=!0;Ce(function(){a.B&&kf.call(null,b)})}
var kf=ue;function $e(a){Va.call(this,a)}
Sa($e,Va);$e.prototype.name="cancel";function Xe(a,b,c){this.b=a;this.resolve=b;this.reject=c}
;function lf(a,b,c){Ie.call(this);this.C=null!=c?Pa(a,c):a;this.B=b;this.f=Pa(this.nd,this);this.b=[]}
Sa(lf,Ie);k=lf.prototype;k.ia=!1;k.Ba=0;k.ca=null;k.Na=function(a){this.b=arguments;this.ca||this.Ba?this.ia=!0:mf(this)};
k.stop=function(){this.ca&&(m.clearTimeout(this.ca),this.ca=null,this.ia=!1,this.b=[])};
k.resume=function(){this.Ba--;this.Ba||!this.ia||this.ca||(this.ia=!1,mf(this))};
k.ga=function(){lf.ba.ga.call(this);this.stop()};
k.nd=function(){this.ca=null;this.ia&&!this.Ba&&(this.ia=!1,mf(this))};
function mf(a){var b=a.f;var c=a.B;if(!Ja(b))if(b&&"function"==typeof b.handleEvent)b=Pa(b.handleEvent,b);else throw Error("Invalid listener argument");b=2147483647<Number(c)?-1:m.setTimeout(b,c||0);a.ca=b;a.C.apply(null,a.b)}
;var nf="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function of(){}
of.prototype.next=function(){throw nf;};
of.prototype.Z=function(){return this};
function pf(a){if(a instanceof of)return a;if("function"==typeof a.Z)return a.Z(!1);if(Ia(a)){var b=0,c=new of;c.next=function(){for(;;){if(b>=a.length)throw nf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function qf(a,b){if(Ia(a))try{Ya(a,b,void 0)}catch(c){if(c!==nf)throw c;}else{a=pf(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==nf)throw c;}}}
function rf(a){if(Ia(a))return hb(a);a=pf(a);var b=[];qf(a,function(c){b.push(c)});
return b}
;function sf(a,b){this.f={};this.b=[];this.o=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof sf)for(c=tf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function tf(a){uf(a);return a.b.concat()}
k=sf.prototype;k.isEmpty=function(){return 0==this.g};
k.clear=function(){this.f={};this.o=this.g=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.f,a)?(delete this.f[a],this.g--,this.o++,this.b.length>2*this.g&&uf(this),!0):!1};
function uf(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.f,a)?this.f[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.f,a)||(this.g++,this.b.push(a),this.o++);this.f[a]=b};
k.forEach=function(a,b){for(var c=tf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new sf(this)};
k.Z=function(a){uf(this);var b=0,c=this.o,d=this,e=new of;e.next=function(){if(c!=d.o)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw nf;var f=d.b[b++];return a?f:d.f[f]};
return e};var vf=m.JSON.stringify;/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function wf(a,b){this.B=[];this.fa=a;this.ea=b||null;this.o=this.b=!1;this.g=void 0;this.W=this.Ha=this.K=!1;this.C=0;this.f=null;this.S=0}
wf.prototype.cancel=function(a){if(this.b)this.g instanceof wf&&this.g.cancel();else{if(this.f){var b=this.f;delete this.f;a?b.cancel(a):(b.S--,0>=b.S&&b.cancel())}this.fa?this.fa.call(this.ea,this):this.W=!0;this.b||(a=new xf(this),yf(this),zf(this,!1,a))}};
wf.prototype.Y=function(a,b){this.K=!1;zf(this,a,b)};
function zf(a,b,c){a.b=!0;a.g=c;a.o=!b;Af(a)}
function yf(a){if(a.b){if(!a.W)throw new Bf(a);a.W=!1}}
wf.prototype.Ma=function(a){yf(this);zf(this,!0,a)};
function Cf(a,b,c){a.B.push([b,c,void 0]);a.b&&Af(a)}
wf.prototype.then=function(a,b,c){var d,e,f=new Me(function(g,h){d=g;e=h});
Cf(this,d,function(g){g instanceof xf?f.cancel():e(g)});
return f.then(a,b,c)};
Ke(wf);wf.prototype.isError=function(a){return a instanceof Error};
function Df(a){return bb(a.B,function(b){return Ja(b[1])})}
function Af(a){if(a.C&&a.b&&Df(a)){var b=a.C,c=Ef[b];c&&(m.clearTimeout(c.b),delete Ef[b]);a.C=0}a.f&&(a.f.S--,delete a.f);b=a.g;for(var d=c=!1;a.B.length&&!a.K;){var e=a.B.shift(),f=e[0],g=e[1];e=e[2];if(f=a.o?g:f)try{var h=f.call(e||a.ea,b);za(h)&&(a.o=a.o&&(h==b||a.isError(h)),a.g=b=h);if(Le(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.K=!0}catch(l){b=l,a.o=!0,Df(a)||(c=!0)}}a.g=b;d&&(h=Pa(a.Y,a,!0),d=Pa(a.Y,a,!1),b instanceof wf?(Cf(b,h,d),b.Ha=!0):b.then(h,d));c&&(b=new Ff(b),
Ef[b.b]=b,a.C=b.b)}
function Bf(){Va.call(this)}
Sa(Bf,Va);Bf.prototype.message="Deferred has already fired";Bf.prototype.name="AlreadyCalledError";function xf(){Va.call(this)}
Sa(xf,Va);xf.prototype.message="Deferred was canceled";xf.prototype.name="CanceledError";function Ff(a){this.b=m.setTimeout(Pa(this.g,this),0);this.f=a}
Ff.prototype.g=function(){delete Ef[this.b];throw this.f;};
var Ef={};function Gf(a,b){var c=b||{},d=c.document||document,e=wc(a),f=document.createElement("SCRIPT"),g={Kb:f,Ob:void 0},h=new wf(Hf,g),l=null,n=null!=c.timeout?c.timeout:5E3;0<n&&(l=window.setTimeout(function(){If(f,!0);var q=new Jf(1,"Timeout reached for loading script "+e);yf(h);zf(h,!1,q)},n),g.Ob=l);
f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||(If(f,c.Sd||!1,l),h.Ma(null))};
f.onerror=function(){If(f,!0,l);var q=new Jf(0,"Error while loading script "+e);yf(h);zf(h,!1,q)};
g=c.attributes||{};Ob(g,{type:"text/javascript",charset:"UTF-8"});cd(f,g);Yc(f,a);Kf(d).appendChild(f);return h}
function Kf(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}
function Hf(){if(this&&this.Kb){var a=this.Kb;a&&"SCRIPT"==a.tagName&&If(a,!0,this.Ob)}}
function If(a,b,c){null!=c&&m.clearTimeout(c);a.onload=t;a.onerror=t;a.onreadystatechange=t;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}
function Jf(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);Va.call(this,c);this.code=a}
Sa(Jf,Va);function Lf(a){Ie.call(this);this.K=1;this.B=[];this.C=0;this.b=[];this.f={};this.S=!!a}
Sa(Lf,Ie);k=Lf.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.K;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.K=e+3;d.push(e);return e};
k.Fa=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.C?(this.B.push(a),this.b[a+1]=t):(c&&fb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.Hb=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.S)for(e=0;e<c.length;e++){var g=c[e];Mf(this.b[g+1],this.b[g+2],d)}else{this.C++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.C--,0<this.B.length&&0==this.C)for(;c=this.B.pop();)this.Fa(c)}}return 0!=e}return!1};
function Mf(a,b,c){Ce(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(Ya(b,this.Fa,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.ga=function(){Lf.ba.ga.call(this);this.clear();this.B.length=0};function Nf(a){this.b=a}
Nf.prototype.set=function(a,b){za(b)?this.b.set(a,vf(b)):this.b.remove(a)};
Nf.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Nf.prototype.remove=function(a){this.b.remove(a)};function Of(a){this.b=a}
Sa(Of,Nf);function Pf(a){this.data=a}
function Qf(a){return!za(a)||a instanceof Pf?a:new Pf(a)}
Of.prototype.set=function(a,b){Of.ba.set.call(this,a,Qf(b))};
Of.prototype.f=function(a){a=Of.ba.get.call(this,a);if(!za(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Of.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!za(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Rf(a){this.b=a}
Sa(Rf,Of);Rf.prototype.set=function(a,b,c){if(b=Qf(b)){if(c){if(c<Ra()){Rf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ra()}Rf.ba.set.call(this,a,b)};
Rf.prototype.f=function(a){var b=Rf.ba.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ra()||c&&c>Ra())Rf.prototype.remove.call(this,a);else return b}};function Sf(){}
;function Tf(){}
Sa(Tf,Sf);Tf.prototype.clear=function(){var a=rf(this.Z(!0)),b=this;Ya(a,function(c){b.remove(c)})};function Uf(a){this.b=a}
Sa(Uf,Tf);k=Uf.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!Aa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.Z=function(a){var b=0,c=this.b,d=new of;d.next=function(){if(b>=c.length)throw nf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!Aa(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Vf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
Sa(Vf,Uf);function Wf(a,b){this.f=a;this.b=null;if(Rb&&!(9<=Number(bc))){Xf||(Xf=new sf);this.b=Xf.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Xf.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
Sa(Wf,Tf);var Yf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xf=null;function Zf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Yf[b]})}
k=Wf.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Zf(a),b);$f(this)};
k.get=function(a){a=this.b.getAttribute(Zf(a));if(!Aa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Zf(a));$f(this)};
k.Z=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new of;d.next=function(){if(b>=c.length)throw nf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!Aa(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$f(this)};
function $f(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ag(a,b){this.f=a;this.b=b+"::"}
Sa(ag,Tf);ag.prototype.set=function(a,b){this.f.set(this.b+a,b)};
ag.prototype.get=function(a){return this.f.get(this.b+a)};
ag.prototype.remove=function(a){this.f.remove(this.b+a)};
ag.prototype.Z=function(a){var b=this.f.Z(!0),c=this,d=new of;d.next=function(){for(var e=b.next();e.substr(0,c.b.length)!=c.b;)e=b.next();return a?e.substr(c.b.length):c.f.get(e)};
return d};function bg(){}
Fa(bg);bg.prototype.b=0;var cg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function dg(a){return a.match(cg)}
function eg(a){return a?decodeURI(a):a}
function fg(a){return eg(dg(a)[3]||null)}
function gg(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}
function hg(a,b){return b?a?a+"&"+b:b:a}
function ig(a,b){if(!b)return a;var c=gg(a);c[1]=hg(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function jg(a,b,c){if(Ha(b))for(var d=0;d<b.length;d++)jg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function kg(a){var b=[],c;for(c in a)jg(c,a[c],b);return b.join("&")}
function lg(a,b){var c=kg(b);return ig(a,c)}
function mg(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return ig(a,b+c)}
var ng=/#|$/;function og(a,b){var c=a.search(ng);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
function pg(a,b){var c=gg(a),d=c[1],e=[];d&&Ya(d.split("&"),function(f){var g=f.indexOf("=");b.hasOwnProperty(0<=g?f.substr(0,g):f)||e.push(f)});
c[1]=hg(e.join("&"),kg(b));return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
;function qg(){this.f=[];this.b=-1}
qg.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
qg.prototype.get=function(a){return!!this.f[a]};
function rg(a){-1==a.b&&(a.b=ab(a.f,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.b}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
/*

 Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var sg={"default":"__default"};var tg=Object.prototype.hasOwnProperty;function ug(){}
ug.prototype=Object.create(null);function vg(a,b,c){if(null==c)a.removeAttribute(b);else{var d=0===b.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===b.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0;d?a.setAttributeNS(d,b,String(c)):a.setAttribute(b,String(c))}}
var wg=new ug;wg[sg["default"]]=function(a,b,c){var d=typeof c;"object"===d||"function"===d?a[b]=c:vg(a,b,c)};
wg.style=function(a,b,c){if("string"===typeof c)a.style.cssText=c;else{a.style.cssText="";a=a.style;for(var d in c)if(tg.call(c,d)){b=d;var e=c[d];0<=b.indexOf("-")?a.setProperty(b,e):a[b]=e}}};
function xg(a,b,c){(wg[b]||wg[sg["default"]])(a,b,c)}
;function yg(){this.created=[];this.b=[]}
;var zg=Node.prototype.getRootNode||function(){for(var a=this,b=a;a;)b=a,a=a.parentNode;return b};function Ag(a,b,c){this.b=null;this.g=!1;this.f=a;this.key=b;this.text=c}
function Bg(a){a=a.b;return!a||!a.length}
function Cg(a,b,c,d){b=new Ag(b,c,d);return a.__incrementalDOMData=b}
function Dg(a,b){if(a.__incrementalDOMData)return a.__incrementalDOMData;var c=1===a.nodeType?a.localName:a.nodeName,d=1===a.nodeType?a.getAttribute("key"):null;c=Cg(a,c,1===a.nodeType?d||b:null,3===a.nodeType?a.data:void 0);if(1===a.nodeType){d=a.attributes;var e=d.length;if(e)for(var f=c.b||(c.b=Array(e)),g=0,h=0;g<e;g+=1,h+=2){var l=d[g],n=l.value;f[h]=l.name;f[h+1]=n}}return c}
;var Eg=null,Fg=null,Gg=null,Hg=null,Ig=[],Jg=[];function Kg(a){return function(b,c,d){var e=Eg,f=Hg,g=Ig,h=Jg,l=Fg,n=Gg;Eg=new yg;Hg=b.ownerDocument;Jg=[];var q=Gg=b.parentNode,v,A=zg.call(b);if((v=11===A.nodeType||9===A.nodeType?A.activeElement:null)&&b.contains(v)){for(A=[];v!==q;)A.push(v),v=v.parentNode;q=A}else q=[];Ig=q;try{return a(b,c,d)}finally{Hg=f,Jg=h,Fg=l,Gg=n,Ig=g,Eg=e}}}
var Mg=Kg(function(a,b,c){Gg=Fg=a;Fg=null;b(c);Lg();return a}),Og=Kg(function(a,b,c){var d={nextSibling:a};
Fg=d;b(c);Gg&&Ng(a.nextSibling);return d===Fg?null:Fg});
function Pg(a,b,c){a=Dg(a,c);return b==a.f&&c==a.key}
function Qg(a,b){var c=Fg;if(!c)return null;if(Pg(c,a,b))return c;if(b)for(;c=c.nextSibling;)if(Pg(c,a,b))return c;return null}
function Rg(a,b){Fg=Fg?Fg.nextSibling:Gg.firstChild;var c;if(!(c=Qg(a,b))){if("#text"===a)c=Hg.createTextNode(""),Cg(c,"#text",null);else{c=Hg;var d=Gg;"function"===typeof a?c=new a:c=(d="svg"===a?"http://www.w3.org/2000/svg":"math"===a?"http://www.w3.org/1998/Math/MathML":null==d||"foreignObject"===Dg(d,void 0).f?null:d.namespaceURI)?c.createElementNS(d,a):c.createElement(a);Cg(c,a,b)}Eg.created.push(c)}if(c!==Fg){if(0<=Ig.indexOf(c)){d=Gg;for(var e=c.nextSibling,f=Fg;null!==f&&f!==c;){var g=f.nextSibling;
d.insertBefore(f,e);f=g}}else Gg.insertBefore(c,Fg);Fg=c}}
function Ng(a){for(var b=Gg,c=Fg?Fg.nextSibling:Gg.firstChild;c!==a;){var d=c.nextSibling;b.removeChild(c);Eg.b.push(c);c=d}}
function Lg(){Ng(null);Fg=Gg;Gg=Gg.parentNode}
;var Sg=new ug;
function Tg(a,b,c,d){for(var e=3;e<arguments.length;++e);Rg(a,b);Gg=Fg;Fg=null;e=Gg;var f=Dg(e,void 0);if(!f.g&&(f.g=!0,c&&c.length))if(Bg(f))for(var g=0;g<c.length;g+=2)xg(e,c[g],c[g+1]);else{for(var h=0;h<c.length;h+=2)Sg[c[h]]=h+1;h=f.b||(f.b=[]);for(var l=0,n=0;n<h.length;n+=2){var q=h[n],v=h[n+1],A=Sg[q];A?c[A]===v&&delete Sg[q]:(h[l]=q,h[l+1]=v,l+=2)}for(;h.length>l;)h.pop();for(g in Sg)xg(e,g,c[Sg[g]]),delete Sg[g]}g=Math.max(0,arguments.length-3);l=Bg(f);if(!g&&l)return e;f=f.b||(f.b=Array(g));
g=3;for(h=0;g<arguments.length;g+=2,h+=2){n=arguments[g];if(l)f[h]=n;else if(f[h]!==n)break;q=arguments[g+1];if(l||f[h+1]!==q)f[h+1]=q,xg(e,n,q)}if(g<arguments.length||h<f.length){for(l=h;h<f.length;h+=2)Sg[f[h]]=f[h+1];for(h=l;g<arguments.length;g+=2,h+=2)l=arguments[g],n=arguments[g+1],Sg[l]!==n&&xg(e,l,n),f[h]=l,f[h+1]=n,delete Sg[l];for(g=h;f.length>g;)f.pop();for(var D in Sg)xg(e,D,void 0),delete Sg[D]}return e}
function u(a,b){for(var c=1;c<arguments.length;++c);Rg("#text",null);c=Fg;var d=Dg(c,void 0);if(d.text!==a){d=d.text=a;for(var e=1;e<arguments.length;e+=1)d=(0,arguments[e])(d);c.data=d}return c}
;/*

 Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at
 http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at
 http://polymer.github.io/PATENTS.txt
*/
function Ug(a,b,c){if(Object.hasOwnProperty.call(Vg,a)&&(a=Vg[a],Object.hasOwnProperty.call(a,b)&&(a=a[b],a instanceof Array))){for(var d=null,e=!1,f=0,g=a.length;f<g;++f){var h=a[f],l=h.G;if(!l)return h.j;null===d&&(d={});l=Object.hasOwnProperty.call(d,l)?d[l]:d[l]=c(l);if(l===h.J)return h.j;null==l&&(e=!0)}if(e)return null}b=Wg[b];return"number"===typeof b?b:null}
var Wg={align:1,alt:1,"aria-activedescendant":10,"aria-atomic":1,"aria-autocomplete":1,"aria-busy":1,"aria-checked":1,"aria-disabled":1,"aria-dropeffect":1,"aria-expanded":1,"aria-haspopup":1,"aria-hidden":1,"aria-invalid":1,"aria-label":1,"aria-level":1,"aria-live":1,"aria-multiline":1,"aria-multiselectable":1,"aria-orientation":1,"aria-posinset":1,"aria-pressed":1,"aria-readonly":1,"aria-relevant":1,"aria-required":1,"aria-selected":1,"aria-setsize":1,"aria-sort":1,"aria-valuemax":1,"aria-valuemin":1,
"aria-valuenow":1,"aria-valuetext":1,autocapitalize:1,autocomplete:1,autocorrect:1,autofocus:1,bgcolor:1,border:1,checked:1,"class":1,color:1,cols:1,colspan:1,dir:8,disabled:1,draggable:1,enctype:1,face:1,"for":10,formenctype:1,frameborder:1,height:1,hidden:1,href:4,hreflang:1,id:10,ismap:1,itemid:1,itemprop:1,itemref:1,itemscope:1,itemtype:1,label:1,lang:1,list:10,loop:1,max:1,maxlength:1,min:1,multiple:1,muted:1,name:10,placeholder:1,preload:1,rel:1,required:1,reversed:1,role:1,rows:1,rowspan:1,
selected:1,shape:1,size:1,sizes:1,span:1,spellcheck:1,src:4,start:1,step:1,style:5,summary:1,tabindex:1,target:8,title:1,translate:1,valign:1,value:1,width:1,wrap:1},Vg={a:{href:[{j:3}]},area:{href:[{j:3}]},audio:{src:[{j:3}]},blockquote:{cite:[{j:3}]},button:{formaction:[{j:3}],formmethod:[{j:1}],type:[{j:1}]},command:{type:[{j:1}]},content:{select:[{j:1}]},del:{cite:[{j:3}]},details:{open:[{j:1}]},form:{action:[{j:3}],method:[{j:1}]},iframe:{srcdoc:[{j:2}]},img:{src:[{j:3}]},input:{formaction:[{j:3}],
formmethod:[{j:1}],pattern:[{j:1}],readonly:[{j:1}],src:[{j:3}],type:[{j:1}]},ins:{cite:[{j:3}]},li:{type:[{j:1}]},link:{href:[{j:3,G:"rel",J:"alternate"},{j:3,G:"rel",J:"author"},{j:3,G:"rel",J:"bookmark"},{j:3,G:"rel",J:"canonical"},{j:3,G:"rel",J:"cite"},{j:3,G:"rel",J:"help"},{j:3,G:"rel",J:"icon"},{j:3,G:"rel",J:"license"},{j:3,G:"rel",J:"next"},{j:3,G:"rel",J:"prefetch"},{j:3,G:"rel",J:"dns-prefetch"},{j:3,G:"rel",J:"prerender"},{j:3,G:"rel",J:"preconnect"},{j:3,G:"rel",J:"preload"},{j:3,G:"rel",
J:"prev"},{j:3,G:"rel",J:"search"},{j:3,G:"rel",J:"subresource"}],media:[{j:1}],nonce:[{j:1}],type:[{j:1}]},menuitem:{icon:[{j:3}]},ol:{type:[{j:1}]},q:{cite:[{j:3}]},script:{nonce:[{j:1}],type:[{j:1}]},source:{media:[{j:1}],src:[{j:3}]},style:{media:[{j:1}],nonce:[{j:1}]},table:{cellpadding:[{j:1}],cellspacing:[{j:1}]},textarea:{readonly:[{j:1}]},time:{datetime:[{j:1}]},video:{autoplay:[{j:1}],controls:[{j:1}],poster:[{j:3}],src:[{j:3}]}},Xg=[{auto:!0,ltr:!0,rtl:!0},{_self:!0,_blank:!0}],Yg={"*":{dir:0,
target:1}};function Zg(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||m,e=d.document,f=Ba(d);f&&(a.nonce=f);if("help"==a.flow){var g=r("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var h=JSON.stringify(b);(g=1200>=h.length)&&(a.psdJson=h)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=c+"/load.js?";for(var l in a)b=
a[l],null!=b&&!Ka(b)&&(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=(e?new jd(9==e.nodeType?e:e.ownerDocument||e.document):Wa||(Wa=new jd)).createElement("SCRIPT");f&&a.setAttribute("nonce",f);Yc(a,kd(d));e.body.appendChild(a)}}
p("userfeedback.api.startFeedback",Zg,void 0);var $g=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var ah=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};p("yt.config_",ah,void 0);function bh(a){var b=arguments;if(1<b.length)ah[b[0]]=b[1];else{b=b[0];for(var c in b)ah[c]=b[c]}}
function w(a,b){return a in ah?ah[a]:b}
function ch(a){var b=ah.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function dh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){x(b)}}:a}
function x(a,b,c,d,e){var f=r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=w("ERRORS",[]),f.push([a,b,c,d,e]),bh("ERRORS",f))}
function eh(a){x(a,"WARNING",void 0,void 0,void 0)}
function fh(a,b,c,d,e){var f=!1,g=ch("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,l=g.length;h<l;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(e||(Aa(a)?f=a:ErrorEvent&&a instanceof ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),e=gh(f,"UnhandledWindowError"),e.message=f,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),x(e))}
function hh(a){if(a instanceof Error)x(a);else{var b=Ka(a)?JSON.stringify(a):String(a),c;a||(c="WARNING");x(gh(b,"RejectedPromiseError"),c)}}
function gh(a,b){var c=Error(a);c.name=b;return c}
;function ih(a){return a?a.dataset?a.dataset[jh()]:a.getAttribute("data-loaded"):null}
var kh={};function jh(){return kh.loaded||(kh.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function lh(a,b){Ja(a)&&(a=dh(a));return window.setTimeout(a,b)}
function mh(a,b){Ja(a)&&(a=dh(a));return window.setInterval(a,b)}
;var nh=r("ytPubsubPubsubInstance")||new Lf;Lf.prototype.subscribe=Lf.prototype.subscribe;Lf.prototype.unsubscribeByKey=Lf.prototype.Fa;Lf.prototype.publish=Lf.prototype.Hb;Lf.prototype.clear=Lf.prototype.clear;p("ytPubsubPubsubInstance",nh,void 0);var oh=r("ytPubsubPubsubSubscribedKeys")||{};p("ytPubsubPubsubSubscribedKeys",oh,void 0);var ph=r("ytPubsubPubsubTopicToKeys")||{};p("ytPubsubPubsubTopicToKeys",ph,void 0);var qh=r("ytPubsubPubsubIsSynchronous")||{};p("ytPubsubPubsubIsSynchronous",qh,void 0);
function rh(a,b){var c=sh();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){oh[d]&&b.apply(window,e)};
try{qh[a]?f():lh(f,0)}catch(g){x(g)}},void 0);
oh[d]=!0;ph[a]||(ph[a]=[]);ph[a].push(d);return d}return 0}
function th(a){var b=sh();b&&("number"==typeof a?a=[a]:Aa(a)&&(a=[parseInt(a,10)]),Ya(a,function(c){b.unsubscribeByKey(c);delete oh[c]}))}
function uh(a,b){var c=sh();c&&c.publish.apply(c,arguments)}
function vh(a){var b=sh();if(b)if(b.clear(a),a)wh(a);else for(var c in ph)wh(c)}
function sh(){return r("ytPubsubPubsubInstance")}
function wh(a){ph[a]&&(a=ph[a],Ya(a,function(b){oh[b]&&delete oh[b]}),a.length=0)}
;var xh=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,yh=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function zh(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(xh,""),c=c.replace(yh,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ah(a,b,c)}
function Ah(a,b,c){c=void 0===c?null:c;var d=Bh(a),e=document.getElementById(d),f=e&&ih(e),g=e&&!f;f?b&&b():(b&&(f=rh(d,b),b=""+(b[La]||(b[La]=++Ma)),Ch[b]=f),g||(e=Dh(a,d,function(){if(!ih(e)){var h=e;h&&(h.dataset?h.dataset[jh()]="true":h.setAttribute("data-loaded","true"));uh(d);lh(Qa(vh,d),0)}},c)))}
function Dh(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Yc(e,kd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Bh(a){var b=document.createElement("a");Wc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+xb(a)}
var Ch={};function Eh(){this.loading=!1;this.b=null}
function Fh(a){var b=Gh,c=w("BG_I",null),d=w("BG_IU",null),e=Hh;d?(b.loading=!0,zh(d,function(){b.loading=!1;if(window.botguard)Ih(b,a,e);else{var f=Bh(d),g=document.getElementById(f);g&&(vh(f),g.parentNode.removeChild(g));f=Error("Unable to load Botguard");f.params="from "+d;eh(f)}},void 0)):c&&(eval(c),window.botguard?Ih(b,a,e):eh(Error("Unable to load Botguard from JS")))}
function Ih(a,b,c){try{a.b=new botguard.bg(b)}catch(d){eh(d)}c&&c(b)}
Eh.prototype.dispose=function(){this.b=null};function Jh(){}
function Kh(a,b){return Lh(a,1,b)}
;function Mh(){}
la(Mh,Jh);function Lh(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):lh(a,c||0)}
function Nh(a){if(!isNaN(a)){var b=r("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Mh.prototype.start=function(){var a=r("yt.scheduler.instance.start");a&&a()};
Fa(Mh);Mh.O();var Oh=[],Ph=!1;function Qh(){if("1"!=Gb(w("PLAYER_CONFIG",{}),"args","privembed")){var a=function(){Ph=!0;"google_ad_status"in window?bh("DCLKSTAT",1):bh("DCLKSTAT",2)};
zh("//static.doubleclick.net/instream/ad_status.js",a);Oh.push(Kh(function(){if(!(Ph||"google_ad_status"in window)){if(a){var b=""+(a[La]||(a[La]=++Ma));(b=Ch[b])&&th(b)}Ph=!0;bh("DCLKSTAT",3)}},5E3))}}
function Rh(){return parseInt(w("DCLKSTAT",0),10)}
;function y(a){return!!Sh(a)}
function Th(a,b){var c=Sh(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Sh(a){return w("EXPERIMENT_FLAGS",{})[a]}
;var Gh=new Eh,Uh=!1,Vh=0,Wh="";function Hh(a){y("botguard_periodic_refresh")?Vh=$g():y("botguard_always_refresh")&&(Wh=a)}
function Xh(a){if(a){if(Gh.loading)return!1;if(y("botguard_periodic_refresh"))return 72E5<$g()-Vh;if(y("botguard_always_refresh"))return Wh!=a}else return!1;return!Uh}
function Yh(){return!!Gh.b}
function Zh(a){a=void 0===a?{}:a;var b=Gh;a=void 0===a?{}:a;return b.b?b.b.invoke(void 0,void 0,a):null}
;function $h(){var a=ai;r("yt.ads.biscotti.getId_")||p("yt.ads.biscotti.getId_",a,void 0)}
function bi(a){p("yt.ads.biscotti.lastId_",a,void 0)}
;function ci(){var a=di(),b=[];Fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Ha(c)?f=c:f=[c];Ya(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ei(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Ha(b[f])?ib(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?eh(h):x(h)}}return b}
function fi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ei(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lg(a,e)+d}
;function di(a){var b=gi;a=void 0===a?r("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(hi(b),ii(b));b.ca_type="image";a&&(b.bid=a);return b}
function hi(a){var b={};b.dt=ud;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?Ua:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!Ua.navigator&&"unknown"!==typeof Ua.navigator.javaEnabled&&!!Ua.navigator.javaEnabled&&Ua.navigator.javaEnabled();Ua.screen&&(b.u_h=Ua.screen.height,b.u_w=Ua.screen.width,b.u_ah=Ua.screen.availHeight,b.u_aw=Ua.screen.availWidth,b.u_cd=
Ua.screen.colorDepth);Ua.navigator&&Ua.navigator.plugins&&(b.u_nplug=Ua.navigator.plugins.length);Ua.navigator&&Ua.navigator.mimeTypes&&(b.u_nmime=Ua.navigator.mimeTypes.length);return b}
function ii(a){var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(v){}try{var e=b.outerWidth;var f=b.outerHeight}catch(v){}try{var g=b.innerWidth;var h=b.innerHeight}catch(v){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.b.top;try{var l=(c||window).document,n="CSS1Compat"==l.compatMode?l.documentElement:l.body;var q=(new bd(n.clientWidth,n.clientHeight)).round()}catch(v){q=new bd(-12245933,-12245933)}l=q;q={};n=new qg;m.SVGElement&&
m.document.createElementNS&&n.set(0);c=qd();c["allow-top-navigation-by-user-activation"]&&n.set(1);c["allow-popups-to-escape-sandbox"]&&n.set(2);m.crypto&&m.crypto.subtle&&n.set(3);n=rg(n);q.bc=n;q.bih=l.height;q.biw=l.width;q.brdim=b.join();a=a.f;return q.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,q.wgl=!!Ua.WebGLRenderingContext,q}
var gi=new function(){var a=window.document;this.b=window;this.f=a};
p("yt.ads_.signals_.getAdSignalsString",function(){return ci()},void 0);Ra();var ji=za(XMLHttpRequest)?function(){return new XMLHttpRequest}:za(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ki(){if(!ji)return null;var a=ji();return"open"in a?a:null}
function li(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var mi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ni="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
oi=!1;
function pi(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=dg(a)[1]||null,e=fg(a);d&&e?(d=c,c=dg(a),d=dg(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?fg(c)==e&&(Number(dg(c)[4]||null)||null)==(Number(dg(a)[4]||null)||null):!0;d=y("web_ajax_ignore_global_headers_if_set");for(var f in mi)e=w(mi[f]),!e||!c&&!qi(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||qi(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(y("pass_biscotti_id_in_header_ajax")||y("pass_biscotti_id_in_header_ajax_tv"))&&(c||
qi(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=ci());return b}
function ri(a){var b=window.location.search,c=fg(a),d=eg(dg(a)[5]||null);d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ei(b),f={};Ya(ni,function(g){e[g]&&(f[g]=e[g])});
return fi(a,f||{},!1)}
function qi(a,b){var c=w("CORS_HEADER_WHITELIST")||{},d=fg(a);return d?(c=c[d])?0<=Xa(c,b):!1:!0}
function si(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ti(a,b);var d=ui(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,l=function(n){n=n||{};var q=b.context||m;h?b.onSuccess&&b.onSuccess.call(q,n,g):b.onError&&b.onError.call(q,n,g);b.Ua&&b.Ua.call(q,n,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Cb&&0<b.timeout&&(f=lh(function(){e||(e=!0,window.clearTimeout(f),b.Cb.call(b.context||m))},b.timeout))}else vi(a,b)}
function vi(a,b){var c=b.format||"JSON";a=ti(a,b);var d=ui(a,b),e=!1,f,g=wi(a,function(h){if(!e){e=!0;f&&window.clearTimeout(f);var l=li(h),n=null,q=400<=h.status&&500>h.status,v=500<=h.status&&600>h.status;if(l||q||v)n=xi(c,h,b.Td);if(l)a:if(h&&204==h.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};q=b.context||m;l?b.onSuccess&&b.onSuccess.call(q,h,n):b.onError&&b.onError.call(q,h,n);b.Ua&&b.Ua.call(q,h,n)}},b.method,d,b.headers,
b.responseType,b.withCredentials);
b.qa&&0<b.timeout&&(f=lh(function(){e||(e=!0,g.abort(),window.clearTimeout(f),b.qa.call(b.context||m,g))},b.timeout));
return g}
function ti(a,b){b.Wc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=w("XSRF_FIELD_NAME",void 0),d=b.ud;d&&(d[c]&&delete d[c],a=fi(a,d||{},!0));return a}
function ui(a,b){var c=w("XSRF_FIELD_NAME",void 0),d=w("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.T,g=w("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ud||fg(a)&&!b.withCredentials&&fg(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.T&&b.T[g]||(f||(f={}),f[c]=d);f&&Aa(e)&&(e=ei(e),Ob(e,f),e=b.Eb&&"JSON"==b.Eb?JSON.stringify(e):kg(e));f=e||f&&!Jb(f);!oi&&f&&"POST"!=b.method&&(oi=!0,x(Error("AJAX request with postData should use POST")));
return e}
function xi(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?yi(b):null)d={},Ya(b.getElementsByTagName("*"),function(e){d[e.tagName]=zi(e)})}c&&Ai(d);
return d}
function Ai(a){if(Ka(a))for(var b in a)if("html_content"==b||mb(b,"_html")){var c=b;var d=a[b];var e=pc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");oc(e);oc(e);d=Uc(d,null);a[c]=d}else Ai(a[b])}
function yi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function zi(a){var b="";Ya(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Bi(a,b){b.method="POST";b.T||(b.T={});vi(a,b)}
function wi(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&dh(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=ki();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;y("debug_forward_web_query_parameters")&&(a=ri(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=pi(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;function Ci(){var a=Kb(),b;return Ze(new Me(function(c,d){a.onSuccess=function(e){li(e)?c(e):d(new Di("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new Di("Unknown request error","net.unknown",e))};
a.qa=function(e){d(new Di("Request timed out","net.timeout",e))};
b=vi("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof $e&&b.abort();
return Se(c)})}
function Di(a,b){Va.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
la(Di,Va);function Ei(a){this.g=void 0===a?null:a;this.b=0;this.f=null}
Ei.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.b&&a?(a=a.call(c,this.f),Le(a)?a:Fi(a)):2===this.b&&b?(a=b.call(c,this.f),Le(a)?a:Gi(a)):this};
Ke(Ei);function Gi(a){var b=new Ei;a=void 0===a?null:a;b.b=2;b.f=void 0===a?null:a;return b}
function Fi(a){var b=new Ei;a=void 0===a?null:a;b.b=1;b.f=void 0===a?null:a;return b}
;function Hi(a){Va.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ii;this.isTimeout=a instanceof Di&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof $e}
la(Hi,Va);Hi.prototype.name="BiscottiError";function Ii(){Va.call(this,"Biscotti ID is missing from server")}
la(Ii,Va);Ii.prototype.name="BiscottiMissingError";var Lb={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ji=null;function ai(){if("1"===Gb(w("PLAYER_CONFIG",{}),"args","privembed"))return Se(Error("Biscotti ID is not available in private embed mode"));Ji||(Ji=Ze(Ci().then(Ki),function(a){return Li(2,a)}));
return Ji}
function Ki(a){a=a.responseText;if(!lb(a,")]}'"))throw new Ii;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ii;a=a.id;bi(a);Ji=Fi(a);Mi(18E5,2);return a}
function Li(a,b){var c=new Hi(b);bi("");Ji=Gi(c);0<a&&Mi(12E4,a-1);throw c;}
function Mi(a,b){lh(function(){Ze(Ci().then(Ki,function(c){return Li(b,c)}),t)},a)}
function Ni(){try{var a=r("yt.ads.biscotti.getId_");return a?a():ai()}catch(b){return Se(b)}}
;function Oi(a,b,c,d,e){gc.set(""+a,b,c,"/",void 0===d?"youtube.com":d,void 0===e?!1:e)}
;var Pi={"consent.google.com":!0,"consent.youtube.com":!0,"consent-daily-0.sandbox.youtube.com":!0,"consent-daily-1.sandbox.youtube.com":!0,"consent-daily-2.sandbox.youtube.com":!0,"consent-daily-3.sandbox.youtube.com":!0,"consent-daily-4.sandbox.youtube.com":!0,"consent-daily-5.sandbox.youtube.com":!0,"consent-daily-6.sandbox.youtube.com":!0,"consent-autopush.sandbox.youtube.com":!0,"daily-0.consent.corp.youtube.com":!0,"daily-1.consent.corp.youtube.com":!0,"daily-2.consent.corp.youtube.com":!0,"daily-3.consent.corp.youtube.com":!0,
"daily-4.consent.corp.youtube.com":!0,"daily-5.consent.corp.youtube.com":!0,"daily-6.consent.corp.youtube.com":!0,"autopush.consent.corp.youtube.com":!0,"dev.consent.corp.youtube.com":!0,"consent-daily-0.sandbox.google.com":!0,"consent-daily-1.sandbox.google.com":!0,"consent-daily-2.sandbox.google.com":!0,"consent-daily-3.sandbox.google.com":!0,"consent-daily-4.sandbox.google.com":!0,"consent-daily-5.sandbox.google.com":!0,"consent-daily-6.sandbox.google.com":!0,"consent-autopush.sandbox.google.com":!0,
"daily-0.consent.corp.google.com":!0,"daily-1.consent.corp.google.com":!0,"daily-2.consent.corp.google.com":!0,"daily-3.consent.corp.google.com":!0,"daily-4.consent.corp.google.com":!0,"daily-5.consent.corp.google.com":!0,"daily-6.consent.corp.google.com":!0,"autopush.consent.corp.google.com":!0,"dev.consent.corp.google.com":!0};function Qi(a){a=fg(a);return Pi[a]&&Pi.hasOwnProperty(a)||String(Sh("consent_url_override")||"")}
;var Ri=0,Si=Ub?"webkit":Tb?"moz":Rb?"ms":Qb?"o":"";function Ti(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Si+"VisibilityState";if(b in a)return a[b]}
p("ytDomDomGetNextId",r("ytDomDomGetNextId")||function(){return++Ri},void 0);var Ui={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Vi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ui||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Wi(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Vi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Vi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Vi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ib=r("ytEventsEventsListeners")||{};p("ytEventsEventsListeners",Ib,void 0);var Xi=r("ytEventsEventsCounter")||{count:0};p("ytEventsEventsCounter",Xi,void 0);
function Yi(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Hb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g;if(g=Ka(e[4])&&Ka(d))a:{g=e[4];for(var h in g)if(!(h in d)||g[h]!==d[h]){g=!1;break a}for(h in d)if(!(h in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||g)})}
function Zi(a){a&&("string"==typeof a&&(a=[a]),Ya(a,function(b){if(b in Ib){var c=Ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?$i()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ib[b]}}))}
var $i=kc(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function aj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Yi(a,b,c,d);if(e)return e;e=++Xi.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Vi(h);if(!id(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Vi(h);
h.currentTarget=a;return c.call(a,h)};
g=dh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),$i()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ib[e]=[a,b,c,g,d];return e}
;function bj(a){this.Ha=a;this.b=null;this.C=0;this.S=null;this.K=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.B=0;this.Y=aj(window,"mousemove",Pa(this.ea,this));this.fa=mh(Pa(this.W,this),25)}
Sa(bj,Ie);bj.prototype.ea=function(a){za(a.b)||Wi(a);var b=a.b;za(a.f)||Wi(a);this.b=new ad(b,a.f)};
bj.prototype.W=function(){if(this.b){var a=$g();if(0!=this.C){var b=this.S,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.C);this.f[this.B]=.5<Math.abs((d-this.K)/this.K)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.Ha();this.K=d}this.C=a;this.S=this.b;this.B=(this.B+1)%4}};
bj.prototype.ga=function(){window.clearInterval(this.fa);Zi(this.Y)};function cj(a){a=void 0===a?{}:a;Ja(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||Ob(a,{_c:{jsl:{h:w("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||w("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=ei(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&Ob(a,{_c:{jsl:{h:b}}})}qe("family_creation",a)}
;var dj={},ej=0;function fj(){Ya(w("ERRORS")||[],function(a){gj.apply(null,a)});
bh("ERRORS",[])}
function gj(a,b,c,d,e,f){f=f||{};f.name=c||w("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||w("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=ej||(e=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(c=String(JSON.stringify(a.params)),f.params=c.substr(0,500)),a=hc(a),e=e||a.stack,c=a.lineNumber.toString(),isNaN(c)||isNaN(d)||(c=c+":"+d),y("console_log_js_exceptions")&&
(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Line number: "+c),d.push("Level: "+b),"params"in f&&d.push("Error Params: "+f.params),d.push("Stacktrace: "+e)),window.yterr&&Ja(window.yterr)&&window.yterr(a),dj[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={ud:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:c,level:b,"client.name":f.name},
T:{url:w("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.T.stack=e);for(var g in f)b.T["client."+g]=f[g];if(g=w("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var h in g)b.T[h]=g[h];vi(w("ECATCHER_REPORT_HOST","")+"/error_204",b);dj[a.message]=!0;ej++}}
;var hj=Math.pow(2,16)-1,ij=null,jj=0,kj={log_event:"events",log_interaction:"interactions"},lj=Object.create(null);lj.log_event="GENERIC_EVENT_LOGGING";lj.log_interaction="INTERACTION_LOGGING";var mj=new Set(["log_event"]),nj={},oj=0,pj=0,qj=r("ytLoggingTransportLogPayloadsQueue_")||{};p("ytLoggingTransportLogPayloadsQueue_",qj,void 0);var rj=r("ytLoggingTransportTokensToCttTargetIds_")||{};p("ytLoggingTransportTokensToCttTargetIds_",rj,void 0);var sj=r("ytLoggingTransportDispatchedStats_")||{};
p("ytLoggingTransportDispatchedStats_",sj,void 0);var tj=r("ytLoggingTransportCapturedTime_")||{};p("ytytLoggingTransportCapturedTime_",tj,void 0);function uj(){window.clearTimeout(oj);window.clearTimeout(pj);pj=0;if(!Jb(qj)){for(var a in qj){var b=nj[a];b&&(vj(a,b),delete qj[a])}Jb(qj)||wj()}}
function xj(){var a=[];for(e in qj){var b=sj[e]||{};sj[e]=b;for(var c in qj[e]){var d=yj(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round($g());for(var f in sj)b=sj[f],b.eventType=f in lj?lj[f]:"UNKNOWN_TYPE",c=tj[f],b.metricIntervalMs=c?e-c:e-NaN,a.push(b),tj[f]=e,delete sj[f];return a}
function wj(){y("web_gel_timeout_cap")&&!pj&&(pj=lh(uj,3E4));window.clearTimeout(oj);oj=lh(uj,w("LOGGING_BATCH_TIMEOUT",Th("web_gel_debounce_ms",1E4)))}
function yj(a,b){b=void 0===b?"":b;qj[a]=qj[a]||{};qj[a][b]=qj[a][b]||[];return qj[a][b]}
function vj(a,b){var c=kj[a],d=sj[a]||{};sj[a]=d;var e=Math.round($g());for(n in qj[a]){var f=Mb,g=b.b;g={client:{hl:g.dd,gl:g.cd,clientName:g.ad,clientVersion:g.bd}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));w("DELEGATED_SESSION_ID")&&!y("pageid_as_header_web")&&(g.user={onBehalfOfUser:w("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=yj(a,n);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=rj[n])a:{var l=n;if(g.videoId)h=
"VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:h}]}delete rj[n];f.requestTimeMs=e;if(g=w("EVENT_ID",void 0))h=(w("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>hj&&(h=1),bh("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,ij&&jj&&y("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:ij,roundtripMs:jj}),
ij=g,jj=0;zj(b,a,f,{retry:mj.has(a),onSuccess:Pa(Aj,this,$g())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var n=d.diffCount||0;d.averageTimeBetweenDispatchesMs=n?(d.averageTimeBetweenDispatchesMs*n+c)/(n+1):c;d.diffCount=n+1}d.previousDispatchMs=e}
function Aj(a){jj=Math.round($g()-a)}
;var Bj={};
function Cj(a){var b=void 0===a?{}:a;a=void 0===b.yb?!0:b.yb;b=void 0===b.Fb?!1:b.Fb;if(null==r("_lact",window)){var c=parseInt(w("LACT"),10);c=isFinite(c)?Ra()-Math.max(c,0):-1;p("_lact",c,window);p("_fact",c,window);-1==c&&Dj();aj(document,"keydown",Dj);aj(document,"keyup",Dj);aj(document,"mousedown",Dj);aj(document,"mouseup",Dj);a&&(b?aj(window,"touchmove",function(){Ej("touchmove",200)},{passive:!0}):(aj(window,"resize",function(){Ej("resize",200)}),aj(window,"scroll",function(){Ej("scroll",200)})));
new bj(function(){Ej("mouse",100)});
aj(document,"touchstart",Dj,{passive:!0});aj(document,"touchend",Dj,{passive:!0})}}
function Ej(a,b){Bj[a]||(Bj[a]=!0,Kh(function(){Dj();Bj[a]=!1},b))}
function Dj(){null==r("_lact",window)&&Cj();var a=Ra();p("_lact",a,window);-1==r("_fact",window)&&p("_fact",a,window);(a=r("ytglobal.ytUtilActivityCallback_"))&&a()}
function Fj(){var a=r("_lact",window);return null==a?-1:Math.max(Ra()-a,0)}
;function Gj(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||$g());f[a]=b;f.context={lastActivityMs:String(d?-1:Fj())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),rj[e.token]=a,e=yj("log_event",e.token)):e=yj("log_event");e.push(f);c&&(nj.log_event=new c);e.length>=(Th("web_logging_max_batch")||20)?uj():wj()}
;function Hj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||w("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Pd||w("AUTHORIZATION");if(!b)if(a)b="Bearer "+r("gapi.auth.getToken")().Od;else a:{a=[];b=vd(String(m.location.href));c=m.__OVERRIDE_SID;null==c&&(c=(new fc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==b&&(b=(new fc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":
"APISIDHASH";var e=String(m.location.href);b=e&&b&&c?[c,Kd(vd(e),b,a||null)].join(" "):null;break a}b=null}b&&(d.Authorization=b,d["X-Goog-AuthUser"]=w("SESSION_INDEX",0),y("pageid_as_header_web")&&(d["X-Goog-PageId"]=w("DELEGATED_SESSION_ID")));return d}
;function Ij(a){var b=new Vf;(b=b.isAvailable()?a?new ag(b,a):b:null)||(a=new Wf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.b=(a=b)?new Rf(a):null;this.f=document.domain||window.location.hostname}
Ij.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,Ra()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vf(b))}catch(f){return}else e=escape(b);Oi(a,e,c,this.f)};
Ij.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=gc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ij.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;gc.remove(""+a,"/",void 0===b?"youtube.com":b)};new Ij("yt.innertube");function Jj(a){this.b=a||{Yc:w("INNERTUBE_API_KEY",void 0),Zc:w("INNERTUBE_API_VERSION",void 0),ad:w("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),bd:w("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),dd:w("INNERTUBE_CONTEXT_HL",void 0),cd:w("INNERTUBE_CONTEXT_GL",void 0),ed:w("INNERTUBE_HOST_OVERRIDE",void 0)||"",fd:!!w("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function zj(a,b,c,d){!w("VISITOR_DATA")&&.01>Math.random()&&x(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");c={headers:{"Content-Type":"application/json"},method:"POST",T:c,Eb:"JSON",qa:function(){d.qa()},
Cb:d.qa,onSuccess:function(g,h){if(d.onSuccess)d.onSuccess(h)},
Xd:function(g){if(d.onSuccess)d.onSuccess(g)},
onError:function(g,h){if(d.onError)d.onError(h)},
Wd:function(g){if(d.onError)d.onError(g)},
timeout:d.timeout,withCredentials:!0};var e="",f=a.b.ed;f&&(e=f);f=Hj(a.b.fd||!1,e,d);Object.assign(c.headers,f);c.headers.Authorization&&!e&&(c.headers["x-origin"]=window.location.origin);a=""+e+("/youtubei/"+a.b.Zc+"/"+b)+"?alt=json&key="+a.b.Yc;try{y("use_fetch_for_op_xhr")?si(a,c):Bi(a,c)}catch(g){if("InvalidAccessError"==g)x(Error("An extension is blocking network request."),"WARNING");else throw g;}}
;function Kj(a,b,c){var d=Jj;w("ytLoggingEventsDefaultDisabled",!1)&&Jj==Jj&&(d=null);Gj(a,b,d,c,void 0)}
function Lj(){y("log_web_meta")&&xj().forEach(function(a){Kj("delayedEventMetricCaptured",a)})}
;function Mj(a){this.b=a}
function Nj(a){return new Mj({trackingParams:a})}
function Oj(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Oj(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
Mj.prototype.toString=function(){return JSON.stringify(Oj(this))};function Pj(a,b){Ya(b,function(c){Gj("visualElementShown",{csn:a,ve:Oj(c),eventType:1},Jj,void 0,void 0)})}
function Qj(a,b){Ya(b,function(c){Gj("visualElementShown",{csn:a,ve:Oj(c),eventType:4},Jj,void 0,void 0)})}
function Rj(a,b){Ya(b,function(c){Gj("visualElementHidden",{csn:a,ve:Oj(c),eventType:8},Jj,void 0,void 0)})}
;var Sj=r("ytLoggingLatencyUsageStats_")||{};p("ytLoggingLatencyUsageStats_",Sj,void 0);var Tj=0;function Uj(a,b){var c=Object.keys(a).join("");Vj("info_"+c+"_"+b)||(a.clientActionNonce=b,Kj("latencyActionInfo",a))}
function Vj(a){Sj[a]=Sj[a]||{count:0};var b=Sj[a];b.count++;b.time=$g();Tj||(Tj=Lh(Wj,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;gj(c,b)}return!0}return!1}
function Wj(){var a=$g(),b;for(b in Sj)6E4<a-Sj[b].time&&delete Sj[b];Tj=0}
;var Xj=Ra().toString();
function Yj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Ra();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Xj)for(a=1,b=0;b<Xj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Xj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Zj=!1,ak=[],bk=r("ytLoggingTimeDocumentNonce_")||Yj();p("ytLoggingTimeDocumentNonce_",bk,void 0);var ck=0,dk=null,ek=null;function fk(){if("hidden"==Ti())var a="FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND";else"visible"==Ti()&&(a="FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND",dk=null);a&&gk(a)}
function gk(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(ek==a)return;ek=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(Fj()>b)&&"visible"==Ti()){b=-1;dk&&(b=Math.round($g()-dk));var c=String;var d=r("_fact",window);d=null==d||-1==d?-1:Math.max(Ra()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:bk,index:String(ck),lastEventDeltaMs:String(b),trigger:a};Gj("foregroundHeartbeat",a,Jj);p("_fact",-1,window);
ck++;dk=$g()}}
function hk(a){a&&Gj("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:bk,clientScreenNonce:a},Jj)}
;function ik(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function jk(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
p("yt_logging_screen.getRootVeType",function(a){return w(jk(void 0===a?0:a),void 0)},void 0);
function kk(a){a=void 0===a?0:a;var b=w(ik(a));b||0!=a||(b=w("EVENT_ID"));return b?b:null}
p("yt_logging_screen.getCurrentCsn",kk,void 0);function lk(a,b,c){c=void 0===c?0:c;if(a!==w(ik(c))||b!==w(jk(c)))bh(ik(c),a),bh(jk(c),b),0==c&&(b=function(){setTimeout(function(){hk(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
p("yt_logging_screen.setCurrentScreen",lk,void 0);function mk(a,b){b=void 0===b?null:b;var c={youThereEventType:a};b||(b=kk());b&&(c.clientScreenNonce=b);Kj("youThere",c)}
;var nk=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};p("yt.msgs_",nk,void 0);function z(a){var b=void 0===b?{}:b;a=(a=a in nk?nk[a]:void 0)||"";var c={},d;for(d in b)c.sa=d,a=a.replace(new RegExp("\\$"+c.sa,"gi"),function(e){return function(){return b[e.sa]}}(c)),c={sa:c.sa};
return a}
;var ok=dc||ec;var pk={},qk=0;
function rk(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ab,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(b=Hc(Mc(a)),"about:invalid#zClosurez"===b?a="":(b instanceof Rc?a=b:(d="object"==typeof b,a=null,d&&b.Qa&&(a=b.Pa()),b=ob(d&&b.V?b.P():String(b)),a=Uc(b,a)),a=Tc(a),a=encodeURIComponent(String(vf(a)))),/^[\s\xa0]*$/.test(a)||(a=ed("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?wi(a,
b,"POST",e,d):w("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?wi(a,b,"GET","",d):(ch("web_use_beacon_api_for_ad_click_server_pings")&&-1!=eg(dg(a)[5]||null).indexOf("/aclk")&&"1"===og(a,"ae")&&"1"===og(a,"act")?sk(a)?(b&&b(),d=!0):d=!1:d=!1,d||tk(a,b)))}
function uk(a){if(a)for(var b=0;b<a.length;b++)rk(a[b],void 0,void 0)}
function sk(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function tk(a,b){var c=new Image,d=""+qk++;pk[d]=c;c.onload=c.onerror=function(){b&&pk[d]&&b();delete pk[d]};
c.src=a}
;var vk;var wk=Ab,xk=wk.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!xk||2>xk.length)vk=void 0;else{var yk=wk.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);vk=yk&&6==yk.length?Number(yk[5].replace("_",".")):0}var zk=vk,Ak=0<=zk;Ak&&0<=Ab.search("Safari")&&Ab.search("Version");function Bk(){}
var Ck=Ak&&4>zk?.1:0,Dk=new Bk;Bk.prototype.f=null;Bk.prototype.getDuration=function(){return this.duration||0};
Bk.prototype.getCurrentTime=function(){return this.currentTime||0};
Bk.prototype.g=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};function Ek(){this.b=[];this.f=[];this.g=[]}
Fa(Ek);var Fk=r("ytPlayerUtilsVideoTagPoolInstance")||Ek.O();p("ytPlayerUtilsVideoTagPoolInstance",Fk,void 0);k=Ek.prototype;k.wb=function(a){if(!(this.b.length>=a)){a-=this.b.length;for(var b=0;b<a;b++)Gk(this)}};
function Gk(a,b,c){c=document.createElement(String(c?"AUDIO":"VIDEO"));for(var d in Dk)c[d]=Dk[d];aj(c,"loadeddata",Pa(c.g,c));dc&&6<=zk&&aj(c,"webkitbeginfullscreen",Pa(c.play,c));a.f.push(c);b?a.g.push(c):Hk(a,c);return c}
function Hk(a,b){0<=Xa(a.f,b)&&!(0<=Xa(a.b,b))&&(b.src||b.load(),fb(a.g,b)||a.b.push(b))}
k.Pc=function(a,b){if(this.b.length)return this.b.pop();var c=Gk(this,a,b);a||fb(this.b,c);return c};
k.pd=function(a){if(a&&0<=Xa(this.f,a)){a.src&&(ok&&0<a.readyState&&(a.currentTime=Math.max(Ck,0)),a.removeAttribute("src"),a.load(),!a.f||!a.f.b()||a.f&&a.f.f(null)||(a.f&&a.f.dispose(),a.f=null));for(var b in Ib)Ib[b][0]==a&&Zi(b);fb(this.f,a);fb(this.g,a)}};
k.Vc=function(a){return this.b.length>=(a||1)};
k.Ic=function(){for(var a=this.g.length-1;0<=a;a--)Hk(this,this.g[a]);this.b.length==this.f.length&&4<=this.b.length||(4>this.f.length?this.wb(4):(this.b=[],Ya(this.f,function(b){Hk(this,b)},this)))};
Ek.prototype.fillPool=Ek.prototype.wb;Ek.prototype.getTag=Ek.prototype.Pc;Ek.prototype.releaseTag=Ek.prototype.pd;Ek.prototype.hasTags=Ek.prototype.Vc;Ek.prototype.activateTags=Ek.prototype.Ic;var Ik={},Jk=(Ik.auto=0,Ik.tiny=144,Ik.light=144,Ik.small=240,Ik.medium=360,Ik.large=480,Ik.hd720=720,Ik.hd1080=1080,Ik.hd1440=1440,Ik.hd2160=2160,Ik.hd2880=2880,Ik.highres=4320,Ik);var Kk=r("ytglobal.prefsUserPrefsPrefs_")||{};p("ytglobal.prefsUserPrefsPrefs_",Kk,void 0);function Lk(){this.b=w("ALT_PREF_COOKIE_NAME","PREF");var a=gc.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Kk[d]=c.toString())}}}
k=Lk.prototype;k.get=function(a,b){Mk(a);Nk(a);var c=void 0!==Kk[a]?Kk[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){Mk(a);Nk(a);if(null==b)throw Error("ExpectedNotNull");Kk[a]=b.toString()};
function Ok(a,b){return!!((Pk("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
function Qk(a,b){var c="f"+(Math.floor(a/31)+1),d=1<<a%31,e=Pk(c)||0;e=b?e|d:e&~d;0==e?delete Kk[c]:(d=e.toString(16),Kk[c]=d.toString())}
k.remove=function(a){Mk(a);Nk(a);delete Kk[a]};
function Rk(a){Oi(a.b,a.dump(),63072E3)}
k.clear=function(){for(var a in Kk)delete Kk[a]};
k.dump=function(){var a=[],b;for(b in Kk)a.push(b+"="+encodeURIComponent(String(Kk[b])));return a.join("&")};
function Nk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Mk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Pk(a){a=void 0!==Kk[a]?Kk[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(Lk);function Sk(a,b){this.version=a;this.args=b}
;function Tk(a){this.topic=a}
Tk.prototype.toString=function(){return this.topic};var Uk=r("ytPubsub2Pubsub2Instance")||new Lf;Lf.prototype.subscribe=Lf.prototype.subscribe;Lf.prototype.unsubscribeByKey=Lf.prototype.Fa;Lf.prototype.publish=Lf.prototype.Hb;Lf.prototype.clear=Lf.prototype.clear;p("ytPubsub2Pubsub2Instance",Uk,void 0);p("ytPubsub2Pubsub2SubscribedKeys",r("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);p("ytPubsub2Pubsub2TopicToKeys",r("ytPubsub2Pubsub2TopicToKeys")||{},void 0);p("ytPubsub2Pubsub2IsAsync",r("ytPubsub2Pubsub2IsAsync")||{},void 0);
p("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Vk(a,b){var c=r("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function Wk(a,b){var c=8,d=w("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=fg(window.location.href);e&&d.push(e);e=fg(a);if(0<=Xa(d,e)||!e&&lb(a,"/"))if(y("autoescape_tempdata_url")&&(d=document.createElement("a"),Wc(d,a),a=d.href),a){var f=dg(a);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||kk();c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+xb(d).toString(36),e=b?kg(b):"",Oi(d,e,c||5))):(c="ST-"+xb(d).toString(36),
d=b?kg(b):"",Oi(c,d,5))}}}
;var Xk=window.performance&&window.performance.memory,Yk=!1,Zk={},$k={};function al(){var a=9E4+2E3*Math.random();Fj()>a||bl()}
function bl(){var a={metric:{staticContext:$k,dynamicContext:{viewportHeightPixels:Math.max(document.documentElement?document.documentElement.clientHeight||0:0,window.innerHeight||0),viewportWidthPixels:Math.max(document.documentElement?document.documentElement.clientWidth||0:0,window.innerWidth||0)},webMetric:Zk}};Xk&&(a.metric.webMetric.currentHeapKbytes=Math.round(Xk.usedJSHeapSize/1E3));Kj("systemHealthCaptured",a)}
;var cl=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function dl(a){if(cl.getEntriesByType){var b=cl.getEntriesByType("paint");if(b=db(b,function(d){return"first-paint"==d.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,Ja(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0}
;function el(){var a=w("TIMING_TICK_EXPIRATION");a||(a={},bh("TIMING_TICK_EXPIRATION",a));return a}
function fl(){var a=el(),b;for(b in a)Nh(a[b]);bh("TIMING_TICK_EXPIRATION",{})}
;function gl(a,b){Sk.call(this,1,arguments)}
la(gl,Sk);function hl(a,b){Sk.call(this,1,arguments)}
la(hl,Sk);var il=new Tk("aft-recorded"),jl=new Tk("timing-sent");var kl={vc:!0},ll={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_sel_auto_svg_home_v2"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",
'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"},B={},ml=(B.ad_allowed="adTypesAllowed",B.yt_abt="adBreakType",B.ad_cpn="adClientPlaybackNonce",B.ad_docid="adVideoId",B.yt_ad_an="adNetworks",B.ad_at="adType",B.browse_id="browseId",B.p="httpProtocol",B.t="transportProtocol",B.cpn="clientPlaybackNonce",B.csn="clientScreenNonce",B.docid="videoId",B.is_continuation="isContinuation",B.is_nav="isNavigation",B.b_p="kabukiInfo.browseParams",B.is_prefetch="kabukiInfo.isPrefetch",B.is_secondary_nav="kabukiInfo.isSecondaryNav",
B.prev_browse_id="kabukiInfo.prevBrowseId",B.query_source="kabukiInfo.querySource",B.voz_type="kabukiInfo.vozType",B.yt_lt="loadType",B.yt_ad="isMonetized",B.nr="webInfo.navigationReason",B.ncnp="webInfo.nonPreloadedNodeCount",B.paused="playerInfo.isPausedOnLoad",B.yt_pt="playerType",B.fmt="playerInfo.itag",B.yt_pl="watchInfo.isPlaylist",B.yt_pre="playerInfo.preloadType",B.yt_ad_pr="prerollAllowed",B.pa="previousAction",B.yt_red="isRedSubscriber",B.st="serverTimeMs",B.aq="tvInfo.appQuality",B.br_trs=
"tvInfo.bedrockTriggerState",B.label="tvInfo.label",B.is_mdx="tvInfo.isMdx",B.preloaded="tvInfo.isPreloaded",B.query="unpluggedInfo.query",B.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",B.yt_vst="videoStreamType",B.vph="viewportHeight",B.vpw="viewportWidth",B.yt_vis="isVisible",B),nl="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
ol={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",search_ui:"LATENCY_ACTION_SEARCH_UI",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
"video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"},pl="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),ql={},rl=(ql.pa="LATENCY_ACTION_",ql.yt_pt="LATENCY_PLAYER_",ql.yt_vst="VIDEO_STREAM_TYPE_",ql),sl=!1;
function tl(a,b,c){if(!b&&"_"!=a[0]){var d=a;cl.mark&&(lb(d,"mark_")||(d="mark_"+d),c&&(d+=" ("+c+")"),cl.mark(d))}var e=String(Sh("time_service_mode")||""),f=r("ytcsi.now");d=ul(c);e=b||e&&f&&f()||$g();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=el();if(e=d[a])Nh(e),d[a]=0;vl(a,b,c)||wl(c)}
function xl(a){yl("yt_sts","n",void 0);tl("_start",a,void 0)}
function yl(a,b,c){zl(c)[a]=b;Al(a,b,c)}
function Bl(a){var b=ul(a);if(b.aft)return b.aft;a=w((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function wl(a){if(!Cl(a)){var b=w((a||"")+"TIMING_ACTION",void 0),c=ul(a);if(r("ytglobal.timing"+(a||"")+"ready_")&&b&&c._start&&(b=Bl(a)))if(sl||(Vk(il,new gl(Math.round(b-c._start),a)),sl=!0),a)Dl(a);else{b=!0;var d=w("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Dl(a)}}}
function El(){switch(Ti()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1}
function Fl(a){if(!Cl(void 0)){var b=w("CSI_SERVICE_NAME","youtube");w("TIMING_ACTION",void 0)&&b&&(tl("aa",void 0,void 0),yl("ap",1,void 0),yl("yt_fss",a,void 0),Dl(void 0))}}
var Gl=Pa(cl.clearResourceTimings||cl.webkitClearResourceTimings||cl.mozClearResourceTimings||cl.msClearResourceTimings||cl.oClearResourceTimings||t,cl);function vl(a,b,c){Hl(c)["tick_"+a]=b;c||b||$g();return Il(c)?(c=Jl(c),"_start"==a?Vj("baseline_"+c)||Kj("latencyActionBaselined",{clientActionNonce:c},b):Vj("tick_"+a+"_"+c)||Kj("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1}
function Al(a,b,c){Hl(c)["info_"+a]=b;if(Il(c))if(a in ml){var d=ml[a];0<=Xa(pl,d)&&(b=!!b);a in rl&&(b=rl[a]+b.toUpperCase());if(Il(c)){a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;c=Jl(c);Uj(a,c)}}else 0<=Xa(nl,a)||x(Error("Unknown label "+a+" logged with GEL CSI."))}
function Kl(a){return Math.round(cl.timing.navigationStart+a)}
function Ll(){var a=window.location.protocol,b=cl.getEntriesByType("resource");b=Za(b,function(c){return 0==c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ab(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(tl("wffs",Kl(b.startTime)),tl("wffe",Kl(b.responseEnd)))}
function Ml(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=cl.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,tl("rsf_"+b,d+Math.round(c.fetchStart)),tl("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in zl(void 0)||yl("rc",""),0===c.transferSize))?!0:!1:!1}
function Nl(a){p("ytglobal.timingready_",a,void 0)}
function Jl(a){var b=Ol(a).nonce;b||(b=Yj(),Ol(a).nonce=b);return b}
function ul(a){return Ol(a).tick}
function zl(a){return Ol(a).info}
function Hl(a){a=Ol(a);"gel"in a||(a.gel={});return a.gel}
function Ol(a){return r("ytcsi."+(a||"")+"data_")||Pl(a)}
function Pl(a){var b={tick:{},info:{}};p("ytcsi."+(a||"")+"data_",b,void 0);return b}
function Cl(a){return!!r("yt.timing."+(a||"")+"pingSent_")}
function Ql(a,b){p("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Rl(a){var b=ul(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==zl(a).yt_pvis}
function Il(a){return y("csi_on_gel")||!!Ol(a).useGel}
var Sl=yl;function Dl(a){fl();if(!Il(a)){var b=ul(a),c=zl(a),d=b._start;for(g in b)if(lb(g,"_")&&Ha(b[g])){var e=g.slice(1);if(e in kl){var f=$a(b[g],function(q){return Math.round(q-d)});
c["all_"+e]=f.join()}delete b[g]}f=w("CSI_SERVICE_NAME","youtube");var g={v:2,s:f,action:w((a||"")+"TIMING_ACTION",void 0)};e=yl.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var h=window.location.protocol+r("ytplayer.config.assets.js");(h=cl.getEntriesByName?cl.getEntriesByName(h)[0]:null)?c.h5jse=Math.round(c.h5jse-h.responseEnd):delete c.h5jse}b.aft=Bl(a);Rl(a)&&"youtube"==f&&(yl("yt_lt","hot_bg",a),f=b.vc,h=b.pbs,delete b.aft,c.aft=Math.round(h-f));for(var l in c)"_"!=l.charAt(0)&&(g[l]=c[l]);
b.ps=$g();l={};f=[];for(var n in b)"_"!=n.charAt(0)&&(h=Math.round(b[n]-d),l[n]=h,f.push(n+"."+h));g.rt=f.join(",");(b=r("ytdebug.logTiming"))&&b(g,l);Tl(g,!!c.ap,a);Vk(jl,new hl(l.aft+(e||0),a))}}
function Tl(a,b,c){if(y("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],p("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;sk(a,f)||rk(a,void 0,void 0,void 0,f)}else rk(a);Ql(!0,c)}
;function Ul(a){a=[(a&16711680)>>>16,(a&65280)>>>8,a&255,(a&4278190080)>>>24];var b=cb(a,function(c){return c==(c&255)});
a[3]=(a[3]/255).toFixed(3);if(!b)throw Error('"('+a.join(",")+'") is not a valid RGBA color');return"rgba("+a.join(",")+")"}
;function Vl(){if(this.constructor===Vl)throw new TypeError("VisibilityObserver cannot be instantiated directly.");}
Vl.prototype.dispose=function(){};
Vl.prototype.Sa=function(){};
Vl.prototype.Pb=function(){};
Vl.prototype.ra=function(){};function Wl(a,b){b=void 0===b?0:b;Vl.call(this);this.f=new IntersectionObserver(this.Rc.bind(this),a?{root:a,rootMargin:"-0.1px"}:{rootMargin:"-0.1px"});var c="-0.1px -0.1px "+b+"px -0.1px";this.g=new IntersectionObserver(this.Sc.bind(this),a?{root:a,rootMargin:c}:{rootMargin:c});this.b=new Map}
la(Wl,Vl);k=Wl.prototype;k.dispose=function(){this.f.disconnect();this.g.disconnect();this.b.clear()};
k.Pb=function(){this.f.disconnect();this.g.disconnect();this.b.clear()};
k.Rc=function(a){var b=this;a.forEach(function(c){var d=b.b.get(c.target);if(d){var e=c.isIntersecting;d=ca(d);for(var f=d.next();!f.done;f=d.next()){var g=ca(f.value);f=g.next().value;g=g.next().value;if("visible"==f.state&&e||"hidden"==f.state&&!e)g(c.target,f.state),f.ja&&b.ra({element:c.target,option:f})}}})};
k.Sc=function(a){var b=this;a.forEach(function(c){var d=b.b.get(c.target);if(d&&c.isIntersecting){d=ca(d);for(var e=d.next();!e.done;e=d.next()){var f=ca(e.value);e=f.next().value;f=f.next().value;"prescan"==e.state&&(f(c.target,e.state),e.ja&&b.ra({element:c.target,option:e}))}}})};
k.Sa=function(a,b,c){var d=(d=this.b.get(a))&&d.has(c)?{element:a,option:c}:void 0;d||(this.b.has(a)||this.b.set(a,new Map),d=this.b.get(a),d.has(c)||d.set(c,b),"prescan"==c.state&&this.g.observe(a),this.f.observe(a))};
k.ra=function(a){var b=this.b.get(a.element);b&&b.has(a.option)&&(b["delete"](a.option),"prescan"==a.option&&this.g.unobserve(a.element),0==b.size&&(this.b["delete"](a.element),this.f.unobserve(a.element)))};function Xl(a){if("1"!==Gb(w("PLAYER_CONFIG",{}),"args","privembed")){a&&$h();try{Ni().then(function(b){y("pass_biscotti_id_in_header_ajax_tv")||y("pass_biscotti_id_in_header_ajax")||(b=di(b),b.bsq=Yl++,Bi("/ad_data_204",{Wc:!0,T:b,withCredentials:!0}))},function(){}),lh(Xl,18E5)}catch(b){x(b)}}}
var Yl=0;var Zl=new Ij("yt.autonav");function $l(a,b,c,d,e){var f={};b&&(f[b]=c);d?f.errorType=d:e&&(f.errorReason=e);Kj(a,f);Lj();uj()}
function am(a,b,c,d,e){var f={};b&&(f.serializedYpcFamilyCreateLoggingParams=b);c&&(f.inviteStatus=c);d?f.createErrorType=d:e&&(f.inviteErrorType=e);Kj(a,f);Lj();uj()}
function bm(a){a&&$l("transactionFlowStarted","serializedTransactionFlowLoggingParams",a)}
function cm(a){a&&$l("transactionFlowCancelled","serializedTransactionFlowLoggingParams",a)}
function dm(a){a&&$l("transactionFlowSucceeded","serializedTransactionFlowLoggingParams",a)}
function em(a,b){b&&$l("transactionFlowFailed","serializedTransactionFlowLoggingParams",b,a)}
function fm(){$l("ypcRedeemFlowSucceeded")}
function gm(a){$l("ypcRedeemFlowFailed",void 0,void 0,void 0,a)}
function hm(a){a&&$l("ypcCancelFlowFailed","serializedYpcCancelFlowLoggingParams",a,void 0,"YPC_ERROR_REASON_YPC_CANCEL_RECURRENCE_TRANSACTION_FAILURE")}
function im(a){a&&$l("ypcResumeFlowSucceeded","serializedYpcResumeFlowLoggingParams",a)}
function jm(a){a&&$l("ypcResumeFlowFailed","serializedYpcResumeFlowLoggingParams",a,void 0,"YPC_ERROR_REASON_INNERTUBE_RESPONSE_FAILURE")}
function km(a){a&&$l("ypcPauseFlowSucceeded","serializedYpcPauseFlowLoggingParams",a)}
function lm(a){a&&$l("ypcPauseFlowFailed","serializedYpcPauseFlowLoggingParams",a,void 0,"YPC_ERROR_REASON_INNERTUBE_RESPONSE_FAILURE")}
function mm(a,b,c){b&&(a={eventType:a,serializedFixFopLoggingParams:b},c&&(a.errorType=c),Kj("fixFopFlow",a),Lj(),uj())}
function nm(a){a&&am("ypcFamilyCreateFlowCancelled",a)}
;function om(){var a={};Ob(a,{label:"mb-api-loading",pageName:w("PAGE_NAME")});a=kg(a);rk("/gen_204?a=ypc-checkout"+(a?"&"+a:""),void 0)}
;function pm(){this.b=null}
Fa(pm);pm.prototype.load=function(a){om();this.b=w("YPC_MB_URL",void 0);zh(this.b,Pa(function(){a&&a()},this))};
function qm(a,b,c,d,e,f,g){bm(g);a.load(Pa(function(){rm(this,b,c,d,e,f,g)},a))}
function sm(a,b,c){var d=pm.O();d.load(Pa(function(){try{tm(this,r("payments.business.integration")).forWidget().fixInstrument().withEncryptedParameters(a).withIntegratorCallback(b).load(void 0,c)}catch(e){throw x(e,void 0,void 0,void 0,!0),e;}},d))}
function tm(a,b,c,d,e){var f=b.mashupMode.popup("buyFlowDivId").usingDraggableDialog().usingPreferredWidth(600);y("enable_window_constrained_buy_flow_dialog")&&(f=f.usingPopupStyle(r("payments.business.integration").PopupStyle.WINDOW_CONSTRAINED));e&&(f=f.usingCloseCallback(e));b.bootstrap.fromPaymentsUrl(a.b);a=b.bootstrap.asMashupMode(f);c=c?c:w("YPC_GB_LANGUAGE");a.usingGaiaIndex(d?d:w("SESSION_INDEX")).usingLocale(c).usingDefaultActivityStatusChangeHandler().usingStyle(":md;pc=#444;ac=#2793e6").usingBaseZIndex(2E9);
return a}
function rm(a,b,c,d,e,f,g){try{var h=r("payments.business.integration"),l=h.standaloneContextAuthId.forUserId(),n=tm(a,h,e,void 0,void 0);f&&n.usingServerAnalyticsEventHandler(f);n.inStandaloneContext(l).buyFlow(function(q){!q||q.integratorData&&""!==q.integratorData&&!q.error||(null!=q.error?"-1"===String(q.error)?cm(g):(em("TRANSACTION_ERROR_TYPE_YPC_BUYFLOW_COMPLETE_FAILURE",g),x(Error("PAYMENT_ERROR_MESSAGE::"+q.userVisibleErrorMessage+"  PAYMENT_ERROR_DETAILS::"+q.internalErrorDetails),void 0,
void 0,void 0,!0)):(em("TRANSACTION_ERROR_TYPE_YPC_BUYFLOW_COMPLETE_EMPTY",g),x(Error("IntegratorData not present in BuyFlow Complete Callback"))));c&&c(q)}).withEncryptedParameters(b).load(void 0,function(q){em("TRANSACTION_ERROR_TYPE_LOAD_FAILURE",g);
x(q,void 0,void 0,void 0,!0);d&&d(q)})}catch(q){throw x(q,void 0,void 0,void 0,!0),q;
}}
;function um(a,b){var c=w("SESSION_INDEX");this.f=a;this.b=b;this.g=c}
function vm(a){var b=We(),c=r("payments.business.integration.bootstrap"),d=r("payments.business.integration"),e=d.Style.create().withMaterialDesignStyle(),f=d.mashupMode.popup("instrument-manager");c.asMashupMode(f).usingUserIndex(a.g).usingDefaultActivityStatusChangeHandler().usingStyle(e).inStandaloneContext(d.standaloneContextAuthId.forUserId()).instrumentManager(a.f,0<a.b.length?a.b:void 0,function(g){var h=g.instrumentId;h?b.resolve(h):(h=r("payments.business.integration.scenario.InstrumentManager"),
b.reject(g.errorCode&&g.errorCode===h.FailureReason.CANCELLED?"instrumentManagerCancelled":"instrumentManagerCallbackError"))}).load(null,function(g){x(g);
b.reject("instrumentManagerLoadError")});
return b.b}
;var wm=/^(?:https:)?\/\/[0-9a-z-.]+\.(google|youtube)\.com\//;function xm(a){a=wm.test(a)?Vc(pc("Url of payment library"),a):null;if(!window.payments&&a)a=Gf(a,{attributes:{"data-payments-main":"",id:"payment-lib"}});else{var b=We();a=b.b;b.resolve()}return a}
;function ym(a){var b=document;Aa("gtm")&&!b.getElementById("gtm")&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),b=document.createElement("SCRIPT"),b.async=!0,Yc(b,yc(pc("//www.googletagmanager.com/gtm.js?id=%{id}"),{id:a})),b.id="gtm",a=document.getElementsByTagName("script"),0==a.length?document.head.appendChild(b):(a=a[0],a.parentNode.insertBefore(b,a)))}
function zm(a){if(a=JSON.parse(a))window.dataLayer=window.dataLayer||[],window.dataLayer.push(a)}
;function Am(a){a.logYpcFlowStartCommand&&(a=a.logYpcFlowStartCommand,a.serializedTransactionFlowLoggingParams?bm(a.serializedTransactionFlowLoggingParams):a.serializedYpcCancelFlowLoggingParams?(a=a.serializedYpcCancelFlowLoggingParams)&&$l("ypcCancelFlowStarted","serializedYpcCancelFlowLoggingParams",a):a.serializedYpcResumeFlowLoggingParams?(a=a.serializedYpcResumeFlowLoggingParams)&&$l("ypcResumeFlowStarted","serializedYpcResumeFlowLoggingParams",a):a.serializedYpcPauseFlowLoggingParams&&(a=a.serializedYpcPauseFlowLoggingParams)&&
$l("ypcPauseFlowStarted","serializedYpcPauseFlowLoggingParams",a))}
function Bm(a){a=a.logYpcFlowDismissCommand;a.serializedTransactionFlowLoggingParams?cm(a.serializedTransactionFlowLoggingParams):a.serializedYpcCancelFlowLoggingParams?(a=a.serializedYpcCancelFlowLoggingParams)&&$l("ypcCancelFlowCancelled","serializedYpcCancelFlowLoggingParams",a):a.serializedYpcResumeFlowLoggingParams?(a=a.serializedYpcResumeFlowLoggingParams)&&$l("ypcResumeFlowCancelled","serializedYpcResumeFlowLoggingParams",a):a.serializedYpcPauseFlowLoggingParams&&(a=a.serializedYpcPauseFlowLoggingParams)&&
$l("ypcPauseFlowCancelled","serializedYpcPauseFlowLoggingParams",a)}
;var Cm=pc("https://clients2.google.com/gr/gr_sync.js");function Dm(){}
Dm.prototype.init=function(){if(Em()){var a=We();a.resolve();return a.b}return Gf(yc(Cm,{})).then(function(){if(!Em())throw Error("RiskService loaded but risk object does not exists");},function(){throw Error("RiskService loading is rejected, reason:");
})};
function Fm(){if(!Em())return"";var a=window.google.gr;a.init({async:{schedule:"sync"},merchantId:"youtube"});a.start();a=a.finish();return null==a?"":a}
function Em(){return null!=window.google&&null!=window.google.gr}
;var Gm=[];function Hm(){var a=Gm.slice();Gm.length=0;a.forEach(function(b){try{b()}catch(c){Se(c)}})}
function Im(a){0==Gm.length&&requestAnimationFrame(function(){setTimeout(Hm)});
Gm.push(a)}
;var Jm=Object.freeze?Object.freeze(Object.create(null)):{};function Km(a,b,c,d){a[b]!=c&&(a[b]=c,d())}
function C(a){try{return a()}catch(b){return null}}
function E(a){try{return a()}catch(b){return eh(b),null}}
var Lm=window.requestIdleCallback||function(a){Im(function(){return setTimeout(a,500)})};var Mm={},Nm=null,Om="";function Pm(){return Mm}
function Qm(a){(Mm=a)&&a.response&&a.response.guideResponse&&(Nm=a.response.guideResponse)}
;var Rm=!1,Sm=!1;function Tm(a){a.program&&bh({BG_P:a.program});a.interpreterUrl&&bh({BG_IU:a.interpreterUrl});a.b&&bh({BG_I:a.b});a=r("yt.abuse.player.invokeBotguard")||Zh;p("yt.abuse.player.botguardInitialized",r("yt.abuse.player.botguardInitialized")||Yh,void 0);p("yt.abuse.player.invokeBotguard",a,void 0);p("yt.abuse.dclkstatus.checkDclkStatus",Rh,void 0);a=w("BG_P",void 0);Xh(a)&&(w("BG_I")||w("BG_IU"))&&(Uh=!0,Fh(a));Qh();Sm=!0}
function Um(a){return E(function(){return a.attestation.playerAttestationRenderer.botguardData})}
function Vm(){var a=Mm;if(a&&a.response&&a.response.playerResponse){var b=Um(a.response.playerResponse);b&&setTimeout(function(){return Tm(b)},1E3)}}
function Wm(a){1!=a.detail.state||Rm||(Rm=!0,Vm())}
function Xm(){Vm()}
function Ym(){Sm=Rm=!1}
function Zm(){if(!Sm&&Rm){var a=Mm;a&&a.response&&a.response.playerResponse&&(a=Um(a.response.playerResponse))&&Tm(a)}}
;var F={Sb:z("ACCOUNT_LABEL"),Tb:z("AD_BADGE_HINT"),Ga:z("AD_BADGE_TEXT"),cb:z("ADD_TO_DROPDOWN_LABEL"),Ub:z("AUTONAV_TOGGLE"),N:z("CANCEL"),Vb:z("CHANNEL_SWITCHER_LABEL"),ta:z("CLOSE"),eb:z("CLOSE_SEARCH_LABEL"),fb:z("CLOSE_SETTINGS_LABEL"),gb:z("CONFIRM_OK"),Wb:z("CONNECT_TO_THE_INTERNET"),Xb:z("COPIED_TO_CLIPBOARD"),hb:z("COPY"),Yb:z("COPY_DEBUG_INFO"),Zb:z("FAILED_COPY_ERROR_MESSAGE"),Gd:z("FLAG_CONFIRM"),Hd:z("FLAG_CONTENT"),Jd:z("FLAG_LABEL"),Kd:z("FLAG_TITLE"),Ia:z("HOME"),ac:z("INVALID_RESPONSE_RECEIVED"),
cc:z("LIBRARY"),ib:z("MENU_DEBUG"),dc:z("MENU_DESKTOP"),ec:z("MENU_EXIT"),fc:z("MENU_FEEDBACK"),gc:z("MENU_HELP"),hc:z("MENU_IMPRESSUM"),ic:z("MENU_NETZDG"),jc:z("MENU_NETZDG_REPORT_LINK"),jb:z("MENU_PLAYER_SETTINGS"),kc:z("MENU_SETTINGS"),kb:z("MENU_SIGN_IN"),lc:z("MENU_TERMS"),mc:z("MENU_YOUR_DATA"),nc:z("MORE_INFO"),lb:z("MORE_OPTIONS"),oc:z("NEXT_VIDEO"),Ld:z("NOTIFICATION_ERROR_MESSAGE"),pc:z("OFFLINE_CHECK_CONNECTION"),qc:z("OPEN_APP"),sc:z("PLAYER_QUALITY"),tc:z("PLAYER_QUALITY_AUTO"),uc:z("PLAYER_SPEED"),
wc:z("PLAYER_SPEED_NORMAL"),zc:z("PLAYLIST_NAME_MISSING"),Ac:z("PLAYLIST_NAME_TOO_LONG"),yc:z("PLAYLIST_NAME_INVALID_CHARACTERS"),xc:z("PLAYLIST_DESCRIPTION_INVALID_CHARACTERS"),Bc:z("PLEASE_FIX_ERRORS"),Cc:z("PREVIOUS_VIDEO"),Dc:z("SAVE_PLAYLIST"),mb:z("SEARCH_LABEL"),Md:z("SEARCH_FILTERS_LABEL"),Ec:z("SETTINGS_LABEL"),ua:z("SHOW_LESS"),va:z("SHOW_MORE"),Ja:z("SIGN_IN_LABEL"),Fc:z("STATS_FOR_NERDS"),Gc:z("TRENDING")};function $m(){this.f=[];this.b=null}
function an(a,b){a.b=b;a.f.forEach(function(c){b(c)});
a.f=null}
$m.prototype.push=function(a){this.b?this.b(a):this.f.push(a)};var bn={clickTrackingParams:t},cn=new $m;function dn(a,b){cn.push({action:a,context:b})}
;var en=[],fn=new $m;function gn(a){return a&&a.commandMetadata&&a.commandMetadata.webCommandMetadata&&a.commandMetadata.webCommandMetadata.url?a.commandMetadata.webCommandMetadata.url:a&&a.webNavigationEndpointData&&a.webNavigationEndpointData.url?a.webNavigationEndpointData.url:null}
function hn(a,b){var c=en.reduce(function(f,g){return f.concat(a[g.commandType]&&g.i||[])},[]);
if(!c.length)throw Error("Unhandled commands: "+Object.keys(a));var d=Mm,e={w:d&&d.response?d.response:{},A:b};c.forEach(function(f){return f(a,e)})}
function G(a,b,c){fn.push({command:a,A:b});c&&a.clickTrackingParams&&(a=a.clickTrackingParams,(b=kk())&&a&&Gj("visualElementGestured",{csn:b,ve:Oj(Nj(a)),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},Jj,void 0,void 0))}
function jn(a,b){a.forEach(function(c){return G(c,b,!0)})}
;var kn=bg.O();function ln(){this.b=""}
ln.prototype.toString=function(){return this.b};
function mn(){var a=new ln;a.b=oc(pc("header-bar"));return a}
function nn(a){var b=new ln;a=oc(a);var c=":"+(kn.b++).toString(36);b.b=a+c;return b}
;var on={},pn=(on[1]={filter:null,U:null,X:null},on[2]={filter:function(a,b,c){return wb(c)},
U:Rc,X:Tc},on[3]={filter:function(a,b,c){return Mc(c).P()},
U:Ec,X:Hc},on[4]={filter:function(){return"about:invalid#zClosurez"},
U:uc,X:wc},on[5]={filter:function(){return"zClosurez"},
U:Pc,X:function(a){if(a instanceof Pc&&a.constructor===Pc&&a.b===Qc)return"";Ga(a);return"type_error:SafeStyle"}},on[7]={filter:function(){return" /*zClosurez*/ "},
U:sc,X:function(a){a instanceof sc&&a.constructor===sc&&a.f===tc?a=a.b:(Ga(a),a="type_error:SafeScript");return a.toString()}},on[8]={filter:function(a,b,c){c=String(c).toLowerCase();
a:{var d=null;(a=Yg[a])&&(d=a[b]);if("number"!==typeof d&&((a=Yg["*"])&&(d=a[b]),"number"!==typeof d)){b=!1;break a}b=!0===Xg[d][String(c).toLowerCase()]}return b?c:"zClosurez"},
U:null,X:null},on[9]={filter:function(){return" /*zClosurez*/ "},
U:lc,X:oc},on[10]={filter:function(a,b,c){return"id"!=b&&"name"!=b||""==c?String(c):"zClosurez"},
U:ln,X:function(a){if(!(a instanceof ln&&a.constructor===ln))throw Error("Unwrap non-TrustedId");return a.b}},on);
function qn(a,b,c){if(null===c)return c;var d=Ug(a.tagName,b,function(){throw Error("Contingent attribute/property lookups are not supported.");});
if(null===d)return c;d=pn[d];if(d.U&&c instanceof d.U)return d.X(c);if(d.U==ln&&c instanceof lc)return oc(c);c=c&&c.V?c.P():c;return d.filter?d.filter(a.tagName,b,String(c)):c}
;wg[sg["default"]]=function(a,b,c){var d="$"!=b[b.length-1];c=qn(a,b,c);d?a[b]=c:vg(a,b.slice(0,-1),null==c?null:String(c))};
function rn(a,b){var c=b&&b.key,d=Jg;d[0]=a;d[1]=c;d[2]=void 0;for(var e in b)c=b[e],d=Jg,d.push(e),d.push(c);e=Jg;for(Tg.apply(null,e);0<e.length;)e.pop()}
function sn(a,b){a?b():Fg=Gg.lastChild}
function tn(a,b){var c=Gg;c._playlistPanelVideoData==a?Fg=Gg.lastChild:(c._playlistPanelVideoData=a,b())}
;function H(a,b,c){c=void 0===c?t:c;rn(a,b);c(Gg);Lg()}
function un(a){var b=String(a).toLowerCase();return function(c,d){H(b,c,d)}}
var vn=un("A"),wn=un("BUTTON"),I=un("DIV"),xn=un("FORM"),yn=un("H1"),J=un("H2"),zn=un("H3"),An=un("H4"),Bn=un("HEADER"),Cn=un("IMG"),Dn=un("INPUT"),En=un("LABEL"),Fn=un("OPTION"),K=un("P"),Gn=un("SCRIPT"),Hn=un("SELECT"),L=un("SPAN"),In=un("TEXTAREA");function Jn(a,b){var c=this;this.o=a;this.B=b;this.b=[];this.g=!1;window.addEventListener("touchmove",Pa(this.f,this));window.addEventListener("touchend",Pa(this.f,this));var d=new lf(Pa(this.f,this),100);window.addEventListener("scroll",function(){d.Na()},!0);
window.addEventListener("resize",Pa(this.f,this));window.addEventListener("state-navigatestart",function(){c.b=[]});
window.addEventListener("state-navigateend",Pa(this.f,this))}
Jn.prototype.observe=function(a){this.b.includes(a)||this.b.push(a)};
function Kn(a,b){a.b=a.b.filter(function(c){return c!==b})}
Jn.prototype.f=function(){var a=this;this.g||(Im(function(){Ln(a)}),this.g=!0)};
function Ln(a){var b=(1+a.o)*(document.documentElement.clientHeight||window.innerHeight);a.b=a.b.filter(function(c){var d=c.getBoundingClientRect();(d=b>d.top&&!!d.height)&&a.B(c);return!d&&c.parentNode});
a.g=!1}
;function Mn(){Vl.call(this);this.b=new Jn(0,function(a){a.Ka&&a.Ka(a,"visible")})}
la(Mn,Vl);Mn.prototype.Sa=function(a,b,c){c.ja&&"visible"==c.state&&(a.Ka=b,this.b.observe(a))};
Mn.prototype.ra=function(a){delete a.element.Ka;Kn(this.b,a.element)};
Mn.prototype.dispose=function(){this.b.b=[]};var Nn=!1,On=null,Pn=[];function Qn(a,b,c){if(!Nn||On)On?On.Sa(a,b,c):Pn.push({element:a,Ma:b,option:c})}
function Rn(a){On?On.ra(a):Pn=Pn.filter(function(b){return b.element!=a.element||b.option!=a.option})}
function Sn(a){On||Nn||(Nn=!0,(On=a())&&Pn.forEach(function(b){Qn(b.element,b.Ma,b.option)}),Pn.length=0)}
window.addEventListener("state-navigateend",function(){On?On.Pb():Pn.length=0});var Tn={ja:!0,state:"visible"},Un={ja:!1,state:"visible"},Vn={ja:!1,state:"hidden"};function Wn(a,b){a.g&&a.g!=b&&a.f&&a.f.forEach(function(c){Rn({element:a,option:c})})}
function Xn(a,b,c){var d=b.trackingParams;b.visibility&&b.visibility.types&&0!=(Number(b.visibility.types)&4)&&(Qn(a,function(){d&&Qj(c,[Nj(d)])},Un),a.f=[Un]);
b.visibility&&b.visibility.types&&0!=(Number(b.visibility.types)&8)&&(Qn(a,function(){d&&Rj(c,[Nj(d)])},Vn),a.f[a.f.length]=Vn)}
function Yn(a,b){if(b){var c=b.loggingDirectives?b.loggingDirectives.trackingParams:b.trackingParams,d=kk();!d||!c||a.g&&a.g==b.trackingParams||(Wn(a,c),b.loggingDirectives?Xn(a,b.loggingDirectives,d):(Qn(a,function(){d&&c&&Pj(d,[Nj(c)])},Tn),a.f=[Tn]),a.g=c)}}
function Zn(){On&&On.dispose();Pn.length=0}
function $n(){"IntersectionObserver"in window?Sn(function(){return new Wl}):y("mweb_visibility_observer_polyfill")&&Sn(function(){return new Mn});
window.addEventListener("state-responsestart",Zn)}
;function M(a,b,c,d){c=void 0===c?{}:c;d=void 0===d?t:d;var e=a._replacingContent;e?e(c):H(b,c,function(f){f.data=a;d(f);Im(function(){Yn(f,a)})})}
function ao(a){return a&&(a.data||ao(a.parentNode))}
function bo(a,b){a._replacingContent=b}
;function co(a){if(a)return a.label?a.label:co(a.accessibilityData)}
;function eo(a,b,c){H("c3-material-button",a,function(){H("button",{className:"c3-material-button-button",disabled:b&&b.disabled,onclick:b&&b.onclick,"aria-label$":b&&b.l,"aria-pressed$":b&&b.Jc},function(){I({className:"cbox"},c)})})}
;function fo(a){(a.loggingUrls||[]).map(function(b){return b.baseUrl}).filter(function(b){return b}).forEach(function(b){return rk(b)})}
function go(a){a.currentTarget._data&&fo(a.currentTarget._data)}
function ho(a){a.preventDefault()}
function io(a){var b=a.currentTarget;(a=E(function(){return b.href}))&&Wk(a,b.params)}
function jo(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?{}:c;d=void 0===d?t:d;a&&gn(a)?(c.l&&(b.l=c.l),N(a,b,d)):ko(c,a,b,d)}
function N(a,b,c){c=void 0===c?t:c;vn(b,function(d){Km(d,"_data",a,function(){a?(d.addEventListener("touchstart",io,{passive:!0}),d.addEventListener("click",go),d.removeEventListener("click",ho)):(d.removeEventListener("touchstart",io,{passive:!0}),d.removeEventListener("click",go),d.addEventListener("click",ho));a&&(d.params={itct:a.clickTrackingParams},a&&a.urlEndpoint&&a.urlEndpoint.target&&"TARGET_NEW_WINDOW"===a.urlEndpoint.target&&(d.target="_blank"),Wc(d,gn(a)||""))});
c()})}
function ko(a,b,c,d){c=void 0===c?{}:c;d=void 0===d?t:d;a.Za?(a.l&&(c.l=a.l),a.disabled&&(c.disabled=a.disabled),c.onclick=function(){b&&(fo(b),G(b,{},!1))},c.className=c.className?c.className+" undecoratedEndpointButton":"undecoratedEndpointButton",H("button",c,d)):eo(c,{l:a.l||"",
disabled:a.disabled,onclick:function(){b&&(fo(b),G(b,{},!1))}},d)}
;function lo(a){a.bold&&rn("strong");a.deemphasize&&rn("span",{className:"formatted-string-deemphasize"});a.italics&&rn("em");if(a.textColor){var b=a.textColor;b&=16777215;var c=[(b&16711680)>>16,(b&65280)>>8,b&255];b=c[0];var d=c[1];c=c[2];b=Number(b);d=Number(d);c=Number(c);if(b!=(b&255)||d!=(d&255)||c!=(c&255))throw Error('"('+b+","+d+","+c+'") is not a valid RGB color');d=b<<16|d<<8|c;b=16>b?"#"+(16777216|d).toString(16).substr(1):"#"+d.toString(16);rn("span",{style:"color: "+b})}a.strikethrough&&
rn("s")}
function mo(a){a.strikethrough&&Lg();a.textColor&&Lg();a.italics&&Lg();a.deemphasize&&Lg();a.bold&&Lg()}
function no(a,b){var c=a.text;lo(a);a.navigationEndpoint&&!b?N(a.navigationEndpoint,null,function(){return u(c)}):u(c);
mo(a)}
function O(a,b){var c=(void 0===b?Jm:b).H;if(a){a.accessibility&&rn("span",{"aria-label$":co(a.accessibility)});if(a.simpleText)u(a.simpleText);else if(a.runs)for(var d=0;d<a.runs.length;d++)no(a.runs[d],!!c);a.accessibility&&Lg()}}
;function oo(a,b){H("ytm-menu-item",a,function(){H("button",{className:"menu-item-button"},b)})}
;function po(a,b){G(b.navigationEndpoint,b,!1);E(function(){return b.navigationEndpoint.commandMetadata.webCommandMetadata.ignoreNavigation})||a.stopPropagation()}
;function qo(a,b,c){var d=a.f;b=a.g||b(a,function(){Mg(a,a.g.R,a.f)},c);
var e=b.R,f=void 0===b.da?t:b.da,g=void 0===b.tb?t:b.tb;d&&f(d,c);e(c);g(d,c);a.g=b;a.f=c}
function ro(a,b){var c=new rc(a);return function(d,e){H(c.toString(),e,function(f){qo(f,b,d)})}}
;function so(a,b){var c=window;c.addEventListener(a,function f(e){c.removeEventListener(a,f,void 0);b(e)},void 0)}
;var to=Re(),uo=!1;function vo(){to=new Me(function(a){function b(){window.removeEventListener("popstate",b);window.removeEventListener("hashchange",b);a()}
window.addEventListener("popstate",b);window.addEventListener("hashchange",b)});
so("popstate",function(){setTimeout(function(){uo=!1})});
setTimeout(function(){uo=!0;history.back()})}
function wo(){return to}
;function xo(a,b){window.dispatchEvent(new CustomEvent(a,{detail:b}))}
;function P(){xo("updateui")}
;function Q(){return window.location}
;function yo(a){Q().hash=a;P()}
;var R=!!w("MWEB_USE_SPRITE",void 0);function zo(a,b){H("svg",{viewBox$:"0 0 "+a+" "+a,preserveAspectRatio$:"xMidYMid meet"},b)}
function T(a,b){zo(a,function(){H("path",{d$:b})})}
function U(a){L({className:"sprite_button SPRITE_"+a})}
function Ao(){R?U("dislike"):T(24,"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z")}
function Bo(){R?U("like"):T(24,"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z")}
function Co(){R?U("logo"):zo(68,function(){H("path",{d$:"M66.5,7.7c-0.8-2.9-2.5-5.4-5.4-6.2C55.8,0.1,34,0,34,0S12.2,0.1,6.9,1.5C4,2.3,2.3,4.8,1.5,7.7C0.1,13,0,24,0,24s0.1,11,1.5,16.3c0.8,2.9,2.5,5.4,5.4,6.2C12.2,47.9,34,48,34,48s21.8-0.1,27.1-1.5c2.9-0.8,4.6-3.3,5.4-6.2C67.9,35,68,24,68,24S67.9,13,66.5,7.7z M27,34V14l18,10L27,34z",transform$:"translate(0, 10)"})})}
function Do(){R?U("more_vert"):T(24,"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z")}
function Eo(){R?U("open_in_new"):T(24,"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z")}
function Fo(){R?U("play_all"):T(24,"M8 5v14l11-7z")}
function Go(){R?U("privacy_private"):T(24,"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z")}
var Ho={ACCOUNT_BOX:function(){R?U("account_box"):T(24,"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z")},
ACCOUNT_CIRCLE:function(){R?U("account_circle"):T(24,"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z")},
ADD_TO_PLAYLIST:function(){R?U("add_to_playlist"):T(24,"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z")},
ACCOUNT_LINKED:function(){R?U("account_linked"):zo(24,function(){H("path",{d$:"M 17.919928,14.606013 C 16.93056,14.80302 16.03686,15.265429 15.316173,15.915895 L 18.004738,9.5 l 4,0 -4.08481,5.106013 z M 12.002369,8 7.5,8 l 2,-4 2.502369,0 2.502369,0 2,4 -4.502369,0 z M 5,4 8,4 6,8 2,8 5,4 z M 6,9.5 10.4,20 2,9.5 l 4,0 z m 1.5,0 4.5,0 L 12,21 7.5,9.5 z M 19.004738,4 l 3,4 -4,0 -2,-4 3,0 z m -2.5,5.5 -4.5,11.5 0,-11.5 4.5,0 z"});H("path",{d$:"m 19,24 c -2.209139,0 -4,-1.790861 -4,-4 0,-2.209139 1.790861,-4 4,-4 2.209139,0 4,1.790861 4,4 0,2.209139 -1.790861,4 -4,4 z m -0.249982,-3.911591 -1.251249,-1.213683 -1.044374,1.0767 2.313589,2.244128 2.981617,-2.992448 -1.062582,-1.058736 -1.937001,1.944039 z"})})},
ACCOUNT_SOME_LINKED:function(){R?U("account_some_linked"):T(24,"M17.919928,14.6060133 C16.9305602,14.80302 16.0368598,15.2654293 15.3161733,15.9158946 L18.0047384,9.5 L22.0047384,9.5 L17.919928,14.6060133 Z M12.0047384,8 L7.5,8 L9.5,4 L12.0047384,4 L14.5047384,4 L16.5047384,8 L12.0047384,8 Z M5,4 L8,4 L6,8 L2,8 L5,4 Z M6,9.5 L10.3999996,20 L2,9.5 L6,9.5 Z M7.5,9.5 L12,9.5 L12,21 L7.5,9.5 Z M19.0047384,4 L22.0047384,8 L18.0047384,8 L16.0047384,4 L19.0047384,4 Z M16.5047384,9.5 L12.0047384,21 L12.0047384,9.5 L16.5047384,9.5 Z M19,24 C16.790861,24 15,22.209139 15,20 C15,17.790861 16.790861,16 19,16 C21.209139,16 23,17.790861 23,20 C23,22.209139 21.209139,24 19,24 Z M17,19.25 L17,20.75 L21,20.75 L21,19.25 L17,19.25 Z")},
ACCOUNT_UNLINKED:function(){R?U("account_unlinked"):T(24,"M12.0023692,8 L7.5,8 L9.5,4 L12.0023692,4 L14.5047384,4 L16.5047384,8 L12.0023692,8 Z M5,4 L8,4 L6,8 L2,8 L5,4 Z M6,9.5 L10.3999996,20 L2,9.5 L6,9.5 Z M7.5,9.5 L12,9.5 L12,21 L7.5,9.5 Z M19.0047384,4 L22.0047384,8 L18.0047384,8 L16.0047384,4 L19.0047384,4 Z M18.0047384,9.5 L22.0047384,9.5 L13.6047388,20 L18.0047384,9.5 Z M16.5047384,9.5 L12.0047384,21 L12.0047384,9.5 L16.5047384,9.5 Z")},
ARROW_DROP_DOWN:function(){R?U("arrow_drop_down"):T(24,"M7 10l5 5 5-5z")},
ARROW_DROP_UP:function(){R?U("arrow_drop_up"):T(24,"M7 14l5-5 5 5z")},
AVATAR_CIRCLE_BLUE:function(){R?U("account_circle_blue"):zo(96,function(){H("circle",{fill$:"#C6DAFC",cx$:"48",cy$:"48",r$:"48"});H("path",{fill$:"#5E97F6",d$:"M48,23c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15c8.28,0,15-6.72,15-15C63,29.72,56.28,23,48,23z"});H("path",{fill$:"#5E97F6",d$:"M48,61c-10.33,0-31,5.17-31,15.5v8.13C25.36,91.72,36.18,96,48,96s22.64-4.28,31-11.37V76.5      C79,66.17,58.33,61,48,61z"})})},
ARROW_BACK:function(){R?U("arrow_back"):zo(24,function(){H("path",{d$:"M0 0h24v24H0z",fill$:"none"});H("path",{d$:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})},
CHECK:function(){R?U("check"):T(24,"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z")},
CHECK_BLUE:function(){R?U("check_blue"):zo(24,function(){H("path",{d$:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",fill$:"#1679C5"})})},
CHECK_CIRCLE_THICK:function(){R?U("check_circle_thick"):T(24,"M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10    S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z")},
CHEVRON_RIGHT:function(){R?U("chevron_right"):T(24,"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")},
CONSENT_SHIELD:function(){R?U("consent_shield"):zo(24,function(){H("path",{fill$:"#4285F4",d$:"M12 24c6.264-2.945 8.227-8.545 8.8-12.396.12-.813.2-2.085.2-2.604V3.75L12 0 3 3.75V9c0 .52.08 1.79.2 2.604.573 3.85 2.536 9.45 8.8 12.396z"});H("circle",{cx$:"12",cy$:"11",r$:"6",overflow$:"visible",fill$:"#3362B5"});H("path",{fill$:"#FFF",d$:"M17 16.063c-1.17 1.434-2.975 2.354-5 2.354s-3.83-.92-5-2.354v-.7c0-1.277 2.324-2.316 5-2.363 2.676.046 5 1.086 5 2.363v.7zm-5-4.313c1.242 0 2.25-1.006 2.25-2.25 0-1.242-1.008-2.25-2.25-2.25S9.75 8.258 9.75 9.5c0 1.244 1.008 2.25 2.25 2.25z"})})},
DELETE:function(){R?U("delete"):T(24,"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z")},
DESKTOP:function(){R?U("desktop"):T(24,"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z")},
DISLIKE:Ao,DISLIKE_COMMENT:function(){R?U("dislike_comment"):Ao()},
DISMISSAL:function(){R?U("dismissal"):T(24,"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")},
EDIT:function(){R?U("edit"):T(24,"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")},
EXIT_TO_APP:function(){R?U("expand_to_app"):T(24,"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z")},
EXPAND_LESS:function(){R?U("expand_less"):T(24,"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z")},
EXPAND_MORE:function(){R?U("expand_more"):T(24,"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z")},
EXTERNAL_LINK:Eo,FAB_UPLOAD:function(){R?U("fab_upload"):T(24,"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z")},
FEEDBACK:function(){R?U("feedback"):T(24,"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z")},
FLAG:function(){R?U("flag"):T(24,"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z")},
FULL_HEART:function(){R?U("full_heart"):T(24,"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z")},
HAPPY:function(){R?U("happy"):zo(24,function(){H("circle",{cx$:"15.5",cy$:"9.5",r$:"1.5"});H("circle",{cx$:"8.5",cy$:"9.5",r$:"1.5"});H("path",{d$:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"})})},
HELP:function(){R?U("help"):T(24,"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z")},
INCOGNITO_CIRCLE:function(){R?U("incognito_circle"):T(24,"M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zM9.38 5.51c.15-.39.57-.6.97-.46l1.62.54 1.61-.54c.39-.13.82.08.97.46l1.77 4.72h-8.7l1.76-4.72zm6.07 12.46c-1.42 0-2.56-1.09-2.69-2.48-.75-.48-1.36-.18-1.6-.02a2.696 2.696 0 0 1-2.69 2.49c-1.49 0-2.71-1.22-2.71-2.71s1.22-2.71 2.71-2.71c1.28 0 2.35.89 2.63 2.09.45-.19 1.05-.27 1.7.01a2.71 2.71 0 0 1 2.63-2.1c1.49 0 2.71 1.22 2.71 2.71a2.679 2.679 0 0 1-2.69 2.72zm3.49-6.19H5V11h13.94v.78z")},
INFO_OUTLINE:function(){R?U("info_outline"):T(48,"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z")},
KEEP:function(){R?U("keep"):T(24,"M16 5h.99L17 3H7v2h1v7l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2V5z")},
LIKE:Bo,LIKE_COMMENT:function(){R?U("like_comment"):Bo()},
LOGO:Co,MEH:function(){R?U("meh"):zo(24,function(){H("path",{d$:"M9 14h6v1.5H9z"});H("circle",{cx$:"15.5",cy$:"9.5",r$:"1.5"});H("circle",{cx$:"8.5",cy$:"9.5",r$:"1.5"});H("path",{d$:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})})},
MIX:function(){R?U("mix"):T(24,"M20.3 11.95c0 2.46-.95 4.7-2.47 6.32l1.07 1.13c1.8-1.92 2.9-4.55 2.9-7.45 0-2.9-1.12-5.54-2.9-7.45l-1.07 1.13c1.52 1.62 2.46 3.86 2.46 6.32zm-17 0c0-2.46.93-4.7 2.45-6.32L4.7 4.5c-1.8 1.9-2.9 4.54-2.9 7.45 0 2.9 1.1 5.53 2.9 7.45l1.05-1.13C4.23 16.64 3.3 14.4 3.3 11.95zm3 0c0-1.6.6-3.03 1.57-4.08L6.8 6.75c-1.24 1.34-2 3.17-2 5.2 0 2.03.76 3.86 2 5.2l1.07-1.12c-.97-1.06-1.58-2.5-1.58-4.08zm10.47-5.2L15.7 7.87c1 1.05 1.6 2.5 1.6 4.08 0 1.6-.6 3.02-1.6 4.08l1.07 1.12c1.25-1.34 2.02-3.17 2.02-5.2 0-2.03-.8-3.86-2.05-5.2zm-6.64 2.93l4.16 2.3-4.2 2.3v-4.6z")},
MONETIZATION_ON:function(){R?U("monetization_on"):T(24,"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z")},
MORE_CHEVRON:function(){R?U("more_chevron"):T(24,"M 18.006339,7.96 12.003622,13.962717 6.0009055,7.96 4,9.960906 12.003622,18 20.007244,9.960906 18.006339,7.96 l 0,0 z")},
MORE_HORIZ:function(){R?U("more_horiz"):T(24,"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z")},
MORE_VERT:Do,MORE_VERT_WHITE:function(){R?U("more_vert_white"):Do()},
OFFICIAL_ARTIST_BADGE:function(){R?U("music_note"):T(24,"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z")},
OFFLINE_CLOUD:function(){R?U("offline_cloud"):zo(24,function(){H("path",{d$:"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z",fill$:"#909090"})})},
OFFLINE_DOWNLOAD:function(){R?U("offline_download"):T(24,"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z")},
OPEN_IN_NEW:Eo,PERSON_ADD:function(){R?U("person_add"):T(24,"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z")},
PIVOT_LIBRARY:function(){R?U("pivot_library"):T(24,"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z")},
PLAYLISTS:function(){R?U("playlists"):T(24,"M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z")},
PLAYLIST_ADD:function(){R?U("playlist_add"):T(24,"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z")},
PLAYLIST_ADD_CHECK:function(){R?U("playlist_add_check"):T(24,"M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z")},
PLAY_ALL:Fo,PLAY_ARROW:Fo,PRIVACY_INFO:Go,PRIVACY_PRIVATE:Go,PRIVACY_PUBLIC:function(){R?U("privacy_public"):T(24,"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z")},
PRIVACY_UNLISTED:function(){R?U("privacy_unlisted"):T(24,"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z")},
PURCHASES:function(){R?U("purchases"):T(24,"M19.84 11.65l-7.5-7.5c-.3-.3-.7-.48-1.17-.48H5.33c-.9 0-1.66.75-1.66 1.66v5.84c0 .45.18.87.5 1.18l7.5 7.5c.3.3.7.48 1.16.48.46 0 .88-.18 1.18-.5L19.87 14c.3-.3.5-.7.5-1.16 0-.46-.2-.88-.5-1.18zM6.58 7.83c-.7 0-1.25-.55-1.25-1.25s.56-1.25 1.25-1.25c.7 0 1.25.56 1.25 1.25 0 .7-.55 1.25-1.25 1.25z")},
SAD:function(){R?U("sad"):zo(24,function(){H("circle",{cx$:"15.5",cy$:"9.5",r$:"1.5"});H("circle",{cx$:"8.5",cy$:"9.5",r$:"1.5"});H("path",{d$:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"})})},
SEARCH:function(){R?U("search"):T(24,"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z")},
SETTINGS:function(){R?U("settings"):T(20,"M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z")},
SHARE_ARROW:function(){R?U("share_arrow"):T(24,"M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z")},
SHIELD:function(){R?U("shield"):T(24,"M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z")},
SKIP_NEXT:function(){R?U("skip_next"):T(24,"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z")},
SKIP_PREVIOUS:function(){R?U("skip_previous"):T(24,"M6 6h2v12H6zm3.5 6l8.5 6V6z")},
SUBSCRIBE:function(){R?U("subscribe"):Co()},
SWITCH_ACCOUNTS:function(){R?U("switch_accounts"):T(24,"M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4    C22,2.9,21.1,2,20,2z M14,4c1.66,0,3,1.34,3,3s-1.34,3-3,3c-1.66,0-3-1.34-3-3S12.34,4,14,4z M20,16H8v-1.5c0-1.99,4-3,6-3    c2,0,6,1.01,6,3V16z")},
TAB_ACCOUNT:function(){R?U("tab_account"):T(24,"M12 10.8c2.6 0 4.7-2.2 4.7-5 0-2.6-2-4.8-4.7-4.8-2.6 0-4.7 2.2-4.7 5 0 2.6 2 4.8 4.7 4.8zm-10 8v3.7c0 .3.2.5.5.5h19c.3 0 .5-.2.5-.5V19c0-4-6.7-6-10-6S2 15 2 19z")},
TAB_HOME:function(){R?U("tab_home"):T(24,"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},
TAB_SUBSCRIPTIONS:function(){R?U("tab_subscriptions"):T(24,"M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z")},
TAB_TRENDING:function(){R?U("tab_trending"):w("MWEB_SHOW_PIVOT_BAR")?T(24,"M14.72,17.64c-0.32,0.28-0.83,0.56-1.23,0.69c-1.14,0.38-2.27-0.07-3.05-0.71c-0.11-0.09-0.07-0.26,0.06-0.31  c1.19-0.38,1.89-1.3,2.09-2.22c0.2-0.88-0.16-1.64-0.31-2.51c-0.12-0.72-0.11-1.34,0.12-2c0.04-0.11,0.2-0.13,0.25-0.02  c0.71,1.59,2.72,2.29,3.07,4.04c0.03,0.16,0.05,0.32,0.05,0.48C15.8,16.02,15.4,17.03,14.72,17.64 M17.55,9.62  c-0.75-0.7-1.63-1.2-2.36-1.93c-1.49-1.51-2-3.64-1.34-5.66c0.11-0.33-0.2-0.63-0.51-0.49c-0.71,0.31-1.39,0.76-1.98,1.24  C8.38,5.2,7.27,9.26,8.65,12.92c0.03,0.13,0.08,0.26,0.08,0.39c0,0.26-0.16,0.5-0.39,0.6c-0.26,0.12-0.54,0.04-0.74-0.15  c-0.06-0.06-0.12-0.12-0.17-0.19c-0.96-1.26-1.32-2.95-1.05-4.52c0.07-0.4-0.43-0.62-0.67-0.31c-1.21,1.57-1.81,3.67-1.69,5.65  c0.04,0.59,0.13,1.18,0.29,1.75c0.2,0.71,0.49,1.4,0.88,2.03c1.21,2.01,3.34,3.46,5.63,3.75c2.43,0.31,5.06-0.14,6.94-1.87  c2.09-1.93,2.85-5,1.73-7.68c-0.04-0.11-0.09-0.21-0.14-0.32c-0.25-0.52-0.55-1.01-0.91-1.45C18.17,10.24,17.87,9.92,17.55,9.62z"):
T(24,"M19.642 10.63c-.314-.395-.658-.767-1.026-1.11-.87-.808-1.884-1.375-2.724-2.22-1.72-1.73-2.3-4.183-1.546-6.496.123-.375-.23-.72-.584-.566-.822.36-1.606.873-2.285 1.425-3.43 2.79-4.704 7.446-3.115 11.645.038.144.09.3.09.45 0 .3-.182.57-.448.687-.3.133-.62.044-.856-.175-.072-.068-.137-.143-.197-.222-1.11-1.452-1.52-3.386-1.21-5.19.08-.456-.49-.713-.77-.35-1.4 1.802-2.09 4.21-1.95 6.48.04.68.158 1.355.34 2.008.23.82.57 1.607 1.01 2.33 1.4 2.31 3.854 3.977 6.49 4.31 2.805.355 5.836-.162 7.997-2.15 2.408-2.217 3.285-5.74 2-8.823-.052-.123-.106-.243-.163-.363-.285-.596-.64-1.154-1.045-1.67m-4.288 8.098c-.366.324-.95.645-1.415.797-1.32.435-2.62-.083-3.516-.814-.13-.1-.084-.3.073-.35 1.37-.44 2.173-1.49 2.41-2.542.23-1.015-.182-1.885-.354-2.878-.14-.827-.128-1.544.135-2.297.047-.13.226-.147.283-.02.82 1.825 3.136 2.63 3.534 4.64.037.18.058.367.063.55.034 1.06-.427 2.226-1.21 2.92")},
TUNE:function(){R?U("tune"):zo(24,function(){H("path",{d$:"M0 0h24v24H0z",fill$:"none"});H("path",{d$:"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"})})},
UPLOADS:function(){R?U("uploads"):T(24,"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z")},
VERY_HAPPY:function(){R?U("very_happy"):T(24,"M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z")},
VERY_SAD:function(){R?U("very_sad"):T(24,"M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z")},
WARNING:function(){R?U("warning"):T(24,"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z")},
WATCH_HISTORY:function(){R?U("watch_history"):T(24,"M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z")},
WATCH_LATER:function(){R?U("watch_later"):T(24,"M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z")},
UNLIMITED:Co,YOUTUBE:Co},Io={CHEVRON_RIGHT:!0,ARROW_BACK:!0};function V(a,b){var c=Ho[a];c&&H("c3-icon",b,function(d){d.setAttribute("flip-for-rtl",a in Io);c()})}
function Jo(a){wn({className:["icon-button",a.className].join(" "),"aria-label$":a.l,"aria-haspopup$":!!a.Uc,onclick:a.onclick},a.content?a.content:function(){return V(a.name)})}
function Ko(a,b,c){c=void 0===c?t:c;I({className:"icon-button",role$:"button","aria-label$":b,"aria-haspopup$":void 0,onclick:c},function(){V(a)})}
function Lo(){I({className:"icon-button"},function(){V("CHEVRON_RIGHT")})}
;function Mo(a,b,c,d,e,f,g,h,l){h=void 0===h?!1:h;eo({className:["button-renderer compact",void 0===l?"":l].join(" "),"data-style$":void 0===g?"":g,"data-icon-only$":!b,"is-busy$":!!h,"aria-busy$":!!h,disabled$:e},{l:c||"",Jc:d,disabled:!!e,onclick:f},function(){a&&V(a,{className:"button-renderer-icon"});I({className:"button-renderer-text"},function(){b&&O(b)});
h&&I({className:"button-with-icon-spinner spinner"})})}
;var No=0,Oo=null,Po=0;function Qo(a,b){[].concat(da(a.parentNode.children)).filter(function(c){return c!=a}).forEach(function(c){b?c.setAttribute("aria-hidden",!0):c.removeAttribute("aria-hidden")})}
function Ro(a){var b=So;[].concat(da(b.parentNode.children)).filter(function(c){return c!=b}).forEach(function(c){a?c.setAttribute("hidden",!0):c.removeAttribute("hidden")})}
function To(a){Po+=1;1==Po&&(No=(document.body||document.documentElement).scrollTop||window.pageYOffset||0,Oo=document.activeElement,Qo(a,!0),requestAnimationFrame(function(){document.body.setAttribute("modal-open-body","");document.body.style.top="-"+No+"px";window.scrollTo(0,-No)}))}
function Uo(a){--Po;0==Po&&(Qo(a,!1),requestAnimationFrame(function(){document.body.removeAttribute("modal-open-body");document.body.style.top="";window.scrollTo(0,No);Oo&&Oo.focus()}))}
;function Vo(a,b){H("c3-overlay",{onclick:b,ontouchmove:Je},function(){wn({className:"overlay-button","aria-label$":a})})}
;var Wo,Xo;function Yo(){to.then(function(){"#menu"==Q().hash&&vo()})}
function Zo(){Wo&&"#menu"!=Q().hash&&(window.removeEventListener("updateui",$o),Uo(Wo),document.body.removeChild(Wo),Xo=Wo=null)}
function $o(){Mg(Wo,function(){I({role$:"dialog","aria-modal$":!0,"aria-labelledby$":Xo.za,"aria-describedby$":Xo.za,className:"menu-content",onclick:Xo.xa?t:Yo},function(){Xo.content();Xo.xa||oo(null,function(){u(Xo.L)})});
Xo.na||Vo("close",Yo)})}
function ap(a){Xo=a;Wo=document.getElementById("menu");"#menu"!=Q().hash&&(yo("menu"),Wo=document.createElement("div"),Wo.id="menu",document.body.appendChild(Wo),To(Wo));Wo.className=a.na?"menu-container menu-full-width":"menu-container";a.className&&(Wo.className+=" "+a.className);$o();"scrollTo"in Wo&&Wo.scrollTo(0,0);(a.za?document.getElementById(a.za.toString()):Wo.querySelector("button")).focus();window.addEventListener("updateui",$o)}
function bp(a){var b=a.icon,c=a.label,d=a.content,e=a.L;H("ytm-menu",void 0,function(){return Jo({name:b,l:c,onclick:function(){return ap({content:d,L:e})},
Uc:!0})})}
function cp(a){var b=a.icon,c=a.label,d=a.content,e=a.l,f=a.L,g=a.style,h=a.Vd,l=a.Rd,n=a.ld;H("ytm-menu",void 0,function(){return Mo(b,c,e,!1,!1,function(){return ap({content:d,L:f,className:n})},g,h,l)})}
window.addEventListener("state-change",Zo);window.addEventListener("hashchange",Zo);function W(a){return function(b,c){for(var d=Array.isArray(b)?b:[b],e=0;e<d.length;e++){var f=void 0,g=d[e],h=c;for(f in g)(a[f]||t)(g[f],h)}}}
;function dp(){C(function(){return kaiOsLauncherApi.sendCloseKaiOsAppMessage()})}
;var ep=w("PAGE_BUILD_LABEL",void 0),fp=w("SBOX_JS_URL",void 0),gp=w("SBOX_SETTINGS"),hp=w("SHOW_OPEN_APP_BUTTON");var ip=document.getElementById("theme-meta"),jp=document.getElementById("app"),kp=document.getElementById("player");function lp(a){var b=document.createElement("A");Wc(b,a);return b}
function mp(a){if(!a)return"";a=lp(a).pathname;return lb(a,"/")?a:"/"+a}
;function np(a){var b=mp(a?a:Q().href);return"/"==b?3:lb(b,"/results")?1:op(a)?2:lb(b,"/user/")||lb(b,"/channel/")?4:lb(b,"/experiments")?5:lb(b,"/sponsor_channel")?6:0}
function pp(a){switch(np(a)){case 2:return"watch";case 1:return"search";default:return"browse"}}
function op(a){return lb(mp(a?a:Q().href),"/watch")}
;var qp=F.qc;function rp(){op()&&wn({className:"open-app-button",onclick:sp},function(){I({className:"open-app-button-inner"},function(){u(qp)})})}
function sp(){var a=Q(),b=Bc(oc(pc("http://m.youtube.com/watch")));var c={v:og(location.href,"v"),feature:"mweb_c3_open_app",itc_campaign:"mweb_c3_open_app",redirect_app_store_ios:"1",app:"desktop"};b=wc(b);b=Cc.exec(b);var d=b[3]||"";c=Bc(b[1]+Dc("?",b[2]||"",c)+Dc("#",d,void 0));c=Nc(wc(c));Zc(a,c)}
;function tp(){var a=Q().href;return og(a,"search_query")||og(a,"q")||""}
;function up(a,b,c,d){xo("navigate",{href:a,params:b,Ya:c,target:d})}
;var vp={CLEAR_HISTORY:z("CLEAR_HISTORY"),CONFIRM_CLEAR_HISTORY:z("CONFIRM_CLEAR_HISTORY"),SUGGESTION_DISMISS_LABEL:z("SUGGESTION_DISMISS_LABEL"),SUGGESTION_DISMISSED_LABEL:z("SUGGESTION_DISMISSED_LABEL")},wp=z("SEARCH_LABEL"),xp=z("SEARCH_CLEAR_LABEL"),yp=ro("ytm-searchbox",function(a,b){function c(){zh(fp,function(){(0,window.ytsboxinstall)(a.querySelector("form"),h,a.querySelector('input[type="submit"]'),gp,vp,e,a.querySelector(".searchbox-dropdown"))})}
function d(q){l=q.target.value;b()}
function e(q,v){l=h.value;if(!l.trim())return!1;var A={};v&&(A.oq=v.oq,A.gs_l=v.gs_l);var D="/results?search_query="+encodeURIComponent(l).replace(/%20/g,"+");up(D,A);h.blur();return!1}
function f(q){q.preventDefault();h.focus();l="";b()}
var g=!1,h=null,l="",n="";return{da:function(){var q=Q();q=q.pathname+q.search;n!=q&&(n=q,l=tp())},
R:function(){xn({action:"/results",className:"searchbox-form cbox",onsubmit:e},function(){I({className:"searchbox-input-wrapper"},function(){Dn({className:"searchbox-input title",name:pc("search"),placeholder:wp,autocomplete:"off",autocorrect$:"off",spellcheck:"false",oninput:d},function(q){h=q;h.value!=l&&(h.value=l)})});
Dn({type:"submit",hidden:!0});l&&Ko("DISMISSAL",xp,f);Ko("SEARCH",wp,e)});
I({className:"searchbox-dropdown"},function(){Fg=Gg.lastChild})},
tb:function(q,v){var A=document.activeElement==h;v.Da&&!A?h.focus():!v.Da&&A&&h.blur();!g&&v.Da&&(g=!0,c())}}});function zp(){return mg("/signin","next",location.pathname+location.search)}
function Ap(){return!!w("ID_TOKEN")}
;var Bp,Cp="out",Dp=[],Ep;function Fp(a){a&&H("c3-toast",{dir$:Cp,role$:"in"==Cp?"alert":""},a)}
function Gp(a){var b=Bp;b&&Mg(b,Fp,a)}
function Hp(){Dp.shift();0<Dp.length?Ip():Gp(null)}
function Jp(){Cp="out";Gp(Dp[0].content);setTimeout(Hp,195)}
function Ip(){Cp="in";var a=Dp[0],b=a.durationMs;Gp(a.content);Ep=setTimeout(Jp,225+b)}
function Kp(a,b,c){b=void 0===b?2E3:b;c=void 0===c?!1:c;Bp||(Bp=document.createElement("div"),Bp.id="toasts",document.body.appendChild(Bp),Gp(null));b=b||2E3;c&&0<Dp.length?(clearTimeout(Ep),Im(function(){Dp[0]={content:a,durationMs:b};Ip()})):(Dp.push({content:a,
durationMs:b}),1==Dp.length&&Im(Ip))}
;var Lp=F.Xb,Mp=F.Zb;function Np(a){a=document.getElementById(a.toString());a.focus();a.setSelectionRange(0,a.value.length);try{var b=document.execCommand("copy")}catch(c){}Kp(function(){b?u(Lp):u(Mp)})}
;function Op(a){return new Me(function(b){Im(function(){return b(a)})})}
function Pp(a){a=a.map(Qp);return Ve(a).then(Op)}
function Qp(a){return a.complete?Re("load"):new Me(function(b){function c(d){a.removeEventListener("load",c);a.removeEventListener("error",c);b(d.type)}
a.addEventListener("load",c);a.addEventListener("error",c)})}
;var Rp,Sp;function Tp(){vo();Sp.rb&&Sp.rb()}
function Up(){window.removeEventListener("updateui",Vp);Rp&&Uo(Rp);document.body.removeChild(Rp);Sp=Rp=null}
function Wp(){Rp&&"#dialog"!=Q().hash&&Up()}
function Xp(a){(a=hd(a.target,"button"))&&!a.disabled&&Tp()}
function Vp(){var a=nn(pc("dialog-header")),b=nn(pc("dialog-body"));Mg(Rp,function(){H("c3-dialog",{role$:"dialog","aria-labelledby$":Sp.header?a:b,"aria-describedby$":Sp.header&&b,"aria-modal$":!0,className:"dialog"},function(c){Sp.header&&I({id:a,className:"dialog-header"},function(){Sp.header()});
I({id:b,className:"dialog-body user-text"},function(){Sp.content()});
I({className:"dialog-buttons",onclick:Sp.Mb?null:Xp},function(){Sp.buttons()});
var d=Sp.data;Im(function(){Yn(c,d)})});
Vo("close",Yp)})}
function Zp(a){"#menu"==Q().hash&&Yo();Op().then(wo).then(function(){yo("dialog");Rp&&Up();Sp=a;Rp=document.createElement("div");Rp.className="dialog-container";document.body.appendChild(Rp);To(Rp);window.addEventListener("updateui",Vp);Vp();Sp.Va&&Sp.Va()})}
function Yp(){Sp.Ta&&Sp.Ta();Tp()}
window.addEventListener("state-change",Wp);window.addEventListener("hashchange",Wp);var $p=F.gb,aq=F.hb,bq=F.ib;function cq(){var a=E(function(){return Mm.response.response.responseContext});
return(a=a&&a.webResponseContextExtensionData)&&a.webResponseContextDebugData&&a.webResponseContextDebugData.debugMenus||[]}
function dq(a,b){var c=nn(pc("debug-menu-item-textarea"));Zp({header:function(){J(null,function(){return u(a)})},
buttons:function(){eo({className:"compact",onclick:function(){return Np(c)}},null,function(){return u(aq)});
eo({className:"compact"},null,function(){return u($p)})},
content:function(){In({className:"debug-menu-textarea",id:c},function(){return u(b)})}})}
function eq(){Zp({header:function(){J({className:"debug-menu-header"},function(){return u(bq)})},
buttons:function(){eo({className:"compact"},null,function(){return u($p)})},
content:function(){cq().forEach(function(a){a.title&&a.content&&oo({className:"debug-menu-item",onclick:function(){return dq(a.title,a.content)}},function(){return u(a.title)})})}})}
;function fq(){var a={productId:"77522",locale:w("HTML_LANG","en"),allowNonLoggedInFeedback:!0,bucket:"C3"},b={experiments:gq(),logged_in:Ap(),Device:Ab};yo("");Zg(a,b)}
function gq(){return E(function(){return Mm.response.response.responseContext.serviceTrackingParams.filter(function(a){return"GFEEDBACK"===a.service})[0].params.filter(function(a){return"e"===a.key})[0].value})}
;function hq(a,b,c){var d={className:"select"};b&&b.id&&(d.id=b.id);H("ytm-select",a,function(){Hn(d,c);V("ARROW_DROP_DOWN",{className:"select-icon"})})}
;function iq(){return window.getPlayer()}
;var jq=F.gb,kq=F.hb,lq=F.Yb,mq=F.jb,nq=F.sc,oq=F.tc,pq=F.uc,qq=F.wc,rq=F.Fc;function sq(){var a=E(function(){return iq().getDebugText(!0)});
if(a){var b=nn(pc("copy-debug-info-textarea"));Zp({header:function(){J(null,function(){return u(lq)})},
buttons:function(){eo({className:"compact",onclick:function(){return Np(b)}},null,function(){return u(kq)});
eo({className:"compact"},null,function(){return u(jq)})},
content:function(){In({className:"player-debug-info",id:b},function(){return u(a)})}})}}
function tq(){var a=iq();a&&(a.isVideoInfoVisible()?a.hideVideoInfo():a.showVideoInfo())}
function uq(a){return(a=Jk[a])?a+"p":oq}
function vq(a){if(!(1>a.length)){var b=E(function(){return iq().getPlaybackQuality()}),c=E(function(){return iq().getPreferredQuality()}),d=nn(pc("player-quality-dropdown"));
En({className:"player-quality-label",htmlFor:d.toString()},function(){u(nq)});
hq({className:"player-quality-settings",onchange:function(e){return E(function(){return iq().setPlaybackQualityRange(e.target.value,e.target.value)})}},{id:d},function(){a.forEach(function(e){Fn({className:"option",
selected:e==c,value$:e},function(){var f=uq(e);"auto"==e&&"auto"==c&&(f+=" ("+uq(b)+")");u(f)})})})}}
function wq(a){if(y("mweb_enable_speed_options")&&!(2>a.length)){var b=E(function(){return iq().getPlaybackRate()}),c=nn(pc("player-speed-dropdown"));
En({htmlFor:c.toString()},function(){u(pq)});
hq({className:"player-speed-settings",onchange:function(d){return E(function(){return iq().setPlaybackRate(Number(d.target.value))})}},{id:c},function(){a.forEach(function(d){Fn({className:"option",
selected:d==b,value$:d},function(){u("1"==d?qq:d.toLocaleString())})})})}}
function xq(){Zp({header:function(){J({className:"player-settings-header"},function(){return u(mq)})},
buttons:function(){eo({className:"compact"},null,function(){return u(jq)})},
content:function(){var a=E(function(){return iq().getAvailableQualityLevels()})||[];
vq(a);a=E(function(){return iq().getAvailablePlaybackRates()})||[];
wq(a);oo({onclick:sq},function(){return u(lq)});
oo({onclick:tq},function(){return u(rq)})}})}
;var yq=F.ib,zq=F.kc,Aq=F.jb,Bq=F.lc,Cq=F.fc,Dq=F.gc,Eq=F.dc,Fq=F.hc,Gq=F.ic,Hq=F.jc,Iq=F.ec,Jq=F.mc;function Kq(){switch(Q().pathname){case "/feed/trending":return"yt_trending_web";case "/feed/subscriptions":return"yt_subscriptions_mweb";case "/feed/account":return"yt_account_mweb";case "/":return"yt_home_mweb";default:return"yt_mobile_mweb"}}
function Lq(a,b,c,d,e){return b?{text:a,href:c,onclick:d,iconType:e}:null}
function Mq(){var a=0<cq().length,b=op()&&!w("MWEB_BLAZERPLAYER",void 0);return[Lq(zq,!0,"/select_site",null,"SETTINGS"),Lq(Aq,b,null,function(c){c.stopPropagation();xq()},"INFO_OUTLINE"),
Lq(Bq,!0,"/terms",null,"PRIVACY_INFO"),Lq(Jq,y("mweb_show_your_data_in_yt_link"),"//myaccount.google.com/yourdata/youtube",null,"SHIELD"),Lq(Cq,!0,null,fq,"FEEDBACK"),Lq(Dq,!0,lg("//support.google.com/youtube/",{src:"web",p:Kq(),hl:w("HTML_LANG","en")}),null,"HELP"),Lq(Eq,!0,lg("//www.youtube.com"+Q().pathname+Q().search,{app:"desktop",persist_app:"1"}),null,"DESKTOP"),Lq(Fq,!!w("SHOW_IMPRESSUM"),"https://www.youtube.com/t/impressum?hl=de&gl=DE",null,"OPEN_IN_NEW"),Lq(Gq,!!w("SHOW_NETZDG_TRANSPARENZBERICHT"),
"https://transparencyreport.google.com/netzdg/youtube",null,"OPEN_IN_NEW"),Lq(Hq,!!w("SHOW_NETZDG_LOGGED_OUT_REPORT_FORM_LINK"),"https://support.google.com/youtube/contact/netzdg",null,"OPEN_IN_NEW"),Lq(Iq,!1,null,dp,"EXIT_TO_APP"),Lq(yq,a,null,function(c){c.stopPropagation();eq()},"INFO_OUTLINE")].filter(function(c){return c})}
;function Nq(a,b){Im(function(){return Wc(a,b)})}
function Oq(a,b,c){c=void 0===c?t:c;vn(b,function(d){Km(d,"_href",a,function(){return Nq(d,a)});
c()})}
;var Pq=F.Ec,Qq=F.kb;function Rq(a,b){Oq(a,null,function(){oo(null,function(){return u(b)})})}
function Sq(){H("ytm-top-menu",null,function(){bp({icon:"MORE_VERT_WHITE",label:Pq,content:function(){Ap()||Rq(zp(),Qq);Mq().forEach(function(a){a.href?Rq(a.href,a.text):a.onclick&&oo({onclick:a.onclick},function(){return u(a.text)})})},
L:F.N})})}
;function Tq(a,b){return a.reduceRight(function(c,d){return c||b(d)},null)}
function Uq(a){for(var b in a)return a[b];return{}}
function Vq(a,b){if(b(a))return[a];if(null==a||"object"!=typeof a)return null;var c=[],d=0,e;for(e in a)c[d++]=a[e];c=ca(c);for(d=c.next();!d.done;d=c.next())if(d=d.value)if(d=Vq(d,b))return[a].concat(da(d));return null}
function Wq(a,b){return Vq(a,function(c){return c==b})}
function Xq(a,b,c){return Vq(a,function(d){return d[b]==c})}
function X(a,b,c){a=Wq(a,b)||[];return Tq(a,c)}
function Yq(a,b,c){a=Xq(a,b,c)||[];return a[a.length-1]}
function Zq(a,b){var c=Vq(a,function(d){return d[b]})||[{}];
return c[c.length-1][b]}
;function $q(a){return a?a.simpleText?a.simpleText:a.runs.map(function(b){return b.text}).join(""):""}
function ar(a){return{runs:[{text:a}]}}
;function br(a,b){if("search"==a)return tp()||"YouTube";if("watch"==a&&b){var c=Zq(b,"slimVideoMetadataRenderer");if(c&&c.title)return $q(c.title)}if("select_site"==a)return $q(b.title)||"YouTube";c=b&&b.header;if(!c)return"YouTube";var d=c.feedTabbedHeaderRenderer;return d&&d.title?$q(d.title):(d=c.c4TabbedHeaderRenderer)&&d.title?d.title:(c=c.playlistHeaderRenderer)&&c.title?$q(c.title):"YouTube"}
;function cr(a){return{commandMetadata:{webCommandMetadata:{url:a}}}}
;var dr=F.fb,er=F.eb,fr=F.Ia,gr=F.mb;function hr(){yo("searching")}
function ir(a){Im(function(){ip.content=getComputedStyle(a).backgroundColor})}
function jr(a,b){var c="#searching"==Q().hash,d=c?"searching":a,e="searching"===d||"select_site"===d,f="select_site"!==d,g=c?Je:null,h=mn(),l=br(a,b)||"";H("ytm-header-bar",w("MWEB_STICKY_PLAYER",!1)?{className:"sticky-player",id:h}:{id:h},function(){c&&Vo(er,vo);Bn({className:"header-bar cbox",key:"header","data-mode$":d,ontouchmove:g},function(n){document.title=l+("YouTube"==l?"":" - YouTube");l="watch"==a?"YouTube":l;Km(n,"mode",d,function(){return ir(n)});
e?Jo({name:"ARROW_BACK",l:c?er:dr,onclick:vo}):N(cr("/"),{className:"header-bar-endpoint cbox","aria-label$":fr,id$:"home-icon"},function(){V("LOGO",{className:"header-bar-logo"})});
yp({Da:c},{className:"header-bar-content search-mode"});I({className:"header-bar-content non-search-mode cbox"},function(){yn({className:"title","aria-label$":l},function(){u(l)});
f&&I({className:"header-bar-buttons cbox"},function(){hp&&rp();Jo({name:"SEARCH",l:gr,onclick:hr});Sq()})})})})}
;var kr={landscape:"(min-width: 800px) and (min-device-width: 550px) and (orientation: landscape)",portrait:"(min-width: 550px) and (min-device-height: 800px) and (orientation: portrait)"},lr=void 0,mr=void 0,nr=window.innerWidth,or=window.innerHeight;function pr(){if(!za(lr)){var a="matchMedia"in window?window.matchMedia(kr.landscape+","+kr.portrait).matches:void 0;lr=za(a)?a:800<=nr&&550<=or||550<=nr&&800<=or}return lr}
function qr(){za(mr)||(mr=window.matchMedia&&window.matchMedia("(orientation: landscape)").matches);return mr}
window.addEventListener("resize",function(){lr=void 0});var rr="IntersectionObserver"in window,sr=!pr()&&!w("MWEB_BLAZERPLAYER",!1),ur=rr?new IntersectionObserver(function(a,b){a.filter(function(c){return c.intersectionRect.height}).forEach(function(c){c=c.target;
tr(c);b.unobserve(c)})},{rootMargin:"10%",
threshold:.01}):sr?new Jn(.1,function(a){Im(function(){return tr(a)})}):{observe:function(a){Im(function(){return tr(a)})}};
function tr(a){var b=a.B(a.lazyData,a);Xc(a,b)}
function vr(a,b){wr(a,jc,b)}
function wr(a,b,c){Cn(c,function(d){Km(d,"lazyData",a||Jm,function(){d.removeAttribute("src");a&&(d.B=b,ur.observe(d))})})}
;var xr=m.devicePixelRatio||2;function yr(a,b,c){b=c||b.getBoundingClientRect().width*xr;a=a.thumbnails;c=0;for(var d=Number.MAX_SAFE_INTEGER,e=0,f=-Number.MAX_SAFE_INTEGER,g=0;g<a.length;g++){var h=a[g].width-b;0<=h&&h<=d?(c=g,d=h):0>h&&h>f&&(e=g,f=h)}var l=[];a.forEach(function(n){l.push(n.url)});
return 100>d||d<-f?a[c].url:a[e].url}
function zr(a,b){var c=C(function(){return a.thumbnails[0].url});
b&&a&&(c=yr(a,b));return c?Hc(Mc(c)):null}
function Y(a,b,c){b=b?b:{};wr(a,function(d,e){return d?yr(d,e,c):""},b)}
;function Ar(a){return"THEME_ATTRIBUTE_TEXT_DISABLED"===a.foregroundTitleColor||"THEME_ATTRIBUTE_ICON_DISABLED"===a.foregroundIconColor}
;function Z(a,b){if(a){var c=C(function(){return b.md}),d=C(function(){return a.icon.iconType}),e=a.text,f=co(a.accessibilityData||a.accessibility),g=!!a.isDisabled,h=a.style,l=a._isBusy,n=[];
b&&b.className&&n.push(b.className);a.themedBasicColorPalette&&Ar(a.themedBasicColorPalette)&&n.push("disabled");Mo(d,e,f,null,g,function(){if(!a._isBusy){c&&c();var q=a.serviceEndpoint||a.navigationEndpoint||a.command;q&&G(q,a,!a.navigationEndpoint)}},h,l,n.join(" "))}}
;function Br(a){var b=C(function(){return a.toggledIcon.iconType}),c=C(function(){return a.defaultIcon.iconType});
return a.isToggled&&b||c}
function Cr(a,b){if(a){var c=Br(a);Mo(c,a.isToggled&&a.toggledText||a.defaultText,co(a.accessibilityData),!!a.isToggled,!!a.isDisabled,function(){if(a){var d=a.isToggled?a.toggledServiceEndpoint:a.defaultServiceEndpoint,e=a.defaultNavigationEndpoint;d?G(d,a,!0):e&&G(e,{},!1)}},a.style,a._isBusy,b&&b.className?b.className:"")}}
;var Dr=z("PLAY_ALL"),Er=W({buttonRenderer:Z,toggleButtonRenderer:Cr,heroPlaylistThumbnailRenderer:function(a,b){M(a,"ytm-hero-playlist-thumbnail-renderer",b,function(){I({style:{"padding-bottom":100*a.maxRatio+"%"}},function(){Y(a.thumbnail,{className:"cover",alt:""})})})}});
function Fr(a){I(null,function(){J(null,function(){O(a.title)});
N(a.ownerEndpoint,{className:"playlist-channel-link"},function(){O(a.ownerText,{H:!0})});
K({className:"subhead small-text"},function(){O(a.descriptionText)})})}
function Gr(a){I({className:"playlist-header-stats"},function(){L({className:"text-info"},function(){O(a.numVideosText)});
L({className:"text-info"},function(){O(a.viewCountText)});
L({className:"text-info"},function(){O(a.totalLength)})})}
function Hr(a){I({className:"playlist-header-actions cbox"},function(){Er(a.saveButton);Er(a.shareButton);Er(a.deleteButton);Er(a.editButton)})}
;function Ir(a){H("ytm-channel-link",null,function(){a.icon&&Y(a.icon,{className:"channel-link-icon",alt:""});N(a.navigationEndpoint,{className:"channel-link-link"},function(){a.title?O(a.title):u(E(function(){return a.navigationEndpoint.urlEndpoint.url})||"")})})}
;function Jr(a){a.subscribed||I({className:"subscribe-button-count secondary-text"},function(){O(a.subscriberCountText)})}
function Kr(a,b){function c(){a.subscribed&&a.onUnsubscribeEndpoints&&a.onUnsubscribeEndpoints.length?jn(a.onUnsubscribeEndpoints,a):!a.subscribed&&a.onSubscribeEndpoints&&a.onSubscribeEndpoints.length?jn(a.onSubscribeEndpoints,a):G(a.serviceEndpoints[a.subscribed?1:0],a,!0)}
var d=a.subscribedButtonText,e=a.unsubscribedButtonText,f=a.subscribed,g=a.enabled,h=a.theme,l=f?d:e;d=!!h&&(f?!!h.subscribedColorPalette&&Ar(h.subscribedColorPalette):!!h.unsubscribedColorPalette&&Ar(h.unsubscribedColorPalette));var n=f||d?"STYLE_TEXT":"STYLE_BRAND",q=d?"disabled":"",v=!!f,A=h&&h.suppressIcon?null:"LOGO";M(a,"ytm-subscribe-button-renderer",b,function(){I({className:"cbox"},function(){Mo(A,l,null,v,!g,c,n,!1,q);Jr(a)})})}
;function Lr(a,b){var c=E(function(){return a.thumbnails[0].url});
H("ytm-profile-icon",b,function(){c&&vr(c,{className:"profile-icon-img",alt:""})})}
;var Mr=W({buttonRenderer:Z,channelHeaderLinksRenderer:function(a,b){M(a,"ytm-channel-header-links-renderer",b,function(){a.primaryLinks.forEach(function(c){return Ir(c)})})},
subscribeButtonRenderer:Kr});function Nr(a){var b=C(function(){return a.banner.thumbnails[0].url});
if(b){var c=co(a.banner.accessibility)||"",d=C(function(){return a.bannerLinkEndpoint}),e={alt:c,
className:"c4-tabbed-header-banner-img"};I({className:"c4-tabbed-header-banner"},function(){d?N(d,{},function(){vr(b,e)}):vr(b,e)})}}
function Or(a){I({className:"c4-tabbed-header-details"},function(){yn({className:"c4-tabbed-header-title"},function(){u(a.title||"")});
I({className:"c4-tabbed-header-subscibe cbox"},function(){Mr(a.subscribeButton);L({className:"c4-tabbed-header-subscriber-count secondary-text"},function(){O(a.subscriberCountText)})});
Mr(a.headerLinks)})}
function Pr(a,b){M(a,"ytm-c4-tabbed-header-renderer",b,function(){Nr(a);I({className:"c4-tabbed-header-channel cbox"},function(){Lr(a.avatar,{className:"c4-tabbed-header-profile-icon"});Or(a)})})}
;var Qr=W({subscribeButtonRenderer:Kr});function Rr(a,b){H("ytm-badge",a,b)}
;function Sr(a,b){a&&M(a,"ytm-metadata-badge-renderer",b,function(){Rr({className:"metadata-badge soft-background","data-type$":a.style},function(){V(C(function(){return a.icon.iconType}));
u(a.label||"")})})}
;function Tr(a){M(a,"ytm-scrollable-tab-header",null,function(){var b=null;I({className:"scrollable-tab-header-container"},function(){a.tabs.forEach(function(d,e){var f=d.tabRenderer;f&&I({className:"scrollable-tab","aria-label$":f.title,role$:"tab",onclick:function(){var g=a.tabs[e].tabRenderer.endpoint;g&&G(g,a,!0)},
"aria-selected$":f.selected},function(g){f.selected&&(b=g);f.title&&u(f.title)})});
if(b){var c=b.offsetLeft;b.parentElement.scrollLeft=0<c?c-40:0}})})}
;var Ur=W({metadataBadgeRenderer:Sr,subscribeButtonRenderer:Kr});
function Vr(a){a.banner&&I({className:"interactive-tabbed-header-banner",alt:co(a.banner.accessibility)||""},function(b){rd(b,'url("'+zr(a.banner,b)+'")');H("svg",{class$:"interactive-tabbed-header-banner-overlay",viewBox$:"0 0 2900 304",preserveAspectRatio$:"xMidYMid slice"},function(){H("path",{d$:"M 0,304 V 0 H 963 L 1439,304 Z",opacity$:"0.5"});H("path",{d$:"M 0,0 l 0,304 580,0 L 1055,0 0,0 Z",opacity$:"0.5"});H("path",{d$:"M 0,304 V 0 H 780 L 1247,304 Z",opacity$:"0.9"})})})}
function Wr(a){I({className:"interactive-tabbed-header-description"},function(){a.boxArt&&I({className:"interactive-tabbed-header-boxart",alt:co(a.boxArt.accessibility)||""},function(b){rd(b,'url("'+zr(a.boxArt,b)+'")')});
I({className:"interactive-tabbed-header-summary"},function(){I({className:"interactive-tabbed-header-summary-top"},function(){yn({className:"interactive-tabbed-header-title"},function(){O(a.title)});
a.autoGenerated&&I({className:"interactive-tabbed-header-autogenerated"},function(){O(a.autoGenerated)});
a.badges&&I({className:"interactive-tabbed-header-badges"},function(){Ur(a.badges)})});
I({className:"interactive-tabbed-header-buttons"},function(){Ur(a.buttons)})})})}
;var Xr=W({headerFabRenderer:function(a){M(a,"ytm-header-fab-renderer",{className:"center"},function(){N(a.navigationEndpoint,{"aria-label$":co(a.accessibility),className:"fab-icon-link"},function(){V(a.icon.iconType)})})}});
function Yr(a){var b=C(function(){return a.unlimitedStatus});
b&&I({className:"unlimited-status small-text"},function(){b.forEach(function(c){O(c)})})}
function Zr(a){M(a,"ytm-active-account-header-renderer",null,function(){I({className:"active-account-header-channel-art cover"},function(){Y(a.channelArt,{className:"cover",alt:""})});
N(a.channelEndpoint,{className:"active-account-photo-container","aria-label$":$q(a.accountName)},function(){Lr(a.accountPhoto,{className:"active-acount-icon"})});
I({className:"active-account-name image-overlay-text cbox","aria-label$":F.Vb,onclick:function(){return G(a.serviceEndpoint,a,!0)},
role$:"button"},function(){O(a.accountName);V("EXPAND_MORE",{className:"image-overlay-icon"})});
Yr(a);Xr(a.fab)})}
;var $r=W({buttonRenderer:Z});var as=W({channelListSubMenuAvatarRenderer:function(a,b){M(a,"ytm-channel-list-sub-menu-avatar-renderer",b,function(c){if(a.status){a:switch(a.status){case "CHANNEL_STATUS_UNREAD":var d="unread";break a;case "CHANNEL_STATUS_LIVE":d="live";break a;default:d=""}c.setAttribute("status",d)}N(a.navigationEndpoint,{"aria-label$":co(a.accessibility)},function(){b&&"LARGE_WITH_TEXT"===b.size?(a.thumbnail&&Lr(a.thumbnail,{className:"channel-list-sub-menu-avatar-large-icon"}),a.title&&An({className:"channel-list-sub-menu-avatar-title subhead small-text"},
function(){return O(a.title)})):a.thumbnail&&Lr(a.thumbnail,{className:"channel-list-sub-menu-avatar-profile-icon"})})})}});function bs(a){if(a){var b=-1;a.forEach(function(c,d){c.selected&&(b=d)});
hq({onchange:function(c){c=c.target;c.selectedIndex!=b&&G(c.options[c.selectedIndex].endpoint,{},!1)}},null,function(){a.forEach(function(c){Fn({className:"option",
endpoint:c.endpoint,selected:c.selected},function(){u(c.title)})})})}}
;var cs=W({metadataBadgeRenderer:Sr,standaloneYpcBadgeRenderer:function(a,b){M(a,"ytm-standalone-ypc-badge-renderer",b,function(){Rr({className:"standalone-ypc-badge","data-type$":C(function(){return a.style.badgeStyle})},function(){O(a.badgeText)})})}});
function ds(a,b){a&&H("ytm-badge-supported-renderer",b,function(){cs(a)})}
;var es=W({buttonRenderer:Z,menuServiceItemRenderer:function(a,b){M(a,"ytm-menu-service-item-renderer",b,function(){oo({onclick:function(){var c=a.serviceEndpoint;c&&G(c,a,!0)}},function(){O(a.text,{H:!0})})})},
toggleButtonRenderer:Cr,toggleMenuServiceItemRenderer:function(a,b){M(a,"ytm-toggle-menu-service-item-renderer",b,function(){oo({onclick:function(){var c=a.isToggled?a.toggledServiceEndpoint:a.defaultServiceEndpoint;c&&G(c,a,!0)}},function(){O(a.isToggled?a.toggledText:a.defaultText)})})},
menuNavigationItemRenderer:function(a){M(a,"ytm-menu-navigation-item-renderer",null,function(){oo({onclick:function(b){return po(b,a)}},function(){O(a.text)})})}});
function fs(a){a.items&&a.items.length&&bp({icon:"MORE_VERT",label:co(a.accessibility)||"",content:function(){es(a.items)},
L:F.N})}
function gs(a,b){a&&M(a,"ytm-menu-renderer",b,function(){es(a.topLevelButtons);fs(a)})}
function hs(a){ap({content:function(){es(a.items)},
L:F.N})}
;function is(a,b,c){I({className:"cover video-thumbnail-img video-thumbnail-bg"});Y(a,{alt:"",className:"cover video-thumbnail-img"},c);b&&b()}
function js(a,b){var c="video-thumbnail-container-large center";y("mweb_full_bleed_thumbnails")&&(c+=" video-thumbnail-full-bleed");I({className:c},function(){is(a,b)})}
function ks(a,b,c,d){var e="video-thumbnail-container-compact center";d&&(e+=" "+d);I({className:e},function(){is(a,b,c)})}
;var ls=W({menuRenderer:gs});function ms(a){var b=a.thumbnail,c=a.navigationEndpoint,d=a.headline,e=void 0===a.F?[]:a.F,f=void 0===a.Xa?[]:a.Xa,g=a.Ea,h=a.ha,l=a.overlay,n=a.l,q=a.menu,v=a.bb,A=void 0===a.extraContent?t:a.extraContent;I({className:"compact-media-item"},function(){N(c,{className:"compact-media-item-image","aria-hidden$":!l},function(){ks(b,l,v)});
I({className:"compact-media-item-metadata","data-has-badges$":!(!h&&!g)},function(){N(c,{className:"compact-media-item-metadata-content","aria-label$":n,role$:"text"},function(){ds(g);ns(d);os(!!n,e,f);ds(h);A()});
ls(q,{className:"compact-media-item-menu"})})})}
function ns(a){var b="compact-media-item-headline";!a&&y("mweb_ghost_card_placeholder_data")&&(b+="-placeholder");An({className:b},function(){O(a)})}
function os(a,b,c){var d=b.filter(function(f){return f}),e=c.filter(function(f){return f});
b="subhead";d.length||e.length||!y("mweb_ghost_card_placeholder_data")||(b="compact-media-item-subhead-placeholder");I({className:b,"aria-hidden$":a},function(){d.forEach(function(f){I({className:"compact-media-item-byline small-text"},function(){O(f,{H:!0})})});
e.forEach(function(f){I({className:"compact-media-item-stats small-text"},function(){O(f,{H:!0})})})})}
;function ps(a,b){M(a,"ytm-thumbnail-overlay-resume-playback-renderer",b,function(){I({className:"thumbnail-overlay-resume-playback-progress",style$:"width: "+a.percentDurationWatched+"%;"})})}
;function qs(a,b){M(a,"ytm-thumbnail-overlay-time-status-renderer",b,function(c){c.setAttribute("data-style",a.style);O(a.text)})}
;function rs(a){I({className:"video-thumbnail-overlay-side center vbox"},a)}
function ss(a){I({className:"video-thumbnail-overlay-bottom"},a)}
function ts(a){I({className:"video-thumbnail-overlay-bottom-group"},a)}
;var us=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs});var vs=z("SHOW_MORE");function ws(a){a=a.currentTarget;a.hasAttribute("loading")||(a.setAttribute("loading",""),a.dispatchEvent(new CustomEvent("ytm-load-more",{bubbles:!0,detail:a})))}
function xs(a,b,c){var d=b.nextContinuationData;d&&H("c3-next-continuation",{onclick:ws,container:a,nextContinuationData:d,sb:c},function(e){Km(e,"data",d,function(){e.removeAttribute("loading")});
eo({className:"nextcontinuation-button"},null,function(){d.label?O(d.label):u(vs)});
I({className:"spinner nextcontinuation-spinner"})})}
;var ys=W({playlistVideoRenderer:function(a,b){M(a,"ytm-playlist-video-renderer",b,function(){var c=[a.shortBylineText];a.upcomingEventData&&a.upcomingEventData.upcomingEventText&&c.push(a.upcomingEventData.upcomingEventText);ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
lengthText:a.lengthText,headline:E(function(){return a.title}),
F:c,ha:a.badges,overlay:function(){ts(function(){return us(a.thumbnailOverlays)})},
menu:a.menu})})}});
function zs(a){a.continuations&&I({className:"vbox"},function(){a.continuations.forEach(function(b){return xs(a,b)})})}
;function As(a,b){b&&I({className:a},function(){O(b)})}
function Bs(a){var b=a.title,c=a.subtitle,d=a.thumbnail,e=void 0===a.header?t:a.header,f=void 0===a.footer?t:a.footer;H("ytm-promo",{className:"vbox"},function(){e();d&&vr(C(function(){return d.thumbnails[0].url}),{className:"promo-img",
alt:""});(b||c)&&I({className:"promo-content"},function(){As("promo-title",b);As("promo-subtitle",c)});
f()})}
;function Cs(a){switch(C(function(){return a.presentationStyle.style})){case "NEW_CONTENT":return"new-content";
case "GREYED_OUT":return"greyed-out";default:return""}}
;var Ds=z("SEARCH_CHANNEL"),Es=z("SEARCH_CLEAR_LABEL"),Fs=ro("ytm-channel-search-box-renderer",function(a,b){function c(h){g=h.target.value;b()}
function d(h){g=f.value;if(!g.trim())return!1;h=gn(h.endpoint);if(!h)return!1;up(mg(h,"query",g));f.blur();return!1}
function e(h){h.preventDefault();f.focus();g="";b()}
var f=null,g=og(Q().href,"query")||"";return{R:function(h){xn({className:"channel-searchbox-form cbox",onsubmit:function(){return d(h)}},function(){I({className:"channel-searchbox-input-wrapper cbox"},function(){Dn({className:"channel-searchbox-input  title",
placeholder:Ds,autocomplete:"off",autocorrect$:"off",spellcheck:"false",oninput:c},function(l){f=l;f.value!=g&&(f.value=g)})});
Dn({type:"submit",hidden:!0});g&&Ko("DISMISSAL",Es,e);Ko("SEARCH",Ds,function(){return d(h)})})}}});var Gs=F.nc,Hs=W({menuRenderer:gs});function Is(a,b){M(a,"ytm-clarification-renderer",b,function(){Js(a,function(){a.image&&Y(a.image,{className:"clarification-image small-style",alt:""});I({className:"clarification-body"},function(){I({className:"clarification-text subhead"},function(){O(a.text)});
Ks(a)})})})}
function Ls(a,b){M(a,"ytm-clarification-renderer",b,function(){Js(a,function(){a.image&&Y(a.image,{className:"clarification-image",alt:""});I({className:"clarification-body"},function(){An({className:"clarification-content-title"},function(){O(a.contentTitle)});
I({className:"clarification-text medium-style subhead"},function(){O(a.text)});
Ks(a)})})})}
function Ms(a,b){M(a,"ytm-clarification-renderer",b,function(){Js(a,function(){I({className:"clarification-body"},function(){I({className:"clarification-section-header cbox"},function(){a.image&&Y(a.image,{className:"clarification-image small-style",alt:""});An({className:"clarification-section-title title"},function(){O(a.sectionTitle)})});
I({className:"clarification-content-title"},function(){O(a.contentTitle)});
I({className:"clarification-text large-style subhead"},function(){O(a.text)});
Ks(a)})})})}
function Js(a,b){I({className:"clarification-container breakout-item-content"},function(){var c="clarification-endpoint";a.menu&&(c+=" clarification-with-menu");jo(a.endpoint,{className:c},{l:Gs,Za:!0},b);Hs(a.menu,{className:"clarification-menu-button"})})}
function Ks(a){a.source&&I({className:"clarification-source secondary-text cbox"},function(){O(a.source);V("OPEN_IN_NEW",{className:"clarification-source-icon"})})}
;var Ns=window.setAutonavStateInPlayer,Ps=new lf(Os,200),Qs=!1,Rs=!1,Ss=!1,Ts=0,Us=!Ok(Lk.O(),140),Vs=!1;function Ws(){setTimeout(function(){var a=Vs;Ns(Us?a?3:2:1)})}
function Xs(){y("mweb_continue_autonav_with_comment_collapse")&&(Qs=!1);Vs=Qs||Ss||Rs;Ws()}
function Ys(){Rs=!0;Xs()}
function Zs(){Rs=!1;clearTimeout(Ts);Ts=setTimeout(Ys,18E5);Xs()}
function $s(){Ps.Na()}
function Os(){Qs=((document.body||document.documentElement).scrollTop||window.pageYOffset||0)>2*kp.offsetHeight/3;Xs()}
function at(a){var b=a.detail.videoData;a={itct:b.sessionData.itct};var c=b.sessionData;c={autonav:c.autonav,playnext:c.playnext};b=mg("/watch","v",b.videoId);up(b,a,c)}
function bt(){vo()}
function ct(){var a=Q().hash;Ss=lb(a,"#")&&!lb(a,"#fauxfullscreen");Xs()}
;var dt=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs});function et(a,b){M(a,"ytm-compact-video-renderer",b,function(){var c=[a.shortBylineText];a.upcomingEventData&&a.upcomingEventData.upcomingEventText&&c.push(a.upcomingEventData.upcomingEventText);ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
F:c,Xa:[a.shortViewCountText,a.publishedTimeText],Ea:a.topStandaloneBadge,ha:a.badges,overlay:function(){ts(function(){return dt(a.thumbnailOverlays)})},
menu:a.menu,bb:pr()?340:void 0})})}
;function ft(a,b){H("c3-material-toggle-button",a,function(){H("button",{className:"c3-material-toggle-button","aria-label$":b.l,"aria-pressed$":b.checked,onclick:b&&b.onclick},function(){I({className:"c3-material-toggle-button-track"});I({className:"c3-material-toggle-button-circle"})})})}
;var gt=W({compactVideoRenderer:et});function ht(){var a=Us=!Us,b=!Ok(Lk.O(),140);a!=b&&(b=kg({state:a?"enabled":"disabled"}),rk("/gen_204?a=autoplay"+(b?"&"+b:""),void 0),b=Lk.O(),a||Qk(141,!0),Qk(140,!a),Rk(b),Zl.set("autonav_disabled",!a));if(w("AUTONAV_EXTRA_CHECK")){a=!Ok(Lk.O(),140);b=!Zl.get("autonav_disabled");var c="";a!=b&&(c="Cookie does not match localstorage value cookie:"+a+" LocalStorage:"+b);c&&x(Error(c),"WARNING")}Ws();P()}
function it(a){var b=Us;I({className:"ytm-autonav-bar cbox"},function(){I({className:"ytm-autonav-title"},function(){O(a.title)});
I({className:"ytm-autonav-toggle-wrapper"},function(){I({className:"ytm-autonav-toggle-description","aria-hidden$":"true"},function(){O(a.toggleDescription)});
ft({className:"ytm-autonav-toggle"},{l:F.Ub,checked:b,onclick:ht})})})}
;function jt(a,b){M(a,"ytm-compact-channel-renderer",b,function(){ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.displayName}),
F:[a.videoCountText,a.subscriberCountText]})})}
;function kt(a,b){var c=C(function(){return a.icon.iconType});
M(a,"ytm-compact-link-renderer",b,function(){jo(a.serviceEndpoint||a.navigationEndpoint,{className:"compact-link-endpoint"},{Za:!0},function(){V(c,{className:"compact-link-icon"});O(a.title)})})}
;function lt(a,b){"string"===typeof a&&(a=ar(a));return{thumbnailOverlayTimeStatusRenderer:{text:a,style:void 0===b?"DEFAULT":b}}}
;function mt(a){var b=C(function(){return a.badges[0].liveBadge.label});
return b?[lt(b,"LIVE")]:a.lengthText?[lt(a.lengthText)]:null}
;var nt=W({thumbnailOverlayTimeStatusRenderer:qs});function ot(a){rs(function(){I(null,function(){O(a.videoCountShortText)});
V("PLAYLISTS")})}
function pt(a,b){M(a,"ytm-compact-playlist-renderer",b,function(){ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
F:[a.shortBylineText,a.viewCountText],overlay:function(){return ot(a)},
menu:a.menu})})}
;function qt(a,b){M(a,"ytm-visit-site-cta-renderer",b,function(){O(a.text)})}
;var rt=W({visitSiteCtaRenderer:qt});function st(a){Im(function(){a.impressionUrls&&uk(a.impressionUrls)})}
;function tt(a){rs(function(){I(null,function(){O(a.videoCountShortText)});
V("MIX")})}
function ut(a,b){M(a,"ytm-compact-radio-renderer",b,function(){ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
F:[a.longBylineText],overlay:function(){return tt(a)},
menu:a.menu})})}
;function vt(a){var b=E(function(){return a.thumbnailOverlays[0].thumbnailOverlayBottomPanelRenderer.text});
ss(function(){O(b)})}
function wt(a,b){M(a,"ytm-compact-show-renderer",b,function(){ms({thumbnail:E(function(){return a.thumbnailRenderer.showCustomThumbnailRenderer.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
F:[a.shortBylineText],overlay:function(){return vt(a)},
menu:a.menu})})}
;var xt=W({menuRenderer:gs});var zt=W({compactChannelRenderer:jt,compactPlaylistRenderer:pt,compactRadioRenderer:ut,compactShowRenderer:wt,compactVideoRenderer:et});function At(a){H("ytm-simple-card",null,function(b){N(E(function(){return a.endpoint}),{className:"simple-card-endpoint"},function(){var c=zr(a.thumbnail,b);
I({className:"simple-card-thumbnail background-image",style$:"background-image: url("+c+");"});An({className:"simple-card-title"},function(){O(E(function(){return a.title}))})})})}
;function Bt(a){zn({className:"ytm-game-card-line-item"},function(){O(a.title)});
a.liveViewersText&&An({className:"ytm-game-card-line-item ytm-game-card-live-viewers subhead small-text"},function(){O(a.liveViewersText)})}
;var Ct=W({thumbnailOverlayTimeStatusRenderer:qs});function Dt(a){var b=C(function(){return a.thumbnailOverlays[0].thumbnailOverlayBottomPanelRenderer.text});
ss(function(){O(b)})}
;var Et=W({channelThumbnailWithLinkRenderer:function(a){N(a.navigationEndpoint,null,function(){Lr(a.thumbnail,{className:"channel-thumbnail-icon"})})}});
function Ft(a,b){M(a,"ytm-rich-list-header-renderer",b,function(){Et(a.channelThumbnail);N(a.endpoint,{className:"ytm-rich-list-header-text"},function(){An({className:"ytm-rich-list-header-title"},function(){O(a.title)});
I({className:"subhead small-text"},function(){O(a.subtitle)})})})}
;var Gt=W({thumbnailOverlayTimeStatusRenderer:qs,menuRenderer:gs});function Ht(a,b){var c=[a.bylineText,a.metadataText];M(a,"ytm-video-card-renderer",b,function(){var d=a.thumbnailOverlays;N(a.navigationEndpoint,{className:"video-card-image","aria-hidden$":!a.thumbnailOverlays},function(){ks(a.thumbnail,function(){ts(function(){return Gt(d)})})});
I({className:"video-card-metadata"},function(){N(a.navigationEndpoint,{className:"video-card-title-container"},function(){An({className:"video-card-title"},function(){O(a.title)});
I({className:"subhead"},function(){c.filter(function(e){return e}).forEach(function(e){I({className:"small-text"},function(){O(e,{H:!0})})})})});
Gt(a.menu,{className:"video-card-menu"})})})}
;var It=W({videoCardRenderer:Ht,richListHeaderRenderer:Ft});function Jt(){}
;function Kt(){this.g=[];this.b=[];this.f=[]}
function Lt(a,b,c){a.g.push(b);a.b.push(c);a.f.forEach(function(d){d instanceof Error?c(d):b(d)})}
function Mt(a,b){a.f.push(b);a.g.forEach(function(c){c(b)})}
function Nt(a,b){a.b.length||Se(b);a.f.push(b);a.b.forEach(function(c){c(b)})}
;function Ot(a){throw a;}
function Pt(a){return a}
function Qt(a){this.b=a;this.f=!1;this.g=Re()}
function Rt(a,b,c){a.g=a.g.then(function(){if(!a.f)return b(c)}).then(function(d){d&&(a.f=d.done,Mt(a.b,d))},function(d){Nt(a.b,d)})}
Qt.prototype.tee=function(a,b){var c=a?a:Pt,d=b?b:Ot,e=new Qt(new Kt);Lt(this.b,function(f){return Rt(e,c,f)},function(f){return Rt(e,d,f)});
return e};function St(){function a(g,h){var l=E(function(){return h.response.continuationContents});
if(!l)return{};if(g&&l[g])return l[g];for(var n in l)return l[n];return{}}
function b(g){var h=Uq(E(function(){return g.response.continuationContents}));
return Uq(E(function(){return h.contents[0]}))}
function c(g,h,l){g[h]||(g[h]=[]);g[h].push.apply(g[h],da(l[h]))}
function d(g,h,l){f(lg(h,{itct:g.clickTrackingParams,ctoken:g.continuation})).tee(function(n){n.done&&l(n.value.response)},function(n){.01>Math.random()&&x(n);
l({response:{},page:""})})}
function e(g){return g.ka||e(g.parentNode)}
var f=Tt;window.addEventListener("ytm-load-more",function(g){var h=g.detail,l=h.container,n=h.sb;d(h.nextContinuationData,e(g.target),function(q){q=a(n,q);"items"in q&&c(l,"items",q);"contents"in q&&c(l,"contents",q);l.continuations=q.continuations;P()})});
window.addEventListener("ytm-reload-container",function(g){g=g.detail;var h=g.Ib,l=g.qd;d(g.reloadContinuationData,eg(dg(window.location.href)[5]||null)||"/",function(n){n=b(n);for(var q in Object.keys(n))h[q]=n[q];l&&l();P()})})}
;var Ut=W({albumCardRenderer:function(a,b){M(a,"ytm-album-card-renderer",b,function(){At({endpoint:a.navigationEndpoint,thumbnail:a.thumbnail,title:a.title})})},
gameCardRenderer:function(a,b){var c=a.game&&a.game.gameDetailsRenderer;c&&M(a,"ytm-game-card-renderer",b,function(){N(c.endpoint,{className:"ytm-game-card-endpoint"},function(){c.boxArt&&ks(c.boxArt,null,void 0,"ytm-game-card-box-art");Bt(c)})})},
movieCardRenderer:function(a,b){M(a,"ytm-movie-card-renderer",b,function(){N(a.navigationEndpoint,{className:"ytm-movie-card-endpoint"},function(){ks(a.thumbnail,function(){ts(function(){return Ct(mt(a))})});
An({className:"ytm-movie-card-title"},function(){O(a.title)});
ds(a.movieBadge)})})},
premiumSeasonCardRenderer:function(a,b){M(a,"ytm-premium-season-card-renderer",b,function(){N(a.navigationEndpoint,{className:"ytm-premium-season-card-endpoint"},function(){ks(a.thumbnail,function(){return Dt(a)})})})},
previewCardRenderer:function(a,b){M(a,"ytm-preview-card-renderer",b,function(){I({className:"ytm-preview-card-content"},function(){It(a.header,{className:"ytm-preview-card-header"});It(a.contents,{className:"ytm-preview-card-item"})})})},
richListHeaderRenderer:Ft,searchRefinementCardRenderer:function(a,b){M(a,"ytm-search-refinement-card-renderer",b,function(c){a.searchRefinementCardRendererStyle&&c.setAttribute("data-style",a.searchRefinementCardRendererStyle.value);At({endpoint:a.searchEndpoint,thumbnail:a.thumbnail,title:a.query})})},
sortFilterSubMenuRenderer:function(a,b){M(a,"ytm-sort-filter-sub-menu-renderer",b,function(){a.subMenuItems&&a.subMenuItems.length&&bp({icon:"TUNE",label:F.lb,content:function(){a.subMenuItems.forEach(function(c){if(c.title){var d={qd:function(){return b.kd.removeAttribute("loading")},
reloadContinuationData:c.continuation.reloadContinuationData,Ib:b.Ib};I({className:"ytm-sort-filter-sub-menu-item",selected$:c.selected,onclick:function(e){var f=b.kd;f.hasAttribute("loading")||(f.setAttribute("loading",""),e.currentTarget.dispatchEvent(new CustomEvent("ytm-reload-container",{bubbles:!0,detail:d})))}},function(){u(c.title)})}})},
L:F.N})})},
videoCardRenderer:Ht});function Vt(a,b){M(a,"ytm-horizontal-card-list-renderer",b,function(c){I({className:"horizontal-card-list-top-container"},function(){Ut(a.header,{className:"horizontal-card-list-header"});a.sortFilter&&Ut(a.sortFilter,{className:"horizontal-card-list-sort-filter",loadingElement:c,reloadableData:a})});
I({className:"spinner"});I({className:"horizontal-card-list-cards"},function(){Ut(a.cards,{className:"horizontal-card-list-card"})})})}
;var Wt=W({buttonRenderer:Z,toggleButtonRenderer:Cr});var Xt=W({buttonRenderer:Z});var Yt=W({buttonRenderer:Z});var Zt=W({buttonRenderer:Z});function $t(a,b){a&&a.length&&H("ytm-badge-and-byline-renderer",{},function(){a.forEach(function(c){c&&c.runs?L({className:"ytm-badge-and-byline-item-byline small-text","aria-hidden$":b},function(){return O(c,{H:!0})}):L({className:"ytm-badge-and-byline-item-badge"},function(){return ds(c)})})})}
;var au=W({menuRenderer:gs});function bu(a,b,c,d){(!d||a&&b)&&N(b,{"aria-label$":c},function(){Lr(a,{className:"large-media-icon","aria-hidden$":!!c})})}
function cu(a){var b=a.accessibility,c=a.thumbnail,d=a.channelThumbnail,e=a.channelEndpoint,f=a.qb,g=a.navigationEndpoint,h=a.headline,l=void 0===a.F?[]:a.F,n=a.Ea,q=a.ha,v=a.overlay,A=void 0===a.menu?null:a.menu,D=void 0===a.extraContent?t:a.extraContent;H("ytm-large-media-item",null,function(){N(g,{"aria-hidden$":!0,className:"large-media-item-thumbnail-container"},function(){js(c,v)});
var S={className:"details"};y("mweb_full_bleed_thumbnails")&&(S.className+=" full-bleed-thumbnail");I(S,function(){I({className:"large-media-channel"},function(){bu(d,e,f,h);N(g,{className:"large-media-item-extra-endpoint","aria-hidden$":!0})});
I({className:"large-media-item-info cbox"},function(){N(g,{className:"large-media-item-metadata","aria-label$":b},function(){du(h);ds(n,{className:"large-media-item-top-badges"});y("mweb_single_endbadge_with_metadata")||y("mweb_single_endbadge_inline")?eu(!!b,l,q):(fu(!!b,l),ds(q));D()});
au(A,{className:"large-media-item-menu"})})})})}
function du(a){var b="";!a&&y("mweb_ghost_card_placeholder_data")&&(b="large-media-item-headline-placeholder");zn({className:b},function(){O(a)})}
function fu(a,b){var c="subhead";!b.length&&y("mweb_ghost_card_placeholder_data")&&(c="large-media-item-subhead-placeholder");I({className:c,"aria-hidden$":a},function(){b.forEach(function(d){L({className:"text-info small-text"},function(){O(d,{H:!0})})})})}
function eu(a,b,c){var d="";b.length||c.length||!y("mweb_ghost_card_placeholder_data")||(d="large-media-item-headline-placeholder");I({className:d},function(){$t(b,a);c&&$t(c,a)})}
;function gu(a){Im(function(){a.impressionUrls&&uk(a.impressionUrls)})}
;function hu(a,b){a.onclick=function(c){c=hd(c.target,"A");b.clickTrackingUrls&&c&&"/watch"==mp(c.href)&&uk(b.clickTrackingUrls)}}
;var iu=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs,visitSiteCtaRenderer:qt});var ju=W({menuRenderer:gs});function ku(a){I({className:"grid-media-item"},function(){return ms(a)})}
;function lu(a){rs(function(){I(null,function(){O(a.videoCountShortText)});
V("PLAYLISTS")})}
;var mu=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs});var nu=W({gridPlaylistRenderer:function(a,b){M(a,"ytm-grid-playlist-renderer",b,function(){ku({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,F:[a.shortBylineText,a.videoCountText],overlay:function(){return lu(a)},
menu:a.menu})})},
gridVideoRenderer:function(a,b){M(a,"ytm-grid-video-renderer",b,function(){var c=[a.shortBylineText];a.upcomingEventData&&a.upcomingEventData.upcomingEventText&&c.push(a.upcomingEventData.upcomingEventText);ku({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,F:c,Xa:[a.shortViewCountText,a.publishedTimeText],Ea:a.topStandaloneBadge,ha:a.badges,overlay:function(){ts(function(){return mu(a.thumbnailOverlays)})},
menu:a.menu})})}});var ou={compactChannelRenderer:jt,compactPlaylistRenderer:pt,compactRadioRenderer:ut,compactShowRenderer:wt,compactStationRenderer:function(a,b){M(a,"ytm-compact-station-renderer",b,function(){ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
F:[a.description,a.videoCountText]})})},
compactVideoRenderer:et};var pu=z("SHOW_MORE"),qu=W(ou);function ru(a){I({className:"center"},function(){return Jo({name:"MORE_CHEVRON",l:pu,onclick:a})})}
function su(a){M(a,"ytm-vertical-list-renderer",null,function(b){var c=b.hasAttribute("aria-expanded")?void 0:a.collapsedItemCount,d=a.items.length>c;qu(a.items.slice(0,c),{className:"item"});d&&ru(function(){b.setAttribute("aria-expanded","true");Og(b,su,a)})})}
;var uu=W({horizontalListRenderer:function(a){M(a,"ytm-horizontal-list-renderer",null,function(){nu(a.items)})},
menuRenderer:gs,verticalListRenderer:su,shelfFeaturedTextBadgeRenderer:tu});function tu(a){Rr({className:"shelf-featured-badge"},function(){O(a.label)})}
function vu(a){a.thumbnail&&Lr(a.thumbnail,{className:"shelf-icon"});I({className:"shelf-title-bar"},function(){zn(null,function(){O(a.title,{H:!0})});
uu(a.badges);O(a.titleAnnotation,{H:!0})})}
function wu(a){(a.title||a.badges||a.titleAnnotation||a.thumbnail||a.menu)&&I({className:"shelf-header cbox"},function(){a.endpoint?N(a.endpoint,{className:"shelf-header-endpoint cbox"},function(){vu(a)}):vu(a);
uu(a.menu)})}
function xu(a,b){M(a,"ytm-shelf-renderer",b,function(){wu(a);uu(a.content)})}
;var yu=W({richMetadataRenderer:function(a,b){N(a.endpoint,null,function(){M(a,"ytm-rich-metadata-renderer",b,function(){a.thumbnail&&("RICH_METADATA_RENDERER_STYLE_TOPIC"===a.style?Lr(a.thumbnail,{className:"ytm-rich-metadata-topic"}):Y(a.thumbnail,{alt:"",className:"ytm-rich-metadata-boxart"}));I({className:"ytm-rich-metadata-details"},function(){zn(null,function(){O(a.title)});
a.subtitle&&I({className:"ytm-rich-metadata-subtitle small-text"},function(){O(a.subtitle)});
I({className:"ytm-rich-metadata-endpoint small-text"},function(){O(a.callToAction);V(E(function(){return a.callToActionIcon.iconType}))})})})})}});var zu=W({metadataRowHeaderRenderer:function(a,b){M(a,"ytm-metadata-row-header-renderer",b,function(){a.hasDividerLine?zn({className:"metadata-row-header-header"},function(){O(a.content)}):O(a.content)})},
metadataRowRenderer:function(a,b){M(a,"ytm-metadata-row-renderer",b,function(){L({className:"metadata-row-title"},function(){O(a.title)});
L({className:"metadata-row-items"},function(){a.contents.forEach(function(c){L({className:"metadata-row-item"},function(){O(c)})})})})},
richMetadataRowRenderer:function(a,b){M(a,"ytm-rich-metadata-row-renderer",b,function(){yu(a.contents)})}});var Au=W({buttonRenderer:Z,subscribeButtonRenderer:Kr});function Bu(a){return{title:"Video "+a,byline:"Byline",thumbnail:{thumbnails:[{url:"https://i.ytimg.com/vi/"+a+"/sddefault.jpg",width:120,height:90}]},duration:"0:00",videoId:a}}
function Cu(){var a=window.localStorage&&window.localStorage["yt-player-lv"];return a?a.split(","):[]}
function Du(a){var b=Mm.response;b&&!b.player.args.download_media&&(b.player.args.download_media=!0,b.player.args.start=iq().getCurrentTime(),b.player=Object.assign({},b.player),P(),Kp(function(){return u("Downloading "+a)}),Eu(a,60,1E3))}
function Eu(a,b,c){setTimeout(function(){3==(Cu().includes(a)?3:1)?Fu(a):0<b&&Eu(a,b-1,c)},c)}
function Fu(a){P();Kp(function(){return u("Finished downloading "+a)})}
function Gu(){Kp(function(){u("Not implemented")})}
;function Hu(){return C(function(){return iq().getVideoData().video_id})}
function Iu(a,b){return 3==b?a.offlineCompleteText:2==b?a.offlineProgressText:C(function(){return a.button.buttonRenderer.text})}
function Ju(){Zp({header:function(){J(null,function(){return u("Delete from downloads?")})},
buttons:function(){eo({className:"compact"},null,function(){return u("Cancel")});
eo({className:"compact",onclick:function(){return Gu()}},null,function(){return u("Delete")})},
content:function(){}})}
function Ku(a){if(a){var b=Hu();if(b){var c=Cu().includes(b)?3:1;(a=Iu(a,c))&&Mo(3==c?"CHECK":2==c?"WATCH_LATER":"OFFLINE_DOWNLOAD",a,null,null,!1,function(){1==c?Du(b):Ju()},"",!1,"")}}}
;var Lu=W({metadataBadgeRenderer:Sr,standaloneCollectionBadgeRenderer:function(a,b){M(a,"ytm-standalone-collection-badge-renderer",b,function(){Rr({className:"standalone-collection-badge","data-type$":C(function(){return a.style.badgeStyle})},function(){V(C(function(){return a.icon.iconType}));
a.iconText&&Rr({className:"icon-text soft-background"},function(){u(a.iconText)});
O(a.label)})})}});
function Mu(a){var b={className:"top-standalone-badge"};a&&H("ytm-standalone-badge-supported-renderer",b,function(){Lu(a)})}
;var Nu=F.ua,Ou=F.va,Ru=W({buttonRenderer:Z,metadataRowContainerRenderer:function(a,b){M(a,"ytm-metadata-row-container-renderer",b,function(){zu(a.rows)})},
slimOwnerRenderer:function(a,b){var c=b&&b.expanded;M(a,"ytm-slim-owner-renderer",b,function(){jo(a.navigationEndpoint,{className:"slim-owner-icon-and-title"},{l:a.title&&a.title.simpleText?a.title.simpleText:"",Za:!0},function(){Lr(a.thumbnail,{className:"slim-owner-profile-icon"});I(null,function(){zn(null,function(){O(a.title,{H:!0})});
I({className:"subhead"},function(){O(c?a.expandedSubtitle:a.collapsedSubtitle)})})});
I({className:"slim-owner-subscribe-button cbox"},function(){Au(a.subscribeButton)})})},
slimMetadataButtonRenderer:Pu,slimMetadataToggleButtonRenderer:Qu,toggleButtonRenderer:Cr});function Pu(a){a.isOfflineButtonPlaceholder?Ku(a):Ru(a.button)}
function Qu(a){Ru(a.button)}
var Su=ro("ytm-slim-video-metadata-renderer",function(a,b){function c(){g=!g;b()}
function d(h,l){var n=h.topStandaloneBadge||[],q=h.badges||[];I({className:"slim-video-metadata-header",onclick:c},function(){I({className:"slim-video-metadata-title-and-badges"},function(){Mu(n);J({className:"slim-video-metadata-title"},function(){O(h.title)});
ds(q);I({},function(){L({className:"secondary-text"},function(){O(g?h.expandedSubtitle:h.collapsedSubtitle)})})});
V(g?"EXPAND_LESS":"EXPAND_MORE",{className:l?"slim-video-metadata-header-expand-placeholder":"",role$:"button","aria-label$":g?Nu:Ou,"aria-expanded$":g})})}
function e(h){var l="slim-video-metadata-actions";C(function(){return 1==h.buttons.length})&&(l+=" slim-video-metadata-limited-state");
y("enable_video_metadata_overflow_menu")&&(l+=" slim-video-metadata-overflow-menu-enabled");I({className:l},function(){if(y("enable_video_metadata_overflow_menu"))if(5>=h.buttons.length)Ru(h.buttons);else{for(var n=h.buttons.slice(4),q=0;4>q;q++)Ru(h.buttons[q]);cp({icon:"MORE_HORIZ",label:h.overflowMenuText,l:co(h.overflowMenuText)||"",L:F.N,content:function(){return Ru(n)},
ld:"slim-video-metadata-overflow-menu"})}else Ru(h.buttons)})}
function f(h){g&&(I({className:"slim-video-metadata-info user-text"},function(){I(null,function(){O(h.dateText)});
I({className:"slim-video-metadata-description"},function(){O(h.description)})}),I({className:"slim-video-metadata-info metadata-row"},function(){Ru(h.metadataRowContainer)}))}
var g=!1;return{R:function(h){a.data=h;var l=!!h._isPlaceholderData;d(h,l);l||(e(h),Ru(h.owner,{className:g?"":"slim-video-metadata-collapsed",expanded:g}),f(h))},
da:function(h,l){h!=l&&(g=!1)}}});var Tu=W({buttonRenderer:Z});var Uu=W({buttonRenderer:Z});var Wu=W({sponsorshipsLoyaltyBadgeRenderer:Vu});function Xu(a,b){M(a,"ytm-sponsorships-loyalty-badges-renderer",b,function(){a.description&&I({className:"description"},function(){O(a.description)});
var c=b&&b.expanded;I({className:"badge-container"},function(){a.loyaltyBadges.forEach(function(d,e){var f=-1!=a.selected?a.selected:0;(c||e==f)&&I({className:Yu(a.selected,e,c)},function(){Wu(d,b)})})})})}
function Vu(a,b){M(a,"ytm-sponsorships-loyalty-badge-renderer",b,function(){I({className:"badge-title-container"},function(){O(a.title)});
Y(a.icon,{className:"badge-icon",alt:""})})}
function Yu(a,b,c){return c?-1!=a?a==b?"badge-line badge-selected":"badge-line badge-not-selected":"badge-line":(-1!=a?a:0)==b?"badge-line":""}
;var Zu=W({sponsorshipsLoyaltyBadgesRenderer:Xu});function $u(a,b){M(a,"ytm-sponsorships-list-tile-renderer",b,function(c){Km(c,"_sponsorshipsListTileRenderer",a,function(){c.b=!!a.expandableItems;c.D=!c.b});
var d=c.b,e=c.D;wn({className:"tile",disabled:!a.expandableItems,onclick:function(){return av(c,a,b)}},function(){Y(a.icon,{className:"sponsorships-list-tile-icon",
alt:""});I({className:"sponsorships-list-tile-text"},function(){L({className:"sponsorships-list-tile-title"},function(){O(a.title)});
L({className:"sponsorships-list-tile-subtitle"},function(){O(a.subtitle)})});
a.expandableItems&&V(e?"ARROW_DROP_UP":"ARROW_DROP_DOWN",{className:"sponsorships-list-tile-expand-icon"})});
d&&e&&a.expandableItems.forEach(function(f){f.sponsorshipsLoyaltyBadgesRenderer&&I({className:"container"},function(){Zu(f,{expanded:!0})});
f.sponsorshipsListTileRenderer&&$u(f.sponsorshipsListTileRenderer,b)})})}
function av(a,b,c){a.D=!a.D;Og(a,function(){return $u(b,c)})}
;var bv=W({sponsorshipsLoyaltyBadgesRenderer:Xu});var cv=W({sponsorshipsPerkRenderer:function(a,b){M(a,a.title?"ytm-sponsorships-perk-renderer-item":"ytm-sponsorships-perk-renderer",b,function(){a.title&&K({className:"sponsorships-perk-renderer-title"},function(){O(a.title)});
var c=b.expanded;a.description&&K({hidden:!c},function(){O(a.description)});
a.fulfillmentInstructions&&K({className:"sponsorships-perk-renderer-fulfillment-instructions",hidden:!c},function(){O(a.fulfillmentInstructions)});
a.images&&I({className:"sponsorships-perk-renderer-image-line"},function(){L({className:"sponsorships-perk-renderer-image-line-text"},function(){O(a.imageDescription)});
a.images.forEach(function(d){Y(d,{className:"sponsorships-perk-renderer-images",alt:""})})});
a.loyaltyBadges&&bv(a.loyaltyBadges,{expanded:c})})}});var fv=W({buttonRenderer:Z,sponsorshipsExpandableMessageRenderer:dv,sponsorshipsPerksRenderer:function(a,b){M(a,"ytm-sponsorships-perks-renderer",b,function(){a.perksTitle&&K({className:"sponsorships-perks-renderer-title"},function(){O(a.perksTitle)});
a.perks.forEach(function(c){cv(c,b)})})},
sponsorshipsTierRenderer:ev});function ev(a,b){M(a,"ytm-sponsorships-tier-renderer",b,function(c){Km(c,"_sponsorshipsTierRendererData",a,function(){c.b=a.expansionCallToAction;c.D=!c.b});
var d=c.b,e=c.D;a.title&&I({className:"sponsorships-tier-renderer-title"},function(){O(a.title)});
a.abovePurchaseButtonText&&I({className:"sponsorships-tier-renderer-above-purchase-button-text"},function(){O(a.abovePurchaseButtonText)});
a.purchaseButton&&I({className:"sponsorships-tier-renderer-purchase-button-container"},function(){fv(a.purchaseButton,{className:"sponsorships-tier-renderer-purchase-button"})});
a.disclaimer&&I({className:"sponsorships-tier-renderer-disclaimer"},function(){O(a.disclaimer)});
a.expandableMessage&&fv(a.expandableMessage);fv(a.perks,{expanded:e});d&&wn({onclick:function(){return gv(c,a,b)},
className:"sponsorships-tier-renderer-expansion"},function(){I({className:"sponsorships-tier-renderer-expand-text"},function(){O(e?a.collapseCallToAction:a.expansionCallToAction)});
V(e?"ARROW_DROP_UP":"ARROW_DROP_DOWN",{className:"sponsorships-tier-renderer-expand-icon"})})})}
function gv(a,b,c){a.D=!a.D;Og(a,function(){return ev(b,c)})}
function dv(a,b){M(a,"ytm-sponsorships-expandable-message-renderer",b,function(c){Km(c,"_sponsorshipsExpandableMessageRenderer",a,function(){c.b=a.expandableItems;c.D=a.startExpanded});
var d=c.D;I({className:a.messageContainerStyle?a.messageContainerStyle.split("MESSAGE_CONTAINER_")[1].replace(/_/g,"-").toLowerCase():"style-unspecified"},function(){wn({className:"message-container",onclick:function(){return hv(c,a,b)}},function(){a.messageContainerStyle&&("MESSAGE_CONTAINER_STYLE_SINGLE_PERK"===a.messageContainerStyle||"MESSAGE_CONTAINER_STYLE_SINGLE_PERK_FIRST"===a.messageContainerStyle)&&V("CHECK",{className:"expandable-message-renderer-check-icon"});
I({className:"expandable-message-renderer-text"},function(){O(a.text)});
a.expandableItems&&V(d?"ARROW_DROP_UP":"ARROW_DROP_DOWN",{className:"expandable-message-renderer-expand-icon"})});
a.expandableItems&&d&&I({className:"content-container"},function(){fv(a.expandableItems,{expanded:!0})})})})}
function hv(a,b,c){a.D=!a.D;Og(a,function(){return dv(b,c)})}
;var iv=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs});function jv(a){var b=[];a.shortBylineText&&b.push(a.shortBylineText);if(kv(a.badges))return b;lv(a.badges)&&b.push(a.badges[0]);a.shortViewCountText&&b.push(a.shortViewCountText);a.publishedTimeText&&b.push(a.publishedTimeText);a.upcomingEventData&&a.upcomingEventData.upcomingEventText&&b.push(a.upcomingEventData.upcomingEventText);return b}
function mv(a){if(lv(a.badges)||!a.badges)return[];if(kv(a.badges)){var b=[a.badges[0],a.shortViewCountText];b.push(a.publishedTimeText);return b}return a.badges}
function kv(a){return!!a&&1===a.length&&y("mweb_single_endbadge_with_metadata")}
function lv(a){return!!a&&1===a.length&&y("mweb_single_endbadge_inline")}
;function nv(a,b,c){K(null,function(){O(a);N(b,{className:"search-query-correction-endpoint"},function(){O(c)})})}
function ov(a){var b=a.ma,c=a.correctedQuery,d=a.la,e=a.Aa,f=a.originalQuery,g=a.Db;H("c3-search-query-correction",null,function(){b&&c&&d&&nv(b,d,c);e&&f&&g&&nv(e,g,f)})}
;var pv={},qv={};function rv(){I({className:"cbox"},function(){I({className:"spinner"})})}
function sv(a,b){delete qv[a];pv[a]=b}
function tv(a,b){var c=void 0===b?{}:b,d=void 0===c.Wa?!0:c.Wa;pv[a]||(qv[a]=!0);return function(e,f){(pv[a]||(d?rv:t))(e,f)}}
;var uv={backgroundPromoRenderer:function(a){M(a,"ytm-background-promo-renderer",{className:"extend"},function(){Bs({title:a.title,subtitle:a.bodyText,thumbnail:E(function(){return a.thumbnail})})})},
channelAboutMetadataRenderer:function(a,b){var c=a.primaryLinks||[];M(a,"ytm-channel-about-metadata-renderer",b,function(){I({className:"user-text"},function(){O(a.description)});
c.forEach(function(d){return Ir(d)});
I(null,function(){K(null,function(){O(a.subscriberCountText)});
K(null,function(){O(a.joinedDateText)});
K(null,function(){O(a.viewCountText)})})})},
channelFeaturedVideoRenderer:function(a,b){M(a,"ytm-channel-featured-video-renderer",b,function(){N(a.navigationEndpoint,null,function(){js(E(function(){return a.thumbnail}));
zn({className:"details"},function(){O(E(function(){return a.title}))})})})},
channelListItemRenderer:function(a,b){M(a,"ytm-channel-list-item-renderer",b,function(){N(a.navigationEndpoint,{className:"cbox channel-list-item-link","presentation-style$":Cs(a)},function(){Lr(a.thumbnail,{className:"channel-list-item-thumbnail cbox"});I({className:"channel-list-item-title"},function(){O(a.title)});
a.liveStatus&&I({className:"channel-list-item-live-status"},function(){O(a.liveStatus)})})})},
channelSearchBoxRenderer:Fs,clarificationRenderer:function(a,b){switch(a.style){case "CLARIFICATION_RENDERER_STYLE_SMALL":Is(a,b);break;case "CLARIFICATION_RENDERER_STYLE_MEDIUM":Ls(a,b);break;case "CLARIFICATION_RENDERER_STYLE_LARGE":Ms(a,b)}},
compactAutoplayRenderer:function(a,b){it(a);gt(a.contents,b)},
compactChannelRenderer:jt,compactOfferModuleRenderer:function(a,b){M(a,"ytm-compact-offer-module-renderer",b,function(){I({className:"cbox"},function(){I({className:"compact-offer-module-title"},function(){J(null,function(){O(a.title)});
I(null,function(){O(a.subtitle)})});
Z(a.offerButton.buttonRenderer)})})},
compactLinkRenderer:kt,compactMovieRenderer:function(a,b){var c=[a.standaloneBadge];M(a,"ytm-compact-movie-renderer",b,function(){ms({F:[a.subtitle,C(function(){return a.topMetadataItems[0]}),
a.descriptionSnippet],ha:c,headline:a.title,menu:a.menu,navigationEndpoint:a.navigationEndpoint,overlay:function(){ts(function(){return nt(mt(a))})},
thumbnail:a.thumbnail,bb:pr()?340:void 0})})},
compactPlaylistRenderer:pt,compactPromotedVideoRenderer:function(a,b){a._adformat="2_6";a._el="adunit";M(a,"ytm-compact-promoted-video-renderer",b,function(c){Km(c,"_data",1,function(){return st(a)});
ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
menu:a.menu,bb:pr()?340:void 0,extraContent:function(){I({className:"compact-promoted-video-byline-container"},function(){Rr({className:"compact-promoted-video-badge"},function(){u(F.Ga)});
L({className:"subhead"},function(){O(a.shortBylineText,{H:!0})})});
L({className:"subhead"},function(){O(a.viewCountText)});
rt(a.ctaRenderer)},
overlay:function(){ts(function(){I({className:"compact-promoted-video-length-overlay"},function(){return O(a.lengthText)})})},
F:[]})})},
compactRadioRenderer:ut,compactShowRenderer:wt,compactVideoRenderer:et,didYouMeanRenderer:function(a,b){M(a,"c3-did-you-mean-renderer",b,function(){ov({ma:a.didYouMean,correctedQuery:a.correctedQuery,la:a.correctedQueryEndpoint})})},
donationShelfRenderer:tv("donationShelfRenderer"),factCheckRenderer:function(a,b){M(a,"ytm-fact-check-renderer",b,function(){I({className:"fact-check-container breakout-item-content"},function(){N(a.endpoint,{className:"fact-check-endpoint"},function(){I({className:"fact-check-section-title cbox"},function(){V(E(function(){return a.titleIcon.iconType}));
J({className:"fact-check-section-title-text title"},function(){O(a.sectionTitle)})});
I({className:"fact-check-article-title"},function(){L({className:"fact-check-article-title-text"},function(){O(a.articleTitle)});
V(E(function(){return a.publisherLinkIcon.iconType}),{className:"fact-check-publisher-link-icon"})});
I({className:"fact-check-body",role$:"text"},function(){a.image&&Y(a.image,{className:"fact-check-image",alt:""});I({className:"fact-check-body-text"},function(){I({className:"fact-check-claim"},function(){O(a.claimText)});
I({className:"fact-check-rating"},function(){O(a.ratingText)})})})});
xt(a.menu,{className:"fact-check-menu"})})})},
feedEntryRenderer:function(a,b){M(a,"ytm-feed-entry-renderer",b,function(){I({className:"feed-entry-header cbox"},function(){N(a.ownerEndpoint,null,function(){Lr(a.ownerThumbnail,{className:"feed-entry-profile-icon"})});
I({className:"feed-entry-text"},function(){O(a.title);L({className:"feed-entry-time secondary-text"},function(){O(a.timeText)})})});
zt(a.item)})},
horizontalCardListRenderer:Vt,includingResultsForRenderer:function(a,b){M(a,"c3-including-results-for-renderer",b,function(){ov({ma:a.includingResultsFor,correctedQuery:a.correctedQuery,la:a.correctedQueryEndpoint,Aa:a.searchOnlyFor,originalQuery:a.originalQuery,Db:a.originalQueryEndpoint})})},
itemSectionHeaderRenderer:function(a,b){M(a,"ytm-item-section-header-renderer",b,function(){a.title&&I({className:"ytm-item-section-header-title"},function(){O(a.title);a.subtitle&&I({className:"subhead small-text"},function(){O(a.subtitle)})});
Wt(a.buttons,{className:"item-section-header-buttons"})})},
limitedStateMessageRenderer:function(a,b){M(a,"ytm-limited-state-message-renderer",b,function(){I({className:"limited-state-message-header cbox"},function(){V(a.icon.iconType,{className:"limited-state-message-icon"});O(a.headerText)});
K(null,function(){O(a.subtext)});
I({className:"limited-state-message-buttons cbox"},function(){Xt(a.learnMoreButton);Xt(a.goHomeButton)})})},
messageRenderer:function(a,b){M(a,"ytm-message-renderer",b,function(){O(a.text);Yt(a.button)})},
musicPassFeatureInfoRenderer:tv("musicPassFeatureInfoRenderer"),musicPassSmallFeatureInfoRenderer:tv("musicPassSmallFeatureInfoRenderer"),noResultsFoundShowingResultsForRenderer:function(a,b){M(a,"c3-no-results-found-showing-results-for-renderer",b,function(){ov({ma:a.showingResultsFor,correctedQuery:a.correctedQuery,la:a.correctedQueryEndpoint,Aa:a.noResultsFound,originalQuery:a.originalQuery})})},
playlistNotificationRenderer:function(a,b){M(a,"ytm-playlist-notification-renderer",b,function(){I({className:"playlist-notification"},function(){I({className:"playlist-notification-text"},function(){O(a.text)});
Zt(a.actions)})})},
playlistVideoListRenderer:function(a,b){M(a,"ytm-playlist-video-list-renderer",b,function(){ys(a.contents,{className:"item"});zs(a)})},
promotedVideoRenderer:function(a,b){a._adformat="1_8";M(a,"ytm-promoted-video-renderer",b,function(c){Km(c,"_data",1,function(){return gu(a)});
hu(c,a);cu({accessibility:null,thumbnail:a.thumbnail,channelThumbnail:a.channelThumbnail,channelEndpoint:a.channelEndpoint,qb:null,navigationEndpoint:a.navigationEndpoint,headline:a.title,F:[a.description],menu:a.menu,overlay:function(){ts(function(){return iu(a.thumbnailOverlays)})},
extraContent:function(){I({className:"promoted-video-byline-container"},function(){Rr({className:"promoted-video-badge"},function(){u(F.Ga)});
L({className:"subhead"},function(){O(a.shortBylineText,{H:!0})})});
L({className:"promoted-video-shelf-title"},function(){O(a.shortBylineText)});
iu(a.ctaRenderer)}})})},
purchaseItemRenderer:function(a,b){M(a,"ytm-purchase-item-renderer",b,function(){ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
F:[a.priceText],menu:a.menu})})},
redeemCodeRenderer:tv("redeemCodeRenderer"),resultsWithoutQuotesRenderer:function(a,b){M(a,"c3-results-without-quotes-renderer",b,function(){ov({ma:a.resultsFor,correctedQuery:a.correctedQuery,la:a.correctedQueryEndpoint,Aa:a.withoutQuotes})})},
searchHistoryQueryRenderer:function(a,b){a.query&&M(a,"ytm-search-history-query-renderer",b,function(){I({className:"cbox"},function(){N(a.navigationEndpoint,{className:"search-history-query-text-content"},function(){I({className:"search-history-query-query"},function(){u(a.query)});
I({className:"search-history-query-latest-search-time"},function(){O(a.latestSearchTimeText)})});
ju(a.menu)})})},
slimVideoMetadataRenderer:Su,shelfRenderer:xu,showingResultsForRenderer:function(a,b){M(a,"c3-showing-results-for-renderer",b,function(){ov({ma:a.showingResultsFor,correctedQuery:a.correctedQuery,la:a.correctedQueryEndpoint,Aa:a.searchInsteadFor,originalQuery:a.originalQuery,Db:a.originalQueryEndpoint})})},
simpleTextSectionRenderer:function(a,b){M(a,"ytm-simple-text-section-renderer",b,function(){a.lines.forEach(function(c){K({className:"simple-text-section-content secondary-text","is-paid-memberships$":lb(mp(Q().href),"/paid_memberships")},function(){O(c)})})})},
sponsorshipsAlertRenderer:function(a,b){M(a,"ytm-sponsorships-alert-renderer",b,function(){O(a.alertMessage);a.actionButton&&I({className:"sponsorships-alert-bar-action-button cbox"},function(){Tu(a.actionButton)});
a.secondaryActionButton&&I({className:"sponsorships-alert-bar-action-button cbox"},function(){Tu(a.secondaryActionButton)})})},
sponsorshipsExpandableMessageRenderer:dv,sponsorshipsHeaderRenderer:function(a,b){M(a,"ytm-sponsorships-header-renderer",b,function(){var c=zr(a.backgroundImage),d=Ul(a.backgroundColor);I({style$:"background-image: url("+c+");\n                 background-blend-mode: soft-light;\n                 background-color: "+d+";",className:"sponsorships-header"},function(){I({className:"sponsorships-header-text"},function(){I({className:"sponsorships-header-supertitle"},function(){O(a.superTitle)});
I({className:"sponsorships-header-title"},function(){O(a.title)});
I({className:"sponsorships-header-subtitle"},function(){O(a.subtitle)})});
I({className:"sponsorships-image-container"},function(){Y(a.channelImage,{className:"sponsorships-image",alt:""})})})})},
sponsorshipsHeadingRenderer:function(a,b){M(a,"ytm-sponsorships-heading-renderer",b,function(){I({className:a.darkBackground?"sponsorships-heading-renderer-dark-background":"sponsorships-heading-renderer"},function(){I({className:"sponsorships-heading-renderer-text"},function(){I({className:"sponsorships-heading-renderer-title"},function(){O(a.title)});
a.subtitle&&I({className:"sponsorships-heading-renderer-subtitle-line"},function(){a.subtitleIcon&&Y(a.subtitleIcon,{className:"sponsorships-heading-renderer-subtitle-icon",alt:""});L({className:"sponsorships-heading-renderer-subtitle"},function(){O(a.subtitle)})});
a.bottomButton&&I({className:"sponsorships-heading-renderer-bottom-button"},function(){Uu(a.bottomButton)})});
a.endButton&&I({className:"sponsorships-heading-renderer-end-button"},function(){Uu(a.endButton)})})})},
sponsorshipsLinksRenderer:function(a,b){M(a,"ytm-sponsorships-links-renderer",b,function(){a.links.forEach(function(c){O(c)})})},
sponsorshipsListTileRenderer:$u,sponsorshipsTierRenderer:ev,subscriptionProductRenderer:tv("subscriptionProductRenderer"),subscriptionProductUpsellOfferRenderer:tv("subscriptionProductUpsellOfferRenderer"),unlimitedPageHeaderRenderer:tv("unlimitedPageHeaderRenderer"),videoWithContextRenderer:function(a,b){var c=C(function(){return a.channelThumbnail.channelThumbnailWithLinkRenderer});
M(a,"ytm-video-with-context-renderer",b,function(){cu({accessibility:co(a.accessibility),thumbnail:a.thumbnail,channelThumbnail:C(function(){return c.thumbnail}),
channelEndpoint:C(function(){return c.navigationEndpoint}),
qb:c&&co(c.accessibility),navigationEndpoint:a.navigationEndpoint,headline:a.headline,F:jv(a),Ea:a.topStandaloneBadge,ha:mv(a),menu:a.menu,overlay:function(){ts(function(){return iv(a.thumbnailOverlays)})}})})},
ypcOffersListRenderer:tv("ypcOffersListRenderer")};function vv(a){var b=a.items,c=a.Ca,d=a.ya,e=a.chunkSize,f=void 0===a.oncomplete?t:a.oncomplete,g=a.hd,h=Gg;a=h.f=h.f||{};if(b!=a.items&&g)Fg=Gg.lastChild;else if(b==a.items&&!g&&a.ob)Fg=Gg.lastChild;else{b!=a.items&&(a.count=d-e);a.items=b;a.count=Math.min(a.count+e,b.length);for(g=0;g<a.count;g++)c(b[g]);a.count<b.length?(a.ob=!0,Im(function(){requestAnimationFrame(function(){Mg(h,vv,{items:b,Ca:c,ya:d,chunkSize:e,oncomplete:f,hd:!0})})})):(a.ob=!1,f())}}
function wv(a){H("lazy-list",null,function(){vv(a)})}
;function xv(a){a.dispatchEvent(new CustomEvent("ytm-load-more",{bubbles:!0,detail:a}))}
var yv="IntersectionObserver"in window?new IntersectionObserver(function(a,b){a.filter(function(c){return c.intersectionRect.height}).forEach(function(c){c=c.target;
b.unobserve(c);xv(c)})},{rootMargin:"10%",
threshold:.01}):new Jn(.1,function(a){xv(a)});
function zv(a,b,c){var d=b.nextContinuationData;d&&H("c3-infinite-scroll-continuation",{className:"spinner",container:a,nextContinuationData:d,sb:c},function(e){Km(e,"continuation",d,function(){yv.observe(e)})})}
;var Av=W(uv);function Bv(a){if(a.continuations){var b="related-items"==a.sectionIdentifier;I({className:"vbox"},function(){a.continuations.forEach(function(c){(pr()||y("mweb_watch_next_infinite_scroll"))&&b||c.nextContinuationData.autoloadEnabled?zv(a,c,"itemSectionContinuation"):xs(a,c,"itemSectionContinuation")})})}}
function Cv(a){Av(a,{className:"item"})}
function Dv(a,b){b=void 0===b?{}:b;var c=a.contents||[];M(a,"ytm-item-section-renderer",b,function(d){d.setAttribute("section-identifier",a.sectionIdentifier||"");Av(a.header);wv({items:c,Ca:Cv,ya:6,chunkSize:6,oncomplete:function(){return Bv(a)}})})}
;var Fv=W({searchFilterGroupRenderer:Ev});function Gv(a){return"FILTER_STATUS_SELECTED"==a.status}
function Hv(a){a=a.target;(a=a.options[a.selectedIndex].Mc)&&!Gv(a)&&a.navigationEndpoint&&G(a.navigationEndpoint,{},!1)}
function Iv(a){Fn({className:"option",disabled:"FILTER_STATUS_DISABLED"==a.status,selected:Gv(a),Mc:a},function(){O(a.label)})}
function Ev(a,b){var c=a.filters.map(function(e){return e.searchFilterRenderer}),d=c.some(function(e){return!Gv(e)&&"FILTER_STATUS_DISABLED"!=e.status});
M(a,"ytm-search-filter-group-renderer",b,function(e){e.setAttribute("data-has-options",d);hq({onchange:Hv},null,function(){c.forEach(Iv)})})}
;var Jv=W({channelAgeGateRenderer:function(a,b){M(a,"ytm-channel-age-gate-renderer",b,function(){I({className:"channel-age-gate-header"},function(){a.avatar&&Lr(a.avatar,{className:"channel-age-gate-profile-icon"});yn(null,function(){O(E(function(){return a.channelTitle}))})});
I(null,function(){J(null,function(){O(a.header)});
K({className:"channel-age-gate-text"},function(){O(a.mainText)});
I({className:"cbox"},function(){$r(a.signInButton)});
K({className:"channel-age-gate-text"},function(){O(a.secondaryText)})})})},
channelListSubMenuRenderer:function(a){var b="channel-list-sub-menu-avatars",c=a.contentSize&&a.contentSize.value;c&&"LARGE_WITH_TEXT"===c&&(b+=" channel-list-sub-menu-large-avatars");M(a,"ytm-channel-list-sub-menu-renderer",null,function(){I({className:b,"aria-hidden$":!0},function(){as(a.contents,{size:c})});
a.channelsEndpoint&&N(a.channelsEndpoint,{className:"channel-list-sub-menu-show-all","aria-label$":z("ALL_CHANNELS_LABEL")},function(){Lo()})})},
channelSubMenuRenderer:function(a,b){M(a,"ytm-channel-sub-menu-renderer",b,function(){I({className:"section"},function(){bs(a.contentTypeSubMenuItems);bs(a.sortFilterSubMenuItems)})})},
commentSectionRenderer:tv("commentSectionRenderer"),itemSectionRenderer:Dv,searchSubMenuRenderer:function(a){M(a,"ytm-search-sub-menu-renderer",{className:"section"},function(){Fv(a.groups)})},
shelfRenderer:xu,universalWatchCardRenderer:tv("universalWatchCardRenderer")});function Kv(a){(a.continuations||[]).forEach(function(b){return zv(a,b)})}
function Lv(a){var b=a.subMenu,c=a.contents||[];M(a,"ytm-section-list-renderer",null,function(){Jv(b);wv({items:c,Ca:Jv,ya:3,chunkSize:3,oncomplete:function(){return Kv(a)}})})}
;var Mv=W({activeAccountHeaderRenderer:Zr,sectionListRenderer:Lv,signInPromoWithBackgroundRenderer:function(a){M(a,"ytm-sign-in-promo-with-background-renderer",{className:"extend"},function(){Bs({title:a.promoHeadline,subtitle:a.promoSubtitle,thumbnail:E(function(){return a.promoImage}),
header:function(){N(a.navigationEndpoint,{className:"sign-in-header cbox"},function(){V("AVATAR_CIRCLE_BLUE",{className:"sign-in-icon"});I({className:"sign-in-header-text"},function(){u(F.Ja)})})},
footer:function(){N(a.navigationEndpoint,{"aria-label$":F.Ja,className:"sign-in-link"},function(){eo({className:"sign-in-button"},null,function(){u(F.Ja)})})}})})},
lugashFooterRenderer:function(a,b){M(a,"ytm-lugash-footer-renderer",b,function(){I({className:"center secondary-text"},function(){O(a.title)})})}});var Nv=z("MORE_OPTIONS");function Ov(a){a.preventDefault();a.stopPropagation()}
function Pv(a){var b=a.data;a=a.selected;N(b.endpoint,{"aria-label$":co(b.accessibility),role$:"tab","aria-selected$":a,className:"scbrr-tab center","is-placeholder$":b._isPlaceholder,onclick:a?Ov:null},function(){b.icon?V(b.icon.iconType):b.title&&u(b.title)})}
function Qv(a){var b=a.data,c=a.selected;I({ka:a.url,hidden:!c},function(){sn(c,function(){Mv(b.header);Mv(b.content);Mv(b.footer)})})}
function Rv(a){a.length&&bp({icon:"EXPAND_MORE",label:Nv,content:function(){a.forEach(function(b){N(b.data.endpoint,null,function(){oo(null,function(){u(b.data.title)})})})},
L:F.N})}
;var Sv=W({c4TabbedHeaderRenderer:Pr,gamingDestinationHeaderRenderer:function(a,b){M(a,"ytm-gaming-destination-header-renderer",b,function(){var c=a.channelDetails&&a.channelDetails.topicChannelDetailsRenderer;c&&(c.avatar&&Y(c.avatar,{alt:"",className:"ytm-gaming-destination-header-avatar"}),I({className:"ytm-gaming-destination-header-details"},function(){J(null,function(){return O(c.title)});
c.subscribeButton&&Qr(c.subscribeButton)}))})},
interactiveTabbedHeaderRenderer:function(a,b){M(a,"ytm-interactive-tabbed-header-renderer",b,function(){var c=!!C(function(){return b.tabs[0].tabRenderer.selected});
Tr({tabs:b.tabs});c&&(Vr(a),Wr(a))})},
playlistHeaderRenderer:function(a,b){M(a,"ytm-playlist-header-renderer",b,function(){I({className:"playlist-header"},function(){Er(a.playlistHeaderBanner);I({className:"playlist-header-box section"},function(){Fr(a);Hr(a)});
N(a.playEndpoint,{className:"playlist-play-all-button center",role$:"button",title:Dr},function(){V("PLAY_ALL")})});
Gr(a)})},
singleColumnBrowseResultsRenderer:function(a,b){M(a,"ytm-single-column-browse-results-renderer",b,function(){if(a){var c=Q().pathname,d=a.tabs.map(function(l){l=l.tabRenderer;return{data:l,url:gn(l.endpoint)||c,selected:l.selected}}),e=b&&b.isChannel,f=e?3:Number.MAX_VALUE,g=e||lb(c,"/feed/history"),h=w("MWEB_SHOW_PIVOT_BAR");
b&&b.isGamingChannel||!g&&h||I({className:"scbrr-tabs cbox",hidden:2>d.length,"is-channel$":e,"bottom-nav$":h,role$:"tablist"},function(){var l=d.slice(f);d.slice(0,f).forEach(Pv);Rv(l)});
I(null,function(){d.forEach(Qv)})}})},
channelCreationForm:tv("channelCreationFormRenderer"),channelMetadataRenderer:function(a,b){M(a,"ytm-channel-metadata-renderer",b,function(){var c=a.vanityChannelUrl?a.vanityChannelUrl:a.channelUrl;c&&a.title&&JSON&&Gn({type:"application/ld+json"},function(){var d=JSON.stringify({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c,name:a.title}}]});u(d)})})}});
function Tv(a){return!!C(function(){return a.header.c4TabbedHeaderRenderer})}
function Uv(a){return!!C(function(){return a.header.interactiveTabbedHeaderRenderer})}
function Vv(a){return C(function(){return a.contents.singleColumnBrowseResultsRenderer.tabs})}
function Wv(a){var b={};y("mweb_full_bleed_thumbnails")&&(b.className||(b.className=""),b.className+=" full-bleed-thumbnails");M(a,"ytm-browse",b,function(){Uv(a)?Sv(a.header,{tabs:Vv(a)}):Sv(a.header);Sv(a.contents,{isChannel:Tv(a),isGamingChannel:Uv(a)});Sv(a.metadata,{isChannel:Tv(a)});Sv(a.channelCreation)})}
;var $v=W({experimentsGroupRenderer:Xv,experimentsStudyRenderer:Yv,experimentsStudyItemRenderer:Zv,toggleButtonRenderer:Cr});function Xv(a,b){M(a,"ytm-experiments-group-renderer",b,function(){I({className:"experiment-group-title"},function(){O(a.title)});
$v(a.studies)})}
function Yv(a,b){M(a,"ytm-experiments-study-renderer",b,function(){$v(a.items)})}
function Zv(a,b){b||(b={});b["data-joined$"]=C(function(){return a.optInButton.toggleButtonRenderer.isToggled});
var c=!(!a.ineligibleBadge||!a.ineligibleBadge.metadataBadgeRenderer);c&&(b.className="ineligible");M(a,"ytm-experiments-study-item-renderer",b,function(){I({className:"experiments-study-item-description",onclick:function(){if(c)Kp(function(){O(ar(a.ineligibleBadge.metadataBadgeRenderer.label||""))});
else{var d=a.optInButton.toggleButtonRenderer;(d=d.isToggled?d.toggledServiceEndpoint:d.defaultServiceEndpoint)&&a.optInButton.toggleButtonRenderer&&G(d,a.optInButton.toggleButtonRenderer,!0)}}},function(){O(a.label)});
c||$v(a.optInButton)})}
;var aw=W({experimentsListRenderer:function(a,b){M(a,"ytm-experiments-list-renderer",b,function(){$v(a.contents)})}}),bw=ro("ytm-experiments",function(){return{R:function(a){I({className:"ytm-experiments-buttons"},function(){eo(null,{l:"Default",
onclick:function(){gc.remove("EXPERIMENTS_DEBUG","/",".youtube.com");window.location.reload()}},function(){u("Default")});
eo(null,{l:"None",onclick:function(){gc.set("EXPERIMENTS_DEBUG","ZERO",-1,"/",".youtube.com");window.location.reload()}},function(){u("None")});
eo(null,{l:"Done",onclick:function(){window.location="/"}},function(){u("Done")})});
I({className:"ytm-experiments-buttons"},function(){I({},function(){u(w("MWEB_EAC","N/A"))});
I({},function(){u(w("MWEB_SAC","N/A"))})});
I({className:"ytm-experiments-search"},function(){Dn({type$:"text",placeholder$:"Search Experiments",oninput:function(b){var c=b.target.value;b="/experiments";var d="?";0<c.length&&(b+=d+"query="+c,d="&");c=og(Q().href,"client");null!=c&&(b+=d+"client="+c);up(b)}})});
aw(a.content)}}});var So,cw,dw;function ew(){So&&!Q().hash&&Ro(!0)}
function fw(a,b){So||(cw=b,dw=a,window.addEventListener("hashchange",ew),window.addEventListener("updateui",gw),window.addEventListener("state-navigatestart",hw),So=document.createElement("fullscreen-overlay"),document.body.appendChild(So),gw(),Ro(!0))}
function gw(){Mg(So,function(){H(dw,{},function(){cw()})})}
function hw(){So&&(Ro(!1),document.body.removeChild(So),So=null,window.removeEventListener("hashchange",ew),window.removeEventListener("updateui",gw),window.removeEventListener("state-navigatestart",hw))}
;var iw=W({buttonRenderer:Z});function jw(a,b){a&&I({className:"unlimited-family-interstitial-buttons",onclick:function(){var c=a.buttonRenderer;c&&c.navigationEndpoint||hw()}},function(){iw(a)});
b&&I({className:"unlimited-family-interstitial-buttons"},function(){iw(b)})}
function kw(a){"#dialog"==Q().hash&&Tp();fw("ytm-unlimited-family-message-interstitial-renderer",function(){I({className:"unlimited-family-interstitial-content-container"},function(){a.thumbnail&&Y(a.thumbnail,{className:"unlimited-family-message-thumbnail",alt:""});J({className:"unlimited-family-interstitial-title"},function(){O(a.title)});
K({className:"unlimited-family-interstitial-content"},function(){O(a.content)});
a.footer&&K({className:"unlimited-family-message-footer"},function(){O(a.footer)})});
I({className:"unlimited-family-interstitial-buttons-container"},function(){jw(a.dismissButton,a.actionButton)})})}
;function lw(a,b){var c=b.name,d=b.oa,e=nn(pc("radio"));H("c3-material-radio",a,function(){Dn({id:e,type:"radio",name:c},function(f){"checked"in a&&(f.checked=!!a.checked)});
En({htmlFor:e.toString()},d)})}
;var mw=W({buttonRenderer:Z}),nw;function ow(a,b){a.forEach(function(c){var d=c.selectRadioButtonRenderer;d&&(!nw&&d.isDefault&&(nw=d),void 0===d._isSelected&&(d._isSelected=d.isDefault),I({className:"membership-collision-select-radio-buttons"},function(){lw({onchange:function(){nw&&(nw._isSelected=!1);d&&(d._isSelected=!0,nw=d,P())},
checked:d._isSelected},{name:null,oa:function(){O(d.label)}});
d.selectButton.buttonRenderer.serviceEndpoint?I({className:"unlimited-family-interstitial-buttons-container",hidden:!d._isSelected},function(){mw(d.selectButton)}):I({className:"unlimited-family-interstitial-buttons-container",
hidden:!d._isSelected,onclick:function(){return b.onKeepClickedCallback()}},function(){mw(d.selectButton)})}))})}
;var pw=W({unlimitedFamilyMessageInterstitialRenderer:kw,unlimitedMembershipCollisionRenderer:function(a,b){fw("ytm-unlimited-membership-collision-renderer",function(){I(null,function(){J({className:"membership-collision-title"},function(){O(a.title)});
K({className:"membership-collision-content"},function(){O(a.content)});
ow(a.selectRadioButtons,b)})})}});
function qw(a){M(a,"ytm-join-family",{},function(){a.collisionRenderer?pw(a.collisionRenderer,{onKeepClickedCallback:function(){var b=a.confirmationRenderer;hw();pw(b)}}):pw(a.confirmationRenderer)})}
;var rw=W({sectionListRenderer:Lv});function sw(a){M(a,"ytm-search",{ka:"results"},function(){rw(a.contents)})}
;var tw=W({buttonRenderer:Z});function uw(a,b){Zp({header:a.title&&function(){J(null,function(){O(a.title)})},
content:function(){a.dialogMessages.forEach(function(c){K({className:"secondary-text confirm-dialog-messages"},function(){O(c)})})},
buttons:function(){a.primaryIsCancel&&tw(a.confirmButton);tw(a.cancelButton,{md:function(){return vw(a)}});
!a.primaryIsCancel&&tw(a.confirmButton)},
rb:function(){if(a.onClosedActions)for(var c=ca(a.onClosedActions),d=c.next();!d.done;d=c.next())dn(d.value,{w:a,A:a})},
Mb:b&&b.stayOpenOnClick,Va:function(){if(a.onOpenCommands)for(var c=ca(a.onOpenCommands),d=c.next();!d.done;d=c.next())G(d.value,a,!0)},
Ta:function(){return vw(a)},
data:a})}
function vw(a){if(a.onDismissCommands)for(var b=ca(a.onDismissCommands),c=b.next();!c.done;c=b.next())G(c.value,a,!0)}
;var ww=W({confirmDialogRenderer:uw});function xw(a,b){M(a,"ytm-setting-action-renderer",b,function(){I({onclick:function(){ww(a.confirmDialog)}},function(){J({className:"setting-title"},function(){O(a.title)});
O(a.summary)})})}
;function yw(a,b){M(a,"ytm-setting-boolean-renderer",b,function(){void 0==a.enabled&&a.itemId&&(a.enabled=zw(a.itemId));I(null,function(){a.title?O(a.title):O(a.summary)});
ft({},{ariaLabel:"",checked:!!a.enabled,onclick:function(){var c=a.enabled?a.disableServiceEndpoint:a.enableServiceEndpoint;c&&(G(c,a,!0),a.enabled=!a.enabled,P())}})})}
function zw(a){Lk.O();switch(a){case "SAFETY_MODE":return Ok(0,58);default:return!1}}
;var Aw=W({settingNotificationItemRenderer:function(a){M(a,"ytm-setting-notification-item-renderer",null,function(){I({className:"setting-notification-item-renderer-description"},function(){O(a.title)});
wn({onclick:function(){return G(E(function(){return a.serviceEndpoint}),a,!0)}},function(){O(a.actionDesc)})})}});
function Bw(a){M(a,"ytm-setting-notification-list-renderer",null,function(){zn(null,function(){O(a.title)});
Aw(a.items)})}
;function Cw(a){N(a.navigationEndpoint,{className:"setting-generic-read-only-item-endpoint"},function(){I({className:"setting-generic-read-only-item-title"},function(){O(a.title)});
I({},function(){O(a.summary)})})}
;function Dw(a,b){M(a,"ytm-setting-read-only-item-renderer",b,function(){Cw({title:a.title||a.settingStatusText,summary:a.summary,navigationEndpoint:a.navigationEndpoint})})}
;var Fw=W({settingMenuItemRenderer:Ew});function Gw(a){M(a,"ytm-setting-single-option-menu-renderer",{onclick:function(){ap({content:function(){Fw(a.items)},
na:!0,L:F.N})}},function(){I(null,function(){return O(a.title)});
u(Hw(Iw(a.itemId),a.items))})}
function Ew(a){M(a,"ytm-setting-menu-item-renderer",{onclick:function(b){b.stopPropagation();G(a.updateServiceEndpoint,a,!0)}},function(){u(a.name)})}
function Hw(a,b){for(var c=0;c<b.length;c++){var d=b[c].settingMenuItemRenderer;if(d.value==a)return d.name}return a}
function Iw(a){var b=Lk.O();switch(a){case "I18N_LANGUAGE":return b.get("hl")||w("INNERTUBE_CONTEXT_HL",void 0);case "I18N_REGION":return b.get("gl")||w("INNERTUBE_CONTEXT_GL",void 0);default:throw Error("Unable to get currently selected client preference: "+a);}}
;var Jw=W({settingActionRenderer:xw,settingBooleanRenderer:yw,settingReadOnlyItemRenderer:Dw,settingSingleOptionMenuRenderer:Gw,settingNotificationListRenderer:Bw});function Kw(a,b){var c=b=void 0===b?{}:b,d=c.D,e=d?"EXPAND_LESS":"EXPAND_MORE",f=void 0!==d;I({className:"setting-generic-category-title",onclick:c.onclick},function(){I({className:"setting-generic-category-title-block"},function(){O(a)});
f&&V(e)})}
var Lw=ro("ytm-setting-generic-category",function(a,b,c){function d(){e=!e;b()}
var e=!!c.focused;return{R:function(f){var g=f.children;Kw(f.title,{onclick:d,D:e});e&&g()}}});
function Mw(a){N(a.navigationEndpoint,{className:"setting-generic-category"},function(){Kw(a.title)})}
;var Nw=W({settingActionRenderer:xw,settingBooleanRenderer:yw,settingReadOnlyItemRenderer:Dw,settingSingleOptionMenuRenderer:Gw,settingCategorySectionRenderer:function(a){M(a,"ytm-setting-category-section-renderer",null,function(){a.title&&zn(null,function(){O(a.title)});
Jw(a.items)})},
settingNotificationListRenderer:Bw});var Ow=W({settingCategoryCollectionRenderer:function(a){Lw({title:a.title,children:function(){Nw(a.items)},
focused:a.focused})},
subscriptionProductsSettingCategoryEntryRenderer:function(a,b){M(a,"ytm-subscription-products-setting-category-entry-renderer",b,function(){Mw(a)})}});
function Pw(a){M(a,"ytm-settings",{},function(){Ow(a.items)})}
;var Qw=W({sponsorshipsAccountBarRenderer:function(a,b){M(a,"ytm-sponsorships-account-bar-renderer",b,function(){Y(a.viewerImage,{className:"sponsorships-account-bar-image",alt:""});I({className:"sponsorships-account-bar-text"},function(){K({className:"sponsorships-account-bar-display-name"},function(){O(a.displayName)});
K({className:"sponsorships-account-bar-email"},function(){O(a.email)})})})},
sectionListRenderer:Lv});var Rw=W({c4TabbedHeaderRenderer:Pr,sponsorshipsOfferListRenderer:function(a,b){M(a,"ytm-sponsorships-offer-list-renderer",b,function(){Qw(a.appBar);Qw(a.accountBar);Qw(a.itemSection)})}});
function Sw(a){M(a,"ytm-sponsorship",{},function(){Rw(a.header);a.offers&&a.offers.errorMessageRenderer?a.offers.errorMessageRenderer.errorMessages.forEach(function(b){I({className:"offer-error"},function(){O(b)})}):Rw(a.offers,{isChannel:!(!a.header||!a.header.c4TabbedHeaderRenderer)})})}
;var Tw=F.ta,Uw=W({buttonRenderer:Z});function Vw(a){(a=hd(a.target,"ytm-alert-with-button-renderer"))&&(a.style.display="none")}
;var Ww=W({buttonRenderer:Z});function Xw(a){M(a,"ytm-player-error-message-renderer",{},function(){I({className:"playability-status-message"},function(){O(a.reason)});
I({className:"playability-status-message"},function(){O(a.subreason)});
I({className:"playability-status-message"},function(){O(a.learnMore)});
a.proceedButton&&I({className:"playability-status-signin-button"},function(){Ww(a.proceedButton)})})}
;var Yw=W({buttonRenderer:Z,toggleButtonRenderer:Cr});function Zw(a){ko({l:F.Cc,disabled:!a},a,{className:"icon"},function(){V("SKIP_PREVIOUS")})}
function $w(a){ko({l:F.oc,disabled:!a},a,{className:"icon"},function(){V("SKIP_NEXT")})}
function ax(a){var b=a.data,c=a.La;H("ytm-playlist-controls",{},function(){I({className:"playlist-controls-primary"},function(){Zw(c.od);$w(c.next)});
I({className:"playlist-controls-secondary"},function(){Yw(b.saveButton);Yw(b.shareButton)})})}
;function bx(a,b){var c=a.data,d=a.D;H("ytm-playlist-panel-header",b,function(){I({className:"playlist-panel-header-metadata"},function(){zn({className:"playlist-panel-header-title"},function(){O(c.titleText,{H:!0})});
I({className:"small-text playlist-panel-header-subhead"},function(){c.isInfinite||u(c.currentIndex+1+" / "+c.totalVideos+" ");L({className:"playlist-panel-header-byline"},function(){O(c.shortBylineText)})})});
eo({className:"icon playlist-panel-header-icon"},null,function(){V(d?"EXPAND_LESS":"EXPAND_MORE")})})}
;var cx=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs});function dx(a,b){M(a,"ytm-playlist-panel-video-renderer",b,function(){tn(a,function(){ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
lengthText:a.lengthText,headline:E(function(){return a.title}),
F:[a.shortBylineText],overlay:function(){ts(function(){return cx(a.thumbnailOverlays)})}})})})}
;var fx=W({playlistPanelVideoRenderer:ex});function ex(a){dx(a,{className:"item",selected$:a.selected})}
function gx(a){I({className:"playlist-content section"},function(){wv({items:a.contents||[],Ca:fx,ya:6,chunkSize:6})})}
var hx=ro("ytm-playlist",function(a,b){function c(){d=!d;b()}
var d=!0;return{R:function(e){var f=e.data,g=e.La;a.setAttribute("aria-expanded",d);bx({data:f,D:d},{onclick:c});I({hidden:!d},function(){ax({data:f,La:g});gx(f)})},
da:function(e,f){e.data!=f.data&&(d=!0)}}});function ix(a){if(!a)return!0;if(a=a.playabilityStatus)if("OK"===a.status||(a=a.errorScreen)&&(a.ypcTrailerRenderer||a.playerLegacyDesktopYpcTrailerRenderer))return!0;return!1}
;var jx=window.loadPlayerConfig,kx=null,lx=null;p("yt.mobile.isMobilePersistentUniplayer",function(){return!0},void 0);
p("yt.mobile.supportsMwebAutonav",function(){return!0},void 0);
function mx(a){var b=a.player,c=C(function(){return a.response.webWatchNextResponseExtensionData.relatedVideoArgs}),d="watch"==a.page;
kp.setAttribute("playable",ix(a.playerResponse));kp.hidden=!d;if(b!=kx||c!=lx)kx=b,lx=c,kp.setAttribute("loading",!kx),jx(kx,lx)}
function nx(){var a=C(function(){return kp.firstElementChild.sendAbandonmentPing});
a&&a()}
function ox(){var a=iq();if(!a)return{};var b=a.getCurrentTime();a=a.getOption("cc","track")||a.getOption("captions","track");return{minutes:String(Math.floor(b/60)),seconds:String(Math.floor(b)%60),vssId:a&&a.vss_id}}
function px(){var a=iq();if(a)a.onAdUxClicked("action-companion")}
function qx(){window.addEventListener(Vb?"touchstart":"click",function(){w("MWEB_SUPPORTS_AUTOPLAY",!1)&&(w("MWEB_BLAZERPLAYER",!1)?Fk.fillPool(4):Fk.activateTags())},{capture:!0,
passive:!0});window.addEventListener("beforeunload",nx);window.addEventListener("state-navigatestart",nx);window.addEventListener("state-navigatestart",Zm);kp.addEventListener("click",function(a){hd(a.target,"a")&&a.stopPropagation()})}
;var rx=W({buttonRenderer:Z,menuRenderer:gs});function sx(a){var b=C(function(){return a.buttonRenderer.navigationEndpoint});
b&&fo(b);px()}
function tx(a){a.iconImage&&a.iconImage.thumbnail&&Lr(a.iconImage.thumbnail,{className:"companion-ad-icon"});I({className:"companion-ad-body"},function(){I({className:"companion-ad-text-container"},function(){a.headline&&I({className:"companion-ad-headline"},function(){u(a.headline.text||"")});
I({className:"companion-ad-description-container"},function(){Rr({className:"companion-ad-badge","aria-label$":F.Tb},function(){u(F.Ga)});
a.description&&I({className:"companion-ad-description"},function(){u(a.description.text||"")})})});
a.actionButton&&I({className:"companion-ad-button",onclick:function(){return sx(a.actionButton)}},function(){rx(a.actionButton)})})}
;var ux=W({actionCompanionAdRenderer:function(a,b){a&&M(a,"ytm-companion-ad-renderer",b,function(c){Km(c,"_seen",!0,function(){a.impressionCommands&&a.impressionCommands.forEach(function(d){fo(d)})});
I({className:"companion-ad-container"},function(){I({className:"companion-ad-body-container",onclick:function(){var d;if(d=a)a.actionButton||(a.navigationEndpoint?(fo(a.navigationEndpoint),G(a.navigationEndpoint,a,!1),px()):x(Error("Companion navigationEndpoint is missing."))),d=void 0;return d}},function(){a&&tx(a)});
rx(a.menu,{className:"companion-ad-menu"})})})}}),vx=!1;
function wx(){var a=r("yt.www.ads.eventcache.getLastCompanionData");return a&&a()}
function xx(a){var b=Zq(Mm,"companionSlotRenderer");b&&(b.actionCompanionAdRenderer=C(function(){return a.detail.actionCompanionAdRenderer}),P())}
;function yx(a){var b=C(function(){return a.autoplay.autoplay}),c=C(function(){return b.sets[0].previousButtonVideo}),d=C(function(){return b.sets[0].nextButtonVideo});
return{od:c,next:d}}
;var zx=W({itemSectionRenderer:Dv,companionSlotRenderer:function(a,b){if(!vx){vx=!0;var c=wx();c&&!Jb(c)&&(a.actionCompanionAdRenderer=c.actionCompanionAdRenderer);window.addEventListener("yt-update-c3-companion",xx)}M(a,"ytm-companion-slot",b,function(){ux(a)})},
commentSectionRenderer:tv("commentSectionRenderer")});var Ax=W({singleColumnWatchNextResults:function(a,b){var c=C(function(){return a.results.results.contents})||[],d=C(function(){return a.playlist.playlist}),e=yx(a);
M(a,"ytm-single-column-watch-next-results-renderer",b,function(){d&&hx({data:d,La:e});c.forEach(function(f){var g=f.itemSectionRenderer;zx(f,{className:"scwnr-content",isWatch:!0,"data-content-type$":g&&1<g.contents.length?"related":"result"})})})},
alertWithButtonRenderer:function(a,b){M(a,"ytm-alert-with-button-renderer",b,function(c){c.setAttribute("data-type",a.type);V(C(function(){return a.icon.iconType}),{className:"alert-with-button-icon"});
O(a.text);I({className:"alert-with-button-button"},function(){Uw(a.button)});
I({className:"alert-with-button-close-icon",onclick:Vw,"aria-label$":Tw},function(){V("DISMISSAL")})})}});
function Bx(a){I({className:"player-size"},function(){if(!ix(a)&&a&&a.playabilityStatus){var b=E(function(){return a.playabilityStatus.errorScreen.playerErrorMessageRenderer}),c=E(function(){return a.playabilityStatus.reason});
I({className:"cover center"},function(){a&&a.videoDetails&&a.videoDetails.thumbnail&&Y(a.videoDetails.thumbnail,{className:"cover",alt:""});b?Xw(b):c&&I({className:"playability-status-message"},function(){u(c)})})}})}
function Cx(a,b){M(a,"ytm-watch",{ka:"related"},function(){Bx(b);b&&b.playabilityStatus&&b.playabilityStatus.messageRenderers&&Ax(b.playabilityStatus.messageRenderers);Ax(a.contents)})}
;var Dx;function Ex(a){Dx||(Dx=document.createElement("div"),Dx.id=nn(pc("mealbar")),document.body.insertBefore(Dx,document.body.firstChild),so("state-navigatestart",Fx));Mg(Dx,Gx,a)}
function Gx(a){H("ytm-mealbar",{className:a.className||""},function(){I({className:"mealbar-icon-and-text"},function(){a.Nb?Y(a.Nb,{className:"mealbar-icon",alt:""}):a.iconImage&&V(a.iconImage.iconType,{className:"mealbar-icon"});I(null,function(){I({className:"mealbar-title"},function(){a.title&&O(a.title)});
(a.texts||[]).forEach(function(b){I({className:"mealbar-body secondary-text"},function(){O(b)})})});
a.ub&&a.Bb&&I({className:"mealbar-dismissal-icon"},function(){return Jo({name:"DISMISSAL",l:a.ub,onclick:function(){return a.Bb()}})})});
a.buttons&&I({className:"mealbar-buttons cbox"},function(){a.buttons()})})}
function Fx(){Dx&&(document.body.removeChild(Dx),Dx=null)}
;var Hx=W({buttonRenderer:Z}),Ix;function Jx(a,b){Fx();"true"==gc.get("HideTicker","false")||M(a,"ytm-consent-bump-renderer",b,function(){var c=C(function(){return a.remindMeLaterButton.buttonRenderer.accessibility.label});
Ex({iconImage:a.securityIcon,title:a.alertMessage,ub:c,Bb:Kx,buttons:function(){I({onclick:function(){return Lx(a)},
className:"consent-bump-button-wrapper"},function(){Hx(a.expressFlowButton)});
Hx(a.reviewButton)}})})}
function Mx(a){Ix&&Mg(Ix,function(){M(a,"ytm-consent-bump-renderer",{className:"dialog-container"},function(){I({className:"dialog"},function(){I({className:"dialog-header"},function(){Y(a.interstitialThumbnail,{className:"consent-bump-lightbox-image",alt:""},452);J({className:"consent-bump-lightbox-header"},function(){O(a.interstitialTitle)})});
I({className:"dialog-body secondary-text"},function(){O(a.interstitialMessage)});
I({className:"dialog-buttons"},function(){I({onclick:function(){return Lx(a)},
className:"consent-bump-button-wrapper"},function(){Hx(a.expressFlowButton)});
Hx(a.reviewButton)})})})})}
function Kx(){Oi("HideTicker","true",86400);P()}
function Nx(a,b){if(!Qi(a.origin))return!1;switch(a.data){case "cb-express-done":return b.b=!0,Fx(),Ix&&(Uo(Ix),document.body.removeChild(Ix),Ix=null),b.onExpressFlowSuccess&&G(b.onExpressFlowSuccess,b,!0),!0;case "cb-ui-navigate":var c=C(function(){return b.reviewButton.buttonRenderer.navigationEndpoint.urlEndpoint.url});
c=Hc(Mc(c));Zc(Q(),c);return!0}return!1}
function Lx(a){var b=a.expressFlowUrl;if(b&&"https"==(dg(b)[1]||null)&&"consent.youtube.com"==fg(b)&&"/setx"==eg(dg(b)[5]||null)){b=Vc(pc("Express consent url provided by the server"),b);var c=document.createElement("iframe");c.hidden=!0;document.body.appendChild(c);window.addEventListener("message",function f(e){Nx(e,a)&&window.removeEventListener("message",f)});
c.src=wc(b)}else throw Error("Incorrect express flow url received from server");}
;var Qx=W({accountItem:Ox,accountItemSectionHeaderRenderer:Px});function Px(a,b){M(a,"ytm-account-item-section-header-renderer",b,function(){O(a.title)})}
function Ox(a,b){M(a,"ytm-account-item-renderer",b,function(){wn({className:"account-item-endpoint","aria-label$":$q(a.accountName),"aria-selected$":a.isSelected,role$:"option",onclick:function(){return Rx(a)}},function(){I({className:"cbox"},function(){a.accountPhoto&&Lr(a.accountPhoto,{className:"account-item-icon"});
I({className:"account-item-content"},function(){I(null,function(){O(a.accountName)});
I({className:"secondary-text small-text"},function(){O(a.accountByline)})});
a.isSelected&&V("CHECK_BLUE",{className:"selected-account"})})})})}
function Rx(a){var b=C(function(){return a.serviceEndpoint.selectActiveIdentityEndpoint.supportedTokens}),c=C(function(){return b.filter(function(d){return d.accountSigninToken})[0].accountSigninToken.signinUrl});
c&&up(c)}
;var Sx=W({accountItemSectionRenderer:function(a,b){var c=nn(pc("ytm-account-item-section-renderer"));M(a,"ytm-account-item-section-renderer",b,function(){Qx(a.header,{id:c});I({className:"contents",role$:"listbox","aria-labelledby$":c},function(){Qx(a.contents)})})}});var Tx=F.ta,Wx=W({accountSectionListRenderer:function(a,b){M(a,"ytm-account-section-list-renderer",b,function(){Sx(a.contents)})},
activeAccountHeaderRenderer:Zr,compactLinkRenderer:kt,multiPageMenuSectionRenderer:Ux,simpleMenuHeaderRenderer:Vx});function Vx(a,b){M(a,"ytm-simple-menu-header-renderer",b,function(){Jo({name:"DISMISSAL",l:Tx,onclick:Yo});yn({className:"ytm-simple-menu-header-title"},function(){return O(a.title)})})}
function Ux(a,b){M(a,"ytm-multi-page-menu-section-renderer",b,function(){Wx(a.items)})}
function Xx(){Mq().forEach(function(a){a.href?Oq(a.href,{className:"multi-page-menu-system-link"},function(){V(a.iconType);u(a.text)}):a.onclick&&wn({onclick:a.onclick,
className:"multi-page-menu-system-link"},function(){V(a.iconType);u(a.text)})})}
function Yx(a){return!!C(function(){return a.sections[0].accountSectionListRenderer})}
function Zx(a,b){ap({content:function(){M(a,"ytm-multi-page-menu-renderer",b,function(){I({onclick:function(c){c.stopPropagation()}},function(){Wx(a.title);
Wx(a.header);Wx(a.sections);Wx(a.footer);Yx(a)||I({className:"multi-page-menu-system-link-list"},function(){Xx()})})})},
na:!0,xa:!0,L:F.N})}
;var $x=F.eb,ay=F.fb,by=F.Ia,cy=F.kb,dy=F.mb,ey=F.Sb,gy=W({topbarMenuButtonRenderer:fy});function hy(){yo("searching")}
function iy(){vo()}
function jy(a){Im(function(){ip.content=getComputedStyle(a).backgroundColor})}
function fy(a,b){M(a,"ytm-topbar-menu-button-renderer",b,function(){Jo({onclick:function(){return ky(a)},
l:ey,className:"topbar-menu-button-avatar-button",content:function(){a.avatar?Lr(a.avatar,{className:"topbar-menu-button-avatar"}):V(C(function(){return a.icon.iconType}))}})})}
function ky(a){var b=C(function(){return a.menuRenderer.multiPageMenuRenderer}),c=C(function(){return a.menuRequest});
b&&Zx(b,{});a._isBusy||c&&G(c,a,!0)}
function ly(a,b,c,d){b=b||{};var e=mn(),f="#searching"==Q().hash,g=f?"searching":a,h=!(!d&&!Om),l=f?Je:null,n="searching"===g||"select_site"===g,q=!n;a={id:e};w("MWEB_STICKY_PLAYER",!1)&&(a.className="sticky-player");M(b,"ytm-mobile-topbar-renderer",a,function(){f&&Vo($x,vo);Bn({className:"mobile-topbar-header cbox",key:"header","data-mode$":g,ontouchmove:l},function(v){Km(v,"mode",g,function(){return jy(v)});
n?wn({className:"mobile-topbar-back-arrow","aria-label$":f?$x:ay,onclick:iy},function(){V("ARROW_BACK")}):my(function(){return V("LOGO",{className:"mobile-topbar-logo",
id$:"home-icon"})});
yp({Da:f},{className:"mobile-topbar-header-content search-mode"});I({className:"mobile-topbar-header-content non-search-mode cbox"},function(){ny(c,h);if(q){hp&&rp();y("mweb_new_search_header")&&1===np()||Jo({name:"SEARCH",l:dy,className:"topbar-menu-button-avatar-button",onclick:hy});var A=b;op()?oy("MORE_VERT_WHITE"):h?A.buttons?gy(A.buttons):oy():oy("MORE_VERT")}})})})}
function ny(a,b){var c=1===np(),d=3===np();document.title=a+("YouTube"==a?"":" - YouTube");var e=op()||b?"YouTube":a;c?y("mweb_new_search_header")?py(e):I({className:"clickable-title",onclick:hy},function(){return qy(e)}):e.startsWith("YouTube")&&!d?my(function(){return qy(e)},"clickable-title"):qy(e)}
function py(a){I({className:"search-bar"},function(){yn({className:"title search-bar-text","aria-label$":dy,role$:"button",onclick:hy},function(){u(a)});
Jo({name:"TUNE",className:"search-filter-icon topbar-menu-button-avatar-button"})})}
function ry(a,b){Oq(a,null,function(){oo(null,function(){return u(b)})})}
function my(a,b){wn({"aria-label$":by,"aria-role$":"link",className:["mobile-topbar-header-endpoint",b].join(" "),onclick:function(){Zc(Q(),"/")}},a)}
function qy(a){yn({className:"title mobile-topbar-title","aria-label$":a},function(){u(a)})}
function oy(a){bp({icon:void 0===a?"ACCOUNT_CIRCLE":a,label:ey,content:function(){Ap()||ry(zp(),cy);Mq().forEach(function(b){b.href?ry(b.href,b.text):b.onclick&&oo({onclick:b.onclick},function(){return u(b.text)})})},
L:F.N})}
;var ty=W({pivotBarItemRenderer:sy}),uy={navigationEndpoint:cr("/"),icon:{iconType:"TAB_HOME"},title:{simpleText:F.Ia},pivotIdentifier:"FEwhat_to_watch"},vy={navigationEndpoint:cr("/feed/trending"),icon:{iconType:"TAB_TRENDING"},title:{simpleText:F.Gc},pivotIdentifier:"FEtrending"},wy={navigationEndpoint:cr("/feed/library"),icon:{iconType:"PIVOT_LIBRARY"},title:{simpleText:F.cc},pivotIdentifier:"FElibrary"};function sy(a,b){M(a,"ytm-pivot-bar-item-renderer",b,function(){xy(a,b.selectedTabIdentifier)})}
function yy(a){[uy,vy,wy].forEach(function(b){xy(b,a,!0)})}
function xy(a,b,c){var d="pivot-bar-item-tab";(void 0===c?0:c)&&(d+=" pivot-bar-fallback-item");a.pivotIdentifier&&a.pivotIdentifier==(b||Om)?wn({role$:"tab","aria-selected$":"true",className:d,onclick:zy},function(){return Ay(a)}):N(a.navigationEndpoint,{role$:"tab",
className:d,onclick:function(){Om=a.pivotIdentifier}},function(){return Ay(a)})}
function Ay(a){V(E(function(){return a.icon.iconType}));
I({className:"pivot-bar-item-title"},function(){O(a.title)})}
function zy(){window.scrollTo({top:0,left:0,behavior:"smooth"})}
function By(a,b){a=a||{};var c={role$:"tablist"};y("mweb_pivot_bar_at_top")&&(c.className="top-pivot-bar");M(a,"ytm-pivot-bar-renderer",c,function(){a.items?ty(a.items,{selectedTabIdentifier:b}):yy(b)});
Om=""}
;var Cy=W({buttonRenderer:Z});function Dy(){if(y("mweb_hide_pivot_bar_on_child_pages")){var a=Mm;a=a&&a.response;if(!(a=!a.response||Ey(a.response))&&(a=y("mweb_fetch_guide_chunk_last")))a:switch(mp(Q().href)){case "/":case "/feed/trending":case "/feed/subscriptions":case "/feed/library":a=!0;break a;default:a=!1}if(!a)return!1}if(a=!!w("MWEB_SHOW_PIVOT_BAR")&&!op())a=!lb(mp(Q().href),"/select_site");return a}
function Ey(a){var b=C(function(){return a.contents.singleColumnBrowseResultsRenderer.tabs});
if(!b)return null;b=(b=Yq(b,"selected",!0))&&b.tabIdentifier;if(!b)return null;var c=C(function(){return Nm.items.filter(function(d){return d.pivotBarRenderer})[0].pivotBarRenderer});
return c?c.items.map(function(d){return C(function(){return d.pivotBarItemRenderer.pivotIdentifier})}).includes(b)?b:null:null}
;var Fy=F.Wb,Gy=F.ac,Hy=F.pc,Iy=W({alertRenderer:function(a,b){M(a,"ytm-alert-renderer",b,function(){O(a.text)})},
consentBumpRenderer:function(a,b){a.b||(a.forceConsent?document.querySelector(".consent-bump-lightbox")||(Ix=document.createElement("div"),Ix.className="consent-bump-lightbox",document.body.appendChild(Ix),To(Ix),Mx(a),Ix.querySelector(".consent-bump-lightbox-header").focus()):Jx(a,b))},
mealbarPromoRenderer:tv("mealbarPromoRenderer",{Wa:!1}),surveyTriggerRenderer:tv("surveyTriggerRenderer",{Wa:!1}),unlimitedUserNotificationRenderer:function(a,b){M(a,"ytm-unlimited-user-notification-renderer",b,function(){I({className:"unlimited-user-notification-infobox"},function(){J({className:"unlimited-user-notification-title"},function(){O(a.title)});
a.messages.forEach(function(c){K({className:"unlimited-user-notification-message"},function(){O(c)})})});
I({className:"unlimited-user-notification-action-button-container"},function(){Cy(a.actionButton)})})}});
function Jy(a){var b=a.page,c=a.response,d=c.responseContext;d=d&&d.errors?d.errors:[];var e=c.alerts||[];Ky(c,b);Iy(e);Ly(b,c,a.playerResponse);My(d);Iy(c.survey);b=c.overlay?c.overlay:a.playerResponse&&a.playerResponse.messages&&a.playerResponse.messages.length?a.playerResponse.messages[0]:void 0;Iy(b);I({key:"spinner",className:"spinner",hidden:!a.loading})}
function Ky(a,b){if(w("MWEB_SHOW_PIVOT_BAR")){var c=Nm,d=C(function(){return c.items.filter(function(h){return h.pivotBarRenderer})[0].pivotBarRenderer}),e=C(function(){return c.items.filter(function(h){return h.mobileTopbarRenderer})[0].mobileTopbarRenderer}),f=Ey(a),g=br(b,a);
ly(b,e,g,f);Dy()&&By(d,f)}else jr(b,a)}
function Ly(a,b,c){Ny("browse"===a,function(){return Wv(b)});
Ny("watch"===a,function(){return Cx(b,c)});
Ny("search"===a,function(){return sw(b)});
Ny("experiments"===a,function(){return bw(b,{})});
Ny("select_site"===a,function(){return Pw(b)});
Ny("sponsorship"===a,function(){return Sw(b)});
Ny("join_family"===a,function(){return qw(b)})}
function Ny(a,b){I({hidden:!a,className:"page-container"},function(){sn(a,function(){return b()})})}
function My(a){a instanceof Array||(a=[Gy],navigator.onLine||(V("OFFLINE_CLOUD",{className:"content-error-icon"}),I({className:"content-error-title"},function(){u(Fy)}),a=[Hy]));
a.forEach(function(b){I({className:"content-error"},function(){u(b)})})}
;var Py=new lf(Oy,200),Qy=0;function Ry(){Cj({yb:!0,Fb:!0});p("ytglobal.ytUtilActivityCallback_",function(){xo("user-activity")},void 0);
window.addEventListener("popstate",function(){uo||Dj()})}
function Sy(){op()&&Ty()}
function Ty(){document.getElementById("player-container-id").className=kp.offsetHeight>.6*window.innerHeight?"player-container":"player-container sticky-player"}
function Uy(){Py.Na()}
function Oy(){var a=mn();a=document.getElementById(a.toString());var b=window.pageYOffset;op()?(Ty(),a.className="sticky-player in"):a.className=Qy>b?"sticky-player in":48<=b?"sticky-player out":"sticky-player in";Qy=b}
;var Vy={},Wy=(Vy[0]="browse",Vy[1]="results",Vy[2]="watch",Vy[3]="home",Vy[4]="channels",Vy);function Xy(a,b){this.f=a;this.g=b}
Xy.prototype.b=function(){tl(this.f,this.g)};
function Yy(a,b){this.f=a;this.g=b}
Yy.prototype.b=function(){Sl(this.f,this.g)};
function Zy(a){this.f=a}
Zy.prototype.b=function(){var a=np(this.f),b=Wy[a],c=op(this.f)?["pbs"]:["cpt"];a=op(this.f)?["vpl","pbs"]:["vpl"];bh("TIMING_AFT_KEYS",c);bh("TIMING_ACTION",b);b=w("TIMING_INFO",{});for(var d in b)yl(d,b[d]);yl("is_nav",1);(d=kk())&&yl("csn",d);(d=w("PREVIOUS_ACTION",void 0))&&yl("pa",d);b=zl();b.p=w("CLIENT_PROTOCOL")||"unknown";b.t=w("CLIENT_TRANSPORT")||"unknown";yl("yt_vis",El());if("cold"==b.yt_lt){d=cl.timing||{};d.navigationStart&&(tl("srt",d.responseStart),1!=b.prerender&&xl(d.navigationStart));
b=dl(d);0<b&&tl("fpt",b);tl("nreqs",d.requestStart,void 0);tl("nress",d.responseStart,void 0);tl("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(tl("nrs",d.redirectStart,void 0),tl("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(tl("ndnss",d.domainLookupStart,void 0),tl("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(tl("ntcps",d.connectStart,void 0),tl("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=d.navigationStart&&0<d.connectEnd-
d.secureConnectionStart&&(tl("nstcps",d.secureConnectionStart,void 0),tl("ntcpe",d.connectEnd,void 0));cl.getEntriesByType&&Ll();d=[];if(document.querySelector&&cl&&cl.getEntriesByName)for(var e in ll)b=ll[e],Ml(e,b)&&d.push(b);d.length&&yl("rc",d.join(","))}Il(void 0)&&(e={},e.actionType=ol[w("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",d=Jl(void 0),Uj(e,d));if("cold"==zl().yt_lt){d=ul();e=Hl();for(var f in d)lb(f,"_")||"tick_"+f in e||vl(f,d[f]);f=zl();for(var g in f)"info_"+g in e||Al(g,
f[g])}Nl(!0);if(a)for(g=0;g<a.length;g++)f=a[g],e=w("TIMING_WAIT"),e&&f in e||((e=w("TIMING_WAIT",void 0))?e.push(f):bh("TIMING_WAIT",[f]));wl();Sl("pis",window.pis)};
function $y(a,b){this.f=a;this.g=b}
$y.prototype.b=function(){Fl("n");Pl(void 0);Gl();Ql(!1,void 0);w("TIMING_ACTION")&&bh("PREVIOUS_ACTION",w("TIMING_ACTION"));bh("TIMING_ACTION","");Nl(!1);bh("TIMING_AFT_KEYS",[]);yl("yt_lt","warm");bh("TIMING_ACTION","");bh("TIMING_WAIT",[]);fl();xl();az.push(new Zy(this.f));xl(this.g)};
var az=new $m;function bz(a,b){az.push(new Yy(a,b))}
;function cz(a){return(C(function(){return a.responseContext.serviceTrackingParams})||[]).filter(function(b){return"CSI"==b.service}).map(function(b){return b.params}).reduce(function(b,c){return b.concat(c)},[]).reduce(function(b,c){b[c.key]=c.value;
return b},Object.create(null))}
;var dz=window.history;function ez(){return C(function(){return dz.state.previousUrl})}
function fz(){return C(function(){return dz.state.params})}
function gz(a){var b=a.replace,c=a.href,d=a.params;a=a.Gb;try{var e={},f=(e.params=d,e.previousUrl=a,e);b?dz.replaceState(f,"",c):dz.pushState(f,"",c)}catch(g){throw setTimeout(function(){Zc(Q(),c)}),Error("Failed to update history state: "+g.message);
}}
;function hz(a){var b=0;return function(c,d,e,f){b++;var g=b;return a(c,d,e,f).tee(function(h){if(g==b)return h})}}
;function iz(a){function b(n){n=void 0===n?a.Oa():n;a.sd(n);a.Qb(n)}
function c(n,q,v,A,D){D=void 0===D?!0:D;if(a.gd(n))setTimeout(function(){a.Qc(n,q)});
else{xo("state-navigatestart",{href:n,Ya:v});var S=Object.assign({},q,v);v=D?location.href:ez();l(n,S,A,v).tee(function(ba){var pa=ba.value;ba.done?d(n,pa,S):(xo("state-progress",{data:pa}),b(pa))});
A=a.Oc(n,location.href,a.Oa(),A);A.replace||n===location.href||location.hash?g(n,A.data,q):f(n,A.data,q);A.b||window.scrollTo(0,0)}}
function d(n,q){xo("state-progress",{data:q});xo("state-responsereceived",{href:n,data:q});ve(function(){e(q);xo("state-navigateend",{href:n,data:q})})}
function e(n){b(n);h=Q().pathname+Q().search;xo("state-change")}
function f(n,q,v){gz({replace:!1,href:n,params:v,Gb:location.href});e(q)}
function g(n,q,v){gz({replace:!0,href:n,params:v,Gb:ez()});e(q)}
var h,l=hz(a.makeRequest);window.addEventListener("popstate",function(){h!=Q().pathname+Q().search&&(c(location.href,fz()||{},{},null,!1),h=Q().pathname+Q().search)});
window.addEventListener("hashchange",function(){b()});
return{navigate:c,ab:e,replaceState:g,Tc:d}}
;function jz(){function a(f,g,h,l){setTimeout(function(){to.then(function(){d.navigate(f,g,h,l);e=!0})})}
function b(f,g,h,l){"_blank"!=l&&!c.Nc||!1===c.td?setTimeout(function(){to.then(function(){return Zc(Q(),f)})}):$c(f)}
var c={gd:kz,Qc:lz,makeRequest:mz,Oc:nz,Qb:oz,Yd:!1,Oa:Pm,sd:Qm,td:pz,Nc:!1},d=iz(c),e=!1;window.addEventListener("click",function(f){var g=hd(f.target,"A"),h=g&&g.href;if(h){f.preventDefault();f=g.params||{};var l={},n=g.target;n||(h?lp(h).hostname||Q().hostname:"")!=Q().hostname?b(h,f,g,n):a(h,f,l,g)}});
window.addEventListener("navigate",function(f){var g=f.detail;f=g.href;var h=g.params||{},l=g.Ya||{};(g=g.target)||(f?lp(f).hostname||Q().hostname:"")!=Q().hostname?b(f,h,null,g):a(f,h,l,null)});
window.addEventListener("updateui",function(){c.Qb(c.Oa())});
return{jd:function(f,g){e||(xo("initialdata",{href:f}),d.Tc(f,g))},
ab:d.ab}}
;function qz(a){function b(){var d=4===a.readyState,e=a.responseText;if(d&&200!=a.status){var f=new Jt;f.responseText=e;Nt(c,f)}else Mt(c,{done:d,value:e});d&&a.removeEventListener("readystatechange",b)}
var c=new Kt;4===a.readyState?b():a.addEventListener("readystatechange",b);return new Qt(c)}
function rz(a){return new Me(function(b,c){qz(a).tee(function(d){d.done&&b(d.value)},function(d){c(d)})})}
;function sz(){var a=0,b={};return function(c){var d=c.done,e=c.value;c=e.timingInfo;e=e.response;if(lb(e,"[")||d){e=e.split("\r\n").filter(function(g){return 1<g.length}).slice(a).map(function(g){return mb(g,",")?g.slice(0,-1):g}).map(function(g){try{return JSON.parse(g)}catch(h){}});
var f=e[e.length-1]?e.length:e.length-1;if(!(0>=f)||d)return a+=f,b=Object.assign.apply(Object,[{},b].concat(da(e))),{done:d,value:{timingInfo:c,response:b}}}}}
;function Tt(a,b,c){b=void 0===b?Jm:b;b=Object.assign({pbj:1},b);b=lg(a,b);a=sz();(c=vi(b,{withCredentials:!0,headers:{"x-youtube-sts":"17990","x-spf-referer":c},format:"RAW"}))?c=qz(c).tee(tz(c)).tee(a):(c=new Kt,Nt(c,new Jt),c=new Qt(c));return c}
function tz(a){var b=[];return function(c){var d=c.done;c=c.value;var e=d?a.getResponseHeader("content-length"):"",f=d?a.getResponseHeader("content-encoding"):"";b.push($g());return{done:d,value:{timingInfo:{chunks:b,contentLength:e,Kc:f},response:c}}}}
;var uz=0;function vz(a,b){b=void 0===b?$g():b;Lm(function(){var c=b;c=void 0===c?$g():c;az.push(new Xy(a,c))})}
function wz(a){var b=a.detail.href;Lm(function(){bz("yt_lt","cold");az.push(new Zy(b))})}
function xz(){Lm(function(){bz("prt",1)})}
function yz(a){a=a.detail;var b=a.href,c=a.Ya,d=$g();Lm(function(){az.push(new $y(b,d));var e=c&&"1"==c.autonav,f=og(Q().href,"list");e&&bz("nr","an");f&&bz("yt_pl",1)});
uz++}
function zz(a){if(a.timingInfo){var b=a.timingInfo.contentLength,c=a.timingInfo.Kc;vz("srt",a.timingInfo.chunks[0]);Lm(function(){bz("rcl",b);bz("rce",c)})}}
function Az(a){Lm(function(){var b=C(function(){return a.timing.info}),c;
for(c in b)bz(c,b[c])})}
function Bz(a){a=a.detail.data;var b=Mm;a.Xc||a.response.player&&!b.response.player&&vz("cfg")}
function Cz(){var a=window.innerHeight-((document.body||document.documentElement).scrollTop||window.pageYOffset||0);return[].concat(da(document.querySelectorAll("img"))).filter(function(b){b=b.getBoundingClientRect();return 0<b.height&&b.top<a})}
function Dz(a){a=a.getBoundingClientRect();return 50<a.height&&50<a.width}
function Ez(){var a=Cz().filter(Dz),b=uz;Pp(a).then(function(c){if(b==uz){var d=c.length;c=c.filter(function(e){return"load"==e}).length;
bz("vpni",d);bz("vpil",c);vz("vpl")}})}
function Fz(a){a=a.detail.data;zz(a);Az(a.response);vz("pdr");Im(Ez)}
function Gz(a){a=cz(a);for(var b in a)bz(b,a[b])}
function Hz(a){var b=a.detail.data;vz("cpt");Lm(function(){Gz(b.response.response);Gz(b.response.playerResponse)})}
function Iz(){var a=gc.get("H2_SERVER_PUSH","")==ep;Lm(function(){bz("h2pc",a?"1":"0")})}
;var Jz=["redirect_state","service"];function Kz(){var a="";Q().hash.substring(1).split("&").forEach(function(b){Jz.find(function(c){return c.length===b.length?c===b:c+"="===b.substring(0,c.length+1)})&&(a+=(a?"&":"#")+b)});
Q().hash=a}
;function Lz(a){var b=new Image;Xc(b,a)}
function Mz(a){return C(function(){return a.response.preconnect})}
function Nz(a){a=Mz(a.detail.data);!Mz(Mm)&&a&&a.forEach(Lz)}
;function Oz(a,b,c){if("experiments"===mp(a).split("/")[1]&&"experiments"==mp(b).split("/")[1]&&c)return{replace:!1,data:c}}
;function Pz(a,b){b=void 0===b?{}:b;return{response:{page:pp(a)||"",response:{contents:b,responseContext:{}},loading:!0}}}
;function Qz(a){return{replace:!1,data:Pz(a)}}
;function Rz(a){if(y("mweb_ghost_card_placeholder_data")&&3===np(a)){if(w("IS_TABLET",!1)){var b=[];for(var c=0;3>c;c++)b.push({compactVideoRenderer:{}});b={itemSectionRenderer:{contents:[{shelfRenderer:{content:{verticalListRenderer:{items:b}}}}]}};c=[];for(var d=0;4>d;d++)c.push(b);b=c}else for(b=[],c=0;4>c;c++)b.push({itemSectionRenderer:{contents:[{videoWithContextRenderer:{}}]}});return{replace:!0,data:Pz(a,{singleColumnBrowseResultsRenderer:{tabs:[{tabRenderer:{selected:!0,content:{sectionListRenderer:{contents:b}}}}]}})}}}
;function Sz(a,b,c){var d=np(b),e=np(a);b=og(b,"list");a=og(a,"list");if(b&&b==a&&d==e)return{replace:!1,data:{response:Object.assign({},c.response,{player:null})}}}
;function Tz(a,b,c,d){if(op(a)&&d&&(b=ao(d)))return{replace:!1,data:Pz(a,{singleColumnWatchNextResults:{results:{results:{contents:[{companionSlotRenderer:{hack:!0},itemSectionRenderer:{contents:[{slimVideoMetadataRenderer:{_isPlaceholderData:!0,title:b.title||b.headline}}]}}]}}}})}}
;function nz(a,b,c,d){return[Rz,Sz,Tz,Oz,Qz].reduce(function(e,f){return e||f(a,b,c,d)},null)}
;var Uz=!1;function Vz(a){a.detail.isCurrentlyFullscreen?vo():yo("fauxfullscreen")}
function Wz(){if(Uz||"#fauxfullscreen"==Q().hash){var a=!Uz,b=iq();document.body.setAttribute("faux-fullscreen",a);b.setSize(NaN,NaN);b.setFauxFullscreen(a);a?window.addEventListener("touchmove",Je):window.removeEventListener("touchmove",Je);Uz=a}}
;var Xz;function Yz(){return C(function(){return Xz.contents.singleColumnWatchNextResults.autoplay.autoplay})}
function Zz(){var a=Yz();return C(function(){return a.sets[0].autoplayVideo})}
function $z(){var a=Yz();return C(function(){return a.sets[0].mode})}
function aA(){var a=Yz();return C(function(){return a.webAutoplayRendererData.autoplayCount})}
function bA(a){if(a&&(!a.isMutedByMutedAutoplay||!a.isMutedByMutedAutoplay())){var b=Zz();a=og(Q().href,"list");if(b&&a){a=aA();var c=gn(b);if(c){var d=b.clickTrackingParams;b=b.watchEndpoint.params;var e=$z();up(c,{itct:d,mode:e,params:b},{autonav:!0,playnext:a})}}}}
function cA(){w("MWEB_BLAZERPLAYER",!1)?window.addEventListener("playback-end",function(a){bA(a.target)}):window.addEventListener("player-state-change",function(a){0==a.detail.state&&bA(a.target)})}
;function kz(a){a=mp(a).split("/")[1];var b=y("enable_c3_premium");return!{"":!0,channel:!0,create_channel:y("mweb_c3_create_channel"),experiments:y("mweb_c3_experiment_page"),feed:!0,gaming:!0,join_family:y("enable_c3_join_family"),musicpremium:b,paid_memberships:b,playlist:!0,premium:b,red:b,results:!0,select_site:y("mweb_c3_settings_page"),show:!0,sponsorship:y("enable_c3_sponsorship"),user:!0,watch:!0}[a]}
;function dA(a){var b=C(function(){return a.player.args}),c=ez();
b&&c&&(b.external_list=op(c))}
;function eA(a){return a.filter(function(b){return"SEE_OTHER"==b.code}).map(function(b){return b.argument})[0]}
function fA(a){if(lb(location.pathname,"/channel")){var b=C(function(){return a.response.responseContext.errors.error});
if(b&&(b=eA(b)))switch(b[0]){case "REDIRECT_TO_VIDEO":up("/watch?v="+b[1]);break;case "REDIRECT_TO_URL":up(String(b[1]));break;default:up("/channel/"+b[0])}}}
function gA(a){var b=a.detail.data;Im(function(){return fA(b.response)})}
;function hA(a,b){a.video_masthead_ad_quartile_urls={quartile_0_url:C(function(){return b.startUrls[0]}),
quartile_25_url:C(function(){return b.firstQuartileUrls[0]}),
quartile_50_url:C(function(){return b.secondQuartileUrls[0]}),
quartile_75_url:C(function(){return b.thirdQuartileUrls[0]}),
quartile_100_url:C(function(){return b.completeUrls[0]})}}
function iA(a,b){a.pyv_billable_url=C(function(){return b.pyvBillingUrl});
a.pyv_conv_url=C(function(){return b.pyvConversionUrl})}
function jA(a,b){var c=C(function(){return a.player.args}),d=C(function(){return b.c3PlaybackTracking});
c&&d&&(c.adformat=b._adformat,c.el=b._el,hA(c,d),iA(c,d))}
;function kA(a){var b=C(function(){return a.player.assets});
b&&(b.js=w("PLAYER_JS_URL")||b.js,b.css=w("PLAYER_CSS_URL")||b.css)}
;var lA=W({buttonRenderer:Z,toggleButtonRenderer:Cr});function mA(a,b){M(a,"ytm-notification-action-renderer",b,function(){I({className:"notification-action-response-text"},function(){O(a.responseText)});
I({className:"notification-action-button",role$:"button",tabIndex:"0"},function(){lA(a.actionButton)});
Im(function(){var c=document.querySelector(".notification-action-button");c&&c.focus()})})}
;var nA=W({notificationActionRenderer:mA});function oA(){window.addEventListener("yt-show-toast",function(a){var b=a.detail;b&&Kp(function(){if(b.notificationActionRenderer)nA(b);else if(b.toastMessage&&b.toastActionMessage){var c=b.toastActionUrl;nA({notificationActionRenderer:{responseText:ar(b.toastMessage),actionButton:{buttonRenderer:{style:"STYLE_BLUE_TEXT",size:"SIZE_DEFAULT",isDisabled:!1,text:ar(b.toastActionMessage),navigationEndpoint:{urlEndpoint:{url:c},commandMetadata:{webCommandMetadata:{url:c}}}}}}})}})})}
;var pA,qA;function rA(){var a=C(function(){return iq().getPlayerState()});
return-1==a||1==a||3==a}
function sA(a,b){if(rA()){for(var c=ca(a.showWarningActions||[]),d=c.next();!d.done;d=c.next())dn(d.value,{w:{},A:{}});mk("YOU_THERE_EVENT_TYPE_PROMPT_SHOWN",b);qA=setTimeout(function(){if(rA()){for(var e=ca(a.showPausedActions||[]),f=e.next();!f.done;f=e.next())dn(f.value,{w:{},A:{}});mk("YOU_THERE_EVENT_TYPE_PLAYBACK_PAUSED",b)}},a.playbackPauseDelayMs)}}
function tA(){pA&&(clearTimeout(pA),pA=0);qA&&(clearTimeout(qA),qA=0)}
function uA(){var a=Mm;if(a&&a.response&&a.response.playerResponse&&a.response.playerResponse.messages&&(a=a.response.playerResponse.messages.filter(function(e){return e.youThereRenderer}))&&a.length)var b=a[0].youThereRenderer;
if(b&&(tA(),b.configData&&b.configData.youThereData)){var c=kk(),d=b.configData.youThereData;pA=setTimeout(function(){return sA(d,c)},1E3*Math.max(1,d.promptDelaySec))}}
function vA(){if(pA||qA)tA(),mk("YOU_THERE_EVENT_TYPE_LACT_RESET",kk()),Lj(),uj()}
;function wA(a){var b=E(function(){return a.detail.data.response.response.responseContext});
if(b){var c=b.webResponseContextExtensionData&&b.webResponseContextExtensionData.ytConfigData||{};b=c.csn;c=c.rootVisualElementType;b&&c&&lk(b,c)}}
;var pz=!Rb,xA=!1;function oz(a){a.response&&(mx(a.response),Xz=a.response.response);a.response.loading||vz("ips");Mg(jp,Jy,a.response);a.response.loading||vz("ipc");document.body.setAttribute("has-pivot-bar",Dy()&&!y("mweb_pivot_bar_at_top"));document.body.setAttribute("has-safe-area-in-max",Vb)}
function yA(a){return{page:Mm.response&&Mm.response.page?Mm.response.page:pp(Q().href),response:{response:{responseContext:{errors:a}}}}}
function lz(a,b){var c=Object.assign({disable_polymer:"true"},b);Zc(Q(),lg(a,c))}
function mz(a,b,c,d){var e={};xA&&!op(a)&&(xA=!1,e={wlfg:!0});b=Object.assign({lact:Fj()},b,e);var f=c?ao(c)||{}:{};return Tt(a,b,d).tee(function(g){var h=g.done,l=g.value;g=l.timingInfo;l=l.response;if(l.reload)Q().reload();else if(l.redirect)Zc(window.location,l.redirect);else return dA(l),kA(l),jA(l,f),l=h?l:Object.assign({},Mm.response,l),{done:h,value:{timingInfo:g,response:l}}},function(g){.01>Math.random()&&x(g);
return{done:!0,value:yA(g)}})}
function zA(){Iz();y("mweb_h2_push_selectively")&&Oi("H2_SERVER_PUSH",ep,7889238,"youtube.com",!0);Zj||(Cj(),gk("FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"),mh(Qa(gk,"FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"),3E4),ak.push(aj(document,"visibilitychange",fk)),Zj=!0);hk(w("EVENT_ID",void 0))}
;function AA(a){return Zq(a.w,"commentSectionRenderer")}
function BA(a){return a.toggleMenuServiceItemRenderer}
function CA(a){return a.commentThreadRenderer}
function DA(a){return E(function(){return a.comment.commentRenderer.commentId})}
function EA(a,b){return db(b,function(c){return DA(CA(c))==a}).commentThreadRenderer}
function FA(a,b){var c=EA(a,b);return E(function(){return c.comment.commentRenderer})}
function GA(a,b,c){a=EA(a,c).replies.commentRepliesRenderer.contents;var d=db(a,function(e){return e.commentRenderer.commentId==b});
return E(function(){return d.commentRenderer})}
function HA(a){gb(a,function(b){var c=CA(b);return E(function(){return c.comment.commentRenderer.pinnedCommentBadge})})}
function IA(a,b){gb(b,function(c){return DA(CA(c))==a})}
function JA(a,b,c){b=EA(b,c).replies.commentRepliesRenderer.contents;gb(b,function(d){return d.commentRenderer.commentId==a})}
function KA(a,b){var c=AA(b).items,d=a.parentCommentId,e=a.commentId;d?JA(e,d,c):IA(e,c);P()}
function LA(a,b){var c=AA(b).items,d=a.parentCommentId,e=a.commentId,f="FEEDBACK_HEART"==a.actionResult.feedback;c=d?GA(d,e,c):FA(e,c);c.creatorHeart.creatorHeartRenderer.isHearted=f;X(c.actionMenu.menuRenderer.items,b.A,BA).isToggled=f;P()}
;function MA(a,b){var c=X(b.w,b.A,function(e){return e.toggleButtonRenderer}),d=!c.isToggled;
X(b.w,b.A,function(e){return e.experimentsGroupRenderer}).studies.forEach(function(e){e.experimentsStudyRenderer.items.forEach(function(f){f.experimentsStudyItemRenderer.optInButton&&(f.experimentsStudyItemRenderer.optInButton.toggleButtonRenderer.isToggled=!1)})});
c.isToggled=d;Kp(function(){O(a.text)},1E3,!1)}
;function NA(a,b){b._title=a;b._errorMessageForTitle=a.trim().length?150<a.length?F.Ac:-1!=a.indexOf("<")||-1!=a.indexOf(">")?F.yc:null:F.zc;b.createAction&&(b.createAction.buttonRenderer.isDisabled=!!b._errorMessageForTitle);P()}
;var PA=W({privacyDropdownItemRenderer:OA,dropdownItemRenderer:OA});function QA(a,b){M(a,"ytm-dropdown-renderer",b,function(){var c=b&&b.vb?b.vb:nn(pc("dropdown"));a.label&&En({className:"dropdown-label",htmlFor:c.toString()},function(){u(a.label)});
hq({},{id:c},function(){b&&b.xb&&Fn({className:"option",disabled:!0,selected:!0,value$:""});PA(a.entries)})})}
function OA(a){Fn({className:"option",selected:a.isSelected,value$:a.int32Value},function(){O(a.label)})}
;function RA(a,b){M(a,"ytm-text-input-form-field-renderer",b,function(){var c=nn(pc("input"));a.label&&En({htmlFor:c.toString()},function(){O(a.label)});
Dn({dir:void 0!==a.value&&0<a.value.length?"auto":void 0,id:c,maxlength:a.maxCharacterLimit,placeholder:a.placeholderText||"",required:b&&void 0!==b.required?b.required:!0,value$:a.value})})}
;var SA=W({buttonRenderer:Z,compactLinkRenderer:kt,dropdownRenderer:QA,textInputFormFieldRenderer:RA});function TA(a){Zp({Mb:!0,header:function(){J({className:"add-to-playlist-create-header"},function(){u(F.cb)})},
content:function(){SA(a.nameInput,{oninput:function(b){return NA(b.target.value,a)}});
SA(a.privacyInput,{className:"add-to-playlist-privacy-input",onchange:function(b){a._privacy=b.target.value}});
(a._errorMessageForTitle||a._errorMessageFromResponse)&&I({className:"add-to-playlist-errors"},function(){u(a._errorMessageForTitle||a._errorMessageFromResponse)})},
buttons:function(){eo({onclick:Tp},null,function(){u(F.N)});
SA(a.createAction)},
data:a})}
;var UA=W({addToPlaylistCreateRenderer:function(a,b){a.createAction.buttonRenderer.serviceEndpoint=a.serviceEndpoint;a.createAction.buttonRenderer.isDisabled=!0;M(a,"ytm-add-to-playlist-create-renderer",b,function(){SA(a.openCreateLink,{className:"add-to-playlist-create-link secondary-text",onclick:function(){return TA(a)}})})},
playlistAddToOptionRenderer:function(a,b){M(a,"ytm-playlist-add-to-option-renderer",b,function(){I({className:"playlist-add-to-option secondary-text",onclick:function(){Tp();a.addToPlaylistServiceEndpoint&&G(a.addToPlaylistServiceEndpoint,a,!0)}},function(){I({className:"playlist-add-to-option-label"},function(){I({className:"playlist-add-to-option-title"},function(){O(a.title)});
a.shortBylineText&&I({className:"playlist-add-to-option-byline"},function(){O(a.shortBylineText)})});
V(a.privacyIcon.iconType,{className:"playlist-add-to-option-icon"})})})}});var VA=W({buttonRenderer:Z});function WA(a){Zp({header:function(){I({className:"donation-amount-picker-header"},function(){a.campaignThumbnail&&Y(a.campaignThumbnail,{className:"donation-amount-picker-campaign-thumbnail",alt:""});J({className:"donation-amount-picker-title"},function(){O(a.pickerTitle)})})},
content:function(){I({className:"donation-amount-picker-line-item"},function(){O(a.nonprofitTitle)});
I({className:"donation-amount-picker-nonprofit-subtitle"},function(){O(a.nonprofitSubtitle)});
I({className:"donation-amount-picker-buttons donation-amount-picker-line-item"},function(b){a.suggestedAmounts.forEach(function(c){lw({onchange:function(){var d=parseInt(c.amountMicros,10);XA(a,d);isNaN(d)?b.classList.add("custom"):b.classList.remove("custom")}},{name:null,
oa:function(){O(c.label)}})});
I({className:"donation-amount-picker-custom"},function(c){I({className:"donation-amount-picker-edit"},function(){O(a.currencySymbol);Dn({className:"donation-amount-picker-input",id:null,type:"number",maxlength:10,onchange:function(d){d=d.target;if(""==d.value)XA(a,NaN);else{d=Math.floor(1E6*parseFloat(d.value));if(d<parseFloat(a.minAmountMicros)||d>parseFloat(a.maxAmountMicros))d=NaN;XA(a,d);isNaN(d)?c.classList.add("error"):c.classList.remove("error")}},
required:!0})});
I({className:"donation-amount-picker-error"},function(){O(a.amountError)})})})},
buttons:function(){I({className:"donation-amount-picker-continue"},function(){VA(a.donateButton)})},
data:a})}
function XA(a,b){a.donateButton.buttonRenderer.command.ypcGetCartEndpoint.donationAmountMicros=b.toString();isNaN(b)?YA(a,!1):YA(a,!0)}
function YA(a,b){a.donateButton.buttonRenderer.isDisabled!=!b&&(a.donateButton.buttonRenderer.isDisabled=!b,P())}
;var ZA=W({buttonRenderer:Z});function $A(a){Zp({header:function(){a.donationIcon&&I({},function(){Y(a.donationIcon,{className:"donation-post-transaction-icon",alt:""})});
J({className:"donation-post-transaction-title"},function(){O(a.thankYouMessage)});
I({className:"donation-post-transaction-title"},function(){O(a.additionalInfo)})},
content:function(){I({className:"donation-post-transaction-creator-message"},function(){a.creatorMessage.thumbnail&&Lr(a.creatorMessage.thumbnail,{className:"donation-post-transaction-avatar",alt:""});I({className:"donation-post-transaction-message-right"},function(){An({className:"donation-post-transaction-message"},function(){O(a.creatorMessage.description)});
I({},function(){O(a.creatorMessage.title)})})})},
buttons:function(){I({className:"donation-post-transaction-button"},function(){ZA(a.shareButton)});
I({className:"donation-post-transaction-button"},function(){ZA(a.doneButton)})},
data:a})}
;function aB(a){Zp({header:function(){J(null,function(){O(a.title)})},
content:function(){I({className:"fancy-dismissable-dialog-content"},function(){O(a.dialogMessage)})},
buttons:function(){Mo(null,a.confirmLabel)},
data:a})}
;function bB(a,b){var c=b.zb,d=b.minutes,e=b.seconds,f=b.Ab,g=b.Lb;H("ytm-timestamp-input",a,function(){O(c);I({className:"ytm-timestamp-input"},function(){Dn({className:"timestamp-input-minutes timestamp-number-input",min:0,max:999,oninput:function(h){return f(h.target.value)},
type:"number",value:d});I({className:"timestamp-input-separator"},function(){u(" : ")});
Dn({className:"timestamp-input-seconds timestamp-number-input",min:0,max:59,oninput:function(h){return g(h.target.value)},
type:"number",value:e})})})}
;var cB=W({dropdownRenderer:QA,buttonRenderer:Z});function dB(a){var b=!a.timestampLabel||!(!a._minutes||!a._seconds);a.submitButton.buttonRenderer.isDisabled=!a._flag_description||!a._flag_affiliation||!a._flag_issue_type||!b;P()}
function eB(a){if(void 0==a._minutes&&void 0==a._seconds){var b=ox(),c=b.seconds;a._minutes=b.minutes;a._seconds=c}}
;var fB=W({dropdownRenderer:QA,buttonRenderer:Z});function gB(a){var b=a.submitButton.buttonRenderer.isDisabled;a.submitButton.buttonRenderer.isDisabled=!(!a.timestampLabel||a._minutes&&a._seconds);a.submitButton.buttonRenderer.isDisabled!=b&&P()}
function hB(a){var b=ox(),c=b.seconds,d=b.vssId;a._minutes=b.minutes;a._seconds=c;a._vssId=d}
;function iB(a,b){var c=b.oa,d=nn(pc("checkbox"));H("c3-material-checkbox",a,function(){Dn({id:d,className:"c3-material-checkbox-input",type:"checkbox"},function(e){"checked"in a&&(e.checked=!!a.checked)});
En({className:"c3-material-checkbox-label",htmlFor:d.toString()},c)})}
;var kB=W({optionSelectableItemRenderer:jB});function jB(a){Fn({className:"option",data:a},function(){O(a.text)})}
function lB(a){a.subOptions&&a._isSelected&&hq({onchange:mB},null,function(){kB(a.subOptions)})}
function nB(a,b){window.addEventListener("change",function d(){a.parentNode&&a.checked||(b(),window.removeEventListener("change",d,!0))},!0)}
function oB(a){a._isSelected=!1;(a.subOptions||[]).forEach(function(b){oB(b.optionSelectableItemRenderer)})}
function pB(a,b){b._isSelected=!0;b.clickCommands&&b.clickCommands.forEach(function(c){G(c,b,!0)});
nB(a.target,function(){return oB(b)});
P()}
function mB(a){a=a.target;var b=a.selectedIndex;[].concat(da(a.options)).forEach(function(c,d){if(d==b){var e=c.data.clickCommands;e&&e.forEach(function(f){G(f,c.data,!0)})}c.data._isSelected=d==b})}
;var qB=W({optionSelectableItemRenderer:function(a,b){M(a,"ytm-option-selectable-item-renderer",b,function(){lw({onchange:function(c){return pB(c,a)}},{name:b.name,
oa:function(){O(a.text)}});
lB(a)})}});
function rB(a){var b=sB(a);a._selectedValue=C(function(){return b.submitEndpoint});
a._selectedNavigationValue=C(function(){return b.submitNavigationEndpoint});
a._selectedDialog=C(function(){return b.confirmDialog})}
function sB(a){a=Yq(a,"_isSelected",!0);if(!a)return null;var b=a.subOptions;return b?sB(b):a}
;function tB(){return{signalServiceEndpoint:{signal:"CLIENT_SIGNAL",actions:[{signalAction:{signal:"SUBMIT_FORM"}}]}}}
;var uB=W({optionsRenderer:function(a,b){var c=nn(pc("options"));M(a,"ytm-options-renderer",b,function(){qB(a.items,{name:c,onchange:function(){return rB(a)}})})},
buttonRenderer:Z,booleanFormFieldV2Renderer:function(a,b){M(a,"ytm-boolean-form-field-v2-renderer",b,function(){iB({onchange:function(c){c.target.checked?G(a.enableCommand,a,!0):G(a.disableCommand,a,!0)}},{oa:function(){O(a.label)}})})}});var vB;function wB(a){a&&(vB||(vB=document.createElement("div"),vB.id="surveys",document.body.insertBefore(vB,document.body.firstChild)),so("state-navigatestart",xB),vB&&Mg(vB,yB,{content:a,collapsedContent:void 0}))}
function xB(){if(vB){var a=document.getElementById("home-icon");a&&a.focus();document.body.removeChild(vB);vB=null}}
function yB(a){var b=!!a.collapsedContent,c={};b?(c.role$="button",c.onclick=function(){wB(a.content)}):c["aria-live$"]="polite";
c.className=b?"collapsed":"expanded";c["aria-expanded$"]=!b;H("c3-survey",c,function(){b?(V("EXPAND_LESS",{className:"c3-survey-expand"}),a.collapsedContent()):a.content()})}
;var zB=W({buttonRenderer:Z});var AB=W({buttonRenderer:Z});function BB(a,b){a&&I({className:"unlimited-family-interstitial-buttons",onclick:function(){var c=a.buttonRenderer;c&&c.navigationEndpoint||hw()}},function(){AB(a)});
b&&I({className:"unlimited-family-interstitial-buttons",onclick:function(){return CB(b.buttonRenderer)}},function(){AB(b)})}
function CB(a){(C(function(){return a.navigationEndpoint.browseEndpoint})||C(function(){return a.serviceEndpoint.ypcGetCartEndpoint}))&&hw()}
function DB(a){a&&I({className:"unlimited-family-profile-secondary-thumbnails"},function(){a.forEach(function(b){Y(b,{className:"unlimited-family-profile-secondary-thumbnail",alt:""})})})}
function EB(a){fw("ytm-unlimited-family-profile-interstitial-renderer",function(){I({className:"unlimited-family-interstitial-content-container"},function(){I({className:"unlimited-family-interstitial-member-container"},function(){a.mainThumbnail&&Y(a.mainThumbnail,{className:"unlimited-family-profile-main-thumbnail",alt:""});DB(a.secondaryThumbnails);I({className:"unlimited-family-interstitial-member-info"},function(){O(a.memberInfo)});
I({className:"unlimited-family-interstitial-member-title"},function(){O(a.memberTitle)});
I({className:"unlimited-family-interstitial-manage-button"},function(){AB(a.manageButton)})});
I({className:"unlimited-family-interstitial-title"},function(){O(a.additionalInfoHeader)});
I({className:"unlimited-family-interstitial-content"},function(){O(a.additionalInfo)})});
I({className:"unlimited-family-interstitial-buttons-container"},function(){BB(a.dismissButton,a.actionButton)})})}
;var FB=W({addToPlaylistRenderer:function(a){Zp({header:function(){J({className:"add-to-playlist-title"},function(){u(F.cb)})},
content:function(){UA(a.playlists,{className:"add-to-playlist-option"});UA(a.actions)},
buttons:function(){I({className:"add-to-playlist-button-wrapper"},function(){eo({className:"add-to-playlist-button"},null,function(){u(F.N)})})},
data:a})},
confirmDialogRenderer:uw,donationAmountPickerRenderer:WA,donationPostTransactionRenderer:$A,fancyDismissibleDialogRenderer:aB,legalReportDetailsFormRenderer:function(a){a.timestampLabel&&eB(a);a._flag_description=a._flag_description||"";a._flag_issue_type=a._flag_issue_type||"";Zp({header:function(){J(null,function(){O(a.title)})},
content:function(){a.timestampLabel&&bB(a,{zb:a.timestampLabel,minutes:a._minutes,seconds:a._seconds,Ab:function(b){a._minutes!=b&&(a._minutes=b,dB(a))},
Lb:function(b){a._seconds!=b&&(a._seconds=b,dB(a))}});
In({className:"legal-report-details-form-description-input",maxlength:500,rows:4,required:!0,placeholder:$q(a.descriptionHint),oninput:function(b){b=b.target.value;a._flag_description!=b&&(a._flag_description=b,dB(a))}},function(){a._flag_description&&u(a._flag_description)});
cB(a.issueTypeDropdown,{className:"legal-report-details-form-issue-type",xb:!0,onchange:function(b){b=b.target.value;a._flag_issue_type!=b&&(a._flag_issue_type=b,dB(a))}});
cB(a.affiliationDropdown,{className:"legal-report-details-form-affiliation",xb:!0,onchange:function(b){b=b.target.value;a._flag_affiliation!=b&&(a._flag_affiliation=b,dB(a))}});
Dn({className:"legal-report-details-form-name-input",maxlength:250,placeholder:$q(a.nameHint),oninput:function(b){a._flag_full_name=b.target.value}});
I({className:"legal-report-details-form-name-subtext"},function(){O(a.nameSubtext)});
I({className:"legal-report-details-form-footer-text"},function(){O(a.footerText)})},
buttons:function(){I({className:"legal-report-details-form-footer"},function(){O(a.requiredLabel);I({className:"legal-report-details-form-buttons"},function(){cB(a.cancelButton);cB(a.submitButton)})})},
data:a})},
membershipPostCancelRenderer:tv("membershipPostCancelRenderer"),multiPageMenuRenderer:Zx,notificationActionRenderer:mA,reportDetailsFormRenderer:function(a){a.timestampLabel&&hB(a);a.submitButton.buttonRenderer.isDisabled=!1;Zp({header:function(){J(null,function(){O(a.title)})},
content:function(){a.timestampLabel&&bB(a,{zb:a.timestampLabel,minutes:a._minutes,seconds:a._seconds,Ab:function(b){a._minutes=b;gB(a)},
Lb:function(b){a._seconds=b;gB(a)}});
In({className:"report-details-form-description-input",maxlength:500,rows:4,required:!0,placeholder:$q(a.descriptionHint),oninput:function(b){a._flag_description=b.target.value;gB(a)}});
I({className:"report-details-form-footer"},function(){O(a.footer)})},
buttons:function(){fB(a.cancelButton);fB(a.submitButton)},
data:a})},
reportFormModalRenderer:function(a){a.submitButton.buttonRenderer.serviceEndpoint=tB();a.nextButton&&(a.nextButton.buttonRenderer.serviceEndpoint=tB());Zp({header:function(){J(null,function(){O(a.title)})},
content:function(){uB(a.optionsSupportedRenderers,{onchange:function(){var b=a.optionsSupportedRenderers.optionsRenderer._selectedValue||a.optionsSupportedRenderers.optionsRenderer._selectedNavigationValue||a.optionsSupportedRenderers.optionsRenderer._selectedDialog,c=a.submitButton.buttonRenderer.isDisabled;a.submitButton.buttonRenderer.isDisabled=!b;a.nextButton&&(a.nextButton.buttonRenderer.isDisabled=!b);c!=a.submitButton.buttonRenderer.isDisabled&&P()}});
a.footer&&I({className:"report-form-footer"},function(){O(a.footer)});
a._showLegalReportCheckbox&&uB(a.legalReportCheckbox,{className:"report-form-legal-report-checkbox",onchange:function(b){a._legalCheckboxChecked=b.target.checked}})},
buttons:function(){uB(a.cancelButton);a._canShowNextButton?uB(a.nextButton):uB(a.submitButton)},
data:a})},
sponsorshipsCelebrationRenderer:tv("sponsorshipsCelebrationRenderer"),surveyFollowUpRenderer:function(a){wB(function(){M(a,"ytm-survey-follow-up-renderer",{onclick:function(b){hd(b.target,"button")&&xB()}},function(){I({className:"ytm-survey-follow-up-header"},function(){O(a.description);
zB(a.dismissButton)});
I({className:"ytm-survey-follow-up-button"},function(){zB(a.followUpButton)});
document.querySelector("ytm-survey-follow-up-renderer button").focus()})})},
unlimitedFamilyMessageInterstitialRenderer:kw,unlimitedFamilyProfileInterstitialRenderer:EB});function GB(a){a=a.openPopupAction||a;var b=a.popupType,c=a.popup;Mm.response.popup=c;switch(b){case "TOAST":Kp(function(){FB(c)},a.durationHintMs,a.reusePopup);
break;case "DIALOG":case "SURVEY":FB(c);break;default:throw Error("Unhandled popup type: "+b);}}
;function HB(a){return X(a.w,a.A,function(b){return b.playlistVideoListRenderer})}
;var IB=["compactVideoRenderer","searchHistoryQueryRenderer","shelfRenderer","videoWithContextRenderer"],JB=W({notificationTextRenderer:function(a,b){M(a,"ytm-notification-text-renderer",b,function(){L({"aria-live$":"polite"},function(){O(a.successResponseText||a.responseText)})})}});
function KB(a){return IB.reduce(function(b,c){return b||a[c]},void 0)}
;function LB(a){return a.sectionListRenderer}
;var MB=W({confirmDialogRenderer:uw});function NB(a){if(a=X(a.w,a.A,function(c){return c.reportFormModalRenderer})){var b=a.optionsSupportedRenderers.optionsRenderer;
b._selectedDialog?(Zq(b._selectedDialog,"flagEndpoint").legalCheckboxChecked=a._legalCheckboxChecked,MB(b._selectedDialog)):b._selectedNavigationValue?G(b._selectedNavigationValue,a,!0):b._selectedValue&&(b._selectedValue.flagEndpoint.legalCheckboxChecked=a._legalCheckboxChecked,G(b._selectedValue,a,!0))}}
;function OB(a){return a.commentRenderer}
function PB(a){return a.toggleMenuServiceItemRenderer}
;function QB(a){var b=gn(a);b&&up(b,{itct:a.clickTrackingParams})}
;function RB(a){var b=C(function(){return a.dialog.fancyDismissibleDialogRenderer.dialogMessage});
b&&SB(b)}
function SB(a){a.runs&&a.runs.forEach(function(b){b.navigationEndpoint&&(b=b.navigationEndpoint,!b.commandMetadata&&b.urlEndpoint&&b.urlEndpoint.url&&(b.commandMetadata={webCommandMetadata:{url:b.urlEndpoint.url}}))})}
;var TB=W({fancyDismissibleDialogRenderer:aB});function UB(a){var b=Object.keys(a).filter(function(c){return mb(c,"Endpoint")})[0];
a=Object.keys(a).filter(function(c){return mb(c,"Command")})[0];
return b||a}
function VB(a,b){b=void 0===b?Jm:b;var c={sej:JSON.stringify(a)};c=Object.assign(c,b);var d=UB(a);d=mg("/service_ajax","name",d);return(c=vi(d,{method:"POST",T:c,format:"RAW"}))?rz(c).then(function(e){return JSON.parse(e)},function(e){e.responseText&&(e.response=JSON.parse(e.responseText));
throw e;}):Se(Error("XHR failed to initialize."))}
;function WB(a,b){return X(b.w,a,function(c){return c.channelCreationForm}).contents.createCoreIdentityChannelContentRenderer}
;var XB=W({confirmDialogRenderer:uw});function YB(a){return kb(Object.keys(a).map(function(b){return"playlistEditEndpoint"==b?a[b].clientActions||[]:a[b].actions||a[b].clientActions||[]}))}
;function ZB(a,b,c){var d=ca(YB(a));for(a=d.next();!a.done;a=d.next())dn(a.value,c);a=C(function(){return b.data.actions})||[];
d=ca(a);for(a=d.next();!a.done;a=d.next())dn(a.value,c);a=C(function(){return b.data.commands})||[];
a=ca(a);for(d=a.next();!d.done;d=a.next())dn(d.value,c);(a=C(function(){return b.data.command}))&&dn(a,c)}
;function $B(a,b){return X(b.w,a,function(c){return c.commentSimpleboxRenderer}).b}
;var aC=W({buttonRenderer:Z});var bC=W({commentReplyDialogRenderer:function(a){Zp({buttons:function(){aC(a.cancelButton);aC(a.replyButton)},
content:function(){In({className:"comment-reply-input","name:":"comment-reply",placeholder:$q(a.placeholderText),oninput:function(b){a.b=b.target.value}})},
data:a})}});function cC(a,b){var c=X(b.w,a,function(d){return d.commentReplyDialogRenderer});
if(c)return c.b}
;var dC={addToPlaylistRenderer:!0};function eC(a){return Object.keys(a).some(function(b){return b in dC})}
function fC(a){var b=C(function(){return a.data.contents[0]});
if(!b||!eC(b))return a;b={openPopupAction:{popupType:"DIALOG",popup:b}};a.data.actions||(a.data.actions=[]);a.data.actions.push(b);return a}
;function gC(a,b){a&&(a._isBusy=b,P())}
function hC(a,b,c){var d=X(b.w,b.A,function(e){return e.buttonRenderer||e.toggleButtonRenderer||e.topbarMenuButtonRenderer});
gC(d,!0);return VB(a,c).then(function(e){ZB(a,fC(e),b);gC(d,!1);return e},function(e){gC(d,!1);
throw e;})}
;function iC(a){return(a=X(a.w,a.A,function(b){return b.legalReportDetailsFormRenderer}))?{formData:a,
form:{flag_description:a._flag_description,flag_issue_type:a._flag_issue_type||jC(a),flag_affiliation:a._flag_affiliation||kC(a),flag_full_name:a._flag_full_name,minutes:a._minutes,seconds:a._seconds}}:void 0}
function lC(a){if(a=X(a.w,a.A,function(b){return b.reportDetailsFormRenderer}))return{formData:a,
form:{text:a._flag_description,minutes:a._minutes,seconds:a._seconds,vssId:a._vssId}}}
function jC(a){return Yq(E(function(){return a.issueTypeDropdown}),"identifier","1").int32Value}
function kC(a){return Yq(E(function(){return a.affiliationDropdown}),"identifier","1").int32Value}
;var mC=W({confirmDialogRenderer:uw});function nC(a){return a.menuRenderer||a.slimVideoMetadataRenderer}
function oC(a){return a.toggleButtonRenderer}
function pC(a,b){var c=Yq(a,"status",b);return c?X(a,c,oC):null}
function qC(a,b){var c=a.likeEndpoint.status,d=a.likeEndpoint.target.videoId,e=rC(b);e&&"INDIFFERENT"==c&&(e.contents=e.contents.filter(function(f){return d!=f.playlistVideoRenderer.videoId}),P())}
function rC(a){return X(a.w,a.A,function(b){return b.playlistVideoListRenderer})}
;var sC=W({buttonRenderer:Z});var tC=z("CANCEL"),uC=W({buttonRenderer:Z});function vC(a){Zp({header:function(){J({className:"modal-title"},function(){O(a.title)})},
buttons:function(){eo({className:"compact"},null,function(){u(tC)});
uC(a.button)},
content:function(){K({className:"secondary-text"},function(){O(a.content)})},
data:a})}
;var wC=W({modalWithTitleAndButtonRenderer:vC});var xC=F.ta;function yC(){var a=Cu().map(Bu);M(a,"ytm-download-list",null,function(){if(a&&a.length)for(var b=ca(a),c=b.next();!c.done;c=b.next()){c=c.value;var d=c.videoId;et({thumbnail:c.thumbnail,navigationEndpoint:{watchEndpoint:{videoId:d},commandMetadata:{webCommandMetadata:{url:"/watch?v="+d}}},title:ar(c.title),thumbnailOverlays:[lt(c.duration)],shortBylineText:ar(c.byline)},{className:"item"})}else u("No downloads")})}
function zC(){ap({content:function(){I({className:"downloads-page-header"},function(){Jo({name:"DISMISSAL",l:xC,onclick:Yo});u("Downloaded videos")});
yC()},
na:!0,xa:!0,L:F.N})}
;var AC=z("NOTIFICATION_ERROR_MESSAGE");var BC=F.ta,CC=F.Dc,DC=F.Bc,EC=nn(pc("editor-header")),HC=W({buttonRenderer:Z,dropdownRenderer:QA,textInputFormFieldRenderer:RA,dropdownFormFieldRenderer:FC,playlistSettingsEditorCasualSectionRenderer:GC}),IC;function GC(a,b){M(a,"ytm-playlist-settings-editor-casual-section-renderer",b,function(){JC(a);I({className:"casual-section-thumbnail-and-title"},function(){KC(a);LC(a)});
I({className:"casual-section-description-and-privacy"},function(){MC(a);NC(a)})})}
function FC(a,b){M(a,"ytm-dropdown-form-field-renderer",b,function(){var c=nn(pc("dropdown"));if(a.label){var d={vb:c};En({className:"dropdown-label",htmlFor:c.toString()},function(){O(a.label)})}HC(a.dropdown,d)})}
function JC(a){Bn({className:"casual-section-header-container"},function(){Jo({name:"DISMISSAL",l:BC,onclick:Yo});yn({id:EC,className:"casual-section-header-title"},function(){O(a.title)});
Jo({name:"CHECK",l:CC,className:"check-button",onclick:function(){if(a._errorMessageForTitle||a._errorMessageForDescription)OC();else{var b=[];void 0!==a._title&&b.push({action:"ACTION_SET_PLAYLIST_NAME",playlistName:a._title});void 0!==a._description&&b.push({action:"ACTION_SET_PLAYLIST_DESCRIPTION",playlistDescription:a._description});void 0!==a._privacy&&b.push({action:"ACTION_SET_PLAYLIST_PRIVACY",playlistPrivacy:parseInt(a._privacy,10)});0<b.length&&(IC.playlistEditEndpoint.actions=b,G(IC,a,
!0));Yo()}}})})}
function KC(a){var b=E(function(){return a.thumbnail.playlistVideoThumbnailRenderer.thumbnail});
b&&I({className:"casual-section-thumbnail-container"},function(){ks(b,null)})}
function LC(a){var b={oninput:function(c){return NA(c.target.value,a)}};
I({className:"casual-section-playlist-title"},function(){HC(a.name,b);a._errorMessageForTitle&&I({className:"casual-section-errors"},function(){u(a._errorMessageForTitle)})})}
function MC(a){HC(a.description,{className:"casual-section-playlist-description",oninput:function(b){b=b.target.value;a._description=b;a._errorMessageForDescription=-1!=b.indexOf("<")||-1!=b.indexOf(">")?F.xc:null;P()},
required:!1});a._errorMessageForDescription&&I({className:"casual-section-errors"},function(){u(a._errorMessageForDescription)})}
function NC(a){HC(a.privacy,{className:"casual-section-playlist-privacy",onchange:function(b){a._privacy=b.target.value}})}
function OC(){DC&&Kp(function(){u(DC)})}
;var PC=W({playlistSettingsEditorRenderer:function(a,b){IC=a.updateSettingsEndpoint;ap({content:function(){M(a,"ytm-playlist-settings-editor-renderer",b,function(){HC(a.sections[0],b)})},
na:!0,xa:!0,L:F.N,za:EC})}});var QC=z("NOTIFICATION_ERROR_MESSAGE");function RC(a,b){return hC(a,b).then(null,function(c){Kp(function(){u(QC)});
throw c;})}
;function SC(){return window.debugLocation||window.location}
;var TC=z("CANCEL"),UC=W({shareTargetRenderer:function(a,b){M(a,"ytm-share-target-renderer",b,function(){N(a.navigationEndpoint,{className:"share-target-link",target:"_blank"},function(){O(a.title)})})}});
function VC(a){a.preventDefault()}
;var WC=W({sharingRenderer:function(a){Zp({header:function(){J(null,function(){O(a.title)})},
buttons:function(){eo({className:"compact"},null,function(){u(TC)})},
content:function(){Oq(a.shortUrl,{className:"sharing-renderer-url",onclick:VC},function(){u(a.shortUrl)});
UC(a.primaryShareTargets,{onclick:Tp})},
data:a})}});function XC(a){return a.subscribeButtonRenderer}
function YC(a,b,c){hC(a,b,c).then(function(){var d=X(b.w,b.A,XC);d.subscribed=!d.subscribed;P()})}
;function ZC(a,b,c){var d=b.A.isToggled;return hC(a,b,c).then(function(){b.A.isToggled=!d;P()})}
;var $C={ytr:3,ytm:5},aD,bD,cD=0;function dD(){aD&&(hw(),Qo(aD,!1),document.body.removeChild(aD),aD=null)}
;var eD=W({confirmDialogRenderer:uw,unlimitedFamilyMessageInterstitialRenderer:kw,unlimitedFamilyProfileInterstitialRenderer:EB});function fD(a){return a.toggleMenuServiceItemRenderer}
function gD(a,b){var c=X(b.w,b.A,fD);c.isToggled=!c.isToggled;return RC(a,b)}
;function hD(a,b){return iD(a.data.encryptedPurchaseParams,a.data.ypcLogWalletAnalyticDataEndpoint,a.data.serializedTransactionFlowLoggingParams).then(function(c){return jD(c,a,b)},function(c){throw c;
})}
function jD(a,b,c){var d=a.integratorData;if(null==d||""===d||null!=a.error)return Promise.reject(Error("Error in buyflowResponse"));a={payments_payload:window.btoa(d),buybucket_params:b.data.buybucketParams,offer_params:b.data.offerParams};var e=b.data.completeTransactionEndpoint,f=E(function(){return e.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams});
return VB(e,a).then(function(g){g.data.messageRenderer?em("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE",f):(dm(f),zm('{"event": "purchased", "purchaseStatus": "success"}'));ZB(e,fC(g),c)},function(g){f&&em("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE",f);
throw g;})}
function iD(a,b,c){var d=We();a=a.replace(/-/g,"+").replace(/_/g,"/");var e=Lk.O().get("hl");qm(pm.O(),a,d.resolve,d.reject,e,b?function(f){b&&VB(b,{backend_analytics:f})}:void 0,c);
return d.b}
function kD(a){var b=E(function(){return a.ypcGetCartEndpoint.gtmId});
b&&ym(b);(b=a.ypcGetCartEndpoint.gtmData)&&zm(b)}
;var lD=W({buttonRenderer:Z});function mD(a,b){b._resumeTimeMs=C(function(){return b.endOptions[a].resumeTimeMs});
b._pausePeriodMessage=C(function(){return b.endOptions[a].pausePeriodMessage});
b._pauseEndMessage=C(function(){return b.endOptions[a].pauseEndMessage});
P()}
function nD(a,b){b._resumeTimeMs=C(function(){return b.endOptions[a].resumeTimeMs});
b._pausePeriodMessage=C(function(){return b.endOptions[a].pausePeriodMessage});
b._pauseEndMessage=C(function(){return b.endOptions[a].pauseEndMessage})}
;var oD=W({unpluggedPauseMembershipDialogRenderer:function(a){var b=a.defaultEndOptionIndex?a.defaultEndOptionIndex:0;nD(b,a);Zp({header:a.title&&function(){J(null,function(){O(a.title)})},
content:function(){K({className:"pause-period-message"},function(){O(a._pausePeriodMessage)});
K({className:"secondary-text pause-end-message"},function(){O(a._pauseEndMessage)});
Dn({className:"pause-slider",type:"range",min:0,max:a.endOptions.length-1,value$:b,onchange:function(c){return mD(c.target.value,a)}});
a.dialogMessages.forEach(function(c){K({className:"secondary-text pause-dialog-messages"},function(){O(c)})})},
buttons:function(){lD(a.secondaryButton);lD(a.primaryButton)},
Va:function(){if(a.onOpenCommands)for(var c=ca(a.onOpenCommands),d=c.next();!d.done;d=c.next())G(d.value,a,!0)},
Ta:function(){if(a.onDismissCommands)for(var c=ca(a.onDismissCommands),d=c.next();!d.done;d=c.next())G(d.value,a,!0)},
data:a})}});function pD(a,b){return X(b.w,a,function(c){return c.unpluggedPauseMembershipDialogRenderer})._resumeTimeMs}
;function qD(a){return E(function(){return a.redeemCode})}
function rD(a,b){a.ypcPostRedemptionRenderer=b;P()}
function sD(a,b,c,d,e){vm(new um(a.addToken,a.commonToken?a.commonToken:"")).then(function(){return tD(b,c)},function(f){switch(f){case "instrumentManagerLoadError":d.aa=e;
P();gm("YPC_ERROR_REASON_INST_MANAGER_LOAD_FAILURE");break;case "instrumentManagerCallbackError":d.aa=e;P();gm("YPC_ERROR_REASON_INST_MANAGER_CALLBACK_FAILURE");break;case "instrumentManagerCancelled":$l("ypcRedeemFlowCancelled");break;default:x(Error("unknown error during instrument manager flow."))}})}
function tD(a,b){var c=xm(E(function(){return a.ypcRedeemCodeEndpoint.paymentUrl})),d=(new Dm).init(),e=E(function(){return a.ypcRedeemCodeEndpoint.countryCode}),f=X(b.w,a,function(n){return n.redeemCodeRenderer}),g=qD(f),h=E(function(){return f.errorMessage}),l=X(b.w,b.A,function(n){return n.buttonRenderer});
gC(l,!0);f.aa=void 0;f.ypcPostRedemptionRenderer=void 0;P();$l("ypcRedeemFlowStarted");return Ve([d,c]).then(function(){var n=Fm(),q=payments.business.integration.ClientTokenFactory.createClientToken(e,n);n={c:g,rd:window.btoa(n),ctk:q};return VB(a,n).then(function(v){gC(l,!1);if(v.code&&"SUCCESS"==v.code)if(v.data.errorMessage)f.aa=v.data.errorMessage,P();else if(v.data.actions){var A=v.data.actions[0];A.invokeInstrumentManagerAction?sD(A.invokeInstrumentManagerAction,a,b,f,h):x(Error("invoke instrument action not found."))}else v.data.renderer?
(fm(),rD(f,E(function(){return v.data.renderer.ypcPostRedemptionRenderer}))):v.data.redirectEndpoint&&(fm(),G(E(function(){return v.data.redirectEndpoint}),l,!0));
else"ERROR"===v.code?(f.aa=h,P()):x(Error("unknown error during redeem flow.")),gm("YPC_ERROR_REASON_REDEEM_INNERTUBE_FAILURE")},function(v){gC(l,!1);
gm("YPC_ERROR_REASON_YPC_REDEEM_CODE_RPC_FAILURE");f.aa=ar(v.response.errors[0]);P()})},function(){gC(l,!1);
gm("YPC_ERROR_REASON_RISK_LIB_LOAD_FAILURE");x(Error("Couldn't load risk lib."));f.aa=h;P()})}
;var uD=W({buttonRenderer:Z,createCoreIdentityChannelContentRenderer:function(a,b){M(a,"ytm-create-core-identity-channel-content-renderer",b,function(){I({className:"ytm-create-core-identity-channel-content-renderer-content"},function(){a.profilePhoto&&Lr(a.profilePhoto,{className:"ytm-create-core-identity-channel-content-renderer-icon"});I(null,function(){var c=nn(pc("given-name-input")),d=nn(pc("family-name-input"));Dn({id:c,value:a.givenNameValue,placeholder:$q(a.givenNameLabel),oninput:function(e){a.givenNameValue=
e.target.value},
required:!0});Dn({id:d,value:a.familyNameValue,placeholder:$q(a.familyNameLabel),oninput:function(e){a.familyNameValue=e.target.value},
required:!0})})});
I({className:"ytm-create-core-identity-channel-content-renderer-message"},function(){a.additionalInfos.forEach(function(c){I(null,function(){O(c)})})})})}});var vD=W({buttonRenderer:Z}),wD=ro("ytm-comment-simplebox-renderer",function(a,b){function c(e){var f=e.prepareAccountEndpoint;f?G(f,e,!0):Ap()?(d=!d,b(),d&&a.querySelector(".comment-simplebox-reply").focus()):Zc(location,zp())}
var d=!1;return{R:function(e){e.authorThumbnail&&Lr(e.authorThumbnail,{className:"comment-simplebox-icon"});I({className:"comment-simplebox-input"},function(){if(d){var f=C(function(){return e.navigationEndpoint.createCommentDialogEndpoint.dialog.commentDialogRenderer}),g=f.cancelButton,h=f.submitButton;
In({className:"comment-simplebox-reply",placeholder:$q(e.placeholderText),oninput:function(l){e.b=l.target.value}});
I({className:"comment-simplebox-buttons cbox",onclick:function(){return c(e)}},function(){vD(g);
vD(h)})}else I({className:"comment-simplebox-placeholder comment-simplebox-reply",
onclick:function(){return c(e)}},function(){O(e.placeholderText)})})},
da:function(e,f){e!=f&&(d=!1)}}});var xD=z("COMMENT_MODAL_CONTENT"),yD=z("SIGN_IN_LABEL");var zD=W({creatorHeartRenderer:function(a,b){M(a,"ytm-creator-heart-renderer",b,function(){I({className:"cbox"},function(){a.isHearted&&Y(a.creatorThumbnail,{className:"comment-thumb",alt:""});V("FULL_HEART",{className:"comment-heart-icon","data-selected$":a.isHearted})})})},
pinnedCommentBadgeRenderer:function(a,b){M(a,"ytm-pinned-comment-badge-renderer",b,function(){I({className:"cbox"},function(){V("KEEP",{className:"comment-pin"});O(a.label)})})}});
function AD(a){hd(a.target,"ytm-comment-renderer").setAttribute("expanded",!0)}
function BD(a,b){hd(a.target,"a")||(Ap()?hs(b.actionMenu.menuRenderer):vC({content:{runs:[{text:xD}]},button:{buttonRenderer:{style:"STYLE_BRAND",size:"SIZE_DEFAULT",isDisabled:!1,text:{runs:[{text:yD}]},navigationEndpoint:{signInEndpoint:{},commandMetadata:{webCommandMetadata:{url:zp()}}}}}}))}
function CD(a){I({className:"comment-details secondary-text cbox",onclick:function(b){return BD(b,a)}},function(){L({className:"text-info"},function(){O(a.publishedTimeText)});
L({className:"comment-vote-count text-info"},function(){O(a.voteCount)});
V("LIKE_COMMENT",{className:"comment-thumb","data-selected$":"LIKE"==a.voteStatus});V("DISLIKE_COMMENT",{className:"comment-thumb","data-selected$":"DISLIKE"==a.voteStatus});zD(a.creatorHeart);wn({className:"comment-more-option","aria-label$":F.lb,"aria-haspopup$":"true"})})}
;var DD=W({commentRenderer:function(a,b){M(a,"ytm-comment-renderer",b,function(c){Km(c,"_commentData",a,function(){requestAnimationFrame(function(){var d=c.querySelector(".comment-text");c.setAttribute("expanded",26>d.scrollHeight-d.clientHeight)})});
N(a.authorEndpoint,{className:"comment-icon-container"},function(){Lr(a.authorThumbnail,{className:"comment-icon"})});
I({className:"comment-content"},function(){zD(a.pinnedCommentBadge);N(a.authorEndpoint,{className:"comment-title","is-owner$":a.authorIsChannelOwner},function(){O(a.authorText)});
K({className:"comment-text user-text",onclick:function(d){return BD(d,a)}},function(){O(a.contentText)});
V("MORE_HORIZ",{className:"comment-expand",onclick:AD});CD(a)})})}});
function ED(a,b){var c=a.continuations||[];I({className:"comment-replies-continuation vbox",ka:b?"/watch_comment?action_get_comment_replies=1":"/comment_service?action_get_comment_replies=1"},function(){c.forEach(function(d){return xs(a,d)})})}
function FD(a,b){a&&M(a,"ytm-comment-replies-renderer",null,function(){var c=a.commentRepliesRenderer;DD(c.contents);ED(c,b)})}
;var HD=W({commentSimpleboxRenderer:wD,commentThreadRenderer:function(a,b){M(a,"ytm-comment-thread-renderer",b,function(){DD(a.comment);FD(a.replies,b.isWatch)})},
commentSectionHeaderRenderer:y("mweb_watch_next_infinite_scroll")?t:GD}),ID=0<=Ab.search("Factory Media Production");function JD(a,b,c){a.D||y("mweb_auto_load_comments")||Im(function(){return window.scrollTo(0,a.offsetTop)});
a.D=!a.D;Og(a,function(){return KD(b,c)})}
function GD(a,b){var c=b.expandable,d=b.expanded;M(a,"ytm-comment-section-header-renderer",b,function(){I({className:"cbox"},function(){J({className:"comment-section-header-text"},function(){O(a.countText)});
c&&V(d?"EXPAND_LESS":"EXPAND_MORE")})})}
function LD(a,b){var c=a.continuations||[],d=0<a.items.length;I({className:"vbox",ka:b?"/watch_comment?action_get_comments=1":"/comment_service?action_get_comments=1"},function(){c.forEach(function(e){d?xs(a,e):zv(a,e)})})}
function KD(a,b){ID||M(a,"ytm-comment-section-renderer",b,function(c){Km(c,"_commentSectionRendererData",a,function(){a.items=a.items||[];c.b=0==a.items.length;c.D=!c.b});
var d=c.b,e=c.D,f=c.o,g=b&&b.isWatch,h=nn(pc("comment-section"));HD(a.header,{expandable:d,expanded:e,tabIndex:"0",role$:"button","aria-expanded$":e,"aria-controls$":h,onclick:d?function(){return JD(c,a,b)}:t});
!y("mweb_auto_load_comments")||e||f||pr()&&!qr()||(new Jn(0,function(){JD(c,a,b);c.o=!0})).observe(c);
I({id:h,className:"comment-section-content",hidden:!e},function(){HD(a.sharebox,{className:"section"});HD(a.items,{className:"section",isWatch:g});LD(a,g)})})}
;var MD=F.ua,ND=F.va,OD=ro("ytm-donation-shelf-renderer",function(a,b){function c(){h=!h;b()}
function d(l){I({className:"donation-shelf-campaign"},function(){l.campaignThumbnail&&Y(l.campaignThumbnail,{className:"donation-shelf-campaign-thumbnail",alt:""});I({className:"donation-shelf-campaign-text"},function(){zn({className:"donation-shelf-campaign-title"},function(){O(l.campaignTitle)});
I({className:"donation-shelf-campaign-subtitle"},function(){O(l.campaignSubtitle)})});
Z(l.donateButton.buttonRenderer,{className:"donation-shelf-button"})})}
function e(l){l.amountRaisedLabel?zn({className:"donation-shelf-amount-raised-label"},function(){O(l.amountRaisedLabel)}):I({className:"donation-shelf-progress"},function(){I({className:"donation-shelf-progress-bar"},function(){void 0!==l.progress&&I({className:"donation-shelf-progress-bar-progress",
style:"width: "+100*l.progress+"%"})});
I({className:"donation-shelf-labels"},function(){l.startLabel&&I({className:"donation-shelf-start-label"},function(){O(l.startLabel)});
l.endLabel&&I({className:"donation-shelf-start-label"},function(){O(l.endLabel)})});
l.matchLabel&&I({},function(){O(l.matchLabel)})})}
function f(l){I({className:"donation-shelf-creator-message"},function(){I({className:"donation-shelf-creator-message-header"},function(){l.thumbnail&&Lr(l.thumbnail,{className:"donation-shelf-creator-message-thumbnail"});O(l.title)});
l.description&&I({className:"donation-shelf-creator-message-description"},function(){O(l.description)})})}
function g(l){l.nonprofitTitle&&zn({className:"donation-shelf-nonprofit-title"},function(){O(l.nonprofitTitle)});
l.nonprofitSubtitle&&I({className:"donation-shelf-nonprofit-subtitle small-text"},function(){O(l.nonprofitSubtitle);l.nonprofitWebsite&&(u("  \u2022  "),L({className:"donation-shelf-nonprofit-website"},function(){O(l.nonprofitWebsite)}))});
l.nonprofitDescription&&I({className:"donation-shelf-nonprofit-description small-text"},function(){O(l.nonprofitDescription)})}
var h=!1;return{R:function(l){d(l);e(l);I({className:"donation-shelf-expander",onclick:c},function(){I({className:"donation-shelf-expand-text"},function(){O(l.expandButton.buttonRenderer.text)});
V(h?"EXPAND_LESS":"EXPAND_MORE",{className:"donation-shelf-expand-icon",role$:"button","aria-label$":h?MD:ND})});
h&&(l.creatorMessages&&0<l.creatorMessages.length&&(I({className:"donation-shelf-expanded-separator"}),l.creatorMessages.forEach(function(n){f(n)})),g(l))},
da:function(l,n){l!=n&&(h=!1)}}});var PD=W({buttonRenderer:Z});function QD(a){(a.impressionEndpoints||[]).forEach(function(b){G(b,a,!0)})}
;var RD=W({buttonRenderer:Z});var SD=W({postRedemptionSectionRenderer:function(a,b){M(a,"ytm-post-redemption-section-renderer",b,function(){I({className:"post-redemption-container",style:'background-image: url("'+zr(E(function(){return a.background.thumbnailLandscapePortraitRenderer.portrait}))+'");'},function(){I({className:"post-redemption-logo-image",
style:'background-image: url("'+zr(E(function(){return a.logoImage.thumbnailLandscapePortraitRenderer.portrait}))+'");'},function(){});
I({className:"post-redemption-title"},function(){O(a.title)});
I({className:"post-redemption-button-container"},function(){RD(a.button)})})})}});
function TD(a,b){M(a,"ytm-ypc-post-redemption-renderer",b,function(){I({className:"redeem-store-value-balance"},function(){O(a.storeValueBalance)});
I({className:"sections"},function(){SD(a.sections)})})}
;var UD=ro("ytm-redeem-code-renderer",function(a,b){var c=W({buttonRenderer:Z}),d=!0;return{R:function(e,f){e.redeemButton.buttonRenderer.isDisabled=d;e.ypcPostRedemptionRenderer?TD(e.ypcPostRedemptionRenderer,f):M(e,"ytm-redeem-code-renderer",f,function(){I({className:"redeem-code-container",style$:"background-image: url("+zr(E(function(){return e.thumbnail}))+");"},function(){I({className:"redeem-code-title"},function(){O(e.title)});
I({className:"redeem-code-input-container"},function(){Dn({autocomplete:"off",className:"redeem-code-input",maxlength:24,oninput:function(g){g=g.target.value.trim();d=12>g.length;e.redeemCode=g;b()},
placeholder:$q(e.placeholderText),size:24,type:"text"})});
e.aa&&I({className:"redeem-code-error-message"},function(){O(e.aa)});
I({className:"redeem-code-terms-conditions"},function(){O(e.termsConditions)});
I({className:"redeem-button-container"},function(){c(e.redeemButton)})})})}}});var VD=W({buttonRenderer:Z});var XD=W({buttonRenderer:Z,sponsorshipsHeaderRenderer:WD,sponsorshipsListTileRenderer:$u});
function WD(a,b){M(a,"ytm-sponsorships-header-renderer",b,function(){var c=zr(a.backgroundImage),d=Ul(a.backgroundColor);I({style$:"background-image: url("+c+");\n                 background-blend-mode: soft-light;\n                 background-color: "+d+";",className:"sponsorships-celebration-renderer-header"},function(){I({className:"sponsorships-celebration-renderer-header-image-container"},function(){Y(a.channelImage,{className:"sponsorships-celebration-renderer-header-image",alt:""})});
I({className:"sponsorships-celebration-renderer-header-text"},function(){I({className:"sponsorships-celebration-renderer-header-title"},function(){O(a.title)});
I({className:"sponsorships-celebration-renderer-header-subtitle"},function(){O(a.subtitle)})})})})}
;var YD=W({buttonRenderer:Z,menuRenderer:gs});var ZD=W({buttonRenderer:Z});var $D=W({singleOptionSurveyOptionRenderer:function(a,b){M(a,"ytm-single-option-survey-option-renderer",b,function(){Jo({name:a.icon.iconType,l:$q(a.option),onclick:function(){xB();a.submissionEndpoint&&G(a.submissionEndpoint,a,!0)}});
I({className:"ytm-single-option-survey-option-label","aria-hidden$":!0},function(){O(a.option)})})}});var aE=W({singleOptionSurveyRenderer:function(a,b){wB(function(){M(a,"ytm-single-option-survey-renderer",b,function(){I({className:"ytm-single-option-survey-header"},function(){O(a.question);Jo({name:"DISMISSAL",l:$q(a.dismissalText),onclick:function(){a.dismissalEndpoint&&G(a.dismissalEndpoint,a,!0)}})});
I({className:"ytm-single-option-survey-options"},function(){$D(a.options)})})})}});function bE(a,b){I({className:"one-vs-one-team-row"},function(){L({className:"one-vs-one-team-name"},function(){O(a)});
L({className:"one-vs-one-team-result"},function(){O(b)})})}
function cE(a,b){a.homeName&&a.awayName&&a.homeParticipantResult&&a.awayParticipantResult&&M(a,"ytm-one-vs-one-event",b,function(){bE(a.homeName,a.homeParticipantResult);bE(a.awayName,a.awayParticipantResult);I({className:"one-vs-one-event-description"},function(){O(a.eventDescription)});
I({className:"one-vs-one-event-description"},function(){O(a.additionalEventDescription)})})}
;var dE=W({oneVsOneEvent:cE,thumbnailOverlayTimeStatusRenderer:qs});function eE(a,b){I({className:["collage-image background-image",a].join(" ")},function(c){rd(c,'url("'+zr(b,c)+'")')})}
;var fE=W({callToActionButtonRenderer:function(a,b){M(a,"ytm-call-to-action-button-renderer",b,function(c){a.style&&c.setAttribute("data-style",a.style);I({className:"cbox"},function(){V(C(function(){return a.icon.iconType}));
I({className:"call-to-action-button-label"},function(){O(a.label)})})})},
collageHeroImageRenderer:function(a,b){M(a,"ytm-collage-hero-image-renderer",b,function(){eE("collage-left collage-top collage-bottom",a.leftThumbnail);eE("collage-right collage-top",a.topRightThumbnail);eE("collage-right collage-bottom",a.bottomRightThumbnail)})},
singleHeroImageRenderer:function(a,b){M(a,"ytm-single-hero-image-renderer",b,function(){a.thumbnail&&Y(a.thumbnail,{className:"single-hero-image",alt:""},320)})},
thumbnailOverlayTimeStatusRenderer:qs});var gE=W({buttonRenderer:Z,subscribeButtonRenderer:Kr});var hE=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs});
function iE(a,b){M(a,"ytm-watch-card-compact-video-renderer",b,function(){N(a.navigationEndpoint,{className:"watch-card-compact-video-condensed-endpoint"},function(){a.thumbnail&&Y(a.thumbnail,{className:"watch-card-compact-video-condensed-thumbnail",alt:""});I({className:"watch-card-compact-video-condensed-metadata"},function(){An({className:"watch-card-compact-video-condensed-title"},function(){O(a.title,{H:!0})});
I({className:"subhead"},function(){O(a.subtitle,{H:!0})})});
O(a.lengthText)})})}
function jE(a,b){M(a,"ytm-watch-card-compact-video-renderer",b,function(){ms({thumbnail:E(function(){return a.thumbnail}),
navigationEndpoint:E(function(){return a.navigationEndpoint}),
headline:E(function(){return a.title}),
F:[a.subtitle],overlay:function(){ts(function(){return hE(a.thumbnailOverlays)})}})})}
;var kE=W({thumbnailOverlayResumePlaybackRenderer:ps,thumbnailOverlayTimeStatusRenderer:qs});var lE=W({watchCardCompactVideoRenderer:function(a,b){switch(a.style){case "WATCH_CARD_COMPACT_VIDEO_RENDERER_STYLE_CONDENSED":iE(a,b);break;default:jE(a,b)}},
watchCardOneVsOneEventCompactVideoRenderer:function(a,b){M(a,"ytm-watch-card-one-vs-one-event-compact-video-renderer",b,function(){N(a.navigationEndpoint,{className:"ytm-watch-card-one-vs-one-event-link"},function(){ks(a.thumbnail,function(){ts(function(){return kE(a.thumbnailOverlays)})});
I({className:"ytm-watch-card-one-vs-one-event-container"},function(){cE(a.oneVsOneEvent,b)})})})}});var mE=W({horizontalCardListRenderer:Vt,verticalWatchCardListRenderer:function(a,b){M(a,"ytm-vertical-watch-card-list-renderer",b,function(){lE(a.items)})}});var nE=F.ua,oE=F.va,pE=W({watchCardHeroOneVsOneEventRenderer:function(a,b){M(a,"ytm-watch-card-hero-one-vs-one-event-renderer",b,function(){var c=mt(a);N(a.navigationEndpoint,{className:"watch-card-hero-one-vs-one-event-endpoint"},function(){a.thumbnail&&Y(a.thumbnail,{className:"watch-card-hero-one-vs-one-event-hero-image",alt:""},320);I({className:"watch-card-hero-one-vs-one-event-bottom-fade bottom-fade"},function(){dE(a,{className:"watch-card-one-vs-one-event"});ts(function(){return dE(c)})})})})},
watchCardHeroVideoRenderer:function(a,b){M(a,"ytm-watch-card-hero-video-renderer",b,function(){N(a.navigationEndpoint,{className:"watch-card-hero-video-endpoint","aria-label$":co(a.accessibility)},function(){fE(a.heroImage);fE(a.callToActionButton,{className:"watch-card-hero-video-call-to-action"});a.title&&I({className:"watch-card-single-hero-bottom-fade bottom-fade"},function(){J({className:"watch-card-single-hero-title"},function(){O(a.title,{H:!0})});
zn({className:"watch-card-single-hero-subtitle"},function(){O(a.subtitle,{H:!0})});
ts(function(){return fE(a.thumbnailOverlays)})})})})},
watchCardRichHeaderRenderer:function(a,b){M(a,"ytm-watch-card-rich-header-renderer",b,function(){a.avatar&&N(a.titleNavigationEndpoint,{"aria-hidden$":"true"},function(){Lr(a.avatar,{className:"watch-card-rich-header-profile-icon"})});
I({className:"watch-card-rich-header-text"},function(){N(a.titleNavigationEndpoint,null,function(){An({className:"watch-card-rich-header-title"},function(){O(a.title);a.titleBadge&&Sr(a.titleBadge.metadataBadgeRenderer,{className:"watch-card-rich-header-badge"})});
I({className:"subhead"},function(){O(a.subtitle)})});
gE(a.callToActionButton,{className:"watch-card-rich-header-call-to-action"})})})},
watchCardSectionSequenceRenderer:function(a,b){M(a,"ytm-watch-card-section-sequence-renderer",b,function(){mE(a.lists)})}}),qE=ro("ytm-universal-watch-card-renderer",function(a,b){function c(){e=!e;
b();Im(function(){e?a.querySelector("ytm-watch-card-section-sequence-renderer a").focus():(window.scrollTo(0,a.offsetTop),a.querySelector(".universal-watch-card-toggle-container").focus())})}
function d(f){var g=$q(f.expandedLabel)||nE,h=$q(f.collapsedLabel)||oE,l=e?g:h;I({className:"universal-watch-card-toggle-container-wrapper"},function(){wn({className:"universal-watch-card-toggle-container",onclick:c,"aria-expanded$":e,"aria-label$":l},function(){var n=e?f.expandedLabel:f.collapsedLabel;O(n);var q=e?"EXPAND_LESS":"EXPAND_MORE";I({className:"universal-watch-card-toggle-button"},function(){return Ko(q,$q(n)||"")})})})}
var e=!1;return{R:function(f){a.data=f;pE(f.header);pE(f.callToAction,{className:"universal-watch-card-call-to-action"});f.sections&&!e&&d(f);pE(f.sections,{hidden:!e});f.sections&&e&&d(f)}}});function rE(a){return(a=sE(a))?"linear-gradient(180deg, "+a+"),":""}
function sE(a){if(!a)return null;var b=100/a.length;return a.map(function(c,d){var e=d*b;return Ul(c)+" "+e+"%"}).join(",")}
;var tE=W({buttonRenderer:Z});function uE(a,b){a&&I({"aria-label$":b},function(){Y(a,{alt:"",className:"unlimited-page-header-logo-thumbnail"})})}
function vE(a){a&&I({className:"unlimited-page-header-metadatas"},function(){a.forEach(function(b){I({},function(){O(b)})})})}
function wE(a){L({className:"ypc-promotion"},function(){O(a)})}
function xE(a){var b=E(function(){return a.thumbnailLandscapePortraitRenderer});
return b?qr()&&b.landscape?b.landscape:b.portrait:null}
;function yE(a){a&&I({className:"single-ypc-offer-metadatas"},function(){a.forEach(function(b){O(b)})})}
function zE(a){a&&L({className:"ypc-promotion"},function(){O(a)})}
function AE(a,b){M(a,"ytm-single-ypc-offer-renderer",b,function(){I({className:"single-ypc-offer"},function(){I({className:"single-ypc-offer-type-name"},function(){O(a.offerTypeName)});
yE(a.metadatas);zE(C(function(){return a.promotion.ypcPromotionRenderer.promotionText}))});
I({className:"single-ypc-offer-button"},function(){Z(a.button.buttonRenderer)})})}
;var BE=W({singleYpcOfferRenderer:AE});var CE=W({collapsibleYpcOfferRenderer:function(a,b){M(a,"ytm-collapsible-ypc-offer-renderer",b,function(c){var d=a.isCollapsed;I({className:"collapsible-ypc-offer-header",hidden:!d,role$:"button","aria-expanded$":!d,onclick:function(e){var f=c.querySelector(".collapsible-ypc-offer-offers");c.querySelector(".collapsible-ypc-offer-header").hidden=!0;f.hidden=!1;e.stopPropagation();e.preventDefault()}},function(){O(a.moreOfferInfoHeader)});
I({className:"collapsible-ypc-offer-offers",hidden:d},function(){BE(a.singleYpcOfferListSupportedRenderers)})})},
singleYpcOfferRenderer:AE});var DE=F.ua,EE=F.va,FE=W({singleYpcOfferListRenderer:function(a,b){M(a,"ytm-single-ypc-offer-list-renderer",b,function(){CE(a.singleYpcOfferSupportedRenderers,{className:"single-ypc-offer-list-renderer-offer"});CE(a.collapsibleRenderers)})}}),GE=ro("ytm-ypc-offers-list-renderer",function(a,b){function c(){d=!d;
b()}
var d=!1;return{R:function(e){FE(e.offersList);e.moreAdditionalInfoHeader&&(I({className:"ypc-offers-list-more-info-header",onclick:c},function(){I({className:"ypc-offers-list-more-info-header-text"},function(){O(e.moreAdditionalInfoHeader)});
V(d?"EXPAND_LESS":"EXPAND_MORE",{role$:"button","aria-expanded$":d,"aria-label$":d?DE:EE})}),I({className:"ypc-offers-list-more-info-details",
hidden:!d},function(){var f=e.moreAdditionalInfos;f&&f.forEach(function(g){I({className:"ypc-offers-list-more-info-item"},function(){O(g)})})}))},
da:function(e,f){e!=f&&(d=!1)}}});(function(){for(var a=["ms","moz","webkit","o"],b=0,c;c=a[b]&&!m.requestAnimationFrame;++b)m.requestAnimationFrame=m[c+"RequestAnimationFrame"],m.cancelAnimationFrame=m[c+"CancelAnimationFrame"]||m[c+"CancelRequestAnimationFrame"];if(!m.requestAnimationFrame){var d=0;m.requestAnimationFrame=function(e){var f=(new Date).getTime(),g=Math.max(0,16-(f-d));d=f+g;return m.setTimeout(function(){e(f+g)},g)};
m.cancelAnimationFrame||(m.cancelAnimationFrame=function(e){clearTimeout(e)})}})();
(function(){function a(b,c){var d=!(!c||!c.bubbles),e=!(!c||!c.cancelable),f=c?c.detail:void 0;try{var g=document.createEvent("HTMLEvents");g.initEvent(b,d,e);g.detail=f}catch(l){g=document.createEvent("Event");for(var h in Object.keys(f))g[h]=f[h];g.initEvent(b,d,e)}return g}
"function"!==typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)})();
"hidden"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"hidden",{get:function(){return this.hasAttribute("hidden")},
set:function(a){a?this.setAttribute("hidden",""):this.removeAttribute("hidden")}});
vz("ai");(function(){function a(e,f){c(e,{response:f,Xc:!0})}
Ry();var b=jz(),c=b.jd;b=b.ab;p("yt.logging.errors.log",gj,void 0);fj();window.onerror=fh;kf=hh;bh("CSI_SERVICE_NAME","youtube_mobile");window.addEventListener("initialdata",wz);window.addEventListener("player-dom-paused",xz);window.addEventListener("state-navigatestart",yz);window.addEventListener("state-progress",Bz);window.addEventListener("state-responsereceived",Fz);window.addEventListener("state-navigateend",Hz);window.addEventListener("state-progress",Nz);window.addEventListener("state-responsereceived",
wA);$n();St();window.addEventListener("state-navigateend",gA);window.addEventListener("player-state-change",Wm);window.addEventListener("blazerplayer-playback-start",Xm);window.addEventListener("state-navigateend",Ym);qx();cA();oA();w("MWEB_STICKY_PLAYER",!1)&&(window.addEventListener("scroll",Uy),window.addEventListener("resize",Sy));y("youthere_supported")&&(window.addEventListener("state-navigatestart",tA),window.addEventListener("state-navigateend",uA),window.addEventListener("user-activity",
vA));w("MWEB_BLAZERPLAYER",!1)||(window.addEventListener("on-play-autonav-video",at),window.addEventListener("on-play-previous-autonav-video",bt),window.addEventListener("hashchange",ct),window.addEventListener("state-navigatestart",ct),window.addEventListener("scroll",$s),window.addEventListener("user-activity",Zs),Ws(),window.addEventListener("player-fullscreen-change",Vz),window.addEventListener("hashchange",Wz));op()&&y("mweb_fetch_guide_except_watch")&&(xA=!0);Q().hash&&Kz();if(!y("mweb_skip_placeholder_on_cold")){var d=
nz(Q().href,"");b(d.data)}window.loadInitialResponse=a;window.makeColdLoadRequest=function(e){Tt(e,{pbjcold:"1"}).tee(function(f){var g=f.done;f=f.value;f.response.reload&&(x(Error("Cold load request had reload response")),f=yA(Error(z("INVALID_RESPONSE_RECEIVED"))));return{done:g,value:f}},function(f){.01>Math.random()&&x(f);
return{done:!0,value:yA(f)}}).tee(function(f){f.done&&a(e,f.value.response)})};
y("mweb_fetch_guide")&&!y("mweb_fetch_guide_old_ui")&&y("mweb_fetch_guide_chunk_last")&&(window.loadGuideResponse=function(e){Nm||(Nm=e,P())})})();
vz("apr");so("state-navigateend",function(){Im(zA)});
Xl(!0);an(az,function(a){a.b()});
window.addEventListener("beforeunload",function(){Fl("u")});
Object.assign(bn,{banAuthorAction:KA,commandExecutorCommand:function(a,b){for(var c=ca(a.commands),d=c.next();!d.done;d=c.next())dn(d.value,b)},
createCommentAction:function(a,b){AA(b).items.unshift(a.contents);P()},
createCommentReplyAction:function(a,b){var c=AA(b).items;c=EA(a.parentCommentId,c);c.replies||(c.replies={commentRepliesRenderer:{}});c.replies.commentRepliesRenderer.contents||(c.replies.commentRepliesRenderer.contents=[]);c.replies.commentRepliesRenderer.contents.push(a.contents);P()},
experimentsOptInAction:MA,experimentsOptOutAction:MA,getMultiPageMenuAction:function(a){var b=C(function(){return a.menu.multiPageMenuRenderer});
b&&Zx(b,{})},
hideReportedCommentAction:function(a,b){var c=a.commentId;c=c.replace("#",".");c=c.split(".");a.parentCommentId=c[1]?c[0]:void 0;KA(a,b)},
heartCommentCommand:LA,logYpcFlowDismissCommand:Bm,logYpcFlowStartCommand:Am,navigateAction:function(a){var b=gn(a.endpoint);b&&up(b,{itct:a.endpoint.clickTrackingParams})},
openPopupAction:GB,pinCommentAction:function(a,b){var c=AA(b).items,d=a.actionResult.update,e=DA(CA(d));HA(c);IA(e,c);c.unshift(d);P()},
playlistRemoveVideosAction:function(a,b){var c=HB(b);if(c&&c.contents){var d=a.setVideoIds;c.contents=c.contents.filter(function(e){return!d.includes(E(function(){return e.playlistVideoRenderer.setVideoId}))});
P()}},
playlistDeletionRedirectCommand:function(a,b){a.redirectEndpoint&&QB(a.redirectEndpoint,b)},
removeCommentAction:KA,replaceEnclosingAction:function(a,b){var c=X(b.w,b.A,KB);c&&(bo(c,function(d){JB(a.item,d)}),P())},
replaceFeedContentAction:function(a,b){var c=X(b.w,b.A,LB);c&&(c.contents=a.items,P())},
signalAction:function(a,b){"PAUSE_PLAYER"==a.signal?C(function(){iq().pauseVideo();2==iq().getVisibilityState()&&iq().toggleFullscreen()}):"PLAY_PLAYER"==a.signal?C(function(){return iq().playVideo()}):"RELOAD_PAGE"==a.signal?setTimeout(function(){Q().reload(!0)},5):"SUBMIT_FORM"==a.signal&&NB(b)},
unheartCommentCommand:LA,unpinCommentAction:function(a,b){var c=AA(b).items,d=a.actionResult.update,e=DA(CA(d));IA(e,c);0==c.length&&c.unshift(d);P()},
updateButtonAction:function(a,b){var c=X(b.w,b.A,function(d){return d.buttonRenderer&&b.A!=d.buttonRenderer?d:null});
c&&(c.buttonRenderer=a.updatedButton.buttonRenderer,P())},
updateCommentVoteAction:function(a,b){var c=a.voteStatus,d=X(b.w,b.A,OB),e=E(function(){return d.actionMenu.menuRenderer.items}),f=Yq(e,"voteStatus","LIKE"),g=null;
f&&(g=X(e,f,PB));f=Yq(e,"voteStatus","DISLIKE");var h=null;f&&(h=X(e,f,PB));g&&(g.isToggled="LIKE"==c);h&&(h.isToggled="DISLIKE"==c);d&&(d.voteCount=a.voteCount,d.voteStatus=c);P()},
updatePlaylistHeaderAction:function(a,b){Zq(b.w,"header").playlistHeaderRenderer=a.updatedHeader.playlistHeaderRenderer;P()}});
an(cn,function(a){var b=a.action;a=a.context;for(var c in b){var d=bn[c];d?d(b[c],a,b):x(Error("Unknown action type:"+c))}});
en.push.apply(en,da([{commandType:"adChoicesDialogEndpoint",i:function(a){a.adChoicesDialogEndpoint&&a.adChoicesDialogEndpoint.dialog&&(RB(a.adChoicesDialogEndpoint),TB(a.adChoicesDialogEndpoint.dialog))}},
{commandType:"addToPlaylistServiceEndpoint",i:RC},{commandType:"addUpcomingEventReminderEndpoint",i:gD},{commandType:"browseEndpoint",i:QB},{commandType:"channelCreationFormEndpoint",i:QB},{commandType:"channelCreationServiceEndpoint",i:function(a,b){var c=WB(a,b);return VB(a,{given_name:c.givenNameValue,family_name:c.familyNameValue}).then(function(d){var e=d.data;e.createChannelError?Kp(function(){O(e.createChannelError.errorMessage)}):e.navigationEndpoint&&QB(e.navigationEndpoint,b)})}},
{commandType:"clearSearchHistoryEndpoint",i:hC},{commandType:"clearWatchHistoryEndpoint",i:hC},{commandType:"confirmDialogEndpoint",i:function(a){XB(a.confirmDialogEndpoint.content)}},
{commandType:"createChannelEndpoint",i:QB},{commandType:"createCommentEndpoint",i:function(a,b){var c=$B(a,b);return c?VB(a,{comment_text:c}).then(function(d){ZB(a,d,b)}):Re()}},
{commandType:"createCommentReplyDialogEndpoint",i:function(a){bC(a.createCommentReplyDialogEndpoint.dialog)}},
{commandType:"createCommentReplyEndpoint",i:function(a,b){var c=cC(a,b);return c?VB(a,{comment_text:c}).then(function(d){ZB(a,d,b)}):Re()}},
{commandType:"createPlaylistServiceEndpoint",i:function(a,b){var c=X(b.w,b.A,function(e){return e.addToPlaylistCreateRenderer}),d=c._privacy;
d=void 0!=d?d:Yq(c,"isSelected",!0).int32Value;return hC(a,b,{create_playlist_title:c._title,create_playlist_privacy_status:d}).then(function(){Tp()},function(e){var f=C(function(){return e.response.errors[0]});
c._errorMessageFromResponse=f;P()})}},
{commandType:"deletePlaylistEndpoint",i:RC},{commandType:"experimentsOptInEndpoint",i:hC},{commandType:"experimentsOptOutEndpoint",i:hC},{commandType:"feedbackEndpoint",i:hC},{commandType:"flagEndpoint",i:function(a,b){var c=iC(b)||lC(b)||{},d=c.formData;return hC(a,b,c.form).then(function(){},function(e){e&&e.response&&e.response.errors&&e.response.errors[0]&&d&&(d.Nd=e.response.errors[0]);
P()})}},
{commandType:"gamingAccountLinkRedirectDialogCommand",i:function(a){mC(a.gamingAccountLinkRedirectDialogCommand.redirectDialog)}},
{commandType:"getAccountsListEndpoint",i:hC},{commandType:"getReportFormEndpoint",i:RC},{commandType:"likeEndpoint",i:function(a,b){var c=a.likeEndpoint.status,d=X(b.w,b.A,nC);if(d){var e=pC(d,"LIKE");d=pC(d,"DISLIKE");e&&(e.isToggled="LIKE"==c);d&&(d.isToggled="DISLIKE"==c);P()}qC(a,b);return hC(a,b)}},
{commandType:"logYpcFlowDismissCommand",i:Bm},{commandType:"logYpcFlowStartCommand",i:Am},{commandType:"managePurchaseEndpoint",i:function(a){var b=C(function(){return a.managePurchaseEndpoint.content.sponsorshipConfirmCancelRenderer});
Zp({header:b.title&&function(){J(null,function(){O(b.title)})},
content:b.description&&function(){K(null,function(){O(b.description)})},
buttons:function(){sC(b.confirmButton)},
data:b})}},
{commandType:"menuEndpoint",i:function(a){var b=C(function(){return a.menuEndpoint.menu.menuRenderer});
hs(b)}},
{commandType:"modalEndpoint",i:function(a){wC(a.modalEndpoint.modal)}},
{commandType:"modifyReportFormCommand",i:function(a,b){var c=X(b.w,b.A,function(d){return d.reportFormModalRenderer});
switch(a.modifyReportFormCommand.action){case "REPORT_FORM_ACTION_LEGAL_CHECKBOX_SHOW":c._showLegalReportCheckbox=!0;c._canShowNextButton=!1;c._legalCheckboxChecked=!1;break;case "REPORT_FORM_ACTION_LEGAL_CHECKBOX_HIDE":c._showLegalReportCheckbox=!1;c._canShowNextButton=!1;c._legalCheckboxChecked=!1;break;case "REPORT_FORM_ACTION_SUBMIT_BUTTON_SHOW":c._canShowNextButton=!1;break;case "REPORT_FORM_ACTION_NEXT_BUTTON_SHOW":c._canShowNextButton=!0}P()}},
{commandType:"navigationEndpoint",i:QB},{commandType:"nativeAppDeeplinkEndpoint",i:function(a){window.location=a.nativeAppDeeplinkEndpoint.url}},
{commandType:"offlineVideosEndpoint",i:function(){zC()}},
{commandType:"openPopupAction",i:GB},{commandType:"pauseSearchHistoryEndpoint",i:ZC},{commandType:"pauseWatchHistoryEndpoint",i:ZC},{commandType:"performCommentActionEndpoint",i:hC},{commandType:"playlistEditEndpoint",i:function(a,b,c){return VB(a,c).then(function(d){ZB(a,fC(d),b);var e=E(function(){return d.data.redirectEndpoint});
e&&G(e,d.data,!1)},function(d){Kp(function(){u(AC)});
throw d;})}},
{commandType:"playlistEditorEndpoint",i:function(a,b){return hC(a,b).then(function(c){PC(c.data.playlistSettingsEditor)})}},
{commandType:"removeUpcomingEventReminderEndpoint",i:gD},{commandType:"resumeSearchHistoryEndpoint",i:ZC},{commandType:"resumeWatchHistoryEndpoint",i:ZC},{commandType:"searchEndpoint",i:QB},{commandType:"setClientSettingEndpoint",i:function(a){var b=C(function(){return a.setClientSettingEndpoint.settingDatas});
if(b&&b.length){var c=Lk.O();b.forEach(function(d){switch(d.clientSettingEnum.item){case "I18N_LANGUAGE":c.set("hl",d.stringValue);Rk(c);SC().reload(!0);break;case "I18N_REGION":c.set("gl",d.stringValue);Rk(c);var e=SC().href;e=pg(e,{gl:d.stringValue,persist_gl:"1"});Zc(SC(),e);break;case "SAFETY_MODE":Qk(58,!!d.boolValue);Rk(c);break;default:throw Error("Unhandled client preference: "+d.clientSettingEnum.item);}})}}},
{commandType:"setSettingEndpoint",i:hC},{commandType:"shareEndpoint",i:function(a){WC(a.shareEndpoint.sharingRenderer)}},
{commandType:"signInEndpoint",i:function(a,b){QB(a,b)}},
{commandType:"signalServiceEndpoint",i:function(a,b){return"CLIENT_SIGNAL"==a.signalServiceEndpoint.signal?(ZB(a,{},b),Re()):hC(a,b)}},
{commandType:"subscribeEndpoint",i:YC},{commandType:"unlimitedCreateFamilyEndpoint",i:function(a,b){var c=a.unlimitedCreateFamilyEndpoint,d=c.serializedYpcFamilyCreateLoggingParams;cD=setTimeout(function(){var f=c.postFlowErrorEndpoint;clearTimeout(cD);dD();d&&nm(d);f&&G(f,{},!0)},3E4);
var e=X(b.w,b.A,function(f){return f.buttonRenderer||f.toggleButtonRenderer});
gC(e,!0);aD=document.createElement("ytm-unicorn-iframe");aD.setAttribute("hidden","");document.body.appendChild(aD);bD=document.createElement("div");aD.appendChild(bD);d&&d&&am("ypcFamilyCreateFlowStarted",d);cj(function(){var f=r("gapi.family_creation.render");r("gapi.config.update")("iframes/family_creation/url",w("YTR_FAMILY_CREATION_URL",void 0));var g=3;c.appId&&c.appId in $C&&(g=$C[c.appId]);f(bD,{authUser:w("SESSION_INDEX")||0,clientId:g,darkmode:document.documentElement.hasAttribute("dark")?
1:0,hl:w("HTML_LANG","en"),initialflow:[4,5,6,7],m:1,onFlowComplete:function(){var h=c.postFlowSuccessEndpoint;dD();d&&d&&am("ypcFamilyCreateFlowSucceeded",d,void 0,void 0,void 0);h&&G(h,{},!0)},
onError:function(){var h=c.postFlowErrorEndpoint;dD();d&&nm(d);h&&G(h,{},!0)},
onReady:function(){var h=c.referencePcidParams;clearTimeout(cD);hw();aD&&(aD.removeAttribute("hidden"),Qo(aD,!0));h&&r("gapi.family_creation.setConfig")(0,h)}})})}},
{commandType:"unlimitedFamilyFlowEndpoint",i:function(a){C(function(){return a.unlimitedFamilyFlowEndpoint.unlimitedFamilyFlowEndpointSupportedRenderers.confirmDialogRenderer.confirmButton.buttonRenderer.serviceEndpoint})?eD(a.unlimitedFamilyFlowEndpoint.unlimitedFamilyFlowEndpointSupportedRenderers,{stayOpenOnClick:!0}):eD(a.unlimitedFamilyFlowEndpoint.unlimitedFamilyFlowEndpointSupportedRenderers)}},
{commandType:"unsubscribeEndpoint",i:YC},{commandType:"uploadEndpoint",i:QB},{commandType:"urlEndpoint",i:function(a){a=a.urlEndpoint;up(a.url,void 0,void 0,"TARGET_NEW_WINDOW"==a.target?"_blank":"")}},
{commandType:"userFeedbackEndpoint",i:function(){fq()}},
{commandType:"verifyAgeEndpoint",i:hC},{commandType:"watchEndpoint",i:QB},{commandType:"ypcCancelRecurrenceEndpoint",i:function(a,b){var c=X(b.w,b.A,function(d){return d.buttonRenderer||d.toggleButtonRenderer||d.topbarMenuButtonRenderer});
gC(c,!0);return VB(a).then(function(d){hw();gC(c,!1);if(!d.code||"ERROR"===d.code||d.data.messageRenderer)hm(a.ypcCancelRecurrenceEndpoint.serializedYpcCancelFlowLoggingParams);else{var e=a.ypcCancelRecurrenceEndpoint.serializedYpcCancelFlowLoggingParams;e&&$l("ypcCancelFlowSucceeded","serializedYpcCancelFlowLoggingParams",e)}ZB(a,fC(d),b)},function(d){hw();
gC(c,!1);hm(a.ypcCancelRecurrenceEndpoint.serializedYpcCancelFlowLoggingParams);throw d;})}},
{commandType:"ypcCompleteTransactionEndpoint",i:function(a,b){var c=X(b.w,b.A,function(d){return d.buttonRenderer||d.toggleButtonRenderer||d.topbarMenuButtonRenderer});
gC(c,!0);a.ypcCompleteTransactionEndpoint.gtmData&&zm(a.ypcCompleteTransactionEndpoint.gtmData);return VB(a).then(function(d){hw();gC(c,!1);d.code&&"ERROR"!==d.code?(zm('{"event": "purchased", "purchaseStatus": "success"}'),dm(a.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams)):em("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE",a.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams);ZB(a,fC(d),b)},function(d){hw();
em("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE",a.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams);gC(c,!1);throw d;})}},
{commandType:"ypcFixInstrumentEndpoint",i:function(a,b){if(a.ypcFixInstrumentEndpoint){var c=a.ypcFixInstrumentEndpoint;if(c.encryptedFixInstrumentParameters){var d=c.encryptedFixInstrumentParameters.replace(/-/g,"+").replace(/_/g,"/");mm("FIX_FOP_EVENT_TYPE_START",c.serializedFixFopLoggingParams);sm(d,function(e,f){var g=r("payments.business.integration.scenario.FixInstrument");e==g.IntegratorCallbackType.ON_COMPLETE&&(f&&f.error?f.error==g.OnCompleteCallbackError.USER_CANCELLED?mm("FIX_FOP_EVENT_TYPE_CANCEL",
c.serializedFixFopLoggingParams):(mm("FIX_FOP_EVENT_TYPE_FAILURE",c.serializedFixFopLoggingParams,"FIX_FOP_ERROR_TYPE_UNSPECIFIED"),c.errorAction&&dn(c.errorAction,b)):(mm("FIX_FOP_EVENT_TYPE_SUCCESS",c.serializedFixFopLoggingParams),c.successAction&&dn(c.successAction,b)))},function(){mm("FIX_FOP_EVENT_TYPE_FAILURE",c.serializedFixFopLoggingParams,"FIX_FOP_ERROR_TYPE_LOAD_FAILURE")})}else x(Error("encryptedFixInstrumentParameters not present."))}}},
{commandType:"ypcGetCartEndpoint",i:function(a,b){kD(a);if(a.ypcGetCartEndpoint.prefetchConfig){var c=a.ypcGetCartEndpoint.prefetchConfig.ypcGetCartPrefetchResponseDataConfig,d=c.encryptedPurchaseParams,e=c.completeTransactionEndpoint,f=c.serializedTransactionFlowLoggingParams;c=c.ypcLogWalletAnalyticDataEndpoint;d={data:{offerParams:window.btoa(a.ypcGetCartEndpoint.offerParams),completeTransactionEndpoint:e,serializedTransactionFlowLoggingParams:f,encryptedPurchaseParams:d,ypcLogWalletAnalyticDataEndpoint:c}};
return hD(d,b)}var g=X(b.w,b.A,function(h){return h.buttonRenderer||h.toggleButtonRenderer||h.topbarMenuButtonRenderer});
gC(g,!0);return VB(a).then(function(h){gC(g,!1);h.code&&"ERROR"!==h.code||x(Error("ypc get cart failed at innertube."));hD(h,b)},function(h){gC(g,!1);
throw h;})}},
{commandType:"ypcPauseMembershipDialogCommand",i:function(a){oD(a.ypcPauseMembershipDialogCommand.ypcPauseMembershipDialogRenderer)}},
{commandType:"ypcPauseSubscriptionCommand",i:function(a,b){var c=pD(a,b),d=X(b.w,b.A,function(e){return e.buttonRenderer});
gC(d,!0);return VB(a,{resume_time_ms:c}).then(function(e){e.code&&"ERROR"!==e.code?km(C(function(){return a.ypcPauseSubscriptionCommand.serializedYpcPauseFlowLoggingParams})):lm(C(function(){return a.ypcPauseSubscriptionCommand.serializedYpcPauseFlowLoggingParams}));
ZB(a,e,b);gC(d,!1)},function(e){lm(C(function(){return a.ypcPauseSubscriptionCommand.serializedYpcPauseFlowLoggingParams}));
gC(d,!1);throw e;})}},
{commandType:"ypcRedeemCodeEndpoint",i:tD},{commandType:"ypcResumeSubscriptionCommand",i:function(a,b){var c=X(b.w,b.A,function(d){return d.buttonRenderer});
gC(c,!0);return VB(a).then(function(d){d.code&&"ERROR"!==d.code?im(C(function(){return a.ypcResumeSubscriptionCommand.serializedYpcResumeFlowLoggingParams})):jm(C(function(){return a.ypcResumeSubscriptionCommand.serializedYpcResumeFlowLoggingParams}));
ZB(a,d,b);gC(c,!1)},function(d){jm(C(function(){return a.ypcResumeSubscriptionCommand.serializedYpcResumeFlowLoggingParams}));
gC(c,!1);throw d;})}}]));
an(fn,function(a){hn(a.command,a.A)});
sv("channelCreationFormRenderer",function(a,b){M(a,"ytm-channel-creation-form-renderer",b,function(){yn(null,function(){O(a.title)});
uD(a.contents);I({className:"ytm-channel-creation-form-renderer-buttons"},function(){for(var c=ca(a.buttons),d=c.next();!d.done;d=c.next())d=d.value,uD(d,d.buttonRenderer.serviceEndpoint?null:{onButtonClickCallback:function(){return vo()}})})})});
sv("commentSectionRenderer",KD);sv("donationAmountPickerRenderer",WA);sv("donationPostTransactionRenderer",$A);sv("donationShelfRenderer",OD);sv("mealbarPromoRenderer",function(a,b){M(a,"ytm-mealbar-promo-renderer",b,function(c){Km(c,"_impressionData",a,function(){return QD(a)});
a.isVisible&&Ex({className:"mealbar-promo-renderer",iconImage:a.alternateIcon,texts:a.messageTexts,Nb:a.icon,title:a.messageTitle,buttons:function(){I({className:"mealbar-promo-buttons",onclick:function(d){hd(d.target,"button")&&(bo(a,t),Fx())}},function(){PD(a.dismissButton);
PD(a.actionButton)})}})})});
sv("membershipPostCancelRenderer",function(a){Zp({header:a.header&&function(){I({className:"membership-post-cancel-renderer-header"},function(){O(a.header)})},
content:a.messages&&function(){K({className:"membership-post-cancel-renderer-messages"},function(){a.messages.forEach(function(b){O(b)})})},
buttons:function(){VD(a.okayButton)},
data:a})});
sv("musicPassFeatureInfoRenderer",function(a,b){M(a,"ytm-music-pass-feature-info-renderer",b,function(){I({className:"music-pass-feature-info-content"},function(){J({className:"music-pass-feature-info-header"},function(){O(a.header)});
I({className:"music-pass-feature-info-description"},function(){O(a.description)})});
a.image&&Y(a.image,{alt:"",className:"music-pass-feature-info-thumbnail"})})});
sv("musicPassSmallFeatureInfoRenderer",function(a){M(a,"ytm-music-pass-small-feature-info-renderer",{className:"music-pass-small-feature"},function(){a.icon&&Y(a.icon,{alt:"",className:"music-pass-small-feature-thumbnail"});I({className:"music-pass-small-feature-description"},function(){J({className:"music-pass-small-feature-header"},function(){O(a.header)});
I({className:"music-pass-small-feature-description-details"},function(){O(a.description)})})})});
sv("redeemCodeRenderer",UD);sv("sponsorshipsCelebrationRenderer",function(a){fw("ytm-sponsorships-celebration-renderer",function(){XD(a.header);I({className:"content"},function(){XD(a.contents)});
I({className:"button-bar"},function(){I({onclick:function(){return hw()}},function(){XD(a.primaryButton)})})})});
sv("surveyTriggerRenderer",function(a,b){M(a,"ytm-survey-trigger-renderer",b,function(){Km(a,"_shown",!0,function(){aE(a.survey)})})});
sv("subscriptionProductRenderer",function(a,b){M(a,"ytm-subscription-product-renderer",b,function(){a.logo&&Y(a.logo,{className:"subscription-product-logo","aria-label$":co(a.logo.accessibility)||""});YD(a.menu);I({className:"subscription-product-metadatas"},function(){var c=a.metadatas;c&&c.forEach(function(d){I({className:"subscription-product-metadata-item"},function(){O(d)})})});
I({className:"subscription-product-additional-infos"},function(){var c=a.additionalInfos;c&&c.forEach(function(d){I({className:"subscription-product-additional-info-item"},function(){O(d)})})});
I({className:"subscription-product-primary-button"},function(){YD(a.primaryButton)})})});
sv("subscriptionProductUpsellOfferRenderer",function(a,b){M(a,"ytm-subscription-product-upsell-offer-renderer",b,function(){var c=zr(C(function(){return a.image}));
I({className:"subscription-product-upsell-image",style$:"background-image: url("+c+");"},function(){var d=a.imageScrimColorValues?Ul(a.imageScrimColorValues[0]):"transparent";I({className:"subscription-product-upsell-scrim",style$:"background-color: "+d},function(){a.logo&&Y(a.logo,{className:"subscription-product-upsell-logo","aria-label$":co(a.logo.accessibility)||""})})});
I({className:"subscription-product-upsell-info"},function(){I({className:"subscription-product-upsell-title"},function(){O(a.title)});
I({className:"subscription-product-upsell-description"},function(){O(a.description)});
a.additionalInfos&&a.additionalInfos.forEach(function(d){I({className:"subscription-product-upsell-additional-infos"},function(){O(d)})});
ZD(a.primaryButton)})})});
sv("universalWatchCardRenderer",qE);sv("unlimitedPageHeaderRenderer",function(a,b){M(a,"ytm-unlimited-page-header-renderer",b,function(){var c=E(function(){return a.unlimitedHeaderV2Data.unlimitedHeaderV2Data}),d=zr(xE(c?pr()&&c.backgroundThumbnailLargeFactor?c.backgroundThumbnailLargeFactor:c.backgroundThumbnailSmallFactor:null)),e=rE(c.scrimLayerColors);
I({className:"unlimited-page-header",style$:"background-image: "+e+"url("+d+");"},function(){var f=xE(c.logoThumbnail);f&&uE(f,a.pageTitle);I({className:"unlimited-page-header-subtitle"},function(){O(a.subTitle)});
I({className:"unlimited-page-header-button"},function(){tE(a.manageSubscriptionButton)});
vE(a.metadatas);wE(E(function(){return a.promotion.ypcPromotionRenderer.promotionText}))})})});
sv("ypcOffersListRenderer",GE);Object.keys(qv);Yk||($k={heightPixels:screen.height,widthPixels:screen.width},Xk&&($k.memoryTotalKbytes=String(Math.round(Xk.jsHeapSizeLimit/1E3))),window.devicePixelRatio&&($k.devicePixelRatio=window.devicePixelRatio),Math.random()<Th("web_system_health_fraction")&&(mh(al,3E4),bl()),Yk=!0);}).call(this);
