//clicktag 透明按鈕
adM14Var.htmlTxt.clicktag = '<a class="clicktag" href="//ad.ettoday.net/adclick.php?bid='+ adM14Var.bid +'&bannerid='+ adM14Var.bannerid +'" rel="nofollow" target="_blank" title="廣告連結"><span>了解更多 </span></a>';

//圖片型
adM14Var.htmlTxt.pic = '\
	<div class="adM14">\
		<div class="banner">\
			<img src="'+adM14Var.imgSrc1+'">\
		</div>\
	</div>\
';

//MP4 影音型
adM14Var.htmlTxt.video = '\
	<div class="adM14" id="adM14mp4">\
		<div class="banner" onclick="toggleMute_adM14();">\
			<div id="muteIcon" style="background:url(//static.ettoday.net/ad/adM14/icon_mute.png) no-repeat -30px 20px;width:30px;height:60px;position:absolute;bottom:0;right:0;z-index:99999;"></div>\
			<video src="'+adM14Var.videoMp4+'" poster="'+adM14Var.videoPosterSrc+'" webkit-playsinline playsinline autoplay muted preload="auto"/>\
		</div>\
	</div>\
';

//MP4 聲音切換
if (adM14Var.videoMp4 !="") {
	function toggleMute_adM14() {
		//var video=document.getElementById("myVideo")
		var video=$(".adM14 video").get(0);
		if(video.muted){
			video.muted = false;//打開聲音
			video.play();//自動播放 (萬一影片沒有自動播放時可用上)
			$(".adM14 #muteIcon").css({"background-position":"left 20px"});
			ga('create', 'UA-52510577-17', 'auto', {'name': 'adM14'});
			ga("adM14.send", "event", "MobileWeb 天空大看板影音廣告 - 素材編號："+adM14Var.bannerid+"", "打開聲音", ""+adM14Var.videoMp4+"", {'nonInteraction': 0});
		} else {
			video.muted = true;//關閉聲音
			$(".adM14 #muteIcon").css({"background-position":"-30px 20px"});
		}
	}
}

//youtube 型
//取得 Youtube ID
/*
var adM14Var.htmlTxt.youtubeID = adM14Var.htmlTxt.file.split("v=")[1];//用v=分隔網址，取出v=右邊的字串
if(adM14Var.htmlTxt.youtubeID.indexOf("&") >= 0){//如果v=右邊的字串中有&號時
	adM14Var.htmlTxt.youtubeID = adM14Var.htmlTxt.youtubeID.split("&")[0];//用&分隔網址，取出&左邊的字串，即為 Youtube ID
}
adM14Var.htmlTxt.youtube = '\
	<div class="adM14">\
		<div class="banner">\
			<div class="iframe_box">\
				<iframe src="http://www.youtube.com/'+adM14Var.htmlTxt.youtubeID+'"  marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true"></iframe>\
			</div>\
		</div>\
	</div>\
';
*/

//html5網頁型
adM14Var.htmlTxt.html5 = '\
	<div class="adM14">\
		<div class="banner">\
			<div class="iframe_box">\
				<iframe id="adM14_iframe" src="'+adM14Var.file+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true"></iframe>\
			</div>\
		</div>\
	</div>\
';

//第三方廣告碼型
adM14Var.htmlTxt.swf = '\
	<div class="adM14">\
		<div class="banner">\
			<div class="iframe_box">\
				<iframe id="adM14_iframe" src=""  marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true"></iframe>\
			</div>\
		</div>\
	</div>\
';

//初始化
function fnAdM14Init(){

	//移除 #smartbanner
	$("#smartbanner").remove();
    var adM14css = '#smartbanner{display:none!important;}',
    adM14head = document.head || document.getElementsByTagName('head')[0],
    adM14style = document.createElement('style');
    adM14style.type = 'text/css';
    adM14style.appendChild(document.createTextNode(adM14css));
    adM14head.appendChild(adM14style);
    
	//寫入結構
	$("body").prepend(adM14Var.htmlTxt[adM14Var.type]);

	//第三方廣告碼型
	if(adM14Var.type=="swf") {
		var ifrd = document.getElementById("adM14_iframe").contentWindow.document; 
		ifrd.open(); ifrd.write(adM14Var.file); ifrd.close();
		$(".adM14 .iframe_box iframe").css({"transform":"scale("+$(window).innerWidth()/640+")","transform-origin":"0% 0%"});
		$(".adM14 .iframe_box iframe").css({"width":"640px","height":"360px"});
	}

	//html5 強製 ifarme 內容自適應寬高
	if(adM14Var.type=="html5") {
		$(".adM14 .iframe_box iframe").css({"transform":"scale("+$(window).innerWidth()/640+")","transform-origin":"0% 0%"});
		$(".adM14 .iframe_box iframe").css({"width":"640px","height":"360px"});
	}
	
	//clicktag 透明按鈕
	if(adM14Var.clicktag ==""){
		$(".adM14").prepend(adM14Var.htmlTxt.clicktag);
	}

	//影音廣告 GA 追蹤
	if(adM14Var.type=="video" && adM14Var.file.indexOf('youtube')!=-1){//如果是 Youtube 影片
		//onYouTubePlayerAPIReady_adM14(YoutubeVideoID_adM14); //載入 Youtube 影片
	} else if(adM14Var.type=="video" && adM14Var.videoMp4 !=""){ // MP4 影片
		var video=$(".adM14 video").get(0);
		video.volume=0.5; //音量設定

		//video.play();//自動播放
		video.addEventListener('play', function() { //播放監聽
			ga('create', 'UA-52510577-17', 'auto', {'name': 'adM14'});
			ga('adM14.require', 'displayfeatures');
			ga('adM14.send', 'pageview');
			ga("adM14.send", "event", "MobileWeb 天空大看板影音廣告 - 素材編號："+adM14Var.bannerid+"", "播放影片", ""+adM14Var.videoMp4+"", {'nonInteraction': 0});
			console.log('start');
			
			if(video.readyState > 0) {//取得影片總秒數及各偵測點秒數
				duration = video.duration;
				querterTime = duration / 4;
				time_25 = querterTime;
				time_50 = querterTime * 2;
				time_75 = querterTime * 3;
			}
			
		}, false);
		
		/*
		video.addEventListener('pause', function() { //暫停監聽
			alert("暫停");
		}, false);
		*/
		
		video.addEventListener('ended', function() { //播完監聽
			ga('create', 'UA-52510577-17', 'auto', {'name': 'adM14'});
			ga("adM14.send", "event", "MobileWeb 天空大看板影音廣告 - 素材編號："+adM14Var.bannerid+"", "100%", ""+adM14Var.videoMp4+"", {'nonInteraction': 0});
			console.log('100%');
			video.play();
		}, false);

		var time_25_count = 0;
		var time_50_count = 0;
		var time_75_count = 0;
		video.addEventListener('timeupdate', function(){ // 觀看時間監聽
			var currentTime =  video.currentTime;
			//console.log (currentTime);
			if(currentTime >= time_25){
				if(time_25_count < 1){ //只要送出一次
					ga("adM14.send", "event", "MobileWeb 天空大看板影音廣告 - 素材編號："+adM14Var.bannerid+"", "25%", ""+adM14Var.videoMp4+"", {'nonInteraction': 0});
					console.log('25%');
					time_25_count ++;
				}
			}
			if(currentTime >= time_50){
				if(time_50_count < 1){
					ga("adM14.send", "event", "MobileWeb 天空大看板影音廣告 - 素材編號："+adM14Var.bannerid+"", "50%", ""+adM14Var.videoMp4+"", {'nonInteraction': 0});
					console.log('50%');
					time_50_count ++;
				}
			}
			if(currentTime >= time_75){
				if(time_75_count < 1){
					ga("adM14.send", "event", "MobileWeb 天空大看板影音廣告 - 素材編號："+adM14Var.bannerid+"", "75%", ""+adM14Var.videoMp4+"", {'nonInteraction': 0});
					console.log('75%');
					time_75_count ++;
				}
			}
		}, false);
	}
}

//包版處理
function ShareOfVoice(){
	//星光雲包版
	if(adM14Var.text2 =="星光雲包版"){
		var adM14CSS = '.adC02, .ad_320x50_fixed, .ad_300, .ad_native1, .TenmaxNativeAd, .yap-loaded, #adJS01-18929, #adM08, #adM09, #mobileweb_inread, #etnews_live_player, #ettoday_live, #ettoday_channel_frame, .live_title, #etnews_live_player, .tag-banner, #smartbanner, .ad_in_news, .ad_readmore {display:none!important}';
		adM14head = document.head || document.getElementsByTagName('head')[0];
		adM14style = document.createElement('style');
		adM14style.type = 'text/css';
		adM14style.appendChild(document.createTextNode(adM14CSS));
		adM14head.appendChild(adM14style);
		$(function(){
			$(".adC02, .ad_320x50_fixed, .ad_300, .ad_native1, .yap-loaded, #adJS01-18929, #adM08, #adM09, #mobileweb_inread, #etnews_live_player, #ettoday_live, #ettoday_channel_frame, .live_title, #etnews_live_player, .tag-banner, #smartbanner").remove();
		});
	}
}

//初始檢測 cookie =============
/*素材(4) 寬高大於0時為頻次控制，否則預設 0.001 小時 1 次 (3.6秒1次)*/

var countName = adM14Var.cookieName; //定義cookie名稱
var expireName = adM14Var.cookieName +"-expire"; //定義記錄效期的cookie名稱

var expireHour = Number(adM14Var.cookieHour); //定義cookie到期時數
	//if (expireHour == 0 || isNaN(expireHour)) { expireHour= 60; } //★★★若沒指定，預設 60 分)★★★
	if (expireHour == 0 || isNaN(expireHour)) { expireHour= 0.017; } // 0.017 分 (1秒) 2018-08-18 20:36~
	expireHour = expireHour / 60; // 將分鐘數換算成時數

/*
var adShow = Number(adM14Var.cookieLimited); //定義廣告展示次數
	if (adShow == 0 || isNaN(adShow)) {adShow=1};//★★若沒指定，預設為 1 次★★
*/
var adShow = 1; //頻次固定為 1 次

var userAgent = window.navigator.userAgent.toLowerCase();
if (isMobile && userAgent.indexOf("ipad") ==-1){ //電腦和 iPad 不執行本廣告
	if($.cookie(countName)==null){ //先判斷是否已有 cookie 值, 沒有的話，新增一組
		fnAdM14Init(); //初始化
		ShareOfVoice();//包版處理
		//用毫秒表示
		var iExpireDate = new Date();
		iExpireDate.setTime(iExpireDate.getTime() + (expireHour * 60 * 60 * 1000)); // cookies 效期為 n 小時

		$.cookie(countName, 1 ,{ expires: iExpireDate, domain: 'ettoday.net', path: '/' }); //設定key跟value，一定要下 expires 及 path 參數
		$.cookie(expireName, iExpireDate ,{ expires: iExpireDate, domain: 'ettoday.net', path: '/' }); //設定key跟value，一定要下 expires 及 path 參數
	}else{
		var countVal = $.cookie(countName); //取得目前cookie值
		var expireVal = new Date($.cookie(expireName)); //取得記錄效期的cookie值

		countVal++; //值加1

		if(countVal < adShow +1 ){ //在n次內會執行
			fnAdM14Init(); //初始化
			ShareOfVoice();//包版處理
		}else{
			ShareOfVoice();//包版處理
		}
		$.cookie(countName, countVal,{ expires: expireVal, domain: 'ettoday.net', path: '/'}); //次數更新到 cookies 中，效期設為第一次的cookies效期
	}
}