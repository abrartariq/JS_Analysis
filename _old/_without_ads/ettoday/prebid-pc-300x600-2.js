//PC_全網_巨幅(下)@版權宣告下方
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [],
	function(e) {
		var i, d = window.pbjs,
			n = e.slotid,
			s = e.adUnitSizes,
			t = [{
				code: n,
				sizes: s,
				bids: e.bids
			}];
		i = function() {
			i = function() {};
			var t = document.getElementById(n + "_frame"),
				a = t.contentWindow.document;
			params = d.getAdserverTargetingForAdUnitCode(n), params && params.hb_adid && params.hb_pb && params.hb_pb > e.rp ? d.renderAd(t.contentWindow.document, params.hb_adid) : (t.width = s[0][0], t.height = s[0][1], a.write('<style>body{margin:0;padding:0;}</style>' + e.snippet), a.close())
		}, d.que.push(function() {
			d.setConfig({
				//bidderTimeout: 700,
				bidderTimeout: 2000,
				priceGranularity: {
					buckets: [{
						min: 0.00,
						max: 9999.00,
						increment: .001
					}]
				}
			}), d.addAdUnits(t), d.requestBids({
				bidsBackHandler: i
			})
		})
	}({
		slotid: "scupio-ettoday_2040_15373_16038_1_content",
		rp: 0.5,
		adUnitSizes: [
			[300, 600]
		],
		bids: [
			{bidder: 'bridgewell', params: { ChannelID: 'CgUxNjAzOBIBMRoEMjA0MCIHZXR0b2RheSoLCKwCENgEGgE2IAE'}},
			{bidder:'rubicon',params:{accountId:'19338',siteId:'220714',zoneId:'1084530'}},
			{bidder: 'appnexus', params: {placementId: '13566136'}}
		],
		snippet: "\u003cscript type=\"text/javascript\"\u003e\r\ngoogle_ad_client = \"ca-pub-5538854675439600\";\r\ngoogle_ad_slot = \"3706995219\";\r\ngoogle_ad_width = 300;\r\ngoogle_ad_height = 600;\r\n\u003c/script\u003e\r\n\u003cscript type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\u003e\u003c/script\u003e"
	});