var zon={"300x250":{pub:3754,zone:66999}};if(zh.length>0&&zw.length>0){if(typeof zon[zw+"x"+zh]!="undefined"){var d=new Date();var n=d.getTime();var innityUrl="https://as.innity.com/synd/?cb="+n+"&ver=2&hb=1&output=js&pub="+zon[zw+"x"+zh].pub+"&zone="+zon[zw+"x"+zh].zone+"&url="+encodeURIComponent(encodeURIComponent(location.href))+"&width="+zw+"&height="+zh+"&callback=setUpInnity&callback_uid="+n;var c=document.createElement("script");c.type="text/javascript";c.src=innityUrl;c.async=true;if(document.getElementsByTagName("head").length>0){document.getElementsByTagName("head")[0].appendChild(c)}else{if(document.getElementsByTagName("body").length>0){document.getElementsByTagName("body")[0].appendChild(c)}}}}function setUpInnity(response){if(typeof(response.tag)!="undefined"&&response.cpm>0){var c=Math.round((response.cpm/100)*100000000000)/100000000000;fbList[fbList.length]={"cpm":c,"bider":"innity","tag":'<script src="//cdn.innity.net/frame_util.js"><\/script>'+response.tag,"impTag":"//ad.doublemax.net/adserver/tp?tpid=66999&tp=innity&c="+c}}};