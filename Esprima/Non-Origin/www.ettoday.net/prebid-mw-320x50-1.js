//MW_置底橫幅 (320x50)
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
            a = t.contentWindow.document,
            params = d.getAdserverTargetingForAdUnitCode(n);
        params && params.hb_adid && params.hb_pb && params.hb_pb > e.rp ? d.renderAd(t.contentWindow.document, params.hb_adid) : (t.width = s[0][0], t.height = s[0][1], a.write('<style>body{margin:0;padding:0;}</style>' + e.snippet), a.close())
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
    slotid: "scupio-ettoday_2040_15815_16480_1_content",
    rp: 0.10,
    adUnitSizes: [[320,50]],
    bids: [
      {bidder:'bridgewell',params:{ChannelID:'CgUxNjQ4MBIBMRoEMjA0MCIHZXR0b2RheSoKCMACEDIaATMgAQ'}},
      {bidder:'audienceNetwork',params:{placementId:'1074010219308446_1797392123636915'}},
      {bidder:'rubicon',params:{accountId:'19338',siteId:'220716',zoneId:'1084544'}},
      {bidder:'clickforce',params:{zone:'8739'}},
      {bidder:'rtbhouse',params:{region:'prebid-asia',publisherId:'WsOc5I3j7RUchAHLGtto'}},
      {bidder:'appnexus',params:{placementId:'14018087'}}
    ],
    snippet: "\u003cins class=\"clickforceads\" style=\"display:inline-block;width:320px;height:50px\" data-ad-zone=\"2374\"\u003e\u003c/ins\u003e\u003cscript async type=\"text/javascript\" src=\"//cdn.doublemax.net/js/init.js\"\u003e\u003c/script\u003e"
    //snippet: "\u003cscript type=\"text/javascript\"\u003e\r\ngoogle_ad_client = \"ca-pub-5538854675439600\";\r\ngoogle_ad_slot = \"8481566619\";\r\nif(window.innerHeight \u003e 99) {\r\n\tvar myStyle = document.createElement(\"style\");\r\n\tmyStyle.innerHTML += \"#back-top, .gototop{bottom:120px!important;}\";\r\n\tdocument.body.append(myStyle);\r\n\tgoogle_ad_width = 320;\r\n\tgoogle_ad_height = 100;\r\n} else {\r\n\tgoogle_ad_width = 320;\r\n\tgoogle_ad_height = 50;\r\n}\r\n\u003c/script\u003e\r\n\u003cscript type=\"text/javascript\"\r\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\u003e\r\n\u003c/script\u003e"
    //snippet: "\u003cscript type=\"text/javascript\"\u003e\r\ngoogle_ad_client = \"ca-pub-5538854675439600\";\r\ngoogle_ad_slot = \"8144704369\";\r\nif(window.innerHeight \u003e 99) {\r\n\tvar myStyle = document.createElement(\"style\");\r\n\tmyStyle.innerHTML += \"#back-top, .gototop{bottom:120px!important;}\";\r\n\tdocument.body.append(myStyle);\r\n\tgoogle_ad_width = 320;\r\n\tgoogle_ad_height = 100;\r\n} else {\r\n\tgoogle_ad_width = 320;\r\n\tgoogle_ad_height = 50;\r\n}\r\n\u003c/script\u003e\r\n\u003cscript type=\"text/javascript\"\r\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\u003e\r\n\u003c/script\u003e"
});