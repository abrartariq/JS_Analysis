

//logo_ettoday =======================================
(function(){
	var etLogoRightNow = new Date();

	//第一個時間 農曆新年
	var etLogoStartTime1 = new Date(2019, 2-1, 1, 0, 0, 0); // 結束時間 (年,月(0-11),日,時,分,秒)
	var etLogoEndTime1 = new Date(2019, 2-1, 10, 23, 59, 59); // 結束時間 (年,月(0-11),日,時,分,秒)
	//var etLogoSrc1 = "chinese_year_2019.gif"; //需換成遠端gif檔
	var etLogoSrc1 = "https://static.ettoday.net/style/ettoday2017/images/logo/chinese_year_2019.gif"; 
	
	
	if (etLogoRightNow > etLogoStartTime1 && etLogoRightNow < etLogoEndTime1) {
		//上檔期間-節慶Logo
		document.write('<a href="https://www.ettoday.net/?from=logo" title="回首頁"><img src="'+etLogoSrc1+'" border="0" alt="ETtoday新聞雲"/></a>');
	}else{
		//下檔期間-預設Logo
		document.write('<a href="https://www.ettoday.net/?from=logo" title="回首頁"><img src="//static.ettoday.net/style/ettoday2017/images/logo_ettoday.png" border="0" alt="ETtoday新聞雲"/></a>');
	}
	
})();







