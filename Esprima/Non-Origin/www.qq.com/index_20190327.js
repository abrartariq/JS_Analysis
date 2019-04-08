!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.emonitor={})}(this,function(e){"use strict";var t=Object.prototype.toString,r=Object.prototype.hasOwnProperty,n=function(e){return"[object Array]"===t.call(e)},o=function(e){return"[object Object]"===t.call(e)},i=function(e){return"function"==typeof e},a=function(e,t){return r.call(e,t)},s=function(e){if(!e)return{};var t=document.createElement("a");return t.href=e,{host:t.host,path:t.pathname,hostname:t.hostname,protocol:t.protocol.slice(0,-1)}},c={duration:"delay",name:"resurl",type:"type"},d=["css","script","img","video","audio"],u=["cdn","cgi"],p=["s_path","s_uuid","s_traceid","s_guid","s_appid","s_vuserid","hc_pgv_pvid","s_omgid","err_desc"],l=(function(){function e(e){this.value=e}function t(t){function r(o,i){try{var a=t[o](i),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){r("next",e)},function(e){r("throw",e)}):n(a.done?"return":"normal",a.value)}catch(e){n("throw",e)}}function n(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?r(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(n,a){var s={key:e,arg:t,resolve:n,reject:a,next:null};i?i=i.next=s:(o=i=s,r(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){},v=function(e){var t=e.name,r=e.url,n=void 0===r?window.location.href:r;t=t.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(n);return o&&o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):""},g=function(e){for(var t=encodeURIComponent(e)+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return decodeURIComponent(o.substring(t.length,o.length))}return null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Math.random()<=e},w=function(e,t,r){var n=null;return function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this;clearTimeout(n),n=setTimeout(function(){e.apply(s,i),!r||r()},t)}},_=function(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")},b=function(e){var t=e.baseUrl,r=e.data,n=e.method,o=void 0===n?"GET":n;if("GET"===o){var i=new Image;i.onload=i.onerror=function(){i=null},i.src=t+"&"+_(r)}else if("POST"===o)try{var a=null;(a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("POST",t,!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(_(r))}catch(e){console.warn("xmlhttp error",e)}},S=function(e){var t=[];return n(e)&&e.forEach(function(e){var r={};for(var n in e)if(c[n]&&(r[c[n]]=e[n],"resurl"===c[n])){var o=s(e[n]),i=o.hostname,a=o.path;r.reshost=i,r.respath=a,r.httpcode=200}t.push(r)}),t},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},n=[];if(o(t))for(var i in t)-1!==p.indexOf(String(i))?(r[i]=t[i],n.push(i)):console.warn(i,"could not be modify.");return h({},e,r)},x=function(){var e="";try{if(e=window.localStorage.getItem("emonitor.hc_pgv_pvid"))return e;var t=(new Date).getTime();return e="ek"+[t,Math.floor(t*Math.random()*Math.random()).toString().slice(-5)].join(""),window.localStorage.setItem("emonitor.hc_pgv_pvid",e),e}catch(t){return console.warn("emonitor.hc_pgv_pvid get error",t),e}},k=navigator.userAgent,T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t="unknown",r="unknown",n="unknown",o="unknown",i="unknown",a=e.toLowerCase();if(a.indexOf("windows")>-1?i="windows":a.indexOf("linux")>-1?i="linux":a.indexOf("mac")>-1&&(i="mac"),window.opera)o=r=window.opera.version(),n="opera";else if(/AppleWebKit\/(\S+)/.test(e))if(o=RegExp.$1,n="webkit",/Chrome\/(\S+)/.test(e))r=RegExp.$1,t="chrome";else if(/Version\/(\S+)/.test(e))r=RegExp.$1,t="safari";else{var s=parseFloat(o);r=s<100?1:s<312?1.2:s<412?1.3:2,t="safari"}else/KHTML\/(\S+)/.test(e)||/Konqueror\/([^;]+)/.test(e)?(o=r=RegExp.$1,n="khtml",t="konq"):/rv:([^\)]+)\) Gecko\/\d{8}/.test(e)?(o=RegExp.$1,n="gecko",/Firefox\/(\S+)/.test(e)&&(r=RegExp.$1,t="firefox")):/MSIE ([^;]+)/.test(e)&&(o=r=RegExp.$1,n="ie",t="ie");return{machine:"PC",name:t,version:r,engineVer:o,engine:n,machineSys:i}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=T(e),r=t.machineSys,n={mac:"mac"===r,version:t.engineVer,name:r},o={},i={iphone:e.match(/(iphone)\s(os\s)?([\d_]+)/i),ipad:e.match(/(ipad).*\s([\d_]+)/i),ipod:e.match(/(ipod).*\s([\d_]+)/i),android:e.match(/(android)\s([\d\.]+)/i),windows:e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)};i.ipod&&(n.ios=n.ipod=!0,n.version=i.ipod[2].replace(/_/g,"."),n.name="ipod"),i.ipad&&(n.ios=n.ipad=!0,n.version=i.ipad[2].replace(/_/g,"."),n.name="ipad"),i.iphone&&(n.iphone=n.ios=!0,n.version=i.iphone[3].replace(/_/g,"."),n.name="iphone"),i.android&&(n.android=!0,n.version=i.android[2],n.name="android"),i.windows&&(n.windows=!0,n.version=i.windows[2],n.name="windows");var a={IE:e.match(/; msie\b|; trident\b|\bedge\//i),WeChat:e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)||e.match(/MicroMessenger\/((\d+)\.(\d+))/),MQQClient:!e.match(/QQReader/)&&e.match(/QQ\/(\d+\.\d+)/i)||e.match(/V1_AND_SQ_([\d\.]+)/),MQQReader:e.match(/QQReader/i),QQvideo:!e.match(/TADChid/)&&e.match(/QQLiveBrowser\/([\d.]+)/),QQHDvideo:e.match(/QQLiveHDBrowser\/([\d.]+)/),TBSSDK:e.match(/MQQBrowser\/(\d+\.\d+)/i)&&e.match(/MSDK\/(\d+\.\d+)/),MQQBrowser:e.match(/MQQBrowser\/(\d+\.\d+)/i),UCBrowser:e.match(/ucbrowser\/(\d+\.\d+)/i),Qzone:e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),Weibo:e.match(/Weibo/i),qqnews:e.match(/qqnews\/(\d+\.\d+\.\d+)/i),QQLiveBroadcast:e.match(/QQLiveBroadcast/i),kuserAgentibao:e.match(/qnreading\/(\d+\.\d+\.\d+)/i),liebao:e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),baiduboxapp:e.match(/baiduboxapp\/(\d+\.\d+\.\d+)/i),IEMobile:e.match(/IEMobile(\/|\s+)(\d+\.\d+)/)||e.match(/WPDesktop/),douban:e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),MiuiBrowser:e.match(/MiuiBrowser\/(\d+\.\d+)/i),BingPreview:e.match(/BingPreview\/(\d+\.)/i),TADChid:e.match(/TADChid\/(\d+)/i),Chrome:n.ios?e.match(/CriOS\/(\d+\.\d+)/):e.match(/Chrome\/(\d+\.\d+)/),Safari:e.match(/Safari\/(\d+\.\d+)/),sukan:e.match(/synopsis/i)};if(a.MQQReader)o.MQQReader=!0,o.version=1,o.name="MQQReader";else if(a.IEMobile)o.IEMobile=!0,o.version=1,o.name="IEMobile";else for(var s in a)if(a[s]){o[s]=!0,o.version=a[s][1]||0,o.name=s;break}return{browser:o,os:n}},L=!1,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.type;try{if(!window.performance&&!window.performance.getEntries)return console.warn("prerformance is not supported"),[];var n=performance.getEntries(),o=[];if(!n&&!n.length)return o;try{n.forEach(function(e){var t={name:e.name,time_redirect:e.redirectEnd-e.redirectStart,time_dns:e.domainLookupEnd-e.domainLookupStart,time_requestTime:e.responseEnd-e.requestStart,time_tcp:e.connectEnd-e.connectStart,type:e.initiatorType,starttime:Math.floor(e.startTime),entryType:e.entryType,duration:Math.floor(e.duration)||0,decodedBodySize:e.decodedBodySize||0,nextHopProtocol:e.nextHopProtocol,json_entries:JSON.stringify(e)};o.push(t)})}catch(e){console.error("get resourceTiming err::::",e)}return t?o.filter(function(e){return e.name===t})[0]:r?o.filter(function(e){return e.type===r}):o}catch(e){return console.warn("get performance happen error"),[]}},j={SCRIPT:"script",LINK:"link",IMG:"img",AUDIO:"audio",VIDEO:"video",FETCH:"fetch",AJAX:"ajax",PROMISE:"promise"},Q=function(){return v({name:"openid"})},C=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).isNumber,t=void 0!==e&&e,r=g("uin");if(!r)return null;if(t){var n=Number(r.replace(/^[o0]*/gi,""));return n||null}return r},R=function(){var e=-1!==["o04IBALZLPIw2k0PgFTTQPajV8pI"].indexOf(Q()),t=-1!==["o0515569877","o1031127461","o0827574297","o0371078926"].indexOf(C());return e||t},q=function(){var e=(new Date).getTime();return window.performance&&window.performance.now&&(e=window.performance.now()),e},I=function(e){var t={type:"",url:"",code:"",isErr:!1,source:e};if(!o(e))return t;if(a(e,"err_type")){t.type=e.err_type;try{if(e.err_desc){var r=JSON.parse(e.err_desc);t.url=r.url||r.fileName||e.s_url}else t.url=e.s_url}catch(r){t.url=e.s_url,console.warn(r)}t.isErr=!0}else a(e,"cgiurl")?(t.type="cgi",t.url=e.cgiurl,t.code=e.httpcode):a(e,"resurl")?(t.type="cdn",t.url=e.resurl,t.code=e.httpcode):a(e,"time_domready")?(t.type="pagepf",t.url=e.s_url,t.code=200):a(e,"json_entries")&&(t.type="slowlog",t.url=e.s_url,t.code=200);return t},P=function(){function e(t){var r=t.options,n=void 0===r?{}:r,o=t.baseUrl,i=void 0===o?"":o,a=t.sampling,s=void 0===a?1:a,c=(t.data,t.delay),d=void 0===c?2e3:c,u=t.name,p=t.params,m=void 0===p?[]:p,h=t.cgi,f=void 0===h?{}:h,v=t.ptag,g=t.onBeforeSend,y=t.debug;l(this,e),this.options=n,this.errorList=[],this.baseUrl=i,this.sampling=s,this.params=m,this.dealy=d,this.name=u,this.cgiOptions=f,this.ptag=v,this.onBeforeSend=g,this.debug=y}return m(e,[{key:"init",value:function(){try{this.proxyAjax(),this.proxyError(),this.proxyConsole(),this.proxyFetch(),this.injectOptions()}catch(e){this.send({err_msg:"emonitor init happen error",err_stack:""+e,err_type:"jserror",err_function:"emonitor init func"})}}},{key:"injectOptions",value:function(){var e=this;e.params.forEach(function(t){e.options[t]=v({name:t})}),"string"==typeof e.options.qq&&e.options.qq.length>0&&(e.options.openid="")}},{key:"proxyConsole",value:function(){var e=this;if("undefined"!=typeof console&&"function"==typeof console.error){var t=console.error;console.error=function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];t.apply(window.console,n),e.send({err_msg:n.join(","),level:"error",err_type:"console"})}}}},{key:"reportCgi",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this,r=t.cgiOptions||{},n=r.baseUrl,o=r.sampling,i=void 0===o?1:o;if(n){var a=e.cgiurl,c=s(a),d=c.host,u=c.path;Math.random()<=i&&t.send(h({cgipath:u,cgihost:d,bizcode_server:""},e),!1,n)}}},{key:"proxyAjax",value:function(){var e=Object.create(null),t=this,r=(new Date).getTime(),n=null,o=null,i=function(e){o=q();var i={},a=e&&e.currentTarget,s=this.emonitorAjaxURL,c=a?{currentStatus:a.status,cgiurl:s||a.responseURL}:{},d=c.currentStatus,u=void 0===d?"":d,p=c.cgiurl,l=void 0===p?"":p;try{t.reportCgi({cgiurl:l,delay:Math.round(Math.max(o-r,0)),httpcode:u,bizcode:"",bizmsg:"",starttime:n})}catch(e){console.warn(e)}(u<200||u>=300)&&(i={err_msg:"ajax请求错误",err_stack:"错误码:"+this.status,level:"error",err_type:j.AJAX,err_code:this.status,err_desc:JSON.stringify({fileName:l,category:"ajax",text:this.statusText,status:this.status})},t.errorList.push(i),t.send(h({},i)),i={})};e.send=XMLHttpRequest.prototype.send,e.open=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.open.apply(this,[t,r,n]),this.emonitorAjaxURL=r},XMLHttpRequest.prototype.send=function(t){n=(new Date).getTime(),r=q();var o=this.onreadystatechange;this.onreadystatechange=function(e){this.addEventListener?(this.addEventListener("error",i),this.addEventListener("load",i),this.addEventListener("abort",i),o&&o.apply(this,[e,t])):"4"===String(this.readyState)&&(i(e),this.status>=200&&this.status<300&&o&&o.apply(this,[e,t]))},e.send.apply(this,[t])}}},{key:"proxyFetch",value:function(){var e=this;if(window.fetch){var t=window.fetch;window.fetch=function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=(new Date).getTime(),a=q();return t.apply(null,n).then(function(t){var r=q();try{e.reportCgi({cgiurl:n[0],delay:Math.round(Math.max(r-a,0)),httpcode:t.status,bizcode:"",bizmsg:t.statusText,starttime:i})}catch(e){console.warn(e)}return t.ok||""===t.url||e.send({err_msg:"fetch not ok",err_type:j.FETCH,err_code:t.status,err_desc:JSON.stringify({type:"error",fileName:n[0],options:n[1],category:"fetch"})}),t}).catch(function(t){e.send({err_msg:"fetch not ok",err_stack:""+t,err_type:j.FETCH,err_desc:JSON.stringify({type:"error",fileName:n[0],options:n[1],category:"fetch"})})})}}}},{key:"proxyError",value:function(){var e=this,t=arguments,r=this;window.addEventListener("error",function(e){var t=e.target?e.target:e.srcElement;if(t!==window&&t.nodeName&&j[t.nodeName.toUpperCase()]){var n={err_msg:t.localName+" is load error",err_stack:"resource is not found",err_type:""+t.localName,err_desc:JSON.stringify({tagName:t.localName,type:e.type,fileName:t.currentSrc||t.src||t.href,category:"resource"}),timestamps:(new Date).getTime()};r.errorList.push(n),r.send(h({},n))}},!0);var n=window.onerror;window.onerror=function(o,i,a,s,c){if("Script error."===o&&!i)return!1;var d={};return setTimeout(function(){(d=c&&c.stack?{err_msg:o,err_stack:c.stack,err_type:"jserror"}:{err_msg:o,err_stack:"",err_type:"jserror"}).err_desc=JSON.stringify({url:r.URL,fileName:i,category:"javascript",line:a,col:s}),r.errorList.push(h({},d)),r.send(h({},d))},0),"function"==typeof n?n.apply(e,t):(console.error("window.onerror is set before the value other than the function, the value is "+n),!r.debug)},window.addEventListener("unhandledrejection",function(e){var t={err_msg:e.reason,err_type:j.PROMISE,err_desc:JSON.stringify({url:location.href,category:"promise"}),err_stack:"promise is error"};r.errorList.push(t),r.send(t),e.preventDefault()},!0)}},{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)-1!==["baseUrl","params","options","sampling","delay","name"].indexOf(String(t))&&(this[t]=e[t]);return this}},{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments[2],n=this,a=(n.cgiOptions||{}).btrace,c=void 0!==a&&a,d=e.err_type,p=void 0===d?"console":d;if(y(n.sampling)||R()){var l=this,m="jserror"===p?300:l.delay,f=w(b,m,function(){l.errorList=[]}),g=s(location.href),_=g.host,S=g.path,k=g.protocol,T=M(navigator.userAgent),L=T.browser,O=T.os,j=h({},this.options,e,{timestamps:(new Date).getTime(),_dc:Math.random(),dtime:(new Date).getTime(),hh_ua:navigator.userAgent,hh_uav:L.version,hh_ref:document.referrer,hc_pgv_pvid:x(),s_url:location.href,s_host:_,s_path:S,s_protocol:k,s_browser:L.name,s_os:O.name,s_qq:v({name:"qq"}),s_openid:v({name:"openid"}),s_app:l.name,s_ptag:l.ptag}),Q=l.onBeforeSend;if(i(Q))try{var C=I(j),q=Q(C);if("boolean"==typeof q&&!q)return;if(-1!==u.indexOf(C.type)&&"btrace.qq.com"===s(C.url).hostname&&!c)return;o(q)&&(j=E(j,q))}catch(e){console.warn(e)}f({baseUrl:r||l.baseUrl,data:j,method:t?"POST":"GET"})}}}]),e}();e.create=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=e.cgi,o=void 0===n?{sampling:1,baseUrl:""}:n,i=e.baseUrl,a=e.delay,s=void 0===a?2e3:a,c=e.sampling,d=void 0===c?1:c,u=e.name,p=void 0===u?"unknown":u,l=e.params,m=void 0===l?[]:l,h=e.ptag,v=void 0===h?"":h,g=e.debug,y=void 0!==g&&g,w=e.onBeforeSend,_=new P({options:r,baseUrl:i,params:m,delay:s,name:p,sampling:d,cgi:o,ptag:v,debug:y,onBeforeSend:void 0===w?f:w});return _.init(),_},e.getRcTiming=O,e.getPfTiming=function(){try{var e=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance;if(void 0===e)return!1;var t=e.timing,r={};return r.time_response=t.responseStart-t.requestStart,r.time_firstpaint=t.responseEnd-t.responseStart,r.time_domready=t.domContentLoadedEventStart-t.responseEnd,r.time_readyStart=t.fetchStart-t.navigationStart,r.time_redirectTime=t.redirectEnd-t.redirectStart,r.time_appcacheTime=t.domainLookupStart-t.fetchStart,r.time_dns=t.domainLookupEnd-t.domainLookupStart,r.time_tcp=t.connectEnd-t.connectStart,r.time_requestTime=t.responseEnd-t.requestStart,r.time_initDomTreeTime=t.domInteractive-t.responseEnd,r.time_loadEventTime=t.loadEventEnd-t.loadEventStart,r.time6=t.domLoading-t.fetchStart,r.time_whiteScreen=t.domLoading-t.fetchStart,r.time7=t.loadEventEnd-t.fetchStart,r.time_firstScreenTime=t.loadEventEnd-t.fetchStart,r.time_parseDomTree=t.domComplete-t.domInteractive,r.time8="",r}catch(e){return console.warn("err",e),{}}},e.getCdnTiming=function(){var e={};return d.forEach(function(t){e[t]=S(O({type:t}))}),e},e.getSysInfo=M,e.getUrlParam=v,e.getCookie=g,e.injectVconsole=function(){try{var e=document.createElement("script"),t=function(){L||(L=new window.VConsole)};e.src="https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js",e.async=!0,e.charset="utf-8",e.onload=t,e.onreadystatechange=function(){"complete"===this.readyState&&t()},document.getElementsByTagName("head")[0].appendChild(e)}catch(e){console.error("vConsole script load err")}},Object.defineProperty(e,"__esModule",{value:!0})});
/*  |xGv00|d10cf5eb451e12c80b5175e8f0d92e95 */