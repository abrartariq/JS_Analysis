//MW_大看板 1
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
    slotid: "scupio-ettoday_2040_15391_16056_1_content",
    rp: 0.20,
    adUnitSizes: [[300 , 250]],
    bids: [
      {bidder:'bridgewell',params:{ChannelID:'CgUxNjA1NhIBMRoEMjA0MCIHZXR0b2RheSoLCKwCEPoBGgE5IAE'}},
      {bidder:'rubicon',params:{accountId:'19338',siteId:'220716',zoneId:'1084540'}},
      {bidder:'audienceNetwork',params:{placementId:'1074010219308446_1797391510303643'}},
      //{bidder:'clickforce',params:{zone:'8204'}},
      {bidder:'appnexus',params:{placementId:'13626321'}},
      {bidder:'rtbhouse',params:{region:'prebid-asia',publisherId:'WsOc5I3j7RUchAHLGtto'}},
      {bidder:'criteo',params:{zoneId:'783189'}}
    ],
    snippet: "\u003cscript type=\"text/javascript\"\u003e\u003c!--\r\ngoogle_ad_client = \"ca-pub-5538854675439600\";\r\n/* MobileWeb_大看板 */\r\ngoogle_ad_slot = \"1694255379\";\r\ngoogle_ad_width = 300;\r\ngoogle_ad_height = 250;\r\n//--\u003e\r\n\u003c/script\u003e\r\n\u003cscript type=\"text/javascript\"\r\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\u003e\r\n\u003c/script\u003e"
});