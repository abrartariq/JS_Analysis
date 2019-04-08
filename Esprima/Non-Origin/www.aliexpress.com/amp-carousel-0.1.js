(self.AMP=self.AMP||[]).push({n:"amp-carousel",v:"1903281741200",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var ba={a:!0},n={};try{n.__proto__=ba;l=n.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=k;
function q(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(p)p(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.va=b.prototype};function r(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){return"number"===typeof a&&isFinite(a)};self.log=self.log||{user:null,dev:null,userForEmbed:null};var v=self.log;function w(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function x(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");}function da(a){w().assert(a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function ea(a){var b,c=a.ownerDocument.defaultView,d=c!=(c.__AMP_TOP||c);if(d){if(y(c,"action")){var e=z(c,"action");if(e)return e}if(!b)return null}a=A(a);a=B(a);return y(a,"action")?z(a,"action"):null}function C(a,b){a=a.__AMP_TOP||a;return z(a,b)}function A(a){return a.nodeType?C((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}
function z(a,b){y(a,b);var c=D(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function fa(a){var b=D(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;z(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function D(a){var b=a.services;b||(b=a.services={});return b}function y(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)}
function ga(){var a=new r,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function E(a){return a||{}};function ha(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function ia(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function ja(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):ia(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[i-amphtml-scale-animation]"):!1})};function ka(a){var b=fa(B(a));if(b)return b;var c=A(a);return c.whenBodyAvailable().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f=[];b=b.querySelectorAll("script[custom-element]");for(var h=0;h<b.length;h++)f.push(b[h].getAttribute("custom-element"))}else f=[];a=f.includes("amp-analytics")?C(a,"extensions").waitForExtension(a,"amp-analytics"):Promise.resolve();return a}).then(function(){var b=c.win;if(b.ampExtendedElements&&b.ampExtendedElements["amp-analytics"]){b=B(a);var e=
fa(b);e?b=e:(b=D(b),b["amp-analytics-instrumentation"]=ga(),b=b["amp-analytics-instrumentation"].promise)}else b=null;return b})};function F(a){return C(a,"timer")};function G(a,b,c,d){var e=new la(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function la(a,b,c,d){var e=1,f=1;this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.x3=e;this.y3=f}g=la.prototype;g.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
g.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=this.getPointX(c);var m=(this.getPointX(c+b)-f)/b;if(Math.abs(f-a)<b)return c;if(Math.abs(m)<b)break;else f<a?d=c:e=c,c-=(f-a)/m}for(h=0;Math.abs(f-a)>b&&8>h;h++)f<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=this.getPointX(c);return c};
g.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.lerp=function(a,b,c){return a+c*(b-a)};
var ma=G(.25,.1,.25,1),na=G(.42,0,1,1),oa=G(0,0,.58,1),pa=G(.42,0,.58,1),qa={linear:function(a){return a},ease:ma,"ease-in":na,"ease-out":oa,"ease-in-out":pa};function ra(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return G(b[0],b[1],b[2],b[3])}return null}return qa[a]}return a};function sa(){}function H(a){var b;this.N=a;(a=b)||(a=C(self,"vsync"));this.C=a;this.ia=null;this.w=[]}function I(a,b,c,d){return(new H(a)).setCurve(d).add(0,b,1).start(c)}H.prototype.setCurve=function(a){a&&(this.ia=ra(a));return this};H.prototype.add=function(a,b,c,d){this.w.push({delay:a,func:b,duration:c,curve:ra(d)});return this};H.prototype.start=function(a){var b=new J(this.C,this.N,this.w,this.ia,a);return b};
function J(a,b,c,d,e){this.C=a;this.N=b;this.w=[];for(b=0;b<c.length;b++){var f=c[b];this.w.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.oa=e;this.ra=Date.now();this.ca=!0;this.ma={};e=new r;this.la=e.promise;this.qa=e.resolve;this.pa=e.reject;this.na=this.C.createAnimTask(this.N,{mutate:this.sa.bind(this)});this.C.canAnimate(this.N)?this.na(this.ma):(x().warn("Animation","cannot animate"),K(this,!1,0))}
J.prototype.then=function(a,b){return a||b?this.la.then(a,b):this.la};J.prototype.thenAlways=function(a){a=a||sa;return this.then(a,a)};J.prototype.halt=function(a){K(this,!1,a||0)};
function K(a,b,c){if(a.ca){a.ca=!1;if(0!=c){1<a.w.length&&a.w.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.w.length;c++)a.w[c].func(1,!0);else for(var d=a.w.length-1;0<=d;d--)a.w[d].func(0,!1)}catch(e){x().error("Animation","completion failed: "+e,e),b=!1}}b?a.qa():a.pa()}}
J.prototype.sa=function(){if(this.ca){for(var a=Date.now(),b=Math.min((a-this.ra)/this.oa,1),c=0;c<this.w.length;c++){var d=this.w[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.w.length;c++)if(d=this.w[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){x().error("Animation","step curve failed: "+h,h);K(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){x().error("Animation",
"step mutate failed: "+h,h),K(this,!1,0)}}1==b?K(this,!0,0):this.C.canAnimate(this.N)?this.na(this.ma):(x().warn("Animation","cancel animation"),K(this,!1,0))}};function L(a){a=AMP.BaseElement.call(this,a)||this;a.I=null;a.H=null;a.T=!1;return a}q(L,AMP.BaseElement);g=L.prototype;g.buildCallback=function(){(this.T=C(this.win,"input").isMouseDetected()||this.element.hasAttribute("controls"))&&this.element.classList.add("i-amphtml-carousel-has-controls");this.buildCarousel();this.buildButtons();this.setupGestures();this.setControlsState()};g.viewportCallback=function(a){this.onViewportCallback(a);a&&this.hintControls()};g.onViewportCallback=function(){};
g.buildButton=function(a,b){var c=this.element.ownerDocument.createElement("div");c.tabIndex=0;c.classList.add("amp-carousel-button");c.classList.add(a);c.setAttribute("role","button");c.onkeydown=function(a){"Enter"!=a.key&&" "!=a.key||a.defaultPrevented||(a.preventDefault(),b())};c.onclick=b;return c};
g.buildButtons=function(){var a=this;this.I=this.buildButton("amp-carousel-button-prev",function(){a.interactionPrev()});this.element.appendChild(this.I);this.H=this.buildButton("amp-carousel-button-next",function(){a.interactionNext()});this.element.appendChild(this.H)};g.prerenderAllowed=function(){return!0};g.isRelayoutNeeded=function(){return!0};g.buildCarousel=function(){};g.setupGestures=function(){};g.go=function(a,b,c){c=void 0===c?!1:c;this.goCallback(a,b,c)};g.goCallback=function(){};
g.setControlsState=function(){this.I.classList.toggle("amp-disabled",!this.hasPrev());this.I.setAttribute("aria-disabled",!this.hasPrev());this.H.classList.toggle("amp-disabled",!this.hasNext());this.H.setAttribute("aria-disabled",!this.hasNext())};
g.hintControls=function(){var a=this;!this.T&&this.isInViewport()&&this.getVsync().mutate(function(){a.element.classList.add("i-amphtml-carousel-button-start-hint");F(a.win).delay(function(){a.mutateElement(function(){a.element.classList.remove("i-amphtml-carousel-button-start-hint");a.I.classList.toggle("i-amphtml-screen-reader",!a.T);a.H.classList.toggle("i-amphtml-screen-reader",!a.T)})},4E3)})};g.updateButtonTitles=function(){this.H.title=this.getNextButtonTitle();this.I.title=this.getPrevButtonTitle()};
g.getNextButtonTitle=function(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"};g.getPrevButtonTitle=function(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"};g.unlayoutCallback=function(){return!0};g.hasPrev=function(){};g.hasNext=function(){};g.interactionNext=function(){this.H.classList.contains("amp-disabled")||this.go(1,!0,!1)};
g.interactionPrev=function(){this.I.classList.contains("amp-disabled")||this.go(-1,!0,!1)};var M,ta="Webkit webkit Moz moz ms O o".split(" ");function ua(a,b){var c=void 0;if(ha(b,"--"))return b;M||(M=Object.create(null));var d=M[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<ta.length;f++){var h=ta[f]+e;if(void 0!==a[h]){e=h;break a}}e=""}var m=e;void 0!==a[m]&&(d=m)}c||(M[b]=d)}return d}function va(a,b){var c,d=ua(a.style,"order");d&&(a.style[d]=c?b+c:b)}function wa(a){var b=ua(a.style,"scrollSnapType");if(b)return a.style[b]};E({c:!0,v:!0,a:!0,ad:!0,action:!0});function N(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,xa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var h;h=ca.exec(e);)f=t(h[1],h[1]),h=h[2]?t(h[2],h[2]):"",a[f]=h;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var m=c;return!!m[b]}
function xa(a){a:{try{var b=a.document.cookie}catch(h){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==t(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=t(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};function O(a,b){return function(c){return a+(b-a)*c}};function P(a){a=L.call(this,a)||this;a.o=0;a.ba=0;a.F=null;a.A=null;a.ea=null;a.M=!1;return a}q(P,L);g=P.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};
g.buildCarousel=function(){var a=this;this.F=this.getRealChildren();this.A=this.element.ownerDocument.createElement("div");this.A.classList.add("i-amphtml-scrollable-carousel-container");this.element.appendChild(this.A);this.M=N(this.win,"layers")&&N(this.win,"layers-prioritization");this.F.forEach(function(b){a.M||a.setAsOwner(b);b.classList.add("amp-carousel-slide");b.classList.add("amp-scrollable-carousel-slide");a.A.appendChild(b)});this.Y();this.A.addEventListener("scroll",this.da.bind(this));
this.registerAction("goToSlide",function(b){var c=b.args;c&&ya(a,parseInt(c.index,10))},1);this.M&&this.declareLayer(this.A)};g.layoutCallback=function(){this.M||(za(this,this.o),Aa(this,this.o,1));this.setControlsState();return Promise.resolve()};g.onViewportCallback=function(){this.M||Ba(this,this.o,this.o)};
g.goCallback=function(a,b){var c=this,d=Ca(this,this.o,a),e=this.o;if(d!=e)if(b){var f=O(e,d);I(this.element,function(a){c.A.scrollLeft=f(a)},200,"ease-in-out").thenAlways(function(){Q(c,d)})}else Q(this,d),this.A.scrollLeft=d};
function ya(a,b){var c=a.F.length;if(!isFinite(b)||0>b||b>=c)a.user().error("amp-scrollable-carousel","Invalid [slide] value: %s",b),Promise.resolve();else{var d=a.o,e=d,f=function(){e=a.F[b].offsetLeft-(a.element.offsetWidth-a.F[b].offsetWidth)/2},h=function(){if(e!=d){var b=O(d,e);I(a.element,function(c){a.A.scrollLeft=b(c)},200,"ease-in-out").thenAlways(function(){Q(a,e)})}};a.measureMutateElement(f,h)}}g.da=function(){var a=this.A.scrollLeft;this.o=a;null===this.ea&&Da(this,a)};
function Da(a,b){a.ea=F(a.win).delay(function(){30>Math.abs(b-a.o)?(a.ea=null,Q(a,a.o)):Da(a,a.o)},100)}function Q(a,b){a.M||(Ba(a,b,a.ba),za(a,b),Aa(a,b,Math.sign(b-a.ba)),a.ba=b);a.o=b;a.setControlsState()}function Ca(a,b,c){var d=a.element.offsetWidth,e=a.A.scrollWidth;a=b+c*d;return 0>a?0:e>=d&&a>e-d?e-d:a}function R(a,b,c){for(var d=a.getLayoutWidth(),e=0;e<a.F.length;e++){var f=a.F[e];f.offsetLeft+f.offsetWidth>=b&&f.offsetLeft<=b+d&&c(f)}}
function za(a,b){R(a,b,function(b){a.scheduleLayout(b)})}function Aa(a,b,c){var d=Ca(a,b,c);d!=b&&R(a,d,function(b){a.schedulePreload(b)})}function Ba(a,b,c){var d=[];R(a,b,function(b){d.push(b);a.updateInViewport(b,!0)});c!=b&&R(a,c,function(b){d.includes(b)||(a.updateInViewport(b,!1),a.schedulePause(b))})}g.hasPrev=function(){return 0!=this.o};g.hasNext=function(){var a=this.getLayoutWidth(),b=this.A.scrollWidth,c=Math.max(b-a,0);return this.o!=c};
g.Y=function(){this.element.addEventListener("touchmove",function(a){a.stopPropagation()})};function S(a){a=L.call(this,a)||this;a.W=null;a.P=!1;a.aa=!1;a.G=!1;a.ha=5E3;a.J=null;a.ka=0;a.shouldLoop=!1;a.B=!1;return a}q(S,L);g=S.prototype;
g.buildCarousel=function(){var a=this;this.P=this.element.hasAttribute("loop");this.G=this.element.hasAttribute("autoplay");var b=this.element.getAttribute("autoplay");b&&(this.J=parseInt(b,10),da(u(this.J)));this.buildSlides();this.shouldLoop=this.P&&this.isLoopingEligible();(this.B=this.G&&this.isLoopingEligible())&&0!=this.J&&Ea(this);this.registerAction("toggleAutoplay",function(b){(b=b.args)&&void 0!==b.toggleOn?Fa(a,b.toggleOn):Fa(a,!a.G)},1)};g.buildSlides=function(){};
g.onViewportCallback=function(a){this.updateViewportState(a);a?T(this):this.clearAutoplay()};g.goCallback=function(a,b,c){this.moveSlide(a,b);c?T(this):this.clearAutoplay()};g.moveSlide=function(){};g.updateViewportState=function(){};g.isLoopingEligible=function(){return!1};function Ea(a){var b=Number(a.element.getAttribute("delay"));0<b&&(a.ha=Math.max(1E3,b));a.P||(a.element.setAttribute("loop",""),a.aa=!0,a.P=!0,a.shouldLoop=!0)}
function T(a){a.B&&0!=a.J&&(a.clearAutoplay(),a.W=F(a.win).delay(a.go.bind(a,1,!0,!0),a.ha))}function Fa(a,b){if(b!=a.B){var c=a.B;a.G=b;a.B=a.G&&a.isLoopingEligible();!c&&a.B&&Ea(a);a.B?T(a):a.clearAutoplay()}}g.clearAutoplay=function(){null!==this.W&&(F(this.win).cancel(this.W),this.W=null)};g.removeAutoplay=function(){this.clearAutoplay();this.aa&&(this.element.removeAttribute("loop"),this.shouldLoop=this.P=this.aa=!1);this.B=this.G=!1};function U(a,b,c){ka(a).then(function(d){d&&d.triggerEventForTarget(a,b,c)})};function V(a){a=S.call(this,a)||this;a.C=null;a.K=!1;a.m=[];a.j=0;a.l=null;a.L=[];a.U=!1;a.S=null;a.V=null;a.$=!1;a.O=0;a.h=null;a.ja=0;a.D=0;a.X=0;a.Z=[];var b=C(a.win,"platform");a.R=b.isIos();a.ga=null;a.fa=ha(C(a.win,"platform").getIosVersionString(),"10.3")?!0:a.R?!1:!N(a.win,"amp-carousel-chrome-scroll-snap");return a}q(V,S);g=V.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
g.buildSlides=function(){var a=this;this.C=this.getVsync();this.ga=ea(this.element);this.K=void 0!=wa(this.element);this.fa&&(this.K=!1);this.element.classList.add("i-amphtml-slidescroll");this.m=this.getRealChildren();this.j=this.m.length;this.l=this.win.document.createElement("div");this.l.classList.add("i-amphtml-slides-container");this.l.setAttribute("aria-live","polite");this.fa&&this.l.classList.add("i-amphtml-slidescroll-no-snap");if(this.K){var b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-start-marker");
this.l.appendChild(b);b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-end-marker");this.l.appendChild(b)}this.element.appendChild(this.l);this.m.forEach(function(b,d){a.Z.push(b.getAttribute("data-slide-id")||d.toString());a.setAsOwner(b);b.classList.add("amp-carousel-slide");var c=a.win.document.createElement("div");c.classList.add("i-amphtml-slide-item");a.l.appendChild(c);c.appendChild(b);a.L.push(c)});this.Y();this.l.addEventListener("scroll",this.da.bind(this));this.l.addEventListener("touchmove",
this.ua.bind(this));this.l.addEventListener("touchend",this.ta.bind(this));this.registerAction("goToSlide",function(b){(b=b.args)&&a.goToSlide(b.index)},1)};g.isLoopingEligible=function(){return 1<this.j};g.mutatedAttributesCallback=function(a){var b=a.slide;void 0!==b&&this.goToSlide(b)};g.ua=function(){this.clearAutoplay();this.K&&(this.$=!0,this.V&&F(this.win).cancel(this.V))};
g.ta=function(){var a=this;if(this.$){this.S&&F(this.win).cancel(this.S);var b=this.fa?45:100;this.V=F(this.win).delay(function(){a.U||(W(a,a.l.scrollLeft),a.V=null)},b)}this.$=!1};g.onLayoutMeasure=function(){this.D=this.getLayoutWidth()};g.layoutCallback=function(){var a=ja(this.element);if(a)return Promise.resolve();if(null===this.h)Ga(this,this.ja);else{var b=w().assertNumber(this.h,"E#19457 this.slideIndex_"),c=Ha(this,b);this.scheduleLayout(this.m[b]);this.X=this.l.scrollLeft=c}return Promise.resolve()};
g.unlayoutCallback=function(){this.h=null;return S.prototype.unlayoutCallback.call(this)};g.updateViewportState=function(a){null!==this.h&&this.updateInViewport(this.m[w().assertNumber(this.h,"E#19457 this.slideIndex_")],a)};g.hasPrev=function(){return this.shouldLoop||0<this.h};g.hasNext=function(){return this.shouldLoop||this.h<this.m.length-1};
g.moveSlide=function(a,b){if(null!==this.h){var c=this.hasNext(),d=this.hasPrev();if(1==a&&c||-1==a&&d){var e=this.h+a;-1==e?e=this.j-1:e>=this.j&&(e=0);b?X(this,1!=a||d?this.D:0,a):Y(this,e)}}};g.da=function(){var a=this;this.S&&F(this.win).cancel(this.S);var b=this.l.scrollLeft;this.R||Ia(this,b);if(!this.V){var c=this.K?135:this.R?45:100;this.S=F(this.win).delay(function(){a.U||(a.K?W(a,b):X(a,b))},c)}this.X=b};
function Ia(a,b){var c=a.l.scrollWidth;-1==a.O&&b>=a.X?X(a,b).then(function(){a.O=0}):1==a.O&&b<=a.X?X(a,b).then(function(){a.O=0}):a.O=0>b?-1:b+a.D>c?1:0}function X(a,b,c){a.U=!0;var d=Ja(a,b)-a.h,e=a.hasPrev(),f=e?a.D:0;0!=d||1!=c&&-1!=c||(d=c);if(1==d||-1!=d&&d==-1*(a.j-1))f=e?2*a.D:a.D;else if(-1==d||d==a.j-1)f=0;return Ka(a,b,f).then(function(){W(a,f)})}
function Ja(a,b){var c=Math.round(b/a.D),d=0;b=a.hasPrev();var e=a.hasNext();b&&e?d=c-1:e?d=c:b&&(d=c-1);b=a.h+d;return b=a.shouldLoop?0>b?a.j-1:b>=a.j?0:b:0>b?0:b>=a.j?a.j-1:b}function La(a,b){var c=String(b+1),d=String(a.j);return" "+(a.element.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",c).replace("%s",d)}g.getPrevButtonTitle=function(){var a=this.h,b=0<=a-1?a-1:this.shouldLoop?this.j-1:null;a=null==b?0:b;return S.prototype.getPrevButtonTitle.call(this)+La(this,a)};
g.getNextButtonTitle=function(){var a=this.h,b=a+1<this.j?a+1:this.shouldLoop?0:null;a=null==b?this.j-1:b;return S.prototype.getNextButtonTitle.call(this)+La(this,a)};function W(a,b){if(u(b)&&null!==a.h){a.U=!0;var c=Ja(a,b);a.C.mutate(function(){a.R&&a.l.classList.add("i-amphtml-no-scroll");Y(a,c);a.C.mutate(function(){a.R&&a.l.classList.remove("i-amphtml-no-scroll");a.U=!1})})}}
g.goToSlide=function(a){var b=parseInt(a,10);!isFinite(b)||0>b||b>=this.j?this.user().error("AMP-CAROUSEL","Invalid [slide] value: ",a):null===this.h?this.ja=b:Y(this,b)};
function Ga(a,b){var c=a.j;if(0>b||b>=c||a.h==b)return!1;var d=0<=b-1?b-1:a.shouldLoop?a.j-1:null,e=b+1<a.j?b+1:a.shouldLoop?0:null,f=[];null!=d&&f.push(d);f.push(b);null!=e&&e!==d&&f.push(e);null!==a.h&&a.updateInViewport(a.m[w().assertNumber(a.h,"E#19457 this.slideIndex_")],!1);var h=a.m[b];if(void 0===h)return x().error("AMP-CAROUSEL","Attempting to access a non-existant slide %s / %s",b,c),!1;a.updateInViewport(h,!0);f.forEach(function(c,d){a.shouldLoop&&va(a.L[c],d+1);a.L[c].classList.add("i-amphtml-slide-item-show");
c==b?(a.scheduleLayout(a.m[c]),a.scheduleResume(a.m[c]),a.m[c].setAttribute("aria-hidden","false")):(a.schedulePreload(a.m[c]),a.m[c].setAttribute("aria-hidden","true"))});a.l.scrollLeft=Ha(a,b);Ma(a,b);a.h=b;a.J&&a.h===a.j-1&&(a.ka++,a.ka==a.J&&a.removeAutoplay());Na(a,f);a.setControlsState();a.updateButtonTitles();return!0}
function Y(a,b){var c=Ga(a,b);if(c){var d=a.win;var e=E({index:b});var f={detail:e};Object.assign(f,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent("slidescroll.slideChange",f):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent("slidescroll.slideChange",!!f.bubbles,!!f.cancelable,e),e=d);a.ga.trigger(a.element,"slideChange",e,100);a.element.dispatchCustomEvent("slideChange",{index:b})}}function Ha(a,b){var c=a.D;if(!a.shouldLoop&&0==b||1>=a.m.length)c=0;return c}
function Na(a,b){for(var c=a.j,d=0;d<c;d++)a.L[d].classList.contains("i-amphtml-slide-item-show")&&(b.includes(d)||(a.shouldLoop&&va(a.L[d],""),a.L[d].classList.remove("i-amphtml-slide-item-show"),a.m[d].removeAttribute("aria-hidden")),a.h!=d&&a.schedulePause(a.m[d]))}function Ka(a,b,c){if(b==c)return Promise.resolve();var d=O(b,c);c=G(.8,0,.6,1);var e=a.l;return I(e,function(b){a.l.scrollLeft=d(b)},80,c).thenAlways()}g.Y=function(){this.element.addEventListener("touchmove",function(a){a.stopPropagation()})};
function Ma(a,b){var c=b-a.h;if(0!=c){1!==Math.abs(c)&&(c=0>c?1:-1,null===a.h&&(c=1));var d=null===a.h?"null":a.Z[a.h],e=E({fromSlide:d,toSlide:a.Z[b]});U(a.element,"amp-carousel-change",e);1==c?U(a.element,"amp-carousel-next",e):U(a.element,"amp-carousel-prev",e)}};function Z(a){return AMP.BaseElement.apply(this,arguments)||this}q(Z,AMP.BaseElement);Z.prototype.upgradeCallback=function(){return"slides"==this.element.getAttribute("type")?new V(this.element):new P(this.element)};(function(a){a.registerElement("amp-carousel",Z,".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,0.5);background-position:50% 50%;background-repeat:no-repeat;-webkit-transform:translateY(-50%);transform:translateY(-50%);visibility:hidden;z-index:10}.amp-mode-mouse .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){-webkit-animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both;animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){-webkit-animation:none;animation:none}@-webkit-keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{-webkit-animation:none;animation:none;opacity:0;visibility:hidden}.i-amphtml-slides-container{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;-webkit-scroll-snap-type:x mandatory!important;scroll-snap-type:x mandatory!important;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;display:none!important;-webkit-box-flex:0!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-webkit-box-flex:0!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-webkit-box-ordinal-group:0!important;-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-webkit-box-ordinal-group:100000001!important;-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{-webkit-scroll-snap-type:none!important;scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-carousel-0.1.js.map

