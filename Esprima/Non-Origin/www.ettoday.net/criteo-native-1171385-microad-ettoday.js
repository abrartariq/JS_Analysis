
// CSS
document.write('<style>\
			#criteo-1171385 { position: relative; overflow: hidden; margin: 0px 0 10px 0; }\
			#criteo-1171385 .criteo-title { font-size: 0.3em; font-weight: bold; margin: 0 0 10px 0; position: absolute; right: 0px; bottom: 0px; }\
			#criteo-1171385 .criteo-privacy { position: absolute; right: 0px; top: 60px; }\
			#criteo-1171385 .criteo-privacy img { width:19px; height:15px; display: block; }\
			#criteo-1171385 .criteo-products { background-color: #f5f5f5;}\
			#criteo-1171385 .criteo-product { position: relative; height: 82px; padding: 5px 0 5px 90px; }\
			#criteo-1171385 .criteo-product a { color: #2e266f; text-decoration: none; }\
			#criteo-1171385 .criteo-product .criteo-product-image { width: 100px; height: 75px; position: absolute; left: 5px; top: 5px; }\
			#criteo-1171385 .criteo-product .criteo-product-image img { width:100px; height:75px; box-shadow: 0px 0px 1px rgba(30,25,20,0.5);}\
			#criteo-1171385 .criteo-product .criteo-product-title  { font-size: 1.1em; line-height: 20px; position: relative; overflow: hidden; margin: 5px 25px; }\
			#criteo-1171385 .criteo-product .criteo-product-description { font-size: 0.9em; line-height: 20px; max-height: 40px; overflow: hidden; margin: 5px 25px;}\
			#criteo-1171385 .criteo-product .criteo-advertiser { font-size: 12px; line-height: 20px; margin: 0px 25px;}\
			#criteo-1171385 .criteo-product .criteo-advertiser a { color: #999; }\
			#criteo-1171385 .part_pictxt_1 {height:82px;margin-bottom:0}\
			</style>')

//寫入結構
document.write('<div id="criteo-1171385" style="display:none"></div>');

//Criteo JS loader
var s = document.createElement('script');
s.async = true;
s.type = 'text/javascript';
s.src = '//static.criteo.net/js/ld/publishertag.js';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(s, h);

!function(){
    function processCriteo1171385 (json) {
            console.log('API response: ',json);

            var div = document.getElementById('criteo-1171385');
            var htmlcode = '';
            var products_count = 1;
            htmlcode += '<div class="criteo-products">';
            for (var i in json.products) {
                    if (i >= products_count) break;
                    htmlcode += '<div class="criteo-product">';
                    htmlcode += '<a href="' + json.products[i].click_url + '" target="_blank">';
                    htmlcode += '<div class="criteo-product-image">';
                    htmlcode += '<img src="'+ json.products[i].image.url +'">';
                    htmlcode += '</div>';
                    htmlcode += '<div class="criteo-product-title">'+changeStrLength(json.products[i].title, 30)+'</div>';
                    htmlcode += '<div class="criteo-product-description">'+ changeStrLength(json.products[i].description, 30)+'</div>';
                    htmlcode += '<div class="criteo-advertiser"; style="display: inline-block; _display: inline;">';
                    htmlcode += '<a href="' + json.advertiser.logo_click_url + '" target="_blank">'+ json.advertiser.domain +'</a>';
                    htmlcode += '</div>';
                    htmlcode += '</a>';
                    htmlcode += '<div class="criteo-title"; style="display: inline-block; _display: inline;"></div>';
                    htmlcode += '</div>';
                    htmlcode += '<div class="criteo-privacy">';
            htmlcode += '<a href="'+ json.privacy.optout_click_url +'" target="_blank"><img src="'+ json.privacy.optout_image_url + '"></a>';
            htmlcode += '</div>';
            }
            htmlcode += '<div style="clear:both"></div>';
            htmlcode += '</div>';
            for (i in json.impression_pixels) {
                    htmlcode += '<img src="' + json.impression_pixels[i].url + '" width="0px" height="0px" style="display:none" >';
            }
            div.innerHTML = htmlcode;
            div.style.display = 'block';
    };

    function changeStrLength(str, len)
    {
            if(str.length > len)
            {
                    str = str.substr(0, len) + "...";
            }

            return str;
    }

    //Criteo CDB
    var CriteoAdUnits = { "placements": [
        /* Criteo Placements List */
        { "slotid": "criteo-1171385", "zoneid": 1171385, "nativeCallback": function(json) { processCriteo1171385(json) } },
    ]};
    window.Criteo = window.Criteo || {}; window.Criteo.events = window.Criteo.events || [];
    window.Criteo.events.push(function() { 
        window.Criteo.RequestBids(CriteoAdUnits, function(allBids) {
            var bids = window.Criteo.GetBidsForAdUnit('criteo-1171385');
            if (bids.length > 0) { 
                Criteo.RenderAd(bids[0].id);
            } else {
                passback_cto_1171385();
            }
        }, 2000); 
    });

    //MicroAD passback
    function passback_cto_1171385() {

		if($(".news-page").length ==0){
			var microadID = 4162874;
		}else{
			var microadID = 4162876; //原 4162875，2018/10/8 改 4162876
		}

        var div = document.getElementById('criteo-1171385');
        div.innerHTML += '<div id=compass-fit-'+microadID+'></div>';
        div.style.display = 'block';

        (function(){
          var _lgy_lw = document.createElement("script");
          _lgy_lw.type = "text/javascript";
          _lgy_lw.charset = "UTF-8";
          _lgy_lw.async = true;
          _lgy_lw.src= (("https:" == document.location.protocol) ? "https://" : "http://")+"nt.compass-fit.jp/lift_widget.js?adspot_id="+microadID+"";
          var _lgy_lw_0 = document.getElementsByTagName("script")[0];
          _lgy_lw_0.parentNode.insertBefore(_lgy_lw, _lgy_lw_0);
        })();

    }
}();
