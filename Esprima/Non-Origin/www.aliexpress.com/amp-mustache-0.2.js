(self.AMP=self.AMP||[]).push({n:"amp-mustache",v:"1903281741200",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ga;if("function"==typeof Object.setPrototypeOf)ga=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}ga=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ga,la="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},p=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a}(this);function z(){z=function(){};p.Symbol||(p.Symbol=ma)}var ma=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function qa(){z();var a=p.Symbol.iterator;a||(a=p.Symbol.iterator=p.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&la(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(this)}});qa=function(){}}function ra(a){var b=0;return sa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function sa(a){qa();var b={next:a};b[p.Symbol.iterator]=function(){return this};return b};function ta(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ua=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function va(a){var b=Object.create(null);if(!a)return b;for(var c;c=ua.exec(a);){var d=ta(c[1],c[1]),e=c[2]?ta(c[2],c[2]):"";b[d]=e}return b};self.log=self.log||{user:null,dev:null,userForEmbed:null};var wa=self.log;function xa(){if(!wa.user)throw Error("failed to call initLogConstructor");return wa.user}function B(a,b,c){xa().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ya(a){return a||{}};function C(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function za(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};function Aa(){var a=100;this.B=a;this.l=this.m=0;this.j=Object.create(null)}Aa.prototype.has=function(a){return!!this.j[a]};Aa.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};
Aa.prototype.put=function(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.B)){if(wa.dev)a=wa.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};var F=self.AMP_CONFIG||{},Ba={thirdParty:F.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:F.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof F.thirdPartyFrameRegex?new RegExp(F.thirdPartyFrameRegex):F.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:F.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof F.cdnProxyRegex?new RegExp(F.cdnProxyRegex):F.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:F.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:F.localDev||!1};var Ca=ya({c:!0,v:!0,a:!0,ad:!0,action:!0}),Da,Ea,Oa=/[?&]amp_js[^&]*/,Pa=/[?&]amp_gsa[^&]*/,Qa=/[?&]amp_r[^&]*/,Ra=/[?&]amp_kit[^&]*/,Sa=/[?&]usqp[^&]*/;
function I(a){var b;Da||(Da=self.document.createElement("a"),Ea=self.UrlCache||(self.UrlCache=new Aa));var c=b?null:Ea,d=Da;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a}function Ta(a){"string"==typeof a&&(a=I(a));return Ba.cdnProxyRegex.test(a.origin)}
function Ua(a){"string"==typeof a&&(a=I(a));if(!Ta(a))return a.href;var b=a.pathname.split("/");B(Ca[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);B(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");var e;e=(e=a.search)&&"?"!=e?(e=e.replace(Oa,"").replace(Pa,"").replace(Qa,"").replace(Ra,"").replace(Sa,"").replace(/^[?&]/,""))?"?"+e:"":"";return b+e+(a.hash||"")}
function Va(a,b){"string"==typeof b&&(b=I(b));if("function"==typeof URL)var c=(new URL(a,b.href)).toString();else{c=a;var d=b;"string"==typeof d&&(d=I(d));c=c.replace(/\\/g,"/");var e=I(c);c=C(c.toLowerCase(),e.protocol)?e.href:C(c,"//")?d.protocol+c:C(c,"/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c}function Wa(a){var b=I(a),c=va(b.search);B(!("__amp_source_origin"in c),"Source origin is not allowed in %s",a)};function Xa(a){a:{try{var b=a.document.cookie}catch(l){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==ta(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=ta(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var Ya=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Za(a){for(var b=[],c;c=Ya.exec(a);){var d=c[1],e=void 0,f=void 0;if(c[2]){var l=c[3].toLowerCase();if("w"==l)e=parseInt(c[2],10);else if("x"==l)f=parseFloat(c[2]);else continue}else f=1;b.push({url:d,width:e,dpr:f})}return new $a(b)}
function $a(a){B(0<a.length,"Srcset must have at least one source");this.h=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}B(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?ab:bb);this.A=b}
$a.prototype.select=function(a,b){if(this.A){b*=a;a=this.h;for(var c=0,d=Infinity,e=Infinity,f=0;f<a.length;f++){var l=a[f].width,n=Math.abs(l-b);if(n<=1.1*d||1.2<b/e)c=f,d=n,e=l;else break}}else for(a=this.h,c=0,d=Infinity,e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c;return this.h[b].url};$a.prototype.getUrls=function(){return this.h.map(function(a){return a.url})};
$a.prototype.stringify=function(a){for(var b=[],c=this.h,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.A?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");b.push(f)}return b.join(", ")};function ab(a,b){B(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function bb(a,b){B(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};function cb(a,b,c){return"src"==b||"href"==b||"srcset"==b?db(a,b,c):c}function db(a,b,c){var d=self.location;Wa(c);var e=Ta(d),f=I(Ua(d));if("href"==b&&!C(c,"#"))return Va(c,f);if("src"==b)return"amp-img"==a?eb(c,f,e):Va(c,f);if("srcset"==b){try{var l=Za(c)}catch(n){return xa().error("URL-REWRITE","Failed to parse srcset: ",n),c}return l.stringify(function(a){return eb(a,f,e)})}return c}
function eb(a,b,c){a=I(Va(a,b));return"data:"==a.protocol||Ta(a)||!c?a.href:Ba.cdn+"/i/"+("https:"==a.protocol?"s/":"")+encodeURIComponent(a.host)+a.pathname+(a.search||"")+(a.hash||"")};var fb={applet:!0,audio:!0,base:!0,embed:!0,frame:!0,frameset:!0,iframe:!0,img:!0,link:!0,meta:!0,object:!0,style:!0,video:!0},nb="a b br caption colgroup code del div em hr i ins li mark ol p q s small span strong sub sup table tbody time td th thead tfoot tr u ul".split(" "),ob="amp-fx fallback heights layout min-font-size max-font-size on option placeholder submitting submit-success submit-error validation-for verify-error visible-when-invalid href style text subscriptions-action subscriptions-actions subscriptions-decorate subscriptions-dialog subscriptions-display subscriptions-section subscriptions-service".split(" "),
pb={a:["rel","target"],div:["template"],form:["action-xhr","verify-xhr","custom-validation-reporting","target"],input:["mask-output"],template:["type"],textarea:["autoexpand"]},qb=["_top","_blank"],rb=["javascript:","vbscript:","data:","<script","\x3c/script"],sb=ya({input:{type:/(?:image|button)/i}}),tb="form formaction formmethod formtarget formnovalidate formenctype".split(" "),ub=ya({input:tb,textarea:tb,select:tb}),vb=/!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
function wb(a,b,c){var d=!0;d=void 0===d?!1:d;if(!d){if(C(b,"on")&&"on"!=b)return!1;if(c)for(var e=c.toLowerCase().replace(/[\s,\u0000]+/g,""),f=0;f<rb.length;f++)if(0<=e.indexOf(rb[f]))return!1}if("style"==b)return!vb.test(c);if("class"==b&&c&&/(^|\W)i-amphtml-/i.test(c)||("src"==b||"href"==b||"srcset"==b)&&/__amp_source_origin/.test(c))return!1;var l=ub[a];if(l&&-1!=l.indexOf(b))return!1;var n=sb[a];if(n){var q=n[b];if(q&&-1!=c.search(q))return!1}return!0};function xb(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)};var M=Object.freeze||function(a){return a},yb=M("a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(" ")),
zb=M("svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform audio canvas circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan video view vkern".split(" ")),Ab=M("feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(" ")),
Bb=M("math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover".split(" ")),Cb=M(["#text"]),Db=Object.freeze||function(a){return a},Eb=Db("accept action align alt autocomplete background bgcolor border cellpadding cellspacing checked cite class clear color cols colspan coords crossorigin datetime default dir disabled download enctype face for headers height hidden high href hreflang id integrity ismap label lang list loop low max maxlength media method min multiple name noshade novalidate nowrap open optimum pattern placeholder poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title type usemap valign value width xmlns".split(" ")),
Fb=Db("accent-height accumulate additive alignment-baseline ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end fill fill-opacity fill-rule filter flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering specularconstant specularexponent spreadmethod stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale tabindex targetx targety transform text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(" ")),
Gb=Db("accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(" ")),
Hb=Db(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ib=Object.hasOwnProperty,Jb=Object.setPrototypeOf,Kb=("undefined"!==typeof Reflect&&Reflect).apply;Kb||(Kb=function(a,b,c){return a.apply(b,c)});function N(a,b){Jb&&Jb(a,null);for(var c=b.length;c--;){var d=b[c];if("string"===typeof d){var e=d.toLowerCase();e!==d&&(Object.isFrozen(b)||(b[c]=e),d=e)}a[d]=!0}return a}function Lb(a){var b={},c=void 0;for(c in a)Kb(Ib,a,[c])&&(b[c]=a[c]);return b}
var O=Object.seal||function(a){return a},Mb=O(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Nb=O(/<%[\s\S]*|[\s\S]*%>/gm),Ob=O(/^data-[\-\w.\u00B7-\uFFFF]/),Pb=O(/^aria-[\-\w]+$/),Qb=O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Rb=O(/^(?:\w+script|data):/i),Sb=O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g);z();z();qa();
var Tb="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){z();z();z();return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function R(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var Ub=("undefined"!==typeof Reflect&&Reflect).apply,Vb=Array.prototype.slice,Wb=Object.freeze;Ub||(Ub=function(a,b,c){return a.apply(b,c)});
function Xb(a,b){if("object"!==("undefined"===typeof a?"undefined":Tb(a))||"function"!==typeof a.createPolicy)return null;var c=null,d="data-tt-policy-suffix";b.currentScript&&b.currentScript.hasAttribute(d)&&(c=b.currentScript.getAttribute(d));var e="dompurify"+(c?"#"+c:"");try{return a.createPolicy(e,{createHTML:function(a){return a}})}catch(f){return console.warn("TrustedTypes policy "+e+" could not be created."),null}}
function Yb(){function a(a){var c,k;d("beforeSanitizeAttributes",a,null);var D=a.attributes;if(D){var e={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m};for(k=D.length;k--;){var r=c=D[k],f=r.name,da=r.namespaceURI;c=c.value.trim();var g=f.toLowerCase();e.attrName=g;e.attrValue=c;e.keepAttr=!0;d("uponSanitizeAttribute",a,e);c=e.attrValue;if("name"===g&&"IMG"===a.nodeName&&D.id){var A=D.id;D=Ub(Vb,D,[]);q("id",a);q(f,a);D.indexOf(A)>k&&a.setAttribute("id",A.value)}else if("INPUT"!==a.nodeName||
"type"!==g||"file"!==c||!m[g]&&P[g])"id"===f&&a.setAttribute(f,""),q(f,a);else continue;if(e.keepAttr&&(T&&(c=c.replace(Mb," "),c=c.replace(Nb," ")),b(a.nodeName.toLowerCase(),g,c)))try{da?a.setAttributeNS(da,f,c):a.setAttribute(f,c),h.removed.pop()}catch(rc){}}d("afterSanitizeAttributes",a,null)}}function b(a,b,c){if(hb&&("id"===b||"name"===b)&&(c in w||c in cc))return!1;if(!Fa||!Ob.test(b))if(!G||!Pb.test(b))if(!m[b]||P[b]||!(ib[b]||Ga.test(c.replace(Sb,""))||("src"===b||"xlink:href"===b)&&"script"!==
a&&0===c.indexOf("data:")&&dc[a]||jb&&!Rb.test(c.replace(Sb,"")))&&c)return!1;return!0}function c(a){d("beforeSanitizeElements",a,null);if(f(a))return y(a),!0;var b=a.nodeName.toLowerCase();d("uponSanitizeElement",a,{tagName:b,allowedTags:v});if(!v[b]||Ha[b]){if(Ia&&!ec[b]&&"function"===typeof a.insertAdjacentHTML)try{var c=a.innerHTML;a.insertAdjacentHTML("AfterEnd",r?r.createHTML(c):c)}catch(pc){}y(a);return!0}if("noscript"===b&&a.innerHTML.match(/<\/noscript/i)||"noembed"===b&&a.innerHTML.match(/<\/noembed/i))return y(a),
!0;!kb||a.firstElementChild||a.content&&a.content.firstElementChild||!/</g.test(a.textContent)||(h.removed.push({element:a.cloneNode()}),a.innerHTML=a.innerHTML?a.innerHTML.replace(/</g,"&lt;"):a.textContent.replace(/</g,"&lt;"));T&&3===a.nodeType&&(b=a.textContent,b=b.replace(Mb," "),b=b.replace(Nb," "),a.textContent!==b&&(h.removed.push({element:a.cloneNode()}),a.textContent=b));d("afterSanitizeElements",a,null);return!1}function d(a,b,c){x[a]&&x[a].forEach(function(a){a.call(h,b,c,U)})}function e(a){return"object"===
("undefined"===typeof J?"undefined":Tb(J))?a instanceof J:a&&"object"===("undefined"===typeof a?"undefined":Tb(a))&&"number"===typeof a.nodeType&&"string"===typeof a.nodeName}function f(a){return a instanceof Ja||a instanceof Ka?!1:"string"===typeof a.nodeName&&"string"===typeof a.textContent&&"function"===typeof a.removeChild&&a.attributes instanceof V&&"function"===typeof a.removeAttribute&&"function"===typeof a.setAttribute?!1:!0}function l(a){return K.call(a.ownerDocument||a,a,W.SHOW_ELEMENT|
W.SHOW_COMMENT|W.SHOW_TEXT,function(){return W.FILTER_ACCEPT},!1)}function n(a){var b=void 0,c=void 0;if(La)a="<remove></remove>"+a;else{var k=a.match(/^[\s]+/);(c=k&&k[0])&&(a=a.slice(c.length))}if(na)try{b=(new ba).parseFromString(a,"text/html")}catch(qc){}Q&&N(Ha,["title"]);if(!b||!b.documentElement){var d=b=E.createHTMLDocument("");k=d.body;k.parentNode.removeChild(k.parentNode.firstElementChild);k.outerHTML=r?r.createHTML(a):a}c&&b.body.insertBefore(w.createTextNode(c),b.body.childNodes[0]||
null);return fc.call(b,ca?"html":"body")[0]}function q(a,b){try{h.removed.push({attribute:b.getAttributeNode(a),from:b})}catch(gb){h.removed.push({attribute:null,from:b})}b.removeAttribute(a)}function y(a){h.removed.push({element:a});try{a.parentNode.removeChild(a)}catch(oc){a.outerHTML=da}}function H(a){U&&U===a||(a&&"object"===("undefined"===typeof a?"undefined":Tb(a))||(a={}),v="ALLOWED_TAGS"in a?N({},a.ALLOWED_TAGS):u,m="ALLOWED_ATTR"in a?N({},a.ALLOWED_ATTR):lb,Ha="FORBID_TAGS"in a?N({},a.FORBID_TAGS):
{},P="FORBID_ATTR"in a?N({},a.FORBID_ATTR):{},X="USE_PROFILES"in a?a.USE_PROFILES:!1,G=!1!==a.ALLOW_ARIA_ATTR,Fa=!1!==a.ALLOW_DATA_ATTR,jb=a.ALLOW_UNKNOWN_PROTOCOLS||!1,kb=a.SAFE_FOR_JQUERY||!1,T=a.SAFE_FOR_TEMPLATES||!1,ca=a.WHOLE_DOCUMENT||!1,ea=a.RETURN_DOM||!1,Ma=a.RETURN_DOM_FRAGMENT||!1,mb=a.RETURN_DOM_IMPORT||!1,La=a.FORCE_BODY||!1,hb=!1!==a.SANITIZE_DOM,Ia=!1!==a.KEEP_CONTENT,oa=a.IN_PLACE||!1,Ga=a.ALLOWED_URI_REGEXP||Ga,T&&(Fa=!1),Ma&&(ea=!0),X&&(v=N({},[].concat(R(Cb))),m=[],!0===X.html&&
(N(v,yb),N(m,Eb)),!0===X.svg&&(N(v,zb),N(m,Fb),N(m,Hb)),!0===X.svgFilters&&(N(v,Ab),N(m,Fb),N(m,Hb)),!0===X.mathMl&&(N(v,Bb),N(m,Gb),N(m,Hb))),a.ADD_TAGS&&(v===u&&(v=Lb(v)),N(v,a.ADD_TAGS)),a.ADD_ATTR&&(m===lb&&(m=Lb(m)),N(m,a.ADD_ATTR)),a.ADD_URI_SAFE_ATTR&&N(ib,a.ADD_URI_SAFE_ATTR),Ia&&(v["#text"]=!0),ca&&N(v,["html","head","body"]),v.table&&N(v,["tbody"]),Wb&&Wb(a),U=a)}function h(a){return Yb(a)}var g=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"undefined"===typeof window?null:window;
h.version="1.0.10";h.removed=[];if(!g||!g.document||9!==g.document.nodeType)return h.isSupported=!1,h;var t=g.document,na=!1,Q=!1,w=g.document,pa=g.DocumentFragment,J=g.Node,W=g.NodeFilter,L=g.NamedNodeMap,V=void 0===L?g.NamedNodeMap||g.MozNamedAttrMap:L,Ja=g.Text,Ka=g.Comment,ba=g.DOMParser,k=g.TrustedTypes;"function"===typeof g.HTMLTemplateElement&&(L=w.createElement("template"),L.content&&L.content.ownerDocument&&(w=L.content.ownerDocument));var r=Xb(k,t),da=r?r.createHTML(""):"",A=w,E=A.implementation,
K=A.createNodeIterator,fc=A.getElementsByTagName,fa=A.createDocumentFragment,gc=t.importNode,x={};h.isSupported=E&&"undefined"!==typeof E.createHTMLDocument&&9!==w.documentMode;var Ga=Qb,v=null,u=N({},[].concat(R(yb),R(zb),R(Ab),R(Bb),R(Cb))),m=null,lb=N({},[].concat(R(Eb),R(Fb),R(Gb),R(Hb))),Ha=null,P=null,G=!0,Fa=!0,jb=!1,kb=!1,T=!1,ca=!1,Na=!1,La=!1,ea=!1,Ma=!1,mb=!1,hb=!0,Ia=!0,oa=!1,X={},ec=N({},"audio head math script style template svg video".split(" ")),dc=N({},["audio","video","img","source",
"image"]),ib=N({},"alt class for id label name pattern placeholder summary title value style xmlns".split(" ")),U=null,cc=w.createElement("form");h.isSupported&&(function(){try{n('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(na=!0)}catch(D){}}(),function(){try{n("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(Q=!0)}catch(D){}}());var hc=function gb(b){var k=void 0,e=l(b);for(d("beforeSanitizeShadowDOM",b,null);k=
e.nextNode();)d("uponSanitizeShadowNode",k,null),c(k)||(k.content instanceof pa&&gb(k.content),a(k));d("afterSanitizeShadowDOM",b,null)};h.sanitize=function(b,k){var d=void 0,f=void 0,A=void 0,E=void 0;b||(b="\x3c!--\x3e");if("string"!==typeof b&&!e(b)){if("function"!==typeof b.toString)throw new TypeError("toString is not a function");b=b.toString();if("string"!==typeof b)throw new TypeError("dirty is not a string, aborting");}if(!h.isSupported){if("object"===Tb(g.toStaticHTML)||"function"===typeof g.toStaticHTML){if("string"===
typeof b)return g.toStaticHTML(b);if(e(b))return g.toStaticHTML(b.outerHTML)}return b}Na||H(k);h.removed=[];if(!oa)if(b instanceof J)d=n("\x3c!--\x3e"),f=d.ownerDocument.importNode(b,!0),1===f.nodeType&&"BODY"===f.nodeName?d=f:d.appendChild(f);else{if(!ea&&!T&&!ca&&-1===b.indexOf("<"))return r?r.createHTML(b):b;d=n(b);if(!d)return ea?null:da}d&&La&&y(d.firstChild);for(var m=l(oa?b:d);k=m.nextNode();)3===k.nodeType&&k===A||c(k)||(k.content instanceof pa&&hc(k.content),a(k),A=k);A=null;if(oa)return b;
if(ea){if(Ma)for(E=fa.call(d.ownerDocument);d.firstChild;)E.appendChild(d.firstChild);else E=d;mb&&(E=gc.call(t,E,!0));return E}var K=ca?d.outerHTML:d.innerHTML;T&&(K=K.replace(Mb," "),K=K.replace(Nb," "));return r?r.createHTML(K):K};h.setConfig=function(a){H(a);Na=!0};h.clearConfig=function(){U=null;Na=!1};h.isValidAttribute=function(a,c,k){U||H({});return b(a.toLowerCase(),c.toLowerCase(),k)};h.addHook=function(a,b){"function"===typeof b&&(x[a]=x[a]||[],x[a].push(b))};h.removeHook=function(a){x[a]&&
x[a].pop()};h.removeHooks=function(a){x[a]&&(x[a]=[])};h.removeAllHooks=function(){x={}};return h};var S=Yb()(self),Zb={script:{attribute:"type",values:["application/json","application/ld+json"]}},$b={USE_PROFILES:{html:!0,svg:!0,svgFilters:!0}},ac=0;
function bc(a){function b(a){H.forEach(function(a){delete y[a]});H.length=0;xb(this.removed,function(b){if(b.from===a&&b.attribute){b=b.attribute;var c=b.value;if("on"===b.name.toLowerCase())return a.setAttribute("on",c),!0}return!1})}function c(a,b){function c(){y[e]||(y[e]=!0,H.push(e))}var d=a.nodeName.toLowerCase(),e=b.attrName,h=b.attrValue;y=b.allowedAttributes;var g=C(d,"amp-");if(g)c();else{if("a"==d&&"target"==e){var l=h.toLowerCase();h=qb.includes(l)?l:"_top"}var n=pb[d];n&&n.includes(e)&&
c()}var q="["==e[0]&&"]"==e[e.length-1],V=C(e,"data-amp-bind-");q&&a.setAttribute("data-amp-bind-"+e.substring(1,e.length-1),h);if(q||V)a.setAttribute("i-amphtml-binding",""),f(a);wb(d,e,h)?h&&!C(e,"data-amp-bind-")&&(h=cb(d,e,h)):(xa().error("purifier",'Removing "'+e+'" attribute with invalid '+("value in <"+d+" "+e+'="'+h+'">.')),b.keepAttr=!1);b.attrValue=h}function d(){q.forEach(function(a){delete n[a]});q.length=0}function e(a,b){var c=b.tagName;n=b.allowedTags;C(c,"amp-")&&(n[c]=!0,f(a));"a"===
c&&a.hasAttribute("href")&&!a.hasAttribute("target")&&a.setAttribute("target","_top");var d=Zb[c];if(d){b=d;var e=b.attribute;b=b.values;a.hasAttribute(e)&&b.includes(a.getAttribute(e))&&(n[c]=!0,q.push(c))}}function f(b){a&&!b.hasAttribute("i-amphtml-key")&&b.setAttribute("i-amphtml-key",ac++)}var l=S,n,q=[],y,H=[];l.addHook("uponSanitizeElement",e);l.addHook("afterSanitizeElements",d);l.addHook("uponSanitizeAttribute",c);l.addHook("afterSanitizeAttributes",b)}
function ic(a,b){b=void 0===b?self.document:b;var c;S.addHook("uponSanitizeElement",function(a,b){var d=b.tagName;c=b.allowedTags;"template"===d&&(a=a.getAttribute("type"))&&"amp-mustache"===a.toLowerCase()&&(c.template=!0)});S.addHook("afterSanitizeElements",function(){c.template=!1});var d=S.sanitize(a,{ALLOWED_TAGS:nb,FORCE_BODY:!0,RETURN_DOM_FRAGMENT:!0});S.removeAllHooks();var e=b.createElement("div");e.appendChild(d);return e.innerHTML};/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
var jc={};
(function(a){function b(a){return"function"===typeof a}function c(a){return Q(a)?"array":typeof a}function d(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function e(a,b){return null!=a&&"object"===typeof a&&Object.prototype.hasOwnProperty.call(a,b)}function f(a,b){return w.call(a,b)}function l(a){return!f(pa,a)}function n(a){return String(a).replace(/[&<>"'`=\/]/g,function(a){return J[a]})}function q(b,c){function e(){if(fa&&!n)for(;g.length;)delete r[g.pop()];else g=[];n=fa=!1}function k(a){"string"===
typeof a&&(a=a.split(L,2));if(!Q(a)||2!==a.length)throw Error("Invalid tags: "+a);x=new RegExp(d(a[0])+"\\s*");t=new RegExp("\\s*"+d(a[1]));v=new RegExp("\\s*"+d("}"+a[1]))}if(!b)return[];var f=[],r=[],g=[],fa=!1,n=!1,x,t,v;k(c||a.tags);for(var u=new h(b),m,q,w,P,G;!u.eos();){b=u.pos;if(q=u.scanUntil(x)){m=0;for(var J=q.length;m<J;++m)w=q.charAt(m),l(w)?g.push(r.length):n=!0,r.push(["text",w,b,b+1]),b+=1,"\n"===w&&e()}if(!u.scan(x))break;fa=!0;m=u.scan(Ka)||"name";u.scan(W);"="===m?(q=u.scanUntil(V),
u.scan(V),u.scanUntil(t)):"{"===m?(q=u.scanUntil(v),u.scan(Ja),u.scanUntil(t),m="&"):q=u.scanUntil(t);if(!u.scan(t))throw Error("Unclosed tag at "+u.pos);P=[m,q,b,u.pos];r.push(P);if("#"===m||"^"===m)f.push(P);else if("/"===m){G=f.pop();if(!G)throw Error('Unopened section "'+q+'" at '+b);if(G[1]!==q)throw Error('Unclosed section "'+G[1]+'" at '+b);}else if("name"===m||"{"===m||"&"===m)n=!0}if(G=f.pop())throw Error('Unclosed section "'+G[1]+'" at '+u.pos);return H(y(r))}function y(a){for(var b=[],
c,d,e=0,k=a.length;e<k;++e)if(c=a[e])"text"===c[0]&&d&&"text"===d[0]?(d[1]+=c[1],d[3]=c[3]):(b.push(c),d=c);return b}function H(a){for(var b=[],c=b,d=[],e,k,f=0,g=a.length;f<g;++f)switch(e=a[f],e[0]){case "#":case "^":c.push(e);d.push(e);c=e[4]=[];break;case "/":k=d.pop();k[5]=e[2];c=0<d.length?d[d.length-1][4]:b;break;default:c.push(e)}return b}function h(a){this.tail=this.string=a;this.pos=0}function g(a,b){this.view=a;this.cache={".":this.view};this.parent=b}function t(){this.cache={}}var na=Object.prototype.toString,
Q=Array.isArray||function(a){return"[object Array]"===na.call(a)},w=RegExp.prototype.test,pa=/\S/,J={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},W=/\s*/,L=/\s+/,V=/\s*=/,Ja=/\s*\}/,Ka=/#|\^|\/|>|\{|&|=|!/;h.prototype.eos=function(){return""===this.tail};h.prototype.scan=function(a){a=this.tail.match(a);if(!a||0!==a.index)return"";a=a[0];this.tail=this.tail.substring(a.length);this.pos+=a.length;return a};h.prototype.scanUntil=function(a){a=this.tail.search(a);
switch(a){case -1:var b=this.tail;this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,a),this.tail=this.tail.substring(a)}this.pos+=b.length;return b};g.prototype.push=function(a){return new g(a,this)};g.prototype.lookup=function(a){var c=this.cache;if(c.hasOwnProperty(a))var d=c[a];else{for(var k=this,f,g,h=!1;k;){if(0<a.indexOf("."))for(d=k.view,f=a.split("."),g=0;null!=d&&g<f.length;){if(!e(d,f[g])){d=null;break}g===f.length-1&&(h=!0);d=d[f[g++]]}else e(k.view,a)?(d=k.view[a],
h=!0):d=null;if(h)break;k=k.parent}c[a]=d}b(d)&&(d=d.call(this.view));return d};t.prototype.clearCache=function(){this.cache={}};t.prototype.parse=function(a,b){var c=this.cache,d=c[a];null==d&&(d=c[a]=q(a,b));return d};t.prototype.render=function(a,b,c){var d=this.parse(a);b=b instanceof g?b:new g(b);return this.renderTokens(d,b,c,a)};t.prototype.renderTokens=function(a,b,c,d){for(var e="",f,k,g,h=0,r=a.length;h<r;++h)g=void 0,f=a[h],k=f[0],"#"===k?g=this.renderSection(f,b,c,d):"^"===k?g=this.renderInverted(f,
b,c,d):">"===k?g=this.renderPartial(f,b,c,d):"&"===k?g=this.unescapedValue(f,b):"name"===k?g=this.escapedValue(f,b):"text"===k&&(g=this.rawValue(f)),void 0!==g&&(e+=g);return e};t.prototype.renderSection=function(a,c,d,e){function f(a){return k.render(a,c,d)}var k=this,g="",h=c.lookup(a[1]);if(h){if(Q(h))for(var r=0,l=h.length;r<l;++r)g+=this.renderTokens(a[4],c.push(h[r]),d,e);else if("object"===typeof h||"string"===typeof h||"number"===typeof h)g+=this.renderTokens(a[4],c.push(h),d,e);else if(b(h)){if("string"!==
typeof e)throw Error("Cannot use higher-order sections without the original template");h=h.call(c.view,e.slice(a[3],a[5]),f);null!=h&&(g+=h)}else g+=this.renderTokens(a[4],c,d,e);return g}};t.prototype.renderInverted=function(a,b,c,d){var e=b.lookup(a[1]);if(!e||Q(e)&&0===e.length)return this.renderTokens(a[4],b,c,d)};t.prototype.renderPartial=function(a,c,d){if(d&&(a=b(d)?d(a[1]):d[a[1]],null!=a))return this.renderTokens(this.parse(a),c,d,a)};t.prototype.unescapedValue=function(b,c){b=c.lookup(b[1]);
if(null!=b)return a.sanitizeUnescaped?a.sanitizeUnescaped(b):b};t.prototype.escapedValue=function(b,c){b=c.lookup(b[1]);if(null!=b)return a.escape(b)};t.prototype.rawValue=function(a){return a[1]};a.name="mustache.js";a.version="2.2.0";a.tags=["{{","}}"];var ba=new t;a.clearCache=function(){return ba.clearCache()};a.parse=function(a,b){return ba.parse(a,b)};a.render=function(a,b,d){if("string"!==typeof a)throw new TypeError('Invalid template! Template should be a "string" but "'+c(a)+'" was given as the first argument for mustache#render(template, view, partials)');
return ba.render(a,b,d)};a.to_html=function(c,d,e,f){c=a.render(c,d,e);if(b(f))f(c);else return c};a.escape=n;a.sanitizeUnescaped=null;a.setUnescapedSanitizer=function(b){a.sanitizeUnescaped=b};a.Scanner=h;a.Context=g;a.Writer=t})(jc);function Y(a,b){var c=AMP.BaseTemplate.call(this,a,b)||this;jc.setUnescapedSanitizer(function(a){return ic(a,c.win.document)});return c}var Z=AMP.BaseTemplate;Y.prototype=aa(Z.prototype);Y.prototype.constructor=Y;if(ka)ka(Y,Z);else for(var kc in Z)if("prototype"!=kc)if(Object.defineProperties){var lc=Object.getOwnPropertyDescriptor(Z,kc);lc&&Object.defineProperty(Y,kc,lc)}else Y[kc]=Z[kc];Y.C=Z.prototype;
Y.prototype.compileCallback=function(){if(!this.viewerCanRenderTemplates()){this.o={};if("TEMPLATE"==this.element.tagName){var a=this.element;if("content"in a)var b=a.content.cloneNode(!0);else{b=a.ownerDocument.createDocumentFragment();var c=b.ownerDocument.createDocumentFragment();for(a=a.firstChild;a;a=a.nextSibling)c.appendChild(a.cloneNode(!0));b.appendChild(c)}mc(this,b);c=this.element.ownerDocument.createElement("div");c.appendChild(b);b=c.innerHTML}else b="SCRIPT"==this.element.tagName?this.element.textContent:
"";this.w=b;jc.parse(this.w,void 0)}};function mc(a,b){var c=b.querySelectorAll("template");za(c,function(b,c){c="__AMP_NESTED_TEMPLATE_"+c;a.o[c]=b.outerHTML;var d=a.element.ownerDocument.createTextNode("{{{"+c+"}}}");b.parentNode.replaceChild(d,b)})}Y.prototype.setHtml=function(a){return nc(this,a)};Y.prototype.render=function(a){var b=a;"object"===typeof a&&(b=Object.assign({},a,this.o));a=jc.render(this.w,b,void 0);return nc(this,a)};
function nc(a,b){var c=self;if(c.__AMP__EXPERIMENT_TOGGLES)var d=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);d=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var e in c.AMP_CONFIG){var f=c.AMP_CONFIG[e];"number"===typeof f&&0<=f&&1>=f&&(d[e]=Math.random()<f)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(e=c.AMP_CONFIG["allow-doc-opt-in"],f=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){f=
f.getAttribute("content").split(",");for(var l=0;l<f.length;l++)-1!=e.indexOf(f[l])&&(d[f[l]]=!0)}Object.assign(d,Xa(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length)for(e=c.AMP_CONFIG["allow-url-opt-in"],c=va(c.location.originalHash||c.location.hash),f=0;f<e.length;f++)l=c["e-"+e[f]],"1"==l&&(d[e[f]]=!0),"0"==l&&(d[e[f]]=!1)}d=!!d["amp-list-diffing"];d=void 0===d?!1:d;c=Object.assign({},$b,{ADD_ATTR:ob,FORBID_TAGS:Object.keys(fb),FORCE_BODY:!0,
RETURN_DOM:!0,ALLOW_UNKNOWN_PROTOCOLS:!0});bc(d);b=S.sanitize(b,c);S.removeAllHooks();d=a.win.document.createElement("div");d.innerHTML=b.innerHTML;return a.unwrap(d)}(function(a){a.registerTemplate("amp-mustache",Y)})(self.AMP);
})});
//# sourceMappingURL=amp-mustache-0.2.js.map

