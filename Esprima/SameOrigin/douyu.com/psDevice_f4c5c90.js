!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o(1),o(2)},function(e,t,o){},function(e,t,o){"use strict";!function(){function e(){var e=document.getElementById("openApp")||{},t=e.href||"/client/index",o=$ROOM&&$ROOM.room_id||0,i=location.hash.split("&")||[],n=i[1]||0,a=i[2]||"",r=navigator.userAgent;function c(e){e?(window.location=e+"://"+o+"&"+n+"&"+a,setTimeout(function(){window.location=t},3e3)):window.location=t}switch(!0){case/android/i.test(r):return function(){if(e.onclick=function(){var e=document.createElement("iframe"),t=null;e.src="douyutvtest://platformapi/startApp?room_id="+o+"&isVertical="+n+"&room_src="+a,e.style.display="none",document.body.appendChild(e),t=setTimeout(function(){document.removeChild(e),clearTimeout(t)},1e3)},document.all)e.click();else{var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),e.dispatchEvent(t)}}();case/iphone/i.test(r):return c("douyutv");case/ipad/i.test(r):return c("douyutvhd");case/windows/i.test(r)&&/phone/i.test(r):return c();default:return}}if(-1!==location.hash.indexOf("#mobile"))e();else try{t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|android|playbook|silk|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&function(){var e=window.location.pathname;"/"!==e&&(e=e.replace(/\/$/,""));for(var t="https://m.douyu.com",o=function(e,t){if(!e||!t)return"";var o=e.match(t);return o&&o[1]||""},i=[{web:"/",wap:"/",isAllMatch:!0},{web:"/home_beta",wap:"/",isAllMatch:!0},{web:"/directory/all",wap:"/list/room",isAllMatch:!0},{web:"/g_",wap:"/list/room?type=",isAllMatch:!1},{web:"/",wap:"/",isAllMatch:!1}],n=0,a=i.length;n<a;n++){var r=i[n];if(r.isAllMatch){if(e===r.web)return void(window.location.href=t+r.wap)}else{var c=o(e,new RegExp("^"+r.web+"(.*)$","i"));if(c&&!c.match(/\//g))return void(window.location.href=t+r.wap+c)}}}()}catch(t){e()}var t;("true"===localStorage.getItem("SUPPORT_WEBP")||!1)&&(document.documentElement.className+=" shark-webp")}()}]);