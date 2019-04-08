// Criteo CDB for Mobileweb 300x250-Top
var CriteoCDBhtml = '\
	<div id="criteo_783188"><script>CriteoDisplayAd("criteo_783188", function() { \
	var slotid = "criteo_783188";\
	var div = document.getElementById(slotid);\
	var ifr = document.createElement("iframe"); ifr.setAttribute("id", slotid+"_iframe"), ifr.setAttribute("frameborder","0"), ifr.setAttribute("allowtransparency","true"), ifr.setAttribute("hspace","0"), ifr.setAttribute("marginwidth","0"), ifr.setAttribute("marginheight","0"), ifr.setAttribute("scrolling","no"), ifr.setAttribute("vspace","0"), ifr.setAttribute("width", adWidth), ifr.setAttribute("height", adHeight);\
	div.appendChild(ifr);\
	if(window.document.body.clientWidth < 336){\
        var htmlcode = `<style>body {text-align:center;}</style><script type="text/javascript"><!--\
        	google_ad_client = "ca-pub-5538854675439600";\
        	google_ad_slot = "9687885459";\
        	google_ad_width = 300;\
        	google_ad_height = 250;\
        	//-->\
        	</scr`+`ipt>\
        	<script type="text/javascript"\
        	src="//pagead2.googlesyndication.com/pagead/show_ads.js">\
        	</scr`+`ipt>`;\
	} else {\
        var htmlcode = `<style>body {text-align:center;}</style><script type="text/javascript"><!--\
        	google_ad_client = "ca-pub-5538854675439600";\
        	google_ad_slot = "9687885459";\
        	google_ad_width = 336;\
        	google_ad_height = 280;\
        	//-->\
        	</scr`+`ipt>\
        	<script type="text/javascript"\
        	src="//pagead2.googlesyndication.com/pagead/show_ads.js">\
        	</scr`+`ipt>`;\
	}\
	var ifrd = ifr.contentWindow.document; ifrd.open(); ifrd.write(htmlcode); ifrd.close();\
});</script></div>';

document.write(CriteoCDBhtml);