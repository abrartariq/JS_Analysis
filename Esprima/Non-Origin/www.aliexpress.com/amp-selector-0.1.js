(self.AMP=self.AMP||[]).push({n:"amp-selector",v:"1903281741200",f:(function(AMP,_){
var g,h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var p={a:!0},q={};try{q.__proto__=p;m=q.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=l;function t(a){return a?Array.prototype.slice.call(a):[]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var u=self.log;function v(){if(!u.user)throw Error("failed to call initLogConstructor");return u.user}function w(a,b){v().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function x(a){var b,c=a.ownerDocument.defaultView,e=c!=(c.__AMP_TOP||c);if(e){if(y(c,"action")){var d=z(c,"action");if(d)return d}if(!b)return null}a=A(a);a=A(a);a=a.isSingleDoc()?a.win:a;return y(a,"action")?z(a,"action"):null}function A(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||b;a=z(b,"ampdoc").getAmpDoc(a)}return a}
function z(a,b){y(a,b);var c=a.services;c||(c=a.services={});var e=c;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function y(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function B(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function C(a){return a.closest?a.closest("[option]"):B(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[option]"):!1})}function D(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};function E(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};var F={NONE:"none",FOCUS:"focus",SELECT:"select"};function G(a){a=AMP.BaseElement.call(this,a)||this;a.l=!1;a.h=[];a.c=[];a.w=[];a.A=null;a.j=0;a.m="none";return a}var H=AMP.BaseElement;G.prototype=h(H.prototype);G.prototype.constructor=G;if(r)r(G,H);else for(var I in H)if("prototype"!=I)if(Object.defineProperties){var J=Object.getOwnPropertyDescriptor(H,I);J&&Object.defineProperty(G,I,J)}else G[I]=H[I];G.H=H.prototype;g=G.prototype;g.isLayoutSupported=function(){return!0};
g.buildCallback=function(){var a=this;this.A=x(this.element);this.l=this.element.hasAttribute("multiple");this.element.hasAttribute("role")||this.element.setAttribute("role","listbox");this.l&&this.element.setAttribute("aria-multiselectable","true");this.element.hasAttribute("disabled")&&this.element.setAttribute("aria-disabled","true");var b=this.element.getAttribute("keyboard-select-mode");b?(b=b.toLowerCase(),v().assertEnumValue(F,b),w(!(this.l&&"select"==b),"[keyboard-select-mode=select] not supported for multiple selection amp-selector")):
b="none";this.m=b;this.registerAction("clear",this.o.bind(this));K(this);this.element.addEventListener("click",this.B.bind(this));this.element.addEventListener("keydown",this.C.bind(this));this.registerAction("selectUp",function(b){var c=b.args;L(a,c&&void 0!==c.delta?-c.delta:-1)},1);this.registerAction("selectDown",function(b){b=b.args;L(a,b&&void 0!==b.delta?b.delta:1)},1);this.registerAction("toggle",function(b){var c=b.args;w(0<=c.index,"'index' must be greater than 0");w(c.index<a.c.length,
"'index' must be less than the length of options in the <amp-selector>");if(c&&void 0!==c.index){b=c.index;var d=c.value;c=a.c[b];var k=c.hasAttribute("selected"),f=a.c.indexOf(a.h[0]);(void 0!==d?d:!k)!==k&&(f!==b?(M(a,c),(b=a.c[f])&&N(a,b)):N(a,c),O(a,c))}},1);this.element.addEventListener("amp:dom-update",this.D.bind(this))};g.mutatedAttributesCallback=function(a){var b=a.selected;void 0!==b&&P(this,b);var c=a.disabled;void 0!==c&&(c?this.element.setAttribute("aria-disabled","true"):this.element.removeAttribute("aria-disabled"))};
function P(a,b){var c=Array.isArray(b)?b:[b];if(null===b||0==c.length)a.o();else{a.l||(c=c.slice(0,1));var e=Q(a);if(!E(e.sort(),c.sort())){var d=c.reduce(function(a,b){a[b]=!0;return a},Object.create(null));for(b=0;b<a.c.length;b++){c=a.c[b];var k=c.getAttribute("option");d[k]?M(a,c):N(a,c)}R(a);S(a)}}}function R(a,b){if("none"!=a.m){a.c.forEach(function(a){a.tabIndex=-1});var c=b;c||(c=a.l?a.c[0]:a.h[0]||a.c[0]);c&&(a.j=a.c.indexOf(c),c.tabIndex=0)}}
g.D=function(){var a=t(this.element.querySelectorAll("[option]"));E(this.c,a)||K(this,a)};function K(a,b){a.h.length=0;var c=b?b:t(a.element.querySelectorAll("[option]"));c.forEach(function(b){b.hasAttribute("role")||b.setAttribute("role","option");b.hasAttribute("disabled")&&b.setAttribute("aria-disabled","true");b.hasAttribute("selected")?M(a,b):N(a,b);b.tabIndex=0});a.c=c;R(a);S(a)}
function S(a){var b=[],c=a.element.getAttribute("name");if(c&&!a.element.hasAttribute("disabled")){var e=a.element.getAttribute("form");a.w.forEach(function(b){a.element.removeChild(b)});a.w=[];var d=a.win.document,k=d.createDocumentFragment();a.h.forEach(function(f){if(!f.hasAttribute("disabled")){var n=d.createElement("input");f=f.getAttribute("option");n.setAttribute("type","hidden");n.setAttribute("name",c);n.setAttribute("value",f);e&&n.setAttribute("form",e);a.w.push(n);k.appendChild(n);b.push(f)}});
a.element.appendChild(k)}}function T(a,b){b.hasAttribute("disabled")||a.mutateElement(function(){b.hasAttribute("selected")?a.l&&(N(a,b),S(a)):(M(a,b),S(a));R(a,b);O(a,b)})}function Q(a){return a.h.map(function(a){return a.getAttribute("option")})}g.B=function(a){!this.element.hasAttribute("disabled")&&(a=a.target)&&(a.hasAttribute("option")||(a=C(a)),a&&T(this,a))};
function O(a,b){var c=a.win;b={targetOption:b.getAttribute("option"),selectedOptions:Q(a)};var e={detail:b};Object.assign(e,void 0);"function"==typeof c.CustomEvent?c=new c.CustomEvent("amp-selector.select",e):(c=c.document.createEvent("CustomEvent"),c.initCustomEvent("amp-selector.select",!!e.bubbles,!!e.cancelable,b));var d=c;a.A.trigger(a.element,"select",d,100)}
function L(a,b){var c=a.c.indexOf(a.h[0]),e=-1===c&&0>b;b=e?b:c+b;var d=a.c.length,k=0<b&&0<d?b%d:(b%d+d)%d;M(a,a.c[k]);var f=a.c[c];f&&N(a,f)}
g.C=function(a){if(!this.element.hasAttribute("disabled"))switch(a.key){case "ArrowLeft":case "ArrowUp":case "ArrowRight":case "ArrowDown":if("none"!=this.m)a:{var b=this.win.document;switch(a.key){case "ArrowLeft":b=D(b)?1:-1;break;case "ArrowUp":b=-1;break;case "ArrowRight":b=D(b)?-1:1;break;case "ArrowDown":b=1;break;default:break a}a.preventDefault();this.c[this.j].tabIndex=-1;this.j=(this.j+b)%this.c.length;0>this.j&&(this.j+=this.c.length);a=this.c[this.j];a.tabIndex=0;try{a.focus()}catch(c){}a=
this.c[this.j];"select"==this.m&&T(this,a)}break;case "Enter":case " ":b=a.key," "!=b&&"Enter"!=b||!this.c.includes(a.target)||(a.preventDefault(),T(this,a.target))}};function N(a,b){b.removeAttribute("selected");b.setAttribute("aria-selected","false");var c=a.h.indexOf(b);-1!==c&&a.h.splice(c,1)}g.o=function(){for(;0<this.h.length;){var a=this.h.pop();N(this,a)}S(this)};
function M(a,b){a.h.includes(b)||(a.l||a.o(),b.setAttribute("selected",""),b.setAttribute("aria-selected","true"),a.h.push(b))}g.F=function(){return this.c};g.G=function(){return this.h};(function(a){a.registerElement("amp-selector",G,"amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-selector-0.1.js.map

