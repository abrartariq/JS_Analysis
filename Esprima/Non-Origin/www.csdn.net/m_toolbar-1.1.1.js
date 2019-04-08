// Traffic Stats of the entire Web site By baidu end
var _gaq = [];
var userAgent = navigator.userAgent.toLowerCase();

// Traffic Stats of the entire Web site By baidu
var _hmt = _hmt || [];
(function() {
    var getCookie =function (objName){//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for(var i = 0;i < arrStr.length;i ++){
      var temp = arrStr[i].split("=");
      if(temp[0] == objName && objName=="UD") return decodeURIComponent(temp[1]);
      if(temp[0] == objName) return decodeURI(temp[1]);
    }
  }
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
function siteId(){
  var loac_host = window.location.host;
  // loac_host ='www.csdn.net'
  var siteId;
  if(loac_host.indexOf("blog")=== 0){
    siteId = 'UA-127895514-2'
  }else if(loac_host.indexOf("download")=== 0){
    siteId = 'UA-127895514-8'
  } else if(loac_host.indexOf("edu")=== 0){
    siteId = 'UA-127895514-9'
  } else if(loac_host.indexOf("bbs")=== 0){
    siteId = 'UA-127895514-4'
  }else if(loac_host.indexOf("ask")=== 0){
    siteId = 'UA-127895514-5'
  }else if(loac_host.indexOf("gitbook")=== 0){
    siteId = 'UA-127895514-10'
  }else if(loac_host.indexOf("iteye")=== 0){
    siteId = 'UA-127895514-6'
  }else if(loac_host.indexOf("passport")=== 0){
    siteId = 'UA-127895514-7'
  }else if(loac_host.indexOf("so")=== 0){
    siteId = 'UA-127895514-3'
  }else if(loac_host.indexOf("www")=== 0){
    if (loac_host.indexOf("iteye")>0){
      siteId = 'UA-127895514-6'
    }else {
      siteId = 'UA-127895514-1'
    }
  }else {
    siteId = ''
  }
  return siteId
}
// Traffic Stats of the entire Web site By baidu end


// debug test mobile exp
// window.csdn = window.csdn || {};
// window.csdn.mobileToolbar = window.csdn.mobileToolbar || {};
// // 调用方法提前设置参数 prodTag作为默认值
// window.csdn.mobileToolbar = {
//   mobileParams: {
//     // prodTag: 'blog'
//     prodTitle: 'php',
//     prodHref: 'www.csdn.net',
//     isProdToast: true/false
//   }
//   // beforeRun: function () {
//   //   return true;
//   // }
//   afterRun: function () {
//
//   }
//   // isInit: true   // false 关闭初始化,默认true
// }


  // toolbar使用：

  // window.csdn = window.csdn || {};
  // // 所有相关参数绑定到 mobileToolbar
  // window.csdn.mobileToolbar = window.csdn.mobileToolbar || {};

  // 导航展示控制

  // 1. 非手动启动调用引入脚本之前写入,如下
  //   window.csdn.mobileToolbar.mobileParams = {
  //     prodTag: 'blog',          // 展示对应log,存在第一优先
  //     prodTitle: 'php'          // 展示对应标题,字号大小24px 默认
  //     prodHref: 'www.csdn.net'  // 跳转链接
  //     isProdToast: true/false   // 是否开启toast提示返回上一级标注
  //   }

  // 2. 手动启动结束
  //   window.csdn.mobileToolbar.isInit = false;
  //   window.csdn.mobileToolbar.start(params);    // params可有可无，无状态默认csdn log

  // 3. 关于params
  //   {
  //     isWx        // 是否开启微信小程序环境下，取消toolbar生成
  //     isInit      // 是否开启初始化默认启动
  //     beforeRun   // toolbar执行前需要的操作
  //     afterRun    // toolbar执行插入后运行操作
  //     prodTag     // 展示对应log,存在第一优先
  //     prodTitle   // 展示对应标题
  //     prodHref    // 跳转链接
  //     isProdToast // 是否开启toast提示返回上一级标注
  //   }


!(function($, run){

  var head = document.getElementsByTagName('head')[0];
  var prodTag;
  var prodTitle;
  var prodHref;
  var isProdToast;
  var isLoginStrategy;
  var isGuideStrategy;
  var version = '1.1.2';


  // 获取mobile title传入显示参数值
  var getMobileParam = function (param) {
    var mobileParams = {};
    var params = {}

    prodTag = param.prodTag || (param.mobileParams && param.mobileParams.prodTag);
    prodTitle = param.prodTitle || (param.mobileParams && param.mobileParams.prodTitle);
    prodHref = param.prodHref || (param.mobileParams && param.mobileParams.prodHref);
    isProdToast = param.isProdToast || (param.mobileParams && param.mobileParams.isProdToast);
    isLoginStrategy = param.isLoginStrategy || (param.mobileParams && param.mobileParams.isLoginStrategy);
    isGuideStrategy = param.isGuideStrategy || (param.mobileParams && param.mobileParams.isGuideStrategy);
    mobileParams = $.extend(mobileParams, {prodTag: prodTag, prodTitle: prodTitle, prodHref: prodHref, isProdToast: isProdToast, isLoginStrategy: isLoginStrategy, isGuideStrategy: isGuideStrategy});
    prodTag = mobileParams.prodTag;
    prodTitle = mobileParams.prodTitle;
    prodHref = mobileParams.prodHref;
    isProdToast = mobileParams.isProdToast;
    isLoginStrategy = mobileParams.isLoginStrategy;
    isGuideStrategy = mobileParams.isGuideStrategy;

    if (!prodTag && !prodTitle) {
      prodTag = 'csdn';
      params['prod'] = prodTag;
    } else {
      params['prod'] = prodTag ? prodTag : prodTitle ? prodTitle : 'csdn';
    }
    return params;
  }

  // cookie
  var getCookie =function (objName){//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for(var i = 0;i < arrStr.length;i ++){
    var temp = arrStr[i].split("=");
    if(temp[0] == objName && objName=="UD") return decodeURIComponent(temp[1]);
    if(temp[0] == objName) return decodeURI(temp[1]);
    }
  };
  var setCookie = function (name,value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();// + ";domain=.csdn.net;path=/";
  };

  // 编码
  var HTMLEncode =function(str) {
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;");
    return s;
  };

  // toolbaricon
  var toobalIcon = function () {
    // 注册url，https://passport.csdn.net/account/register?ref=toolbar
    protocol = location.protocol.substr(0, 4) === 'http' ? '' : 'http:';
    var isMToolbarItem = $("script[data-isMToolbarItem]").data('isMToolbarItem');
    var s, ss = [
          protocol + '//csdnimg.cn/public/common/toolbar/js/m_iconfont.js?v=1.1.4'
        ];
    for (var i = 0; i < ss.length; i++) {
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.charset = 'utf-8';
        s.src = ss[i];
        head.insertBefore(s, null);
    }
  };

  // 添加跳转策略
  var loginStrategy = function ($oScriptTag) {
    var isStrategy;
    if (!$oScriptTag) {
      return false;
    }
    isStrategy = $oScriptTag.get(0).hasAttribute('strategy') || !!isLoginStrategy;
    if (!isStrategy) {
      return false;
    }
    var scriptPos = $oScriptTag.get(0).nextElementSibling || $oScriptTag.get(0).nextSibling;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = '//g.csdnimg.cn/login-box/1.0.4/login-auto.js';
    // $oScriptTag.after(script);
    if (scriptPos) {
      $oScriptTag.parent().get(0).insertBefore(script, scriptPos);
    } else {
      $oScriptTag.parent().get(0).appendChild(script);
    }
  };
  // test app guide page
  var guideStrategy = function ($oScriptTag) {
    var isStrategy;
    if (!$oScriptTag) {
      return false;
    }
    isStrategy = $oScriptTag.get(0).hasAttribute('data-guide-strategy') || !!isGuideStrategy;
    if (!isStrategy) {
      return false;
    }
    var scriptPos = $oScriptTag.get(0).nextElementSibling || $oScriptTag.get(0).nextSibling;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = '//g.csdnimg.cn/guide-box/1.0.0/guide-box.js';
    if (scriptPos) {
      $oScriptTag.parent().get(0).insertBefore(script, scriptPos);
    } else {
      $oScriptTag.parent().get(0).appendChild(script);
    }
  };


  // 添加动态设置登录导向链接 目前已经取消
  var setLoginHref = function (templateObj) {
    var templateHtml
    var weixinAuthorHref = 'https://passport.csdn.net/v1/login/account/login'
    templateObj && templateObj.templateHtml && (templateHtml = templateObj.templateHtml, function () {
      templateHtml = $(templateHtml).find('#loginTag a').attr('href', weixinAuthorHref).end()
      templateHtml = templateHtml.get(0).outerHTML
    }())
    return templateHtml
  };

  // toolbar
  var appendToolBar = function (params) {
    var currUser = {
      userName:"",
      userNick:'<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>',
      userInfo:"",
      desc : '<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>',
      avatar:"//csdnimg.cn/public/common/toolbar/images/100x100.jpg"
    };
    var prodLogo = 'csdn';
    var searchType = '';
    var $oScriptTag = $('#m-toolbar-tpl-scriptId');
    var skin =$oScriptTag.attr('skin') == 'black' ? 'csdn-toolbar-skin-black' : '';
    var fixed = $oScriptTag.attr('fixed') === 'top' ? 'navbar-fixed-top' : '';
    // var prodIndex= $oScriptTag.attr("domain")?$oScriptTag.attr("domain"):window.location.protocol+"//"+window.location.host;
        // prodIndex+='?ref=toolbar_logo';
    var hasLogin = false;
    var loginMark = 'unlogin';


    // let menus show
    var leftMenus = function () {
      var mToolBarClose = $('#toolbar_left_close'),
          homeBtn = $('#mToolbarHome'),
          mTollbarWrap = $('.m_toolbar_left');
      if(mToolBarClose.length > 0){
          mToolBarClose.on('click', function(){
              if(mTollbarWrap.length > 0){
                  mTollbarWrap.animate({'left':'-65%'}, 500);
              }
          });
      }
      if(homeBtn.length > 0){
          homeBtn.on('click', function(){
              if(mTollbarWrap.length > 0){
                  mTollbarWrap.animate({'left':0}, 500);
              }
          });
      }
      return true;
    }

    var AUtoAvatar = function(AU){
      if(!AU||!currUser.userName){
        return false;
      }
      var _AUPath = AU.split('').join('/');
      var userName = currUser.userName&&currUser.userName.toLowerCase();
      return '//avatar.csdn.net/' + _AUPath + '/2_' + userName + '.jpg';
    };

    // new toolbar
    var generateNewToolbar = function (params) {

      var homeUrl = window.location.href;
      var wwwUrl = homeUrl.split('//')[1];
      var hostReg = /((www.csdn.net\/)|(download.csdn.net\/)|(blog.csdn.net\/)|(bbs.csdn.net\/))/
      var logoHref = prodHref || 'https://www.csdn.net/';
      var iClass;
      var isToast;
      var toastTime = 2000;

      /*
      * init pord logo show
      */
      var prodJSON = {
        "csdn":"#icon-wap_toolbar_csdn",
        "blog" : "#icon-wap_toolbar_blog",
        "download" : "#icon-wap_toolbar_download",
        "bbs" : "#icon_wap_toolbar_bbs",
        "my" :"#icon-wap_toolbar_ucenter",
        "dashboard":"#icon_wap_toolbar_dashboard",
        "news" : "#icon_wap_toolbar_geek",
        "ask" : "#icon_wap_toolbar_ask",
        "notify" : "#icon_wap_toolbar_notify",
        "so": "#sousuo1",
        "edu": "#EDU_logo1"
      };
      var searchJSON = {
        "blog":"blog",
        "download":"doc",
        "bbs":"discuss",
        "geek":"news",
        "edu":"course",
        "mall":"csdn"
      };
      if(prodJSON[$oScriptTag.attr('prod')] || 'csdn'){
        if (prodTag) {
          prodLogo = prodJSON[prodTag] || prodJSON['csdn'];
          prodLogo = '<svg class="icon" aria-hidden="true"><use xlink:href="'+prodLogo+'"></use></svg>';
          if (prodTag && prodTag !== 'csdn') {
            isToast = true;
          }
        } else if (prodTitle) {
          prodLogo = prodTitle;
          iClass = 'm_toolbar_link'
          prodLogo = '<span>' + prodLogo + '</span>'
        } else {
          prodLogo = prodJSON['csdn'];
          prodLogo = '<svg class="icon" aria-hidden="true"><use xlink:href="'+prodLogo+'"></use></svg>';
        }
        searchType = searchJSON[$oScriptTag.attr('prod')] || $oScriptTag.attr('prod') || 'csdn';
      }

      if(!hostReg.test(wwwUrl) || document.referrer !==''){
        logoHref = logoHref || 'javascript:window.history.go(-1);'
      }

      prodLogo = '<a class="' + (iClass ? iClass : '') + '" href="' + logoHref + '">' + prodLogo + '</a>';

      var toastHtml = '<span class="toast-title" id="csdn-toast">点击标题返回上一级</span>';
      if (isProdToast != undefined && typeof isProdToast === 'boolean') {
        isToast = isProdToast
      }
      isToast && (prodLogo = prodLogo + toastHtml);

      var tplHome ='\<div id="csdn-toolbar" class="csdn-toolbar clearfix'+skin+fixed+'">\
          <div class="mToolbarL floatL"><div class="toolbarBack"><svg id="mToolbarHome" class="icon" aria-hidden="true"><use xlink:href="#icon-wap-toolbar-menu"></use></svg></div>\
            <div class="logo floatR">' + prodLogo + '</div></div>\
          <div class="rightmenu floatR clearfix '+loginMark+'">\
            <a class="floatL search_btn" href="http://so.csdn.net/so/?t='+searchType+'"><svg xmlns="//www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M64 58.3L58.4 64 43 48.5c-4.5 3.5-10.1 5.6-16.2 5.6C12 54.1 0 42 0 27S12 0 26.8 0s26.8 12.1 26.8 27c0 5.9-1.9 11.3-5.1 15.8L64 58.3zM26.8 6.5C15.6 6.5 6.5 15.7 6.5 27s9.1 20.5 20.3 20.5c11.2 0 20.3-9.2 20.3-20.5S38 6.5 26.8 6.5z" fill="#999"/></svg></a>\
            <div id="loginTag" class="login floatR">\
              <a  href="https://passport.csdn.net/account/login?ref=toolbar">登录</a>\
            </div>\
            <div class="logout floatR">\
              <a href="//my.csdn.net/"><img src="'+currUser.avatar+'"/></a>\
            </div>\
          </div>\
          </div>';

      var leftHtml = '<div id="m_toolbar_left" class="m_toolbar_left"><div class="m_toolbar_re"><ul class="m_toolbar_list"><li class="m_toolbar_list_cur"><span></span><a href="//www.csdn.net" title="CSDN首页" >CSDN首页</a></li><li><span></span><a href="//blog.csdn.net/" title="博客">博客</a></li>\
          <li><span></span><a href="//edu.csdn.net/" title="学院">学院</a></li>\
          <li><span></span><a href="//download.csdn.net/" title="下载">下载</a></li>\
          <li><span></span><a href="//gitbook.cn/?ref=csdn" title="GitChat">GitChat</a></li>\
          <li><span></span><a href="//bbs.csdn.net" title="论坛">论坛</a></li>\
          <li><span></span><a href="//www.csdn.net/app/" title="App">APP</a></li>\
          <li><span></span><a href="//ask.csdn.net" title="问答">问答</a></li>\
          <li><span></span><a href="https://h5.youzan.com/v2/showcase/homepage?alias=BUj3rrGa2J&ps=760" target="_blank" title="商城">商城</a></li>\
          <li><span></span><a href="//download.csdn.net/vip_code" title="VIP">VIP</a></li>\
          <li><span></span><a href="http://huiyi.csdn.net/" title="活动">活动</a></li>\
          <li><span></span><a href="http://job.csdn.net" title="招聘">招聘</a></li>\
          <li><span></span><a href="http://www.iteye.com" title="ITeye">ITeye</a></li>\
          <li><span></span><a href="//www.tinymind.cn/" title="TinyMind">TinyMind</a></li>\
          <li><span></span><a href="//spec.csdn.net/" title="TinyMind">专题</a></li>\
          </ul><div id="toolbar_left_close" class="icon_r"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-qingchuneirong"></use></svg></div>\
          <div class="m_toolbar_bot">Copyright © 1999-2019, <br/>CSDN.NET, All Rights Reserved</div>\
                  </div> </div>';



      // tplHome = setLoginHref({templateHtml: tplHome})
      // 防止重复
      if ($('#csdn-toolbar').length > 0) {
        $('#csdn-toolbar').empty().remove();
      }
      if ($('#m_toolbar_left').length > 0) {
        $('#m_toolbar_left').empty().remove();
      }

      $(document.body).prepend($(tplHome)) && $(document.body).prepend($(leftHtml)) && leftMenus() && (function(){
        params.afterRun && params.afterRun()
        // toast提示
        isToast && (setTimeout(function() {
        $('#csdn-toast').addClass('toast-title__hide')
        }, toastTime));
      })();

    };

    // 校验登录
    function checkLogin(callback) {
      currUser.userNick = getCookie('UserNick') ||currUser.userNick;
      currUser.userName = getCookie('UserName') || currUser.userName;
      currUser.avatar = AUtoAvatar(getCookie('AU')) || currUser.avatar;
      currUser.desc = getCookie('UD') || currUser.desc;
      if(getCookie('UD')){
        currUser.desc = HTMLEncode(currUser.desc.replace(/\+/g," "));
      }
      callback(currUser);
    }
    checkLogin(function(currUser){
      if(currUser.userName){
          hasLogin = true;
      }
      loginMark = hasLogin ? '' : 'unlogin';
    });

    getMobileParam(params);
    generateNewToolbar(params);
    toobalIcon();
    // app guide
    // guideStrategy($oScriptTag);
    loginStrategy($oScriptTag);
  };

  var exports = {
    $: $,
    appendToolBar: appendToolBar
  }
  run && run(exports);

})(window.jQuery, function (exports) {
  // default value
  var mobileToolbar = {
    isInit: true,
    isWx: false,
    isLoginStrategy: true,
    isGuideStrategy: true
  };
  var isNext = true;
  window.csdn.mobileToolbar && (mobileToolbar = $.extend(mobileToolbar, window.csdn.mobileToolbar));

  // 是否取消toolbar 小程序当中取消
  var miniProgram = function (params) {
    var isEnv = window.wx && window.wx.miniProgram && window.wx.miniProgram;
    if (isEnv) {
      window.wx.miniProgram.getEnv(function(res) {
        !res.miniprogram && params.run(params.param);
      });
    } else {
      params.run(params.param);
    }
  };

  var init = function (params) {
    if (params && (typeof params !== 'object' || typeof params === 'function' || params instanceof Array)) {
      throw new Error('param is error!')
    }

    mobileToolbar && (params = exports.$.extend(mobileToolbar, params));

    if (params.isInit === false) {
        return this;
    }

    if (params.beforeRun && typeof params.beforeRun === 'function') {
        isNext = params.beforeRun();
    }

    if (!params) {
      params = {};
    }

    // 微信条件校验是否开启
    if (params.isWx && isNext) {
      miniProgram({
        run : exports.appendToolBar,
        param: params
      })
    } else {
      isNext && exports.appendToolBar(params);
    }
    return this;
  }

  window.csdn.mobileToolbar = exports.$.extend(window.csdn.mobileToolbar, {
    start: function (params) {
      init(params);
      return this;
    }
  });

  /*
    init
  */
  init(mobileToolbar);
  // 手动调用
  /**
   *  isInit            是否初始化
   *  isWx              是否微信模式
   *  mobileParams
   *    isLoginStrategy 登录策略
   */
  // window.csdn.mobileToolbar.start({
  //   isInit: false,
  //   isWx: true,
  //   mobileParams: {
  //     // prodTag: 'blog'
  //     prodTitle: 'php1'
  //     //isLoginStrategy: true
  //     //isProdToast: true/false
  //   }
  // })
});

