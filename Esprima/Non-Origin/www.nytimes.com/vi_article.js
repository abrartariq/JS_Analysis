!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(149),i=[t];i.push(n(151)),i.push(n(157)),i.push(n(160)),i.push(n(163)),i.push(n(165)),i.push(n(175)),i.push(n(178)),i.push(n(180)),i.push(n(183)),i.push(n(186)),i.push(n(190)),i.push(n(193)),i.push(n(197)),i.push(n(200)),i.push(n(204)),i.push(n(208)),i.push(n(213)),i.push(n(214)),i.push(n(215)),i.push(n(218)),i.push(n(219)),i.push(n(223)),i.push(n(225)),i.push(n(232)),i.push(n(233)),i.push(n(234)),h.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(82),a=n(23),o=n(16);n(128);var s=o.get("stores/directive"),u=n(89);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(131),d=n(117),f=n(132),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10520461273"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "10519711144", "actions": [], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "10518332076", "integrationSettings": null}], "id": "10520771504", "weightDistributions": null, "name": "[Support] Vi Confirmation Page", "groupId": null, "commitId": "10521791646", "decisionMetadata": {"experimentPriorities": [[{"entityId": "10518332076", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10194736242"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "10698705400", "actions": [{"viewId": "10194736242", "changes": [{"dependencies": [], "type": "custom_code", "id": "98729AEE-DC9B-4BA9-9A86-7D9317716AEC", "value": function($){var getCookie= function(a, b) {
  b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};
var agentId = getCookie("nyt-a");
window.optimizely.push({"type":"user","attributes":{"agentId":agentId}});
window.optimizely.push({"type":"user","attributes":{"agentId_ui":agentId}});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "10700733207", "integrationSettings": null}], "id": "10715970098", "weightDistributions": null, "name": "[Support] Set AgentID", "groupId": null, "commitId": "13140210281", "decisionMetadata": {"experimentPriorities": [[{"entityId": "10700733207", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"10918000935": {}, "10375351061": {}, "11195211775": {}}, "integrationStringVersion": 2, "viewIds": ["10647916243", "11210370568", "9260770473", "9263528157", "9413676220"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] exo_support_test", "name": "[Support] Tests A/B Framework Experience", "bucketingStrategy": null, "variations": [{"id": "11031900618", "actions": [{"viewId": "9413676220", "changes": [{"dependencies": [], "type": "custom_code", "id": "C9D28FD3-92E7-4B3C-88C0-FD0698C92582", "value": function($){console.log("bucketing p13n experience running");
console.log(window.NYToptly.abTest);
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "11058650189"], "changes": null, "id": "11058630453", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments)", "name": "Subs | Dock - default (killset) | 2018-07-27 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11147970545", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/54f4705f39360fe3148c0289b5b2ff43fc26c4f1078fd7dbd62896b8ce636625.js", "dependencies": [], "id": "1216A596-9B2F-4768-827D-5454F35AE667"}]}, {"viewId": "10647916243", "changes": []}], "name": "Subs | Dock - to prevent timeout errors"}], "audienceIds": ["and", "10738960527", "10370427570"], "changes": null, "id": "11142451996", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist (live experiments),[Subscriber Type] Non-subs,[Page Targeting] Ask main page / section front (\"hub\")", "name": "Nons | Bar1 for Ask main page / section front (\"hub\") | 2018-08-06", "bucketingStrategy": null, "variations": [{"id": "11220200072", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/f34ed3294c84a88e301da7156fd77ff4876b3ac02dc094fe21a2fbb4db6446b1.js", "dependencies": [], "id": "A8B34193-AB76-4C27-8957-CAC2EF27F50E"}]}], "name": "SUBSCRIBE NOW: Ask version of Acq. LP"}], "audienceIds": ["and", "10370427570", "9693802151", "11196930754"], "changes": null, "id": "11208370163", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Page Targeting] Ask main page / section front (\"hub\")", "name": "Subs | Bar1 for Ask main page / section front (\"hub\") | 2018-08-06", "bucketingStrategy": "impression", "variations": [{"id": "11186090223", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/f7f4e254da5aedfcbb7d48637b2b307e527a08370d55bf79001207330ad1954f.js", "dependencies": [], "id": "BB8F7175-EA5D-4821-8D2E-54B4D3CA7FB1"}]}], "name": "Gift The Times"}], "audienceIds": ["and", "10738960527", "10370427570", "11196930754"], "changes": null, "id": "11191760154", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,Meter Count 2,[Cookie] exo_* does not exist (live experiments)", "name": "exo_rollout_newsletter | 2018 - ongoing", "bucketingStrategy": null, "variations": [{"id": "10562191521", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/bf6237b6207b38028b0467884c84aad45025135297479c2ceaecf2a125e3637d.js", "dependencies": [], "id": "73661A4B-E181-44C0-83A7-D7FF77747F78"}]}], "name": "Control - 2018-08-08 winning variation - \"Morning Briefings. The news you need. Free to your inbox by 7 a.m.\""}], "audienceIds": ["and", "9693802151", "10561762413", "10370427570"], "changes": null, "id": "10564422151", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_mm", "name": "test_expanded_dock exo_mm", "bucketingStrategy": null, "variations": [{"id": "11220752830", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/1c5de78e071eb969f284a547ba222cc3bfe3e2cb1784f6d40b4b9c3008cd47d9.js", "dependencies": [], "id": "DF0522A2-FB2B-474A-801A-417EE079E2C2"}, {"src": "/actions/1c5de78e071eb969f284a547ba222cc3bfe3e2cb1784f6d40b4b9c3008cd47d9.js", "dependencies": [], "id": "1DD0F60B-1C6C-4178-925E-BDD09804E49D"}]}, {"viewId": "9263528157", "changes": [{"dependencies": [], "type": "custom_code", "id": "46895E12-F25A-4253-B244-2E4A1BBFFF7B", "value": function($){NYToptly.vi_inline_message_function = function() {
	window.NYToptly.vi_inline = window.NYToptly.vi_inline || {};
  window.NYToptly.vi_inline.message = 'This is a test.';
  window.NYToptly.vi_inline.callToAction = 'Test and subscribe';
};
}}, {"src": "/actions/407ea8f044c5465225d9b39b65127ea8beb7c75dc8e9472f0dc77309c686a3f1.js", "dependencies": [], "id": "DBB24606-6A2C-4644-8D48-2019AD467D6D"}]}], "name": "Variation #1"}], "audienceIds": ["and", "11310610003"], "changes": null, "id": "11283380004", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Cookie] subDockView does NOT exist,[Device] Mobile,[BlueKai] Tenure 0-89 Days", "name": "Subs | Dock | Onboarding 3: App | 2018-08-22 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11330001315", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/4688f521a9cd5ce6e7b11ebf3fd48a81304427fb3f16e13ecaef6b0f9acceea4.js", "dependencies": [], "id": "52AF5626-9EA1-470D-82CC-FE6D87F9C132"}, {"src": "/actions/4688f521a9cd5ce6e7b11ebf3fd48a81304427fb3f16e13ecaef6b0f9acceea4.js", "dependencies": [], "id": "C4131DBB-0559-44CB-8912-929913CDF4C0"}]}], "name": "3 App | MOBILE WEB ONLY"}], "audienceIds": ["and", "10738960527", "10370427570", "11325472970", "10274690951", "11363121680"], "changes": null, "id": "11353201959", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Cookie] subDockView does NOT exist,[Referrer URL] Homepage,[BlueKai] Tenure 0-89 Days", "name": "Subs | Dock | Onboarding 2: Newsletters | 2018-08-22 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11346246876", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/8a65750c9f41fa9045d00f87f58f5f9f3cc95290c522fa614961df92b56d84a7.js", "dependencies": [], "id": "33433366-C9B0-4E8C-B9D9-D26F4E3BF656"}, {"src": "/actions/8a65750c9f41fa9045d00f87f58f5f9f3cc95290c522fa614961df92b56d84a7.js", "dependencies": [], "id": "7552A340-42F5-4C8D-920D-73A5189BADAF"}]}], "name": "2 Newsletters"}], "audienceIds": ["and", "10738960527", "10370427570", "11325472970", "11335562153", "11363121680"], "changes": null, "id": "11299953318", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Cookie] subDockView does NOT exist,[Device] Desktop / Tablet,[BlueKai] Tenure 0-89 Days", "name": "Subs | Dock | Onboarding 5: Saved Stories | 2018-08-23 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11364190650", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/fefaa36fce34ac9c5e8d8b5db344cf7832fc592467defa5f4b1079b369fd4765.js", "dependencies": [], "id": "4A7E1D69-E115-4E0C-87D9-CDC2B95B2834"}, {"src": "/actions/fefaa36fce34ac9c5e8d8b5db344cf7832fc592467defa5f4b1079b369fd4765.js", "dependencies": [], "id": "85B6D5C8-72C3-4DE7-9B35-003053F3C010"}]}], "name": "5 Saved Stories"}], "audienceIds": ["and", "10738960527", "10370427570", "11325472970", "10235345280", "11363121680"], "changes": null, "id": "11337860344", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Cookie] subDockView does NOT exist,[Page Targeting] Smarter Living,[BlueKai] NOT current Smarter Living subscribers,[BlueKai] Tenure 0-89 Days", "name": "Subs | Dock | Onboarding 4: Smarter Living | 2018-08-23 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11357320370", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/3d1b16a89d93963c2b34930a7bd5746458540f884538ccffe5d859f091c277a6.js", "dependencies": [], "id": "BA04C049-8323-4EE1-A8B9-F88E148BE578"}, {"src": "/actions/3d1b16a89d93963c2b34930a7bd5746458540f884538ccffe5d859f091c277a6.js", "dependencies": [], "id": "C2B52DE1-7049-4BD8-9A9B-87C0410E34DA"}]}], "name": "4 Smarter Living"}], "audienceIds": ["and", "10738960527", "10370427570", "11325472970", "11353660479", "11358810238", "11363121680"], "changes": null, "id": "11358510439", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "Cookie exo_tt,[Subscriber Type] Non-subs,[Device] Desktop only", "name": "test_abra_expanded _dock exo_tt", "bucketingStrategy": null, "variations": [{"id": "10795785824", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/a770a60ec4400925ebb4d9da883db44e655c29252d16be38f346425faf1373bf.js", "dependencies": [], "id": "0CF54B64-FC27-4EB5-871D-1E43EBDD5491"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/67f53f0d55bf63651b9a9dfec7b8e1d3c870b77ad61efd3d8143fcbfebd12698.js", "dependencies": [], "id": "E04D421C-D10A-461D-846D-808F2C18E7FE"}, {"src": "/actions/67f53f0d55bf63651b9a9dfec7b8e1d3c870b77ad61efd3d8143fcbfebd12698.js", "dependencies": [], "id": "D74DD1AF-9C64-45BE-9ECF-0A7AF70CC234"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/57b7da1baa03d67157b8175779bda95a88913d7993c21a12c3247cc38b7b5792.js", "dependencies": [], "id": "3241139D-7352-4B8D-BC82-D0ADF30B60D1"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/b850beda61268328270f3373f74c6a650a96a487fc71854461da6b0df777d365.js", "dependencies": [], "id": "717DC7C1-8E50-42BD-9BCB-3F294FB1F4CF"}]}], "name": "Variation #1"}], "audienceIds": ["and", "10471400591", "9693802151", "11330953232"], "changes": null, "id": "10822911613", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist (live experiments),[Cookie] B2B w CORP_ADBLOCK flag,[User] Anonymous - NOT logged-in", "name": "Killset (gateway, dock, bar1, welcome) for B2B Corp Clients requesting ADBLOCK | 2018-09-18 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11380834824", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/701e037716693267385da2207185bec604bb907622178e15fde5c8873197c0a8.js", "dependencies": [], "id": "F73F033F-B5F4-4F2E-B673-92CCE27E2199"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/560a4fa3e2d90b966debc0ab42d5a0e23ecb6b1af4aac2bfbc97fdf457a700e3.js", "dependencies": [], "id": "E8244392-8413-456A-88CB-724D3979DD3F"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/eca14f5b7dc936d9c56bbb5f46adb3631897eb43c9522e0bdbda8117e91213cf.js", "dependencies": [], "id": "148EF503-F4FD-4EE5-934D-9872A1420230"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/63adde40d8f2df5fccc81e05ae9d17db655e3949f0951d0bef7db177ef60acbe.js", "dependencies": [], "id": "F9A45847-3ECF-4788-B404-13319F1F0D19"}]}], "name": "Variation #1"}], "audienceIds": ["and", "10370427570", "10420817927", "11177230834"], "changes": null, "id": "11392344252", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[BlueKai] NOT current Morning Briefing subscribers,[Cookie] subDockView does NOT exist,[Referrer URL] Homepage,[BlueKai] Tenure 0-89 Days", "name": "Subs | Dock | Onboarding 1: Morning Briefing | 2018-08-22 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11331661281", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/e3a3df15d2e8fd87687c2e017b2e8664df5db27bb4983860805f4858e7ff579c.js", "dependencies": [], "id": "FF1CC451-AC99-436D-BF21-5F5BB831756D"}, {"src": "/actions/e3a3df15d2e8fd87687c2e017b2e8664df5db27bb4983860805f4858e7ff579c.js", "dependencies": [], "id": "550A669E-DF8C-498C-869D-D8FD75B8377F"}]}], "name": "1 Morning Briefing (paused 9-24 \u2013 9-27)"}], "audienceIds": ["and", "10738960527", "10370427570", "11327512857", "11325472970", "11335562153", "11363121680"], "changes": null, "id": "11358400269", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10943822289", "endOfRange": 5000}, {"entityId": "10976801343", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Non-subs,[Cookie] exo_dataLayerIntegration", "name": "abTest_dataLayerIntegration", "bucketingStrategy": null, "variations": [{"id": "10943822289", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/511f18fb32a0fe90b06d5fef7bc618239f58d95b79f107407a5b1f8a86bb5987.js", "dependencies": [], "id": "E56B7709-7C69-4789-AF6E-CD465CC90EC5"}, {"src": "/actions/511f18fb32a0fe90b06d5fef7bc618239f58d95b79f107407a5b1f8a86bb5987.js", "dependencies": [], "id": "D687662B-C43A-41DD-80A1-60253F74B9C1"}]}], "name": "control"}, {"id": "10976801343", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/9b230b762f88cb37f6ccf4e753c9f2ba9177d470824bfb8bd1b8dcffd298cd4e.js", "dependencies": [], "id": "117D02E5-3E27-42E5-B4C6-6A778F787F3E"}, {"src": "/actions/9b230b762f88cb37f6ccf4e753c9f2ba9177d470824bfb8bd1b8dcffd298cd4e.js", "dependencies": [], "id": "B87319CE-EB73-4100-ADBB-DCCD153E5E97"}]}], "name": "var1"}], "audienceIds": ["and", "9693802151", "10932013183"], "changes": null, "id": "10978161978", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-subs,[Cookie] exo_mgn", "name": "maro_461_dataLayerPush_gw", "bucketingStrategy": null, "variations": [{"id": "11190653131", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/b280576560106d86a69ba25986773281dd7e8091f64a5095cdcec689c41ec925.js", "dependencies": [], "id": "1A98A76C-15C6-4590-9273-28A31ACB08AD"}, {"src": "/actions/b280576560106d86a69ba25986773281dd7e8091f64a5095cdcec689c41ec925.js", "dependencies": [], "id": "49C56DAF-1934-4041-92FA-D6489848C91D"}]}, {"viewId": "9413676220", "changes": [{"src": "/actions/9edeeba28f4fafec606d9b07f02e95fc8aeb002c329548604775f46b922066c3.js", "dependencies": [], "id": "C8F4002F-65F9-470D-B503-109E05969F90"}, {"name": "Dock Gateway Et", "config": {"creative_src": "https://mwcm.nyt.com/.rest/mkt/creatives/v1/a101880c-0489-4bb8-87a9-95d6e59b2456/gateway", "dockgateway_campaign_name": "maro-461", "creator": "tph"}, "widget_id": "11156023046", "dependencies": [], "type": "widget", "id": "56F7E35D-4201-407A-A1D3-F8E70B6FA415"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/ab249eaec24d87ce166ffa906c9285043c2507e29bd1ea736677a1b67ca4baa0.js", "dependencies": [], "id": "27AE5EF2-D3E7-443B-990D-C1C43114EDB0"}, {"src": "/actions/ab249eaec24d87ce166ffa906c9285043c2507e29bd1ea736677a1b67ca4baa0.js", "dependencies": [], "id": "6A5502BC-E7B7-4C80-91F4-2A6AFA4E1BE3"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/1c9d063d62c982e4c57b95877e5cd2afd8066e9ce9dca2816401174a811d8434.js", "dependencies": [], "id": "62D43DB2-0DDF-4714-B54A-8D95BE753E26"}]}], "name": "Variation #1"}], "audienceIds": ["and", "9265370759", "9693802151", "10793015312"], "changes": null, "id": "11077986701", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[cookie] exo_logged_out_sub or dev mode", "name": "Subs, Logged-out | Anons identified via JKIDD | TESTING GATEWAY HEIGHT FIX \u2013 ongoing exo_logged_out_sub", "bucketingStrategy": null, "variations": [{"id": "11722543325", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/9be6e3bf7db4cd1f5ded43ecd2b3fedf907311014c0e2fad7f7ec7656ef6887f.js", "dependencies": [], "id": "AE98B3C7-BBA2-469D-9F60-E95CFB649D63"}, {"src": "/actions/9be6e3bf7db4cd1f5ded43ecd2b3fedf907311014c0e2fad7f7ec7656ef6887f.js", "dependencies": [], "id": "CCAE0E31-01E2-49A3-BA9A-1C5B205974AB"}]}, {"viewId": "9260770473", "changes": [{"dependencies": [], "type": "custom_code", "id": "B914954E-DCB2-42F1-8B0D-871F769B3DD6", "value": function($){// 061818 LOGGED OUT SUB VI DOCK~208123
var utils = window.optimizely.get('utils');

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

var vi_dock_function = function () {
    var windowURL = window.location.href;
    var cta = window.NYToptly.vi_dock.subscribeURL;
    // update login link URI for collapse dock
    var ctaURI = cta.replace('https://www.nytimes.com/', windowURL);

    window.NYToptly.vi_dock.subscribeURL = ctaURI;
};
window.NYToptly.vi_dock_function = vi_dock_function;

// update login link URI for expand dock
function addURI() {                
    var loginLinks = document.querySelectorAll('.card a');
    var windowURL = window.location.href;    
  
    loginLinks.forEach(function(link) {
        var loginUrl = link.href;
  
        link.href = loginUrl.replace('https://www.nytimes.com/', windowURL);
    });
}

utils.waitForElement('.vi_dock .card').then(function () {    
    var dockCTA = document.querySelector('.dock__content a');
    dockCTA.setAttribute('href', window.NYToptly.vi_dock.subscribeURL);
    addURI();
});
}}, {"src": "/actions/bd34f934141d5b7bcd5c88876ae6baf28042135ea372525d6c3252ae9c350d7f.js", "dependencies": [], "id": "334BC0AA-3838-47B5-839B-39F167D0E8C6"}]}], "name": "EXO-99"}], "audienceIds": ["and", "10851463365"], "changes": null, "id": "11698092974", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[WAT] HD_Grace or query param - grace_hd_testing,[Dayparting] HD Grace - Wed, Thu", "name": "Subs | Vi Bar1 | HD In-grace 7Y7UU | 2018-10-09 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11740001552", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/44279db8f33874b0d346e25eac9959516b762fbd0efe139e9aaaa9eab46b3573.js", "dependencies": [], "id": "4AFA4B3D-AC81-45FF-B951-AD9BA48FCDA4"}]}], "name": "Subs | HD In-grace | Bar1 | 7Y7UU"}], "audienceIds": ["and", "10738960527", "11698063390", "11728295638"], "changes": null, "id": "11716993883", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[User] Anonymous - NOT logged-in,[Cookie] B2BLibReg - special tag for eligible libraries (set by DIG),[Cookie] exo_* does not exist (live experiments)", "name": "Anonymous Users | B2B: Generic Messaging - Libraries | 2018-10-05 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11085957559", "actions": [{"viewId": "9413676220", "changes": [{"dependencies": [], "type": "custom_code", "id": "A6F0B98F-95F0-4B37-ABE5-1A720FE1C6C8", "value": function($){var opt_console = window.NYToptly.opt_console;
opt_console.log('20180912 version -DJP');

var utils = window.optimizely.get("utils");
utils.waitForElement(".lineDescrip").then(function () {
  if (screen.width <= '812') {
    document.querySelector(".page").parentElement.parentElement.parentElement.parentElement.style.height = "200%";
  } else {
    document.querySelector(".page").parentElement.parentElement.parentElement.parentElement.style.height = "100%";
  }
  // update login link URI
  var loginLinks = document.querySelectorAll('.buttonContainer a');
  var windowURL = window.location.href;

  loginLinks.forEach(function(link) {
    var loginUrl = link.href;

    link.href = loginUrl.replace('https://www.nytimes.com/', windowURL);
  });
});
}}, {"src": "/actions/2c2501a088a6a760b7470efeb94b1b8f051fed7e7ace561ff4cb7093cfa5597c.js", "dependencies": [], "id": "F816DE63-4D09-4374-9B2A-F2B2F8852A92"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/6e49350e3f7acdf25bf29532fa8e1e9e9f832fde3e525eb269f8cbe0470c717b.js", "dependencies": [], "id": "D6823F52-F69F-429A-8CDA-EAE8820EC986"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/f0080c8768aa7e77c1a1ef263a22745779ad9adde1e8afda1d72399762455bd9.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/f0080c8768aa7e77c1a1ef263a22745779ad9adde1e8afda1d72399762455bd9.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/0ffa23ea55fb2c676ce3e3950cd2763e249a892501bf132ef483e3bebdb7da9c.js", "dependencies": [], "id": "207B43C8-31CF-4A2D-9748-E15236CD71A0"}]}], "name": "WF-170500 Dock - B2B: Libraries \u2014 Originally set to launch 9/18/18, but libraries list was not defined by client."}], "audienceIds": ["and", "11177230834", "11722602086", "10370427570"], "changes": null, "id": "11161141279", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[User] Anonymous - NOT logged-in,[Cookie] B2BEduReg - special tag for Schools, set by DIG,[Cookie] exo_* does not exist (live experiments)", "name": "Anonymous Users | B2B: Generic Messaging - Schools | 2018-10-05 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11422674951", "actions": [{"viewId": "9413676220", "changes": [{"dependencies": [], "type": "custom_code", "id": "A6F0B98F-95F0-4B37-ABE5-1A720FE1C6C8", "value": function($){var opt_console = window.NYToptly.opt_console;
opt_console.log('20180912 version -DJP');

var utils = window.optimizely.get("utils");
utils.waitForElement(".lineDescrip").then(function () {
  if (screen.width <= '812') {
    document.querySelector(".page").parentElement.parentElement.parentElement.parentElement.style.height = "200%";
  } else {
    document.querySelector(".page").parentElement.parentElement.parentElement.parentElement.style.height = "100%";
  }
  // update login link URI
  var loginLinks = document.querySelectorAll('.buttonContainer a');
  var windowURL = window.location.href;

  loginLinks.forEach(function(link) {
    var loginUrl = link.href;

    link.href = loginUrl.replace('https://www.nytimes.com/', windowURL);
  });
});
}}, {"src": "/actions/c79fd7f8e6a4514f4fcf16f68a2a8b7178d9e5cf6cb2f6968b131cdc980dc0b6.js", "dependencies": [], "id": "F816DE63-4D09-4374-9B2A-F2B2F8852A92"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/e52e6a1254f39db4c7306ff21f7f7ac1afc66158ce83f319853ea01184411479.js", "dependencies": [], "id": "D6823F52-F69F-429A-8CDA-EAE8820EC986"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/f60c89de484a1a5e4b30c0fae25248217902b98cca76110ab21c95986882fd3c.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/f60c89de484a1a5e4b30c0fae25248217902b98cca76110ab21c95986882fd3c.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/27025e18e7ffee9c28b18d0497bfe9722bff269b0c36e0c1334c07eb1bb788c2.js", "dependencies": [], "id": "3F69B852-852E-450F-BD37-F12A1BC8E794"}]}], "name": "WF-170500 B2B: Schools \u2014 Originally set to launch 9/18/18, but schools list was not defined by client."}], "audienceIds": ["and", "11177230834", "11488350482", "10370427570"], "changes": null, "id": "11424433768", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist (live experiments),[Page Targeting] Ask section Answer page", "name": "Bar1 for Ask section Answers page | 2018-08-06 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11195280488", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/1c9fb26c5c65e3926507c25cf8a8c856e6390c1af765de501b861213ae555e7d.js", "dependencies": [], "id": "A8B34193-AB76-4C27-8957-CAC2EF27F50E"}]}], "name": "ASK THE EXPERTS (back to Ask hub page)"}], "audienceIds": ["and", "10370427570", "11198760532"], "changes": null, "id": "11191660759", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[B2B] CUNY", "name": "Nons | B2B - for CUNY | 2018-05-24 - ongoing", "bucketingStrategy": null, "variations": [{"id": "10756960611", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/c5490022d60d00e8b0248124e9f3137c818549f899d14c1efd71d6b26dfeff6f.js", "dependencies": [], "id": "4E17D544-8AB3-42E5-8DAA-1E6A90A26794"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/999119290d809f8e5a3187cf4b9c2e83616a09e0d8c38eab661927eedf5eaf9a.js", "dependencies": [], "id": "808591A9-C0D0-42DF-8FA3-ED409AD3BA4B"}, {"src": "/actions/999119290d809f8e5a3187cf4b9c2e83616a09e0d8c38eab661927eedf5eaf9a.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/83a161bd60e50a68acc5c0bf55d303a4bb039c289b36c56e28330ae4a4765f17.js", "dependencies": [], "id": "76539D61-EE55-4FD9-AC78-DFD3705A9B7B"}]}], "name": "EXO-73 B2B with custom colors"}], "audienceIds": ["and", "9693802151", "10754870518"], "changes": null, "id": "10754002252", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_maro461,[Subscriber Type] Subs (All)", "name": "Subs | Dock: Auto-expanded | exo_maro461", "bucketingStrategy": null, "variations": [{"id": "11902860603", "actions": [{"viewId": "9260770473", "changes": [{"dependencies": [], "type": "custom_code", "id": "FF1CC451-AC99-436D-BF21-5F5BB831756D", "value": function($){window.NYToptly.vi_dock_function = function () {
	window.NYToptly.vi_dock.size = 'expanded';
	window.NYToptly.vi_dock.minimized = false;
};

document.cookie='GraceViewed=true; domain=.nytimes.com; path=/; max-age='+60*60*6;
// Sets a cookie called GraceViewed that expires in 6 hours, so that this Dock does not show on every story in one session. —DJP
}}, {"src": "/actions/4910cdcd3437c05dc66ee7d5f92d6d7fc220565b1c5f9e628ba05a58b71d6962.js", "dependencies": [], "id": "550A669E-DF8C-498C-869D-D8FD75B8377F"}]}], "name": "control"}], "audienceIds": ["and", "11386500025", "10232270695"], "changes": null, "id": "11791876108", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Cookie] exo_* does not exist (live experiments),[Device] Desktop / Tablet", "name": "Welcome Ad Killset for Desktop | 2018-10-03 \u2013 2018-12-31", "bucketingStrategy": null, "variations": [{"id": "11703670365", "actions": [{"viewId": "11210370568", "changes": [{"src": "/actions/38ee780dabd19f09c59dc2058a84628b880394094b3c27a21457fc25804af29a.js", "dependencies": [], "id": "4D2B8306-DE9D-424E-B8C2-F450F0046A17"}]}], "name": "Killset"}], "audienceIds": ["and", "9693802151", "10370427570", "10235345280"], "changes": null, "id": "11722410240", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Browser Type] IE11 or dev mode", "name": "Gateway killset for IE11 | 2018-11-29", "bucketingStrategy": null, "variations": [{"id": "12227981648", "actions": [{"viewId": "9413676220", "changes": [{"name": "Killset", "config": {"selected_asset": "vi_dockgateway"}, "widget_id": "10620201952", "dependencies": [], "type": "widget", "id": "E234EAE6-7D39-453D-BA7F-C909891260C7"}]}], "name": "Variation #1"}], "audienceIds": ["and", "12229592851"], "changes": null, "id": "12109813841", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Cookie] exo_dock_open_lire_modal", "name": "dev only | dock_open_lire_modal | exo_dock_open_lire_modal", "bucketingStrategy": null, "variations": [{"id": "12093755966", "actions": [{"viewId": "10647916243", "changes": []}, {"viewId": "9260770473", "changes": [{"src": "/actions/b116fd8547e29d7ac935c16e4fcfefc26b332985e05a933441ad66b560df5e16.js", "dependencies": [], "id": "092BF240-85D2-4067-8213-B4F806E2E96C"}, {"src": "/actions/b116fd8547e29d7ac935c16e4fcfefc26b332985e05a933441ad66b560df5e16.js", "dependencies": [], "id": "C8C66A53-32BD-42B1-8C69-15BC220B7CCC"}]}, {"viewId": "11210370568", "changes": []}, {"viewId": "9263528157", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "9693802151", "9265370759", "12105398061"], "changes": null, "id": "12134275601", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] UK/Europe/ROW exclude Australia and Canada ,[cookie] exo_nons_dec_sale_1218", "name": "Nons | INYT (UK/EU/ROW) | December Sale | 2018-12-17 - 2018-12-31 TESTING COLLAPSED COPY exo_nons_dec_sale_1218", "bucketingStrategy": null, "variations": [{"id": "12393022839", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/997529b729bc32fac7c93ec1ea9c8e204d635c84b238af607ffc62f595a8d146.js", "dependencies": [], "id": "746391D7-0DDA-47DA-ABA0-85DA9556093C"}]}, {"viewId": "10647916243", "changes": [{"dependencies": [], "type": "custom_code", "id": "9357ACCD-C97B-49B6-8C33-39511E824564", "value": function($){var cmpId = '7WWFH';

if (window.screen.width < 768) {
	cmpId = '7XFL8';
}

var getCookie = function (c_name) {
  var cookval = '';
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      cookval = unescape(y);
    }
  }
  return cookval;
};

var getCurrentLocation = function () {
  var country;
  var testLocation = window.NYToptly.getQueryParameter('location') || getCookie('abTestLocation');

  if (testLocation && testLocation !== '') {
    country = testLocation;

  } else {

    country = window.optimizely.get('visitor').location.country;
    var eurozone = ['DE', 'AD', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'GR', 'VA', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'MC', 'NL', 'PL', 'PT', 'RO', 'SM', 'SK', 'SI', 'ES', 'SE', 'CH'];
    if (eurozone.indexOf(country) > -1) {
      country = 'EU';
    } else if (country !== 'CA' && country !== 'EU' && country !== 'GB' && country !== 'AU') {
      country = 'ROW';
    }
  }
  return country;
};

var queryCountry = getCurrentLocation();


var MKDATA = {
  currencyData: {
    ROW: {
      lp: 'lp8U87R.html?campaignId=',
    },
    GB: {
      lp: 'lp8U87J.html?campaignId=',
    },
    EU: {
      lp: 'lp8U87J.html?campaignId=',
    },
    CA: {
      lp: 'lp8U87X.html?campaignId=',
    },
    AU: {
      lp: 'lp8U87X.html?campaignId=',
    }
  }	
};

var changeBar1Lp = function (currency) {
  if (currency !== '') {
    return MKDATA.currencyData[currency].lp;
  }
};

var vi_bar1_function = function () {
  var optlyBar1Url = 'https://www.nytimes.com/subscription/inyt/' + changeBar1Lp(queryCountry) + cmpId;
  window.NYToptly.vi_bar1.subscribe_url = optlyBar1Url;
};

window.NYToptly.vi_bar1_function = vi_bar1_function;
}}, {"src": "/actions/4e701038bb30a1702f33854ac971debf03478a9804b3e1878e12529edaff426d.js", "dependencies": [], "id": "5F024FFD-E279-4657-AA8A-C6CF094756CD"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/d07672cbea5804a35b131b6d22a143ec04f010c8e7dba2ba3b6bc308fc8aa08d.js", "dependencies": [], "id": "6A2CB59F-5ED3-498A-A659-3C6AADBF1ADF"}, {"src": "/actions/d07672cbea5804a35b131b6d22a143ec04f010c8e7dba2ba3b6bc308fc8aa08d.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/518cde9d3501e6998792fb84edd980d484de17973b41e5ac5ada459a6bc01390.js", "dependencies": [], "id": "05F6A27D-EC3E-4806-9DB8-90D395D21ECC"}, {"src": "/actions/518cde9d3501e6998792fb84edd980d484de17973b41e5ac5ada459a6bc01390.js", "dependencies": [], "id": "E06A7D08-2AD7-456A-AD13-197605A4900A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/07825e6cb294b8e6add5b285ae2ca4c87fd3277fbdd4262e948f2210d80d377f.js", "dependencies": [], "id": "406DFCB2-265C-4021-9D7D-02E06844FAE5"}, {"src": "/actions/07825e6cb294b8e6add5b285ae2ca4c87fd3277fbdd4262e948f2210d80d377f.js", "dependencies": [], "id": "44B28E08-AF0E-427E-8E89-CBDF2CE8053F"}]}], "name": "233323: World under pressure. 8U87J/8U87R."}], "audienceIds": ["and", "9693802151", "10716002655", "12227881433"], "changes": null, "id": "12387193454", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[WAT] HD_Grace or query param - grace_hd_testing,[Cookie] GraceViewed does not exist,[Cookie] exo_* does not exist (live experiments)", "name": "Subs | Dock: Auto-expanded | HD In-grace 7R8XQ | 2018-08-22 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "12113370733", "actions": [{"viewId": "9260770473", "changes": [{"dependencies": [], "type": "custom_code", "id": "FF1CC451-AC99-436D-BF21-5F5BB831756D", "value": function($){window.NYToptly.vi_dock_function = function () {
	window.NYToptly.vi_dock.size = 'expanded';
	window.NYToptly.vi_dock.minimized = false;
};

document.cookie='GraceViewed=true; domain=.nytimes.com; path=/; max-age='+60*60*6;
// Sets a cookie called GraceViewed that expires in 6 hours, so that this Dock does not show on every story in one session. —DJP
}}, {"src": "/actions/86b9e4a539b95b0195e592777653b0be9fe638396fc9ca57cdcd404835b651ae.js", "dependencies": [], "id": "550A669E-DF8C-498C-869D-D8FD75B8377F"}]}], "name": "Subs | HD In-grace | Auto-expanded Dock | 7R8XQ"}], "audienceIds": ["and", "10738960527", "11698063390", "10834620768", "10370427570"], "changes": null, "id": "12095891210", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10886170402", "endOfRange": 5000}, {"entityId": "11056600350", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Geo] US,[Bundle] Has Crossword Entitlement", "name": "Subs eligible for Crossword upsell | All Bar1s | US Geo | 2018-06-19", "bucketingStrategy": "impression", "variations": [{"id": "10886170402", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/94a51255473a8f174713d09919b6b90c2c859ebe65639815995917b4ab61383c.js", "dependencies": [], "id": "4AFA4B3D-AC81-45FF-B951-AD9BA48FCDA4"}]}, {"viewId": "9413676220", "changes": []}], "name": "Play the Crossword (Upsell LP)"}, {"id": "10880230247", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/033aa926e68b592b747666193c1dd6e130b8cf8e30b47da1434aff2a65f5bfd7.js", "dependencies": [], "id": "BB8F7175-EA5D-4821-8D2E-54B4D3CA7FB1"}]}, {"viewId": "9413676220", "changes": []}], "name": "Give The Times - Holiday Gifting -WF-226720 "}, {"id": "11056600350", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/8640826c7ad961189528d1c068f9205061100fe08cfc4abbc30188bcee2b0333.js", "dependencies": [], "id": "EBF75B44-6979-4973-BE36-233BE9ED163A"}]}, {"viewId": "9413676220", "changes": []}], "name": "Get Updates - ADDED 7/3/18"}], "audienceIds": ["and", "10738960527", "10370427570", "9265370759", ["not", "10875970017"]], "changes": null, "id": "10882720260", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10849280791", "endOfRange": 5000}, {"entityId": "11031990256", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Geo] US,[Bundle] Has Crossword Entitlement", "name": "Subs with access to Crossword | All Bar1s | US Geo | 2018-06-19", "bucketingStrategy": "impression", "variations": [{"id": "10849280791", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/6ec7624d95960c66cd6c74e674a551438e080e9e255fdef8b68472d66f263fe6.js", "dependencies": [], "id": "4AFA4B3D-AC81-45FF-B951-AD9BA48FCDA4"}]}, {"viewId": "9413676220", "changes": []}], "name": "Play the Crossword (Crossword homepage)"}, {"id": "10847630954", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/033aa926e68b592b747666193c1dd6e130b8cf8e30b47da1434aff2a65f5bfd7.js", "dependencies": [], "id": "BB8F7175-EA5D-4821-8D2E-54B4D3CA7FB1"}]}, {"viewId": "9413676220", "changes": []}], "name": "Give The Times - Holiday Gifting -WF-226720"}, {"id": "11031990256", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/3cc2e295a72e9e85bd13388b0dfb3c81427a3cacde64c7f0bbb45ec24f848f69.js", "dependencies": [], "id": "E9C41EAD-F4C0-4FE1-BD1E-A7FA4751E375"}]}, {"viewId": "9413676220", "changes": []}], "name": "Get Updates - ADDED 7/3/18"}], "audienceIds": ["and", "10738960527", "10370427570", "9265370759", "10875970017"], "changes": null, "id": "10845820719", "integrationSettings": null}, {"weightDistributions": [{"entityId": "11107368289", "endOfRange": 5000}, {"entityId": "11113163477", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] exo_* does not exist (live experiments),[Geo] WW ex US (International) or dev mode", "name": "Subs - INTL | All Bar1s | WW Geo | 2018-07-23", "bucketingStrategy": "impression", "variations": [{"id": "11107368289", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/6ec7624d95960c66cd6c74e674a551438e080e9e255fdef8b68472d66f263fe6.js", "dependencies": [], "id": "4AFA4B3D-AC81-45FF-B951-AD9BA48FCDA4"}]}, {"viewId": "9413676220", "changes": []}], "name": "Play the Crossword (Crossword homepage)"}, {"id": "11113163477", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/3cc2e295a72e9e85bd13388b0dfb3c81427a3cacde64c7f0bbb45ec24f848f69.js", "dependencies": [], "id": "E9C41EAD-F4C0-4FE1-BD1E-A7FA4751E375"}]}, {"viewId": "9413676220", "changes": []}], "name": "Get Updates - ADDED 7/3/18"}, {"id": "12178797281", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/c80bd47cd218087a7d0d73c4c5679d573467e987081bb807ccfaf315aedfe893.js", "dependencies": [], "id": "7DF61B15-1E3F-4110-8D2C-7FB11DEF06E9"}]}, {"viewId": "9413676220", "changes": []}], "name": "Give The Times - Holiday Gifting - WF-246718"}], "audienceIds": ["and", "10738960527", "10370427570", "9666533154"], "changes": null, "id": "11093635926", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] b2b_cig_opt - Select Libraries,[Cookie] exo_* does not exist (live experiments),[User] Logged-in users", "name": "Logged-in users | B2B: Migration - Headers - 1 Libraries | 2018-09-21 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11473772978", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/16ab9446c046786eb5f7af2f1a4e3962498660c264872276cecbaad2052df30f.js", "dependencies": [], "id": "37386CA6-5135-4083-B917-50F6470401DA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/c2403e4323efa1a5712e96fcb2c5ef289c1fa87c0fbfb52e918f7a43be80fc5c.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/c2403e4323efa1a5712e96fcb2c5ef289c1fa87c0fbfb52e918f7a43be80fc5c.js", "dependencies": [], "id": "FADE4D43-94E4-4C8B-9683-34F6697A2602"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - CHOOSE NEWSLETTERS"}], "audienceIds": ["and", "11198190119", "10370427570", "11479282005"], "changes": null, "id": "11500481679", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] b2b_cig_opt - Select Libraries,[Cookie] exo_* does not exist (live experiments),[User] Anonymous - NOT logged-in", "name": "Anonymous users | B2B: Migration - Headers - 1 Libraries | 2018-09-13 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11196150582", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/5fbffe33d04f80bb6aa9ecd598a258d12492ee0b9ce6e31f9a3e22c965b8f407.js", "dependencies": [], "id": "37386CA6-5135-4083-B917-50F6470401DA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/1839f03d8ffaff21bed5c60d9a2eb095e7d73398debaed5d765a6d3f52a960f4.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/1839f03d8ffaff21bed5c60d9a2eb095e7d73398debaed5d765a6d3f52a960f4.js", "dependencies": [], "id": "DCAE212C-5354-4D3C-B785-A2B8215D2FF0"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - REGISTER NOW"}], "audienceIds": ["and", "11198190119", "10370427570", "11177230834"], "changes": null, "id": "11095569152", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist (live experiments),[Cookie] b2b_cig_opt - Select Schools", "name": "Nons | B2B: Migration - Headers - 2 Schools | 2018-09-17 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11401307049", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/dac9d14f416818769170df345d0cb740e9c4d8e3515815e55538197f9e8c6f90.js", "dependencies": [], "id": "37386CA6-5135-4083-B917-50F6470401DA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/5721e6599ca1a514dafa8733cfc1e77e7ed216f3d901156cec7c672563dd1d38.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/5721e6599ca1a514dafa8733cfc1e77e7ed216f3d901156cec7c672563dd1d38.js", "dependencies": [], "id": "DCAE212C-5354-4D3C-B785-A2B8215D2FF0"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers"}], "audienceIds": ["and", "10370427570", "11405118141"], "changes": null, "id": "11410865971", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist (live experiments),[User] Logged-in users,[Cookie] b2b_cig_opt - Select Corp Clients,[Cookie] b2b_cig_opt - Select Corp Clients - Avoid Logged In", "name": "Logged-in users | B2B: Migration - Headers - 4 Corp Clients | 2018-10-12 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11805000880", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/16ab9446c046786eb5f7af2f1a4e3962498660c264872276cecbaad2052df30f.js", "dependencies": [], "id": "37386CA6-5135-4083-B917-50F6470401DA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/e91cd971145abddbf34405da47650ade9eea623ab04f8442c0f2e2bb0ef8b880.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/e91cd971145abddbf34405da47650ade9eea623ab04f8442c0f2e2bb0ef8b880.js", "dependencies": [], "id": "FADE4D43-94E4-4C8B-9683-34F6697A2602"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - CHOOSE NEWSLETTERS"}], "audienceIds": ["and", "10370427570", "11479282005", "11798972407", "12998030218"], "changes": null, "id": "11795352845", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist (live experiments),[User] Anonymous - NOT logged-in,[Cookie] b2b_cig_opt - Select Corp Clients", "name": "Anonymous users | B2B: Migration - Headers - 4 Corp Clients | 2018-10-12 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11814481894", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/5fbffe33d04f80bb6aa9ecd598a258d12492ee0b9ce6e31f9a3e22c965b8f407.js", "dependencies": [], "id": "37386CA6-5135-4083-B917-50F6470401DA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/3c9d742e6ee70bff274b3a18400233675f9cc99fb99bc32db2828bc4dcee2a0d.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/3c9d742e6ee70bff274b3a18400233675f9cc99fb99bc32db2828bc4dcee2a0d.js", "dependencies": [], "id": "DCAE212C-5354-4D3C-B785-A2B8215D2FF0"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - REGISTER NOW"}], "audienceIds": ["and", "10370427570", "11177230834", "11798972407"], "changes": null, "id": "11776081853", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All),[Redbird] in trial - Free Trial without CC,[Redbird] Free Trial noCC 7 days left,[Cookie] Redbird intrial frequency cap 24h - redbird_intrial,[Geo] US,[Cookie] exo_* does not exist (live experiments),[Browser Type] Exclude IE11", "name": "Redbird_US (Subs) | in trial - Free Trial without CC | Nons | USGM | 01-02-2019 - ongoing", "bucketingStrategy": null, "variations": [{"id": "12319552273", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "9260770473", "changes": [{"src": "/actions/ced0d2c37240c9cd0bdf58bb976a018dee36a5dc8e8b24d4906db57e7120f8dc.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/ced0d2c37240c9cd0bdf58bb976a018dee36a5dc8e8b24d4906db57e7120f8dc.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": []}, {"viewId": "9263528157", "changes": []}], "name": "redbird_US | in trial - Free Trial without CC | USGM | BAU"}], "audienceIds": ["and", "10232270695", "11937130003", "11950553353", "11946605711", "9265370759", "10370427570", "11067720842"], "changes": null, "id": "12354572346", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Subscriber Type] Regi Non-Sub,[Cookie] exo_* does not exist (live experiments),[Geo] US,[Redbird US] exclude Outside_Redbird,[Browser Type] Exclude IE11", "name": "Redbird_US | regis - catch all | Nons | USGM | 01-01-2019 - ongoing", "bucketingStrategy": null, "variations": [{"id": "12335412364", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/851f8b641e7e45e7ab4ad399fdb7d09749ba1a757f0b7baf7e786d18e6737e13.js", "dependencies": [], "id": "3CF7002C-CE5C-4B37-9CF3-1BDFCA0786B5"}, {"src": "/actions/851f8b641e7e45e7ab4ad399fdb7d09749ba1a757f0b7baf7e786d18e6737e13.js", "dependencies": [], "id": "E4E0C6FC-C3E2-4DAD-BAB5-9ABBB5727486"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/4f2d01c236abbc97a1c1511391b1b78fb5808c2f4823629926a120ac17c0bb0c.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/4f2d01c236abbc97a1c1511391b1b78fb5808c2f4823629926a120ac17c0bb0c.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": []}, {"viewId": "9263528157", "changes": [{"src": "/actions/87d25216cb47f33ac34c09ab929ff01208220bcc645213fa8fd4849b4d24c112.js", "dependencies": [], "id": "EA9C866A-E93C-4869-963D-8074768D5BC9"}, {"src": "/actions/87d25216cb47f33ac34c09ab929ff01208220bcc645213fa8fd4849b4d24c112.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}], "name": "redbird_US | regis catch all | USGM | acquisition "}], "audienceIds": ["and", "9693802151", "10195324221", "10370427570", "9265370759", "12406772408", "11067720842"], "changes": null, "id": "12320112078", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Abra] MKT_Redbird_US = Outside_Redbird,[Cookie] exo_* does not exist (live experiments),[Abra] MKT_wcm_dfp_propensity_price,[Abra] user is not in 'outside_propensity'", "name": "Nons | USGM | A/B Offer Propensity Test | upfront assets | VI | 2018-01-11", "bucketingStrategy": null, "variations": [{"id": "12322010071", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/9f9763702f9c7c7ad11c556faaac0853fc11c4b82e990f74625455f0805572e2.js", "dependencies": [], "id": "3D25E114-4410-40CF-8922-D87353A44166"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/1a3a4b975dddca1bd47fac350b5fbf8a31354efd497edbe58b3c7c1148518dca.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/1a3a4b975dddca1bd47fac350b5fbf8a31354efd497edbe58b3c7c1148518dca.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/4e207520204348aafb43ded57c1abf0f30911dae2d0ed9f8315c3abd5af48764.js", "dependencies": [], "id": "B1503D03-966E-4C12-B9E4-029E4B6C9D57"}, {"src": "/actions/4e207520204348aafb43ded57c1abf0f30911dae2d0ed9f8315c3abd5af48764.js", "dependencies": [], "id": "9B7131AC-4D6C-43D2-BC5D-7FA259879CBB"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/4dfbe9d9e99f9d7abb1eb8ba4b3c2490b56f4018c590c896bcbc3b3bc35978a0.js", "dependencies": [], "id": "9AD452ED-0341-4E9F-9E7C-E5ECA2935B69"}, {"src": "/actions/4dfbe9d9e99f9d7abb1eb8ba4b3c2490b56f4018c590c896bcbc3b3bc35978a0.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/44aa1eedc26b4ce6dc25896ad6c29f689c7f4de2e86f7a77fb89c02eefbb01e4.js", "dependencies": [], "id": "4CEF0410-2713-49E0-B519-C2534BD0E9EE"}, {"src": "/actions/44aa1eedc26b4ce6dc25896ad6c29f689c7f4de2e86f7a77fb89c02eefbb01e4.js", "dependencies": [], "id": "877045F1-F3C1-4068-A5A7-8DEB7E941B90"}]}], "name": "$2 week. YELLOW cta"}], "audienceIds": ["and", "9693802151", "9265370759", "12350353132", "10370427570", "12932310129", "13178270113"], "changes": null, "id": "12354440079", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Abra] MKT_Redbird_US = Outside_Redbird,[Cookie] exo_* does not exist (live experiments),[Abra] MKT_wcm_dfp_propensity_price,[Abra] user is not in 'outside_propensity'", "name": "Nons | USGM | A/B Offer Propensity Test | upfront assets | REGI USERS | VI | 2018-01-11", "bucketingStrategy": null, "variations": [{"id": "12918980154", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/9f9763702f9c7c7ad11c556faaac0853fc11c4b82e990f74625455f0805572e2.js", "dependencies": [], "id": "3D25E114-4410-40CF-8922-D87353A44166"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/1a3a4b975dddca1bd47fac350b5fbf8a31354efd497edbe58b3c7c1148518dca.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/1a3a4b975dddca1bd47fac350b5fbf8a31354efd497edbe58b3c7c1148518dca.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/4e207520204348aafb43ded57c1abf0f30911dae2d0ed9f8315c3abd5af48764.js", "dependencies": [], "id": "B1503D03-966E-4C12-B9E4-029E4B6C9D57"}, {"src": "/actions/4e207520204348aafb43ded57c1abf0f30911dae2d0ed9f8315c3abd5af48764.js", "dependencies": [], "id": "9B7131AC-4D6C-43D2-BC5D-7FA259879CBB"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/4dfbe9d9e99f9d7abb1eb8ba4b3c2490b56f4018c590c896bcbc3b3bc35978a0.js", "dependencies": [], "id": "9AD452ED-0341-4E9F-9E7C-E5ECA2935B69"}, {"src": "/actions/4dfbe9d9e99f9d7abb1eb8ba4b3c2490b56f4018c590c896bcbc3b3bc35978a0.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/44aa1eedc26b4ce6dc25896ad6c29f689c7f4de2e86f7a77fb89c02eefbb01e4.js", "dependencies": [], "id": "4CEF0410-2713-49E0-B519-C2534BD0E9EE"}, {"src": "/actions/44aa1eedc26b4ce6dc25896ad6c29f689c7f4de2e86f7a77fb89c02eefbb01e4.js", "dependencies": [], "id": "877045F1-F3C1-4068-A5A7-8DEB7E941B90"}]}], "name": "$2 week. YELLOW cta"}], "audienceIds": ["and", "9693802151", "9265370759", "12350353132", "10370427570", "12932310129", "13178270113"], "changes": null, "id": "12893710171", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Cookie] exo_* does not exist (live experiments),[B2B] ASU", "name": "Nons | B2B - for ASU | Welcome Ad/Bar1/Dock | added logo | 2019-01-25 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13112120404", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/a60ac1a7e4b523ea1a95f53b09fd1520777b5636baa5de724d5b13eb53cfbb95.js", "dependencies": [], "id": "4E17D544-8AB3-42E5-8DAA-1E6A90A26794"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/459a827e0ac67b94006b859343a2a1a60438657e5291db8a9b4d3e7df4fff5cc.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/a0df5439ae1d13d9bc8dc3207a568b60be5bb062fa8ccf446c075f045d9cc079.js", "dependencies": [], "id": "7C7A0655-A4E2-4942-AA03-7985D178BD6D"}, {"src": "/actions/a0df5439ae1d13d9bc8dc3207a568b60be5bb062fa8ccf446c075f045d9cc079.js", "dependencies": [], "id": "988B5564-B2D3-43B7-97D2-B80A7015DF7D"}]}], "name": "EXO-73 B2B with custom colors"}], "audienceIds": ["and", "9693802151", "10370427570", "10762441103"], "changes": null, "id": "13129400440", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Support] JKIDD Grace Global", "name": "Subs | Vi Bar1 | In-grace 7RUUX | 2018-06-30 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10728762068", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/c07c2a6cca66224188dabec3006757f5be2a0d2549fef96a62335df22066e820.js", "dependencies": [], "id": "4AFA4B3D-AC81-45FF-B951-AD9BA48FCDA4"}]}], "name": "Subs | Digi In-grace | Bar1 | 7RUUX (666R8, 06-30 \u2013 10-08)"}], "audienceIds": ["and", "10738960527", "12105384231"], "changes": null, "id": "10740183049", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Device] Mobile,[Cookie] Exo Killset Development", "name": "Welcome Ad Killset for mobile | 2018-12-11 exo_killset_dev", "bucketingStrategy": null, "variations": [{"id": "12340591214", "actions": [{"viewId": "11210370568", "changes": [{"src": "/actions/f9946c022bc30fefe6bb27bdf95cd9db55cb54056f1cb2dd4dc5138d488ff4af.js", "dependencies": [], "id": "9F23AEB2-AE98-4C39-AC1D-557AD2C0D839"}]}], "name": "Variation #1"}], "audienceIds": ["and", "10274690951", "10650272390"], "changes": null, "id": "12324092345", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] b2b_cig_opt - Select Hotels,[Cookie] exo_dj_b2bhotels", "name": "Nons | B2B: Migration - Headers - 3 Hotels | 2018-10-12 \u2013 ongoing exo_dj_b2bhotels", "bucketingStrategy": null, "variations": [{"id": "11414656760", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": []}, {"viewId": "9260770473", "changes": [{"src": "/actions/96a34597fd87911fb53f4769141a5e022292750d8908881771d7ee1eabff6941.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/96a34597fd87911fb53f4769141a5e022292750d8908881771d7ee1eabff6941.js", "dependencies": [], "id": "847BA0F2-142B-4B59-A040-71AD3CC16A7F"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers | Launch DELAYED pending Free Trial LP"}], "audienceIds": ["and", "11401583224", "11381510588"], "changes": null, "id": "11412877508", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Segment] All EDU: *all* segments except K12,[Cookie] exo_* does not exist (live experiments)", "name": "Nons | USGM | Vi | EDU | BAU - Refresh (with MC10) | 2019-02-01 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13256410080", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/2880d77f7ca0c6837ecc988a0a9f90e4626da6f726e9ccbd285d42f845185f47.js", "dependencies": [], "id": "3D65B361-4787-465E-B465-93C56ECE43B7"}, {"src": "/actions/2880d77f7ca0c6837ecc988a0a9f90e4626da6f726e9ccbd285d42f845185f47.js", "dependencies": [], "id": "5D4AA42B-4C43-4E24-9256-AFAD07AF7E95"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/091a6211ae90574fed7f6fab8e15a6b2311ede6106d975aa87757c02ccc28ccb.js", "dependencies": [], "id": "387C1EF7-60A9-4A63-9965-349AFB486454"}, {"src": "/actions/091a6211ae90574fed7f6fab8e15a6b2311ede6106d975aa87757c02ccc28ccb.js", "dependencies": [], "id": "5F024FFD-E279-4657-AA8A-C6CF094756CD"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/613523f28dfcb57f849c7cfc558ca5d84a0f9d4801e5fe6ff44d48897110bece.js", "dependencies": [], "id": "6A2CB59F-5ED3-498A-A659-3C6AADBF1ADF"}, {"src": "/actions/613523f28dfcb57f849c7cfc558ca5d84a0f9d4801e5fe6ff44d48897110bece.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/4dbe489b8d34daace522dd9e807b20b9b4476979ae51809b8013135ee58abfb7.js", "dependencies": [], "id": "05F6A27D-EC3E-4806-9DB8-90D395D21ECC"}, {"src": "/actions/4dbe489b8d34daace522dd9e807b20b9b4476979ae51809b8013135ee58abfb7.js", "dependencies": [], "id": "E06A7D08-2AD7-456A-AD13-197605A4900A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/4a92412de7a274ab86bbf7471afe71be096f3942a51efed680646a48477197ea.js", "dependencies": [], "id": "44B28E08-AF0E-427E-8E89-CBDF2CE8053F"}]}], "name": "Variation #1"}], "audienceIds": ["and", "9693802151", "9265370759", "10613651460", "10370427570"], "changes": null, "id": "13231010183", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[JKIDD] Logged-out Subs,[Cookie] exo_* does not exist (live experiments)", "name": "Subs, Logged-out | Anons identified via JKIDD | 2018-07-25 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11105255240", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/c4666faf61af5ce9e261873645c820dd66c44aa581cb849333b8cba03a1b1b6f.js", "dependencies": [], "id": "AE98B3C7-BBA2-469D-9F60-E95CFB649D63"}, {"src": "/actions/c4666faf61af5ce9e261873645c820dd66c44aa581cb849333b8cba03a1b1b6f.js", "dependencies": [], "id": "CCAE0E31-01E2-49A3-BA9A-1C5B205974AB"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/d19e28fabe2e4462c848bb85c7e69927735dc859f3248a00053bb7f041a849f9.js", "dependencies": [], "id": "B914954E-DCB2-42F1-8B0D-871F769B3DD6"}, {"src": "/actions/d19e28fabe2e4462c848bb85c7e69927735dc859f3248a00053bb7f041a849f9.js", "dependencies": [], "id": "334BC0AA-3838-47B5-839B-39F167D0E8C6"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/9825d4daaea6ac330dfc9012ed79dcc64fcf01b5347a1f30ac5f0125b754fcbd.js", "dependencies": [], "id": "8C08AE18-F079-4E2F-8107-7C3F0797A230"}]}], "name": "EXO-99"}], "audienceIds": ["and", "10832102585", "10370427570"], "changes": null, "id": "11095406778", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] b2b_cig_opt - Select Corp Clients - NO REGISTER NOW CTA,[Cookie] exo_* does not exist (live experiments)", "name": "Anonymous users | B2B: Migration - Headers - 4 Corp Clients | Full access corp clients (no need to register) | 2019-02-11 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "13367410277", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/21da5b098bb7074a48c884fcc385eb31cf49591d6a76d928cec408bd5f3c5284.js", "dependencies": [], "id": "82337DDB-1B6E-4E94-9B21-6F30C71282EA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/5af3d30d3d802279d743c86efc3a44afab619e34f2cc626b6e5904e770ea3645.js", "dependencies": [], "id": "3DC434C2-966B-4F9E-AFA1-D8648D48E639"}, {"src": "/actions/5af3d30d3d802279d743c86efc3a44afab619e34f2cc626b6e5904e770ea3645.js", "dependencies": [], "id": "2E5A77AF-87DA-4B8C-B4C3-4B6FCCB66AB0"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/e980323cc3e413a89a49678caf734a78b1b33a30ec5c20469d40a6085b5cad7c.js", "dependencies": [], "id": "D1C35DE5-8FF7-4CB9-9860-A458D09505FF"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - Full access corp clients (no need to register)"}], "audienceIds": ["and", "13273380393", "10370427570"], "changes": null, "id": "13406390003", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Cookie] exo_* does not exist (live experiments),[Redbird US]  Control - MKT_Redbird_US = '0_Control',[Browser Type] Exclude IE11", "name": "Redbird_US Gateway Control | anonymous | Nons | USGM | acquisition | 01-01-2019 - ongoing", "bucketingStrategy": null, "variations": [{"id": "12260563798", "actions": [{"viewId": "10647916243", "changes": []}, {"viewId": "9260770473", "changes": []}, {"viewId": "11210370568", "changes": []}, {"viewId": "9263528157", "changes": []}, {"viewId": "9413676220", "changes": [{"src": "/actions/202868cc6b6efac9ce3016bfded9bac8bc5765dae65ab71d1a7a0358c79bd5e4.js", "dependencies": [], "id": "49011BFC-9086-4F1C-A897-7421E86D2787"}]}], "name": "Redbird_US Gateway Control | anonymous | Nons | USGM | acquisition - LP 8HYKU"}], "audienceIds": ["and", "9693802151", "10370427570", "12190559908", "11067720842"], "changes": null, "id": "12325000440", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Abra] MKT_Redbird_US = Outside_Redbird,[Abra] MKT_wcm_dfp_propensity_price,[Abra] user is not in 'outside_propensity',[Cookie] exo_* does not exist (live experiments)", "name": "Nons | USGM | A/B Offer Propensity Test | var 144 | upfront assets | VI | 2019-02-20 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13353680362", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/938f747e5134c30dc663fd7d5caeaed38fe2db863325135383d6c9215206c029.js", "dependencies": [], "id": "3D25E114-4410-40CF-8922-D87353A44166"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/dec549864ffc9d8c6df7cb3842410386bc7fe8b085f0be64353de267064e4197.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/dec549864ffc9d8c6df7cb3842410386bc7fe8b085f0be64353de267064e4197.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/0ca0c99fcd5b70874735fbcc9af0dc014fc6ccd2059a66255116f796f00568cd.js", "dependencies": [], "id": "B1503D03-966E-4C12-B9E4-029E4B6C9D57"}, {"src": "/actions/0ca0c99fcd5b70874735fbcc9af0dc014fc6ccd2059a66255116f796f00568cd.js", "dependencies": [], "id": "9B7131AC-4D6C-43D2-BC5D-7FA259879CBB"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/bf2ddd956659572cc072815fb6604560a844bdfd43c1fb1a389c9f37a21f6d80.js", "dependencies": [], "id": "9AD452ED-0341-4E9F-9E7C-E5ECA2935B69"}, {"src": "/actions/bf2ddd956659572cc072815fb6604560a844bdfd43c1fb1a389c9f37a21f6d80.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/39f5e37fd6315b21eecd5d0650f206fe95fab490a694ea6577d844aecf3b266b.js", "dependencies": [], "id": "4CEF0410-2713-49E0-B519-C2534BD0E9EE"}, {"src": "/actions/39f5e37fd6315b21eecd5d0650f206fe95fab490a694ea6577d844aecf3b266b.js", "dependencies": [], "id": "877045F1-F3C1-4068-A5A7-8DEB7E941B90"}]}], "name": "$2 week. YELLOW cta"}], "audienceIds": ["and", "9693802151", "9265370759", "12350353132", "12932310129", "13178270113", "10370427570"], "changes": null, "id": "13369140520", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] GraceViewed does not exist,[Support] jkidd Grace Vi,[Support] JKIDD Grace Global,[Cookie] exo_* does not exist (live experiments)", "name": "Subs | In-grace | AB copy test winner | welcome, dock | desktop and mobile | 2019-02-13 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13540540032", "actions": [{"viewId": "10647916243", "changes": []}, {"viewId": "11210370568", "changes": [{"src": "/actions/fb59d0510c40f87e7ae881493cdc543b4b967ab7669f218ea9fe5110946ed008.js", "dependencies": [], "id": "9DDCE318-FDC5-4A57-B119-D5B2A39A00E1"}, {"src": "/actions/fb59d0510c40f87e7ae881493cdc543b4b967ab7669f218ea9fe5110946ed008.js", "dependencies": [], "id": "30716A72-4954-4257-AED8-DED7A7ED57C5"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/7e63e62d76219b4afb5d32f10bcb70258b99f828a3ffcb7c77ba64eab91033d1.js", "dependencies": [], "id": "6421513B-2C64-4A71-B132-DD7B1EED7DAF"}, {"src": "/actions/7e63e62d76219b4afb5d32f10bcb70258b99f828a3ffcb7c77ba64eab91033d1.js", "dependencies": [], "id": "18CC8473-268C-425D-878C-C66018F4B5E7"}]}], "name": "Subs | Digi In-grace | Welcome, dock"}], "audienceIds": ["and", "10738960527", "10834620768", "11808711190", "12105384231", "10370427570"], "changes": null, "id": "13530970082", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Redbird] NYToptly.meter.ab.MKT_Redbird_US,[Redbird US] exclude Outside_Redbird,[Browser Type] Exclude IE11,[Cookie] exo_* does not exist (live experiments)", "name": "Redbird_US | anonymous | Nons | USGM | acquisition | 01-01-2019 - ongoing", "bucketingStrategy": null, "variations": [{"id": "12109587722", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/5f289837c24bc5dbd1168cd175fdd4d1dc82e640690aae25a97585a4a0d8862c.js", "dependencies": [], "id": "3CF7002C-CE5C-4B37-9CF3-1BDFCA0786B5"}, {"src": "/actions/5f289837c24bc5dbd1168cd175fdd4d1dc82e640690aae25a97585a4a0d8862c.js", "dependencies": [], "id": "7E0F0F0A-B6B2-406B-A8C1-DBE0962E8D47"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/a4a8708a9c6b44c4d2a32e20372d816373cd2c773f1775c67639d39a4c546b08.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/a4a8708a9c6b44c4d2a32e20372d816373cd2c773f1775c67639d39a4c546b08.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": []}, {"viewId": "9263528157", "changes": [{"src": "/actions/3307419226c54149d04153bab2b215d21d022f876e91391effa692e7b437166f.js", "dependencies": [], "id": "EA9C866A-E93C-4869-963D-8074768D5BC9"}, {"src": "/actions/3307419226c54149d04153bab2b215d21d022f876e91391effa692e7b437166f.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}], "name": "Redbird_US | anonymous | USGM | acquisition "}], "audienceIds": ["and", "9693802151", "12229296726", "12406772408", "11067720842", "10370427570"], "changes": null, "id": "12103538104", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[JKIDD] exclude Logged-Out Subs,[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[BlueKai] exclude MKTG_All_1PD_Global_Core News Apps_1x30_DFP,[Cookie] `ftuxViewed` does NOT exist,[WAT] Subs_COREandHD_Back2FTUX (uses JKIDD),[Cookie] exo_* does not exist (live experiments)", "name": "Subs | All Geos | Vi | ChurnReduction TFP Back to FTUX | 2019-02-22 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13556880190", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/68119b81cf7be07e35afeb20934f197ce9ad623ac7c8965deb464a0d481cc9d3.js", "dependencies": [], "id": "CEC850FB-7B1C-40CF-8DF3-210D60341C55"}, {"src": "/actions/68119b81cf7be07e35afeb20934f197ce9ad623ac7c8965deb464a0d481cc9d3.js", "dependencies": [], "id": "B57ECF7D-070D-46E0-926E-BB57628A8A0C"}]}, {"viewId": "10647916243", "changes": []}, {"viewId": "9263528157", "changes": []}, {"viewId": "11210370568", "changes": []}], "name": "275760 - Tune up your Times experience. Grey bkgd. Black CTA"}], "audienceIds": ["and", "13558910562", "10738960527", "13567060078", "13545790477", "13776560485", "10370427570"], "changes": null, "id": "13554890295", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] b2b_cig_opt (killset list),[Cookie] exo_* does not exist (live experiments)", "name": "Anonymous and Regis users | B2B: Full access corp clients | No messaging (Killset) | 2019-03-05 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "13838530561", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/89c0555fe76d871c08633a570b1c8f18b7e057b8e186440e658fabaa314caf83.js", "dependencies": [], "id": "82337DDB-1B6E-4E94-9B21-6F30C71282EA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/6d321659983dfa64c27c309d61693a02d02a45cedefbb944038f898956b2c8aa.js", "dependencies": [], "id": "C65DAE63-4EDC-4CF9-BD86-6B1BEC513930"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/c5bec398ce6cf032f189fd95a4596f6081d0fb1e1c322465100ea99fdd9cb768.js", "dependencies": [], "id": "8A1CE6A4-B4B4-4FEF-B930-B094F0496522"}]}], "name": "Killset Dock and WelcomeAd - B2B: Full access corp clients (no need to register)"}], "audienceIds": ["and", "13818000266", "10370427570"], "changes": null, "id": "13842540295", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] MPC Development", "name": "MPC Development | exo_optly_mpc", "bucketingStrategy": null, "variations": [{"id": "12389150917", "actions": [{"viewId": "9260770473", "changes": [{"src": "/actions/4464c8f05abe40ede65bd7361f1e26dc22fff7ec819476f5f1393307869773f0.js", "dependencies": [], "id": "CEC850FB-7B1C-40CF-8DF3-210D60341C55"}, {"src": "/actions/4464c8f05abe40ede65bd7361f1e26dc22fff7ec819476f5f1393307869773f0.js", "dependencies": [], "id": "F7D135B5-CC06-4DA9-ADB3-7992DC8D41EA"}]}, {"viewId": "10647916243", "changes": [{"name": "Bar1 with ABRA support", "config": {"mobile_url": "", "button_label": "MPC Subscribe", "abra_test": "", "subscribe_url": ""}, "id": "5CCFA8C4-A254-4096-8E06-7989355E4345", "dependencies": [], "type": "widget", "widget_id": "11341982037"}]}, {"viewId": "9263528157", "changes": [{"name": "Inline Message with ABRA support", "config": {"abra_test": "", "subscribe_url": "https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?mpc_dev=1"}, "id": "193EB0BD-0160-4183-BD88-BB319530CB35", "dependencies": [], "type": "widget", "widget_id": "11361190077"}]}, {"viewId": "11210370568", "changes": [{"name": "Welcome Ad with ABRA Support", "config": {"welcome_content_css": "#vi_welcome_close {\n  position: absolute;\n  border-radius: 50%;\n  background-clip: padding-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0,0,0,0.15);\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  line-height: normal;\n  vertical-align: middle;\n}\n#vi_welcome_close:hover {\n    background-color: #333;\n}\n#vi_welcome_close:before {\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#vi_welcome_close:after {\n    -webkit-transform: rotate(135deg);\n    -ms-transform: rotate(135deg);\n    transform: rotate(135deg);\n}\n#vi_welcome_close:before,\n#vi_welcome_close:after {\n    content: '';\n    position: absolute;\n    display: block;\n    background-color: #fff;\n    top: 10px;\n    left: 6px;\n    width: 10px;\n    height: 2px;\n}\n\n.welcomeAdContent {\n\tdisplay: block;\n  padding: 65px 40px 15px;\n  height: 240px;\n  background: url('https://static01.nyt.com/subscriptions/Multiproduct/assets_pa2017/images/logo_nyt_white.svg') no-repeat bottom 15px right 15px #3d719b;\n  background-size: 180px;\n  font-weight: lighter;\n  font-size: 28px;\n  font-family: franklin-normal-600, sans-serif;\n  color: #fff;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.welcomeAdTitle {\n\tfont-weight: bold;\n}\n\n.welcomeAdSecondary {\n\tmargin: 55px 0 15px;\n  font-weight: bold;\n  font-size: 24px;\n  color: #f3fe86;\n}\n\n.welcomeAdCta {\n\tfloat: left;\n  width: 120px;\n  height: 32px;\n  background: #f3fe86;\n  border-radius: 3px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 34px;\n  color: black;\n}", "message_type": "WelcomeAd", "session_cap": "1", "creator": "nytExo", "custom_js": "", "click2": "", "session_cap_hours": 24, "freq_cap_number": "3", "click3": "", "welcome_content_html": "<a\n    class=\"welcomeAdContent\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n    href=\"%%CLICKTHRU1%%\"\n  >\n    <h3 class=\"welcomeAdTitle\">MPC Covering stories from up close.</h3>\n    <p>MPC Firsthand reporting that brings you the facts.</p>\n    <p class=\"welcomeAdSecondary\">MPC Subscribe to The New York Times.</p>\n    <span class=\"welcomeAdCta\">MPC See my options</span>\n  </a>", "click4": "", "abra_test": "", "freq_cap_days": 365, "click1": ""}, "id": "2D570171-E7DA-4FB7-891E-C47E005358B4", "dependencies": [], "type": "widget", "widget_id": "11390470128"}]}], "name": "Variation #1"}], "audienceIds": ["and", "12420420739"], "changes": null, "id": "12379570669", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Cookie] exo_* does not exist (live experiments)", "name": "Nons | USGM | Vi | March BAU | 2019-03-01 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13663040241", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/7b97e2f0d2d5839e7dd7617db1c052bb17a720a09d789b136dd059ab55dd711b.js", "dependencies": [], "id": "3D25E114-4410-40CF-8922-D87353A44166"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/9b7055f8c42ce12e7d554cff2aa4e78301348e8fad37e1c137465a6223787acd.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/9b7055f8c42ce12e7d554cff2aa4e78301348e8fad37e1c137465a6223787acd.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/38e72a40819eb66b0e0c8f4cafe513cdfb589fb10281ffbd430bc04ae0eb0022.js", "dependencies": [], "id": "9B7131AC-4D6C-43D2-BC5D-7FA259879CBB"}]}, {"viewId": "9263528157", "changes": [{"dependencies": [], "type": "custom_code", "id": "F9366B18-9FCC-48D6-9CE7-6E4AE491C8E6", "value": function($){var cmpId;
var desktopCID = '7JU8H';
var mobileCID = '78K8F';

if (window.screen.width < 768) {
	cmpId = mobileCID;
} else {
	cmpId = desktopCID;
}

var vi_inline_message_function = function () {
    var optlyInlineUrl = "https://www.nytimes.com/subscription?campaignId=" + cmpId;
  window.NYToptly.vi_inline.subscribe_url = optlyInlineUrl;
};

window.NYToptly.vi_inline_message_function = vi_inline_message_function;
}}, {"src": "/actions/fcdcbdcee6ab50db509cce6ba50d0fdf0875a27f137fa8804926a88a379d2de3.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/b23139b93531bf5d413ab935d773f3beb85589516ddc7d31406f44e0415eebb7.js", "dependencies": [], "id": "4CEF0410-2713-49E0-B519-C2534BD0E9EE"}, {"src": "/actions/b23139b93531bf5d413ab935d773f3beb85589516ddc7d31406f44e0415eebb7.js", "dependencies": [], "id": "877045F1-F3C1-4068-A5A7-8DEB7E941B90"}]}], "name": "wf257083 - Every story in between. $2/wk. Green CTA. LP /subscription"}], "audienceIds": ["and", "9693802151", "9265370759", "10370427570"], "changes": null, "id": "13655780056", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Abra] MKT_Redbird_US = Outside_Redbird,[Abra] MKT_wcm_dfp_propensity_price,[Abra] user is not in 'outside_propensity',[Cookie] exo_* does not exist (live experiments)", "name": "Nons | USGM | A/B Offer Propensity Test | var 144 | Feb BAU | upfront assets w/ MEGADOCK | VI | 2019-03-07 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13731180094", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/334c12ca504b1ee8c052603d9c6aa6507232b0a39a8f52ca73031d2c3b7f8567.js", "dependencies": [], "id": "3D25E114-4410-40CF-8922-D87353A44166"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/2775bd1dbbfeb134f426652c25faf1633674a98c8b9db304e8fdadb2b8eea725.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/2775bd1dbbfeb134f426652c25faf1633674a98c8b9db304e8fdadb2b8eea725.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/4e207520204348aafb43ded57c1abf0f30911dae2d0ed9f8315c3abd5af48764.js", "dependencies": [], "id": "B1503D03-966E-4C12-B9E4-029E4B6C9D57"}, {"src": "/actions/4e207520204348aafb43ded57c1abf0f30911dae2d0ed9f8315c3abd5af48764.js", "dependencies": [], "id": "9B7131AC-4D6C-43D2-BC5D-7FA259879CBB"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/4dfbe9d9e99f9d7abb1eb8ba4b3c2490b56f4018c590c896bcbc3b3bc35978a0.js", "dependencies": [], "id": "9AD452ED-0341-4E9F-9E7C-E5ECA2935B69"}, {"src": "/actions/4dfbe9d9e99f9d7abb1eb8ba4b3c2490b56f4018c590c896bcbc3b3bc35978a0.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/676dad4b9c895cbe08cfbca594e06abe642778b419aa3cc616628433cb47b28f.js", "dependencies": [], "id": "4CEF0410-2713-49E0-B519-C2534BD0E9EE"}, {"src": "/actions/676dad4b9c895cbe08cfbca594e06abe642778b419aa3cc616628433cb47b28f.js", "dependencies": [], "id": "877045F1-F3C1-4068-A5A7-8DEB7E941B90"}]}], "name": "Green BAU -- with Megadock"}], "audienceIds": ["and", "9693802151", "9265370759", "12350353132", "12932310129", "13178270113", "10370427570"], "changes": null, "id": "13736960272", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai,[Cookie] GraceViewed does not exist,[Support] Cooking or XWD in-Grace (via jKidd),[Cookie] exo_* does not exist (live experiments)", "name": "Subs | In-grace | CKG, XWD Only | welcome, dock | desktop and mobile | 2019-03-08 - ongoing", "bucketingStrategy": null, "variations": [{"id": "14051520566", "actions": [{"viewId": "10647916243", "changes": []}, {"viewId": "11210370568", "changes": [{"src": "/actions/edf2141f6c05016502bee1cbd72a1ab2c6c5e2e2e485e291f744db29a7e3061a.js", "dependencies": [], "id": "9DDCE318-FDC5-4A57-B119-D5B2A39A00E1"}, {"src": "/actions/edf2141f6c05016502bee1cbd72a1ab2c6c5e2e2e485e291f744db29a7e3061a.js", "dependencies": [], "id": "30716A72-4954-4257-AED8-DED7A7ED57C5"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/577455c21990f245cdd7f0092d1922e9f90da72487097125746f4b159a89bada.js", "dependencies": [], "id": "6421513B-2C64-4A71-B132-DD7B1EED7DAF"}, {"src": "/actions/577455c21990f245cdd7f0092d1922e9f90da72487097125746f4b159a89bada.js", "dependencies": [], "id": "18CC8473-268C-425D-878C-C66018F4B5E7"}]}], "name": "Subs | XWD, CKG In-grace | Welcome, dock"}], "audienceIds": ["and", "10738960527", "10834620768", "14023910173", "10370427570"], "changes": null, "id": "14039930226", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[User] Anonymous - NOT logged-in,[Cookie] exo_b2b_university_of_the_sciences or query param", "name": "Anonymous users | B2B: Migration - Headers - 4 Corp Clients | NO REGISTER NOW CTA | 2019-03-XX \u2013 ongoing exo_b2b_university_of_the_sciences", "bucketingStrategy": null, "variations": [{"id": "14220470325", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/31437752b00e23fb9efdc5baff574dba5d415db8e7dba073dd076f8db27b4539.js", "dependencies": [], "id": "82337DDB-1B6E-4E94-9B21-6F30C71282EA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/e3f6df1b086e458be4e40168fa1c0b64b4d6086021eccd3f0a2641a317c5b14f.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/e3f6df1b086e458be4e40168fa1c0b64b4d6086021eccd3f0a2641a317c5b14f.js", "dependencies": [], "id": "6CA532C3-3605-4BE6-9A37-7611AED76AA8"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/e40b2d3744fc61ef0182e18dcae09aa8c5a58809f8bec943b954d86ad9e0aa87.js", "dependencies": [], "id": "9549ED12-DE7D-4F15-876F-7AFD9A03FA8B"}, {"src": "/actions/e40b2d3744fc61ef0182e18dcae09aa8c5a58809f8bec943b954d86ad9e0aa87.js", "dependencies": [], "id": "7EF60598-9EB8-46D1-B1CA-101A3CDB80F2"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - REGISTER NOW"}], "audienceIds": ["and", "11177230834", "14190560526"], "changes": null, "id": "14192590627", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_b2b_university_of_kent,[User] Anonymous - NOT logged-in", "name": "Nons | B2B: Migration - Headers - 2 Schools | 2018-09-17 \u2013 ongoing exo_b2b_university_of_kent", "bucketingStrategy": null, "variations": [{"id": "14246660281", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/277347928c3435a5abc715cf0ec243f67f0e1657fa932ea0b2f384525f0b8bc7.js", "dependencies": [], "id": "37386CA6-5135-4083-B917-50F6470401DA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/20936dd6a297b83d814b3dca245a366d7b54fa707ceb391807db8fdb7e531b95.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/20936dd6a297b83d814b3dca245a366d7b54fa707ceb391807db8fdb7e531b95.js", "dependencies": [], "id": "DCAE212C-5354-4D3C-B785-A2B8215D2FF0"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers"}], "audienceIds": ["and", "14262740126", "11177230834"], "changes": null, "id": "14254810515", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[cookie] exo_lp_beautification_2018", "name": "Nons | INYT | August 2017 BAU | India Geo | 2018 LP Beautification | VI | 2018-11-13 - ongoing - welcome - exo_lp_beautification_2018", "bucketingStrategy": null, "variations": [{"id": "13655090257", "actions": [{"viewId": "9413676220", "changes": [{"name": "Gateway Magnolia API with ABRA support", "type": "widget", "widget_id": "11343910525", "dependencies": [], "config": {"creator": "DH", "abra_campaign": "", "nytId": "", "external_js_1": "https://mwcm.nyt.com/dam/maro/magnolia_gbb_common.js", "inline_css": ".page__header__subscribe {\n display: none !important; \n}", "external_js_2": "https://mwcm.nyt.com/dam/maro/magnolia_gbb_main.js", "creative_src": "https://www.nytimes.com/subscription?campaignId=78KHW", "containerHTML": "", "external_css_2": "", "inline_js": "var utils = window.optimizely.get('utils');\n\nutils.waitForElement('.product__container').then(function () {\n  var cidDesktop = '78KHW';\n  var cidMobile = '7RJ8U';\n  \n  var cid = cidDesktop;\n  \n  if (window.screen.width < 768) {\n    cid = cidMobile;\n  }\n\n  var bundle_href = document.querySelectorAll('a.productGBBDigi__button--desktop, a.productGBB__button');\n  for (var i = 0; i < bundle_href.length; i++) {\n    bundle_href[i].href = bundle_href[i].href.replace(bundle_href[i].href, bundle_href[i].href + '&campaignId=' + cid);\n  }\n});\n", "external_css_1": "https://mwcm.nyt.com/.resources/mkt-wcm/dist/templates/pages/lp/gbb/css/main.css"}, "id": "3E46C27E-F4D9-492F-92E7-C6D4ABB54CFD"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/c389e42d9084921779fd6375260a33930a01e27340a6a5a5bfa4f8351fee7794.js", "dependencies": [], "id": "34900901-04E9-4A0E-8794-2A504DCFDADD"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/c556d38c234262a2c716a356a981728b51a45383c9ac2293dd9b375fd3ed1238.js", "dependencies": [], "id": "4EDE6FA9-92B9-4D52-8F20-05A19F4C7791"}, {"src": "/actions/c556d38c234262a2c716a356a981728b51a45383c9ac2293dd9b375fd3ed1238.js", "dependencies": [], "id": "D9703515-0CC5-4F95-9A06-D207BBBCB1F9"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/f565e6312ccdab9eabeeb5071cdea7babcea1c0ee82b8702ed1e0bc564ba514f.js", "dependencies": [], "id": "63BAD9AF-C88A-4030-8EB9-FCE2D87CBEA8"}]}], "name": "Variation #1"}], "audienceIds": ["and", "9693802151", "11810616061"], "changes": null, "id": "13641790064", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[User] Anonymous - NOT logged-in,[Cookie] exo_b2b_noreg", "name": "Anonymous users | B2B: Migration - Headers - 4 Corp Clients | NO REGISTER NOW CTA | Devil's Thumb Ranch | 2019-02-XX \u2013 ongoing exo_b2b_noreg", "bucketingStrategy": null, "variations": [{"id": "13302170264", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/31437752b00e23fb9efdc5baff574dba5d415db8e7dba073dd076f8db27b4539.js", "dependencies": [], "id": "82337DDB-1B6E-4E94-9B21-6F30C71282EA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/30e73a3348a27d0d35ed4a265aed4808e40e377548234992317446b5e3689f49.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/30e73a3348a27d0d35ed4a265aed4808e40e377548234992317446b5e3689f49.js", "dependencies": [], "id": "6CA532C3-3605-4BE6-9A37-7611AED76AA8"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/39714a8ece4a4adf0a1b0eb1d015ac4ffc4026b64c09370c6452f4afb4b4d6ce.js", "dependencies": [], "id": "9549ED12-DE7D-4F15-876F-7AFD9A03FA8B"}, {"src": "/actions/39714a8ece4a4adf0a1b0eb1d015ac4ffc4026b64c09370c6452f4afb4b4d6ce.js", "dependencies": [], "id": "7EF60598-9EB8-46D1-B1CA-101A3CDB80F2"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - REGISTER NOW"}], "audienceIds": ["and", "11177230834", "10796572133"], "changes": null, "id": "13261910211", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] International - WW ex US and India (includes dev mode),[Cookie] exo_* does not exist (live experiments)", "name": "Nons | INYT (with ASIA segment) | April Bau | 2019-04-01 - ongoing", "bucketingStrategy": null, "variations": [{"id": "14273000498", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/c60115e0f45870676dff2b10c4e3422a113532cc83e496342680e273f9aecd36.js", "dependencies": [], "id": "746391D7-0DDA-47DA-ABA0-85DA9556093C"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/6bee378c844932b4104a932fcdf270fcf357cd4fe79a6a9c9b05007a3bf026cb.js", "dependencies": [], "id": "9798BCCB-BA2C-4197-85F2-BA60F5A40C1F"}, {"src": "/actions/6bee378c844932b4104a932fcdf270fcf357cd4fe79a6a9c9b05007a3bf026cb.js", "dependencies": [], "id": "5F024FFD-E279-4657-AA8A-C6CF094756CD"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/833f747d9ba095ec3edab84afffcafe5c6a1d2032cf7f8dc965ad7bbd0cb5522.js", "dependencies": [], "id": "6A2CB59F-5ED3-498A-A659-3C6AADBF1ADF"}, {"src": "/actions/833f747d9ba095ec3edab84afffcafe5c6a1d2032cf7f8dc965ad7bbd0cb5522.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/7b191ced970b2731b5d64aecfe68497156d555fc03c6673556ca8179a5991ae9.js", "dependencies": [], "id": "464E70F0-49F2-4541-A121-AAE36B439279"}, {"src": "/actions/7b191ced970b2731b5d64aecfe68497156d555fc03c6673556ca8179a5991ae9.js", "dependencies": [], "id": "E06A7D08-2AD7-456A-AD13-197605A4900A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/9e08f2b965e39ac6ec0f4e6da0576ab55023d307dd723bfa0475736c440baae9.js", "dependencies": [], "id": "406DFCB2-265C-4021-9D7D-02E06844FAE5"}, {"src": "/actions/9e08f2b965e39ac6ec0f4e6da0576ab55023d307dd723bfa0475736c440baae9.js", "dependencies": [], "id": "44B28E08-AF0E-427E-8E89-CBDF2CE8053F"}]}], "name": "296738: From...to... Purple creative."}], "audienceIds": ["and", "9693802151", "10339340370", "10370427570"], "changes": null, "id": "14254830607", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Segment] All EDU: *all* segments except K12,[Cookie] b2b_cig_opt contains false,[Cookie] exo_* does not exist (live experiments),[Geo] WW ex US (International) or dev mode", "name": "Nons | INYT | EDU BAU Refresh | 2019-03-22 - ongoing", "bucketingStrategy": null, "variations": [{"id": "14074900452", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/c7145d9393da3f23f223c71d86079f340fefd6a0a06f8c56d62f4b777f99c17b.js", "dependencies": [], "id": "3D37727B-5F9B-4EFF-9021-89CA2631C257"}, {"src": "/actions/c7145d9393da3f23f223c71d86079f340fefd6a0a06f8c56d62f4b777f99c17b.js", "dependencies": [], "id": "54EF602B-5D0D-437C-B541-AB35BE56EDC6"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/19c75ca845a9555cac0f8ad9c91ab488c8dee9e0bfb9c51c01e37c99aac43151.js", "dependencies": [], "id": "5F024FFD-E279-4657-AA8A-C6CF094756CD"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/359e54106d4c5f8e84a8d9c2d1edfca3e394eea52f9b94781a61090b747c8138.js", "dependencies": [], "id": "6A2CB59F-5ED3-498A-A659-3C6AADBF1ADF"}, {"src": "/actions/359e54106d4c5f8e84a8d9c2d1edfca3e394eea52f9b94781a61090b747c8138.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "9263528157", "changes": [{"dependencies": [], "type": "custom_code", "id": "A21D5C50-F883-4A4E-BC6C-90666A5F7786", "value": function($){var desktopCID = '7RQUU';
var mobileCID = '77LR9';

var cmpId = (window.screen.width < 768) ? mobileCID : desktopCID;

var vi_inline_message_function = function () {
  window.NYToptly.vi_inline.subscribe_url = "https://www.nytimes.com/subscription/education?campaignId=" + cmpId;
};

window.NYToptly.vi_inline_message_function = vi_inline_message_function;
}}, {"src": "/actions/f01791bf00af1ff757b65559bd336c515931da04587b21aefe7d2fdc1e3166c6.js", "dependencies": [], "id": "E06A7D08-2AD7-456A-AD13-197605A4900A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/d565dba31dff38e321b2d2e9132a78cb1aadf38e3bca3c728a60f0325bb0070c.js", "dependencies": [], "id": "406DFCB2-265C-4021-9D7D-02E06844FAE5"}, {"src": "/actions/d565dba31dff38e321b2d2e9132a78cb1aadf38e3bca3c728a60f0325bb0070c.js", "dependencies": [], "id": "44B28E08-AF0E-427E-8E89-CBDF2CE8053F"}]}], "name": "282024: From ... to ... Our journalists deliver the facts. Purple creative."}], "audienceIds": ["and", "9693802151", "10613651460", "11464120531", "10370427570", "9666533154"], "changes": null, "id": "14084900292", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[cookie] exo_dennis_test or [query] exo_dennis_test=true,meta tag contains 'babies'", "name": "nons | meta search | 2019-04-XX - ongoing exo_dennis_test", "bucketingStrategy": null, "variations": [{"id": "14219980403", "actions": [{"viewId": "10647916243", "changes": [{"src": "/actions/f06d512ffd280b513498459af651e2640c173a225157c5902e60aa061c0ae543.js", "dependencies": [], "id": "6E538364-4D05-4ECC-9F6A-9EAC7078C6DD"}, {"src": "/actions/f06d512ffd280b513498459af651e2640c173a225157c5902e60aa061c0ae543.js", "dependencies": [], "id": "62B04808-859E-4DF8-8B5B-F8FA2ADCD4D1"}]}, {"viewId": "11210370568", "changes": []}, {"viewId": "9260770473", "changes": []}, {"viewId": "9263528157", "changes": [{"src": "/actions/ed0476a74b5ae9364c72c301c1a7d62382936d2e163c169f33012779c3b493f8.js", "dependencies": [], "id": "364807EE-8BA8-4FEF-BC50-A110EBC5E3EC"}]}], "name": "searching meta tag - bar1 only"}], "audienceIds": ["and", "10280291483", "14336120171"], "changes": null, "id": "14212210059", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Segment] All EDU: *all* segments except K12,[Cookie] exo_edu_inline", "name": "Nons | USGM | Vi - Inline Unit ONLY | EDU | All periods | 2019-04-XX - ongoing exo_edu_inline", "bucketingStrategy": null, "variations": [{"id": "14324560055", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": []}, {"viewId": "9260770473", "changes": []}, {"viewId": "9263528157", "changes": [{"src": "/actions/c113ddf65bb7b4c7f2e24e10faa946a30a1c3ad7c2dffb30b5cfa295f515488b.js", "dependencies": [], "id": "05F6A27D-EC3E-4806-9DB8-90D395D21ECC"}, {"src": "/actions/c113ddf65bb7b4c7f2e24e10faa946a30a1c3ad7c2dffb30b5cfa295f515488b.js", "dependencies": [], "id": "E06A7D08-2AD7-456A-AD13-197605A4900A"}]}, {"viewId": "11210370568", "changes": []}], "name": "USGM EDU (BAU + Sales) Vi Inline Unit"}], "audienceIds": ["and", "9693802151", "9265370759", "10613651460", "14332350128"], "changes": null, "id": "14318630070", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[User] Anonymous - NOT logged-in,[cookie] exo_b2b_testing", "name": "Anonymous users | B2B: Migration - Headers - 4 Corp Clients | NO REGISTER NOW CTA | b2b testing | 2019-02-XX \u2013 ongoing exo_b2b_testing", "bucketingStrategy": null, "variations": [{"id": "14326540126", "actions": [{"viewId": "9413676220", "changes": []}, {"viewId": "10647916243", "changes": [{"src": "/actions/31437752b00e23fb9efdc5baff574dba5d415db8e7dba073dd076f8db27b4539.js", "dependencies": [], "id": "82337DDB-1B6E-4E94-9B21-6F30C71282EA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/55ef38d622166cbd7cf5c68ee96da2810b84a4778d385b1b12aa7822c7bac511.js", "dependencies": [], "id": "03D7BFDD-30B3-4D55-B482-966DAE3B7C15"}, {"src": "/actions/55ef38d622166cbd7cf5c68ee96da2810b84a4778d385b1b12aa7822c7bac511.js", "dependencies": [], "id": "6CA532C3-3605-4BE6-9A37-7611AED76AA8"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/5fd54a9f195bb0735033acaf88a4cd9265ade03a4c4d7ccad4021d7662fb94f7.js", "dependencies": [], "id": "9549ED12-DE7D-4F15-876F-7AFD9A03FA8B"}, {"src": "/actions/5fd54a9f195bb0735033acaf88a4cd9265ade03a4c4d7ccad4021d7662fb94f7.js", "dependencies": [], "id": "7EF60598-9EB8-46D1-B1CA-101A3CDB80F2"}]}], "name": "EXO-13 Dock - B2B: Migration of NYT5 Fixed Personalized Headers - NEWSLETTERS"}], "audienceIds": ["and", "11177230834", "14341950444"], "changes": null, "id": "14326300323", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Cookie] exo_vacation_messaging,[Subscriber Type] Subs (All) via NYToptly.user, BlueKai", "name": "Subs | USGM | Vacation Mode | TBD exo_vacation_messaging", "bucketingStrategy": null, "variations": [{"id": "14366961054", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/b489462cfceb2e262f95873d24cfa31a79a614f6acac8dff6b90da6c616a52e0.js", "dependencies": [], "id": "746391D7-0DDA-47DA-ABA0-85DA9556093C"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/269c46b8394dc636d2ebd590070062043e76b5b92f820adc09e41d5fe4f671dd.js", "dependencies": [], "id": "5F024FFD-E279-4657-AA8A-C6CF094756CD"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/aa4f32f38ae24d5602ee4505a14cec84bf980f50a345212640e399c1c7535c7b.js", "dependencies": [], "id": "6A2CB59F-5ED3-498A-A659-3C6AADBF1ADF"}, {"src": "/actions/aa4f32f38ae24d5602ee4505a14cec84bf980f50a345212640e399c1c7535c7b.js", "dependencies": [], "id": "53A0B332-29F7-4E84-A139-BA97F9F3F69A"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/eb0cb1018b7063a449f19bdb6919a2d5537efc1d5763fe342c655b029c3b0997.js", "dependencies": [], "id": "05F6A27D-EC3E-4806-9DB8-90D395D21ECC"}, {"src": "/actions/eb0cb1018b7063a449f19bdb6919a2d5537efc1d5763fe342c655b029c3b0997.js", "dependencies": [], "id": "E06A7D08-2AD7-456A-AD13-197605A4900A"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/577fedcb03af07a1bfa2ddd7d00ba7e590b39fe42605a2a76832206af5956118.js", "dependencies": [], "id": "406DFCB2-265C-4021-9D7D-02E06844FAE5"}, {"src": "/actions/577fedcb03af07a1bfa2ddd7d00ba7e590b39fe42605a2a76832206af5956118.js", "dependencies": [], "id": "44B28E08-AF0E-427E-8E89-CBDF2CE8053F"}]}], "name": "274075: The Times Sale $1/week /subscription"}], "audienceIds": ["and", "9265370759", "14367250110", "10738960527"], "changes": null, "id": "14347740114", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Support] Geo India Mom,[Cookie] exo_* does not exist (live experiments)", "name": "MOM | Nons | INYT | August 2017 BAU | India Geo | 2018 LP Beautification | VI | 02-19-2019 - ongoing", "bucketingStrategy": null, "variations": [{"id": "13629310160", "actions": [{"viewId": "9413676220", "changes": [{"name": "Gateway MOM", "type": "widget", "widget_id": "14049930290", "dependencies": [], "config": {"capi_src": "https://mwcm.nytimes.com/capi/metered_assets?ip-override=1.187.255.255", "campaignId": "78KHW"}, "id": "B3969B27-E9F3-464B-B6AA-93A37A09C520"}]}, {"viewId": "10647916243", "changes": [{"name": "Bar1 MOM", "type": "widget", "widget_id": "13648660017", "dependencies": [], "config": {"text": "mom", "capi_src": "https://mwcm.nytimes.com/capi/metered_assets?ip-override=1.187.255.255"}, "id": "0635F808-99B5-4B0D-A397-6C4BD104B451"}]}, {"viewId": "9260770473", "changes": [{"name": "Dock MOM", "type": "widget", "widget_id": "13737050215", "dependencies": [], "config": {"capi_src": "https://mwcm.nytimes.com/capi/metered_assets?ip-override=1.187.255.255"}, "id": "37B60B77-CAC1-414D-9482-B39A68BD2106"}]}, {"viewId": "9263528157", "changes": [{"name": "Inline Message MOM", "type": "widget", "widget_id": "13794610209", "dependencies": [], "config": {"capi_src": "https://mwcm.nytimes.com/capi/metered_assets?ip-override=1.187.255.255"}, "id": "B409F7A9-D192-4FEA-8CBA-81486EE9FD5E"}]}, {"viewId": "11210370568", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "9693802151", "14098470273", "10370427570"], "changes": null, "id": "13631320088", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] WW ex US (International) or dev mode,[Cookie] exo_rts_clock or exo_rts_clock=true", "name": "Nons | INYT | ODS / RTS: Yellow Clock | updated for regi mc10 | DO NOT ARCHIVE | 2019-01-17 exo_rts_clock", "bucketingStrategy": null, "variations": [{"id": "12986100107", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/05ddaab93d16713585b5628dbe40cf4e6a503e33beabd6f4405bbf64c34b0a1c.js", "dependencies": [], "id": "3D65B361-4787-465E-B465-93C56ECE43B7"}, {"src": "/actions/05ddaab93d16713585b5628dbe40cf4e6a503e33beabd6f4405bbf64c34b0a1c.js", "dependencies": [], "id": "88CA5B5C-F9DB-427C-8E73-9F5AFE0F57BA"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/65750ad20a7af385a4237526ac9a4181a97241eb997c52f7db0dc4f062e00cfe.js", "dependencies": [], "id": "AE6209E4-EFC7-4C9E-B2DB-38FEE55EA953"}, {"src": "/actions/65750ad20a7af385a4237526ac9a4181a97241eb997c52f7db0dc4f062e00cfe.js", "dependencies": [], "id": "7FB2B0E3-17EE-49B1-912E-5501C20E9C12"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/01a8d8d6b9f512bfdbd5402b3b53dcec2ddd7b1abcef2e907a14dfd5b0d71a58.js", "dependencies": [], "id": "9D9A5877-2714-4168-8027-7FFAD309175E"}]}, {"viewId": "9263528157", "changes": [{"src": "/actions/46d453387f8b051ef3ab1fef419b1e5378aff11f4cecb1f116c0f1413ffcf098.js", "dependencies": [], "id": "CB462BE9-5361-4F0D-B354-1B499CA1B7E7"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/184c59fe84ed2c3ccda0573c92c58961a4b302a9673e1d9539435d59e4872571.js", "dependencies": [], "id": "4D05D984-32D4-4E7A-9C48-5F3779711307"}, {"src": "/actions/184c59fe84ed2c3ccda0573c92c58961a4b302a9673e1d9539435d59e4872571.js", "dependencies": [], "id": "9AF7FB05-4E97-4B96-97C8-850873BA6E5D"}]}], "name": "60% off, Up to 60% off and $1 week - 8CODS, 8UODS, 8RODS"}], "audienceIds": ["and", "9693802151", "9666533154", "10558842301"], "changes": null, "id": "12995420223", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Redbird] NYToptly.meter.ab.MKT_Redbird_US,[Redbird US] exclude Outside_Redbird,[Browser Type] Exclude IE11,[Cookie] exo_redbird_reborn_us_0419", "name": "Redbird_US_reborn | anonymous | Nons | USGM | acquisition | 01-01-2019 - exo_redbird_reborn_us_0419", "bucketingStrategy": null, "variations": [{"id": "14379330436", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/5f289837c24bc5dbd1168cd175fdd4d1dc82e640690aae25a97585a4a0d8862c.js", "dependencies": [], "id": "3CF7002C-CE5C-4B37-9CF3-1BDFCA0786B5"}, {"src": "/actions/5f289837c24bc5dbd1168cd175fdd4d1dc82e640690aae25a97585a4a0d8862c.js", "dependencies": [], "id": "7E0F0F0A-B6B2-406B-A8C1-DBE0962E8D47"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/a4a8708a9c6b44c4d2a32e20372d816373cd2c773f1775c67639d39a4c546b08.js", "dependencies": [], "id": "36C57EC4-9A1B-4DAA-94C0-CEC43A9085AA"}, {"src": "/actions/a4a8708a9c6b44c4d2a32e20372d816373cd2c773f1775c67639d39a4c546b08.js", "dependencies": [], "id": "7D6F58ED-C9F7-4659-AF95-5DD8D2BB7348"}]}, {"viewId": "10647916243", "changes": []}, {"viewId": "9263528157", "changes": [{"src": "/actions/3307419226c54149d04153bab2b215d21d022f876e91391effa692e7b437166f.js", "dependencies": [], "id": "EA9C866A-E93C-4869-963D-8074768D5BC9"}, {"src": "/actions/3307419226c54149d04153bab2b215d21d022f876e91391effa692e7b437166f.js", "dependencies": [], "id": "48C71F09-CDDC-489F-A794-1D3DC5964FDE"}]}], "name": "Redbird_US | anonymous | USGM | acquisition "}], "audienceIds": ["and", "9693802151", "12229296726", "12406772408", "11067720842", "12130415845"], "changes": null, "id": "14377520423", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-subs,[Geo] US,[Cookie] exo_rts_clock or exo_rts_clock=true", "name": "Nons | USGM | ODS / RTS: Yellow Clock | $1 week | US Geo | DO NOT ARCHIVE | updated for regi mc10 | 2019-01-17", "bucketingStrategy": null, "variations": [{"id": "12999020201", "actions": [{"viewId": "9413676220", "changes": [{"src": "/actions/3e3c5f70456509332ee8a8dfa0ec479d8a16b4d202126a2d279b174e53c84a38.js", "dependencies": [], "id": "63CE00C9-4044-49C6-A8C9-4DB02C05602E"}]}, {"viewId": "9260770473", "changes": [{"src": "/actions/a11ea761cc70fa0f7ceeacf3fe9114c1c43e8d52de5cc4303d6c8f24b88ccee0.js", "dependencies": [], "id": "AE6209E4-EFC7-4C9E-B2DB-38FEE55EA953"}, {"src": "/actions/a11ea761cc70fa0f7ceeacf3fe9114c1c43e8d52de5cc4303d6c8f24b88ccee0.js", "dependencies": [], "id": "7FB2B0E3-17EE-49B1-912E-5501C20E9C12"}]}, {"viewId": "10647916243", "changes": [{"src": "/actions/65275cf7a19905673f9e35b53b703b93adaf99737a0f6dc54e13967c17d0b0fd.js", "dependencies": [], "id": "9D9A5877-2714-4168-8027-7FFAD309175E"}]}, {"viewId": "9263528157", "changes": [{"dependencies": [], "type": "custom_code", "id": "9E2BC32A-4F23-4013-AA6B-B59591254198", "value": function($){var cid;
var desktopCID = '6YHFY';
var mobileCID = '6YHJF';

if (window.screen.width < 768) {
    cid = mobileCID;
} else {
    cid = desktopCID;
}

var vi_inline_message_function = function () {
    var optlyInlineUrl = "https://www.nytimes.com/subscription/edu/lp8LQFK.html?campaignId=" + cid;
  	window.NYToptly.vi_inline.subscribe_url = optlyInlineUrl;
};

window.NYToptly.vi_inline_message_function = vi_inline_message_function;
}}, {"src": "/actions/647ccfa526f8c221e442d758a389da01ac66a3c3fee7a2e435d997eb26959f9c.js", "dependencies": [], "id": "CB462BE9-5361-4F0D-B354-1B499CA1B7E7"}]}, {"viewId": "11210370568", "changes": [{"src": "/actions/6a42b9e7ebe8eacbae0b389c60e5230d19e1138ed5a09ef42a2c5aea12e6708a.js", "dependencies": [], "id": "DD2B6F0E-ED25-4457-80C9-283B44E3B044"}, {"src": "/actions/6a42b9e7ebe8eacbae0b389c60e5230d19e1138ed5a09ef42a2c5aea12e6708a.js", "dependencies": [], "id": "9AF7FB05-4E97-4B96-97C8-850873BA6E5D"}]}], "name": "$1 week / 8J787"}], "audienceIds": ["and", "9693802151", "9265370759", "10558842301"], "changes": null, "id": "13018530183", "integrationSettings": null}], "id": "9265370758", "weightDistributions": null, "name": "* Vi - Digital Media Traffic (was \"Vi Messaging\")", "groupId": null, "commitId": "14358790038", "decisionMetadata": {"experimentPriorities": [[{"entityId": "14212210059", "endOfRange": null}], [{"entityId": "12379570669", "endOfRange": null}], [{"entityId": "12387193454", "endOfRange": null}], [{"entityId": "12354572346", "endOfRange": null}], [{"entityId": "14039930226", "endOfRange": null}], [{"entityId": "13530970082", "endOfRange": null}], [{"entityId": "10740183049", "endOfRange": null}], [{"entityId": "12095891210", "endOfRange": null}], [{"entityId": "11716993883", "endOfRange": null}], [{"entityId": "13842540295", "endOfRange": null}], [{"entityId": "13406390003", "endOfRange": null}], [{"entityId": "14326300323", "endOfRange": null}], [{"entityId": "14192590627", "endOfRange": null}], [{"entityId": "13261910211", "endOfRange": null}], [{"entityId": "10754002252", "endOfRange": null}], [{"entityId": "13129400440", "endOfRange": null}], [{"entityId": "11500481679", "endOfRange": null}], [{"entityId": "11795352845", "endOfRange": null}], [{"entityId": "11095569152", "endOfRange": null}], [{"entityId": "14254810515", "endOfRange": null}], [{"entityId": "11410865971", "endOfRange": null}], [{"entityId": "11412877508", "endOfRange": null}], [{"entityId": "11776081853", "endOfRange": null}], [{"entityId": "11161141279", "endOfRange": null}], [{"entityId": "11424433768", "endOfRange": null}], [{"entityId": "12324092345", "endOfRange": null}], [{"entityId": "11722410240", "endOfRange": null}], [{"entityId": "12109813841", "endOfRange": null}], [{"entityId": "11392344252", "endOfRange": null}], [{"entityId": "11095406778", "endOfRange": null}], [{"entityId": "11358400269", "endOfRange": null}], [{"entityId": "11299953318", "endOfRange": null}], [{"entityId": "11353201959", "endOfRange": null}], [{"entityId": "11358510439", "endOfRange": null}], [{"entityId": "11337860344", "endOfRange": null}], [{"entityId": "13554890295", "endOfRange": null}], [{"entityId": "11142451996", "endOfRange": null}], [{"entityId": "11191760154", "endOfRange": null}], [{"entityId": "11191660759", "endOfRange": null}], [{"entityId": "10882720260", "endOfRange": null}], [{"entityId": "10845820719", "endOfRange": null}], [{"entityId": "11093635926", "endOfRange": null}], [{"entityId": "14084900292", "endOfRange": null}], [{"entityId": "14318630070", "endOfRange": null}], [{"entityId": "13231010183", "endOfRange": null}], [{"entityId": "13736960272", "endOfRange": null}], [{"entityId": "13369140520", "endOfRange": null}], [{"entityId": "12893710171", "endOfRange": null}], [{"entityId": "12320112078", "endOfRange": null}], [{"entityId": "12325000440", "endOfRange": null}], [{"entityId": "14377520423", "endOfRange": null}], [{"entityId": "12103538104", "endOfRange": null}], [{"entityId": "11208370163", "endOfRange": null}], [{"entityId": "12995420223", "endOfRange": null}], [{"entityId": "14254830607", "endOfRange": null}], [{"entityId": "12354440079", "endOfRange": null}], [{"entityId": "13018530183", "endOfRange": null}], [{"entityId": "13631320088", "endOfRange": null}], [{"entityId": "13655780056", "endOfRange": null}], [{"entityId": "10564422151", "endOfRange": null}], [{"entityId": "10978161978", "endOfRange": null}], [{"entityId": "10822911613", "endOfRange": null}], [{"entityId": "11077986701", "endOfRange": null}], [{"entityId": "11283380004", "endOfRange": null}], [{"entityId": "11058630453", "endOfRange": null}], [{"entityId": "11698092974", "endOfRange": null}], [{"entityId": "14347740114", "endOfRange": null}], [{"entityId": "11791876108", "endOfRange": null}], [{"entityId": "12134275601", "endOfRange": null}], [{"entityId": "13641790064", "endOfRange": null}]], "offerConsistency": true}, "policy": "equal_priority", "changes": [{"dependencies": [], "type": "custom_code", "id": "25F912A8-161C-42B2-84D3-4E93D48DBEA4", "value": function($){var utils = optimizely.get('utils');
utils.waitForElement('.optimizelyOK.vi_bar1').then(
	function(element){
		if(element.parentElement){
			element.parentElement.onclick = function(){
				window['optimizely'].push({
					type: "event",
					eventName: "vi_bar1_click"
				});
			};
		}
	}
	);
utils.waitForElement('.optimizelyOK.vi_dock a').then(
	function(element){
		element.onclick = function(){
			window['optimizely'].push({
				type: "event",
				eventName: "vi_dock_click"
			});
		};
	}
	);
utils.waitForElement('.optimizelyOK.vi_inline').then(
	function(element){
		if(element.previousSibling && element.previousSibling.querySelector('a')){
			element.previousSibling.querySelector('a').onclick = function(){
				window['optimizely'].push({
					type: "event",
					eventName: "vi_inline_click"
				});
			};
		}
	}
	);
utils.waitForElement('.optimizelyOK.vi_dockgateway .page').then(
	function(element){
		if(element.querySelector('a')){
			element.querySelectorAll('a').forEach(
				function(e){
					if(e.href.indexOf('/subscription')>-1 || e.href.indexOf('/get-started')>-1){
						e.onclick = function(){
							window['optimizely'].push({
								type: "event",
								eventName: "vi_dockgateway_click"
							});
						};
					}
				});
		}
	}
	);
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10563417943"], "experiments": [{"weightDistributions": null, "audienceName": "[Query Parameter] ad-keywords=gdpr-dj,[Geo] US", "name": "PoC | Vi Pages | dfp-ad-top | 2018-04-13 \u2013", "bucketingStrategy": null, "variations": [{"id": "10581974801", "actions": [{"viewId": "10563417943", "changes": [{"src": "/actions/e6aeefe68d99fb3357beed1518f1c7cbf48e2ecd96c1e40847dfcfebbef68869.js", "dependencies": [], "id": "D0CAFC59-EC8E-45F0-9BD2-887C7D7F3FF5"}]}], "name": "PoC - Cooking Flex Frame | ad-keywords=gdpr-dj"}], "audienceIds": ["and", "10597900111", "9265370759"], "changes": null, "id": "10561577491", "integrationSettings": null}], "id": "10555706954", "weightDistributions": null, "name": "PoC - Paid Sponsorships for EEA (GDPR)", "groupId": null, "commitId": "10589636079", "decisionMetadata": {"experimentPriorities": [[{"entityId": "10561577491", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10194736242", "10197457695"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "10797360012", "actions": [{"viewId": "10197457695", "changes": [{"dependencies": [], "type": "custom_code", "id": "67C8AC5D-E78A-434A-9F99-10FB325007BA", "value": function($){if(window.NYToptly.jkidd){
  var checkGrace = function(element){
	return element.grace === "T";
	};
  var graceValue = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace == true) ||  (NYToptly.jkidd.user && NYToptly.jkidd.user.nytdOtherData && NYToptly.jkidd.user.nytdOtherData.subscriptions && NYToptly.jkidd.user.nytdOtherData.subscriptions.some(checkGrace)));
  window["optimizely"].push({
    type: "user",
    attributes: {
      isLoggedIn_vi: NYToptly.jkidd.user.isLoggedIn,
      user_type_jk_vi: NYToptly.jkidd.user.type,
      inGrace_jkidd_vi: graceValue,
      inGrace_global: graceValue,
      isLoggedIn_jk_global: NYToptly.jkidd.user.isLoggedIn,
      user_type_jk_global: NYToptly.jkidd.user.type
    }
  });
}
}}]}, {"viewId": "10194736242", "changes": [{"dependencies": [], "type": "custom_code", "id": "21CBABDC-5E37-4720-8C2C-2F5E1F7FA12E", "value": function($){var utils = optimizely.get('utils');
utils.waitUntil(function(){return typeof window.opty_payload == 'object' && typeof NYToptly.jkidd == 'object';}).then(function(){
var checkGrace = function(element){
	return element.grace === "T";
	};
  var graceValue = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace == true) ||  (NYToptly.jkidd.user && NYToptly.jkidd.user.nytdOtherData && NYToptly.jkidd.user.nytdOtherData.subscriptions && NYToptly.jkidd.user.nytdOtherData.subscriptions.some(checkGrace)));
  window["optimizely"].push({
    type: "user",
    attributes: {
      isLoggedIn_vi: NYToptly.jkidd.user.isLoggedIn,
      user_type_jk_vi: NYToptly.jkidd.user.type,
      inGrace_jkidd_vi: graceValue,
      inGrace_global: graceValue
    }
  });
});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "10761484159", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] angie_jkidd_testing", "name": "Testing JKidd Grace angie_jkidd_testing", "bucketingStrategy": null, "variations": [{"id": "14081670354", "actions": [{"viewId": "10197457695", "changes": [{"dependencies": [], "type": "custom_code", "id": "67C8AC5D-E78A-434A-9F99-10FB325007BA", "value": function($){var utils = optimizely.get('utils');
utils.waitUntil(function(){return typeof window.opty_payload == 'object' && typeof NYToptly.jkidd == 'object';}).then(function(){
var checkGrace = function(element){
	return element.grace === "T";
	};
  var graceValue_digi = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace == true));

  var graceValue_cooking = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.cookingGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.cookingGrace == true));
  
  var graceValue_crosswords = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.crosswordsGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.crosswordsGrace == true));
  
  window["optimizely"].push({
    type: "user",
    attributes: {
      isLoggedIn_vi: NYToptly.jkidd.user.isLoggedIn,
      user_type_jk_vi: NYToptly.jkidd.user.type,
      inGrace_jkidd_vi: graceValue_digi,
      inGrace_global_digi: graceValue_digi,
      inGrace_global_cooking: graceValue_cooking,
      inGrace_global_crosswords: graceValue_crosswords
    }
  });
});
}}]}, {"viewId": "10194736242", "changes": [{"dependencies": [], "type": "custom_code", "id": "21CBABDC-5E37-4720-8C2C-2F5E1F7FA12E", "value": function($){var utils = optimizely.get('utils');
utils.waitUntil(function(){return typeof window.opty_payload == 'object' && typeof NYToptly.jkidd == 'object';}).then(function(){
var checkGrace = function(element){
	return element.grace === "T";
	};
  var graceValue_digi = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.digiGrace == true));

  var graceValue_cooking = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.cookingGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.cookingGrace == true));
  
  var graceValue_crosswords = ((NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.crosswordsGrace) || (NYToptly.jkidd.user && NYToptly.jkidd.user.subscriberInfo && NYToptly.jkidd.user.subscriberInfo.crosswordsGrace == true));
  
  window["optimizely"].push({
    type: "user",
    attributes: {
      isLoggedIn_vi: NYToptly.jkidd.user.isLoggedIn,
      user_type_jk_vi: NYToptly.jkidd.user.type,
      inGrace_jkidd_vi: graceValue_digi,
      inGrace_global_digi: graceValue_digi,
      inGrace_global_cooking: graceValue_cooking,
      inGrace_global_crosswords: graceValue_crosswords
    }
  });
});
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "14088150121"], "changes": null, "id": "14071880170", "integrationSettings": null}], "id": "10781391826", "weightDistributions": null, "name": "[Support] Vi JKIDD Data Ready", "groupId": null, "commitId": "14090480198", "decisionMetadata": {"experimentPriorities": [[{"entityId": "14071880170", "endOfRange": null}], [{"entityId": "10761484159", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}], "listTargetingKeys": [], "groups": [], "views": [{"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com", "match": "substring"}]], "activationType": "manual", "name": "Vi Dock", "apiName": "9270471820_vi_dock", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9260770473"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com", "match": "substring"}]], "activationType": "manual", "name": "Inline Message", "apiName": "9270471820_vi_inline", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9263528157"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com", "match": "substring"}]], "activationType": "manual", "name": "Dock Gateway", "apiName": "9270471820_vi_dockgateway", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9413676220"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.nytimes.com", "match": "simple"}]], "activationType": "manual", "name": "Test New Page", "apiName": "test_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9624372549"}, {"category": "other", "staticConditions": null, "name": "Vi Global", "apiName": "9270471820_vi_global", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10194736242"}, {"category": "other", "staticConditions": null, "activationType": "manual", "name": "[Support] Vi JSON Data Ready", "apiName": "vi_page_data_ready", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10197457695"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "alpha.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com/", "match": "substring"}]], "name": "Vi Article", "apiName": "9270471820_vi_article", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10320597906"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://myaccount.nytimes.com/get-started/thank-you", "match": "simple"}]], "name": "[Support] Vi Confirmation", "apiName": "9270471820_support_vi_confirmation", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10520461273"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.nytimes.com", "match": "simple"}]], "name": "Vi Homepage", "apiName": "9270471820_vi_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10563417943"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com", "match": "substring"}]], "activationType": "manual", "name": "VI Bar1", "apiName": "9270471820_vi_bar1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10647916243"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com/", "match": "substring"}]], "activationType": "manual", "name": "Vi Welcome", "apiName": "9270471820_vi_welcome", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11210370568"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://preview-get-started-app-download-desktop.sbx.nytimes.com/get-started", "match": "simple"}]], "activationType": "url_changed", "name": "Preview Get Started", "apiName": "11925280421_preview_get_started", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11944510133"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "nytimes.com/get-started", "match": "simple"}]], "activationType": "callback", "name": "[Support] Onboarding Step 2", "apiName": "11925280421_support_onboarding_step_2", "tags": [], "undoOnDeactivation": false, "activationCode": 
function callbackFn(activate, options) {
  if(window.location.href.indexOf('/get-started') > -1){
  var target = document.querySelector('#app > div > div:nth-child(2) > p');
 var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
	var HTML = document.querySelector('#app > div > div:nth-child(2) > p').innerHTML;
    if (HTML.split(' <!-- -->')[1].indexOf('2')> -1){
        activate();
        };
    });
});
 
var config = { attributes: true, childList: true, characterData: true };
 observer.observe(target, config);}}, "deactivationEnabled": false, "id": "11952495396"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "nytimes.com/get-started", "match": "substring"}]], "activationType": "callback", "name": "[Support] Onboarding Start", "apiName": "11925280421_support_onboarding_start", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  if(window.location.href.indexOf('/get-started') > -1){
  	var utils = optimizely.get('utils');
    utils.observeSelector('#app > div > div:nth-child(2) > p',function(element){
if (element.innerHTML.split(' <!-- -->')[1].indexOf('1')> -1){
activate();
};
    },{
  "timeout": null,
  "once": false
  }
                          
);}}, "deactivationEnabled": false, "id": "12043241544"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.stg.nytimes.com/get-started", "match": "simple"}]], "name": "Testing 3", "apiName": "11925280421_testing_3", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12222111965"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com/get-started", "match": "substring"}]], "activationType": "callback", "name": "Onboarding Step 3", "apiName": "11925280421_onboarding_step_3", "tags": [], "undoOnDeactivation": false, "activationCode": 
function callbackFn(activate, options) {
  if(window.location.href.indexOf('/get-started') > -1){
  var target = document.querySelector('#app > div > div:nth-child(2) > p');
 var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
	var HTML = document.querySelector('#app > div > div:nth-child(2) > p').innerHTML;
    if (HTML.split(' <!-- -->')[1].indexOf('3')> -1){
        activate();
        };
    });
});
 
var config = { attributes: true, childList: true, characterData: true };
 observer.observe(target, config);}}, "deactivationEnabled": false, "id": "12385314681"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com/get-started", "match": "substring"}]], "activationType": "callback", "name": "Onboarding Download App", "apiName": "11925280421_onboarding_download_app", "tags": [], "undoOnDeactivation": false, "activationCode": 
function callbackFn(activate, options) {
  if(window.location.href.indexOf('/get-started') > -1){
  var target = document.querySelector('#app > div');
 var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    if (window.location.href.indexOf('app-download')>-1){
        activate();
        };
    });
});
 
var config = { attributes: true, childList: true, characterData: true };
 observer.observe(target, config);}}, "deactivationEnabled": false, "id": "12449650387"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://preview-getstarted-upsell.sbx.nytimes.com/get-started?OPT_OUT=true#skip", "match": "simple"}]], "name": "Test Download App", "apiName": "11925280421_test_download_app", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12478270243"}], "snippetId": "9262390779", "projectJS": function(){// polyfill to fix the NodeList forEach issue
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// polyfill for IE11 CustomEvent
(function () {
    if ( typeof window.CustomEvent === "function" ) return false; //If not IE

    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

window.NYToptly = window.NYToptly || {};
window.NYToptly.getQueryParameter = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var opt_console = {};
if (document.cookie.indexOf('optly_debug') > -1 || document.cookie.indexOf('opt_console') > -1) {
    opt_console.log = function() {
        console.log.apply(console, arguments);
    };
}
else {
    opt_console.log = function() {};
}
window.NYToptly.opt_console = opt_console;

window.NYToptly.runWhenReady = function(testFunction, inFunction, defaultFunction, mlsecs, reps) {
    var repetition = reps || 5;

    setTimeout(function z() {
        if (testFunction()) {
            inFunction();
        } else if (--repetition) {
            setTimeout(z, mlsecs);
        } else if (defaultFunction) {
            defaultFunction();
        }
    }, mlsecs);
};
}, "namespace": "a3013110282", "tagGroups": [], "integrationSettings": [{"functions": {fetchData: function() {
    var data = {"campaigns": []};
    if (window["bk_results"] && window["bk_results"].hasOwnProperty("campaigns")) {
      var campaigns = window["bk_results"]["campaigns"];
      for (var i= 0, numCampaigns=campaigns.length; i<numCampaigns; i++) {
        if (campaigns[i]["campaign"]) {
          data["campaigns"].push(campaigns[i]["campaign"]);
        }
      }
      window["optimizely"].push(["storeThirdPartyData", "bluekai", data]);
    }
  }
}
, "dataFetchMethod": "custom_javascript", "id": "bluekai"}], "interestGroups": [], "dimensions": [{"segmentId": null, "id": "10756924637", "apiName": "user_type_jk_vi", "name": "JKIDD User Type"}, {"segmentId": null, "id": "10797250030", "apiName": "isLoggedIn_vi", "name": "Vi Logged in Status"}, {"segmentId": null, "id": "11058300681", "apiName": "ab_bucketed", "name": "[Support] Visitor Bucketed"}, {"segmentId": null, "id": "11709361507", "apiName": "engagementLevel", "name": "Propensity Score"}, {"segmentId": null, "id": "11793691498", "apiName": "inGrace_jkidd_vi", "name": "[Support] inGrace jkidd Vi"}, {"segmentId": null, "id": "13120640118", "apiName": "agentId_ui", "name": "[Support] UI-Defined Agent ID"}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "US", "type": "location", "name": null, "match": null}], ["or", {"value": "US", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "USA", "type": "query", "name": "location", "match": "exact"}]]], "id": "9265370759", "name": "[Geo] US"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}]], ["or", {"value": "EU", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "GB", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "ROW", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "AU", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "9666533154", "name": "[Geo] WW ex US (International) or dev mode"}, {"conditions": ["and", ["or", ["or", {"value": "!(NYToptly && NYToptly.user && NYToptly.user.entitlements && (NYToptly.user.entitlements.indexOf('MM') > -1))\n", "type": "code", "name": null, "match": null}]]], "id": "9693802151", "name": "[Subscriber Type] Non-subs"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.user && NYToptly.user.id && NYToptly.user.entitlements.indexOf('MM') == -1", "type": "code", "name": null, "match": null}]]], "id": "10195324221", "name": "[Subscriber Type] Regi Non-Sub"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.user && NYToptly.user.entitlements && NYToptly.user.entitlements.join('-').match('/HD|MM|MSD|MTD|TPR/')", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "query", "name": "force_in_trial", "match": "exact"}]]], "id": "10232270695", "name": "[Subscriber Type] Subs (All)"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}], ["or", {"value": "ipad", "type": "device", "name": null, "match": null}], ["or", {"value": "tablet", "type": "device", "name": null, "match": null}]]], "id": "10235345280", "name": "[Device] Desktop / Tablet"}, {"conditions": ["and", ["or", ["or", {"value": "iphone", "type": "device", "name": null, "match": null}], ["or", {"value": "mobile", "type": "device", "name": null, "match": null}], ["or", {"value": "true", "type": "cookies", "name": "abx_mobile_test", "match": "exact"}]]], "id": "10274690951", "name": "[Device] Mobile"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_dennis_test", "match": "exact"}], ["or", {"value": "true", "type": "query", "name": "exo_dennis_test", "match": "exact"}]]], "id": "10280291483", "name": "[cookie] exo_dennis_test or [query] exo_dennis_test=true"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}, {"value": "IN", "type": "location", "name": null, "match": null}]], ["or", {"value": "ROW", "type": "query", "name": "location", "match": "exact"}, {"value": "CA", "type": "query", "name": "location", "match": "exact"}, {"value": "EU", "type": "query", "name": "location", "match": "exact"}, {"value": "GB", "type": "query", "name": "location", "match": "exact"}, {"value": "AU", "type": "query", "name": "location", "match": "exact"}, {"value": "ASIA", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "ROW", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "GB", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "EU", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "AU", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "ASIA", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "10339340370", "name": "[Geo] International - WW ex US and India (includes dev mode)"}, {"conditions": ["and", ["or", ["or", {"value": "document.cookie.indexOf('exo_') == -1 && window.location.href.indexOf('exo_') == -1 ", "type": "code", "name": null, "match": null}]]], "id": "10370427570", "name": "[Cookie] exo_* does not exist (live experiments)"}, {"conditions": ["and", ["or", ["or", {"value": "CORP_ADBLOCK", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "221326", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]], "id": "10420817927", "name": "[Cookie] B2B w CORP_ADBLOCK flag"}, {"conditions": ["and", ["or", ["or", {"value": null, "type": "cookies", "name": "exo_tt", "match": "exists"}]]], "id": "10471400591", "name": "Cookie exo_tt"}, {"conditions": ["and", ["or", ["or", {"value": "", "type": "cookies", "name": "exo_rts_clock", "match": "exists"}], ["or", {"value": "", "type": "query", "name": "exo_rts_clock", "match": "exists"}]]], "id": "10558842301", "name": "[Cookie] exo_rts_clock or exo_rts_clock=true"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.meter.pageCount === 2", "type": "code", "name": null, "match": null}]]], "id": "10561762413", "name": "Meter Count 2"}, {"conditions": ["and", ["or", ["or", {"value": "gdpr-dj", "type": "query", "name": "ad-keywords", "match": "exact"}]]], "id": "10597900111", "name": "[Query Parameter] ad-keywords=gdpr-dj"}, {"conditions": ["and", ["or", ["or", {"value": "224163", "type": "vendor.bluekai", "name": "campaigns", "match": null}], ["or", {"value": "true", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "NYToptly.user.demographics.wat.match(/EDU|EDU20AND3KW|INTEDU|EDU_US_IPRANGE|EDU_INT_IPRANGE|Edu_B2C_Formers/) !== null", "type": "code", "name": null, "match": null}]]], "id": "10613651460", "name": "[Segment] All EDU: *all* segments except K12"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_killset_dev", "match": "exact"}]]], "id": "10650272390", "name": "[Cookie] Exo Killset Development"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}, {"value": "IN", "type": "location", "name": null, "match": null}, {"value": "AU", "type": "location", "name": null, "match": null}, {"value": "CA", "type": "location", "name": null, "match": null}]], ["or", {"value": "ROW", "type": "query", "name": "location", "match": "exact"}, {"value": "EU", "type": "query", "name": "location", "match": "exact"}, {"value": "GB", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "ROW", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "GB", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "EU", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "10716002655", "name": "[Geo] UK/Europe/ROW exclude Australia and Canada "}, {"conditions": ["and", ["or", ["or", {"value": "!!(NYToptly.user.demographics && (typeof NYToptly.user.demographics.bundleSubscriptions[0] !== 'undefined'))", "type": "code", "name": null, "match": null}], ["or", {"value": "218185", "type": "vendor.bluekai", "name": "campaigns", "match": null}], ["or", {"value": "sub", "type": "custom_attribute", "name": "10756924637", "match": null}]]], "id": "10738960527", "name": "[Subscriber Type] Subs (All) via NYToptly.user, BlueKai"}, {"conditions": ["and", ["or", ["or", {"value": "CUNY", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "CCNY", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Kingsborough", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Hunter", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Lehman", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "NYC Tech", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Bklyn College", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Baruch", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "York College", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}]]], "id": "10754870518", "name": "[B2B] CUNY"}, {"conditions": ["and", ["or", ["or", {"value": "document.cookie.indexOf('%22nickName%22%3A%22ASU%22') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "ASU", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}]]], "id": "10762441103", "name": "[B2B] ASU"}, {"conditions": ["and", ["or", ["or", {"value": null, "type": "cookies", "name": "exo_mgn", "match": "exists"}]]], "id": "10793015312", "name": "[Cookie] exo_mgn"}, {"conditions": ["and", ["or", ["or", {"value": "", "type": "cookies", "name": "exo_b2b_noreg", "match": "exists"}], ["or", {"value": "", "type": "query", "name": "exo_b2b_noreg", "match": "exists"}]], ["or", ["or", {"value": "Devil's Thumb Ranch", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}, {"value": "VILLANOVA UNIVERSITY", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10796572133", "name": "[Cookie] exo_b2b_noreg"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.jkidd.user.isLoggedIn === false && NYToptly.jkidd.user.type == 'sub'", "type": "code", "name": null, "match": null}], ["or", {"value": "optimizely.get('visitor').custom[10167440018].value == \"sub\" &&  !(NYToptly.user && NYToptly.user.id)", "type": "code", "name": null, "match": null}], ["or", {"value": "optimizely.get('visitor').custom[10756924637].value == \"sub\" && !(NYToptly.user && NYToptly.user.id)", "type": "code", "name": null, "match": null}]]], "id": "10832102585", "name": "[JKIDD] Logged-out Subs"}, {"conditions": ["and", ["or", ["not", ["or", {"value": null, "type": "cookies", "name": "GraceViewed", "match": "exists"}]]]], "id": "10834620768", "name": "[Cookie] GraceViewed does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_logged_out_sub", "match": "exact"}], ["or", {"value": "true", "type": "query", "name": "loggedoutsub", "match": "exact"}]]], "id": "10851463365", "name": "[cookie] exo_logged_out_sub or dev mode"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'CR'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'CW'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'ADA_CR'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'MAX_ADA_CR'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'MAX_ADA_CR_CK'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'ADA_PLUS_ACQ'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'MAX_ADA_PLUS_ACQ'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'ADA_PLUS_RET'", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.user.demographics.bundleSubscriptions[0].bundle == 'G'", "type": "code", "name": null, "match": null}]]], "id": "10875970017", "name": "[Bundle] Has Crossword Entitlement"}, {"conditions": ["and", ["or", ["or", {"value": "", "type": "cookies", "name": "exo_dataLayerIntegration", "match": "exists"}]]], "id": "10932013183", "name": "[Cookie] exo_dataLayerIntegration"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_support_test", "match": "exact"}]]], "id": "11058650189", "name": "[Cookie] exo_support_test"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "ie11", "type": "browser_version", "name": null, "match": null}]]]], "id": "11067720842", "name": "[Browser Type] Exclude IE11"}, {"conditions": ["and", ["or", ["or", {"value": "!(NYToptly.user && NYToptly.user.id)", "type": "code", "name": null, "match": null}]]], "id": "11177230834", "name": "[User] Anonymous - NOT logged-in"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('nytimes.com/ask/') > -1", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.location.href.indexOf('nytimes.com/ask/answers') === -1", "type": "code", "name": null, "match": null}]]], "id": "11196930754", "name": "[Page Targeting] Ask main page / section front (\"hub\")"}, {"conditions": ["and", ["or", ["or", {"value": "Vancouver Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Sewickley Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Ottawa Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Danish Institute of International Studies", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Elk City Carnegie Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Wellington County Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Free Library of Philadelphia", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Patten Free Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Rolling Meadows Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "West Bridgewater Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Toronto Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Berlin Peck Memorial Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Dighton Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Leonia Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Eastham Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Glen Ridge Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Hillsdale Free Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Lubbock Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Minuteman Library Network", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Palisades Park Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Fairview Free Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Herrick District Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Franklin Township Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Livingston Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Phoenix Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Devil's Thumb Ranch", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11198190119", "name": "[Cookie] b2b_cig_opt - Select Libraries"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('nytimes.com/ask/answers/') > -1", "type": "code", "name": null, "match": null}]]], "id": "11198760532", "name": "[Page Targeting] Ask section Answer page"}, {"conditions": ["and", ["or", ["or", {"value": null, "type": "cookies", "name": "exo_mm", "match": "exists"}]]], "id": "11310610003", "name": "[Cookie] exo_mm"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "subDockView", "match": "exists"}]]]], "id": "11325472970", "name": "[Cookie] subDockView does NOT exist"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "302915", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]]], "id": "11327512857", "name": "[BlueKai] NOT current Morning Briefing subscribers"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "11330953232", "name": "[Device] Desktop only"}, {"conditions": ["and", ["or", ["or", {"value": "document.referrer == \"https://www.nytimes.com/\"", "type": "code", "name": null, "match": null}]]], "id": "11335562153", "name": "[Referrer URL] Homepage"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('/smarter-living/') > -1", "type": "code", "name": null, "match": null}]]], "id": "11353660479", "name": "[Page Targeting] Smarter Living"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "303103", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]]], "id": "11358810238", "name": "[BlueKai] NOT current Smarter Living subscribers"}, {"conditions": ["and", ["or", ["or", {"value": "303470", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]], "id": "11363121680", "name": "[BlueKai] Tenure 0-89 Days"}, {"conditions": ["and", ["or", ["or", {"value": null, "type": "cookies", "name": "[Cookie] exo_dj_b2bhotels", "match": "exists"}], ["or", {"value": null, "type": "query", "name": "[Cookie] exo_dj_b2bhotels", "match": "exists"}]]], "id": "11381510588", "name": "[Cookie] exo_dj_b2bhotels"}, {"conditions": ["and", ["or", ["or", {"value": null, "type": "cookies", "name": "exo_maro461", "match": "exists"}]]], "id": "11386500025", "name": "[Cookie] exo_maro461"}, {"conditions": ["and", ["or", ["or", {"value": "HotelTrial Wythe Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial Big Sky Resort", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial Antlers At Vail", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial Union Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial Homewood Suites Seattle", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial The Condor Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial Hotel Beacon", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial Best Western Wesley Inn & Suites", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial The Knickerbocker Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial NYLO HOTEL", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "HotelTrial Stanton Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11401583224", "name": "[Cookie] b2b_cig_opt - Select Hotels"}, {"conditions": ["and", ["or", ["or", {"value": "SchoolLicense Ruhr University Bochum", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11405118141", "name": "[Cookie] b2b_cig_opt - Select Schools"}, {"conditions": ["and", ["or", ["or", {"value": "false", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11464120531", "name": "[Cookie] b2b_cig_opt contains false"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.user.id > -1", "type": "code", "name": null, "match": null}]]], "id": "11479282005", "name": "[User] Logged-in users"}, {"conditions": ["and", ["or", ["or", {"value": "B2BEduReg", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11488350482", "name": "[Cookie] B2BEduReg - special tag for Schools, set by DIG"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.user.demographics.wat.match(/HD_Grace/) !== null", "type": "code", "name": null, "match": null}], ["or", {"value": "", "type": "cookies", "name": "grace_hd_testing", "match": "exists"}], ["or", {"value": "", "type": "query", "name": "grace_hd_testing", "match": "exists"}]]], "id": "11698063390", "name": "[WAT] HD_Grace or query param - grace_hd_testing"}, {"conditions": ["and", ["or", ["or", {"value": "B2BLibReg", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11722602086", "name": "[Cookie] B2BLibReg - special tag for eligible libraries (set by DIG)"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_wednesday,thursday", "type": "time_and_day", "name": null, "match": null}]]], "id": "11728295638", "name": "[Dayparting] HD Grace - Wed, Thu"}, {"conditions": ["and", ["or", ["or", {"value": "Adobe", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "SCIENCES PO FNSP", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "ELIZABETH THOMPSON", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "UNIVERSITE PARIS DAUPH", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "Alaska Airlines", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "VILLANOVA UNIVERSITY", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11798972407", "name": "[Cookie] b2b_cig_opt - Select Corp Clients"}, {"conditions": ["and", ["or", ["or", {"value": "optimizely.get('visitor').custom[\"11793691498\"] && optimizely.get('visitor').custom[\"11793691498\"].value || optimizely.get('visitor').custom[\"11816281641\"] && optimizely.get('visitor').custom[\"11816281641\"].value", "type": "code", "name": null, "match": null}], ["or", {"value": "", "type": "cookies", "name": "grace_test_mkt", "match": "exists"}], ["or", {"value": "", "type": "query", "name": "grace_test_mkt", "match": "exists"}]]], "id": "11808711190", "name": "[Support] jkidd Grace Vi"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_lp_beautification_2018", "match": "exact"}]]], "id": "11810616061", "name": "[cookie] exo_lp_beautification_2018"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.customTarget.redbird.variant === \"FT\"\n", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "query", "name": "force_in_trial", "match": "exact"}]]], "id": "11937130003", "name": "[Redbird] in trial - Free Trial without CC"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "redbird_intrial", "match": "exists"}]], ["or", {"value": "true", "type": "query", "name": "force_in_trial", "match": "exact"}]]], "id": "11946605711", "name": "[Cookie] Redbird intrial frequency cap 24h - redbird_intrial"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.customTarget.redbird.daysLeft < 8", "type": "code", "name": null, "match": null}], ["or", {"value": null, "type": "query", "name": "daysLeft", "match": "exists"}]]], "id": "11950553353", "name": "[Redbird] Free Trial noCC 7 days left"}, {"conditions": ["and", ["or", ["or", {"value": "optimizely.get('visitor').custom[\"inGrace_global\"] && optimizely.get('visitor').custom[\"inGrace_global\"].value", "type": "code", "name": null, "match": null}], ["or", {"value": "", "type": "cookies", "name": "grace_test_mkt", "match": "exists"}]]], "id": "12105384231", "name": "[Support] JKIDD Grace Global"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_dock_open_lire_modal", "match": "exact"}]]], "id": "12105398061", "name": "[Cookie] exo_dock_open_lire_modal"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_redbird_reborn_us_0419", "match": "exact"}]]], "id": "12130415845", "name": "[Cookie] exo_redbird_reborn_us_0419"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.meter.ab.MKT_Redbird_US === '0_Control'", "type": "code", "name": null, "match": null}]]], "id": "12190559908", "name": "[Redbird US]  Control - MKT_Redbird_US = '0_Control'"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_dec_sale_1218", "match": "exact"}]]], "id": "12227881433", "name": "[cookie] exo_nons_dec_sale_1218"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.meter.ab.MKT_Redbird_US !== null", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "NYToptly.meter.ab.MKT_Redbird_US !== undefined", "type": "code", "name": null, "match": null}]]], "id": "12229296726", "name": "[Redbird] NYToptly.meter.ab.MKT_Redbird_US"}, {"conditions": ["and", ["or", ["or", {"value": "ie11", "type": "browser_version", "name": null, "match": null}], ["or", {"value": null, "type": "cookies", "name": "ie11_gateway_dev", "match": "exists"}]]], "id": "12229592851", "name": "[Browser Type] IE11 or dev mode"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYTD.Abra('MKT_Redbird_US') === 'Outside_Redbird';", "type": "code", "name": null, "match": null}]]], "id": "12350353132", "name": "[Abra] MKT_Redbird_US = Outside_Redbird"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.meter.ab.MKT_Redbird_US === '0_Control' || NYToptly.meter.ab.MKT_Redbird_US === '1_GW2_FT_CC' || NYToptly.meter.ab.MKT_Redbird_US === '2_GW2_FT_NoCC' || NYToptly.meter.ab.MKT_Redbird_US === '3_GW2_Regi' || NYToptly.meter.ab.MKT_Redbird_US === '4_GW3_FT_CC' || NYToptly.meter.ab.MKT_Redbird_US === '5_GW3_FT_NoCC' || NYToptly.meter.ab.MKT_Redbird_US === '6_GW3_Regi' || NYToptly.meter.ab.MKT_Redbird_US === '7_GW2_Lire'", "type": "code", "name": null, "match": null}]]], "id": "12406772408", "name": "[Redbird US] exclude Outside_Redbird"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_optly_mpc", "match": "exact"}]]], "id": "12420420739", "name": "[Cookie] MPC Development"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYTD.Abra('MKT_wcm_dfp_propensity_price') !== \"null\";", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYTD.Abra('MKT_wcm_dfp_propensity_price') !== null;", "type": "code", "name": null, "match": null}]]], "id": "12932310129", "name": "[Abra] MKT_wcm_dfp_propensity_price"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "SCIENCES PO FNSP", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]], ["not", ["or", {"value": "ELIZABETH THOMPSON", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]], ["not", ["or", {"value": "UNIVERSITE PARIS DAUPH", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]]], "id": "12998030218", "name": "[Cookie] b2b_cig_opt - Select Corp Clients - Avoid Logged In"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYTD.Abra('MKT_wcm_dfp_propensity_price') !== 'outside_propensity';", "type": "code", "name": null, "match": null}]]], "id": "13178270113", "name": "[Abra] user is not in 'outside_propensity'"}, {"conditions": ["and", ["or", ["or", {"value": "VILLANOVA UNIVERSITY", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "13273380393", "name": "[Cookie] b2b_cig_opt - Select Corp Clients - NO REGISTER NOW CTA"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "ftuxViewed", "match": "exact"}]]]], "id": "13545790477", "name": "[Cookie] `ftuxViewed` does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "!(NYToptly.jkidd.user.isLoggedIn === false && NYToptly.jkidd.user.type == 'sub')", "type": "code", "name": null, "match": null}], ["or", {"value": "!(optimizely.get('visitor').custom[10167440018].value == \"sub\" &&  !(NYToptly.user && NYToptly.user.id))", "type": "code", "name": null, "match": null}], ["or", {"value": "!(optimizely.get('visitor').custom[10756924637].value == \"sub\" && !(NYToptly.user && NYToptly.user.id))", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "query", "name": "exo_loggedin", "match": "exact"}]]], "id": "13558910562", "name": "[JKIDD] exclude Logged-Out Subs"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "352587", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]]], "id": "13567060078", "name": "[BlueKai] exclude MKTG_All_1PD_Global_Core News Apps_1x30_DFP"}, {"conditions": ["and", ["or", ["or", {"value": "(window.NYToptly.jkidd.user.subscriberInfo.topWat ===  \"Subs_COREandHD_Back2FTUX\") || (window.NYToptly.jkidd.user.subscriberInfo.watString.indexOf(\"Subs_COREandHD_Back2FTUX\") > -1) ", "type": "code", "name": null, "match": null}], ["or", {"value": "Subs_COREandHD_Back2FTUX", "type": "cookies", "name": "wat_seg", "match": "exact"}]]], "id": "13776560485", "name": "[WAT] Subs_COREandHD_Back2FTUX (uses JKIDD)"}, {"conditions": ["and", ["or", ["or", {"value": "B2BLibReg Las Vegas-Clark County Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "13818000266", "name": "[Cookie] b2b_cig_opt (killset list)"}, {"conditions": ["and", ["or", ["or", {"value": "(optimizely.get('visitor').custom[\"inGrace_global_cooking\"] && optimizely.get('visitor').custom[\"inGrace_global_cooking\"].value) || optimizely.get('visitor').custom[\"inGrace_global_crosswords\"] && optimizely.get('visitor').custom[\"inGrace_global_crosswords\"].value ", "type": "code", "name": null, "match": null}], ["or", {"value": "(NYToptly.jkidd.user.subscriberInfo.cookingGrace === true) || (NYToptly.jkidd.user.subscriberInfo.crosswordsGrace === true)", "type": "code", "name": null, "match": null}]]], "id": "14023910173", "name": "[Support] Cooking or XWD in-Grace (via jKidd)"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "angie_jkidd_testing", "match": "exact"}]]], "id": "14088150121", "name": "[Cookie] angie_jkidd_testing"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.geolocation.country == \"IN\"", "type": "code", "name": null, "match": null}], ["or", {"value": "IN", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "IN", "type": "query", "name": "location", "match": "exact"}]]], "id": "14098470273", "name": "[Support] Geo India Mom"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_b2b_university_of_the_sciences", "match": "exact"}], ["or", {"value": "", "type": "query", "name": "exo_b2b_university_of_the_sciences", "match": "exists"}]]], "id": "14190560526", "name": "[Cookie] exo_b2b_university_of_the_sciences or query param"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_b2b_university_of_kent", "match": "exact"}]]], "id": "14262740126", "name": "[Cookie] exo_b2b_university_of_kent"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_edu_inline", "match": "exact"}]]], "id": "14332350128", "name": "[Cookie] exo_edu_inline"}, {"conditions": ["and", ["or", ["or", {"value": "var x = document.getElementsByTagName(\"META\");\nvar txt = \"\";\n\nfunction metaTagStr() {\n    for (var j = 0; j < x.length; j++) {\n        txt = x[j].content;\n        if (txt.match(/babies/i)) {\n            return true;\n        }\n    }\n}\nmetaTagStr();", "type": "code", "name": null, "match": null}]]], "id": "14336120171", "name": "meta tag contains 'babies'"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_b2b_testing", "match": "exact"}]]], "id": "14341950444", "name": "[cookie] exo_b2b_testing"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_vacation_messaging", "match": "exact"}]]], "id": "14367250110", "name": "[Cookie] exo_vacation_messaging"}], "anonymizeIP": false, "projectId": "9262390779", "visitorAttributes": [], "accountId": "3013110282", "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  
PluginManager.registerWidget({
      widgetId: '9269751070',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "9269751070";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"dock_header_subscribe_link","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_subscribe_link_cta","default_value":"Subscribe"},{"name":"dock_header_offer_copy","default_value":"Just <s>$15.99</s> $9.99 a month."},{"name":"dock_header_meter_copy","default_value":"You have <strong>{{articleLeft}} free {{articleNoun}}</strong> remaining."},{"name":"dock_header_collapsed_cta","default_value":"Expand"},{"name":"dock_header_expanded_cta","default_value":"Collapse"},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>One subscription.</span>\n            <span>Endless discovery.</span>\n          </p>\n          <p class=\"cardMessage\">\n            For just <s>$15.99</s> $9.99 a month.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">Subscribe</div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"},{"name":"creator","default_value":"nytExo"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var EXTENSION_NAME = 'Dock';
var NYT_ID = window.NYToptly.debugData[EXTENSION_NAME.toLowerCase()].nytID;
var opt_console = window.NYToptly.opt_console;

function mktInfo() {
    return "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + NYT_ID + ", creative: " + EXTENSION_NAME +", source: optimizely, creator: " + widget.creator + "</span>";
}

var getMeterCopy = function(msg, lastMsg) {
    var delta = Math.max(window.NYToptly.meter.totalArticleCount - window.NYToptly.meter.pageCount, 0);
    var thing = (delta > 1) ? 'articles' : 'article';
    var message = lastMsg;

    if (delta > 0) {
        message = msg.replace(/{{articleLeft}}/, delta).replace(/{{articleNoun}}/, thing);
    }

    return message;
};
var counted = window.NYToptly.meter && window.NYToptly.meter.counted;

var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = widget.dock_content_css;
document.getElementsByTagName("head")[0].appendChild(style);

widget.dock_content_html = mktInfo() + widget.dock_content_html;

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_dock = {};
window.NYToptly.vi_dock.subscribeURL = widget.dock_header_subscribe_link;
window.NYToptly.vi_dock.subscribeCTA = widget.dock_subscribe_link_cta;
window.NYToptly.vi_dock.headerCollapsedCTA = widget.dock_header_collapsed_cta;
window.NYToptly.vi_dock.headerExpandedCTA = widget.dock_header_expanded_cta;
window.NYToptly.vi_dock.offerCopy = widget.dock_header_offer_copy;
window.NYToptly.vi_dock.meterCopy = getMeterCopy(widget.dock_header_meter_copy, 'This is your <strong>last free article.</strong>(O)');
window.NYToptly.vi_dock.campaignName = NYT_ID;
switch (window.NYToptly.meter && window.NYToptly.meter.pageCount) {
    case 1:
        window.NYToptly.vi_dock.size = "standard";
        break;
    case 2:
        window.NYToptly.vi_dock.size = "standard";
        break;
    case 3:
        window.NYToptly.vi_dock.size = "expanded";
        window.NYToptly.vi_dock.minimized = true;
        break;
    case 4:
        window.NYToptly.vi_dock.size = "expanded";
        window.NYToptly.vi_dock.minimized = true;
        break;
    case 5:
        window.NYToptly.vi_dock.size = "expanded";
        window.NYToptly.vi_dock.minimized = true;
        break;
    default:
        window.NYToptly.vi_dock.size = "standard";
}

//*** Q2 expanded test begins ***//
var expandedVariants = ['1_expanded', '3_combo'];
if (window.NYTD && NYTD.Abra && meter_count > 3 && expandedVariants.indexOf(NYTD.Abra('MKT_MEXP_287')) > -1) {
    window.NYToptly.vi_dock.minimized = false;
}
//*** Q2 expanded test ends ***//

if (counted !== false){
    window.NYToptly.vi_dock.shouldShow = true;
}
else {
    window.NYToptly.vi_dock.shouldShow = false;
}

if (typeof window.NYToptly.vi_dock_function === 'function') {
    window.NYToptly.vi_dock_function();
}

var utils = optimizely.get('utils');
var event = new CustomEvent('vi_dock');

utils.waitForElement('.optimizelyOK.vi_dock').then(function() {
    var content = document.querySelector('.optimizelyOK.vi_dock');
    content.innerHTML = widget.dock_content_html;
    opt_console.log('[Optimizely INFO] Dock campaign name: ' + NYT_ID);
    window.dispatchEvent(event);
});

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "9269751070";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"dock_header_subscribe_link","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_subscribe_link_cta","default_value":"Subscribe"},{"name":"dock_header_offer_copy","default_value":"Just <s>$15.99</s> $9.99 a month."},{"name":"dock_header_meter_copy","default_value":"You have <strong>{{articleLeft}} free {{articleNoun}}</strong> remaining."},{"name":"dock_header_collapsed_cta","default_value":"Expand"},{"name":"dock_header_expanded_cta","default_value":"Collapse"},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>One subscription.</span>\n            <span>Endless discovery.</span>\n          </p>\n          <p class=\"cardMessage\">\n            For just <s>$15.99</s> $9.99 a month.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">Subscribe</div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"},{"name":"creator","default_value":"nytExo"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '9272138185',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "9272138185";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"subscribe_url","default_value":"https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-9272138185';
widget._styleTag.innerHTML = '. {    background-color: #fff575;    border-bottom: 1px solid #e0d769;    color: #555;    padding: 10px;    font-weight: bold;    text-align: center;    font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_inline = {};
window.NYToptly.vi_inline.subscribe_url = widget.subscribe_url;
window.NYToptly.vi_inline.shouldShow = true;

if (typeof window.NYToptly.vi_inline_message_function === 'function') {
    window.NYToptly.vi_inline_message_function();
}

var vi_inline_event = new CustomEvent('vi_inline');
window.dispatchEvent(vi_inline_event);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "9272138185";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"subscribe_url","default_value":"https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-9272138185');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '9461000913',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "9461000913";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"dockgateway_campaign_name","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"dock_gateway_timeout","default_value":"0"},{"name":"dockgateway_content_html","default_value":"<div class=\"gatewayHeadline\">\n  Subscribe now to continue enjoying The Times.\n</div>\n<div class=\"gatewaySubHeading\">\n  Choose from our digital or home delivery options.\n</div>\n<div class=\"cardContainer\">\n  <div class=\"option basic\">\n    <a href=\"https://myaccount.nytimes.com/get-started/auth?OC=20000138860\">\n      <div class=\"card basicCard\">\n        <div class=\"description\">\n          <h2 class=\"optionName\">Basic</h2>\n          <p class=\"price\">\n            <span class=\"oldPrice\">$15.99</span>&#32;&#32;$9.99/month*\n          </p>\n        </div>\n        <div class=\"subscribeButton\">Get Basic</div>\n        <button\n          class=\"seeDetailsButton\"\n        >\n          see details\n        </button>\n      </div>\n    </a>\n    <div class=\"details\">\n      <div class=\"icons\">\n        <i class=\"icon iconLaptop\" />\n        <i class=\"icon iconMobile\" />\n      </div>\n      <ul class=\"detailList\">\n        <li>Access to NYTimes.com and all NYTimes apps.</li>\n        <li>Unlimited article access, anytime, anywhere.</li>\n        <li>Discounts to The Times Store, Film Club and Wine Club.</li>\n      </ul>\n    </div>\n    <ul class=\"footnote\">\n      <li>Billed as $9.99 every 30 days for introductory period of one year.</li>\n    </ul>\n  </div>\n  <div class=\"option allAccess\">\n    <a href=\"https://myaccount.nytimes.com/get-started/payment?OC=20000138880\">\n      <div class=\"card allAccessCard\">\n        <div class=\"bestValueLabel\">Best Value</div>\n        <div class=\"description\">\n          <h2 class=\"optionName\">All Access</h2>\n          <p class=\"price\">\n            <span class=\"oldPrice\">$26.99</span>&#32;&#32;$16.99/month*\n          </p>\n        </div>\n        <div class=\"subscribeButton\">Get All Access</div>\n        <button class=\"seeDetailsButton\">\n          see details\n        </button>\n      </div>\n    </a>\n    <div class=\"details\">\n      <div class=\"icons\">\n        <i class=\"icon iconLaptop\" />\n        <i class=\"icon iconMobile\" />\n        <i class=\"icon iconCrossword\" />\n        <i class=\"icon iconGift\" />\n      </div>\n      <ul class=\"detailList\">\n        <li>Access to NYTimes.com and all NYTimes apps.</li>\n        <li>Unlimited article access, anytime, anywhere.</li>\n        <li>Discounts to The Times Store, Film Club and Wine Club.</li>\n        <li>\n          <span class=\"emphasis\">NYTimes Crossword</span>Play the puzzle\n          for free on any device. Enjoy 20 years of crossword archives. Solve in\n          minutes with our bite-size Mini puzzles.\n        </li>\n      </ul>\n      <div class=\"bonus\">\n        <span class=\"emphasis\">1 bonus All Access subscription</span> to\n        give to anyone you’d like (a $25/month value).\n      </div>\n    </div>\n    <ul class=\"footnote\">\n      <li>Billed as $16.99 every 30 days for introductory period of one year.</li>\n    </ul>\n  </div>\n  <div class=\"option hdFree\">\n    <a href=\"https://www.nytimes.com/subscription/hd/1041.html\">\n      <div class=\"card hdFreeCard\">\n        <div class=\"description\">\n          <h2 class=\"optionName\">Home Delivery + Free Digital Access</h2>\n          <p class=\"price\">\n            <span class=\"oldPrice\">$9.00</span>&#32;&#32;$4.50/week*\n          </p>\n        </div>\n        <div class=\"subscribeButton\">Get Home Delivery</div>\n        <button class=\"seeDetailsButton\">\n          see details\n        </button>\n      </div>\n    </a>\n    <div class=\"details\">\n      <div class=\"icons\">\n        <i class=\"icon iconLaptop\" />\n        <i class=\"icon iconMobile\" />\n        <i class=\"icon iconHomeDelivery\" />\n        <i class=\"icon iconInsider\" />\n        <i class=\"icon iconGift\" />\n      </div>\n      <ul class=\"detailList\">\n        <li>Access to NYTimes.com and all NYTimes apps.</li>\n        <li>Unlimited article access, anytime, anywhere.</li>\n        <li>Discounts to The Times Store, Film Club and Wine Club.</li>\n        <li>\n          <span class=\"emphasis\">Home delivery</span>Convenient and\n          reliable delivery. Guaranteed. Customized delivery options such as Sunday\n          only, Fri.–Sun., weekday delivery or daily delivery.\n        </li>\n        <li>\n          <span class=\"emphasis\">Times experiences</span>Engage directly\n          with journalists online, go beyond the year’s biggest stories with panel\n          discussions across the country, and enjoy special discounts and\n          behind-the-scenes access to cultural events.\n        </li>\n        <li>\n          <span class=\"emphasis\">Exclusive print editions</span>Receive\n          special print-only features like The New York Times For Kids, sections\n          dedicated to crosswords and puzzles, and panoramic photojournalism stories.\n        </li>\n      </ul>\n      <div class=\"bonus\">\n        <span class=\"emphasis\">\n          2 bonus Basic Digital subscriptions\n        </span>{' '}\n        that include Times Insider access (a $50/month value).\n      </div>\n    </div>\n    <ul class=\"footnote\">\n      <li>\n        Billed as $18 every 28 days for introductory period of 12 weeks. Home delivery\n        price based on Saturday/Sunday delivery in the New York metropolitan area.\n        Prices vary based on delivery location and frequency.\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"additionalOptions\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\" class=\"additionalOption\">\n    <span class=\"emphasis\">More Subscription Options</span>\n    <p>Education rates, corporate rates, and more.</p>\n    <p class=\"link\">View all</p>\n  </a>\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html#faq_section\" class=\"additionalOption\">\n    <span class=\"emphasis\">Frequently Asked Questions</span>\n    <p>Find answers to commonly asked questions.</p>\n    <p class=\"link\">Learn more</p>\n  </a>\n</div>\n<div class=\"disclaimer\">\n  <p>\n    <span class=\"emphasis\">\n      No commitment required, cancel anytime.\n    </span>{' '}\n    Offer expires 9/1/17, 10:00am ET. Does not include e-reader edition. Mobile apps\n    are not supported on all devices. Offer not available for current subscribers.\n    Home Delivery offer valid for new subscribers in areas served by The New York\n    Times Delivery Service. All subscriptions will automatically renew and your credit\n    card or PayPal account will be charged in advance of each billing period unless\n    canceled. Other restrictions and taxes may apply.\n  </p>\n</div>"},{"name":"dockgateway_content_css","default_value":".vi_dockgateway {\n  background-color: red;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-9461000913';
widget._styleTag.innerHTML = '. {    background-color: #fff575;    border-bottom: 1px solid #e0d769;    color: #555;    padding: 10px;    font-weight: bold;    text-align: center;    font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var opt_console = window.NYToptly.opt_console;

var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = widget.dockgateway_content_css;
document.getElementsByTagName("head")[0].appendChild(style);

widget.dockgateway_content_html = mktInfo() + widget.dockgateway_content_html;

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_dockgateway = {};
window.NYToptly.vi_dockgateway.campaignName = widget.dockgateway_campaign_name;

var utils = optimizely.get('utils');

var gatewayTimeout = 0;
widget.dock_gateway_timeout = parseInt(widget.dock_gateway_timeout);

if (widget.dock_gateway_timeout < 7 && widget.dock_gateway_timeout > 0) {
    gatewayTimeout = widget.dock_gateway_timeout * 1000;
}

setTimeout(addGateway, gatewayTimeout);

function addGateway() {
    utils.waitForElement('.optimizelyOK.vi_dockgateway').then(function() {

        var content = document.querySelector('.optimizelyOK.vi_dockgateway');
        content.innerHTML = widget.dockgateway_content_html;

        var nytId = NYToptly.debugData && NYToptly.debugData.dock_gateway && NYToptly.debugData.dock_gateway.nytID || NYToptly.vi_dockgateway.campaignName;
        opt_console.log('[Optimizely INFO] Dock Gateway experience name: ' + nytId);

        var event = new CustomEvent('vi_dockgateway');
        window.dispatchEvent(event);

    });
}

function mktInfo() {
    return "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.dockgateway_campaign_name + ", creative: Dock Gateway, source: optimizely, creator: " + widget.creator + "</span>";
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "9461000913";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"dockgateway_campaign_name","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"dock_gateway_timeout","default_value":"0"},{"name":"dockgateway_content_html","default_value":"<div class=\"gatewayHeadline\">\n  Subscribe now to continue enjoying The Times.\n</div>\n<div class=\"gatewaySubHeading\">\n  Choose from our digital or home delivery options.\n</div>\n<div class=\"cardContainer\">\n  <div class=\"option basic\">\n    <a href=\"https://myaccount.nytimes.com/get-started/auth?OC=20000138860\">\n      <div class=\"card basicCard\">\n        <div class=\"description\">\n          <h2 class=\"optionName\">Basic</h2>\n          <p class=\"price\">\n            <span class=\"oldPrice\">$15.99</span>&#32;&#32;$9.99/month*\n          </p>\n        </div>\n        <div class=\"subscribeButton\">Get Basic</div>\n        <button\n          class=\"seeDetailsButton\"\n        >\n          see details\n        </button>\n      </div>\n    </a>\n    <div class=\"details\">\n      <div class=\"icons\">\n        <i class=\"icon iconLaptop\" />\n        <i class=\"icon iconMobile\" />\n      </div>\n      <ul class=\"detailList\">\n        <li>Access to NYTimes.com and all NYTimes apps.</li>\n        <li>Unlimited article access, anytime, anywhere.</li>\n        <li>Discounts to The Times Store, Film Club and Wine Club.</li>\n      </ul>\n    </div>\n    <ul class=\"footnote\">\n      <li>Billed as $9.99 every 30 days for introductory period of one year.</li>\n    </ul>\n  </div>\n  <div class=\"option allAccess\">\n    <a href=\"https://myaccount.nytimes.com/get-started/payment?OC=20000138880\">\n      <div class=\"card allAccessCard\">\n        <div class=\"bestValueLabel\">Best Value</div>\n        <div class=\"description\">\n          <h2 class=\"optionName\">All Access</h2>\n          <p class=\"price\">\n            <span class=\"oldPrice\">$26.99</span>&#32;&#32;$16.99/month*\n          </p>\n        </div>\n        <div class=\"subscribeButton\">Get All Access</div>\n        <button class=\"seeDetailsButton\">\n          see details\n        </button>\n      </div>\n    </a>\n    <div class=\"details\">\n      <div class=\"icons\">\n        <i class=\"icon iconLaptop\" />\n        <i class=\"icon iconMobile\" />\n        <i class=\"icon iconCrossword\" />\n        <i class=\"icon iconGift\" />\n      </div>\n      <ul class=\"detailList\">\n        <li>Access to NYTimes.com and all NYTimes apps.</li>\n        <li>Unlimited article access, anytime, anywhere.</li>\n        <li>Discounts to The Times Store, Film Club and Wine Club.</li>\n        <li>\n          <span class=\"emphasis\">NYTimes Crossword</span>Play the puzzle\n          for free on any device. Enjoy 20 years of crossword archives. Solve in\n          minutes with our bite-size Mini puzzles.\n        </li>\n      </ul>\n      <div class=\"bonus\">\n        <span class=\"emphasis\">1 bonus All Access subscription</span> to\n        give to anyone you’d like (a $25/month value).\n      </div>\n    </div>\n    <ul class=\"footnote\">\n      <li>Billed as $16.99 every 30 days for introductory period of one year.</li>\n    </ul>\n  </div>\n  <div class=\"option hdFree\">\n    <a href=\"https://www.nytimes.com/subscription/hd/1041.html\">\n      <div class=\"card hdFreeCard\">\n        <div class=\"description\">\n          <h2 class=\"optionName\">Home Delivery + Free Digital Access</h2>\n          <p class=\"price\">\n            <span class=\"oldPrice\">$9.00</span>&#32;&#32;$4.50/week*\n          </p>\n        </div>\n        <div class=\"subscribeButton\">Get Home Delivery</div>\n        <button class=\"seeDetailsButton\">\n          see details\n        </button>\n      </div>\n    </a>\n    <div class=\"details\">\n      <div class=\"icons\">\n        <i class=\"icon iconLaptop\" />\n        <i class=\"icon iconMobile\" />\n        <i class=\"icon iconHomeDelivery\" />\n        <i class=\"icon iconInsider\" />\n        <i class=\"icon iconGift\" />\n      </div>\n      <ul class=\"detailList\">\n        <li>Access to NYTimes.com and all NYTimes apps.</li>\n        <li>Unlimited article access, anytime, anywhere.</li>\n        <li>Discounts to The Times Store, Film Club and Wine Club.</li>\n        <li>\n          <span class=\"emphasis\">Home delivery</span>Convenient and\n          reliable delivery. Guaranteed. Customized delivery options such as Sunday\n          only, Fri.–Sun., weekday delivery or daily delivery.\n        </li>\n        <li>\n          <span class=\"emphasis\">Times experiences</span>Engage directly\n          with journalists online, go beyond the year’s biggest stories with panel\n          discussions across the country, and enjoy special discounts and\n          behind-the-scenes access to cultural events.\n        </li>\n        <li>\n          <span class=\"emphasis\">Exclusive print editions</span>Receive\n          special print-only features like The New York Times For Kids, sections\n          dedicated to crosswords and puzzles, and panoramic photojournalism stories.\n        </li>\n      </ul>\n      <div class=\"bonus\">\n        <span class=\"emphasis\">\n          2 bonus Basic Digital subscriptions\n        </span>{' '}\n        that include Times Insider access (a $50/month value).\n      </div>\n    </div>\n    <ul class=\"footnote\">\n      <li>\n        Billed as $18 every 28 days for introductory period of 12 weeks. Home delivery\n        price based on Saturday/Sunday delivery in the New York metropolitan area.\n        Prices vary based on delivery location and frequency.\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"additionalOptions\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\" class=\"additionalOption\">\n    <span class=\"emphasis\">More Subscription Options</span>\n    <p>Education rates, corporate rates, and more.</p>\n    <p class=\"link\">View all</p>\n  </a>\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html#faq_section\" class=\"additionalOption\">\n    <span class=\"emphasis\">Frequently Asked Questions</span>\n    <p>Find answers to commonly asked questions.</p>\n    <p class=\"link\">Learn more</p>\n  </a>\n</div>\n<div class=\"disclaimer\">\n  <p>\n    <span class=\"emphasis\">\n      No commitment required, cancel anytime.\n    </span>{' '}\n    Offer expires 9/1/17, 10:00am ET. Does not include e-reader edition. Mobile apps\n    are not supported on all devices. Offer not available for current subscribers.\n    Home Delivery offer valid for new subscribers in areas served by The New York\n    Times Delivery Service. All subscriptions will automatically renew and your credit\n    card or PayPal account will be charged in advance of each billing period unless\n    canceled. Other restrictions and taxes may apply.\n  </p>\n</div>"},{"name":"dockgateway_content_css","default_value":".vi_dockgateway {\n  background-color: red;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-9461000913');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '9858695532',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "9858695532";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"dock_header_subscribe_link_1","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_2","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_3","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_4","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_5","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_subscribe_link_cta","default_value":"Subscribe"},{"name":"dock_header_offer_copy","default_value":"Just <s>$15.99</s> $9.99 a month."},{"name":"dock_header_meter_copy","default_value":"You have <strong>{{articleLeft}} free {{articleNoun}}</strong> remaining."},{"name":"dock_header_collapsed_cta","default_value":"Expand"},{"name":"dock_header_expanded_cta","default_value":"Collapse"},{"name":"creator","default_value":"nytExo"},{"name":"dock_campaign_code_1","default_value":""},{"name":"dock_campaign_code_2","default_value":""},{"name":"dock_campaign_code_3","default_value":""},{"name":"dock_campaign_code_4","default_value":""},{"name":"dock_campaign_code_5","default_value":""},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>One subscription.</span>\n            <span>Endless discovery.</span>\n          </p>\n          <p class=\"cardMessage\">\n            For just <s>$15.99</s> $9.99 a month.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">Subscribe</div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        // Dock Multi-Link
var EXTENSION_NAME = 'Dock Multilink';
var EXTENSION_DATA_NAME = 'dock';
var NYT_ID = window.NYToptly && window.NYToptly.debugData && window.NYToptly.debugData[EXTENSION_DATA_NAME].nytID || 'optly_dock';
var opt_console = window.NYToptly.opt_console;

var getMeterCopy = function(msg, lastMsg) {
    var delta = Math.max(window.NYToptly.meter.totalArticleCount - window.NYToptly.meter.pageCount, 0);
    var thing = (delta > 1) ? 'articles' : 'article';
    var message = lastMsg;

    if (delta > 0) {
        message = msg.replace(/{{articleLeft}}/, delta).replace(/{{articleNoun}}/, thing);
    }

    return message;
};

var setUpCampaignCodeToLinks = function(meter_count) {

    var url = widget['dock_header_subscribe_link_' + meter_count] || '',
        subscribeUrlDesktop = url,
        subscribeUrlMobile = url,
        separator = '?',
        campaignIds = [];

    if (!!widget['dock_campaign_code_' + meter_count]) {
        campaignIds = widget['dock_campaign_code_' + meter_count].replace(' ', '').split(',');
    }

    if (url.indexOf('?') >= 0) {
        separator = '&';
    }

    if (campaignIds.length > 0 && url.indexOf('campaignId') === -1) {
        subscribeUrlDesktop = url + separator + 'campaignId=' + campaignIds[0];
        subscribeUrlMobile = url + separator + 'campaignId=' + campaignIds[1];
    }

    return {
        desktop: subscribeUrlDesktop,
        mobile: subscribeUrlMobile
    };

};

function mktInfo() {
    return "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + NYT_ID + ", creative: " + EXTENSION_NAME + ", source: optimizely, creator: " + widget.creator + "</span>";
}

widget.dock_content_html = mktInfo() + widget.dock_content_html;
window.NYToptly = window.NYToptly || {};
var meter_count = window.NYToptly.meter && window.NYToptly.meter.pageCount;
var counted = window.NYToptly.meter && window.NYToptly.meter.counted;
var subscribeUrl = setUpCampaignCodeToLinks(meter_count);
window.NYToptly.subscribeURL = subscribeUrl.desktop;
window.NYToptly.subscribeURLMobile = subscribeUrl.mobile;
window.NYToptly.vi_dock = {};
if ((window.location.href.indexOf('mobile.nytimes') > -1) || (window.screen.width < 768)) {
    window.NYToptly.vi_dock.subscribeURL = subscribeUrl.mobile;
} else {
    window.NYToptly.vi_dock.subscribeURL = subscribeUrl.desktop;
}
window.NYToptly.vi_dock.subscribeCTA = widget.dock_subscribe_link_cta;
window.NYToptly.vi_dock.headerCollapsedCTA = widget.dock_header_collapsed_cta;
window.NYToptly.vi_dock.headerExpandedCTA = widget.dock_header_expanded_cta;
window.NYToptly.vi_dock.offerCopy = widget.dock_header_offer_copy;
window.NYToptly.vi_dock.meterCopy = getMeterCopy(widget.dock_header_meter_copy, 'This is your <strong>last free article.</strong>');
window.NYToptly.vi_dock.campaignName = NYT_ID;

var dock_config = { size: [], minimized: [] };

dock_config.size[1] = { counted: "standard",  uncounted: "standard"  };
dock_config.size[2] = { counted: "standard",  uncounted: "standard"  };
dock_config.size[3] = { counted: "expanded",  uncounted: "standard"  };
dock_config.size[4] = { counted: "expanded",  uncounted: "standard"  };
dock_config.size[5] = { counted: "expanded",  uncounted: "standard"  };

dock_config.minimized[1] = { counted: true,  uncounted: true  };
dock_config.minimized[2] = { counted: true,  uncounted: true  };
dock_config.minimized[3] = { counted: true,  uncounted: true  };
dock_config.minimized[4] = { counted: true,  uncounted: true  };
dock_config.minimized[5] = { counted: true,  uncounted: true  };


window.NYToptly.dock_config = dock_config;

if (typeof window.NYToptly.vi_dock_function == 'function') {
    window.NYToptly.vi_dock_function();
}

// to maintain backwards compatibility, only set .vi_dock.size and .vi_dock.minimized if
// not already done in vi_dock_function
var countedStr = counted ? "counted" : "uncounted";
var index = [meter_count < 5? meter_count : 5];
if(typeof window.NYToptly.vi_dock.size === "undefined") {
    window.NYToptly.vi_dock.size      = dock_config.size[index][countedStr];
}
if(typeof window.NYToptly.vi_dock.minimized === "undefined") {
    window.NYToptly.vi_dock.minimized = dock_config.minimized[index][countedStr];
}

if (window.NYToptly.meter.showGateway || window.NYToptly.meter.gatewayExempt) {
    window.NYToptly.vi_dock.shouldShow = false;
}
else if (typeof window.NYToptly.vi_dock.shouldShow === 'undefined') {
    window.NYToptly.vi_dock.shouldShow = true;
}

opt_console.log('[Optimizely INFO] Dock Decision --  mc: ' + meter_count + ' ' + countedStr + ',  dockSize: ' + window.NYToptly.vi_dock.size + ',  minimized: ' + window.NYToptly.vi_dock.minimized + ',  shouldShow: ' + window.NYToptly.vi_dock.shouldShow);

var utils = optimizely.get('utils');
var event = new CustomEvent('vi_dock');
if (window.NYToptly.vi_dock.shouldShow) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.dock_content_css;
    document.getElementsByTagName("head")[0].appendChild(style);

    utils.waitForElement('.optimizelyOK.vi_dock').then(function() {
        var content = document.querySelector('.optimizelyOK.vi_dock');
        content.innerHTML = widget.dock_content_html;
        opt_console.log('[Optimizely INFO] Dock Multilink campaign name: ' + NYT_ID);
        window.dispatchEvent(event);

        var cardLink = document.querySelector('.card a');
        if (cardLink && cardLink.href) {
            cardLink.href = window.NYToptly.subscribeURL;
        }

        window['optimizely'].push({
            type: "event",
            eventName: "dock_impression",
            tags: {
                nytID: NYT_ID
            }
        });
    });
} else {
    window.dispatchEvent(event);
}


      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "9858695532";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"dock_header_subscribe_link_1","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_2","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_3","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_4","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_5","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_subscribe_link_cta","default_value":"Subscribe"},{"name":"dock_header_offer_copy","default_value":"Just <s>$15.99</s> $9.99 a month."},{"name":"dock_header_meter_copy","default_value":"You have <strong>{{articleLeft}} free {{articleNoun}}</strong> remaining."},{"name":"dock_header_collapsed_cta","default_value":"Expand"},{"name":"dock_header_expanded_cta","default_value":"Collapse"},{"name":"creator","default_value":"nytExo"},{"name":"dock_campaign_code_1","default_value":""},{"name":"dock_campaign_code_2","default_value":""},{"name":"dock_campaign_code_3","default_value":""},{"name":"dock_campaign_code_4","default_value":""},{"name":"dock_campaign_code_5","default_value":""},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>One subscription.</span>\n            <span>Endless discovery.</span>\n          </p>\n          <p class=\"cardMessage\">\n            For just <s>$15.99</s> $9.99 a month.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">Subscribe</div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });
PluginManager.registerAnalyticsTracker('10375351061', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      onLayerDecision: [
        'stores/layer_data',
        function onLayerDecisionGetter(LayerDataStore) {
          return function(decisionData) {
            var campaignId = decisionData.decision.layerId;
            var layer = LayerDataStore.get(campaignId);
            var extension = layer.integrationSettings && layer.integrationSettings['10375351061'];
            if (!extension) {
              return;
            }
            var campaign = {
              id: campaignId,
              name: layer.name,
              policy: layer.policy,
              integrationStringVersion: layer.integrationStringVersion,
            };
            var experimentId = decisionData.decision.experimentId;
            var variationId = decisionData.decision.variationId;
            var isHoldback = decisionData.decision.isLayerHoldback;
            extension.$fieldDefaults = [];
            (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
            if(decisionData.experimentId && decisionData.variationId){
var locationUrl = window.location.href;
var pageId = decisionData.pageId;
var layerExp = {};
if(decisionData.experimentName.indexOf('ab_') > -1 || campaign.policy ==="single_experiment"){
	layerExp.type = 'abtest';
}
else{
	layerExp.type = 'p13n';
}
  layerExp = {
    experience: decisionData.experimentName,
    variant: decisionData.variationName,
    placement: pageId,
    type: layerExp.type
};
window.NYToptly.bk_tracked = window.NYToptly.bk_tracked || [];
window.bk_optly = window.bk_optly || [];
  if(window.NYToptly.bk_tracked.indexOf(decisionData.experimentId)<0){
    window.bk_optly.push(layerExp);
    window.NYToptly.bk_tracked.push(decisionData.experimentId);
  }}

          }
        }
      ],
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['10375351061'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        if(decisionData.experimentId && decisionData.variationId){
var locationUrl = window.location.href;
var pageId = decisionData.pageId;
var layerExp = {};
if(decisionData.experimentName.indexOf('ab_') > -1 || campaign.policy ==="single_experiment"){
	layerExp.type = 'abtest';
}
else{
	layerExp.type = 'p13n';
}
  layerExp = {
    experience: decisionData.experimentName,
    variant: decisionData.variationName,
    placement: pageId,
    type: layerExp.type
};
window.NYToptly.bk_tracked = window.NYToptly.bk_tracked || [];
window.bk_optly = window.bk_optly || [];
  if(window.NYToptly.bk_tracked.indexOf(decisionData.experimentId)<0){
    window.bk_optly.push(layerExp);
    window.NYToptly.bk_tracked.push(decisionData.experimentId);
  }}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    

PluginManager.registerWidget({
      widgetId: '10620201952',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "10620201952";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"selected_asset","default_value":"vi_dock"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-10620201952';
widget._styleTag.innerHTML = '. {    background-color: #fff575;    border-bottom: 1px solid #e0d769;    color: #555;    padding: 10px;    font-weight: bold;    text-align: center;    font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var asset_string = widget.selected_asset;
var event = new CustomEvent(asset_string);
window.NYToptly[asset_string] = {};
window.NYToptly[asset_string].shouldShow = false;
window.dispatchEvent(event);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "10620201952";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"selected_asset","default_value":"vi_dock"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-10620201952');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '10649375220',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "10649375220";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"button_label","default_value":"Subscribe Now"},{"name":"subscribe_url","default_value":""},{"name":"mobile_url","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-10649375220';
widget._styleTag.innerHTML = '. {    background-color: #fff575;    border-bottom: 1px solid #e0d769;    color: #555;    padding: 10px;    font-weight: bold;    text-align: center;    font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var EXTENSION_NAME = 'Bar1';
var NYT_ID = window.NYToptly.debugData[EXTENSION_NAME.toLowerCase()].nytID;

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_bar1 = {};
window.NYToptly.vi_bar1.button_label = widget.button_label;
window.NYToptly.vi_bar1.subscribe_url = widget.subscribe_url;
window.NYToptly.vi_bar1.campaignName = NYT_ID;

var opt_console = window.NYToptly.opt_console;

if (widget.mobile_url && window.screen.width < 768) {
    window.NYToptly.vi_bar1.subscribe_url = widget.mobile_url;
}

if (typeof window.NYToptly.vi_bar1_function === 'function') {
    window.NYToptly.vi_bar1_function();
}

opt_console.log('bar 1 extension');

var vi_bar1_event = new CustomEvent('vi_bar1');
window.dispatchEvent(vi_bar1_event);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "10649375220";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"button_label","default_value":"Subscribe Now"},{"name":"subscribe_url","default_value":""},{"name":"mobile_url","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-10649375220');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '10748700640',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "10748700640";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"dock_subscribe_link_cta","default_value":"Your Subscription requires attention"},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8L3TR.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>Truth.</span>\n          </p>\n          <p class=\"cardMessage\">\n            It demands our attention.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">READ. WATCH. LISTEN. </div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"},{"name":"dock_campaign_name","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"dock_size","default_value":"standard"},{"name":"dock_link_href","default_value":""},{"name":"dock_header_offer_copy","default_value":""},{"name":"expanded_card_top_text","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = widget.dock_content_css;
document.getElementsByTagName("head")[0].appendChild(style);
window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_dock = {};
window.NYToptly.vi_dock.subscribeCTA = widget.dock_subscribe_link_cta;
window.NYToptly.vi_dock.subscribeURL = widget.dock_link_href;
window.NYToptly.vi_dock.offerCopy = widget.dock_header_offer_copy;
window.NYToptly.vi_dock.meterCopy = widget.expanded_card_top_text;
window.NYToptly.vi_dock.campaignName = widget.dock_campaign_name;
window.NYToptly.vi_dock.size = widget.dock_size;
window.NYToptly.vi_dock.minimized = true;
window.NYToptly.vi_dock.shouldShow = true;
if (typeof window.NYToptly.vi_dock_function == 'function') {
    window.NYToptly.vi_dock_function();
}
var utils = optimizely.get('utils');
var event = new CustomEvent('vi_dock');


if (NYToptly.vi_dock.shouldShow) {
    utils.waitForElement('.optimizelyOK.vi_dock').then(
    function() {
        var content = document.querySelector('.optimizelyOK.vi_dock');
        content.innerHTML = widget.dock_content_html;
        
		console.log('[Optimizely INFO] Dock Multilink campaign name: ' + widget.dock_campaign_name);
        window.dispatchEvent(event);
        if(window.NYToptly.vi_dock.subscribeURL) {
            var cardLink = document.querySelector('.card a');
            if (cardLink && cardLink.href) {
                cardLink.href = window.NYToptly.vi_dock.subscribeURL;
            }
        }
        window['optimizely'].push({
            type: "event",
            eventName: "sub_dock_impression",
            tags: {
                "campaign_name": widget.dock_campaign_name
            }
        });
    });
}


      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "10748700640";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"dock_subscribe_link_cta","default_value":"Your Subscription requires attention"},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8L3TR.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>Truth.</span>\n          </p>\n          <p class=\"cardMessage\">\n            It demands our attention.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">READ. WATCH. LISTEN. </div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"},{"name":"dock_campaign_name","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"dock_size","default_value":"standard"},{"name":"dock_link_href","default_value":""},{"name":"dock_header_offer_copy","default_value":""},{"name":"expanded_card_top_text","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });
PluginManager.registerAnalyticsTracker('10918000935', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      onLayerDecision: [
        'stores/layer_data',
        function onLayerDecisionGetter(LayerDataStore) {
          return function(decisionData) {
            var campaignId = decisionData.decision.layerId;
            var layer = LayerDataStore.get(campaignId);
            var extension = layer.integrationSettings && layer.integrationSettings['10918000935'];
            if (!extension) {
              return;
            }
            var campaign = {
              id: campaignId,
              name: layer.name,
              policy: layer.policy,
              integrationStringVersion: layer.integrationStringVersion,
            };
            var experimentId = decisionData.decision.experimentId;
            var variationId = decisionData.decision.variationId;
            var isHoldback = decisionData.decision.isLayerHoldback;
            extension.$fieldDefaults = [];
            (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
            var opt_console = window.NYToptly.opt_console;

var state = window.optimizely.get('state');
if(decisionData.experimentId && decisionData.variationId) {
    if(decisionData.experimentName.indexOf('abTest') === -1) {
        opt_console.log('[OptimizelyNYT] ET: skipping non-abtest: ', decisionData.experimentName);
    } else {
        opt_console.log('[OptimizelyNYT] Build Data Layer Exposure event');

        var utils = optimizely.get('utils');
        var locationUrl = window.location.href;
        var testName = decisionData.experimentName.replace('abTest', 'MKT');
        testName = testName.split(' ')[0];
        var variation = state.getVariationMap()[decisionData.experimentId];

        var event = {
            event: "ab-expose",
            abtest: {
                test: testName,
                variant: variation.index,
                url: locationUrl
            }
        };
        window.NYToptly.runWhenReady(
            function () {
                return "dataLayer" in window;
            },
            function () {
                var excludedTests = [
                    "MKT_one_month_offer",
                    "MKT_regi_bundle_0518",
                    "MKT_LP_gateway_mobile_subtitle_0618",
                    "MKT_dock_newsletter_0718",
                    "MKT_one_month_offer",
                    "MKT_regi_bundle_0518",
                    "MKT_email_capture_gateway_0518",
                    "MKT_newsletter_at_2_expandable exo_newsletter_at_2_expandable"
                ];
                window.NYToptly.ETAllocTracked = window.NYToptly.ETAllocTracked || excludedTests;
                if (window.NYToptly.ETAllocTracked.indexOf(event.abtest.test) !== -1) {
                    opt_console.log('[OptimizelyNYT] Data Layer Exposure already tracked: ', event.abtest.test);
                    return;
                }
                opt_console.log('[OptimizelyNYT] Data Layer Exposure call sent: ', event);
                dataLayer.push(event);
                window.NYToptly.ETAllocTracked.push(event.abtest.test);
            },
            1000,
            10
        );

    }
}


          }
        }
      ],
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['10918000935'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        var opt_console = window.NYToptly.opt_console;

var state = window.optimizely.get('state');
if(decisionData.experimentId && decisionData.variationId) {
    if(decisionData.experimentName.indexOf('abTest') === -1) {
        opt_console.log('[OptimizelyNYT] ET: skipping non-abtest: ', decisionData.experimentName);
    } else {
        opt_console.log('[OptimizelyNYT] Build Data Layer Exposure event');

        var utils = optimizely.get('utils');
        var locationUrl = window.location.href;
        var testName = decisionData.experimentName.replace('abTest', 'MKT');
        testName = testName.split(' ')[0];
        var variation = state.getVariationMap()[decisionData.experimentId];

        var event = {
            event: "ab-expose",
            abtest: {
                test: testName,
                variant: variation.index,
                url: locationUrl
            }
        };
        window.NYToptly.runWhenReady(
            function () {
                return "dataLayer" in window;
            },
            function () {
                var excludedTests = [
                    "MKT_one_month_offer",
                    "MKT_regi_bundle_0518",
                    "MKT_LP_gateway_mobile_subtitle_0618",
                    "MKT_dock_newsletter_0718",
                    "MKT_one_month_offer",
                    "MKT_regi_bundle_0518",
                    "MKT_email_capture_gateway_0518",
                    "MKT_newsletter_at_2_expandable exo_newsletter_at_2_expandable"
                ];
                window.NYToptly.ETAllocTracked = window.NYToptly.ETAllocTracked || excludedTests;
                if (window.NYToptly.ETAllocTracked.indexOf(event.abtest.test) !== -1) {
                    opt_console.log('[OptimizelyNYT] Data Layer Exposure already tracked: ', event.abtest.test);
                    return;
                }
                opt_console.log('[OptimizelyNYT] Data Layer Exposure call sent: ', event);
                dataLayer.push(event);
                window.NYToptly.ETAllocTracked.push(event.abtest.test);
            },
            1000,
            10
        );

    }
}


      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    

PluginManager.registerWidget({
      widgetId: '11111042192',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "11111042192";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"message_type","default_value":"WelcomeAd"},{"name":"creator","default_value":"nytExo"},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"custom_js","default_value":""},{"name":"welcome_content_html","default_value":"<a\n    class=\"welcomeAdContent\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n    href=\"https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?campaignId=XXXXX\"\n  >\n    <h3 class=\"welcomeAdTitle\">Covering stories from up close.</h3>\n    <p>Firsthand reporting that brings you the facts.</p>\n    <p class=\"welcomeAdSecondary\">Subscribe to The New York Times.</p>\n    <span class=\"welcomeAdCta\">See my options</span>\n  </a>"},{"name":"welcome_content_css","default_value":"#vi_welcome_close {\n  position: absolute;\n  border-radius: 50%;\n  background-clip: padding-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0,0,0,0.15);\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  line-height: normal;\n  vertical-align: middle;\n}\n#vi_welcome_close:hover {\n    background-color: #333;\n}\n#vi_welcome_close:before {\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#vi_welcome_close:after {\n    -webkit-transform: rotate(135deg);\n    -ms-transform: rotate(135deg);\n    transform: rotate(135deg);\n}\n#vi_welcome_close:before,\n#vi_welcome_close:after {\n    content: '';\n    position: absolute;\n    display: block;\n    background-color: #fff;\n    top: 10px;\n    left: 6px;\n    width: 10px;\n    height: 2px;\n}\n\n.welcomeAdContent {\n\tdisplay: block;\n  padding: 65px 40px 15px;\n  height: 240px;\n  background: url('https://static01.nyt.com/subscriptions/Multiproduct/assets_pa2017/images/logo_nyt_white.svg') no-repeat bottom 15px right 15px #3d719b;\n  background-size: 180px;\n  font-weight: lighter;\n  font-size: 28px;\n  font-family: franklin-normal-600, sans-serif;\n  color: #fff;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.welcomeAdTitle {\n\tfont-weight: bold;\n}\n\n.welcomeAdSecondary {\n\tmargin: 55px 0 15px;\n  font-weight: bold;\n  font-size: 24px;\n  color: #f3fe86;\n}\n\n.welcomeAdCta {\n\tfloat: left;\n  width: 120px;\n  height: 32px;\n  background: #f3fe86;\n  border-radius: 3px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 34px;\n  color: black;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        window.NYToptly = window.NYToptly || {};
var opt_console = window.NYToptly.opt_console;
var utils = optimizely.get('utils');

var EXTENSION_NAME = 'Welcome Ad';
var EXTENSION_DATA_NAME = 'welcome_ad';
var NYT_ID = window.NYToptly.debugData[EXTENSION_DATA_NAME].nytID;

//TODO: move to project.js?
window.NYToptly.getCookie = function(a, b) {
    b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
};

var getCountryText = function(html) {
    var re = /%%COUNTRY%%/g;
    var returnHTML = html;
    if (window.NYToptly.getQueryParameter("location")) {
        returnHTML = returnHTML.replace(re, window.NYToptly.getQueryParameter("location"));
    } else if (window.optimizely.data.visitor && window.optimizely.data.visitor.location != undefined) {
        returnHTML = returnHTML.replace(re, window.optimizely.data.visitor.location.country);
    } else {
        returnHTML = returnHTML.replace(re, "US");
    }
    return returnHTML;
};

var event = new CustomEvent('vi_welcome');
var showWelcomeFlag = false;
var rejectReason = '';

widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
widget.welcome_content_html = getCountryText(widget.welcome_content_html);

if (widget.welcome_content_html.indexOf('adxInfo mktInfo')) {
    widget.welcome_content_html = widget.welcome_content_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
}

var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + NYT_ID + ", creative: WelcomeAd, source: optimizely, creator: " + widget.creator + "</span>";

widget.welcome_content_html = mktInfo + widget.welcome_content_html;

var showWelcomeAd = function() {
    window.NYToptly.vi_welcome = {
        shouldShow: true,
        campaignName: NYT_ID
    };
    var style = document.createElement("style");
    var agent_id = window.NYToptly.getCookie('nyt-a');
    style.type = "text/css";
    style.innerHTML = widget.welcome_content_css;
    document.getElementsByTagName("head")[0].appendChild(style);
    utils.waitForElement('.vi_welcome.optimizelyOK').then(function() {
        var content = document.querySelector('.vi_welcome');
        content.innerHTML = widget.welcome_content_html;
        if (typeof window.NYToptly.vi_welcome_function === 'function') {
            window.NYToptly.vi_welcome_function();
        }
        opt_console.log('[Optimizely INFO] Welcome Ad: Welcome campaign name: ' + NYT_ID);
        window.dispatchEvent(event);
        opt_console.log('[Optimizely INFO] Welcome Ad: vi_welcome event dispatched');

        if (NYToptly.vi_welcome.shouldShow) {
            window['optimizely'].push({
                type: "event",
                eventName: "welcome_ad_impression_vi",
                tags: {
                    codename: NYT_ID,
                    agentId: agent_id
                }
            });
        }
    });

};

var rejectWelcomeAd = function(message) {
    window.NYToptly.vi_welcome = {
        shouldShow: false
    };
    message = message || 'Welcome Ad rejected';
    opt_console.log('[OptimizelyNYT] Welcome Ad: ' + message);
    window.dispatchEvent(event);
};

var behavior = optimizely.get('behavior');
var welcome_query = function(hours) {
    return behavior.query({
        "version": "0.2",
        "filter": [{
            "field": ["name"],
            "comparator": "in",
            "value": ["welcomead_impression", "welcome_ad_impression_vi"]
        }, {
            "field": ["age"],
            "comparator": "lt",
            "value": hours * 60 * 60 * 1000
        }, {
            "field": ["tags", "codename"],
            "value": NYT_ID
        }],
        "reduce": {
            "aggregator": "count"
        }
    });
};

var welcome_ads_small_cap = welcome_query(widget.session_cap_hours);
var welcome_ads_long_cap = welcome_query(24 * widget.freq_cap_days);
if (welcome_ads_small_cap < widget.session_cap) {
    opt_console.log(welcome_ads_small_cap + " was less than session cap of " + widget.session_cap)
}
if (widget.freq_cap_number !== "" && widget.freq_cap_days !== "") {
    if (welcome_ads_small_cap < widget.session_cap && welcome_ads_long_cap < widget.freq_cap_number) {
        showWelcomeFlag = true;
    } else {
        rejectReason = "Failed Frequency Cap: " + welcome_ads_long_cap + ", " + widget.freq_cap_number;
    }
} else if (welcome_ads_small_cap < widget.session_cap) {
    showWelcomeFlag = true;
} else {
    rejectReason = 'Welcome Ad already shown';
}

if (showWelcomeFlag) {
    showWelcomeAd();
} else {
    var debugFlag = (window.location.search.indexOf("debug=1") > -1 || document.cookie.indexOf('welcome_debug') > -1);
    if (debugFlag) {
        opt_console.log('[OptimizelyNYT] Welcome Ad: Forcing Welcome Ad despite of: ' + rejectReason);
        showWelcomeAd();
    } else {
        rejectWelcomeAd(rejectReason)
    }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "11111042192";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"message_type","default_value":"WelcomeAd"},{"name":"creator","default_value":"nytExo"},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"custom_js","default_value":""},{"name":"welcome_content_html","default_value":"<a\n    class=\"welcomeAdContent\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n    href=\"https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?campaignId=XXXXX\"\n  >\n    <h3 class=\"welcomeAdTitle\">Covering stories from up close.</h3>\n    <p>Firsthand reporting that brings you the facts.</p>\n    <p class=\"welcomeAdSecondary\">Subscribe to The New York Times.</p>\n    <span class=\"welcomeAdCta\">See my options</span>\n  </a>"},{"name":"welcome_content_css","default_value":"#vi_welcome_close {\n  position: absolute;\n  border-radius: 50%;\n  background-clip: padding-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0,0,0,0.15);\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  line-height: normal;\n  vertical-align: middle;\n}\n#vi_welcome_close:hover {\n    background-color: #333;\n}\n#vi_welcome_close:before {\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#vi_welcome_close:after {\n    -webkit-transform: rotate(135deg);\n    -ms-transform: rotate(135deg);\n    transform: rotate(135deg);\n}\n#vi_welcome_close:before,\n#vi_welcome_close:after {\n    content: '';\n    position: absolute;\n    display: block;\n    background-color: #fff;\n    top: 10px;\n    left: 6px;\n    width: 10px;\n    height: 2px;\n}\n\n.welcomeAdContent {\n\tdisplay: block;\n  padding: 65px 40px 15px;\n  height: 240px;\n  background: url('https://static01.nyt.com/subscriptions/Multiproduct/assets_pa2017/images/logo_nyt_white.svg') no-repeat bottom 15px right 15px #3d719b;\n  background-size: 180px;\n  font-weight: lighter;\n  font-size: 28px;\n  font-family: franklin-normal-600, sans-serif;\n  color: #fff;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.welcomeAdTitle {\n\tfont-weight: bold;\n}\n\n.welcomeAdSecondary {\n\tmargin: 55px 0 15px;\n  font-weight: bold;\n  font-size: 24px;\n  color: #f3fe86;\n}\n\n.welcomeAdCta {\n\tfloat: left;\n  width: 120px;\n  height: 32px;\n  background: #f3fe86;\n  border-radius: 3px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 34px;\n  color: black;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });
PluginManager.registerAnalyticsTracker('11195211775', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      onLayerDecision: [
        'stores/layer_data',
        function onLayerDecisionGetter(LayerDataStore) {
          return function(decisionData) {
            var campaignId = decisionData.decision.layerId;
            var layer = LayerDataStore.get(campaignId);
            var extension = layer.integrationSettings && layer.integrationSettings['11195211775'];
            if (!extension) {
              return;
            }
            var campaign = {
              id: campaignId,
              name: layer.name,
              policy: layer.policy,
              integrationStringVersion: layer.integrationStringVersion,
            };
            var experimentId = decisionData.decision.experimentId;
            var variationId = decisionData.decision.variationId;
            var isHoldback = decisionData.decision.isLayerHoldback;
            extension.$fieldDefaults = [];
            (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
            if(decisionData.experimentId && decisionData.variationId) {

    //console.log('[Debug Data] Debug data integration applied.');

    var optlyData = window.optimizely.get('data'),
        placementName = getPlacementName(decisionData.pageId),
        data = {
            projectId: decisionData.projectId,
            campaignId: decisionData.layerId,
            campaignName: decisionData.layerName,
            experimentId: decisionData.experimentId,
            experimentName: decisionData.experimentName,
            variationId: decisionData.variationId,
            variationName: decisionData.variationName,
            pageId: decisionData.pageId,
            pageName: optlyData.pages[decisionData.pageId].name,
            decisionTicketAudiences: decisionData.decisionTicketAudienceIds
        };

    window.NYToptly = window.NYToptly || {};
    window.NYToptly.debugData = window.NYToptly.debugData || {};
    window.NYToptly.debugData[placementName] = window.NYToptly.debugData[placementName] || {};
    window.NYToptly.debugData[placementName][experimentId] = data;
    window.NYToptly.debugData[placementName].nytID = decisionData.experimentName.replace(/ /g, '') + ' -- ' + decisionData.experimentId;

    function getPlacementName(pageId) {
        var pages = {
            '9260770473': 'dock',
            '9263528157': 'inline_message',
            '9413676220': 'dock_gateway',
            '10647916243': 'bar1',
            '11210370568': 'welcome_ad'
        };
        return pages[pageId];
    }

    if (document.cookie.indexOf('opt_console') > -1) {

        var showActiveExperiments = function () {

            var debugData = window.NYToptly.debugData;
            var mktInfos = document.querySelectorAll('.mktInfo');

            console.log('%c============================================', 'font-weight: bold;');
            console.log('%cDebug Data', 'font-weight: bold;');
            console.log('%c============================================\n\n', 'font-weight: bold;');

            for (var placement in debugData) {

                var isPresented = false;
                var p = placement.replace('_', ' ');

                mktInfos.forEach(function (mktInfo) {
                    var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
                    if (creative.toLowerCase().indexOf(p) !== -1) {
                        isPresented = true;
                    }

                    if (p == 'dock' && isPresented && creative.toLowerCase().indexOf('gateway') !== -1) {
                        isPresented = false;
                    }
                });

                var placementName = placement.charAt(0).toUpperCase() + placement.slice(1);

                placementName = placementName.replace('_', ' ');

                if (isPresented) {
                    console.log('%c\n\n' + placementName + ': ' + '    ***PRESENTED***\n\n', 'font-weight: bold;');
                }
                else {
                    console.log('%c\n\n' + placementName + ': ' + '\n\n', 'font-weight: bold;');
                }

                for (var prop in debugData[placement]) {
                    if (prop.toLowerCase() !== 'extension') {
                        console.log('     Campaign:          ' + debugData[placement][prop].campaignId + ' -- ' + debugData[placement][prop].campaignName);
                        console.log('        Experience:     ' + debugData[placement][prop].experimentId + ' -- ' + debugData[placement][prop].experimentName);
                        console.log('           Variation:   ' + debugData[placement][prop].variationId + ' -- ' + debugData[placement][prop].variationName);
                        console.log('           Page:        ' + debugData[placement][prop].pageId + ' -- ' + debugData[placement][prop].pageName);
                    }
                    else {
                        console.log('     Extension:          ' + debugData[placement][prop]);
                    }
                }
            }

            console.log('%c\n\n============================================', 'font-weight: bold;');

        };

        var showDecision = function (placement) {

            var info = getUserData();

            console.log('%c============================================', 'font-weight: bold;');
            console.log('%cDebug Data' + getTitle(placement), 'font-weight: bold;');
            console.log('%c============================================\n\n', 'font-weight: bold;');

            console.log(info.userType + ', ' + info.country + ', ' + info.browser + (info.mc ? ', MC=' + info.mc : '') + '\n\n');

            if (placement) {
                showDataForExperimentsByPlacementName(placement);
            }
            else {
                showDataForActiveExperiments();
            }

            console.log('%c============================================', 'font-weight: bold;');

        };

        window.NYToptly.showActiveExperiments = window.NYToptly.showActiveExperiments || showActiveExperiments;
        window.NYToptly.showDecision = window.NYToptly.showDecision || showDecision;

        function getTitle(placement) {
            return (placement ? ' for ' + placement.charAt(0).toUpperCase() + placement.slice(1) : ' for All Active Experiences');
        }

        function getUserData() {
            var visitor = window.optimizely.get('visitor');
            return {
                userType: window.NYToptly.jkidd.user.type,
                country: visitor.location.country.toLowerCase(),
                mc: window.NYToptly.meter ? window.NYToptly.meter.pageCount : '',
                browser: visitor.browserId
            };
        }

        function showDataForExperimentsByPlacementName(placement) {

            var optlyData = window.optimizely.get('data'),
                debugData = window.NYToptly.debugData;

            if (debugData[placement]) {
                for (var experimentId in debugData[placement]) {

                    var isPresented = false,
                        placementData = debugData[placement][experimentId],
                        mktInfos = document.querySelectorAll('.mktInfo'),
                        experiment = optlyData.experiments[experimentId],
                        campaignId = getCampaignId(experiment.campaignName),
                        priority = getPriority(campaignId, experimentId);

                    mktInfos.forEach(function (mktInfo) {
                        var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
                        var p = placement.replace('_', ' ');

                        if (creative.toLowerCase().indexOf(p) !== -1) {
                            isPresented = true;
                        }

                        if (p == 'dock' && isPresented && creative.toLowerCase().indexOf('gateway') !== -1) {
                            isPresented = false;
                        }

                    });

                    if (isPresented) {
                        console.log('%c' + placementData.experimentName + '    ***PRESENTED***', 'font-weight: bold;');
                    }
                    else {
                        console.log('%c' + placementData.experimentName, 'font-weight: bold;');
                    }

                    console.log('    Experience ID: ' + placementData.experimentId);
                    console.log('    Campaign Name: ' + placementData.campaignName);
                    console.log('    Campaign ID: ' + placementData.campaignId);

                    showAudiences(campaignId, experiment);

                    console.log('    Priority: ' + priority);
                    console.log('\n');

                }
            }

        }

        function showDataForActiveExperiments() {
            var state = window.optimizely.get('state'),
                activeExperimentIds = state.getActiveExperimentIds(),
                optlyData = window.optimizely.get('data'),
                debugData = window.NYToptly.debugData;

            activeExperimentIds.forEach(function (experimentId) {

                var experiment = optlyData.experiments[experimentId],
                    campaignId = getCampaignId(experiment.campaignName),
                    priority = getPriority(campaignId, experimentId),
                    isPresented = false;

                for (var placementName in debugData) {
                    if (debugData[placementName][experimentId]) {
                        isPresented = true;
                        break;
                    }
                }

                if (isPresented) {
                    console.log('%c' + experiment.name + '    ***PRESENTED***', 'font-weight: bold;');
                }
                else {
                    console.log('%c' + experiment.name, 'font-weight: bold;');
                }

                console.log('    Experience ID: ' + experiment.id);
                console.log('    Campaign Name: ' + experiment.campaignName);
                console.log('    Campaign ID: ' + campaignId);

                if (isPresented) {
                    var mktInfos = document.querySelectorAll('.mktInfo');
                    mktInfos.forEach(function (mktInfo) {
                        var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
                        console.log('    Placement name: ' + creative);
                    });
                }

                showAudiences(campaignId, experiment);

                console.log('    Priority: ' + priority);
                console.log('\n');

            });

        }

        function showAudiences(campaignId, experiment) {

            var state = window.optimizely.get('state'),
                optlyData = window.optimizely.get('data'),
                audiences = optlyData.audiences;

            console.log('    Audiences: ');

            if (experiment.audienceIds) {
                experiment.audienceIds.forEach(function (audienceId) {
                    if (!isNaN(parseInt(audienceId))) {
                        var campaignState = state.getCampaignStateLists()[campaignId],
                            audienceValue = false;

                        for (var item in campaignState) {
                            for (var audience in campaignState[item].audiences) {
                                if (campaignState[item].audiences[audience].id == audienceId) {
                                    audienceValue = true + ' ';
                                    break;
                                }
                            }
                        }

                        console.log('        ' + audienceValue + '   ' + audiences[audienceId].name);
                    }
                    else if (audienceId === 'or') {
                        console.log('        Match any of audiences:');
                    }
                    else if (audienceId === 'and') {
                        console.log('        Match all of audiences:');
                    }
                });
            }
            else {
                console.log('        true    ' + experiment.audienceName);
            }

        }

        function getCampaignId(campaignName) {
            var optlyData = window.optimizely.get('data');
            for (var campaign in optlyData.campaigns) {
                if (optlyData.campaigns[campaign].name === campaignName) {
                    return optlyData.campaigns[campaign].id;
                }
            }
        }

        function getPriority(campaignId, experimentId) {
            var experimentPriorities = optlyData.campaigns[campaignId].decisionMetadata.experimentPriorities,
                priority;
            experimentPriorities.forEach(function (el, index) {
                el.forEach(function (i) {
                    if (i.entityId === experimentId) {
                        priority = index;
                        return false;
                    }
                });
            });
            return priority;
        }

    }

}

          }
        }
      ],
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['11195211775'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        if(decisionData.experimentId && decisionData.variationId) {

    //console.log('[Debug Data] Debug data integration applied.');

    var optlyData = window.optimizely.get('data'),
        placementName = getPlacementName(decisionData.pageId),
        data = {
            projectId: decisionData.projectId,
            campaignId: decisionData.layerId,
            campaignName: decisionData.layerName,
            experimentId: decisionData.experimentId,
            experimentName: decisionData.experimentName,
            variationId: decisionData.variationId,
            variationName: decisionData.variationName,
            pageId: decisionData.pageId,
            pageName: optlyData.pages[decisionData.pageId].name,
            decisionTicketAudiences: decisionData.decisionTicketAudienceIds
        };

    window.NYToptly = window.NYToptly || {};
    window.NYToptly.debugData = window.NYToptly.debugData || {};
    window.NYToptly.debugData[placementName] = window.NYToptly.debugData[placementName] || {};
    window.NYToptly.debugData[placementName][experimentId] = data;
    window.NYToptly.debugData[placementName].nytID = decisionData.experimentName.replace(/ /g, '') + ' -- ' + decisionData.experimentId;

    function getPlacementName(pageId) {
        var pages = {
            '9260770473': 'dock',
            '9263528157': 'inline_message',
            '9413676220': 'dock_gateway',
            '10647916243': 'bar1',
            '11210370568': 'welcome_ad'
        };
        return pages[pageId];
    }

    if (document.cookie.indexOf('opt_console') > -1) {

        var showActiveExperiments = function () {

            var debugData = window.NYToptly.debugData;
            var mktInfos = document.querySelectorAll('.mktInfo');

            console.log('%c============================================', 'font-weight: bold;');
            console.log('%cDebug Data', 'font-weight: bold;');
            console.log('%c============================================\n\n', 'font-weight: bold;');

            for (var placement in debugData) {

                var isPresented = false;
                var p = placement.replace('_', ' ');

                mktInfos.forEach(function (mktInfo) {
                    var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
                    if (creative.toLowerCase().indexOf(p) !== -1) {
                        isPresented = true;
                    }

                    if (p == 'dock' && isPresented && creative.toLowerCase().indexOf('gateway') !== -1) {
                        isPresented = false;
                    }
                });

                var placementName = placement.charAt(0).toUpperCase() + placement.slice(1);

                placementName = placementName.replace('_', ' ');

                if (isPresented) {
                    console.log('%c\n\n' + placementName + ': ' + '    ***PRESENTED***\n\n', 'font-weight: bold;');
                }
                else {
                    console.log('%c\n\n' + placementName + ': ' + '\n\n', 'font-weight: bold;');
                }

                for (var prop in debugData[placement]) {
                    if (prop.toLowerCase() !== 'extension') {
                        console.log('     Campaign:          ' + debugData[placement][prop].campaignId + ' -- ' + debugData[placement][prop].campaignName);
                        console.log('        Experience:     ' + debugData[placement][prop].experimentId + ' -- ' + debugData[placement][prop].experimentName);
                        console.log('           Variation:   ' + debugData[placement][prop].variationId + ' -- ' + debugData[placement][prop].variationName);
                        console.log('           Page:        ' + debugData[placement][prop].pageId + ' -- ' + debugData[placement][prop].pageName);
                    }
                    else {
                        console.log('     Extension:          ' + debugData[placement][prop]);
                    }
                }
            }

            console.log('%c\n\n============================================', 'font-weight: bold;');

        };

        var showDecision = function (placement) {

            var info = getUserData();

            console.log('%c============================================', 'font-weight: bold;');
            console.log('%cDebug Data' + getTitle(placement), 'font-weight: bold;');
            console.log('%c============================================\n\n', 'font-weight: bold;');

            console.log(info.userType + ', ' + info.country + ', ' + info.browser + (info.mc ? ', MC=' + info.mc : '') + '\n\n');

            if (placement) {
                showDataForExperimentsByPlacementName(placement);
            }
            else {
                showDataForActiveExperiments();
            }

            console.log('%c============================================', 'font-weight: bold;');

        };

        window.NYToptly.showActiveExperiments = window.NYToptly.showActiveExperiments || showActiveExperiments;
        window.NYToptly.showDecision = window.NYToptly.showDecision || showDecision;

        function getTitle(placement) {
            return (placement ? ' for ' + placement.charAt(0).toUpperCase() + placement.slice(1) : ' for All Active Experiences');
        }

        function getUserData() {
            var visitor = window.optimizely.get('visitor');
            return {
                userType: window.NYToptly.jkidd.user.type,
                country: visitor.location.country.toLowerCase(),
                mc: window.NYToptly.meter ? window.NYToptly.meter.pageCount : '',
                browser: visitor.browserId
            };
        }

        function showDataForExperimentsByPlacementName(placement) {

            var optlyData = window.optimizely.get('data'),
                debugData = window.NYToptly.debugData;

            if (debugData[placement]) {
                for (var experimentId in debugData[placement]) {

                    var isPresented = false,
                        placementData = debugData[placement][experimentId],
                        mktInfos = document.querySelectorAll('.mktInfo'),
                        experiment = optlyData.experiments[experimentId],
                        campaignId = getCampaignId(experiment.campaignName),
                        priority = getPriority(campaignId, experimentId);

                    mktInfos.forEach(function (mktInfo) {
                        var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
                        var p = placement.replace('_', ' ');

                        if (creative.toLowerCase().indexOf(p) !== -1) {
                            isPresented = true;
                        }

                        if (p == 'dock' && isPresented && creative.toLowerCase().indexOf('gateway') !== -1) {
                            isPresented = false;
                        }

                    });

                    if (isPresented) {
                        console.log('%c' + placementData.experimentName + '    ***PRESENTED***', 'font-weight: bold;');
                    }
                    else {
                        console.log('%c' + placementData.experimentName, 'font-weight: bold;');
                    }

                    console.log('    Experience ID: ' + placementData.experimentId);
                    console.log('    Campaign Name: ' + placementData.campaignName);
                    console.log('    Campaign ID: ' + placementData.campaignId);

                    showAudiences(campaignId, experiment);

                    console.log('    Priority: ' + priority);
                    console.log('\n');

                }
            }

        }

        function showDataForActiveExperiments() {
            var state = window.optimizely.get('state'),
                activeExperimentIds = state.getActiveExperimentIds(),
                optlyData = window.optimizely.get('data'),
                debugData = window.NYToptly.debugData;

            activeExperimentIds.forEach(function (experimentId) {

                var experiment = optlyData.experiments[experimentId],
                    campaignId = getCampaignId(experiment.campaignName),
                    priority = getPriority(campaignId, experimentId),
                    isPresented = false;

                for (var placementName in debugData) {
                    if (debugData[placementName][experimentId]) {
                        isPresented = true;
                        break;
                    }
                }

                if (isPresented) {
                    console.log('%c' + experiment.name + '    ***PRESENTED***', 'font-weight: bold;');
                }
                else {
                    console.log('%c' + experiment.name, 'font-weight: bold;');
                }

                console.log('    Experience ID: ' + experiment.id);
                console.log('    Campaign Name: ' + experiment.campaignName);
                console.log('    Campaign ID: ' + campaignId);

                if (isPresented) {
                    var mktInfos = document.querySelectorAll('.mktInfo');
                    mktInfos.forEach(function (mktInfo) {
                        var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
                        console.log('    Placement name: ' + creative);
                    });
                }

                showAudiences(campaignId, experiment);

                console.log('    Priority: ' + priority);
                console.log('\n');

            });

        }

        function showAudiences(campaignId, experiment) {

            var state = window.optimizely.get('state'),
                optlyData = window.optimizely.get('data'),
                audiences = optlyData.audiences;

            console.log('    Audiences: ');

            if (experiment.audienceIds) {
                experiment.audienceIds.forEach(function (audienceId) {
                    if (!isNaN(parseInt(audienceId))) {
                        var campaignState = state.getCampaignStateLists()[campaignId],
                            audienceValue = false;

                        for (var item in campaignState) {
                            for (var audience in campaignState[item].audiences) {
                                if (campaignState[item].audiences[audience].id == audienceId) {
                                    audienceValue = true + ' ';
                                    break;
                                }
                            }
                        }

                        console.log('        ' + audienceValue + '   ' + audiences[audienceId].name);
                    }
                    else if (audienceId === 'or') {
                        console.log('        Match any of audiences:');
                    }
                    else if (audienceId === 'and') {
                        console.log('        Match all of audiences:');
                    }
                });
            }
            else {
                console.log('        true    ' + experiment.audienceName);
            }

        }

        function getCampaignId(campaignName) {
            var optlyData = window.optimizely.get('data');
            for (var campaign in optlyData.campaigns) {
                if (optlyData.campaigns[campaign].name === campaignName) {
                    return optlyData.campaigns[campaign].id;
                }
            }
        }

        function getPriority(campaignId, experimentId) {
            var experimentPriorities = optlyData.campaigns[campaignId].decisionMetadata.experimentPriorities,
                priority;
            experimentPriorities.forEach(function (el, index) {
                el.forEach(function (i) {
                    if (i.entityId === experimentId) {
                        priority = index;
                        return false;
                    }
                });
            });
            return priority;
        }

    }

}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    

PluginManager.registerWidget({
      widgetId: '11336134877',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "11336134877";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"dock_header_subscribe_link_1","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_2","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_3","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_4","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_5","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_subscribe_link_cta","default_value":"Subscribe"},{"name":"dock_header_offer_copy","default_value":"Just <s>$15.99</s> $9.99 a month."},{"name":"dock_header_meter_copy","default_value":"You have <strong>{{articleLeft}} free {{articleNoun}}</strong> remaining."},{"name":"dock_header_collapsed_cta","default_value":"Expand"},{"name":"dock_header_expanded_cta","default_value":"Collapse"},{"name":"dock_campaign_name","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"dock_campaign_code_1","default_value":""},{"name":"dock_campaign_code_2","default_value":""},{"name":"dock_campaign_code_3","default_value":""},{"name":"dock_campaign_code_4","default_value":""},{"name":"dock_campaign_code_5","default_value":""},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>One subscription.</span>\n            <span>Endless discovery.</span>\n          </p>\n          <p class=\"cardMessage\">\n            For just <s>$15.99</s> $9.99 a month.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">Subscribe</div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        // dock_multilink with ABRA support

var EXTENSION_NAME = 'Dock Multilink with ABRA support';
var EXTENSION_DATA_NAME = 'dock';
var NYT_ID = window.NYToptly && window.NYToptly.debugData && window.NYToptly.debugData[EXTENSION_DATA_NAME].nytID || 'optly_dock';
var opt_console = window.NYToptly.opt_console;

var getMeterCopy = function(msg, lastMsg) {
    var delta = Math.max(window.NYToptly.meter.totalArticleCount - window.NYToptly.meter.pageCount, 0);
    var thing = (delta > 1) ? 'articles' : 'article';
    var message = lastMsg;

    if (delta > 0) {
        message = msg.replace(/{{articleLeft}}/, delta).replace(/{{articleNoun}}/, thing);
    }

    return message;
};

var setUpCampaignCodeToLinks = function(meter_count) {

    var url = widget['dock_header_subscribe_link_' + meter_count] || '',
        subscribeUrlDesktop = url,
        subscribeUrlMobile = url,
        separator = '?',
        campaignIds = [];

    if (!!widget['dock_campaign_code_' + meter_count]) {
        campaignIds = widget['dock_campaign_code_' + meter_count].replace(' ', '').split(',');
    }

    if (url.indexOf('?') >= 0) {
        separator = '&';
    }

    if (campaignIds.length > 0 && url.indexOf('campaignId') === -1) {
        subscribeUrlDesktop = url + separator + 'campaignId=' + campaignIds[0];
        subscribeUrlMobile = url + separator + 'campaignId=' + campaignIds[1];
    }

    return {
        desktop: subscribeUrlDesktop,
        mobile: subscribeUrlMobile
    };

};

var abraValue = null;
if (!!widget.abra_test && !!NYTD.Abra) {
    abraValue = NYTD.Abra(widget.abra_test);
}

var setAbraValueToUrl = function(url) {
    if (abraValue === null || !url) {
        return url;
    }
    var separator = '?';
    if (url.indexOf('?') >= 0) {
        separator = '&';
    }
    url += separator + widget.abra_test + '=' + abraValue;
    return url;
};

function mktInfo() {
    return "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + NYT_ID + ", creative: " + EXTENSION_NAME + ", source: optimizely, creator: " + widget.creator + "</span>";
}

widget.dock_content_html = mktInfo() + widget.dock_content_html;
window.NYToptly = window.NYToptly || {};
var meter_count = window.NYToptly.meter && window.NYToptly.meter.pageCount;
var counted = window.NYToptly.meter && window.NYToptly.meter.counted;
var subscribeUrl = setUpCampaignCodeToLinks(meter_count);
window.NYToptly.subscribeURL = setAbraValueToUrl(subscribeUrl.desktop);
window.NYToptly.subscribeURLMobile = setAbraValueToUrl(subscribeUrl.mobile);
window.NYToptly.vi_dock = {};
window.NYToptly.vi_dock.setAbraValueToUrl = setAbraValueToUrl;
if ((window.location.href.indexOf('mobile.nytimes') > -1) || (window.screen.width < 768)) {
    window.NYToptly.vi_dock.subscribeURL = setAbraValueToUrl(subscribeUrl.mobile);
} else {
    window.NYToptly.vi_dock.subscribeURL = setAbraValueToUrl(subscribeUrl.desktop);
}
window.NYToptly.vi_dock.subscribeCTA = widget.dock_subscribe_link_cta;
window.NYToptly.vi_dock.headerCollapsedCTA = widget.dock_header_collapsed_cta;
window.NYToptly.vi_dock.headerExpandedCTA = widget.dock_header_expanded_cta;
window.NYToptly.vi_dock.offerCopy = widget.dock_header_offer_copy;
window.NYToptly.vi_dock.meterCopy = getMeterCopy(widget.dock_header_meter_copy, 'This is your <strong>last free article.</strong>');
window.NYToptly.vi_dock.campaignName = widget.dock_campaign_name;

var dock_config = { size: [], minimized: [] };

dock_config.size[1] = { counted: "standard",  uncounted: "standard"  };
dock_config.size[2] = { counted: "standard",  uncounted: "standard"  };
dock_config.size[3] = { counted: "expanded",  uncounted: "standard"  };
dock_config.size[4] = { counted: "expanded",  uncounted: "standard"  };
dock_config.size[5] = { counted: "expanded",  uncounted: "standard"  };

dock_config.minimized[1] = { counted: true,  uncounted: true  };
dock_config.minimized[2] = { counted: true,  uncounted: true  };
dock_config.minimized[3] = { counted: true,  uncounted: true  };
dock_config.minimized[4] = { counted: true,  uncounted: true  };
dock_config.minimized[5] = { counted: true,  uncounted: true  };

window.NYToptly.dock_config = dock_config;

if (typeof window.NYToptly.vi_dock_function == 'function') {
    window.NYToptly.vi_dock_function();
}

// to maintain backwards compatibility, only set .vi_dock.size and .vi_dock.minimized if
// not already done in vi_dock_function
var countedStr = counted ? "counted" : "uncounted";
var index = [meter_count < 5? meter_count : 5];

if(typeof window.NYToptly.vi_dock.size === "undefined") {
    window.NYToptly.vi_dock.size      = dock_config.size[index][countedStr];
}
if(typeof window.NYToptly.vi_dock.minimized === "undefined") {
    window.NYToptly.vi_dock.minimized = dock_config.minimized[index][countedStr];
}

if (window.NYToptly.meter.showGateway) {
    window.NYToptly.vi_dock.shouldShow = false;
}
else if (typeof window.NYToptly.vi_dock.shouldShow === 'undefined') {
    window.NYToptly.vi_dock.shouldShow = true;
}

var utils = optimizely.get('utils');
var event = new CustomEvent('vi_dock');
if (window.NYToptly.vi_dock.shouldShow) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.dock_content_css;
    document.getElementsByTagName("head")[0].appendChild(style);

    utils.waitForElement('.optimizelyOK.vi_dock').then(function() {
        var content = document.querySelector('.optimizelyOK.vi_dock');
        content.innerHTML = widget.dock_content_html;
        opt_console.log('[Optimizely INFO] Dock Multilink campaign name: ' + widget.dock_campaign_name);
        window.dispatchEvent(event);
        opt_console.log(window.NYToptly.vi_dock.campaignName);

        var cardLink = document.querySelector('.card a');
        if (cardLink && cardLink.href) {
            cardLink.href = window.NYToptly.subscribeURL;
        }

        window['optimizely'].push({
            type: "event",
            eventName: "dock_impression",
            tags: {
                nytID: NYT_ID
            }
        });
    });
} else {
    window.dispatchEvent(event);
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "11336134877";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"dock_header_subscribe_link_1","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_2","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_3","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_4","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_header_subscribe_link_5","default_value":"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html"},{"name":"dock_subscribe_link_cta","default_value":"Subscribe"},{"name":"dock_header_offer_copy","default_value":"Just <s>$15.99</s> $9.99 a month."},{"name":"dock_header_meter_copy","default_value":"You have <strong>{{articleLeft}} free {{articleNoun}}</strong> remaining."},{"name":"dock_header_collapsed_cta","default_value":"Expand"},{"name":"dock_header_expanded_cta","default_value":"Collapse"},{"name":"dock_campaign_name","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"dock_campaign_code_1","default_value":""},{"name":"dock_campaign_code_2","default_value":""},{"name":"dock_campaign_code_3","default_value":""},{"name":"dock_campaign_code_4","default_value":""},{"name":"dock_campaign_code_5","default_value":""},{"name":"dock_content_html","default_value":"<div class=\"card\">\n  <a href=\"https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html\">\n    <div class=\"cardContent\">\n      <div class=\"cardMessaging\">\n        <div class=\"logo\"></div>\n        <div>\n          <p class=\"cardHeading\">\n            <span>One subscription.</span>\n            <span>Endless discovery.</span>\n          </p>\n          <p class=\"cardMessage\">\n            For just <s>$15.99</s> $9.99 a month.\n          </p>\n        </div>\n      </div>\n      <div class=\"subscribeButton\">Subscribe</div>\n    </div>\n  </a>\n</div>"},{"name":"dock_content_css","default_value":".optimizelyOK.vi_dock .card {\n  position: relative;\n  height: 140px;\n  max-width: $media-max-width;\n  border-radius: 6px;\n  background-color: #9bcbff;\n  margin: auto;\n}\n.optimizelyOK.vi_dock .cardContent {\n\tfont-size: 15px;\n  line-height: 17px;\n  color: #000;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 14px 30px 15px 20px;\n  font-family: \"nyt-franklin\";\n}\n.optimizelyOK.vi_dock .cardContent .logo {\n  display: none;\n  background: url(https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64.svg) no-repeat;\n  background-size: 140px;\n  width: 140px;\n  height: 19px;\n  margin-right: 40px;\n}\n.optimizelyOK.vi_dock .cardHeading {\n\tfont-size: 18px;\n  line-height: 20px;\n  font-family: nyt-karnak;\n  font-weight: 700;\n}\n.optimizelyOK.vi_dock .cardHeading span {\n  display: block;\n  white-space: nowrap;\n}\n.optimizelyOK.vi_dock .cardHeading span::after {\n  content: '  ';\n  white-space: pre-line;\n}\n.optimizelyOK.vi_dock .cardMessage {\n  margin: 4px 0 10px;\n}\n\n.optimizelyOK.vi_dock .subscribeButton {\n\tfont-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 13px 17px 11px;\n  color: #fff;\n  background-color: #000;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n@media screen and (min-width: 600px) {\n  .optimizelyOK.vi_dock .cardContent {\n\t\tfont-size: 18px;\n\t  line-height: 20px;\n    padding: 20px 30px;\n  }\n  .optimizelyOK.vi_dock .cardContent .logo {\n    display: inline-block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n  \tfont-size: 20px;\n\t  line-height: 22px;\n  }\n  .optimizelyOK.vi_dock .cardMessage {\n    margin-bottom: 1px;\n  }\n}\n@media screen and (min-width: 701px) {\n  .optimizelyOK.vi_dock .cardContent .logo {\n    background-size: 160px;\n    width: 160px;\n    height: 21px;\n  }\n\n  .optimizelyOK.vi_dock .cardHeading span {\n    display: inline;\n  }\n}\n@media screen and (min-width: 1024px) {\n\t.optimizelyOK.vi_dock .cardContent {\n   \tfont-size: 20px;\n\t  line-height: 20px;\n    padding-left: 45px;\n    padding-right: 50px;\n  } \n  .optimizelyOK.vi_dock .cardMessaging {\n    display: flex;\n  }\n  .optimizelyOK.vi_dock .cardHeading {\n    font-size: 24px;\n\t  line-height: 26px;\n  }\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: '11341982037',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "11341982037";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"button_label","default_value":"Subscribe"},{"name":"subscribe_url","default_value":""},{"name":"mobile_url","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-11341982037';
widget._styleTag.innerHTML = '. {    background-color: #fff575;    border-bottom: 1px solid #e0d769;    color: #555;    padding: 10px;    font-weight: bold;    text-align: center;    font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var abraValue = null;
if (!!widget.abra_test && !!NYTD.Abra) {
    abraValue = NYTD.Abra(widget.abra_test);
}
var setCookie = function(c_name,value,exdays,c_domain) {
    c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
};

var setAbraValueToUrl = function(url) {
    if (abraValue === null || !url) {
        return url;
    }
    var separator = '?';
    if (url.indexOf('?') >= 0) {
        separator = '&';
    }
    url += separator + widget.abra_test + '=' + abraValue;
    return url;
};


window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_bar1 = {};
window.NYToptly.vi_bar1.button_label = widget.button_label;
window.NYToptly.vi_bar1.subscribe_url = setAbraValueToUrl(widget.subscribe_url);

if (widget.mobile_url && window.screen.width < 768) {
    window.NYToptly.vi_bar1.subscribe_url = setAbraValueToUrl(widget.mobile_url);
}

if (typeof window.NYToptly.vi_bar1_function === 'function') {
    window.NYToptly.vi_bar1_function();
}
if (abraValue !== null) {
    setCookie(widget.abra_test, abraValue, 10);
}

window.NYToptly.opt_console.log('bar 1 extension');

var vi_bar1_event = new CustomEvent('vi_bar1');
window.dispatchEvent(vi_bar1_event);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "11341982037";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"button_label","default_value":"Subscribe"},{"name":"subscribe_url","default_value":""},{"name":"mobile_url","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-11341982037');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '11343910525',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "11343910525";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"creative_src","default_value":"https://mwcm.nyt.com/.rest/mkt/creatives/v1/a101880c-0489-4bb8-87a9-95d6e59b2456/gateway"},{"name":"nytId","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"abra_campaign","default_value":""},{"name":"external_js_1","default_value":"https://mwcm.nyt.com/.resources/mkt-wcm/dist/common.js"},{"name":"external_js_2","default_value":"https://mwcm.nyt.com/.resources/mkt-wcm/dist/templates/pages/lp/gbb2/js/src/main.js"},{"name":"inline_js","default_value":""},{"name":"external_css_1","default_value":"https://mwcm.nyt.com/.resources/mkt-wcm/dist/templates/pages/lp/gbb2/css/main.css"},{"name":"external_css_2","default_value":""},{"name":"containerHTML","default_value":"<script type=\"text/json\" id=\"mwcm-server-data\">\n{ \"env\": \"prod\", \"isAuthor\": true, \"isEditMode\": false, \"isPreview\": true, \"templateBuildId\": \"1284\", \"creativeUuid\": \"364e8c16-ca09-4602-b203-a0dd4b008a10\", \"offers\": [{\"promoOptions\":[{\"billingTiers\":[{\"durationDays\":28,\"recurrence\":13,\"totalPrice\":4,\"tierNumber\":1},{\"durationDays\":28,\"recurrence\":-1,\"totalPrice\":15,\"tierNumber\":2}],\"productCode\":\"XPASS\",\"segmentId\":2,\"promoCode\":\"20000188820\",\"currencyCode\":\"USD\",\"productType\":\"DIGI\",\"productName\":\"Basic Digital Access\"}]},{\"promoOptions\":[{\"billingTiers\":[{\"durationDays\":28,\"recurrence\":13,\"totalPrice\":12.5,\"tierNumber\":1},{\"durationDays\":28,\"recurrence\":-1,\"totalPrice\":25,\"tierNumber\":2}],\"productCode\":\"MAX_ADA_CR\",\"segmentId\":2,\"promoCode\":\"20000148500\",\"currencyCode\":\"USD\",\"productType\":\"DIGI\",\"productName\":\"All Access\"}]},{\"promoOptions\":[{\"billingTiers\":[{\"durationDays\":28,\"recurrence\":13,\"totalPrice\":14.5,\"tierNumber\":1},{\"durationDays\":28,\"recurrence\":-1,\"totalPrice\":29,\"tierNumber\":2}],\"productCode\":\"SO\",\"segmentId\":null,\"promoCode\":\"P55O\",\"currencyCode\":\"USD\",\"productType\":\"HD\",\"productName\":\"THE NEW YORK TIMES HD SUNDAYS\"}]}], \"features\": { \"instance\": {\"FF-MWCM-3710--frontendMonitoring\":false,\"FF-MWCM-3733--requestFeatureFlags\":true,\"FF-MWCM-3856\":true,\"FF-MWCM-2389\":false}, \"codebase\": {\"frontendMonitoring\": \"FF-MWCM-3710--frontendMonitoring\"} }, \"linksInNewTab\": false, \"userInfoUrl\": \"https://www.nytimes.com/svc/web-products/userinfo-v3.json\", \"sumoLogicUrl\": \"https://collectors.sumologic.com/receiver/v1/http/ZaVnC4dhaV0-HeboJ6818lTuKxRBececk4jDqTCENG6P3EEnbph5RHWdBPvQT3HRVFQSGDmsPzXTyYrsnJS80IznOeaWt-m6EIiNmwnfwv6WiKXpRRMNYg==\", \"sumoLogicHostName\": \"https://mwcm-author.prd.nytimes.com\" }\n</script>"},{"name":"inline_css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var opt_console = window.NYToptly.opt_console;
var logPrefix = "[Optimizely Gateway] ";

var utils = optimizely.get('utils'),
    viEvent = new CustomEvent('vi_dockgateway'),
    request = new XMLHttpRequest();

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_dockgateway = {};

var nytId         = (NYToptly.debugData && NYToptly.debugData.nytId) || widget.nytId;
var inlineJs      = widget.inline_js;
var inlineCss     = widget.inline_css;
var abraCampaign  = widget.abra_campaign;
var externalJs_1  = widget.external_js_1;
var externalJs_2  = widget.external_js_2;
var creativeLink  = widget.creative_src;
var externalCss_1 = widget.external_css_1;
var externalCss_2 = widget.external_css_2;
var name          = 'Gateway';
var inlineHtml    = widget.containerHTML;
var readyFlags = {'externalCss_1':1, 'externalCss_2':1, 'inlineCss':1, 'customFonts':1};

window.NYToptly.vi_dockgateway.campaignName = nytId;

if (abraCampaign) {
    var allocation = window.NYTD.Abra(abraCampaign);
    if (allocation) {
        var sep = (creativeLink.indexOf('?') === -1) ? '?' : '&';
        creativeLink += sep + abraCampaign + '=' + allocation;
        opt_console.log(logPrefix + "Magnolia link modified to get ABRA allocation: " + creativeLink);
    }
}

request.open('GET', creativeLink, true);
request.send();
request.addEventListener('load', function() {
    addCreative(request.responseText);
});
request.addEventListener('error', function() {
    opt_console.log(logPrefix + 'Magnolia request failed -- triggering the default!');
    window.NYToptly.vi_dockgateway = {};
    window.dispatchEvent(viEvent);
});

function loadFonts() {
    if (typeof window.FontFace === 'undefined') {
        opt_console.log(logPrefix + 'FontFace is not available -- skipping custom fonts');
        readyFlags.customFonts = 1;
        return;
    }
    readyFlags.customFonts = 0;
    var customFonts = [
        ['nyt-karnak-display-130124', 400, 'normal', 'https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/fonts/nyt-karnak-display-130124-400-normal.woff'],
        ['nyt-franklin', 300, 'normal', 'https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/fonts/nyt-franklin-300-normal.woff'],
        ['nyt-franklin', 500, 'normal', 'https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/fonts/nyt-franklin-500-normal.woff'],
        ['nyt-franklin', 700, 'normal', 'https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/fonts/nyt-franklin-700-normal.woff'],
        ['nyt-franklin', 500, 'italic', 'https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/fonts/nyt-franklin-500-italic.woff']
    ];

    customFonts.forEach(function(v, i) {
        var newFont = new FontFace(
            v[0], 'url(' + v[3] + ')', {
                style: v[2],
                weight: v[1]
            }
        );
        document.fonts.add(newFont);
        newFont.load();
    });

    document.fonts.ready.then(function(fontFaceSet) {
        readyFlags.customFonts = 1;
        opt_console.log(logPrefix + 'Custom FontFaces loaded.');
    });
}
loadFonts();

function loadScript(url) {
    if (url !== '') {
        var script = document.createElement('script');
        script.onload = function() {
            opt_console.log(logPrefix + "Loaded script: " + url);
        };
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

function loadLink(url, flagName) {
    if (url !== '') {
        readyFlags[flagName] = 0;

        var link = document.createElement('link');
        link.onload = function() {
            opt_console.log(logPrefix + "Loaded link: " + url);
            readyFlags[flagName] = 1;
        };
        link.href = url;
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}


function loadStyle(css, flagName) {
    if (css !== '') {
        readyFlags[flagName] = 0;
        var style = document.createElement('style');
        style.onload = function() {
            opt_console.log(logPrefix + "[OptimizelyNYT] Loaded style tag with content from: " + flagName);
            readyFlags[flagName] = 1;
        };
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}


function addCreative(creative) {

    var mktInfo = getMktInfo();

    utils.waitForElement('.optimizelyOK.vi_dockgateway').then(function() {
        loadStyle(inlineCss, "inlineCss");
        loadLink(externalCss_1, "externalCss_1");
        loadLink(externalCss_2, "externalCss_2");

        serverData = creative.replace(/[\s\S]*(<script[^>]*id="mwcm-server-data"[^>]*>)/, '$1')
        serverData = serverData.replace(/<\/script>[\S\s]*/, '</script>')
        inlineHtml = inlineHtml.replace(/<script[^>]*id="mwcm-server-data"[^>]*>[^<]*<\/script>/, '');

        creative = creative.replace(/[\s\S]*<body[^>]*>/, '');
        creative = creative.replace(/<\/body[\s\S]*/, '');

        var container = document.querySelector('.optimizelyOK.vi_dockgateway');
        container.innerHTML = mktInfo + serverData + inlineHtml + creative;

        opt_console.log(logPrefix + 'Loaded ' + nytId);

        if (inlineJs !== "") {
            eval(inlineJs);
        }
        loadScript(externalJs_1);
        loadScript(externalJs_2);

        // because of CSS latency
        NYToptly.runWhenReady(
            function() {
                return readyFlags.inlineCss && readyFlags.externalCss_1 && readyFlags.externalCss_2 && readyFlags.customFonts;
            },
            function() {
                window.dispatchEvent(viEvent);
            },
            null, 100, 100
        );

    });

}

function getMktInfo() {
    return "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + nytId + ", creative: Gateway, source: optimizely, creator: " + widget.creator + "</span>";

}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "11343910525";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"creative_src","default_value":"https://mwcm.nyt.com/.rest/mkt/creatives/v1/a101880c-0489-4bb8-87a9-95d6e59b2456/gateway"},{"name":"nytId","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"abra_campaign","default_value":""},{"name":"external_js_1","default_value":"https://mwcm.nyt.com/.resources/mkt-wcm/dist/common.js"},{"name":"external_js_2","default_value":"https://mwcm.nyt.com/.resources/mkt-wcm/dist/templates/pages/lp/gbb2/js/src/main.js"},{"name":"inline_js","default_value":""},{"name":"external_css_1","default_value":"https://mwcm.nyt.com/.resources/mkt-wcm/dist/templates/pages/lp/gbb2/css/main.css"},{"name":"external_css_2","default_value":""},{"name":"containerHTML","default_value":"<script type=\"text/json\" id=\"mwcm-server-data\">\n{ \"env\": \"prod\", \"isAuthor\": true, \"isEditMode\": false, \"isPreview\": true, \"templateBuildId\": \"1284\", \"creativeUuid\": \"364e8c16-ca09-4602-b203-a0dd4b008a10\", \"offers\": [{\"promoOptions\":[{\"billingTiers\":[{\"durationDays\":28,\"recurrence\":13,\"totalPrice\":4,\"tierNumber\":1},{\"durationDays\":28,\"recurrence\":-1,\"totalPrice\":15,\"tierNumber\":2}],\"productCode\":\"XPASS\",\"segmentId\":2,\"promoCode\":\"20000188820\",\"currencyCode\":\"USD\",\"productType\":\"DIGI\",\"productName\":\"Basic Digital Access\"}]},{\"promoOptions\":[{\"billingTiers\":[{\"durationDays\":28,\"recurrence\":13,\"totalPrice\":12.5,\"tierNumber\":1},{\"durationDays\":28,\"recurrence\":-1,\"totalPrice\":25,\"tierNumber\":2}],\"productCode\":\"MAX_ADA_CR\",\"segmentId\":2,\"promoCode\":\"20000148500\",\"currencyCode\":\"USD\",\"productType\":\"DIGI\",\"productName\":\"All Access\"}]},{\"promoOptions\":[{\"billingTiers\":[{\"durationDays\":28,\"recurrence\":13,\"totalPrice\":14.5,\"tierNumber\":1},{\"durationDays\":28,\"recurrence\":-1,\"totalPrice\":29,\"tierNumber\":2}],\"productCode\":\"SO\",\"segmentId\":null,\"promoCode\":\"P55O\",\"currencyCode\":\"USD\",\"productType\":\"HD\",\"productName\":\"THE NEW YORK TIMES HD SUNDAYS\"}]}], \"features\": { \"instance\": {\"FF-MWCM-3710--frontendMonitoring\":false,\"FF-MWCM-3733--requestFeatureFlags\":true,\"FF-MWCM-3856\":true,\"FF-MWCM-2389\":false}, \"codebase\": {\"frontendMonitoring\": \"FF-MWCM-3710--frontendMonitoring\"} }, \"linksInNewTab\": false, \"userInfoUrl\": \"https://www.nytimes.com/svc/web-products/userinfo-v3.json\", \"sumoLogicUrl\": \"https://collectors.sumologic.com/receiver/v1/http/ZaVnC4dhaV0-HeboJ6818lTuKxRBececk4jDqTCENG6P3EEnbph5RHWdBPvQT3HRVFQSGDmsPzXTyYrsnJS80IznOeaWt-m6EIiNmwnfwv6WiKXpRRMNYg==\", \"sumoLogicHostName\": \"https://mwcm-author.prd.nytimes.com\" }\n</script>"},{"name":"inline_css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: '11361190077',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "11361190077";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"subscribe_url","default_value":"https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-11361190077';
widget._styleTag.innerHTML = '. {    background-color: #fff575;    border-bottom: 1px solid #e0d769;    color: #555;    padding: 10px;    font-weight: bold;    text-align: center;    font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var abraValue = null;
if (!!widget.abra_test && !!NYTD.Abra) {
    abraValue = NYTD.Abra(widget.abra_test);
}

var setAbraValueToUrl = function(url) {
    if (abraValue === null || !url) {
        return url;
    }
    var separator = '?';
    if (url.indexOf('?') >= 0) {
        separator = '&';
    }
    url += separator + widget.abra_test + '=' + abraValue;
    return url;
};

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_inline = {};
window.NYToptly.vi_inline.subscribe_url = setAbraValueToUrl(widget.subscribe_url);
window.NYToptly.vi_inline.shouldShow = true;

if (typeof window.NYToptly.vi_inline_message_function === 'function') {
    window.NYToptly.vi_inline_message_function();
}

var vi_inline_event = new CustomEvent('vi_inline');
window.dispatchEvent(vi_inline_event);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "11361190077";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"subscribe_url","default_value":"https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-11361190077');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '11390470128',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "11390470128";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"message_type","default_value":"WelcomeAd"},{"name":"creator","default_value":"nytExo"},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"custom_js","default_value":""},{"name":"welcome_content_html","default_value":"<a\n    class=\"welcomeAdContent\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n    href=\"%%CLICKTHRU1%%\"\n  >\n    <h3 class=\"welcomeAdTitle\">Covering stories from up close.</h3>\n    <p>Firsthand reporting that brings you the facts.</p>\n    <p class=\"welcomeAdSecondary\">Subscribe to The New York Times.</p>\n    <span class=\"welcomeAdCta\">See my options</span>\n  </a>"},{"name":"welcome_content_css","default_value":"#vi_welcome_close {\n  position: absolute;\n  border-radius: 50%;\n  background-clip: padding-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0,0,0,0.15);\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  line-height: normal;\n  vertical-align: middle;\n}\n#vi_welcome_close:hover {\n    background-color: #333;\n}\n#vi_welcome_close:before {\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#vi_welcome_close:after {\n    -webkit-transform: rotate(135deg);\n    -ms-transform: rotate(135deg);\n    transform: rotate(135deg);\n}\n#vi_welcome_close:before,\n#vi_welcome_close:after {\n    content: '';\n    position: absolute;\n    display: block;\n    background-color: #fff;\n    top: 10px;\n    left: 6px;\n    width: 10px;\n    height: 2px;\n}\n\n.welcomeAdContent {\n\tdisplay: block;\n  padding: 65px 40px 15px;\n  height: 240px;\n  background: url('https://static01.nyt.com/subscriptions/Multiproduct/assets_pa2017/images/logo_nyt_white.svg') no-repeat bottom 15px right 15px #3d719b;\n  background-size: 180px;\n  font-weight: lighter;\n  font-size: 28px;\n  font-family: franklin-normal-600, sans-serif;\n  color: #fff;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.welcomeAdTitle {\n\tfont-weight: bold;\n}\n\n.welcomeAdSecondary {\n\tmargin: 55px 0 15px;\n  font-weight: bold;\n  font-size: 24px;\n  color: #f3fe86;\n}\n\n.welcomeAdCta {\n\tfloat: left;\n  width: 120px;\n  height: 32px;\n  background: #f3fe86;\n  border-radius: 3px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 34px;\n  color: black;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        window.NYToptly = window.NYToptly || {};
var opt_console = window.NYToptly.opt_console;
var utils = optimizely.get('utils');

var EXTENSION_NAME = 'Welcome Ad';
var EXTENSION_DATA_NAME = 'welcome_ad';
var NYT_ID = window.NYToptly.debugData[EXTENSION_DATA_NAME].nytID;

//TODO: move to project.js?
window.NYToptly.getCookie = function(a, b) {
    b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
};

var getCountryText = function(html) {
    var re = /%%COUNTRY%%/g;
    var returnHTML = html;
    if (window.NYToptly.getQueryParameter("location")) {
        returnHTML = returnHTML.replace(re, window.NYToptly.getQueryParameter("location"));
    } else if (window.optimizely.data.visitor && window.optimizely.data.visitor.location != undefined) {
        returnHTML = returnHTML.replace(re, window.optimizely.data.visitor.location.country);
    } else {
        returnHTML = returnHTML.replace(re, "US");
    }
    return returnHTML;
};

var abraValue = null;
if (!!widget.abra_test && !!NYTD.Abra) {
    abraValue = NYTD.Abra(widget.abra_test);
}

var setAbraValueToUrl = function(url) {
    if (abraValue === null || !url) {
        return url;
    }
    var separator = '?';
    if (url.indexOf('?') >= 0) {
        separator = '&';
    }
    url += separator + widget.abra_test + '=' + abraValue;
    return url;
};

var event = new CustomEvent('vi_welcome');
var showWelcomeFlag = false;
var rejectReason = '';

widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU1%%/g, setAbraValueToUrl(widget.click1));
widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU2%%/g, setAbraValueToUrl(widget.click2));
widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU3%%/g, setAbraValueToUrl(widget.click3));
widget.welcome_content_html = widget.welcome_content_html.replace(/%%CLICKTHRU4%%/g, setAbraValueToUrl(widget.click4));
widget.welcome_content_html = getCountryText(widget.welcome_content_html);

if (widget.welcome_content_html.indexOf('adxInfo mktInfo')) {
    widget.welcome_content_html = widget.welcome_content_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
}

var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + NYT_ID + ", creative: WelcomeAd, source: optimizely, creator: " + widget.creator + "</span>";

widget.welcome_content_html = mktInfo + widget.welcome_content_html;

var showWelcomeAd = function() {
    window.NYToptly.vi_welcome = {
        shouldShow: true,
        campaignName: NYT_ID
    };
    var style = document.createElement("style");
    var agent_id = window.NYToptly.getCookie('nyt-a');
    style.type = "text/css";
    style.innerHTML = widget.welcome_content_css;
    document.getElementsByTagName("head")[0].appendChild(style);
    utils.waitForElement('.vi_welcome.optimizelyOK').then(function() {
        var content = document.querySelector('.vi_welcome');
        content.innerHTML = widget.welcome_content_html;
        if (typeof window.NYToptly.vi_welcome_function === 'function') {
            window.NYToptly.vi_welcome_function();
        }
        opt_console.log('[Optimizely INFO] Welcome Ad: Welcome campaign name: ' + NYT_ID);
        window.dispatchEvent(event);
        opt_console.log('[Optimizely INFO] Welcome Ad: vi_welcome event dispatched');

        if (NYToptly.vi_welcome.shouldShow) {
            window['optimizely'].push({
                type: "event",
                eventName: "welcome_ad_impression_vi",
                tags: {
                    codename: NYT_ID,
                    agentId: agent_id
                }
            });
        }
    });

};

var rejectWelcomeAd = function(message) {
    window.NYToptly.vi_welcome = {
        shouldShow: false
    };
    message = message || 'Welcome Ad rejected';
    opt_console.log('[OptimizelyNYT] Welcome Ad: ' + message);
    window.dispatchEvent(event);
};

var behavior = optimizely.get('behavior');
var welcome_query = function(hours) {
    return behavior.query({
        "version": "0.2",
        "filter": [{
            "field": ["name"],
            "comparator": "in",
            "value": ["welcomead_impression", "welcome_ad_impression_vi"]
        }, {
            "field": ["age"],
            "comparator": "lt",
            "value": hours * 60 * 60 * 1000
        }, {
            "field": ["tags", "codename"],
            "value": NYT_ID
        }],
        "reduce": {
            "aggregator": "count"
        }
    });
};

var welcome_ads_small_cap = welcome_query(widget.session_cap_hours);
var welcome_ads_long_cap = welcome_query(24 * widget.freq_cap_days);
if (welcome_ads_small_cap < widget.session_cap) {
    opt_console.log(welcome_ads_small_cap + " was less than session cap of " + widget.session_cap)
}
if (widget.freq_cap_number !== "" && widget.freq_cap_days !== "") {
    if (welcome_ads_small_cap < widget.session_cap && welcome_ads_long_cap < widget.freq_cap_number) {
        showWelcomeFlag = true;
    } else {
        rejectReason = "Failed Frequency Cap: " + welcome_ads_long_cap + ", " + widget.freq_cap_number;
    }
} else if (welcome_ads_small_cap < widget.session_cap) {
    showWelcomeFlag = true;
} else {
    rejectReason = 'Welcome Ad already shown';
}

if (showWelcomeFlag) {
    showWelcomeAd();
} else {
    var debugFlag = (window.location.search.indexOf("debug=1") > -1 || document.cookie.indexOf('welcome_debug') > -1);
    if (debugFlag) {
        opt_console.log('[OptimizelyNYT] Welcome Ad: Forcing Welcome Ad despite of: ' + rejectReason);
        showWelcomeAd();
    } else {
        rejectWelcomeAd(rejectReason)
    }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "11390470128";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"abra_test","default_value":""},{"name":"message_type","default_value":"WelcomeAd"},{"name":"creator","default_value":"nytExo"},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"custom_js","default_value":""},{"name":"welcome_content_html","default_value":"<a\n    class=\"welcomeAdContent\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n    href=\"%%CLICKTHRU1%%\"\n  >\n    <h3 class=\"welcomeAdTitle\">Covering stories from up close.</h3>\n    <p>Firsthand reporting that brings you the facts.</p>\n    <p class=\"welcomeAdSecondary\">Subscribe to The New York Times.</p>\n    <span class=\"welcomeAdCta\">See my options</span>\n  </a>"},{"name":"welcome_content_css","default_value":"#vi_welcome_close {\n  position: absolute;\n  border-radius: 50%;\n  background-clip: padding-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0,0,0,0.15);\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  line-height: normal;\n  vertical-align: middle;\n}\n#vi_welcome_close:hover {\n    background-color: #333;\n}\n#vi_welcome_close:before {\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#vi_welcome_close:after {\n    -webkit-transform: rotate(135deg);\n    -ms-transform: rotate(135deg);\n    transform: rotate(135deg);\n}\n#vi_welcome_close:before,\n#vi_welcome_close:after {\n    content: '';\n    position: absolute;\n    display: block;\n    background-color: #fff;\n    top: 10px;\n    left: 6px;\n    width: 10px;\n    height: 2px;\n}\n\n.welcomeAdContent {\n\tdisplay: block;\n  padding: 65px 40px 15px;\n  height: 240px;\n  background: url('https://static01.nyt.com/subscriptions/Multiproduct/assets_pa2017/images/logo_nyt_white.svg') no-repeat bottom 15px right 15px #3d719b;\n  background-size: 180px;\n  font-weight: lighter;\n  font-size: 28px;\n  font-family: franklin-normal-600, sans-serif;\n  color: #fff;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.welcomeAdTitle {\n\tfont-weight: bold;\n}\n\n.welcomeAdSecondary {\n\tmargin: 55px 0 15px;\n  font-weight: bold;\n  font-size: 24px;\n  color: #f3fe86;\n}\n\n.welcomeAdCta {\n\tfloat: left;\n  width: 120px;\n  height: 32px;\n  background: #f3fe86;\n  border-radius: 3px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 34px;\n  color: black;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: '13648660017',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"bar1-mom\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "13648660017";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"https://capi.dev.nytimes.com/metered_assets"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var EXTENSION_NAME = 'Bar1';
var vi_bar1_event = new CustomEvent('vi_bar1');
var NYT_ID = window.NYToptly.debugData[EXTENSION_NAME.toLowerCase()].nytID;
var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
var creative_src = widget.capi_src;

var opt_console = window.NYToptly.opt_console;

opt_console.log('bar 1 MOM extension:' + creative_src);

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_bar1 = {};
window.NYToptly.vi_bar1.campaignName = NYT_ID;
//


var parseResponse = function (response) {
    // opt_console.log(response);

    window.NYToptly.vi_bar1.subscribe_url = response.barOne.fields.locationLink;
    window.NYToptly.vi_bar1.button_label = response.barOne.fields.cta;

    window.dispatchEvent(vi_bar1_event);
};

request.open('GET', creative_src, true);
request.send();
request.addEventListener('load', function() {
    var jsonResponse = JSON.parse(request.responseText);
    parseResponse(jsonResponse);
});



if (typeof window.NYToptly.vi_bar1_function === 'function') {
    window.NYToptly.vi_bar1_function();
}

opt_console.log('bar 1 MOM: ' + NYT_ID);





      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "13648660017";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"https://capi.dev.nytimes.com/metered_assets"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionElement = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionElement) {
  extensionElement.parentElement.removeChild(extensionElement);
}

      },
    });

PluginManager.registerWidget({
      widgetId: '13737050215',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"dock_mom\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "13737050215";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"https://capi.dev.nytimes.com/metered_assets"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var opt_console = window.NYToptly.opt_console;

var EXTENSION_NAME = 'Dock MOM';
var EXTENSION_DATA_NAME = 'dock';
var vi_dock_event = new CustomEvent('vi_dock');

var NYT_ID = window.NYToptly && window.NYToptly.debugData && window.NYToptly.debugData[EXTENSION_DATA_NAME].nytID || 'optly_dock';
var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
var creative_src = widget.capi_src;

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_dock = {};
window.NYToptly.vi_dock.campaignName = NYT_ID;

// ----- meter patch until header is fixed
var meterCount = window.NYToptly.meter.pageCount;
var separator = (creative_src.indexOf("?")===-1)?"?":"&";
creative_src = creative_src + separator + 'meterCount=' + meterCount;
// ----- End meter patch until header is fixed

//Pass Campaign Name for tracking
creative_src = creative_src + '&optlyCampaignName=' + NYT_ID;

opt_console.log('Dock MOM extension -- creative_src:' + creative_src);

function loadLink(url) {
    if (url !== '') {

        var link = document.createElement('link');
        link.onload = function() {
            opt_console.log("Loaded link: " + url);
        };
        link.href = url;
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

loadLink('https://typeface.nyt.com/css/zam5nzz.css');


var parseResponse = function (response) {


    window.NYToptly.vi_dock.size  = (response.dock.fields.size === 'expandable') ? 'expanded' : 'standard';
    if(typeof response.dock.fields.initialSize === "undefined") {
        window.NYToptly.vi_dock.minimized = true;
    } else {
        window.NYToptly.vi_dock.minimized = (response.dock.fields.initialSize === 'minimized');
    }

    if (window.NYToptly.meter.showGateway || window.NYToptly.meter.gatewayExempt) {
        window.NYToptly.vi_dock.shouldShow = false;
    }
    else if (typeof window.NYToptly.vi_dock.shouldShow === 'undefined') {
        window.NYToptly.vi_dock.shouldShow = true;
    }

    opt_console.log('[Optimizely INFO] Dock Decision --   dockSize: ' + window.NYToptly.vi_dock.size + ',  minimized: ' + window.NYToptly.vi_dock.minimized + ',  shouldShow: ' + window.NYToptly.vi_dock.shouldShow);


    opt_console.log(response);

    window.NYToptly.vi_dock.subscribeURL = response.dock.fields.locationLink;
    window.NYToptly.vi_dock.subscribeCTA = response.dock.fields.cta;
    window.NYToptly.vi_dock.headerCollapsedCTA = response.dock.fields.collapsedCta;
    window.NYToptly.vi_dock.headerExpandedCTA = response.dock.fields.expandedCta;
    window.NYToptly.vi_dock.offerCopy = response.dock.fields.collapsedHeader;
    window.NYToptly.vi_dock.meterCopy = response.dock.fields.expandedHeader;

    if (window.NYToptly.vi_dock.shouldShow) {

        var utils = optimizely.get('utils');

        utils.waitForElement('.optimizelyOK.vi_dock').then(function() {
            var content = document.querySelector('.optimizelyOK.vi_dock');
            content.innerHTML =  response.dock.html;
            opt_console.log('[Optimizely INFO] Dock MOM campaign name: ' + NYT_ID);
            window.dispatchEvent(vi_dock_event);

            var cardLink = document.querySelector('.card a');
            if (cardLink && cardLink.href) {
                cardLink.href = window.NYToptly.subscribeURL;
            }
        });
    } else {
        window.dispatchEvent(vi_dock_event);
    }
};

request.open('GET', creative_src, true);
request.send();
request.addEventListener('load', function() {
    var jsonResponse = JSON.parse(request.responseText);
    parseResponse(jsonResponse);
});





// if (widget.mobile_url && window.screen.width < 768) {
//     window.NYToptly.vi_bar1.subscribe_url = widget.mobile_url;
// }

if (typeof window.NYToptly.vi_dock_function === 'function') {
    window.NYToptly.vi_dock_function();
}

opt_console.log('Dock MOM: ' + NYT_ID);

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "13737050215";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"https://capi.dev.nytimes.com/metered_assets"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionElement = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionElement) {
  extensionElement.parentElement.removeChild(extensionElement);
}

      },
    });

PluginManager.registerWidget({
      widgetId: '13794610209',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"inline-message-mom\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "13794610209";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"hhttps://capi.dev.nytimes.com/metered_assets"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var EXTENSION_DATA_NAME = 'inline_message';
var vi_inline_event = new CustomEvent('vi_inline');
var NYT_ID = window.NYToptly.debugData[EXTENSION_DATA_NAME].nytID;
var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
var creative_src = widget.capi_src;

var opt_console = window.NYToptly.opt_console;

// ----- meter patch until header is fixed
var meterCount = window.NYToptly.meter.pageCount;
var separator = (creative_src.indexOf("?")===-1)?"?":"&";
creative_src = creative_src + separator + 'meterCount=' + meterCount;
// ----- End meter patch until header is fixed

//Pass Campaign Name for tracking
creative_src = creative_src + '&optlyCampaignName=' + NYT_ID;

opt_console.log('Inline Message MOM extension:' + creative_src);

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_inline = {};
window.NYToptly.vi_inline.shouldShow = true;

window.NYToptly.vi_inline.campaignName = NYT_ID;


var parseResponse = function (response) {
    opt_console.log('Parsing Inline Message MOM ');
    opt_console.log(response);

    window.NYToptly.vi_inline.subscribe_url = response.inlineUnit.fields.locationLink;
    window.NYToptly.vi_inline.callToAction = response.inlineUnit.fields.cta;
    window.NYToptly.vi_inline.message = response.inlineUnit.fields.message;

    window.dispatchEvent(vi_inline_event);
};

request.open('GET', creative_src, true);
request.send();
request.addEventListener('load', function() {
    var jsonResponse = JSON.parse(request.responseText);
    parseResponse(jsonResponse);
});



if (typeof window.NYToptly.vi_inline_message_function === 'function') {
    window.NYToptly.vi_inline_message_function();
}

opt_console.log('Inline Message MOM: ' + NYT_ID);





      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "13794610209";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"hhttps://capi.dev.nytimes.com/metered_assets"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionElement = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionElement) {
  extensionElement.parentElement.removeChild(extensionElement);
}

      },
    });

PluginManager.registerWidget({
      widgetId: '14049930290',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"gateway-mom\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "14049930290";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"https://capi.dev.nytimes.com/metered_assets"},{"name":"campaignId","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var EXTENSION_NAME = 'dock_gateway';
var vi_dockgateway_event = new CustomEvent('vi_dockgateway');
var NYT_ID = window.NYToptly.debugData[EXTENSION_NAME.toLowerCase()].nytID;
var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
var creative_src = widget.capi_src;
var campaign_id = widget.campaignId;

var opt_console = window.NYToptly.opt_console;

opt_console.log('Gateway MOM extension:' + creative_src);
opt_console.log('campaign_id:' + campaign_id);

var utils = optimizely.get('utils');
var runwhenReady = window.NYToptly.runWhenReady;

window.NYToptly = window.NYToptly || {};
window.NYToptly.vi_dockgateway = {};


window.NYToptly.vi_dockgateway.campaignName = NYT_ID;
opt_console.log('Gateway MOM: ' + NYT_ID);


function loadScript(url) {
    if (url !== '') {
        var script = document.createElement('script');
        script.onload = function() {
            opt_console.log("Loaded script: " + url);
        };
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}


function loadLink(url) {
    if (url !== '') {

        var link = document.createElement('link');
        link.onload = function() {
            opt_console.log("Loaded link: " + url);

        };
        link.href = url;
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

function replaceCampaignId() {

    opt_console.log('-------- Replace campaignId');

    //Replace campaignIds:
    var collection_bundles = document.querySelectorAll('a.productGBB__button, a.productGBBDigi__button--desktop, a.productGBBHD__button--desktop');


    collection_bundles.forEach(function (value, index) {

        if (value.href.indexOf('campaignId=') > -1) {
            value.href = value.href.replace(/(campaignId=)[^\&]+/, '$1' + campaign_id);
        } else {
            var separator = (value.href.indexOf("?")===-1)?"?":"&";
            value.href = value.href + separator + 'campaignId=' + campaign_id;
        }

    });
}

var addCreative = function(response) {
    opt_console.log(response);

    utils.waitForElement('.optimizelyOK.vi_dockgateway').then(function() {

        loadLink(response.gateway.css);

        var html = response.gateway.html;

        var serverData = html.replace(/[\s\S]*(<script[^>]*id="mwcm-server-data"[^>]*>)/, '$1');
        serverData = serverData.replace(/<\/script>[\S\s]*/, '</script>');

        html = html.replace(/[\s\S]*<body[^>]*>/, '');
        html = html.replace(/<\/body[\s\S]*/, '');

        var container = document.querySelector('.optimizelyOK.vi_dockgateway');
        container.innerHTML = serverData + html;

        loadScript(response.gateway.js[0]);
        loadScript(response.gateway.js[1]);

        opt_console.log('Gateway Loaded addCreative');

        runwhenReady(
            function() {
                document.querySelectorAll('a.productGBB__button[href*="campaignId"], a.productGBBDigi__button--desktop[href*="campaignId"]').length > 0;
            },
            replaceCampaignId(),
            1000, 10
        );

        window.dispatchEvent(vi_dockgateway_event);

    });


};

request.open('GET', creative_src, true);
request.send();
request.addEventListener('load', function() {
    var jsonResponse = JSON.parse(request.responseText);
    addCreative(jsonResponse);
});





// if (widget.mobile_url && window.screen.width < 768) {
//     window.NYToptly.vi_dockgateway.subscribe_url = widget.mobile_url;
// }

if (typeof window.NYToptly.vi_dockgateway_function === 'function') {
    window.NYToptly.vi_dockgateway_function();
}

opt_console.log('Gateway MOM: ' + NYT_ID);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "14049930290";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"capi_src","default_value":"https://capi.dev.nytimes.com/metered_assets"},{"name":"campaignId","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionElement = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionElement) {
  extensionElement.parentElement.removeChild(extensionElement);
}

      },
    });
}], "events": [{"category": "other", "name": "Click Dock", "eventType": "click", "viewId": "9260770473", "apiName": "9270471820_click_dock", "id": "10238772508", "eventFilter": {"filterType": "target_selector", "selector": ".card a"}}, {"category": "other", "name": "Dock Gateway Click", "eventType": "click", "viewId": "9413676220", "apiName": "9270471820_dock_gateway_click", "id": "10274710037", "eventFilter": {"filterType": "target_selector", "selector": "div.product__container > div > div > div > div > a"}}, {"category": "other", "name": "Cooking Click", "eventType": "click", "viewId": "10563417943", "apiName": "9270471820_cooking_click", "id": "10555656779", "eventFilter": {"filterType": "target_selector", "selector": "#dfp-ad-top"}}, {"category": "other", "name": "Banner Click #dfp-ad-top", "eventType": "click", "viewId": "10563417943", "apiName": "9270471820_banner_click_dfpadtop", "id": "10565174296", "eventFilter": {"filterType": "target_selector", "selector": "#dfp-ad-top a"}}, {"category": "other", "name": "Dock Impression", "eventType": "custom", "viewId": null, "apiName": "dock_impression", "id": "10728765086", "eventFilter": null}, {"category": "other", "name": "Apple Pay Eligible", "eventType": "custom", "viewId": null, "apiName": "apple_pay_eligible", "id": "10734250628", "eventFilter": null}, {"category": "other", "name": "Sub Dock Impression", "eventType": "custom", "viewId": null, "apiName": "sub_dock_impression", "id": "10813560421", "eventFilter": null}, {"category": "other", "name": "Click Event: Bar1", "eventType": "click", "viewId": "10647916243", "apiName": "9270471820_click_event_bar1", "id": "10941702671", "eventFilter": {"filterType": "target_selector", "selector": "a:nth-of-type(1) > .e1uwo0ec0"}}, {"category": "other", "name": "Welcome Ad Vi", "eventType": "custom", "viewId": null, "apiName": "welcome_ad_impression_vi", "id": "12383384197", "eventFilter": null}, {"category": "other", "name": "Click Text Link", "eventType": "click", "viewId": "12449650387", "apiName": "11925280421_click_text_link", "id": "12445910305", "eventFilter": {"filterType": "target_selector", "selector": ".css-1gd1pua"}}, {"category": "other", "name": "Click Number Input", "eventType": "click", "viewId": "12449650387", "apiName": "11925280421_click_number_input", "id": "12455490388", "eventFilter": {"filterType": "target_selector", "selector": "#phoneNumber"}}, {"category": "other", "name": "Click Start Reading", "eventType": "click", "viewId": "12449650387", "apiName": "11925280421_click_start_reading", "id": "12469090298", "eventFilter": {"filterType": "target_selector", "selector": ".css-1w2rt7"}}, {"category": "other", "name": "[Support] Vi Dock Gateway Click", "eventType": "custom", "viewId": null, "apiName": "vi_dockgateway_click", "id": "12858810283", "eventFilter": null}, {"category": "other", "name": "[Support] Vi Inline Click", "eventType": "custom", "viewId": null, "apiName": "vi_inline_click", "id": "12862920659", "eventFilter": null}, {"category": "other", "name": "[Support] Vi Bar1 Click", "eventType": "custom", "viewId": null, "apiName": "vi_bar1_click", "id": "12874370190", "eventFilter": null}, {"category": "other", "name": "[Support] Vi Dock Click", "eventType": "custom", "viewId": null, "apiName": "vi_dock_click", "id": "12876170321", "eventFilter": null}, {"category": "other", "name": "Click Sounds Good", "eventType": "click", "viewId": "12043241544", "apiName": "11925280421_click_sounds_good", "id": "14256280247", "eventFilter": {"filterType": "target_selector", "selector": "button"}}], "experimental": {"trimPages": false}, "revision": "8223"},h=n(133);if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var g;g=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],g.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(148).setupPreviewGlobal(),n(148).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/3013110282/s/vi_article/preview.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction("initializeOptimizelyPreview",e);var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();c=t(s.getProjectToken(),v,s.getPreviewLayerIds()),f.addScriptSync(c),n(148).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction("initializeOptimizelyPreview",e),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(p);r.timeEnd("block")}try{i()}catch(e){try{n(147).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(){s();var e=F.getRumData();return e=m.pickBy(e,(function(e){return!m.isUndefined(e)})),a(e)}function r(e){var t=P.getPromise("RUM_FIRST_BEACON");return t?t.then(e):E.makeAsyncRequest("RUM_FIRST_BEACON",e)}function a(e){return m.isEmpty(e)?D.resolve():r((function(){return C.request({url:B,method:"POST",data:e,withCredentials:!0}).then((function(e){return E.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw b.error("POST to client-rum failed:",e),E.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function o(){var e=S.getCurrentScript();if(e)return e.src}function s(){var e={id:F.getRumId(),v:z,account:k.getAccountId(),project:k.getSnippetId()||k.getProjectId(),snippet:k.getSnippetId(),revision:k.getRevision(),clientVersion:"0.117.0",hasSlave:!1,wxhr:!0};try{e["numBehaviorEvents"]=y.getEvents().length}catch(e){b.debug("Unable to get behavior events for RUM:",e)}m.assign(e,u(),d()),T.dispatch(O.SET_RUM_DATA,{data:e})}function u(){var e=N.getGlobal("performance");if(e){var t,n=F.getScriptSrc();try{if(n){b.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;b.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=m.find(a,(function(e){return r.test(e.name)}))}if(t)return m.mapValues(x.ResourceTimingAttributes,(function(e,n){var i=t[n];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===n?i||[]:void 0}))}catch(e){return}}}function c(){try{return!S.querySelector("body")}catch(e){return null}}function l(){try{N.getGlobal("requestAnimationFrame")((function(){var e=F.getRumData().timebase;T.dispatch(O.SET_RUM_DATA,{data:{render:I.now()-(e||0)}})}))}catch(e){return}}function d(){return V.getDurationsFor(m.values(x.RUMPerformanceTimingAttributes))}function f(){var e=A.keys(),t=m.filter(m.map(e,(function(e){var t=R.getStorageKeyFromKey(e);return t?{key:e,isForeign:R.isForeignKey(e),category:t,size:e.length+A.getItem(e).length}:null}))),n=m.reduce(t,(function(e,t){var n=t.key,i=R.getIdFromKey(n);if(!i)return e;var r=t.isForeign?e.foreign:e.local;return r[i]=!0,e}),{local:{},foreign:{}}),i=m.chain(t).filter({isForeign:!0}).reduce((function(e,t){var n=t.key.split("_")[0];return e[n]=!0,e}),{}).value(),r={local:0,foreign:0},a={local:{},foreign:{}};m.forEach(t,(function(e){var t=e.isForeign?"foreign":"local";r[t]+=e.size,a[t][e.category]||(a[t][e.category]=0),a[t][e.category]+=e.size}));var o={numKeys:A.allKeys().length,sizeKeys:A.allKeys().toString().length,sizeValues:A.allValues().toString().length,idCounts:{local:m.keys(n.local).length,foreign:m.keys(n.foreign).length},foreignOriginCount:m.keys(i).length,byteTotals:r,byteTotalsByCategory:a},s=w.estimateStorage();return s.then((function(e){return m.assign(o,{storageEstimate:e})}))}function p(){var e=N.getGlobal("performance"),t=e?e.timing:{},n=V.getMarks()||{},i=F.getApiData(),r=F.getDOMObservationData(),o=G.get("state").getActiveExperimentIds(),s=h(F.getScriptSrc()),u=F.getRumData()||{},c=u.extras||{};m.assign(c,{apiCalls:i,DOMObservationData:r,paintTimings:v(),activeExperimentIds:o,numPages:U.getNumberOfPages(),snippet:{scheme:s.scheme,host:s.host,path:s.path},networkInfo:g(),experimental:k.getExperimental()});var l=N.getGlobal("Prototype");l&&!m.isUndefined(l.Version)&&(c.prototypeJS=l.Version);var d=!1;d=!0;var p=M.getFrames();p.length&&(c.xdFramesLoaded=p.length);var _={id:F.getRumId(),v:z,project:k.getSnippetId()||k.getProjectId(),navigationTimings:t,userTimings:n,xd:d,apis:m.keys(i),extras:c};f().then((function(e){var t=m.assign(_,{lsMetrics:e});a(t)}))}function h(e){var t=S.createElement("a");return t.href=e,{host:t.host,scheme:t.protocol.slice(0,-1),path:t.pathname}}function g(){var e=N.getGlobal("navigator");if(e&&e.connection)return m.pick(e.connection,["downlink","rtt","effectiveType"])}function v(){var e=N.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(m.isEmpty(t))return;return m.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var m=n(2),_=n(5),E=n(6),y=n(70),I=n(24),S=n(79),T=n(9),A=n(80).LocalStorage,b=n(23),w=n(88),D=n(12).Promise,R=n(73),N=n(39),C=n(89),O=n(7),x=n(25),L=n(16),P=L.get("stores/async_request"),k=L.get("stores/global"),F=L.get("stores/rum"),V=L.get("stores/performance"),M=L.get("stores/xdomain"),U=L.get("stores/view_data"),G=n(91),B="https://rum.optimizely.com/rum",j=3e3,z="1.0",H=.01;t.initialize=function(){var e,t=_.generate().replace(/-/g,"");e=Math.random()<H;var n=o();e&&(T.dispatch(O.SET_RUM_DATA,{id:t,RumHost:B,inRumSample:e,src:n,data:{id:t,sync:c(),timebase:I.now(),sampleRate:H,url:n}}),l())},t.queueBeacons=function(){return F.getSampleRum()?(S.isLoaded()?N.setTimeout(p,j):N.addEventListener("load",p),new D(function(e,t){N.setTimeout((function(){i().then(e,t)}),j)}).catch((function(e){b.warn("RUM / Error sending data:",e)}))):D.resolve()}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return y(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function h(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function g(e){return function(t){return e(t)}}function v(e,t){return Ee(t,(function(t){return e[t]}))}function m(e){return e&&e.Object===Object?e:null}function _(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function E(e){return hi[e]}function y(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Pn:t,e>-1&&e%1==0&&e<t}function T(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(zt(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.u=[],this.l=!!t}function R(){}function N(e,t){return O(e,t)&&delete e[t]}function C(e,t){if(Xi){var n=e[t];return n===Rn?An:n}return Di.call(e,t)?e[t]:An}function O(e,t){return Xi?e[t]!==An:Di.call(e,t)}function x(e,t,n){e[t]=Xi&&n===An?Rn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function P(){this.d={hash:new R,map:Yi?new Yi:[],string:new R}}function k(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Yi?t.map["delete"](e):W(t.map,e)}function F(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Yi?t.map.get(e):X(t.map,e)}function V(e){var t=this.d;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Yi?t.map.has(e):$(t.map,e)}function M(e,t){var n=this.d;return Ze(e)?x("string"==typeof e?n.string:n.hash,e,t):Yi?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.d=new L;++t<n;)this.push(e[t])}function G(e,t){var n=e.d;if(Ze(t)){var i=n.d,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function B(e){var t=this.d;if(Ze(e)){var n=t.d,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function j(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function z(){this.d={array:[],map:null}}function H(e){var t=this.d,n=t.array;return n?W(n,e):t.map["delete"](e)}function K(e){var t=this.d,n=t.array;return n?X(n,e):t.map.get(e)}function Y(e){var t=this.d,n=t.array;return n?$(n,e):t.map.has(e)}function q(e,t){var n=this.d,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=Q(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():ji.call(e,n,1),!0}function X(e,t){var n=Q(e,t);return n<0?An:e[n][1]}function $(e,t){return Q(e,t)>-1}function Q(e,t){for(var n=e.length;n--;)if(Ct(e[n][0],t))return n;return-1}function J(e,t,n){var i=Q(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Ct(e,bi[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===An||Ct(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Ct(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!jt(e))return e;var u=dr(e);if(u){if(s=Xe(e),!t)return De(e,s)}else{var c=We(e),l=c==Gn||c==Bn;if(fr(e))return Ce(e,t);if(c==Hn||c==kn||l&&!a){if(I(e))return a?e:{};if(s=$e(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=Qe(e,c,t)}}o||(o=new j);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return jt(e)?Gi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Ee(t,g(n))),i?(a=s,u=!1):t.length>=wn&&(a=G,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var h=d;h--;)if(t[h]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Pt(o)&&(n||dr(o)||xt(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Gt(e[t])}))}function he(e,t,n,i,r){return e===t||(null==e||null==t||!jt(e)&&!zt(t)?e!==e&&t!==t:ge(e,t,he,n,i,r))}function ge(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Fn,c=Fn;o||(u=Ci.call(e),u=u==kn?Hn:u),s||(c=Ci.call(t),c=c==kn?Hn:c);var l=u==Hn&&!I(e),d=c==Hn&&!I(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var h=o||Qt(e)?He(e,t,n,i,r,a):Ke(e,t,u,n,i,r,a);return a.pop(),h}if(!(r&xn)){var g=l&&Di.call(e,"__wrapped__"),v=d&&Di.call(t,"__wrapped__");if(g||v){var h=n(g?e.value():e,v?t.value():t,i,r,a);return a.pop(),h}}if(!f)return!1;var h=Ye(e,t,n,i,r,a);return a.pop(),h}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?ye:be)(e)}function me(e){return Hi(Object(e))}function _e(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function Ee(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function ye(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&he(e[r],n[r],An,On|xn)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||Qt(t)?An:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),jt(o))r||(r=new j),Se(e,t,s,n,Ie,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):An;u===An&&(u=o),ee(e,s,u)}}))}}function Se(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):An,d=l===An;d&&(l=u,dr(u)||Qt(u)?dr(s)?l=s:Pt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||xt(u)?xt(s)?l=tn(s):!jt(s)||i&&Gt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Te(e,t){return e=Object(e),yt(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Ne(e,t){var n=e;return yt(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Ce(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Oe(e){var t=new e.constructor(e.byteLength);return new Fi(t).set(new Fi(e)),t}function xe(e){return yt(A(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Pe(e){return yt(b(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Fe(e,t){var n=t?Oe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ve(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Ge(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Be(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function je(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return jt(i)?i:n}}function ze(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Ti&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&Nn,o=je(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&xn,u=r&On,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],h=t[o];if(f!==An){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==h&&!n(p,h,i,r,a)){d=!1;break}}return d}function Ke(e,t,n,i,r,a,o){switch(n){case Vn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case zn:return e!=+e?t!=+t:e==+t;case Kn:case qn:return e==t+""}return!1}function Ye(e,t,n,i,r,a){var o=r&xn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,h=o;++d<u;){f=s[d];var g,v=e[f],m=t[f];if(!(g===An?v===m||n(v,m,i,r,a):g)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(p=!1)}return p}function qe(e,t){var n=e[t];return Kt(n)?n:An}function We(e){return Ci.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function $e(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function Qe(e,t,n){var i=e.constructor;switch(t){case $n:return Oe(e);case Vn:case Mn:return new i(+e);case Qn:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Fe(e,n);case jn:return xe(e);case zn:case qn:return new i(e);case Kn:return Le(e);case Yn:return Pe(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return Bt(t)&&(dr(e)||$t(e)||xt(e))?h(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new D(e.e,e.l);return t.u=De(e.u),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Ki(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:An}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Ne(this.e,this.u)}function ht(e,t,n){return t=n?An:t,ue(e,ve(t))}function gt(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function mt(e,t){return tr(e,ie(t))}function _t(e,t,n,i){e=Lt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=Ki(r+n,0)),$t(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function Et(e,t){return Ee(e,ve(t))}function yt(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function St(e,t,n){return t=n?An:t,Re(e,ve(t))}function Tt(e,t){var n=0;return t=ve(t),Ee(Ee(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return _(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=Ki(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=Ki(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return jt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Nt(e){return re(e,!0,!0)}function Ct(e,t){return e===t||e!==e&&t!==t}function Ot(e,t){return e>t}function xt(e){return Pt(e)&&Di.call(e,"callee")&&(!Bi.call(e,"callee")||Ci.call(e)==kn)}function Lt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function Pt(e){return zt(e)&&Lt(e)}function kt(e){return e===!0||e===!1||zt(e)&&Ci.call(e)==Vn}function Ft(e){return zt(e)&&Ci.call(e)==Mn}function Vt(e){if(Lt(e)&&(dr(e)||$t(e)||Gt(e.splice)||xt(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return he(e,t)}function Ut(e){return"number"==typeof e&&zi(e)}function Gt(e){var t=jt(e)?Ci.call(e):"";return t==Gn||t==Bn}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Pn}function jt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function zt(e){return!!e&&"object"==typeof e}function Ht(e){return qt(e)&&e!=+e}function Kt(e){return null!=e&&(Gt(e)?xi.test(wi.call(e)):zt(e)&&(I(e)?xi:li).test(e))}function Yt(e){return null===e}function qt(e){return"number"==typeof e||zt(e)&&Ci.call(e)==zn}function Wt(e){if(!zt(e)||Ci.call(e)!=Hn||I(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Ni}function Xt(e){return jt(e)&&Ci.call(e)==Kn}function $t(e){return"string"==typeof e||!dr(e)&&zt(e)&&Ci.call(e)==qn}function Qt(e){return zt(e)&&Bt(e.length)&&!!fi[Ci.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?gr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return me(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=_e(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||S(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Gt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function hn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,E):e}function gn(e){return function(){return e}}function vn(e){return e}function mn(e){return ye(gr({},e))}function _n(e,t,n){var i=sn(t),r=pe(t,i);null!=n||jt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(jt(n)&&"chain"in n)||n.chain,o=Gt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.l;if(a||t){var n=e(this.e),r=n.u=De(this.u);return r.push({func:i,args:arguments,thisArg:e}),n.l=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function En(){return Ti._===this&&(Ti._=Oi),this}function yn(){}function In(e){var t=++Ri;return nn(e)+t}function Sn(e){return e&&e.length?c(e,vn,Ot):An}function Tn(e){return e&&e.length?c(e,vn,Zt):An}var An,bn="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",Nn=1,Cn=32,On=1,xn=2,Ln=1/0,Pn=9007199254740991,kn="[object Arguments]",Fn="[object Array]",Vn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Gn="[object Function]",Bn="[object GeneratorFunction]",jn="[object Map]",zn="[object Number]",Hn="[object Object]",Kn="[object RegExp]",Yn="[object Set]",qn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",$n="[object ArrayBuffer]",Qn="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[Qn]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Fn]=fi[$n]=fi[Vn]=fi[Mn]=fi[Un]=fi[Gn]=fi[jn]=fi[zn]=fi[Hn]=fi[Kn]=fi[Yn]=fi[qn]=fi[Xn]=!1;var pi={};pi[kn]=pi[Fn]=pi[$n]=pi[Vn]=pi[Mn]=pi[Qn]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[jn]=pi[zn]=pi[Hn]=pi[Kn]=pi[Yn]=pi[qn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Gn]=pi[Xn]=!1;var hi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},gi={"function":!0,object:!0},vi=gi[typeof t]&&t&&!t.nodeType?t:An,mi=gi[typeof e]&&e&&!e.nodeType?e:An,_i=mi&&mi.exports===vi?vi:An,Ei=m(vi&&mi&&"object"==typeof n&&n),yi=m(gi[typeof self]&&self),Ii=m(gi[typeof window]&&window),Si=m(gi[typeof this]&&this),Ti=Ei||Ii!==(Si&&Si.window)&&Ii||yi||Si||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Di=bi.hasOwnProperty,Ri=0,Ni=wi.call(Object),Ci=bi.toString,Oi=Ti._,xi=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=_i?Ti.Buffer:An,Pi=Ti.Reflect,ki=Ti.Symbol,Fi=Ti.Uint8Array,Vi=Pi?Pi.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Gi=Object.create,Bi=bi.propertyIsEnumerable,ji=Ai.splice,zi=Ti.isFinite,Hi=Object.keys,Ki=Math.max,Yi=qe(Ti,"Map"),qi=qe(Ti,"Set"),Wi=qe(Ti,"WeakMap"),Xi=qe(Object,"create"),$i=Yi?wi.call(Yi):"",Qi=qi?wi.call(qi):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Ge(fe),nr=Be();Vi&&!Bi.call({valueOf:1},"valueOf")&&(_e=function(e){return T(Vi(e))});var ir=Ve,rr=be("length"),ar=Ui||function(){return[]};(Yi&&We(new Yi)!=jn||qi&&We(new qi)!=Yn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Ci.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case $i:return jn;case Qi:return Yn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return ze(e,Nn|Cn,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,hr(t)||0,n)})),lr=Dt((function(e,t){return ze(e,Cn,An,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:gn(!1),pr=Number,hr=Number,gr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),mr=Ue((function(e,t,n,i){Ve(t,un(t),e,i)})),_r=Dt((function(e){return e.push(An,Z),mr.apply(An,e)})),Er=Ue((function(e,t,n){Ie(e,t,n)})),yr=Dt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Te(e,se(un(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Te(e,le(t,1))})),Sr=ve;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=Xi?Xi(null):bi,L.prototype.clear=P,L.prototype["delete"]=k,L.prototype.get=F,L.prototype.has=V,L.prototype.set=M,U.prototype.push=B,j.prototype.clear=z,j.prototype["delete"]=H,j.prototype.get=K,j.prototype.has=Y,j.prototype.set=q,w.assign=gr,w.assignIn=vr,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=_r,w.defer=ur,w.delay=cr,w.filter=gt,w.flatten=rt,w.flattenDeep=at,w.iteratee=Sr,w.keys=sn,w.map=Et,w.mapValues=cn,w.matches=mn,w.merge=Er,w.mixin=_n,w.negate=bt,w.omit=yr,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ct,w.sortBy=Tt,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=vr,_n(w,w),w.clone=Rt,w.cloneDeep=Nt,w.escape=hn,w.every=ht,w.find=vt,w.findIndex=it,w.forEach=mt,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=_t,w.indexOf=st,w.isArguments=xt,w.isArray=dr,w.isBoolean=kt,w.isDate=Ft,w.isEmpty=Vt,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Gt,w.isNaN=Ht,w.isNull=Yt,w.isNumber=qt,w.isObject=jt,w.isRegExp=Xt,w.isString=$t,w.isUndefined=Jt,w.last=ut,w.max=Sn,w.min=Tn,w.noConflict=En,w.noop=yn,w.reduce=yt,w.result=fn,w.size=It,w.some=St,w.uniqueId=In,w.each=mt,w.first=ot,_n(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.l?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||yi||{})._=w,vi&&mi&&(_i&&((mi.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7),r=n(9),a=n(12).Promise,o=n(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new a(function(e,t){o=e,u=t});return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(i.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(i.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(8);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,
SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(10);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.f={},this.g={},this.I=0,this.S=[],this.T=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(2),o=n(11);i.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},i.prototype.getStore=function(e){return this.f[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.S,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,(function(n){n.A(e,t)})),a.each(this.T,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},i.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.b()}))},i.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,n){e[n]=t.w()})),e},i.prototype.onPreAction=function(e){var t=this.S;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.T;return t.push(e),r(t,e)},i.prototype.D=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var n=this.g[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.R=e,this.N=t,this.C=0,this.O=!1,this.L={},r.extend(this,n),this.P={},this.initialize&&this.initialize()}var r=n(2);i.prototype.A=function(e,t){var n=this.L[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.w=function(){return r.cloneDeep(this.P)},i.prototype.on=function(e,t){this.L[e]=r.bind(t,this)},i.prototype.observe=function(e){return this.N.D(this.R,e)},i.prototype.emitChange=function(){this.O=!0,this.C++},i.prototype.hasChanges=function(){return this.O},i.prototype.resetChange=function(){this.O=!1},i.prototype.getStateId=function(){return this.C},i.prototype.b=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(13)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){$=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}q=0}function p(){try{var e=n(15);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function h(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];$((function(){return x(a,r,e,i._result)}))})():R(i,r,e,t),r}function g(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ue.error=e,ue}}function y(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){$((function(e){var i=!1,r=y(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function S(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return D(e,t)}))}function T(e,t,n){t.constructor===e.constructor&&n===h&&t.constructor.resolve===g?S(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function A(t,n){t===n?D(t,m()):e(n)?T(t,n,E(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),N(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&$(N,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,$(b,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&$(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?x(n,i,r,a):r(a);e._subscribers.length=0}}function C(){this.error=null}function O(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function x(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=O(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,_())}else o=i,u=!0;t._state!==ae||(a&&u?A(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function L(e,t){try{t((function(t){A(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function P(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function F(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),Y(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,V())}function V(){return new Error("Array Methods must be provided an Array")}function M(e){return new F(this,e).promise}function U(e){var t=this;return new t(Y(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,n=new t(v);return D(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function j(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(e){this[re]=P(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&B(),this instanceof z?L(this,e):j())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z}var K=void 0;K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var Y=K,q=0,W=void 0,X=void 0,$=function(e,t){ne[q]=e,ne[q+1]=t,q+=2,2===q&&(X?X(f):ie())},Q="undefined"!=typeof window?window:void 0,J=Q||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===Q?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new C,ce=new C,le=0;return F.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},F.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===g){var r=E(e);if(r===h&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===z){var a=new n(v);T(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},F.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},F.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},z.all=M,z.race=U,z.resolve=g,z.reject=G,z._setScheduler=a,z._setAsap=o,z._asap=$,z.prototype={constructor:z,then:h,"catch":function(e){return this.then(null,e)}},z.polyfill=H,z.Promise=z,z}))}).call(t,n(14),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){g&&p&&(g=!1,p.length?h=p.concat(h):v=-1,h.length&&s())}function s(){if(!g){var e=r(o);g=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,g=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,h=[],g=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||g||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(17),a=n(9),o=n(18),s=r.create(),u={action_data:n(21),async_request:n(27),audience_data:n(28),change_data:n(29),cleanup:n(30),cookie_options:n(31),event_data:n(32),event_emitter:n(33),dimension_data:n(34),directive:n(35),global:n(36),global_state:n(37),history:n(38),integration_settings:n(40),layer:n(41),layer_data:n(42),log:n(44),observed_redirect:n(45),pending_events:n(46),performance:n(47),plugins:n(48),provider_status:n(49),pending_redirect:n(50),rum:n(51),sandbox:n(52),session:n(53),tracker_optimizely:n(54),ua_data:n(55),view:n(56),view_data:n(57),visitor:n(58),visitor_attribute_entity:n(59),visitor_events:n(60),visitor_events_manager:n(65),visitor_id:n(66),visitor_bucketing:n(67),xdomain:n(68)};u["group_data"]=n(69),a.registerStores(u),i.forOwn(u,(function(e,t){s.register("stores/"+t,a.getStore(t))})),s.register("core/plugins/matchers/key_value",o),e.exports=s}),(function(e,t,n){function i(){this.k={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.k[e])throw new Error("Module already registered for: "+e);this.k[e]=t},i.prototype.get=function(e){return this.k[e]},i.prototype.getModuleKeys=function(){var e=this.k;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,r.bind(this.get,this));return i.apply(null,a)},i.prototype.reset=function(){this.k={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(19).getFieldValue,a=n(20);e.exports=function(e,t){var n=r(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,n)}}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){i.isArray(t)||(t=[t]);for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n},t.setFieldValue=function(e,t,n){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=e,a=0;a<t.length-1;a++){var o=t[a];i.isObject(r[o])||(r[o]={}),r=r[o]}r[t[t.length-1]]=n}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(23);e.exports={initialize:function(){this.P={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.F),this.on(r.ACTION_EXECUTED,this.V),this.on(r.SET_CHANGE_APPLIER,this.M),this.on(r.REMOVE_ACTION_STATE,this.U)},F:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.P.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.P.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.P.actions[u]=n}))}))}))})),this.emitChange())},V:function(e){var t=e.actionId;i.isUndefined(t)||this.P.actionState[t]||(this.P.actionState[t]={})},M:function(e){var t=e.actionId,n=e.changeId;return this.P.actionState[t]?void(this.P.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.P.actionState[e.actionId]},get:function(e){return a.safeReference(this.P.actions[e])},getActionState:function(e){return a.safeReference(this.P.actionState[e])},getByChangeId:function(e){return i.find(this.P.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.P.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.P.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.P.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.P.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(7),o=n(24),s=n(25),u=n(9),c=n(26);i.prototype.G=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.B(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.G()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};u.dispatch(a.LOG,n)},i.prototype.flush=function(){var e=n(16),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,r.bind((function(e){this.j(e.logLevel,e.logMessage,!0)}),this))},i.prototype.j=function(e,t,n){var i,a=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:i=console.error;break;case s.LogLevel.WARN:i=console.warn;break;case s.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.G()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.z(t)),this.storeLog(e,t)),i&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.j(s.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.j(s.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.z([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},i.prototype.warn=function(){this.j(s.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.j(s.LogLevel.ERROR,[this.H(),e]),this.j(s.LogLevel.INFO,[e.stack])):this.j(s.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.j("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.j("GROUPEND",[].slice.call(arguments))},i.prototype.z=function(e){var t=this.H().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.H=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.B=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new i}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(2),r=n(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={},this.on(i.REGISTER_ASYNC_DEFERRED,this.K),this.on(i.RESOLVE_DEFERRED,this.Y),this.on(i.REJECT_DEFERRED,this.q)},getRequest:function(e){return this.P[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},K:function(e){this.P[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},Y:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},q:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getAudiencesMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getAudienceName:function(e){var t=i.find(i.values(this.P),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.F)},getChange:function(e){return this.P[e]},F:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,i.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.P[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},i.each(a.Lifecycle,i.bind((function(e){this.P[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return i.cloneDeep(this.P[e])},X:function(e){this.P[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.P[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.P[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(7),r=15552e3,a=!0;e.exports={initialize:function(){this.P={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(i.SET_COOKIE_DOMAIN,this.J),this.on(i.SET_COOKIE_AGE,this.Z),this.on(i.SET_COOKIE_AUTO_REFRESH,this.ee)},getCurrentDomain:function(){return this.P.currentDomain},getDefaultAgeInSeconds:function(){return this.P.defaultAgeSeconds},getAutoRefresh:function(){return this.P.autoRefresh},J:function(e){this.P.currentDomain=e,this.emitChange()},Z:function(e){this.P.defaultAgeSeconds=e,this.emitChange()},ee:function(e){this.P.autoRefresh=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.P))},getEventsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.P,{pageId:e}))},F:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,i.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(7),o="|";e.exports={initialize:function(){this.P={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.te),this.on(a.REMOVE_EMITTER_HANDLER,this.ne)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,r.bind((function(e){var t=i(e),n=this.P.handlers[t];n&&(a=a.concat(n))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},te:function(e){var t=i(e.filter);this.P.handlers[t]||(this.P.handlers[t]=[]),this.P.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},ne:function(e){var t=!1,n=e.token;r.forOwn(this.P.handlers,r.bind((function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.P.handlers[i]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getById:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.re)},getAll:function(){return i.cloneDeep(this.P)},conflictInObservingChanges:function(){return!this.P.mutationObserverAPISupported},isDisabled:function(){return this.P.disabled},isEditor:function(){return this.P.isEditor},clientHasAlreadyInitialized:function(){return this.P.alreadyInitialized},getForceAudienceIds:function(){return this.P.forceAudienceIds},getForceVariationIds:function(){return this.P.forceVariationIds},getPreviewLayerIds:function(){return this.P.previewLayerIds},getProjectToken:function(){return this.P.projectToken},getForceTracking:function(){return this.P.forceTracking},shouldActivate:function(){return!this.P.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.P.isPreview},shouldBootstrapDataForEditor:function(){return this.P.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.P.isPreview||this.P.isLegacyPreview||!this.getProjectToken()||this.P.isEditor)},shouldBailForDesktopApp:function(){return!this.P.isEditor&&this.P.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.P.isSlave&&!this.P.isEditor&&this.P.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.P.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.P.shouldOptOut},shouldSendTrackingData:function(){return!this.P.trackingDisabled&&(!!this.P.forceTracking||!this.P.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.P.isSlave},isRunningInDesktopApp:function(){return this.P.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.P.isRunningInV2Editor},re:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.ae),this.on(r.ACTIVATE,this.oe),this.on(r.RECORD_GLOBAL_DECISION,this.se),this.on(r.SET_DOMCONTENTLOADED,this.ue)},getRevision:function(){return this.P.revision},getGlobalHoldbackThreshold:function(){return this.P.holdback},getProjectId:function(){return this.P.projectId},getSnippetId:function(){return this.P.snippetId},getAccountId:function(){return this.P.accountId},getNamespace:function(){return this.P.namespace},getActivationId:function(){return this.P.activationId},getActivationTimestamp:function(){return this.P.activationTimestamp},getAnonymizeIP:function(){return this.P.anonymizeIP},isGlobalHoldback:function(){return!!this.P.isGlobalHoldback},getListTargetingKeys:function(){return this.P.listTargetingKeys.slice()},getDCPServiceId:function(){return this.P.dcpServiceId},getDCPKeyfieldLocators:function(){return this.P.dcpKeyfieldLocators},getRecommenderServices:function(){return this.P.recommenderServices},getProjectJS:function(){return this.P.projectJS},getPlugins:function(){return this.P.plugins},getExperimental:function(){return a.safeReference(this.P.experimental)},domContentLoadedHasFired:function(){return this.P.domContentLoaded},oe:function(e){this.P.activationId=e.activationId,this.P.activationTimestamp=e.activationTimestamp,this.P.isGlobalHoldback=null},se:function(e){var t=e.isGlobalHoldback;if(null!==this.P.isGlobalHoldback&&this.P.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.P.isGlobalHoldback=t,this.emitChange()},ae:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){var n={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.P,n,t),this.emitChange()}},ue:function(){this.P.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.ce)},getEffectiveReferrer:function(){return this.P.effectiveReferrer},getEffectiveVariationId:function(){return this.P.effectiveVariationId},ce:function(e){i.isUndefined(e.effectiveReferrer)||(this.P.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.P.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(39);e.exports={initialize:function(){this.P={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.le),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.de)},getOriginalPushState:function(){return this.P.originalPushState},getOriginalReplaceState:function(){return this.P.originalReplaceState},le:function(){this.P.originalPushState||(this.P.originalPushState=i.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},de:function(){this.P.originalReplaceState||(this.P.originalReplaceState=i.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,n){var i=n(2),r=n(23);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){return setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){return setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F),this.on(r.SET_INTEGRATION_SETTINGS,this.fe)},F:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())},fe:function(e){var t=this.P[e.id];t?i.extend(t,e):this.P[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.P))},get:function(e){return i.cloneDeep(this.P[e])},getReference:function(e){return this.P[e]}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o="*";e.exports={initialize:function(){this.P={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.pe),this.on(r.RECORD_LAYER_DECISION,this.he),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.ge)},getLayerState:function(e,t){if(this.P[e]){var n=this.P[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.P)i.forEach(this.P[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.P)i.forEach(this.P[t],(function(t){e.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return e},pe:function(e){e.merge||(this.P={}),i.each(e.layerStates,i.bind((function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.P[t];if(i.isUndefined(r))this.P[t]={},this.P[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.P[t][n]=e)}}),this)),this.emitChange()},he:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},n=this.P[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.P[e.layerId]=n,this.emitChange()},ge:function(e){var t=e.layerId,n=e.pageId||o;return this.P[t]?this.P[t][n]?(this.P[t][n].decisionEventId=e.decisionId,
void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(43);e.exports={initialize:function(){this.P={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.F)},F:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.P.variations[e.id]=e})),t.P.experiments[n.id]=n})),a.deepFreeze(e),t.P.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.P.layers))},getCampaignsMap:function(){return a.safeReference(this.P.layers)},getExperimentsMap:function(){return a.safeReference(this.P.experiments)},getVariationsMap:function(){return a.safeReference(this.P.variations)},getCount:function(){return i.keys(this.P.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(this.P.layers,(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.P.layers[e])},getLayerByExperimentId:function(e){var t=i.find(this.P.layers,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(t)},getExperimentByVariationId:function(e){var t;return i.some(this.P.layers,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={logs:[]},this.on(i.LOG,this.ve)},getLogs:function(){return this.P.logs},ve:function(e){this.P.logs.push(e),this.emitChange()},w:function(){return this.P.logs.slice()}}}),(function(e,t,n){var i=n(7),r=n(22);e.exports={initialize:function(){this.P={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.me),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this._e)},get:function(){return r.safeReference(this.P.data)},hasTracked:function(){return this.P.hasTracked},me:function(e){r.deepFreeze(e),this.P.data=e,this.P.hasTracked=!1,this.emitChange()},_e:function(){this.P.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26),o=1e3;e.exports={initialize:function(){this.P={},this.on(r.SET_PENDING_EVENT,this.Ee),this.on(r.REMOVE_PENDING_EVENT,this.ye),this.on(r.LOAD_PENDING_EVENTS,this.Ie)},getEvents:function(){return this.P},getEventsString:function(){return a.stringify(this.P)},Ee:function(e){i.keys(this.P).length>=o&&this.Se();var t=e.id,n=e.retryCount;this.P[t]&&this.P[t].retryCount===n||(this.P[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},ye:function(e){delete this.P[e.id],this.emitChange()},Ie:function(e){this.P=e.events,this.Se(),this.emitChange()},Se:function(){for(var e=i.sortBy(this.P,"timeStamp"),t=0;t<=e.length-o;t++)delete this.P[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},this.P[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Te)},Te:function(e){i.isUndefined(this.P[a.PerformanceData.performance_marks][e.name])&&(this.P[a.PerformanceData.performance_marks][e.name]=[]),this.P[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.P[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,i.bind((function(e,t){var n=this.P[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25),o=n(23);e.exports={initialize:function(){this.P=i.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Ae)},Ae:function(e){var t=e.type,n=e.name,i=e.plugin;if(!t||!n)throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.P[t])throw new Error("Invalid plugin type specified: "+t);this.P[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.P[e])return this.P[e];throw new Error("Invalid plugin type: "+e)}return this.P},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.be)},getPendingAttributeValue:function(e){return e=i.isArray(e)?e.concat("pending"):[e,"pending"],a.getFieldValue(this.P,e)},be:function(e){a.setFieldValue(this.P,e.key,{pending:e.pending}),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.me)},isExpectingRedirect:function(){return i.isString(this.P.layerId)},getLayerId:function(){return this.P.layerId},me:function(e){this.isExpectingRedirect()||(this.P.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{}},this.on(r.SET_RUM_DATA,this.we),this.on(r.RECORD_API_USAGE,this.De),this.on(r.INITIALIZE_CHANGE_METRICS,this.Re),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Ne),this.on(r.RECORD_CHANGE_OVERHEATED,this.Ce),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Oe)},we:function(e){i.merge(this.P,e),this.emitChange()},De:function(e){this.P.apis[e.methodName]||(this.P.apis[e.methodName]=0),this.P.apis[e.methodName]++,this.emitChange()},Re:function(){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0)},Ne:function(e){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.P.data.extras.changeMacrotaskRate&&(this.P.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},Ce:function(){i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0),this.P.data.extras.numOverheatedChanges++,this.emitChange()},Oe:function(e){this.P.DOMObservation[e.counterName]||(this.P.DOMObservation[e.counterName]=0),this.P.DOMObservation[e.counterName]++,this.emitChange()},getSampleRum:function(){return this.P.inRumSample},getRumId:function(){return this.P.id},getRumHost:function(){return this.P.RumHost},getApiData:function(){return this.P.apis},getDOMObservationData:function(){return this.P.DOMObservation},getRumData:function(){return i.cloneDeep(this.P.data)},getScriptSrc:function(){return this.P.src}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.xe)},xe:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.P.natives=e.sandboxedFunctions,this.P.initialized=!0,this.emitChange()},getAll:function(){return this.P.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.P.natives[e]||null},isInitialized:function(){return this.P.initialized}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(5),s=18e5;e.exports={initialize:function(){this.P={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Le),this.on(r.LOAD_SESSION_STATE,this.Pe)},getState:function(){return i.cloneDeep(this.P)},getSessionId:function(){return this.P.sessionId},Pe:function(e){this.P.sessionId=e.sessionId,this.P.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},Le:function(){var e=a.now(),t=this.P.lastSessionTimestamp;(!this.P.sessionId||e-t>s)&&(this.P.sessionId=o.generate()),this.P.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.ke(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Fe),this.on(r.REGISTER_PREVIOUS_BATCH,this.Ve),this.on(r.REGISTER_TRACKER_VISITOR,this.Me),this.on(r.REGISTER_TRACKER_EVENT,this.Ue),this.on(r.REGISTER_TRACKER_DECISION,this.Ge),this.on(r.RESET_TRACKER_EVENTS,this.Be),this.on(r.RESET_TRACKER_STORE,this.ke),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.je),this.on(r.SET_TRACKER_POLLING,this.ze),this.on(r.SET_TRACKER_BATCHING,this.He),this.on(r.SET_TRACKER_SEND_EVENTS,this.Ke),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Ye),this.on(r.SET_TRACKER_DIRTY,this.qe),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.We)},getPersistableState:function(){return this.P.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.P.data,decisions:this.P.decisions,decisionEvents:this.P.decisionEvents,previousBatches:this.P.previousBatches}:{}:null},Ye:function(e){i.isEmpty(this.P.data)||i.isEmpty(e.data)||(this.Fe(),this.P.previousBatches.push(this.getEventBatch())),this.P.data=e.data||{},this.P.decisions=e.decisions||[],this.P.decisionEvents=e.decisionEvents||[],i.isEmpty(this.P.previousBatches)||i.isEmpty(e.previousBatches)?this.P.previousBatches=e.previousBatches||[]:this.P.previousBatches=this.P.previousBatches.concat(e.previousBatches),this.emitChange()},qe:function(e){this.P.isDirty=e,this.emitChange()},Ue:function(e){var t=this.Xe();!i.isEmpty(t.snapshots)&&i.isEmpty(this.P.decisionEvents)||this.$e(),this.Qe().events.push(e.event),this.P.decisions=e.decisions,this.qe(!0)},Ge:function(e){this.P.decisionEvents.push(e.decisionEvent),this.P.decisions=e.decisions,this.qe(!0)},Me:function(e){i.isEmpty(this.P.data)?this.P.data=e.data:this.Fe(),this.P.data.visitors.push(e.visitor),this.P.decisions=e.decisions,this.P.decisionEvents=[],this.qe(!0)},Ve:function(e){this.P.previousBatches.push(e),this.qe(!0)},ke:function(){this.P={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Be:function(){var e=this.Xe();this.P.data.visitors=[e],e.snapshots=[],this.qe(!0)},je:function(){this.P.previousBatches=[],this.qe(!0)},ze:function(e){this.P.polling=e,this.emitChange()},He:function(e){this.P.shouldBatch=e,this.emitChange()},Ke:function(e){this.P.canSend=e,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.P.data)},getPreviousBatches:function(){return i.cloneDeep(this.P.previousBatches)},Je:function(){return this.P.decisionEvents.slice()},Ze:function(){this.P.decisionEvents=[]},et:function(){return this.P.decisions.slice()},isPolling:function(){return this.P.polling},shouldBatch:function(){return this.P.shouldBatch},Qe:function(){return i.last(this.Xe().snapshots)},Xe:function(){return i.last(this.P.data.visitors)},$e:function(){var e=this.Je(),t=this.Xe();t.snapshots.push({decisions:this.et(),events:e}),this.Ze(),this.qe(!0)},Fe:function(){this.P.decisionEvents.length>0&&this.$e()},hasEventsToSend:function(){if(!i.isEmpty(this.P.decisionEvents))return!0;if(!i.isEmpty(this.P.data)){var e=i.some(this.P.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.P.previousBatches)},canSend:function(){return this.P.canSend},We:function(e){var t=this.Xe();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.SET_UA_DATA,this.F)},F:function(e){i.isEmpty(this.P)&&(this.P=e.data)},get:function(){return i.cloneDeep(this.P)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.P=i.cloneDeep(o),this.on(r.REGISTER_VIEWS,this.tt),this.on(r.SET_VIEW_ACTIVE_STATE,this.nt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.it),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.rt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.at),this.on(r.SET_GLOBAL_TAGS,this.ot),this.on(r.ACTIVATE,this.st),this.on(r.SET_VIEW_BATCHING,this.He)},getAll:function(){var e={};for(var t in this.P.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.P.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.P.viewStates[e]),n=this.P.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.P.viewStates[e]?this.P.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.P.viewStates,i.bind((function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}),this),[])},isViewActive:function(e){var t=this.P.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.P.globalTags)},st:function(){this.P.viewStates={},this.emitChange()},tt:function(e){i.each(e.views,i.bind((function(e){var t=e.id;this.P.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},nt:function(e){var t=e.view.id;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);this.P.viewStates[t].isActive=e.isActive,e.isActive?this.P.viewStates[t].activatedTimestamp=e.timestamp:(this.P.viewStates[t].parsedMetadata={},this.P.viewStates[t].userSuppliedMetadata={}),this.emitChange()},it:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},rt:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},at:function(e){var t=e.pageId;this.P.viewStates[t]&&(this.P.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},ot:function(e){i.extend(this.P.globalTags,e),this.emitChange()},He:function(e){this.P.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.P.views))},getPagesMap:function(){return a.safeReference(this.P.views)},get:function(e){return a.safeReference(this.P.views[e])},getByApiName:function(e){return a.safeReference(this.P.apiNamesToViews[e])},apiNameToId:function(e){var t=this.P.apiNamesToViews[e];if(t)return t.id},idToApiName:function(e){var t=this.P.views[e];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.P.views).length},getAllViewsForActivationType:function(e){return i.filter(this.P.views,{activationType:e})},F:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,i.bind((function(e){a.deepFreeze(e),this.P.views[e.id]=e,this.P.apiNamesToViews[e.apiName]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.ut),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.ct)},getVisitorProfile:function(){return this.P.profile},getVisitorProfileMetadata:function(){return this.P.metadata},getAttribute:function(e){var t=this.P.profile;return i.cloneDeep(a.getFieldValue(t,e))},getAttributeMetadata:function(e){return i.cloneDeep(this.P.metadata[e])},ct:function(e){this.P.profile=e.profile,this.P.metadata=e.metadata,this.emitChange()},ut:function(e){i.each(e.attributes,i.bind((function(e){var t=e.key;a.setFieldValue(this.P.profile,t,e.value),e.metadata&&i.forOwn(e.metadata,i.bind((function(e,n){a.setFieldValue(this.P.metadata,t.concat(n),e)}),this))}),this)),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.dt)},getCustomBehavioralAttributes:function(){return i.filter(this.P,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.P);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.P[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},dt:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(7));n(61).Event;e.exports={initialize:function(){this.P={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.F),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.ft),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.pt)},getEvents:function(){return this.P.events},getForeignEvents:function(){return this.P.foreignEvents},getForeignEventQueues:function(){return this.P.foreignEventQueues},F:function(e){this.P.events=e,this.emitChange()},ft:function(e){this.P.foreignEvents[e.key]=e.value},pt:function(e){this.P.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n,i){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n),a.isUndefined(i)||(this[o.FIELDS.SESSION_INDEX]=i)}var a=n(2),o=n(62),s=n(19).getFieldValue,u=n(63);t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=u.hashToHex(u.toByteString(this.digest()),u.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=s(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],n[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var i=s(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,n){var i=n(64).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ht)},getBaseMap:function(){return this.P.baseMap},getEventQueue:function(){return this.P.eventQueue},getLastEvent:function(){return this.P.lastEvent},getCleared:function(){return this.P.cleared},getInitialized:function(){return this.P.initialized},ht:function(e){this.P[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={randomId:null},this.on(r.SET_VISITOR_ID,this.F)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.P.randomId},F:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26);e.exports={initialize:function(){this.P={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.vt),this.on(r.MERGE_VARIATION_ID_MAP,this.mt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this._t),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Et)},getVariationIdMap:function(){return i.cloneDeep(this.P.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.P.variationIdMap)},vt:function(e){var t=this.P.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.P.variationIdMap[e.layerId]=n,this.emitChange())},mt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.each(t||{},(function(e,t){n[t]?i.assign(n[t],e):n[t]=e})),this.P.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.P.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.P.preferredLayerMap)},getPreferredLayerId:function(e){return this.P.preferredLayerMap[e]},_t:function(e){this.P.preferredLayerMap[e.groupId]!==e.layerId&&(this.P.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Et:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.assign(n,t),this.P.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.yt),this.on(r.XDOMAIN_ADD_FRAME,this.It),this.on(r.XDOMAIN_SET_MESSAGE,this.St),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.Tt),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.At),this.on(r.XDOMAIN_SET_DISABLED,this.bt)},getMessages:function(){return i.cloneDeep(this.P.messages)},getNextMessageId:function(){return this.P.messages.length},getMessageById:function(e){return this.P.messages[e]},getSubscribers:function(){return this.P.subscribers},getFrames:function(){return this.P.frames},getNextFrameId:function(){return this.P.frames.length},getDefaultFrame:function(){return this.P.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.P.canonicalOrigins)},isDisabled:function(){return this.P.disabled},yt:function(e){this.P.defaultFrame=e},It:function(e){this.P.frames.push(e)},St:function(e){this.P.messages[e.messageId]=e.message},Tt:function(e){this.P.subscribers.push(e.subscriber)},At:function(e){this.P.canonicalOrigins=e.canonicalOrigins},bt:function(e){this.P.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getGroupsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])}}}),(function(e,t,n){var i=n(71);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){y.dispatch(m.SET_VISITOR_EVENTS,e)}function r(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return N.getEvents()}function l(){return C.getBaseMap()}function d(){return C.getEventQueue()}function f(){return C.getLastEvent()}function p(){return C.getCleared()}function h(){return C.getInitialized()}function g(){return i(c().concat(d())),a([]),c().length>x&&(i(c().slice(-x)),!0)}var v=n(2),m=n(7),_=n(24),E=n(72),y=n(9),I=n(23),S=n(73),T=t,A=n(61).Event,b=n(62),w=n(61).EventBase,D=n(87),R=n(16),N=R.get("stores/visitor_events"),C=R.get("stores/visitor_events_manager"),O={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},x=1e3;t.initialize=function(e,t){if(!h()){T.wt(e,t);var n=c();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){I.debug("Behavior store: adding event",e);var t=T.Dt(e);o(t),a(d().concat(t)),D.reindexIfNecessary(f(),c(),d()),T.Rt(d())},t.getEvents=function(){return d().length>0&&(g()&&D.sessionize(c()),T.Nt(c()),T.Rt(d())),c()},T.wt=function(e,t){T.Ct(e,t)&&(T.Nt(c()),T.Rt(d())),D.sessionize(c())},T.Ct=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return O.EVENTBASE in r?(i(T.Ot(e)),a(T.Ot(t))):(n=!0,i(T.xt(e)),a(T.xt(t))),d().length>0&&(g(),n=!0),i(T._updateBaseMapAndMaybeDedupe(c())),T._migrateEventBasesAndUpdateStore()&&(n=!0),n},T.xt=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=T.Lt(i);t[n]=new A(r,i[b.FIELDS.TIME])}return t},T._migrateEventBasesAndUpdateStore=function(){var e=!1,t=T.Pt();return D.applyMigrations(t)&&(e=!0,r({}),i(T._updateBaseMapAndMaybeDedupe(c())),a(T._updateBaseMapAndMaybeDedupe(d()))),e},T.kt=function(){return _.now()},T.Dt=function(e){var t,n=e.name,i=e.type||"default",r=e.category||E.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new w(n,i,r,a,t);o=T.Ft(o);var s=T.kt(),u=new A(o,s,-1);return D.updateSessionId(f(),u),D.updateSessionIndex(f(),u),u},T._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=T.Ft(e[t].eventBase);return e},T.Nt=function(e){var t=T.Vt(e);S.persistBehaviorEvents(t)},T.Rt=function(e){var t=T.Vt(e);S.persistBehaviorEventQueue(t)},T.Mt=function(){p()||(i([]),a([]),T.Nt(c()),T.Rt(d()),r({}),o(null),s(!0))},T.Ft=function(e){var t=e.hash(),n=l(),i=n[t];if(v.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},T.Pt=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},T.Vt=function(e){for(var t=function(e){var t={};t[b.FIELDS.NAME]=e.getValueOrDefault([b.FIELDS.NAME]),t[b.FIELDS.TYPE]=e.getValueOrDefault([b.FIELDS.TYPE]);var n=e.getValueOrDefault([b.FIELDS.CATEGORY]);v.isUndefined(n)||(t[b.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([b.FIELDS.REVENUE]);v.isUndefined(i)||(t[b.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([b.FIELDS.OPTIONS]);return v.isUndefined(r)||(t[b.FIELDS.OPTIONS]=r),t},n=O,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[b.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[b.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},T.Lt=function(e,t){var n=new w(e[b.FIELDS.NAME],e[b.FIELDS.TYPE],e[b.FIELDS.CATEGORY],e[b.FIELDS.OPTIONS],e[b.FIELDS.REVENUE]);return v.isUndefined(t)||n.setHash(t),n},T.Ot=function(e){for(var t=O,n=[],i=0;i<e.length;i++)for(var r=e[i],a=T.Lt(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new A(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return T.Ot(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(D.sessionSortPredicate),D.sessionize(t),t}}),(function(e,t){e.exports={
OTHER:"other"}}),(function(e,t,n){function i(){return c(B.LAYER_MAP)||{}}function r(e,t){R.dispatch(N.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=W.getPreferredLayerMapString();h(B.LAYER_MAP,e,!0)}function o(e){R.dispatch(N.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=L.now()),R.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i=t.provides;D.isArray(i)||(i=[i]);var r=t.isSticky&&!D.isUndefined(V.getFieldValue(e,i));if(!r){var a;try{var o=P.evaluate(t.getter);D.isFunction(o)&&(o=o((function(){return V.getFieldValue(e,i)}),(function(e){n(i,e)}))),D.isUndefined(o)||(t.isAsync?(a=o.then((function(e){n(i,e)}),(function(e){U.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),R.dispatch(N.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:a})):n(i,o))}catch(e){U.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return a}}}function u(){I(c(B.EVENTS)||[],c(B.EVENT_QUEUE)||[]);var e=f(B.LAYER_STATES);D.forEach(e,(function(e){e.item=D.map(e.item,d)})),S(l(e)),T(c(B.SESSION_STATE)||{}),b(c(B.VISITOR_PROFILE)||{});var n=c(B.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()}function c(e){var t=g(e),n=M.getItem(t);if(!n){var i=v(e);n=M.getItem(i),p(e,n)}return D.isString(n)&&(n=w(n)),n}function l(e){var t=[];return D.each(e,(function(e){D.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function d(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function f(e){var t=q.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return D.each(M.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:w(M.getItem(e))};n.push(a)}})),n}function p(e,t){var n=g(e),i=v(e);M.setItem(n,t),M.removeItem(i)}function h(e,t,i){try{var r=g(e);i||(t=F.stringify(t));try{M.removeItem(v(e)),M.setItem(r,t)}catch(e){throw U.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(83).setItem(r,t)}catch(e){U.warn("Unable to persist visitor data:",e.message)}}function g(e){var n=q.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function v(e){var t=q.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function m(e,t){if(E(e,g(B.EVENT_QUEUE)))R.dispatch(N.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:O.deserialize(w(t))});else if(E(e,g(B.EVENTS)))R.dispatch(N.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:O.deserialize(w(t))});else if(E(e,g(B.LAYER_STATES)))R.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:D.map(w(t),d),merge:!0});else if(E(e,g(B.VARIATION_MAP)))R.dispatch(N.MERGE_VARIATION_ID_MAP,{variationIdMap:w(t)});else if(E(e,g(B.VISITOR_PROFILE))){var n=["custom"],i=w(t);D.each(n,(function(e){var t=K.getPlugin(k.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=_(i,e,t.attributionType);if(!D.isEmpty(n)){var r=[];D.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:[e,i],value:t,metadata:a};r.push(o)})),R.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else U.debug("Attribute type",e,"not used by any audiences")}))}}function _(e,t,n){var i=X.getAttribute(t),r=X.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(D.isEmpty(i))return{data:a,metadata:o};var s={};return D.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===k.AttributionTypes.FIRST_TOUCH&&i>=a||n===k.AttributionTypes.LAST_TOUCH&&a>=i||D.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function E(e,t){if(!t){var n=e.split("$$")[0];return n.indexOf("://")>0}return e.indexOf(t)>0}function y(){var e=X.getVisitorProfile(),t=X.getVisitorProfileMetadata(),n=K.getAllPlugins(k.PluginTypes.visitorProfileProviders);if(n){var i=D.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=D.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function I(e,t){C.initializeStore(e,t)}function S(e){R.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:D.filter(e,(function(e){return!!e.decision}))})}function T(e){e=D.extend({lastSessionTimestamp:0,sessionId:null},e),R.dispatch(N.LOAD_SESSION_STATE,e)}function A(){return"oeu"+L.now()+"r"+Math.random()}function b(e){var t,n,i=K.getAllPlugins(k.PluginTypes.visitorProfileProviders),r=D.filter(i,(function(e){return D.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=D.reduce(t,(function(e,t,n){var i=t,a=D.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),R.dispatch(N.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function w(e){try{return F.parse(e)}catch(t){return U.debug("Failed to parse: ",e,t),null}}var D=n(2),R=n(9),N=n(7),C=n(70),O=n(71),x=n(74),L=n(24),P=n(16),k=n(25),F=n(26),V=n(19),M=n(80).LocalStorage,U=n(23),G=n(12).Promise,B=n(25).VisitorStorageKeys,j=P.get("stores/cookie_options"),z=P.get("stores/global"),H=P.get("stores/layer"),K=P.get("stores/plugins"),Y=P.get("stores/session"),q=P.get("stores/visitor_id"),W=P.get("stores/visitor_bucketing"),X=P.get("stores/visitor"),$=P.get("stores/provider_status");t.getIdFromCookies=function(){var e=t.getCurrentId();return e||(e=A()),{randomId:e}},t.getCurrentId=function(){return x.get(k.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return M.keys().length>0},t.setId=function(e){var n=q.getBucketingId();R.dispatch(N.SET_VISITOR_ID,e),q.getBucketingId()!==n&&u();try{t.maybePersistVisitorId(e)}catch(e){if(U.error("Visitor / Unable to persist visitorId, disabling tracking"),R.dispatch(N.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof x.MismatchError)throw U.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return c(B.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){R.dispatch(N.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=W.getVariationIdMapString();h(B.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){h(B.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){R.dispatch(N.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=D.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=D.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=D.partial(s,t),i=D(e).filter({isAsync:!0}).map(n).filter().value();return D.forEach(D.filter(e,(function(e){return!e.isAsync})),n),i.length>0?G.all(i):G.resolve()},t.persistBehaviorEvents=function(e){h(B.EVENTS,e)},t.persistBehaviorEventQueue=function(e){h(B.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=H.getLayerStates(t.getNamespace());e=D.map(e,(function(e){return D.omit(e,"namespace")})),h(B.LAYER_STATES,e)},t.persistSessionState=function(){h(B.SESSION_STATE,Y.getState())},t.persistVisitorProfile=function(){h(B.VISITOR_PROFILE,y())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return D.includes(e,n)&&D.includes(e,"_")&&D.includes(e,"$$")&&D.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.maybePersistVisitorId=function(e){x.remove(k.COOKIES.VISITOR_UUID),e.randomId&&(j.getAutoRefresh()||t.getCurrentId()!==e.randomId?(x.set(k.COOKIES.VISITOR_ID,e.randomId),U.log("Persisting visitorId:",e.randomId)):U.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return X.getAttribute(e)},t.getPendingAttributeValue=function(e){return $.getPendingAttributeValue(e)},t.isForeignKey=E,t.getIdFromKey=function(e){var n=e.split("$$")[0],i=t.getStorageKeyFromKey(e),r=D.includes(k.StorageKeys,i);if(r)return null;var a=n.indexOf("_"),o=a===-1;return o?n:n.substring(a+1)},t.getStorageKeyFromKey=function(e){var t,n=e.split("$$").pop(),i=n.indexOf("://")>-1;if(i){var r=n.indexOf("_");t=n.substring(r+1)}else t=n;return D.includes(D.values(k.AllStorageKeys),t)?t:null},t.loadForeignData=function(){D.each(M.keys(),(function(e){var t=M.getItem(e);t&&m(e,t)}))},t.getNamespace=function(){return z.getNamespace()},t.serializeFieldKey=function(e){return D.isArray(e)?e.join("$$"):e},t.removeLegacySessionStateCookies=function(){var e=x.getAll();D.forEach(D.keys(e),(function(e){0===e.indexOf(k.COOKIES.SESSION_STATE+"$$")&&x.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),i=s.join("."),!r.includes(g,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return d.dispatch(c.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(75).create,o=n(24),s=n(79),u=n(39),c=n(7),l=n(16),d=n(9),f=l.get("stores/cookie_options"),p=t.SetError=a("CookieSetError"),h=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,o,u;n=s.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],o=i.indexOf("="),o>0&&(u=t.safeDecodeURIComponent(i.substring(0,o)),void 0===c[u])){var l=i.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,a,c){a=r.extend({encodeValue:!0},a),c!==!1&&(c=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=i(u.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var g=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*g)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=a.encodeValue,m=t.get(e,v);if(m!==n){if(!m)throw new p('Failed to set cookie "'+e+'"');throw new h('Expected "'+n+'" for "'+e+'", got "'+m+'"')}}},t.remove=function(e,n){for(var i=u.getLocation().hostname.split(".");i.length>0;)t.set(e,null,r.extend({},n,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var g=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(76),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(77)(),a=n(78);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i,r,a="optimizely_data",o=n(75).create,s=n(81),u=n(39),c=t.Error=o("StorageError");try{r=u.getGlobal("localStorage")}catch(e){throw new c("Unable to read localStorage: "+e.toString())}if(!r)throw new c("localStorage is undefined");i=s.create(r,a),t.LocalStorage=i,t.isOptimizelyKey=function(e){return e.slice(0,a.length)===a}}),(function(e,t,n){function i(e,t){this.Ut=e,this.Gt=t}var r=n(2),a=n(23),o="$$";i.prototype.Bt=function(e){return[this.Gt,e].join(o)},i.prototype.jt=function(e){return e.replace(this.Gt+o,"")},i.prototype.setItem=function(e,t){try{this.Ut.setItem(this.Bt(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.Ut.removeItem(this.Bt(e))},i.prototype.getItem=function(e){var t=null;try{t=this.Ut.getItem(this.Bt(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.Ut);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.Gt)}),this)),r.bind(this.jt,this))},i.prototype.allKeys=function(){return r.keys(this.Ut)},i.prototype.allValues=function(){return r.values(this.Ut)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return u.getGlobal("performance")}var r=n(7),a=n(75).create,o=n(24),s=n(9),u=n(39),c=n(16),l=c.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():o.now()}}),(function(e,t,n){function i(e){var t;if(!o.find(y.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=g.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new I("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(y.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=y.getMessageById(t.id);if(!n){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=y.getNextMessageId();t.id>=i?d.emitInternalError(new I("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new I("Message ID is < 0: "+t.id)):d.emitInternalError(new I("No stored message found for message ID: "+t.id))}else d.emitInternalError(new I("Message ID is not a number: "+t.id));return}n.resolver(t.response),l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=y.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:y.getNextMessageId()}),resolver:n};t?y.isDisabled()||a(i,t):l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(g.stringify(n),t.origin)}var o=n(2),s=n(12).Promise,u=n(7),c=n(16),l=n(9),d=n(84),f=n(75).create,p=n(24),h=n(79),g=n(26),v=n(86),m=n(73),_=n(39),E=n(23),y=c.get("stores/xdomain"),I=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=h.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:y.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(u.XDOMAIN_ADD_FRAME,r),n(r)},h.appendTo(h.querySelector("body"),i)})},t.loadCanonicalOrigins=function(e){l.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=m.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),E.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){_.addEventListener("message",i);var r=function(){return!!h.querySelector("body")},s=function(){return t.loadIframe(e,n)};return v.pollFor(r).then(s).then((function(e){l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME,e),y.isDisabled()||o.each(y.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(85);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(7),o=n(84),s=n(16),u=n(9),c=n(23),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),u.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){u.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(c.error("Error in handler for event:",e,r),o.emitError(r,null,t)):c.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=n(39),o=100,s=50;t.pollFor=function(e,t,n){var u,c;return i.isFunction(n)?c=n:(u=n||o,c=function(){return u--,u<-1}),t=t||s,new r(function(n,i){!(function r(){var o;if(!c()){try{var s=e();if(s)return n(s)}catch(e){o=e}return a.setTimeout(r,t)}i(o||new Error("Poll timed out"))})()})}}),(function(e,t,n){function i(e,n){var i;i=t.isInSameSession(e,n)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):n.getValueOrDefault([s.FIELDS.TIME]),n.setFieldValue(s.FIELDS.SESSION_ID,i)}function r(e,n,i){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(n,e)?a:i?a+1:a-1,n.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=n(61).Event,o=n(24),s=n(62),u=n(61).EventBase;t.CURRENT_SESSION_INDEX=0;var c=18e5;t.isInSameSession=function(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<c},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?o-36e5:n,r="number"!=typeof r?n:r,e=new a(new u("",""),n,r),i(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),c=e.getValueOrDefault([s.FIELDS.SESSION_ID]);n="number"!=typeof n?o-36e5:n,i="number"!=typeof i?0:i,c="number"!=typeof c?n:c,e=new a(new u("",""),n,c,i),r(e,t,!1)},t.sessionize=function(e){var n=e.length;if(0!==n){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<n;a++)i(e[a-1],e[a]);var u=t.CURRENT_SESSION_INDEX,l=e[n-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>c&&(u+=1),e[n-1].setFieldValue(s.FIELDS.SESSION_INDEX,u);for(var a=n-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,n+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(i(t),i(n))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(12).Promise,r=n(39);t.estimateStorage=function(){var e=r.getGlobal("navigator");try{return e.storage.estimate()}catch(e){return i.resolve({usage:null,quota:null})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(9),s=n(26),u=n(23),c=n(12).Promise,l=n(90),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new c(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),e.withCredentials&&(o.withCredentials=e.withCredentials),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,s,l){if(!n)return c.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return c.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(s)&&(s=0);var f={id:n,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Sending event ",n),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),u.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(79),u=n(25),c=n(9),l=n(23),d=o.get("stores/sandbox"),f=n(39);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var n=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=i.mapValues(u.SandboxedFunctions,(function(e){return n[e]}));c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(23),a=n(92),o=n(16),s=o.get("stores/plugins"),u=n(7),c=n(25),l=n(9),d=[n(106),n(107),n(127)],f=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(u.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(c.PluginTypes.apiModules,e),t?(l.dispatch(u.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,c=r.decision.variationId;if(!u||!c)return null;var l,f;return(l=o.find(a.experiments,{id:u}))?(f=o.find(l.variations,{id:c}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:l.name,id:l.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],c=e.getLayerStates();s.onlySingleExperiments&&(c=o.filter(c,(function(e){var n=t.get(e.layerId);return n&&d.isSingleExperimentPolicy(n.policy)})));var l=o.map(c,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=f.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(l,r):l;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(93),u=n(94),c=n(95),l=n(97),d=n(43),f=n(98);t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(e,t,n,i,r,a,u,d){var f={},p={},h={},g={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:f,pages:i.getPagesMap(),experiments:p,variations:h,projectId:d.getProjectId(),snippetId:d.getSnippetId(),accountId:d.getAccountId(),dcpServiceId:d.getDCPServiceId(),revision:d.getRevision(),clientVersion:s.VERSION},v=l.dereferenceChangeId;return o.each(n.getAll(),(function(e){c.defineProperty(f,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"campaign"),c.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return p[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){c.defineProperty(p,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"experiment"),c.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return h[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){c.defineProperty(h,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,v)})}))}),"variation"),t}),"variationMap","byId")}))}))})),g.groups=r.getGroupsMap(),g}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,c,l){return{getCampaignStates:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,c,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return c.isGlobalHoldback()},getActivationId:function(){return c.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=f.getExperimentAndVariation();return e&&(e.referrer=f.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);return r?u.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);if(!r)return null;var a=u.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return u.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),c={experiment:s.experiment,variation:s.variation};return d.isSingleExperimentPolicy(r.layer.policy)||o.extend(c,{campaign:s.layer,holdback:r.isLayerHoldback}),c}}}],t.utils=n(99).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(105)}),(function(e,t,n){t.VERSION="0.117.0",t.ENGINE="js"}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){
var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!v.isSingleExperimentPolicy(e.policy)||!r){var s=!v.isSingleExperimentPolicy(e.policy)&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];v.isSingleExperimentPolicy(e.policy)||(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var h=u.reduce(p,(function(e,t){return e+t.length}),0),g=d.length-1+(s?1:0),m=g*l.length,_=h+m;if(s&&(_+=f.length),_>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-_,y=d.length,I=[],S=d.length-1;S>=0;S--){var T=d[S],A=Math.min(T.length,Math.floor(E/y));E-=A,y--,I.unshift(T.substring(0,A))}var b=u.map(I,(function(e,t){return e+p[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),h=d.names,g=d.idStrings,m=u.reduce(g,(function(e,t){return e+t.length}),0);if(m+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=a-m-c-s.length,E={};E.variation=Math.min(h.variation.length,Math.floor(_/3)),_-=E.variation,E.experiment=Math.min(h.experiment.length,Math.floor(_/2)),_-=E.experiment,E.layer=_;var y={};u.each(h,(function(e,t){y[t]=e.substring(0,E[t])}));var I=[];return v.isSingleExperimentPolicy(e.policy)||I.push(y.layer+g.layer),I=I.concat([y.experiment+g.experiment,y.variation+g.variation,s]),I.join(l)}var u=n(2),c=n(16),l=":",d="everyone_else",f="holdback",p="treatment",h="",g=n(23),v=n(43);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||h,experiment:t.name||h,variation:n.name||h};if(o&&(s=u.mapValues(s,i)),s.experiment===h&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(g.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=h),e===h)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(96),r=n(7),a=n(9),o=n(23);t.defineProperty=function(e,t,n,s,u){i(e,t,(function(){var e=["prop",s,u||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),n()}),!0)}}),(function(e,t){"use strict";function n(e,t,n,i){Object.defineProperty(e,t,{get:function(){var e=n.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},enumerable:!!i,configurable:!0})}e.exports=n}),(function(e,t,n){function i(e){var n=r.cloneDeep(e);return n.changes&&(n.changes=r.map(n.changes,t.dereferenceChangeId)),n.experiments&&r.each(n.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),n}var r=n(2),a=n(16),o=n(22),s=n(95),u=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return c(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=i(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=u.getChange(e);return t?o.safeReference(t):e};var c=function(e,t){var n=r.omit(e,r.keys(t));return r.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(16),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(12).Promise,r=n(100).observeSelector,a=n(101).poll,o=n(103).waitForElement,s=n(104).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:i,waitForElement:o,waitUntil:s}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(_),a),this.observe(t,e)});return function(i){var r=_[i];n.observe(t,e),r.cancelObservation=function(){delete _[i],l.isEmpty(_)&&n.disconnect()}}}return function(e){var t=g.poll(l.partial(a,e));_[e].cancelObservation=function(){t(),delete _[e]}}}function r(e){var t=_[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(_[e]){if(o(_[e]))return 0===_[e].matchedCount&&l.isFunction(_[e].options.onTimeout)&&_[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(_[e].selector);t.length&&(l.each(t,(function(t){t.zt&&t.zt[e]||_[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;_[e]&&_[e].callbackQueue.length;){var t=_[e].callbackQueue.shift();if(u(t,e),_[e].matchedCount=_[e].matchedCount+1,_[e].callback(t),_[e]&&_[e].options.once)return void r(e)}}function u(e,t){e.zt||(e.zt={}),e.zt[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(7),n(16)),f=d.get("stores/directive"),p=n(79),h=(n(25),n(9),n(5).generate),g=n(101),v=n(39),m=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),_={},E=function(e){(E=i())(e)};t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=h();return n=l.assign({},m,n||{}),_[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},E(i),v.setTimeout(l.bind(a,null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=n(2),o=(n(7),n(16)),s=(n(25),n(9),n(5).generate),u=n(39),c=n(102).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=c),l[t]||(l[t]={callbacks:{},id:u.setInterval(a.partial(i,t),t)});var n=s();return l[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(12).Promise,r=n(100).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(12).Promise,r=n(101).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(85);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(107);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){function i(e){var t;return e.eventId&&(t=E.create(e.eventId,e.eventName,"custom")),w.updateAllViewTags(),function(){var n=p.trackCustomEvent(e.eventName,e.tags,t);n?A.log("API / Tracking custom event:",e.eventName,e.tags):A.log("API / Not tracking custom event:",e.eventName)}}function r(e){var t;return e.eventData&&(t=E.create(e.eventData.id,e.eventData.apiName,"click",e.eventData)),function(){var e=p.trackClickEvent(t);e?A.log("API / Tracking click event:",e):A.log("API / Not tracking click event:",e)}}function a(e){var t=e.eventData,n=T.createLayerState(t.layerId,t.experimentId,t.variationId),i=T.createSingle(t.layerId,t.experimentId,t.variationId);return function(){T.recordLayerDecision(n.layerId,n.decisionTicket,n.decision),A.log("API / Tracking decision event:",n),p.trackDecisionEvent(n.decision,n.decisionTicket,i)}}function o(e){var t=w.create(e.eventData.id,e.eventData.apiName),n=w.createState(t.id);return function(){var e=p.trackViewActivation(t,n);e?A.log("API / Tracking pageview event:",e):A.log("API / Not tracking pageview event:",e)}}var s=n(2),u=n(7),c=n(91),l=n(92),d=n(108),f=n(25),p=n(109),h=n(116),g=n(6),v=n(75).create,m=n(24),_=n(117),E=n(120),y=n(85),I=n(9),S=n(26),T=n(112),A=n(23),b=n(121),w=n(122),D=n(73),R=n(83),N=n(16),C=N.get("stores/dimension_data"),O=N.get("stores/view_data"),x=N.get("stores/visitor_id"),L=N.get("stores/layer_data"),P=N.get("stores/directive"),k=!1,F=86400,V=90,M=t.ApiListenerError=v("ApiListenerError");t.event=function(e){var t;switch(e.eventType){case"click":t=r(e);break;case"decision":t=a(e);break;case"pageview":t=o(e);break;case"custom":default:t=i(e)}x.getBucketingId()?t():I.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postActivate,cleanupFn:t})},t.page=function(e){var t=O.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?w.activateViaAPI(t,e.tags):(w.deactivate(t),A.log("API / Deactivated Page",w.description(t)))};x.getBucketingId()?i():I.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){w.setGlobalTags(e.tags)},t.user=function(e){k&&e.visitorId&&(A.log("API / Setting visitor Id:",e.visitorId),D.setId({randomId:e.visitorId})),A.log("API / Setting visitor attributes:",e.attributes),s.each(e.attributes,(function(e,t){var n,i=t,r=C.getById(t)||C.getByApiName(t);r&&(i=r.id,n=r.segmentId||r.id);var a=function(){I.dispatch(u.SET_VISITOR_ATTRIBUTES,{attributes:[{key:["custom",i],value:{id:n,value:e},metadata:{lastModified:m.now()}}]})};x.getBucketingId()?a():I.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postVisitorProfileLoad,cleanupFn:a})}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;_.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<V&&(A.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",V,", setting to minimum."),t=V),A.log("API / Setting cookie age to",t,"days."),I.dispatch(u.SET_COOKIE_AGE,t*F)},t.extendCookieLifetime=function(e){e=s.extend({isEnabled:!0},e),A.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),I.dispatch(u.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){A.log("API / Setting cookie domain to",e.cookieDomain),I.dispatch(u.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);A.log("API / Disabling tracking"),I.dispatch(u.LOAD_DIRECTIVE,{trackingDisabled:!0})}else A.log("API / Disabling everything"),I.dispatch(u.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;s.isUndefined(t)&&(t="INFO"),s.isUndefined(n)&&(n=""),A.setLogMatcher(n),A.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(l[t]||c.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');b.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;g.makeAsyncRequest(t),g.resolveRequest(t,e.data)},t.addListener=function(e){if(!s.isFunction(e.handler))throw new Error("A handler function must be supplied");e=s.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new M(e)}},y.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");y.off(e.token)},t.load=function(e){e.data=s.extend({},e.data),d.normalizeClientData(e.data),I.dispatch(u.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");I.dispatch(u.SET_INTEGRATION_SETTINGS,s.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&s.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,i=e.campaignId;if(i){if(t=L.get(i),!t)throw new Error("Could not find layer "+i)}else if(t=L.getLayerByExperimentId(e.experimentId),i=t.id,!i)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=s.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+i);var r=e.variationId;if(s.isUndefined(e.variationIndex)){if(!s.find(n.variations,{id:r}))throw new Error("Cound not find variation "+r+" in experiment "+e.experimentId)}else if(r=n.variations[e.variationIndex].id,!r)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);D.updateVariationIdMap(i,e.experimentId,r),x.getBucketingId()&&D.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!s.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+S.stringify(e.canonicalOrigins));s.each(e.canonicalOrigins,(function(e){if(!s.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),R.loadCanonicalOrigins(e.canonicalOrigins)},t.disableCrossOrigin=function(){A.log("API / cross origin tracking is DISABLED"),I.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){P.shouldActivate()?h.emitActivateEvent():A.debug("Not activating.")},t.sendEvents=function(){h.emitSendEvents()},t.holdEvents=function(){h.emitHoldEvents()}}),(function(e,t,n){var i=n(2),r=n(25);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=i.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,n){function i(e,t){var n=P.description(t),i=X.isExpectingRedirect(),r=X.getLayerId();if(i&&r===t.id){var a=G.TrackLayerDecisionTimingFlags.preRedirectPolicy;e.timing=a,_(a,[G.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],e),k.log("Called trackLayerDecision for redirect Campaign",n,e)}else{var a=G.TrackLayerDecisionTimingFlags.nonRedirectPolicy;e.timing=a,_(a,[G.NonRedirectPolicies.TRACK_IMMEDIATELY],e),k.log("Called trackLayerDecision for non-redirect Campaign",n,e)}}function r(e,t,n,i,r,a){var o=P.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),k.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t,n){var i=f({activeViewStates:H.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()}),r=n&&n.pageId?h(n):H.getActiveViewTags(),a=y.extend({},r,t),o=n&&n.category?n.category:N.OTHER;return y.extend(i,{eventEntityId:n&&n.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()});return y.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:H.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:N.OTHER,r=h(e);return y.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()});return y.extend(e,{eventTags:{}})}function c(e,t,n,i){var r=null,a=null,o=null;if(t.experimentId){var s=y.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=y.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=V.getReferrer()||D.getReferrer(),l={sessionId:z.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),decisionId:e,activationId:j.getActivationId(),namespace:j.getNamespace(),timestamp:b.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:j.getAccountId(),projectId:j.getProjectId(),revision:String(j.getRevision()),clientVersion:A.VERSION,referrer:c,integrationStringVersion:i.integrationStringVersion,integrationSettings:y.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=y.extend({},e,{isLayerHoldback:t,clientEngine:A.ENGINE,anonymizeIP:y.isNull(j.getAnonymizeIP())?void 0:j.getAnonymizeIP(),userFeatures:g(n),layerStates:Y.getLayerStatesForAnalytics()});return i}function d(e,t,n,i){return{decisionId:e,timestamp:b.now(),revision:j.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:z.getSessionId(),visitorId:Z.getRandomId(),decision:t,decisionTicket:n,userFeatures:g(i),layerStates:Y.getLayerStatesForAnalytics()}}function f(e){var t={eventId:B.generate(),timestamp:b.now(),revision:j.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:z.getSessionId(),isGlobalHoldback:j.isGlobalHoldback(),visitorId:Z.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:g(e.visitorProfile)};return t}function p(e){var t=H.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function h(e){var t={};return e.pageId?p(e.pageId):t}function g(e){var t=K.getAllPlugins(R.PluginTypes.visitorProfileProviders),n=y.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return y.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!y.isUndefined(a)){y.isObject(a)?o=y.map(a,(function(e,t){var n=y.isObject(e)?e:{value:e};return y.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=y(o).map((function(e){return y.pick(y.extend({},i,e),y.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){k.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=m(e,n);k.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),k.debug("Calling each with data: ",t),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(t),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function m(e,t){var n=[];return y.each(K.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){k.error(e)}})),n}function _(e,t,n){var i=E(e,t);k.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),k.debug("Calling each with data: ",n),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(n),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function E(e,t){var n=[];return y.each(K.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){y.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var y=n(2),I=n(7),S=n(84),T=n(70),A=n(93),b=n(24),w=n(16),D=n(79),R=n(25),N=n(72),C=n(85),O=n(110),x=n(111),L=n(9),P=n(112),k=n(23),F=(n(82),n(12).Promise),V=n(98),M=n(113),U=n(115),G=n(114),B=n(5),j=w.get("stores/global"),z=w.get("stores/session"),H=w.get("stores/view"),K=w.get("stores/plugins"),Y=w.get("stores/layer"),q=w.get("stores/layer_data"),W=w.get("stores/observed_redirect"),X=w.get("stores/pending_redirect"),$=w.get("stores/visitor"),Q=w.get("stores/directive"),J=w.get("stores/event_data"),Z=w.get("stores/visitor_id"),ee="COOKIE",te=!0,ne=1e3;t.trackClientActivation=function(){if(Q.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t,n){t=t||{},n||(n=J.getByApiName(e));var i=a(e,t,n),r={name:e,type:x.CUSTOM,category:i.eventCategory,tags:y.omit(i.eventTags,"revenue")};if(y.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:n?n.name||n.apiName:e,apiName:n?n.apiName:void 0,type:x.CUSTOM,tags:y.omit(i.eventTags,"revenue"),category:i.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return T.addEvent(r),v("onCustomEvent",i),i},t.trackDecisionEvent=function(e,t,n){n||(n=q.get(e.layerId));var a=B.generate();L.dispatch(I.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:a});var o;if(ee){o=c(a,e,t,n);var s=X.isExpectingRedirect(),u=X.getLayerId();if(s&&u===n.id){M.persist(o,ee);var d=P.description(n);k.log("Relaying decision for redirect Campaign",d,P.description(n))}}if(!Q.shouldSendTrackingData())return void k.log("Analytics / Not tracking decision for Campaign",P.description(n));var f=$.getVisitorProfile();if(ee){var p=l(o,e.isLayerHoldback,f);i(p,n),r(a,e,t,f,!0,n)}else r(a,e,t,f,!1,n)},t.trackPostRedirectDecisionEvent=function(){if(!Q.shouldSendTrackingData())return F.resolve();if(W.hasTracked())return F.resolve();var e=W.get();if(!e)return F.resolve();var t=$.getVisitorProfile(),n=l(e,!1,t),i=G.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,_(i,[G.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var r=new F(function(e,t){var n=C.on({filter:{type:O.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),C.off(n)}})}),a=U.makeTimeoutPromise(ne);return F.race([r,a]).then((function(){k.log("Calling trackers after successful sync")}),(function(e){k.warn("Calling trackers after failed sync:",e)})).then((function(){t=$.getVisitorProfile(),n=l(e,!1,t),n.timing=G.TrackLayerDecisionTimingFlags.postRedirectPolicy,_(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){k.error("Error when calling trackers after sync:",e)}))}return _(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA),F.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return T.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e,t){if(t||(t=H.getViewState(e.id)),!t.isActive)return void k.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:x.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:x.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData()?(T.addEvent(i),L.dispatch(I.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(9),u=o.get("stores/global"),c=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:a.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"},t.createSingle=function(e,t,n){var i={id:e,policy:"single_experiment",holdback:0,experiments:[{id:t,variations:[{id:n,actions:[]}]}]};return i},t.createLayerState=function(e,t,n){var i={layerId:e,decision:{layerId:e,experimentId:t,variationId:n,isLayerHoldback:!1},decisionTicket:{audienceIds:[]}};return i}}),(function(e,t,n){function i(e){try{var t=r(e)}catch(e){return m.error("Relay / Error computing redirect relay cookie: ",e),void p.emitError(e)}m.debug("Relay / Setting redirect relay cookie:",t);try{f.set(g.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){m.error("Relay / Failed to set redirect relay cookie",e),p.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=S[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+y+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=f.get(g.COOKIES.REDIRECT,!1);if(e){m.log("Relay / Found redirect cookie:",e);var t=o(e);if(!t.visitorId){m.warn("Relay / Missing required field visitorId, attempting to load from VISITOR_ID cookie");var n=f.get(g.COOKIES.VISITOR_ID);t.visitorId=l.isString(n)?n:null}return t}}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void m.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=T[i];if(!r&&(r=l.find(I,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+y)})),!r))return void m.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+y.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return m.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=E.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){m.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function u(e,t){var n=null,i=E.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){m.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function c(e){var t=e.pageId||void 0;v.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),v.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),v.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(7),f=n(74),p=n(84),h=n(16),g=n(25),v=n(9),m=n(23),_=n(114),E=h.get("stores/plugins"),y=".",I=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:u,isNullable:!0}],S={},T={};l.forEach(I,(function(e){S[e.name]=e,T[e.relayName]=e})),t.persist=function(e,t){t===_.RedirectRelayMedia.COOKIE?i(e):m.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=a()),e){var t=[];return l.forEach(I,(function(n){(l.isNull(e[n.name])||l.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void m.error("Relay / Observed redirect data with missing fields:",t):(v.dispatch(d.LOAD_REDIRECT_DATA,e),v.dispatch(d.ADD_CLEANUP_FN,{lifecycle:g.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){c(e)}}),e)}}}),(function(e,t,n){var i=n(8);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({
TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(12).Promise,r=n(39);t.makeTimeoutPromise=function(e){return new i(function(t,n){r.setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"],n=r.extend({},e);return n.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),n}var r=n(2),a=n(16),o=a.get("stores/audience_data"),s=n(85),u=n(110),c=n(95),l=n(97);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=l.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};c.defineProperty(t,"changes",(function(){return i(e).changeSet}),"actionAppliedEvent");var n={type:u.TYPES.ACTION,name:"applied",data:t};s.emit(n)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={decision:e};c.defineProperty(n,"actions",(function(){return r.map(t,i)}),"appliedAllForDecisionEvent");var a={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:n};s.emit(a)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){function i(){var e=Boolean(E.result(window.optimizely,"initialized"));b.dispatch(y.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){b.dispatch(y.LOAD_DIRECTIVE,{mutationObserverAPISupported:C.isMutationObserverAPISupported()})}function a(){var e=C.getUserAgent()||"";if(!E.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(E.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};E.some(t,n)&&(w.log("Directive / Disabling tracking"),b.dispatch(y.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(A.COOKIES.OPT_OUT),n=R.getQueryParamValue(O.OPT_OUT),i="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.",a="true"===n||"false"===n;e?a&&n!==e?t.setOptOut("true"===n):b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):"true"===n&&t.setOptOut(!0),a&&C.alert("true"===n?i:r)}function s(){var e=!1,t=[O.AB_PREVIEW,O.DISABLE];t.push(O.EDITOR);for(var n=0;n<t.length;n++)if("true"===R.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}b.dispatch(y.LOAD_DIRECTIVE,{disabled:e})}function u(){b.dispatch(y.LOAD_DIRECTIVE,{isPreview:!1})}function c(){var e=R.getQueryParamValue(O.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),b.dispatch(y.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){b.dispatch(y.LOAD_DIRECTIVE,{isEditor:!1})}function d(){b.dispatch(y.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=C.getGlobal("optlyDesktop"),t=!(!e||E.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===R.getQueryParamValue(O.EDITOR_V2);e&&w.log("Directive / Is running in editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function h(){var e=S.get(A.COOKIES.TOKEN)||null,t=R.getQueryParamValue(O.TOKEN)||e;b.dispatch(y.LOAD_DIRECTIVE,{projectToken:t})}function g(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(O.FORCE_AUDIENCES);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceAudienceIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Audience IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function v(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(O.FORCE_VARIATIONS);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceVariationIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Variation IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceVariationIds:t}))}function m(){var e=R.getQueryParamValue(O.FORCE_TRACKING);e&&b.dispatch(y.LOAD_DIRECTIVE,{forceTracking:e})}function _(){var e="OFF",t=R.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var E=n(2),y=n(7),I=n(84),S=n(74),T=n(75).create,A=n(25),b=n(9),w=n(23),D=t.JSONParseError=T("JSONParseError"),R=n(118),N=n(26),C=n(39),O={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){_(),a(),i(),r(),o(),s(),l(),u(),c(),d(),f(),p(),h(),g(),v(),m()};var x=31536e3;t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",{maxAge:10*x},!0)):S.remove(A.COOKIES.OPT_OUT),b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(119),r=n(39);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,n){var i=n(2),r=n(39);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(2);t.create=function(e,t,n,r){var a=i.extend({category:"other"},r,{id:e,apiName:t,eventType:n});return a}}),(function(e,t,n){var i=n(2),r=n(7),a=n(16),o=n(25),s=n(85),u=n(9);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=g.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):p.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(7),o=n(116),s=n(123),u=n(24),c=n(16),l=n(25),d=n(111),f=n(9),p=n(23),h=n(124),g=c.get("stores/plugins"),v=c.get("stores/view"),m=c.get("stores/view_data"),_=c.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=v.getActiveViewStates();r.each(e,(function(e){var n=m.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=h.getTagValue(t)}catch(e){e instanceof h.Error?p.warn("Page / Ignoring unparseable tag",t,e):p.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(g.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=c.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=m.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var a=[];r.each(e,(function(e){var r=v.getViewState(e.id),s=t.createViewTicket();if(r.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,s)||t.deactivate(e)}catch(n){p.error("Page / Error evaluating whether to deactivate page ",t.description(e),n)}else p.log("Not activating Page, already active ",t.description(e));else{try{if(!t.hasValidStaticConditions(e,s))return void p.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(n){return void p.error("Page / Error evaluating whether to activate page ",t.description(e),n)}a.push(e),t.setViewActiveState(e,!0),p.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n});var u=_.getByPageId(e.id);i(u,!0)}})),r.isEmpty(a)||o.emitViewsActivated({views:a})},t.deactivate=function(e){var n=v.getViewState(e.id);if(!n.isActive)return void p.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),p.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=_.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=g.getAllPlugins(l.PluginTypes.viewMatchers);p.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),p.debug("Matching to current value:",t);var i=s.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return p.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e},t.create=function(e,t){var n={id:e,apiName:t,category:"other"};return n},t.createState=function(e){var t={id:e,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}};return t}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),c.groupCollapsed('Condition / Applying operator "'+i+'" with args',u.stringify(r));try{n=d[i](r,t),c.debug("Condition / Result:",n)}finally{c.groupEnd()}return n}return n=t(e),c.debug("Condition / Evaluated:",u.stringify(e),":",n),n}var s=n(2),u=n(26),c=n(23),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(25).PluginTypes,r=n(16),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(125),t.Error=n(126).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(75).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(16);i.register("env/jquery",n(129))}),(function(e,t,n){n(39);e.exports=n(130)}),(function(e,t,n){var i,r;/** @license
	 * jQuery JavaScript Library v1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-23T17:34Z
	 */
!(function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!=typeof window?window:this,(function(n,a){function o(e){var t="length"in e&&e.length,n=q.type(e);return"function"!==n&&!q.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function s(e,t,n){if(q.isFunction(t))return q.grep(e,(function(e,i){return!!t.call(e,i,e)!==n}));if(t.nodeType)return q.grep(e,(function(e){return e===t!==n}));if("string"==typeof t){if(te.test(t))return q.filter(t,e,n);t=q.filter(t,e)}return q.grep(e,(function(e){return q.inArray(e,t)>=0!==n}))}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function c(e){var t=ce[e]={};return q.each(e.match(ue)||[],(function(e,n){t[n]=!0})),t}function l(){ie.addEventListener?(ie.removeEventListener("DOMContentLoaded",d,!1),n.removeEventListener("load",d,!1)):(ie.detachEvent("onreadystatechange",d),n.detachEvent("onload",d))}function d(){(ie.addEventListener||"load"===event.type||"complete"===ie.readyState)&&(l(),q.ready())}function f(e,t,n){if(void 0===n&&1===e.nodeType){var i="data-"+t.replace(he,"-$1").toLowerCase();if(n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:pe.test(n)?q.parseJSON(n):n)}catch(e){}q.data(e,t,n)}else n=void 0}return n}function p(e){var t;for(t in e)if(("data"!==t||!q.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function h(e,t,n,i){if(q.acceptData(e)){var r,a,o=q.expando,s=e.nodeType,u=s?q.cache:e,c=s?e[o]:e[o]&&o;if(c&&u[c]&&(i||u[c].data)||void 0!==n||"string"!=typeof t)return c||(c=s?e[o]=V.pop()||q.guid++:o),u[c]||(u[c]=s?{}:{toJSON:q.noop}),"object"!=typeof t&&"function"!=typeof t||(i?u[c]=q.extend(u[c],t):u[c].data=q.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==n&&(a[q.camelCase(t)]=n),"string"==typeof t?(r=a[t],null==r&&(r=a[q.camelCase(t)])):r=a,r}}function g(e,t,n){if(q.acceptData(e)){var i,r,a=e.nodeType,o=a?q.cache:e,s=a?e[q.expando]:q.expando;if(o[s]){if(t&&(i=n?o[s]:o[s].data)){q.isArray(t)?t=t.concat(q.map(t,q.camelCase)):t in i?t=[t]:(t=q.camelCase(t),t=t in i?[t]:t.split(" ")),r=t.length;for(;r--;)delete i[t[r]];if(n?!p(i):!q.isEmptyObject(i))return}(n||(delete o[s].data,p(o[s])))&&(a?q.cleanData([e],!0):K.deleteExpando||o!=o.window?delete o[s]:o[s]=null)}}}function v(){return!0}function m(){return!1}function _(){try{return ie.activeElement}catch(e){}}function E(e){var t=be.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function y(e,t){var n,i,r=0,a=typeof e.getElementsByTagName!==fe?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==fe?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],n=e.childNodes||e;null!=(i=n[r]);r++)!t||q.nodeName(i,t)?a.push(i):q.merge(a,y(i,t));return void 0===t||t&&q.nodeName(e,t)?q.merge([e],a):a}function I(e){Ee.test(e.type)&&(e.defaultChecked=e.checked)}function S(e,t){return q.nodeName(e,"table")&&q.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function T(e){return e.type=(null!==q.find.attr(e,"type"))+"/"+e.type,e}function A(e){var t=Fe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n,i=0;null!=(n=e[i]);i++)q._data(n,"globalEval",!t||q._data(t[i],"globalEval"))}function w(e,t){if(1===t.nodeType&&q.hasData(e)){var n,i,r,a=q._data(e),o=q._data(t,a),s=a.events;if(s){delete o.handle,o.events={};for(n in s)for(i=0,r=s[n].length;i<r;i++)q.event.add(t,n,s[n][i])}o.data&&(o.data=q.extend({},o.data))}}function D(e,t){var n,i,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!K.noCloneEvent&&t[q.expando]){r=q._data(t);for(i in r.events)q.removeEvent(t,i,r.handle);t.removeAttribute(q.expando)}"script"===n&&t.text!==e.text?(T(t).text=e.text,A(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),K.html5Clone&&e.innerHTML&&!q.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ee.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function R(e,t){var i,r=q(t.createElement(e)).appendTo(t.body),a=n.getDefaultComputedStyle&&(i=n.getDefaultComputedStyle(r[0]))?i.display:q.css(r[0],"display");return r.detach(),a}function N(e){var t=ie,n=He[e];return n||(n=R(e,t),"none"!==n&&n||(Be=(Be||q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Be[0].contentWindow||Be[0].contentDocument).document,t.write(),t.close(),n=R(e,t),Be.detach()),He[e]=n),n}function C(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function O(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=tt.length;r--;)if(t=tt[r]+n,t in e)return t;return i}function x(e,t){for(var n,i,r,a=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(a[o]=q._data(i,"olddisplay"),n=i.style.display,t?(a[o]||"none"!==n||(i.style.display=""),""===i.style.display&&me(i)&&(a[o]=q._data(i,"olddisplay",N(i.nodeName)))):(r=me(i),(n&&"none"!==n||!r)&&q._data(i,"olddisplay",r?n:q.css(i,"display"))));for(o=0;o<s;o++)i=e[o],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?a[o]||"":"none"));return e}function L(e,t,n){var i=Qe.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function P(e,t,n,i,r){for(var a=n===(i?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=q.css(e,n+ve[a],!0,r)),i?("content"===n&&(o-=q.css(e,"padding"+ve[a],!0,r)),"margin"!==n&&(o-=q.css(e,"border"+ve[a]+"Width",!0,r))):(o+=q.css(e,"padding"+ve[a],!0,r),"padding"!==n&&(o+=q.css(e,"border"+ve[a]+"Width",!0,r)));return o}function k(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,a=je(e),o=K.boxSizing&&"border-box"===q.css(e,"boxSizing",!1,a);if(r<=0||null==r){if(r=ze(e,t,a),(r<0||null==r)&&(r=e.style[t]),Ye.test(r))return r;i=o&&(K.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(o?"border":"content"),i,a)+"px"}function F(e,t,n,i){var r;if(q.isArray(t))q.each(t,(function(t,r){n||pt.test(e)?i(e,r):F(e+"["+("object"==typeof r?t:"")+"]",r,n,i)}));else if(n||"object"!==q.type(t))i(e,t);else for(r in t)F(e+"["+r+"]",t[r],n,i)}var V=[],M=V.slice,U=V.concat,G=V.push,B=V.indexOf,j={},z=j.toString,H=j.hasOwnProperty,K={},Y="1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions",q=function(e,t){return new q.fn.init(e,t)},W=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,X=/^-ms-/,$=/-([\da-z])/gi,Q=function(e,t){return t.toUpperCase()};q.fn=q.prototype={jquery:Y,constructor:q,selector:"",length:0,toArray:function(){return M.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:M.call(this)},pushStack:function(e){var t=q.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return q.each(this,e,t)},map:function(e){return this.pushStack(q.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(M.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:G,sort:V.sort,splice:V.splice},q.extend=q.fn.extend=function(){var e,t,n,i,r,a,o=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[s]||{},s++),"object"==typeof o||q.isFunction(o)||(o={}),s===u&&(o=this,s--);s<u;s++)if(null!=(r=arguments[s]))for(i in r)e=o[i],n=r[i],o!==n&&(c&&n&&(q.isPlainObject(n)||(t=q.isArray(n)))?(t?(t=!1,a=e&&q.isArray(e)?e:[]):a=e&&q.isPlainObject(e)?e:{},o[i]=q.extend(c,a,n)):void 0!==n&&(o[i]=n));return o},q.extend({expando:"jQuery"+(Y+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===q.type(e)},isArray:Array.isArray||function(e){return"array"===q.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!q.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==q.type(e)||e.nodeType||q.isWindow(e))return!1;try{if(e.constructor&&!H.call(e,"constructor")&&!H.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(K.ownLast)for(t in e)return H.call(e,t);for(t in e);return void 0===t||H.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?j[z.call(e)]||"object":typeof e},globalEval:function(e){e&&q.trim(e)&&(n.execScript||function(e){n["eval"].call(n,e)})(e)},camelCase:function(e){return e.replace(X,"ms-").replace($,Q)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,a=e.length,s=o(e);if(n){if(s)for(;r<a&&(i=t.apply(e[r],n),i!==!1);r++);else for(r in e)if(i=t.apply(e[r],n),i===!1)break}else if(s)for(;r<a&&(i=t.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(i=t.call(e[r],r,e[r]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(W,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?q.merge(n,"string"==typeof e?[e]:e):G.call(n,e)),n},inArray:function(e,t,n){var i;if(t){if(B)return B.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],a=0,o=e.length,s=!n;a<o;a++)i=!t(e[a],a),i!==s&&r.push(e[a]);return r},map:function(e,t,n){var i,r=0,a=e.length,s=o(e),u=[];if(s)for(;r<a;r++)i=t(e[r],r,n),null!=i&&u.push(i);else for(r in e)i=t(e[r],r,n),null!=i&&u.push(i);return U.apply([],u)},guid:1,proxy:function(e,t){var n,i,r;if("string"==typeof t&&(r=e[t],t=e,e=r),q.isFunction(e))return n=M.call(arguments,2),i=function(){return e.apply(t||this,n.concat(M.call(arguments)))},i.guid=e.guid=e.guid||q.guid++,i},now:function(){return+new Date},support:K}),q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e,t){j["[object "+t+"]"]=t.toLowerCase()}));var J=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
(function(e){function t(e,t,n,i){var r,a,o,s,u,c,d,p,h,g;if((t?t.ownerDocument||t:G)!==x&&O(t),t=t||x,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!i&&P){if(11!==s&&(r=_e.exec(e)))if(o=r[1]){if(9===s){if(a=t.getElementById(o),!a||!a.parentNode)return n;if(a.id===o)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(o))&&M(t,a)&&a.id===o)return n.push(a),n}else{if(r[2])return J.apply(n,t.getElementsByTagName(e)),n;if((o=r[3])&&I.getElementsByClassName)return J.apply(n,t.getElementsByClassName(o)),n}if(I.qsa&&(!k||!k.test(e))){if(p=d=U,h=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=b(e),(d=t.getAttribute("id"))?p=d.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+f(c[u]);h=Ee.test(e)&&l(t.parentNode)||t,g=c.join(",")}if(g)try{return J.apply(n,h.querySelectorAll(g)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return D(e.replace(ue,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>S.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[U]=!0,e}function r(e){var t=x.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),i=e.length;i--;)S.attrHandle[n[i]]=t}function o(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||q)-(~e.sourceIndex||q);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i((function(t){return t=+t,i((function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;)n[r=a[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,a=j++;return t.first?function(t,n,a){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,a)}:function(t,n,o){var s,u,c=[B,a];if(o){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,o))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(u=t[U]||(t[U]={}),(s=u[i])&&s[0]===B&&s[1]===a)return c[2]=s[2];if(u[i]=c,c[2]=e(t,n,o))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function g(e,n,i){for(var r=0,a=n.length;r<a;r++)t(e,n[r],i);return i}function v(e,t,n,i,r){for(var a,o=[],s=0,u=e.length,c=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,i,r)||(o.push(a),c&&t.push(s)));return o}function m(e,t,n,r,a,o){return r&&!r[U]&&(r=m(r)),a&&!a[U]&&(a=m(a,o)),i((function(i,o,s,u){var c,l,d,f=[],p=[],h=o.length,m=i||g(t||"*",s.nodeType?[s]:s,[]),_=!e||!i&&t?m:v(m,f,e,s,u),E=n?a||(i?e:h||r)?[]:o:_;if(n&&n(_,E,s,u),r)for(c=v(E,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(E[p[l]]=!(_[p[l]]=d));if(i){if(a||e){if(a){for(c=[],l=E.length;l--;)(d=E[l])&&c.push(_[l]=d);a(null,E=[],c,u)}for(l=E.length;l--;)(d=E[l])&&(c=a?ee(i,d):f[l])>-1&&(i[c]=!(o[c]=d))}}else E=v(E===o?E.splice(h,E.length):E),a?a(null,o,E,u):J.apply(o,E)}))}function _(e){for(var t,n,i,r=e.length,a=S.relative[e[0].type],o=a||S.relative[" "],s=a?1:0,u=p((function(e){return e===t}),o,!0),c=p((function(e){return ee(t,e)>-1}),o,!0),l=[function(e,n,i){var r=!a&&(i||n!==R)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];s<r;s++)if(n=S.relative[e[s].type])l=[p(h(l),n)];else{if(n=S.filter[e[s].type].apply(null,e[s].matches),n[U]){for(i=++s;i<r&&!S.relative[e[i].type];i++);return m(s>1&&h(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<i&&_(e.slice(s,i)),i<r&&_(e=e.slice(i)),i<r&&f(e))}l.push(n)}return h(l)}function E(e,n){var r=n.length>0,a=e.length>0,o=function(i,o,s,u,c){var l,d,f,p=0,h="0",g=i&&[],m=[],_=R,E=i||a&&S.find["TAG"]("*",c),y=B+=null==_?1:Math.random()||.1,I=E.length;for(c&&(R=o!==x&&o);h!==I&&null!=(l=E[h]);h++){if(a&&l){for(d=0;f=e[d++];)if(f(l,o,s)){u.push(l);break}c&&(B=y)}r&&((l=!f&&l)&&p--,i&&g.push(l))}if(p+=h,r&&h!==p){for(d=0;f=n[d++];)f(g,m,o,s);if(i){if(p>0)for(;h--;)g[h]||m[h]||(m[h]=$.call(u));m=v(m)}J.apply(u,m),c&&!i&&m.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(B=y,R=_),g};return r?i(o):o}var y,I,S,T,A,b,w,D,R,N,C,O,x,L,P,k,F,V,M,U="sizzle"+1*new Date,G=e.document,B=0,j=0,z=n(),H=n(),K=n(),Y=function(e,t){return e===t&&(C=!0),0},q=1<<31,W={}.hasOwnProperty,X=[],$=X.pop,Q=X.push,J=X.push,Z=X.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),ae="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,_e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ee=/[+~]/,ye=/'|\\/g,Ie=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Se=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Te=function(){O()};try{J.apply(X=Z.call(G.childNodes),G.childNodes),X[G.childNodes.length].nodeType}catch(e){J={apply:X.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}I=t.support={},A=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},O=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:G;return i!==x&&9===i.nodeType&&i.documentElement?(x=i,L=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),P=!A(i),I.attributes=r((function(e){return e.className="i",!e.getAttribute("className")})),I.getElementsByTagName=r((function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length})),I.getElementsByClassName=me.test(i.getElementsByClassName),I.getById=r((function(e){return L.appendChild(e).id=U,!i.getElementsByName||!i.getElementsByName(U).length})),I.getById?(S.find["ID"]=function(e,t){if("undefined"!=typeof t.getElementById&&P){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},S.filter["ID"]=function(e){var t=e.replace(Ie,Se);return function(e){return e.getAttribute("id")===t}}):(delete S.find["ID"],S.filter["ID"]=function(e){var t=e.replace(Ie,Se);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),S.find["TAG"]=I.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):I.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];)1===n.nodeType&&i.push(n);return i}return a},S.find["CLASS"]=I.getElementsByClassName&&function(e,t){if(P)return t.getElementsByClassName(e)},F=[],k=[],(I.qsa=me.test(i.querySelectorAll))&&(r((function(e){L.appendChild(e).innerHTML="<a id='"+U+"'></a><select id='"+U+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||k.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+U+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+U+"+*").length||k.push(".#.+[+~]")})),r((function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")}))),(I.matchesSelector=me.test(V=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&r((function(e){I.disconnectedMatch=V.call(e,"div"),V.call(e,"[s!='']:x"),F.push("!=",oe)})),k=k.length&&new RegExp(k.join("|")),F=F.length&&new RegExp(F.join("|")),t=me.test(L.compareDocumentPosition),M=t||me.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Y=t?function(e,t){if(e===t)return C=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!I.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===G&&M(G,e)?-1:t===i||t.ownerDocument===G&&M(G,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return C=!0,0;var n,r=0,a=e.parentNode,s=t.parentNode,u=[e],c=[t];if(!a||!s)return e===i?-1:t===i?1:a?-1:s?1:N?ee(N,e)-ee(N,t):0;if(a===s)return o(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[r]===c[r];)r++;return r?o(u[r],c[r]):u[r]===G?-1:c[r]===G?1:0},i):x},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==x&&O(e),n=n.replace(de,"='$1']"),I.matchesSelector&&P&&(!F||!F.test(n))&&(!k||!k.test(n)))try{var i=V.call(e,n);if(i||I.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,x,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==x&&O(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==x&&O(e);var n=S.attrHandle[t.toLowerCase()],i=n&&W.call(S.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==i?i:I.attributes||!P?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(C=!I.detectDuplicates,N=!I.sortStable&&e.slice(0),e.sort(Y),C){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return N=null,e},T=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=T(t);return n},S=t.selectors={cacheLength:50,createPseudo:i,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ie,Se),e[3]=(e[3]||e[4]||e[5]||"").replace(Ie,Se),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he["CHILD"].test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=b(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ie,Se).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,(function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,n,i){return function(r){var a=t.attr(r,e);return null==a?"!="===n:!n||(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(a===i||a.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,h,g=a!==o?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),_=!u&&!s;if(v){if(a){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===m:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[o?v.firstChild:v.lastChild],o&&_){for(l=v[U]||(v[U]={}),c=l[e]||[],p=c[0]===B&&c[1],f=c[0]===B&&c[2],d=p&&v.childNodes[p];d=++p&&d&&d[g]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){l[e]=[B,p,f];break}}else if(_&&(c=(t[U]||(t[U]={}))[e])&&c[0]===B)f=c[1];else for(;(d=++p&&d&&d[g]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==m:1!==d.nodeType)||!++f||(_&&((d[U]||(d[U]={}))[e]=[B,f]),d!==t)););return f-=r,f===i||f%i===0&&f/i>=0}}},PSEUDO:function(e,n){var r,a=S.pseudos[e]||S.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[U]?a(n):a.length>1?(r=[e,e,"",n],S.setFilters.hasOwnProperty(e.toLowerCase())?i((function(e,t){for(var i,r=a(e,n),o=r.length;o--;)i=ee(e,r[o]),e[i]=!(t[i]=r[o])})):function(e){return a(e,0,r)}):a}},pseudos:{not:i((function(e){var t=[],n=[],r=w(e.replace(ue,"$1"));return r[U]?i((function(e,t,n,i){for(var a,o=r(e,null,i,[]),s=e.length;s--;)(a=o[s])&&(e[s]=!(t[s]=a))})):function(e,i,a){return t[0]=e,r(t,null,a,n),t[0]=null,!n.pop()}})),has:i((function(e){return function(n){return t(e,n).length>0}})),contains:i((function(e){return e=e.replace(Ie,Se),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}})),lang:i((function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ie,Se).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===x.activeElement&&(!x.hasFocus||x.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!S.pseudos["empty"](e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c((function(){return[0]})),last:c((function(e,t){return[t-1]})),eq:c((function(e,t,n){return[n<0?n+t:n]})),even:c((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:c((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:c((function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e})),gt:c((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},S.pseudos["nth"]=S.pseudos["eq"];for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})S.pseudos[y]=s(y);for(y in{submit:!0,reset:!0})S.pseudos[y]=u(y);return d.prototype=S.filters=S.pseudos,S.setFilters=new d,b=t.tokenize=function(e,n){var i,r,a,o,s,u,c,l=H[e+" "];if(l)return n?0:l.slice(0);for(s=e,u=[],c=S.preFilter;s;){i&&!(r=ce.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(a=[])),i=!1,(r=le.exec(s))&&(i=r.shift(),a.push({value:i,type:r[0].replace(ue," ")}),s=s.slice(i.length));for(o in S.filter)!(r=he[o].exec(s))||c[o]&&!(r=c[o](r))||(i=r.shift(),a.push({value:i,type:o,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):H(e,u).slice(0)},w=t.compile=function(e,t){var n,i=[],r=[],a=K[e+" "];if(!a){for(t||(t=b(e)),n=t.length;n--;)a=_(t[n]),a[U]?i.push(a):r.push(a);a=K(e,E(r,i)),a.selector=e}return a},D=t.select=function(e,t,n,i){var r,a,o,s,u,c="function"==typeof e&&e,d=!i&&b(e=c.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&I.getById&&9===t.nodeType&&P&&S.relative[a[1].type]){if(t=(S.find["ID"](o.matches[0].replace(Ie,Se),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(r=he["needsContext"].test(e)?0:a.length;r--&&(o=a[r],!S.relative[s=o.type]);)if((u=S.find[s])&&(i=u(o.matches[0].replace(Ie,Se),Ee.test(a[0].type)&&l(t.parentNode)||t))){if(a.splice(r,1),e=i.length&&f(a),!e)return J.apply(n,i),n;break}}return(c||w(e,d))(i,t,!P,n,Ee.test(e)&&l(t.parentNode)||t),n},I.sortStable=U.split("").sort(Y).join("")===U,I.detectDuplicates=!!C,O(),I.sortDetached=r((function(e){return 1&e.compareDocumentPosition(x.createElement("div"))})),r((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||a("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),I.attributes&&r((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||a("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),r((function(e){return null==e.getAttribute("disabled")}))||a(te,(function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),t})(n);q.find=J,q.expr=J.selectors,q.expr[":"]=q.expr.pseudos,q.unique=J.uniqueSort,q.text=J.getText,q.isXMLDoc=J.isXML,q.contains=J.contains;var Z=q.expr.match.needsContext,ee=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,te=/^.[^:#\[\.,]*$/;q.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?q.find.matchesSelector(i,e)?[i]:[]:q.find.matches(e,q.grep(t,(function(e){return 1===e.nodeType})))},q.fn.extend({find:function(e){var t,n=[],i=this,r=i.length;if("string"!=typeof e)return this.pushStack(q(e).filter((function(){for(t=0;t<r;t++)if(q.contains(i[t],this))return!0})));for(t=0;t<r;t++)q.find(e,i[t],n);return n=this.pushStack(r>1?q.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&Z.test(e)?q(e):e||[],!1).length}});var ne,ie=n.document,re=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ae=q.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:re.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ne).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof q?t[0]:t,q.merge(this,q.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ie,!0)),ee.test(n[1])&&q.isPlainObject(t))for(n in t)q.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(i=ie.getElementById(n[2]),i&&i.parentNode){if(i.id!==n[2])return ne.find(e);this.length=1,this[0]=i}return this.context=ie,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):q.isFunction(e)?"undefined"!=typeof ne.ready?ne.ready(e):e(q):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),q.makeArray(e,this))};ae.prototype=q.fn,ne=q(ie);var oe=/^(?:parents|prev(?:Until|All))/,se={children:!0,contents:!0,next:!0,prev:!0};q.extend({dir:function(e,t,n){for(var i=[],r=e[t];r&&9!==r.nodeType&&(void 0===n||1!==r.nodeType||!q(r).is(n));)1===r.nodeType&&i.push(r),r=r[t];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),q.fn.extend({has:function(e){var t,n=q(e,this),i=n.length;return this.filter((function(){for(t=0;t<i;t++)if(q.contains(this,n[t]))return!0}))},closest:function(e,t){for(var n,i=0,r=this.length,a=[],o=Z.test(e)||"string"!=typeof e?q(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&q.find.matchesSelector(n,e))){a.push(n);break}return this.pushStack(a.length>1?q.unique(a):a)},index:function(e){return e?"string"==typeof e?q.inArray(this[0],q(e)):q.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(q.unique(q.merge(this.get(),q(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),q.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return q.dir(e,"parentNode")},parentsUntil:function(e,t,n){return q.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return q.dir(e,"nextSibling")},prevAll:function(e){return q.dir(e,"previousSibling")},nextUntil:function(e,t,n){return q.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return q.dir(e,"previousSibling",n)},siblings:function(e){return q.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return q.sibling(e.firstChild)},contents:function(e){return q.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:q.merge([],e.childNodes)}},(function(e,t){q.fn[e]=function(n,i){var r=q.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=q.filter(i,r)),this.length>1&&(se[e]||(r=q.unique(r)),oe.test(e)&&(r=r.reverse())),this.pushStack(r)}}));var ue=/\S+/g,ce={};q.Callbacks=function(e){e="string"==typeof e?ce[e]||c(e):q.extend({},e);var t,n,i,r,a,o,s=[],u=!e.once&&[],l=function(c){for(n=e.memory&&c,i=!0,a=o||0,o=0,r=s.length,t=!0;s&&a<r;a++)if(s[a].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,s&&(u?u.length&&l(u.shift()):n?s=[]:d.disable())},d={add:function(){if(s){var i=s.length;!(function t(n){q.each(n,(function(n,i){var r=q.type(i);"function"===r?e.unique&&d.has(i)||s.push(i):i&&i.length&&"string"!==r&&t(i)}))})(arguments),t?r=s.length:n&&(o=i,l(n))}return this},remove:function(){return s&&q.each(arguments,(function(e,n){for(var i;(i=q.inArray(n,s,i))>-1;)s.splice(i,1),t&&(i<=r&&r--,i<=a&&a--)})),this},has:function(e){return e?q.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],r=0,this},disable:function(){return s=u=n=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!s||i&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):l(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},q.extend({Deferred:function(e){var t=[["resolve","done",q.Callbacks("once memory"),"resolved"],["reject","fail",q.Callbacks("once memory"),"rejected"],["notify","progress",q.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return q.Deferred((function(n){q.each(t,(function(t,a){var o=q.isFunction(e[t])&&e[t];r[a[1]]((function(){var e=o&&o.apply(this,arguments);e&&q.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a[0]+"With"](this===i?n.promise():this,o?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?q.extend(e,i):i}},r={};return i.pipe=i.then,q.each(t,(function(e,a){var o=a[2],s=a[3];i[a[1]]=o.add,s&&o.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),r[a[0]]=function(){return r[a[0]+"With"](this===r?i:this,arguments),this},r[a[0]+"With"]=o.fireWith})),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,a=M.call(arguments),o=a.length,s=1!==o||e&&q.isFunction(e.promise)?o:0,u=1===s?e:q.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?M.call(arguments):r,i===t?u.notifyWith(n,i):--s||u.resolveWith(n,i)}};if(o>1)for(t=new Array(o),n=new Array(o),i=new Array(o);r<o;r++)a[r]&&q.isFunction(a[r].promise)?a[r].promise().done(c(r,i,a)).fail(u.reject).progress(c(r,n,t)):--s;return s||u.resolveWith(i,a),u.promise()}});var le;q.fn.ready=function(e){return q.ready.promise().done(e),this},q.extend({isReady:!1,readyWait:1,holdReady:function(e){e?q.readyWait++:q.ready(!0)},ready:function(e){if(e===!0?!--q.readyWait:!q.isReady){if(!ie.body)return setTimeout(q.ready);q.isReady=!0,e!==!0&&--q.readyWait>0||(le.resolveWith(ie,[q]),q.fn.triggerHandler&&(q(ie).triggerHandler("ready"),q(ie).off("ready")))}}}),q.ready.promise=function(e){if(!le)if(le=q.Deferred(),"complete"===ie.readyState)setTimeout(q.ready);else if(ie.addEventListener)ie.addEventListener("DOMContentLoaded",d,!1),n.addEventListener("load",d,!1);else{ie.attachEvent("onreadystatechange",d),n.attachEvent("onload",d);var t=!1;try{t=null==n.frameElement&&ie.documentElement}catch(e){}t&&t.doScroll&&!(function e(){if(!q.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}l(),q.ready()}})()}return le.promise(e)};var de,fe="undefined";for(de in q(K))break;K.ownLast="0"!==de,K.inlineBlockNeedsLayout=!1,q((function(){var e,t,n,i;n=ie.getElementsByTagName("body")[0],n&&n.style&&(t=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),typeof t.style.zoom!==fe&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",K.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))})),(function(){var e=ie.createElement("div");if(null==K.deleteExpando){K.deleteExpando=!0;try{delete e.test}catch(e){K.deleteExpando=!1}}e=null})(),q.acceptData=function(e){var t=q.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)};var pe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,he=/([A-Z])/g;q.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?q.cache[e[q.expando]]:e[q.expando],!!e&&!p(e)},data:function(e,t,n){return h(e,t,n)},removeData:function(e,t){return g(e,t)},_data:function(e,t,n){return h(e,t,n,!0)},_removeData:function(e,t){return g(e,t,!0)}}),q.fn.extend({data:function(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=q.data(a),1===a.nodeType&&!q._data(a,"parsedAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=q.camelCase(i.slice(5)),f(a,i,r[i])));q._data(a,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each((function(){q.data(this,e)})):arguments.length>1?this.each((function(){q.data(this,e,t)})):a?f(a,e,q.data(a,e)):void 0},removeData:function(e){return this.each((function(){q.removeData(this,e)}))}}),q.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=q._data(e,t),n&&(!i||q.isArray(n)?i=q._data(e,t,q.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=q.queue(e,t),i=n.length,r=n.shift(),a=q._queueHooks(e,t),o=function(){q.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,o,a)),!i&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q._data(e,n)||q._data(e,n,{empty:q.Callbacks("once memory").add((function(){q._removeData(e,t+"queue"),q._removeData(e,n)}))})}}),q.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?q.queue(this[0],e):void 0===t?this:this.each((function(){var n=q.queue(this,e,t);q._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&q.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){q.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=q.Deferred(),a=this,o=this.length,s=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=q._data(a[o],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var ge=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ve=["Top","Right","Bottom","Left"],me=function(e,t){return e=t||e,"none"===q.css(e,"display")||!q.contains(e.ownerDocument,e)},_e=q.access=function(e,t,n,i,r,a,o){var s=0,u=e.length,c=null==n;if("object"===q.type(n)){r=!0;for(s in n)q.access(e,t,s,n[s],!0,a,o)}else if(void 0!==i&&(r=!0,q.isFunction(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(q(e),n)})),t))for(;s<u;s++)t(e[s],n,o?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(e):u?t(e[0],n):a},Ee=/^(?:checkbox|radio)$/i;!(function(){var e=ie.createElement("input"),t=ie.createElement("div"),n=ie.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",K.leadingWhitespace=3===t.firstChild.nodeType,K.tbody=!t.getElementsByTagName("tbody").length,K.htmlSerialize=!!t.getElementsByTagName("link").length,K.html5Clone="<:nav></:nav>"!==ie.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),K.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",K.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",K.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,K.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",(function(){K.noCloneEvent=!1})),t.cloneNode(!0).click()),null==K.deleteExpando){K.deleteExpando=!0;try{delete t.test}catch(e){K.deleteExpando=!1}}})(),(function(){var e,t,i=ie.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(K[e+"Bubbles"]=t in n)||(i.setAttribute(t,"t"),K[e+"Bubbles"]=i.attributes[t].expando===!1);i=null})();var ye=/^(?:input|select|textarea)$/i,Ie=/^key/,Se=/^(?:mouse|pointer|contextmenu)|click/,Te=/^(?:focusinfocus|focusoutblur)$/,Ae=/^([^.]*)(?:\.(.+)|)$/;q.event={global:{},add:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,g,v=q._data(e);if(v){for(n.handler&&(u=n,n=u.handler,r=u.selector),n.guid||(n.guid=q.guid++),(o=v.events)||(o=v.events={}),(l=v.handle)||(l=v.handle=function(e){return typeof q===fe||e&&q.event.triggered===e.type?void 0:q.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(ue)||[""],s=t.length;s--;)a=Ae.exec(t[s])||[],p=g=a[1],h=(a[2]||"").split(".").sort(),p&&(c=q.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=q.event.special[p]||{},d=q.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&q.expr.match.needsContext.test(r),namespace:h.join(".")},u),(f=o[p])||(f=o[p]=[],f.delegateCount=0,c.setup&&c.setup.call(e,i,h,l)!==!1||(e.addEventListener?e.addEventListener(p,l,!1):e.attachEvent&&e.attachEvent("on"+p,l))),c.add&&(c.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,d):f.push(d),q.event.global[p]=!0);e=null}},remove:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,g,v=q.hasData(e)&&q._data(e);if(v&&(l=v.events)){for(t=(t||"").match(ue)||[""],c=t.length;c--;)if(s=Ae.exec(t[c])||[],p=g=s[1],h=(s[2]||"").split(".").sort(),p){for(d=q.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=a=f.length;a--;)o=f[a],!r&&g!==o.origType||n&&n.guid!==o.guid||s&&!s.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(a,1),
o.selector&&f.delegateCount--,d.remove&&d.remove.call(e,o));u&&!f.length&&(d.teardown&&d.teardown.call(e,h,v.handle)!==!1||q.removeEvent(e,p,v.handle),delete l[p])}else for(p in l)q.event.remove(e,p+t[c],n,i,!0);q.isEmptyObject(l)&&(delete v.handle,q._removeData(e,"events"))}},trigger:function(e,t,i,r){var a,o,s,u,c,l,d,f=[i||ie],p=H.call(e,"type")?e.type:e,h=H.call(e,"namespace")?e.namespace.split("."):[];if(s=l=i=i||ie,3!==i.nodeType&&8!==i.nodeType&&!Te.test(p+q.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),o=p.indexOf(":")<0&&"on"+p,e=e[q.expando]?e:new q.Event(p,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=h.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:q.makeArray(t,[e]),c=q.event.special[p]||{},r||!c.trigger||c.trigger.apply(i,t)!==!1)){if(!r&&!c.noBubble&&!q.isWindow(i)){for(u=c.delegateType||p,Te.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),l=s;l===(i.ownerDocument||ie)&&f.push(l.defaultView||l.parentWindow||n)}for(d=0;(s=f[d++])&&!e.isPropagationStopped();)e.type=d>1?u:c.bindType||p,a=(q._data(s,"events")||{})[e.type]&&q._data(s,"handle"),a&&a.apply(s,t),a=o&&s[o],a&&a.apply&&q.acceptData(s)&&(e.result=a.apply(s,t),e.result===!1&&e.preventDefault());if(e.type=p,!r&&!e.isDefaultPrevented()&&(!c._default||c._default.apply(f.pop(),t)===!1)&&q.acceptData(i)&&o&&i[p]&&!q.isWindow(i)){l=i[o],l&&(i[o]=null),q.event.triggered=p;try{i[p]()}catch(e){}q.event.triggered=void 0,l&&(i[o]=l)}return e.result}},dispatch:function(e){e=q.event.fix(e);var t,n,i,r,a,o=[],s=M.call(arguments),u=(q._data(this,"events")||{})[e.type]||[],c=q.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(o=q.event.handlers.call(this,e,u),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,a=0;(i=r.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,n=((q.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],a=0;a<s;a++)i=t[a],n=i.selector+" ",void 0===r[n]&&(r[n]=i.needsContext?q(n,this).index(u)>=0:q.find(n,this,null,[u]).length),r[n]&&r.push(i);r.length&&o.push({elem:u,handlers:r})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},fix:function(e){if(e[q.expando])return e;var t,n,i,r=e.type,a=e,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=Se.test(r)?this.mouseHooks:Ie.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,e=new q.Event(a),t=i.length;t--;)n=i[t],e[n]=a[n];return e.target||(e.target=a.srcElement||ie),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,a=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||ie,r=i.documentElement,n=i.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==_()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===_()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(q.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return q.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=q.extend(new q.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?q.event.trigger(r,null,t):q.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},q.removeEvent=ie.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var i="on"+t;e.detachEvent&&(typeof e[i]===fe&&(e[i]=null),e.detachEvent(i,n))},q.Event=function(e,t){return this instanceof q.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:m):this.type=e,t&&q.extend(this,t),this.timeStamp=e&&e.timeStamp||q.now(),void(this[q.expando]=!0)):new q.Event(e,t)},q.Event.prototype={isDefaultPrevented:m,isPropagationStopped:m,isImmediatePropagationStopped:m,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},q.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){q.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,a=e.handleObj;return r&&(r===i||q.contains(i,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}})),K.submitBubbles||(q.event.special.submit={setup:function(){return!q.nodeName(this,"form")&&void q.event.add(this,"click._submit keypress._submit",(function(e){var t=e.target,n=q.nodeName(t,"input")||q.nodeName(t,"button")?t.form:void 0;n&&!q._data(n,"submitBubbles")&&(q.event.add(n,"submit._submit",(function(e){e._submit_bubble=!0})),q._data(n,"submitBubbles",!0))}))},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&q.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!q.nodeName(this,"form")&&void q.event.remove(this,"._submit")}}),K.changeBubbles||(q.event.special.change={setup:function(){return ye.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(q.event.add(this,"propertychange._change",(function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)})),q.event.add(this,"click._change",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),q.event.simulate("change",this,e,!0)}))),!1):void q.event.add(this,"beforeactivate._change",(function(e){var t=e.target;ye.test(t.nodeName)&&!q._data(t,"changeBubbles")&&(q.event.add(t,"change._change",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||q.event.simulate("change",this.parentNode,e,!0)})),q._data(t,"changeBubbles",!0))}))},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return q.event.remove(this,"._change"),!ye.test(this.nodeName)}}),K.focusinBubbles||q.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){q.event.simulate(t,e.target,q.event.fix(e),!0)};q.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=q._data(i,t);r||i.addEventListener(e,n,!0),q._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=q._data(i,t)-1;r?q._data(i,t,r):(i.removeEventListener(e,n,!0),q._removeData(i,t))}}})),q.fn.extend({on:function(e,t,n,i,r){var a,o;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=m;else if(!i)return this;return 1===r&&(o=i,i=function(e){return q().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=q.guid++)),this.each((function(){q.event.add(this,e,i,n,t)}))},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,q(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=m),this.each((function(){q.event.remove(this,e,n,t)}))},trigger:function(e,t){return this.each((function(){q.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return q.event.trigger(e,t,n,!0)}});var be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",we=/ jQuery\d+="(?:null|\d+)"/g,De=new RegExp("<(?:"+be+")[\\s/>]","i"),Re=/^\s+/,Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ce=/<([\w:]+)/,Oe=/<tbody/i,xe=/<|&#?\w+;/,Le=/<(?:script|style|link)/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,ke=/^$|\/(?:java|ecma)script/i,Fe=/^true\/(.*)/,Ve=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Me={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:K.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ue=E(ie),Ge=Ue.appendChild(ie.createElement("div"));Me.optgroup=Me.option,Me.tbody=Me.tfoot=Me.colgroup=Me.caption=Me.thead,Me.th=Me.td,q.extend({clone:function(e,t,n){var i,r,a,o,s,u=q.contains(e.ownerDocument,e);if(K.html5Clone||q.isXMLDoc(e)||!De.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(Ge.innerHTML=e.outerHTML,Ge.removeChild(a=Ge.firstChild)),!(K.noCloneEvent&&K.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||q.isXMLDoc(e)))for(i=y(a),s=y(e),o=0;null!=(r=s[o]);++o)i[o]&&D(r,i[o]);if(t)if(n)for(s=s||y(e),i=i||y(a),o=0;null!=(r=s[o]);o++)w(r,i[o]);else w(e,a);return i=y(a,"script"),i.length>0&&b(i,!u&&y(e,"script")),i=s=r=null,a},buildFragment:function(e,t,n,i){for(var r,a,o,s,u,c,l,d=e.length,f=E(t),p=[],h=0;h<d;h++)if(a=e[h],a||0===a)if("object"===q.type(a))q.merge(p,a.nodeType?[a]:a);else if(xe.test(a)){for(s=s||f.appendChild(t.createElement("div")),u=(Ce.exec(a)||["",""])[1].toLowerCase(),l=Me[u]||Me._default,s.innerHTML=l[1]+a.replace(Ne,"<$1></$2>")+l[2],r=l[0];r--;)s=s.lastChild;if(!K.leadingWhitespace&&Re.test(a)&&p.push(t.createTextNode(Re.exec(a)[0])),!K.tbody)for(a="table"!==u||Oe.test(a)?"<table>"!==l[1]||Oe.test(a)?0:s:s.firstChild,r=a&&a.childNodes.length;r--;)q.nodeName(c=a.childNodes[r],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(q.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(a));for(s&&f.removeChild(s),K.appendChecked||q.grep(y(p,"input"),I),h=0;a=p[h++];)if((!i||q.inArray(a,i)===-1)&&(o=q.contains(a.ownerDocument,a),s=y(f.appendChild(a),"script"),o&&b(s),n))for(r=0;a=s[r++];)ke.test(a.type||"")&&n.push(a);return s=null,f},cleanData:function(e,t){for(var n,i,r,a,o=0,s=q.expando,u=q.cache,c=K.deleteExpando,l=q.event.special;null!=(n=e[o]);o++)if((t||q.acceptData(n))&&(r=n[s],a=r&&u[r])){if(a.events)for(i in a.events)l[i]?q.event.remove(n,i):q.removeEvent(n,i,a.handle);u[r]&&(delete u[r],c?delete n[s]:typeof n.removeAttribute!==fe?n.removeAttribute(s):n[s]=null,V.push(r))}}}),q.fn.extend({text:function(e){return _e(this,(function(e){return void 0===e?q.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ie).createTextNode(e))}),null,e,arguments.length)},append:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.appendChild(e)}}))},prepend:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,i=e?q.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||q.cleanData(y(n)),n.parentNode&&(t&&q.contains(n.ownerDocument,n)&&b(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&q.cleanData(y(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&q.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return q.clone(this,e,t)}))},html:function(e){return _e(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(we,""):void 0;if("string"==typeof e&&!Le.test(e)&&(K.htmlSerialize||!De.test(e))&&(K.leadingWhitespace||!Re.test(e))&&!Me[(Ce.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ne,"<$1></$2>");try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(q.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,(function(t){e=this.parentNode,q.cleanData(y(this)),e&&e.replaceChild(t,this)})),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=U.apply([],e);var n,i,r,a,o,s,u=0,c=this.length,l=this,d=c-1,f=e[0],p=q.isFunction(f);if(p||c>1&&"string"==typeof f&&!K.checkClone&&Pe.test(f))return this.each((function(n){var i=l.eq(n);p&&(e[0]=f.call(this,n,i.html())),i.domManip(e,t)}));if(c&&(s=q.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(a=q.map(y(s,"script"),T),r=a.length;u<c;u++)i=s,u!==d&&(i=q.clone(i,!0,!0),r&&q.merge(a,y(i,"script"))),t.call(this[u],i,u);if(r)for(o=a[a.length-1].ownerDocument,q.map(a,A),u=0;u<r;u++)i=a[u],ke.test(i.type||"")&&!q._data(i,"globalEval")&&q.contains(o,i)&&(i.src?q._evalUrl&&q._evalUrl(i.src):q.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Ve,"")));s=n=null}return this}}),q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){q.fn[e]=function(e){for(var n,i=0,r=[],a=q(e),o=a.length-1;i<=o;i++)n=i===o?this:this.clone(!0),q(a[i])[t](n),G.apply(r,n.get());return this.pushStack(r)}}));var Be,je,ze,He={},Ke=/^margin/,Ye=new RegExp("^("+ge+")(?!px)[a-z%]+$","i"),qe=/^(top|right|bottom|left)$/;n.getComputedStyle?(je=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):n.getComputedStyle(e,null)},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==o||q.contains(e.ownerDocument,e)||(o=q.style(e,t)),Ye.test(o)&&Ke.test(t)&&(i=s.width,r=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=i,s.minWidth=r,s.maxWidth=a)),void 0===o?o:o+""}):ie.documentElement.currentStyle&&(je=function(e){return e.currentStyle},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n[t]:void 0,null==o&&s&&s[t]&&(o=s[t]),Ye.test(o)&&!qe.test(t)&&(i=s.left,r=e.runtimeStyle,a=r&&r.left,a&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":o,o=s.pixelLeft+"px",s.left=i,a&&(r.left=a)),void 0===o?o:o+""||"auto"}),(function(){function e(){var e,t,i,r;t=ie.getElementsByTagName("body")[0],t&&t.style&&(e=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a=o=!1,u=!0,n.getComputedStyle&&(a="1%"!==(n.getComputedStyle(e,null)||{}).top,o="4px"===(n.getComputedStyle(e,null)||{width:"4px"}).width,r=e.appendChild(ie.createElement("div")),r.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",e.style.width="1px",u=!parseFloat((n.getComputedStyle(r,null)||{}).marginRight),e.removeChild(r)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=e.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),t.removeChild(i))}var t,i,r,a,o,s,u;t=ie.createElement("div"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=r&&r.style,i&&(i.cssText="float:left;opacity:.5",K.opacity="0.5"===i.opacity,K.cssFloat=!!i.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",K.clearCloneStyle="content-box"===t.style.backgroundClip,K.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,q.extend(K,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==o&&e(),o},pixelPosition:function(){return null==a&&e(),a},reliableMarginRight:function(){return null==u&&e(),u}}))})(),q.swap=function(e,t,n,i){var r,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];r=n.apply(e,i||[]);for(a in t)e.style[a]=o[a];return r};var We=/alpha\([^)]*\)/i,Xe=/opacity\s*=\s*([^)]*)/,$e=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+ge+")(.*)$","i"),Je=new RegExp("^([+-])=("+ge+")","i"),Ze={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"},tt=["Webkit","O","Moz","ms"];q.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":K.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,s=q.camelCase(t),u=e.style;if(t=q.cssProps[s]||(q.cssProps[s]=O(u,s)),o=q.cssHooks[t]||q.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:u[t];if(a=typeof n,"string"===a&&(r=Je.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(q.css(e,t)),a="number"),null!=n&&n===n&&("number"!==a||q.cssNumber[s]||(n+="px"),K.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,i)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,i){var r,a,o,s=q.camelCase(t);return t=q.cssProps[s]||(q.cssProps[s]=O(e.style,s)),o=q.cssHooks[t]||q.cssHooks[s],o&&"get"in o&&(a=o.get(e,!0,n)),void 0===a&&(a=ze(e,t,i)),"normal"===a&&t in et&&(a=et[t]),""===n||n?(r=parseFloat(a),n===!0||q.isNumeric(r)?r||0:a):a}}),q.each(["height","width"],(function(e,t){q.cssHooks[t]={get:function(e,n,i){if(n)return $e.test(q.css(e,"display"))&&0===e.offsetWidth?q.swap(e,Ze,(function(){return k(e,t,i)})):k(e,t,i)},set:function(e,n,i){var r=i&&je(e);return L(e,n,i?P(e,t,i,K.boxSizing&&"border-box"===q.css(e,"boxSizing",!1,r),r):0)}}})),K.opacity||(q.cssHooks.opacity={get:function(e,t){return Xe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=q.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===q.trim(a.replace(We,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||i&&!i.filter)||(n.filter=We.test(a)?a.replace(We,r):a+" "+r)}}),q.cssHooks.marginRight=C(K.reliableMarginRight,(function(e,t){if(t)return q.swap(e,{display:"inline-block"},ze,[e,"marginRight"])})),q.each({margin:"",padding:"",border:"Width"},(function(e,t){q.cssHooks[e+t]={expand:function(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ve[i]+t]=a[i]||a[i-2]||a[0];return r}},Ke.test(e)||(q.cssHooks[e+t].set=L)})),q.fn.extend({css:function(e,t){return _e(this,(function(e,t,n){var i,r,a={},o=0;if(q.isArray(t)){for(i=je(e),r=t.length;o<r;o++)a[t[o]]=q.css(e,t[o],!1,i);return a}return void 0!==n?q.style(e,t,n):q.css(e,t)}),e,t,arguments.length>1)},show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){me(this)?q(this).show():q(this).hide()}))}}),q.fn.delay=function(e,t){return e=q.fx?q.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,(function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}}))},(function(){var e,t,n,i,r;t=ie.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=t.getElementsByTagName("a")[0],n=ie.createElement("select"),r=n.appendChild(ie.createElement("option")),e=t.getElementsByTagName("input")[0],i.style.cssText="top:1px",K.getSetAttribute="t"!==t.className,K.style=/top/.test(i.getAttribute("style")),K.hrefNormalized="/a"===i.getAttribute("href"),K.checkOn=!!e.value,K.optSelected=r.selected,K.enctype=!!ie.createElement("form").enctype,n.disabled=!0,K.optDisabled=!r.disabled,e=ie.createElement("input"),e.setAttribute("value",""),K.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),K.radioValue="t"===e.value})();var nt=/\r/g;q.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=q.isFunction(e),this.each((function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,q(this).val()):e,null==r?r="":"number"==typeof r?r+="":q.isArray(r)&&(r=q.map(r,(function(e){return null==e?"":e+""}))),t=q.valHooks[this.type]||q.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}));if(r)return t=q.valHooks[r.type]||q.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(nt,""):null==n?"":n)}}}),q.extend({valHooks:{option:{get:function(e){var t=q.find.attr(e,"value");return null!=t?t:q.trim(q.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,a="select-one"===e.type||r<0,o=a?null:[],s=a?r+1:i.length,u=r<0?s:a?r:0;u<s;u++)if(n=i[u],(n.selected||u===r)&&(K.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!q.nodeName(n.parentNode,"optgroup"))){if(t=q(n).val(),a)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,a=q.makeArray(t),o=r.length;o--;)if(i=r[o],q.inArray(q.valHooks.option.get(i),a)>=0)try{i.selected=n=!0}catch(e){i.scrollHeight}else i.selected=!1;return n||(e.selectedIndex=-1),r}}}}),q.each(["radio","checkbox"],(function(){q.valHooks[this]={set:function(e,t){if(q.isArray(t))return e.checked=q.inArray(q(e).val(),t)>=0}},K.checkOn||(q.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var it,rt,at=q.expr.attrHandle,ot=/^(?:checked|selected)$/i,st=K.getSetAttribute,ut=K.input;q.fn.extend({attr:function(e,t){return _e(this,q.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){q.removeAttr(this,e)}))}}),q.extend({attr:function(e,t,n){var i,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===fe?q.prop(e,t,n):(1===a&&q.isXMLDoc(e)||(t=t.toLowerCase(),i=q.attrHooks[t]||(q.expr.match.bool.test(t)?rt:it)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=q.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void q.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,a=t&&t.match(ue);if(a&&1===e.nodeType)for(;n=a[r++];)i=q.propFix[n]||n,q.expr.match.bool.test(n)?ut&&st||!ot.test(n)?e[i]=!1:e[q.camelCase("default-"+n)]=e[i]=!1:q.attr(e,n,""),e.removeAttribute(st?n:i)},attrHooks:{type:{set:function(e,t){if(!K.radioValue&&"radio"===t&&q.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),rt={set:function(e,t,n){return t===!1?q.removeAttr(e,n):ut&&st||!ot.test(n)?e.setAttribute(!st&&q.propFix[n]||n,n):e[q.camelCase("default-"+n)]=e[n]=!0,n}},q.each(q.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=at[t]||q.find.attr;at[t]=ut&&st||!ot.test(t)?function(e,t,i){var r,a;return i||(a=at[t],at[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,at[t]=a),r}:function(e,t,n){if(!n)return e[q.camelCase("default-"+t)]?t.toLowerCase():null}})),ut&&st||(q.attrHooks.value={set:function(e,t,n){return q.nodeName(e,"input")?void(e.defaultValue=t):it&&it.set(e,t,n)}}),st||(it={set:function(e,t,n){var i=e.getAttributeNode(n);if(i||e.setAttributeNode(i=e.ownerDocument.createAttribute(n)),i.value=t+="","value"===n||t===e.getAttribute(n))return t}},at.id=at.name=at.coords=function(e,t,n){var i;if(!n)return(i=e.getAttributeNode(t))&&""!==i.value?i.value:null},q.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:it.set},q.attrHooks.contenteditable={set:function(e,t,n){it.set(e,""!==t&&t,n)}},q.each(["width","height"],(function(e,t){q.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}}))),K.style||(q.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var ct=/^(?:input|select|textarea|button|object)$/i,lt=/^(?:a|area)$/i;q.fn.extend({prop:function(e,t){return _e(this,q.prop,e,t,arguments.length>1)},removeProp:function(e){return e=q.propFix[e]||e,this.each((function(){try{this[e]=void 0,delete this[e]}catch(e){}}))}}),q.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,a,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return a=1!==o||!q.isXMLDoc(e),a&&(t=q.propFix[t]||t,r=q.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=q.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||lt.test(e.nodeName)&&e.href?0:-1}}}}),K.hrefNormalized||q.each(["href","src"],(function(e,t){q.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),K.optSelected||(q.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),q.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){q.propFix[this.toLowerCase()]=this})),K.enctype||(q.propFix.enctype="encoding");var dt=/[\t\r\n\f]/g;q.fn.extend({addClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c="string"==typeof e&&e;if(q.isFunction(e))return this.each((function(t){q(this).addClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):" ")){for(a=0;r=t[a++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o=q.trim(i),n.className!==o&&(n.className=o)}return this},removeClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c=0===arguments.length||"string"==typeof e&&e;if(q.isFunction(e))return this.each((function(t){q(this).removeClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):"")){for(a=0;r=t[a++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");o=e?q.trim(i):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):q.isFunction(e)?this.each((function(n){q(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var t,i=0,r=q(this),a=e.match(ue)||[];t=a[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else n!==fe&&"boolean"!==n||(this.className&&q._data(this,"__className__",this.className),this.className=this.className||e===!1?"":q._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(dt," ").indexOf(t)>=0)return!0;return!1}}),q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){q.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),q.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),q.fn.extend({wrapAll:function(e){if(q.isFunction(e))return this.each((function(t){q(this).wrapAll(e.call(this,t))}));if(this[0]){var t=q(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return q.isFunction(e)?this.each((function(t){q(this).wrapInner(e.call(this,t))})):this.each((function(){var t=q(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=q.isFunction(e);return this.each((function(n){q(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){q.nodeName(this,"body")||q(this).replaceWith(this.childNodes)})).end()}}),q.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!K.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||q.css(e,"display"))},q.expr.filters.visible=function(e){return!q.expr.filters.hidden(e)};var ft=/%20/g,pt=/\[\]$/,ht=/\r?\n/g,gt=/^(?:submit|button|image|reset|file)$/i,vt=/^(?:input|select|textarea|keygen)/i;q.param=function(e,t){var n,i=[],r=function(e,t){t=q.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=q.ajaxSettings&&q.ajaxSettings.traditional),q.isArray(e)||e.jquery&&!q.isPlainObject(e))q.each(e,(function(){r(this.name,this.value)}));else for(n in e)F(n,e[n],t,r);return i.join("&").replace(ft,"+")},q.fn.extend({serialize:function(){return q.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=q.prop(this,"elements");return e?q.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!q(this).is(":disabled")&&vt.test(this.nodeName)&&!gt.test(e)&&(this.checked||!Ee.test(e))})).map((function(e,t){var n=q(this).val();return null==n?null:q.isArray(n)?q.map(n,(function(e){return{name:t.name,value:e.replace(ht,"\r\n")}})):{name:t.name,value:n.replace(ht,"\r\n")}})).get()}}),q.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ie;var i=ee.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=q.buildFragment([e],t,r),r&&r.length&&q(r).remove(),q.merge([],i.childNodes))},i=[],r=function(){return q}.apply(t,i),!(void 0!==r&&(e.exports=r));var mt=n.jQuery,_t=n.$;return q.noConflict=function(e){return n.$===q&&(n.$=_t),e&&n.jQuery===q&&(n.jQuery=mt),q},typeof a===fe&&(n.jQuery=n.$=q),q}))}),(function(e,t,n){var i=n(39),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},
i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){var i=n(79),r=n(23),a=n(89);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);i.write('<script id="'+o+'" src="'+e+'"></script>');var s=i.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=n,s.onerror=function(i){r.warn("Failed to load script ("+e+") synchronously:",i),t.addScriptAsync(e,n)}}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var u=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:u})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;w.isNumber(e)&&0===me.getCount()?($.log("Activating after delay of",e,"ms because no Experiments are running"),Y.dispatch(O.SET_RUM_DATA,{data:{activateDfd:!0}}),ue.setTimeout(L.emitActivateEvent,e)):L.emitActivateEvent()}function r(e){Re.handleError(e.data.error,e.data.metadata)}function a(){w.isArray(window.optimizely)&&(window.optimizely=w.filter(window.optimizely,(function(e){var t=!0;return!De.push(e,t)})))}function o(e){return w.each(e,(function(e,t){X.setItem(t,e)})),e}function s(){var e=ge.getAccountId(),t="https://a3013110282.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";ce.subscribe(w.bind(X.setItem,X));var i=ce.fetchAll().then((function(e){var t=we.getCanonicalOrigins();if(t){var n=ce.getXDomainUserId(e,t);n&&($.log("Syncing cross-origin visitor randomId:",n),se.maybePersistVisitorId({randomId:n}))}return e})).then(o),r=!!se.getCurrentId(),a=!!r&&se.hasSomeData();return r?a?$.log("xd / Existing visitor; has data on this origin"):$.log("xd / Existing visitor; new to this origin"):$.log("xd / New visitor"),te.all([ce.load(t,n)["catch"]((function(e){throw $.debug("xd / Failed to load iframe:",e),r&&!a&&u(!1,e),e})),i.then((function(e){if(se.loadForeignData(),r&&!a){var t=!w.isEmpty(e);$.debug("xd / Loaded foreign data? ",t),u(t)}}),(function(e){throw r&&!a&&($.debug("xd / Failed to load foreign data:",e),u(!1,e)),e})).then((function(){$.log("Loaded visitor data from foreign origins"),L.emitOriginsSyncedEvent()}),(function(e){$.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),$.debug("xd / Enqueuing sync to happen after visitorId set."),Y.dispatch(O.ADD_CLEANUP_FN,{lifecycle:j.Lifecycle.postVisitorProfileLoad,cleanupFn:L.emitOriginsSyncedEvent})}))])}function u(e,t){Y.dispatch(O.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function c(e){var t=Ie.getVisitorProfile();return se.populateEagerVisitorData(e,t)}function l(e,t,n){e=e||[];var i=ye.getAllPlugins(j.PluginTypes.visitorProfileProviders),r=ge.getGlobalHoldbackThreshold(),a=Ie.getVisitorProfile();se.populateLazyVisitorData(i,a);var o=Ae.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=Ie.getVisitorProfile();if(t){var c=be.getVariationIdMap();s=c[t.id]}var l={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&U.isPageIdRelevant(t)?w.map(n,(function(e){return U.createTicket(w.extend({},l,{pageId:e}))})):[U.createTicket(l)]}function d(e){return{bucketingId:Ae.getBucketingId(),preferredLayerId:be.getPreferredLayerMap()[e.id]}}function f(e){var t=me.getAllByPageIds(e),n=he.getForceVariationIds(),i=he.getForceAudienceIds(),r=w.reduce(t,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=ve.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});$.log("Deciding Campaigns/Experiments for Page(s)",e);var a=w.map(r.groups,q.description).join(", ");$.log("Groups:",a);var o=w.map(r.individual,W.description).join(", ");$.log("Campaigns/Experiments not in Groups (by Campaign id):",o);var s=w.map(r.groups,w.partial(p,n,i,e))||[],u=w.map(r.individual,(function(t){var r=w.filter(t.pageIds,w.partial(w.includes,e));return h(n,i,r,t)})),c=s.concat(u);return te.all(c).then((function(t){var n=w.filter(t,(function(e){return!!e}));return $.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",w.map(n,W.description).join(", ")),n}))}function p(e,n,i,r){try{var a=d(r),o=U.decideGroup(r,a);if(o.reason)return $.debug("Not activating Group",q.description(r),"; reason:",o.reason),te.resolve();var s=me.get(o.layerId);if(!s)return $.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),te.resolve();var u=w.filter(s.pageIds,w.partial(w.includes,i));return w.isEmpty(u)?($.debug("Not activating Group",q.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),te.resolve()):t.decideAndExecuteLayerASAP(e,n,u,s)}catch(e){return $.error("Error getting decision for Group",q.description(r),"; ",e),te.reject(e)}}function h(e,t,n,i){return new te(function(r,a){try{_(i,e,t,n,(function(a){w.each(a,(function(r){var a=r.pageId?[r.pageId]:n;$.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),g(i,e,t,a,r)})),r(i)}))}catch(e){$.error("Error getting decision for Campaign: "+W.description(i),e),a(e)}})}function g(e,t,n,i,r){var a=W.description(e);$.log("Activating Campaign",a,"on Page(s)",i),n.length&&($.log("Applying force audienceIds:",n,"to Campaign",a),r=w.cloneDeep(r),r.audienceIds=n);var o=S(e,r,t),s=!(!t.length&&!n.length),u=A(e,o,s)||[],c=b(u,i);if(v(c,e,o,i),w.forEach(i,(function(){x.trackDecisionEvent(o,r)})),L.emitLayerDecided({layer:e,decisionTicket:r,decision:o}),o.error)throw o.error;return U.isInCohort(o)?void m(c,e,o,i):void $.log("Not activating Campaign: "+W.description(e)+"; not in the cohort because:",o.reason)}function v(e,t,n,i){var r=W.description(t);$.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),w.forEach(e,C.prepareAction)}function m(e,t,n,i){var r=W.description(t);return $.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),te.all(w.map(e,(function(e){return C.executePreparedAction(e).then(w.partial(L.emitActionAppliedEvent,e))}))).then((function(){$.log("All page actions for",n,"applied:",e),L.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){$.warn("Error evaluating page actions for decision",n,"because:",e)}))}function _(e,t,n,i,r){if(t.length||n.length)return void r(l([],void 0,i));var a=W.relatedAudienceIds(e),o=w.reduce(a,(function(e,t){var n=de.get(t);return n&&e.push(n),e}),[]);I(o,W.getActivationTimeout(e),(function(){var t=l(o,e,i);w.map(t,(function(t){E(t,o,e)})),r(t)}))}function E(e,t,n){var i=w.map(e.audienceIds,w.bind(de.get,de)),r=w.filter(t,(function(t){return!w.includes(e.audienceIds,t.id)}));$.log("When deciding Campaign",W.description(n),"visitor is in audiences:",y(i),"and not in audiences:",y(r))}function y(e){var t=[];return w.each(e,(function(e){t.push(e.name,e)})),t}function I(e,t,n){var i=ye.getAllPlugins(j.PluginTypes.audienceMatchers),r=w.reduce(e,(function(e,t){return w.extend(e,P.requiredAudienceFieldsForConditions(t.conditions,i))}),{}),a=w.reduce(r,(function(e,t){if(w.isUndefined(se.getAttribute(t))){var n=se.getPendingAttributeValue(t);w.isUndefined(n)||e.push(n)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=ne.firstToResolve(w.map(a,(function(e){return te.resolve(e).then((function(){var e=Ie.getVisitorProfile();if(o=w.filter(o,(function(t){return w.isUndefined(P.isInAudience(e,t,i))})),!w.isEmpty(o))throw new Error("At least one audience is still pending")}))})));te.race([s,new te(function(e,n){ue.setTimeout(n,t)})]).then((function(){$.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){$.log("Activating Campaign after timeout on Audiences",e),n()}))}function S(e,t,n){var i,r=W.description(e);return i=n.length?U.getDummyLayerDecision(e,n):U.decideLayer(e,t),$.log("Recording decision for Campaign",r,t,"->",i),W.recordLayerDecision(e.id,t,i),i.variationId&&i.experimentId&&se.updateVariationIdMap(e.id,i.experimentId,i.variationId),e.groupId&&se.updatePreferredLayerMap(e.groupId,e.id),i}function T(e){var t=pe.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();Y.dispatch(O.CLEAR_CLEANUP_FN,{lifecycle:e})}}function A(e,t,n){var i=W.description(e),r="NOT applying changes for Campaign";if(!n&&ge.isGlobalHoldback())return $.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return $.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return $.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return $.log("Got Actions for Campaign:",i,a),a}function b(e,t){return w.filter(e,(function(e){return w.isUndefined(e.pageId)||w.includes(t,e.pageId)}))}var w=n(2),D=n(75).create,R=t.ActivationCodeError=D("ActivationCodeError"),N=t.ProjectJSError=D("ProjectJSError"),C=n(134),O=n(7),x=n(109),L=n(116),P=n(138),k=n(74),F=n(84),V=n(108),M=n(24),U=n(139),G=n(16),B=n(79),j=n(25),z=n(85),H=n(110),K=n(144),Y=n(9),q=n(143),W=n(112),X=n(80).LocalStorage,$=n(23),Q=n(145),J=n(82),Z=n(121),ee=n(86),te=n(12).Promise,ne=n(146),ie=n(113),re=n(115),ae=n(136),oe=n(122),se=n(73),ue=n(39),ce=n(83),G=n(16),le=G.get("stores/session"),de=G.get("stores/audience_data"),fe=G.get("stores/action_data"),pe=G.get("stores/cleanup"),he=G.get("stores/directive"),ge=G.get("stores/global"),ve=G.get("stores/group_data"),me=G.get("stores/layer_data"),_e=G.get("stores/layer"),Ee=G.get("stores/pending_events"),ye=G.get("stores/plugins"),Ie=G.get("stores/visitor"),Se=G.get("stores/view_data"),Te=G.get("stores/view"),Ae=G.get("stores/visitor_id"),be=G.get("stores/visitor_bucketing"),we=G.get("stores/xdomain"),De=n(91),Re=n(147),Ne=n(1),Ce=1e3,Oe=!1,xe=1e3,Le=t;t.initialize=function(e){var n=e.clientData;if(V.normalizeClientData(e.clientData),z.on({filter:{type:"error"},handler:r}),Y.dispatch(O.DATA_LOADED,{data:n}),$.log("Initialized with DATA:",n),a(),he.isDisabled()||he.shouldOptOut())return void $.log("Controller / Is disabled");Ne.queueBeacons(),B.isReady()?Y.dispatch(O.SET_DOMCONTENTLOADED):B.addReadyHandler((function(){Y.dispatch(O.SET_DOMCONTENTLOADED)}));var o=!1,s=k.get(j.COOKIES.REDIRECT);if(s){var u=s.match(/^(\d+)\|(.*)/);if(u){$.debug("Found legacy redirect data:",s);var c=u[1],l=u[2];Y.dispatch(O.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),o=!0}}J.time("projectJS");var d=ge.getProjectJS();if(w.isFunction(d))try{K.apply(d)}catch(e){$.error("Error while executing projectJS: ",e),F.emitError(new N(e))}J.timeEnd("projectJS"),w.each(e.plugins||[],(function(e){try{e(Z)}catch(e){F.emitInternalError(e)}})),w.each(ge.getPlugins()||[],(function(e){try{K.apply(e,[Z])}catch(e){F.emitError(e)}})),o||ie.load();var f=z.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Ie.observe(se.persistVisitorProfile),_e.observe(se.persistLayerStates),le.observe(se.persistSessionState),Ee.observe(Q.persistPendingEvents),be.observe(se.persistVisitorBucketingStore),z.off(f)}});z.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),z.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var p=Q.getPendingEvents();if(p&&(Y.dispatch(O.LOAD_PENDING_EVENTS,{events:p}),Q.retryPendingEvents(p)),z.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),L.emitInitializedEvent(),!he.shouldActivate())return te.resolve();var h=[];if(we.isDisabled())i();else{var g=t.initializeXDomainStorage();if(h.push(g),we.getCanonicalOrigins()){var v=re.makeTimeoutPromise(xe);te.race([g,v])["catch"]((function(e){$.error("Failed to initialize xDomain storage: ",e)})).then(i)["catch"](Re.handleError)}else i()}return te.all(h)},t.activate=function(){try{var e=[];$.log("Activated client"),w.forEach(Te.getActiveViewStates(),(function(e){oe.deactivate(Se.get(e.id))})),T(j.Lifecycle.preActivate);var t=M.now();Y.dispatch(O.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Se.getAll();oe.registerViews(n),se.setId(se.getIdFromCookies()),e.push(x.trackPostRedirectDecisionEvent()),Y.dispatch(O.MERGE_VARIATION_ID_MAP,{variationIdMap:se.getVariationIdMap()}),Y.dispatch(O.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:se.getPreferredLayerMap()}),T(j.Lifecycle.postVisitorProfileLoad),e.push(c(ye.getAllPlugins(j.PluginTypes.visitorProfileProviders)).then((function(){$.log("Populated visitor profile")})));var i=l(),r=U.decideGlobal(i);$.log("Made global decision",i,"->",r),Y.dispatch(O.RECORD_GLOBAL_DECISION,r);var a=x.trackClientActivation();a?$.log("Tracked activation event",a):$.log("Not tracking activation event");var o=Le.setUpViewActivation(n);return Oe?oe.activateMultiple(o):w.each(o,(function(e){oe.activateMultiple([e])})),T(j.Lifecycle.postViewsActivated),T(j.Lifecycle.postActivate),L.emitActivatedEvent(),te.all(e).then((function(){z.emit({type:H.TYPES.LIFECYCLE,name:"activateDeferredDone"}),$.log("All immediate effects of activation resolved")}),F.emitError)}catch(e){return F.emitError(e),te.reject(e)}},Le.setUpViewActivation=function(e){var t=[];return w.each(e,(function(e){oe.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===j.ViewActivationTypes.callback?($.debug("Setting up conditional activation for Page",oe.description(e)),Le.activateViewOnCallback(e)):e.activationType===j.ViewActivationTypes.polling?($.debug("Setting up polling activation for Page",oe.description(e)),ee.pollFor(w.partial(K.apply,e.activationCode),null,w.partial(ae.isTimedOut,M.now())).then((function(){oe.activateMultiple([e])}))["catch"]((function(t){$.warn("Failed to activate view ",e,t)}))):e.activationType!==j.ViewActivationTypes.manual&&F.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Le.activateViewOnCallback=function(e){var t=function(t){var n=w.extend({},t,{pageName:e.apiName,type:"page"});De.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Te.isViewActive(e.id)}});try{K.apply(e.activationCode,[t,n])}catch(t){var i=new R("("+t.toString()+") in activationCode for "+oe.description(e));F.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=w.map(n,"id");try{if(!Ae.getBucketingId())throw new Error("View activated with no visitorId set");var r=f(i)["catch"](F.emitError);return t=te.all(w.map(n,(function(e){var t=function(){oe.parseViewTags(e);var t=x.trackViewActivation(e);t?$.log("Tracked activation for Page",oe.description(e),t):$.log("Not Tracking activation for Page",oe.description(e))};return B.isReady()?te.resolve(t()):ee.pollFor(B.isReady,Ce).then(t)}))),te.all([r,t])}catch(e){F.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=fe.getAllActionIdsByPageId(t.id);w.each(n,(function(e){var n=fe.getActionState(e);n&&(w.each(n,(function(e,n){if(e.cancel)try{e.cancel(),$.debug("Controller / Canceled change",n,"observation due to deactivation of page:",t)}catch(e){$.error("Controller / Error canceling change",n,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),$.debug("Controller / Undid change",n,"due to deactivation of page:",t)}catch(e){$.error("Controller / Error undoing change upon deactivation of page.",e)}})),Y.dispatch(O.REMOVE_ACTION_STATE,{actionId:e}),$.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={get:De.get,push:De.push},t=window.optimizely;w.isArray(t)&&w.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.initializeXDomainStorage=s,t.decideAndExecuteLayerASAP=h}),(function(e,t,n){function i(e,t,n){var i=m.getActionState(t.id);if(!i)return void p.warn("Action / Attempted to prepare change for inactive action: ",t);var r=m.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void p.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:y.create(e,t,n)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void p.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var c=_.getChange(t);if(!c){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void p.warn(d)}e[t]=new h(function(d){var f=a.map(c.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(c.src){var v="change_"+c.src,E=u.makeAsyncRequest(v,(function(){return g.addScriptAsync("https://cdn.optimizely.com/public/3013110282/data"+c.src,(function(){u.resolveRequest(v)}))})).then((function(){var e=_.getChange(c.id);e||s.emitError(new S("Failed to load async change from src: "+c.src)),i(e,n,l.now())}));f.push(E)}h.all(f).then((function(){var e=l.now(),i=m.getChangeApplier(t,n.id);return i?(p.debug("Action / Applying change:",c),i.apply().then((function(t){t?p.log(t):p.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",c),d()}))):(p.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){p.error("Action / Failed to apply change:",c,e),d()}))})}return e[t]}var a=n(2),o=n(7),s=n(84),u=n(6),c=n(75).create,l=n(24),d=n(16),f=n(9),p=n(23),h=n(12).Promise,g=n(132),v=d.get("stores/global"),m=d.get("stores/action_data"),_=d.get("stores/change_data"),E=d.get("stores/session"),y=n(135),I=n(136);I.initialize();var S=c("ActionError");t.prepareAction=function(e){p.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:E.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:v.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(n){var r=a.isObject(n)?n.id:n,s=_.getChange(r);s||(f.dispatch(o.ADD_CHANGE,n),s=_.getChange(n.id)),s.src||i(s,e,t)}))},t.executePreparedAction=function(e){p.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){var i=a.isObject(n)?n.id:n;return r(t,i,e,[])}));return h.all(n).then((function(){p.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(13).Promise,r=n(24),a=n(16),o=a.get("stores/plugins"),s=n(25),u=n(23);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(137),a=n(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){return function(n){var i=n.type,a=t[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var s=r(a.fieldsNeeded,n),l=0;l<s.length;l++){var d=s[l],f=u.getFieldValue(e,d);if(o.isUndefined(f))return void c.debug("Audience / Required field",d,"for type",i,"has no value")}c.debug("Matching condition:",n,"to values:",e);var p=a.match(e,n);if(!o.isUndefined(p))return!!p}}function r(e,t){var n="function"==typeof e?e(t):e;return o.isString(n)&&(n=[n]),o.isArray(n)?n:(c.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(123),u=n(19),c=n(23),l=n(73);t.isInAudience=function(e,t,n){var r=i(e,n);c.groupCollapsed("Checking audience",t.name,t.id,t),c.debug("Visitor Profile:",e);var o;try{var u=s.evaluate(t.conditions,r)}catch(e){o=e,u=!1}return c.groupEnd(),o&&c.error("Audience / Error evaluating audience",a(t),":",o),c.log("Is "+(u?"in":"NOT in")+" audience:",a(t)),u},t.requiredAudienceFieldsForConditions=function e(t,n){var i={};return o.each(t,(function(t){if(o.isArray(t))o.extend(i,e(t,n));else if(o.isObject(t)){var a=n[t.type];if(a){var s=r(a.fieldsNeeded,t);o.each(s,(function(e){i[l.serializeFieldKey(e)]=e}))}}})),i}}),(function(e,t,n){function i(e,t){m.debug("Decision / Deciding layer for group: ",g.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)m.debug("Decision / Using preferredLayerMap to select layer for group:",g.description(e)),n=r;else try{n=l.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",u="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new f(u);return{layerId:null,reason:u}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=E.getPlugin(h.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=E.getAllPlugins(h.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return c.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(84),c=n(138),l=n(140),d=n(141),f=n(142).DecisionError,p=n(16),h=n(25),g=n(143),v=n(112),m=n(23),_=n(43),E=p.get("stores/plugins"),y=p.get("stores/global"),I=p.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:y.getActivationId()}),t},t.decideGlobal=function(e){var t=l.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){m.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:l.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new f("No experiments in layer.");try{if(r.decideLayer){m.debug("Decision / Using decider's custom decideLayer.");var c=r.decideLayer(e,t);n=c.experiment,i=c.variation}else m.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=d.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof f?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",u.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(m.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(m.log("No variation matches ids:",t,"in Campaign",v.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=I.get(e.layerId);return!(_.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(63),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(140),a=n(123),o=n(142).DecisionError,s=n(23),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,a,c){if(!e.variations||0===e.variations.length)throw new o('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new o('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=a;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new o('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new o("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(76),di=__webpack_require__(16),Logger=__webpack_require__(23),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(84),a=n(25),o=n(26),s=n(80).LocalStorage,u=n(23),c=n(89),l=n(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(83).setItem(f,e)}catch(e){u.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){c.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||u.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(12).Promise;t.firstToResolve=function(e){return new r(function(t){i.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){var i=n(2),r=n(93),a=n(75).BaseError,o=n(24),s=n(16),u=n(79),c=n(23),l=n(39),d=n(89),f=s.get("stores/global"),p="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return d.request({url:p+"/log",method:"POST",data:v,contentType:"application/json"}).then((function(e){c.log("Error Monitor / Logged error with response: ",e)}),(function(e){c.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",h=e.message,g=e.stack||null;e instanceof a&&(h instanceof Error?(h=h.message,g=e.message.stack):g=null);var v={timestamp:o.now(),clientEngine:r.ENGINE,clientVersion:r.VERSION,accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:s,message:h,stacktrace:g},m=i.map(f.getExperimental(),(function(e,t){return{key:"exp_"+t,value:String(e)}}));t&&i.forEach(t,(function(e,t){i.isObject(e)||m.push({key:t,value:String(e)})}),[]),i.isEmpty(m)||(v.metadata=m),c.error("Logging error",v),u.isLoaded()?n():l.addEventListener("load",n)}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:u.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(16),s=n(85),u=n(110),c=n(39),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=c.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){c.getGlobal(d)||c.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(150))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(152)),e.registerAudienceMatcher("behavior",n(154))}}),(function(e,t,n){var i=n(153);e.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}}),(function(e,t,n){var i=n(2),r=n(71),a=n(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),n=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,n]);return a.slice(a.length-s)}}),(function(e,t,n){var i=n(2),r=n(26),a=n(155),o=n(156);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=r.parse(t.value);return n=i.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),i.every(n,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return u.extend(i,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return u.extend(i,{orderBy:[{field:[c.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(u.isUndefined(e))throw new Error("rule is undefined");if(!u.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(u.isArray(e["filter"])?u.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),
u.isArray(e["sort"])?u.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],c="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));u.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+c+" is unknown"),u.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===a?((!u.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):u.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!u.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u=n(2),c={FIELDS:n(62).FIELDS,FIELDS_V0_2:n(62).FIELDS_V0_2},l=n(26),d=n(23),f=n(156);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return u.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),u.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[c.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return u.isArray(e)?{op:"between",args:[{field:[c.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return u.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||u.includes(u.values(c.FIELDS),e)||(n=[c.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",c.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",c.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",c.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&u.each(e.filters,(function(r){var a,o,u=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",c.FIELDS.TIME),o=s.aggregateField("max",c.FIELDS.TIME)),a){var l=u,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,u,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:u.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return u.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(u.each(e["sort"],(function(e){u.includes(["ascending","descending"],e["direction"])&&(u.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=u.filter(u.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&u.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return u.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?u.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):u.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(u.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return u.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[c.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(l.stringify(e)||String(e));if(!u.isArray(e)||!u.every(e,u.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=u.keys(c.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),u.includes(r,e[0])?n+" is not supported here":u.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(l.stringify(e)||String(e)),i="value "+(l.stringify(t)||String(t));if(!u.isString(e)&&!u.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!u.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!u.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(u.isArray(t)&&2===t.length&&u.isNumber(t[0])&&u.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(u.isString(t)||u.isArray(t)&&2===t.length&&u.isString(t[0])&&u.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!u.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=i.bind(a.log,a),s=n(24),u=n(19).getFieldValue,c=n(26),l=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);if(!i.isArray(t))return n;var r=u(e,t);return"undefined"==typeof r&&(r=n),r},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=i.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],d);return i.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r},avg:function(e,n){if(0===n.length)return 0;for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r/n.length},max:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<n.length;a++)r=Math.max(r,l(n[a],i,Number.NEGATIVE_INFINITY));return r},min:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<n.length;a++)r=Math.min(r,l(n[a],i,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},p=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},h=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=p(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(h,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},g=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l(o,f),h=f.join(".");u[h]=p,s.push(encodeURIComponent(h)+"="+encodeURIComponent(c.stringify(p)))}var g=s.join("&");n.hasOwnProperty(g)||(n[g]={fieldValues:u,events:[]}),n[g].events.push(o)}return n};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var v=function(e,n){var r={};return i.each(n,(function(n,i){r[i]={};for(var o=0;o<e.length;o++){var s=e[o],u=s["op"];if(u in t.aggregateOperators){var c=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(u,c),d=t.aggregateOperators[u]([c],n.events);r[i][l]=d}else a.error("Rules","Unknown aggregate operator "+u)}})),r},m=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},_=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l(t,s,0),c=l(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function n(e,s){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var u=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,c=t.generateAlias(e["op"],u);return c in o||(r.push({op:e["op"],args:e["args"]}),o[c]=!0),{field:[c]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=n(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=n(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=n(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var u=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],c=0;c<u.length;c++)e.hasOwnProperty(u[c])&&(s[u[c]]=e[u[c]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var E=function(e,n){n=n||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(i.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var u=e[t.clause.LIMIT];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("LIMIT must be a non-negative integer")}return n>0&&(r=i.map(r,(function(e){return"Sub-rule "+n+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(E(e[t.clause.FROM],n+1))),r},y=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return h(t,e)}))}))},I=function(e,n){var r=n;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=I(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=i.filter(r,(function(n){return h(n,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=g(e[t.clause.GROUP_BY],r),s=v(e[t.clause.AGGREGATE],o);r=m(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=i.filter(r,(function(n){return h(n,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=_(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var u=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),u=Number(e[t.clause.OFFSET]));var c;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),c=u+Number(e[t.clause.LIMIT])),(u>0||!i.isUndefined(c))&&(r=r.slice(u,c),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=y(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,n){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",n);var i=E(e);if(i.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+i.join("\n"));var o=I(e,n);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,n){try{return t.execute(e,n).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(158))}}),(function(e,t,n){var i=n(2),r=n(159),a=n(153),o=n(26),s=n(155);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var n=e.getProjectId(),u=i.filter(i.map(t.getCustomBehavioralAttributes(n),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),c=a.getEvents();return r.evaluate(u,c)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*s.MILLIS_IN_A_DAY;n-=n%s.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(23),o={FIELDS:n(62).FIELDS},s=n(155),u=n(156);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var c=i(n),l=r(n,60);for(s=0;s<e.length;s++){var d=e[s],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=u.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(161)),e.registerAudienceMatcher("first_session",n(162))}}),(function(e,t,n){var i=n(62),r=n(153),a=n(19).getFieldValue,o=n(87).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],n=a(t,[i.FIELDS.SESSION_INDEX]);return n===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(164))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(153),d=n(155),f=n(156);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(166)),e.registerVisitorProfileProvider(n(171)),e.registerVisitorProfileProvider(n(172)),e.registerAudienceMatcher("browser_version",n(173))}}),(function(e,t,n){var i=n(167);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(168),a=n(39),o=n(7),s=n(16),u=n(9),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),u.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in u)return e;var t=a.keys(u);return a.find(t,(function(t){var n=u[t];return a.includes(n,e)}))||"unknown"}function r(e,t,n){return t?t:"unknown"===e?"unknown":n?"mobile":"desktop_laptop"}var a=n(2),o=n(169);t.parseUA=function(e){var t=new o(e),n=t.getBrowser(),a=t.getOS(),u=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(n.name||"unknown").toLowerCase(),f=s(u.type,d,l);return{browser:{id:i(n.name),version:n.version},platform:{name:l,version:a.version},device:{model:c[u.model]||"unknown",type:r(d,u.type,f),isMobile:f}}};var s=function(e,t,n){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var i=["android","blackberry","ios","windows phone"];return!!a.includes(i,n)},u={gc:["chrome","chromium","silk","yandex","maxthon"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.17",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",h="model",g="name",v="type",m="vendor",_="version",E="architecture",y="console",I="mobile",S="tablet",T="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(e,t){for(var n,i,r,o,s,u,l=0;l<t.length&&!s;){var f=t[l],p=t[l+1];for(n=i=0;n<f.length&&!s;)if(s=f[n++].exec(e))for(r=0;r<p.length;r++)u=s[++i],o=p[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,u):this[o[0]]=o[1]:3==o.length?typeof o[1]!==c||o[1].exec&&o[1].test?this[o[0]]=u?u.replace(o[1],o[2]):a:this[o[0]]=u?o[1].call(this,u,o[2]):a:4==o.length&&(this[o[0]]=u?o[3].call(this,u.replace(o[1],o[2])):a):this[o]=u?u:a;l+=2}},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[g,_],[/(opios)[\/\s]+([\w\.]+)/i],[[g,"Opera Mini"],_],[/\s(opr)\/([\w\.]+)/i],[[g,"Opera"],_],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[g,_],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[g,"IE"],_],[/(edge)\/((\d+)?[\w\.]+)/i],[g,_],[/(yabrowser)\/([\w\.]+)/i],[[g,"Yandex"],_],[/(puffin)\/([\w\.]+)/i],[[g,"Puffin"],_],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[g,"UCBrowser"],_],[/(comodo_dragon)\/([\w\.]+)/i],[[g,/_/g," "],_],[/(micromessenger)\/([\w\.]+)/i],[[g,"WeChat"],_],[/(QQ)\/([\d\.]+)/i],[g,_],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[g,_],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[_,[g,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[_,[g,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[_,[g,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[g,/(.+)/,"$1 WebView"],_],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[g,/(.+(?:g|us))(.+)/,"$1 $2"],_],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[_,[g,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[g,_],[/(dolfin)\/([\w\.]+)/i],[[g,"Dolphin"],_],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[g,"Chrome"],_],[/(coast)\/([\w\.]+)/i],[[g,"Opera Coast"],_],[/fxios\/([\w\.-]+)/i],[_,[g,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[_,[g,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[_,g],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[g,"GSA"],_],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[g,[_,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[g,_],[/(navigator|netscape)\/([\w\.-]+)/i],[[g,"Netscape"],_],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[g,_]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[h,m,[v,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[h,[m,"Apple"],[v,S]],[/(apple\s{0,1}tv)/i],[[h,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,h,[v,S]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[h,[m,"Amazon"],[v,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[h,D.str,R.device.amazon.model],[m,"Amazon"],[v,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[h,m,[v,I]],[/\((ip[honed|\s\w*]+);/i],[h,[m,"Apple"],[v,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,h,[v,I]],[/\(bb10;\s(\w+)/i],[h,[m,"BlackBerry"],[v,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[h,[m,"Asus"],[v,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[h,"Xperia Tablet"],[v,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[h,[m,"Sony"],[v,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,h,[v,y]],[/android.+;\s(shield)\sbuild/i],[h,[m,"Nvidia"],[v,y]],[/(playstation\s[34portablevi]+)/i],[h,[m,"Sony"],[v,y]],[/(sprint\s(\w+))/i],[[m,D.str,R.device.sprint.vendor],[h,D.str,R.device.sprint.model],[v,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,h,[v,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[h,/_/g," "],[v,I]],[/(nexus\s9)/i],[h,[m,"HTC"],[v,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[h,[m,"Huawei"],[v,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,h,[v,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[h,[m,"Microsoft"],[v,y]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[m,"Microsoft"],[v,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[h,[m,"Motorola"],[v,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[h,[m,"Motorola"],[v,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,w.trim],[h,w.trim],[v,T]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[m,"Samsung"],[v,T]],[/\(dtv[\);].+(aquos)/i],[h,[m,"Sharp"],[v,T]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],h,[v,S]],[/smart-tv.+(samsung)/i],[m,[v,T],h],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],h,[v,I]],[/sie-(\w+)*/i],[h,[m,"Siemens"],[v,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],h,[v,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[h,[m,"Acer"],[v,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[h,[m,"LG"],[v,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],h,[v,S]],[/(lg) netcast\.tv/i],[m,h,[v,T]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[h,[m,"LG"],[v,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[h,[m,"Lenovo"],[v,S]],[/linux;.+((jolla));/i],[m,h,[v,I]],[/((pebble))app\/[\d\.]+\s/i],[m,h,[v,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,h,[v,I]],[/crkey/i],[[h,"Chromecast"],[m,"Google"]],[/android.+;\s(glass)\s\d/i],[h,[m,"Google"],[v,A]],[/android.+;\s(pixel c)\s/i],[h,[m,"Google"],[v,S]],[/android.+;\s(pixel xl|pixel)\s/i],[h,[m,"Google"],[v,I]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[h,/_/g," "],[m,"Xiaomi"],[v,I]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],[[h,/_/g," "],[m,"Xiaomi"],[v,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[h,[m,"Meizu"],[v,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[h,[m,"OnePlus"],[v,I]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[h,[m,"RCA"],[v,S]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[h,[m,"Dell"],[v,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[h,[m,"Verizon"],[v,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[m,"Barnes & Noble"],h,[v,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[h,[m,"NuVision"],[v,S]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[m,"ZTE"],h,[v,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[h,[m,"Swiss"],[v,I]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[h,[m,"Swiss"],[v,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[h,[m,"Zeki"],[v,S]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[m,"Dragon Touch"],h,[v,S]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[h,[m,"Insignia"],[v,S]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[h,[m,"NextBook"],[v,S]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[m,"Voice"],h,[v,I]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[m,"LvTel"],h,[v,I]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[h,[m,"Envizen"],[v,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[m,h,[v,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[h,[m,"MachSpeed"],[v,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[m,h,[v,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[h,[m,"Rotor"],[v,S]],[/android.+(KS(.+))\s+build/i],[h,[m,"Amazon"],[v,S]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[m,h,[v,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],m,h],[/(android.+)[;\/].+build/i],[h,[m,"Generic"]]],
engine:[[/windows.+\sedge\/([\w\.]+)/i],[_,[g,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[g,_],[/rv\:([\w\.]+).*(gecko)/i],[_,g]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[g,_],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[g,[_,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[g,"Windows"],[_,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[g,"BlackBerry"],_],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[g,_],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[g,"Symbian"],_],[/\((series40);/i],[g],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[g,"Firefox OS"],_],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[g,_],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[g,"Chromium OS"],_],[/(sunos)\s?([\w\.]+\d)*/i],[[g,"Solaris"],_],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[g,_],[/(haiku)\s(\w+)/i],[g,_],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[_,/_/g,"."],[g,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[g,"Mac OS"],[_,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[g,_]]},C=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof C))return new C(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(N,t):N;return this.getBrowser=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:a};return D.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return D.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};C.VERSION=o,C.BROWSER={NAME:g,MAJOR:p,VERSION:_},C.CPU={ARCHITECTURE:E},C.DEVICE={MODEL:h,VENDOR:m,TYPE:v,CONSOLE:y,MOBILE:I,SMARTTV:T,TABLET:S,WEARABLE:A,EMBEDDED:b},C.ENGINE={NAME:g,VERSION:_},C.OS={NAME:g,VERSION:_},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=C),t.UAParser=C):"function"===c&&n(170)?(i=function(){return C}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r&&(r.UAParser=C)})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(174).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(176)),e.registerAudienceMatcher("campaign",n(177))}}),(function(e,t,n){var i=n(118);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(179))}}),(function(e,t,n){var i=n(2),r=n(144);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(181)),e.registerAudienceMatcher("cookies",n(182))}}),(function(e,t,n){var i=n(74);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(184));var t=n(185);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=n(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var r=t,o=n,u=s.getByApiName(n),c=s.getById(n);return i.isObject(t)&&!t.id&&(u&&!c?(o=u.id,r={id:u.segmentId||u.id,value:t.value}):c||a.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=r,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(20);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(187)),e.registerVisitorProfileProvider(n(188)),e.registerAudienceMatcher("device",n(189))}}),(function(e,t,n){var i=n(167);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(191)),e.registerAudienceMatcher("device_type",n(192))}}),(function(e,t,n){var i=n(167);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=i.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(194)),e.registerAudienceMatcher("location",n(196))}}),(function(e,t,n){var i=n(195);e.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}}),(function(e,t,n){function i(){a.addScriptAsync(s)}var r=n(6),a=n(132),o="cdn3";t.getIP=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.ip}))},t.getIPDerivedGeolocation=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.location}))};var s="//cdn3.optimizely.com/js/geo2.js"}),(function(e,t){t.fieldsNeeded=["location"],t.match=function(e,t){if(!e.hasOwnProperty("location"))return!1;var n=e.location,i=t.value,r=i.split("|"),a=(r[0]||"").trim(),o=(r[1]||"").trim(),s=(r[2]||"").trim(),u=(r[3]||"").trim();switch(r.length){case 1:if(n.country===a)return!0;break;case 2:if(n.region===o&&n.country===a)return!0;break;case 3:if(n.city===s&&(n.region===o||""===o)&&n.country===a)return!0;break;case 4:if(n.continent===u)return!0}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(198)),e.registerAudienceMatcher("query",n(199))}}),(function(e,t,n){var i=n(118);e.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}}),(function(e,t,n){var i=n(2),r=n(20);t.fieldsNeeded=["queryParams"],t.match=function(e,t){var n=i.find(e.queryParams,(function(e){return e[0]===t.name}));return r.hasMatch(t.value,t.match,n?n[1]:null)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(201)),e.registerAudienceMatcher("referrer",n(202))}}),(function(e,t,n){var i=n(79),r=n(98);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(203);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(c)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(205)),e.registerAudienceMatcher("source_type",n(207))}}),(function(e,t,n){var i=n(118),r=n(79),a=n(98),o=n(206),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&o.guessDomain(e)!==o.guessDomain(i.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.guessDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(20);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(209)),e.registerVisitorProfileProvider(n(210)),e.registerAudienceMatcher("time_and_day",n(211))}}),(function(e,t,n){var i=n(24);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(212);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){function i(){var e=u.getGlobal("bk_results");if(e&&e.hasOwnProperty("campaigns")){var t=a.reduce(e.campaigns,(function(e,t){return t.campaign&&e.push(t.campaign),e}),[]);return{campaigns:t}}}var r="bluekai",a=n(2),o=n(12).Promise,s=n(86),u=n(39),c={provider:{isAsync:!0,getter:[function(){return function(e,t){var n=i();return n?(t(n),o.resolve(n)):s.pollFor(i)}}]},matcher:n(18),vendor:r};e.exports=function(e){e.registerAudiencePlugin(c)}}),(function(e,t,n){function i(e){function t(e,t,n){try{u(t),e[n]=t}catch(e){O.emitError(new X("Bad value for eventTags["+n+"]: "+e.message))}return e}var n=C.keys(ie),i=C.omit(e,n),r=C.pick(e,n),a=C.reduce(i,t,{}),o=C.reduce(r,(function(e,n,i){var r=ie[i];r.excludeFeature||t(a,n,i);try{r.validate(n),e[i]=r.sanitize(n),a[i]=e[i]}catch(e){O.emitError(new X("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=C.extend({entity_id:e.pageId,key:e.pageId,timestamp:e.timestamp,uuid:e.eventId,type:J},i(e.eventTags));return t}function a(e){return C.extend({entity_id:e.event.id,key:e.event.apiName,timestamp:e.timestamp,uuid:e.eventId,type:e.event.category},i(e.eventTags))}function o(e){return C.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function s(e){return{entity_id:null,type:$,uuid:e.eventId,timestamp:e.timestamp}}function u(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=F.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function c(e){if(null==e)throw new Error("Metric value is null");if(!C.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return C.reduce(e,(function(e,t){try{u(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){V.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,n){Y.dispatch(P.REGISTER_TRACKER_EVENT,{event:e,decisions:n}),f(t),D()}function f(e){var t=l(e);Y.dispatch(P.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function p(e){var t=l(e.userFeatures),n={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:g(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:Q}]}]}]};Y.dispatch(P.REGISTER_PREVIOUS_BATCH,n),D()}function h(e){var t=C.isNull(q.getAnonymizeIP())?void 0:q.getAnonymizeIP(),n={account_id:e.accountId,anonymize_ip:t,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};n.revision=e.revision,ee&&(n.enrich_decisions=!0);var i={session_id:g(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=R(e.layerStates);Y.dispatch(P.REGISTER_TRACKER_VISITOR,{data:n,visitor:i,decisions:r}),D()}function g(e){return se?oe:e}function v(e){var t={entity_id:e.layerId,type:Q,uuid:e.decisionId,timestamp:e.timestamp};Y.dispatch(P.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:R(e.layerStates)}),f(e.userFeatures),D()}function m(){if(!W.canSend())return void V.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(C.each(W.getPreviousBatches(),_),Y.dispatch(P.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(Y.dispatch(P.FINALIZE_BATCH_SNAPSHOT),_(W.getEventBatch()),Y.dispatch(P.RESET_TRACKER_EVENTS)))):void V.debug("Not sending events because there are no events to send")}function _(e){V.debug("Sending ticket:",e);var t=x.generate();B.retryableRequest({url:L,method:"POST",data:E(e)},t)}function E(e){var t=C.extend({},C.pick(e,["account_id","anonymize_ip","client_name","client_version","project_id","revision"]),{visitors:C.map(e.visitors,y)});return t}function y(e){return{visitor_id:e.visitor_id,session_id:oe,attributes:C.map(e.attributes,I),snapshots:C.map(e.snapshots,S)}}function I(e){return w(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function S(e){var t=e.events;return t=T(t),{activationTimestamp:q.getActivationTimestamp(),decisions:C.map(e.decisions,A),events:C.map(t,b)}}function T(e){var t=C.reduce(e,(function(e,t){var n;if(n=t.type!==J||!C.isEmpty(t.tags)||!C.isEmpty(C.pick(t,C.keys(ie)))||t.key&&t.entity_id!==t.key?t.uuid:t.type,e[n]){var i=e[n].timestamp;t.timestamp>i&&(i=t.timestamp),e[n]=C.extend({},e[n],{key:Z,entity_id:e[n].entity_id+"-"+t.entity_id,timestamp:i})}else e[n]=t;return e}),{});return C.values(t)}function A(e){return w(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function b(e){return e.key===Q&&(e.type=Q,delete e.key),w(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function w(e,t){return C.reduce(e,(function(e,n,i){return i in t&&(e[t[i]||i]=n),e}),{})}function D(){function e(){var t=!re||z.isLoaded();t&&m(),W.isPolling()&&G.setTimeout(e,ne)}return W.shouldBatch()?void(W.isPolling()||(G.setTimeout(e,ne),Y.dispatch(P.SET_TRACKER_POLLING,!0),G.setTimeout((function(){Y.dispatch(P.SET_TRACKER_BATCHING,!1),Y.dispatch(P.SET_TRACKER_POLLING,!1)}),te))):void m()}function R(e){return C.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function N(){var e=W.getPersistableState();if(e)try{V.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),Y.dispatch(P.SET_TRACKER_DIRTY,!1)}catch(e){V.debug("Failed to persist pending batch:",e)}}var C=n(2),O=n(84),x=n(5),L="https://logx.optimizely.com/v1/events",P=n(7),k=n(75).create,F=n(26),V=n(23),M=n(114),U=n(73),G=n(39),B=n(89),j=n(16),z=n(79),H=n(85),K=n(110),Y=n(9),q=j.get("stores/global"),W=j.get("stores/tracker_optimizely"),X=t.Error=k("OptimizelyTrackerError"),$="client_activation",Q="campaign_activated",J="view_activated",Z="multi-event",ee=!1,te=1e4,ne=1e3,ie={revenue:{validate:c,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:c,sanitize:Math.floor,excludeFeature:!0},value:{validate:c,sanitize:C.identity}},re=!1,ae=!1,oe="AUTO",se=!0,ue=[function(){return function(e){v(C.extend(e,e.decision))}}],ce=function(e){e.timing===M.TrackLayerDecisionTimingFlags.postRedirectPolicy?p(e):v(e)},le=[function(){return function(e){d(r(e),e.userFeatures,R(e.layerStates))}}],de=[function(){return function(e){h(e),d(s(e),e.userFeatures,R(e.layerStates))}}],fe=[function(){return function(e){d(o(e),e.userFeatures,R(e.layerStates))}}],pe=[function(){return function(e){d(a(e),e.userFeatures,R(e.layerStates))}}],he={onLayerDecision:ue,trackLayerDecision:ce,postRedirectPolicy:M.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:M.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:le,onClientActivation:de,onClickEvent:pe,onCustomEvent:fe};e.exports=function(e){e.registerAnalyticsTracker("optimizely",he),H.on({filter:{type:K.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){Y.dispatch(P.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||m()}}),H.on({filter:{type:K.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){Y.dispatch(P.SET_TRACKER_SEND_EVENTS,!1)}}),Y.dispatch(P.SET_TRACKER_SEND_EVENTS,!ae);var t=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(N),H.off(t)}})}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(216)),e.registerViewMatcher("url",n(217))}}),(function(e,t,n){var i=n(118);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(203);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){function i(){r(),a(),g.addEventListener("hashchange",m,!1),d.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){h.getViewsAndActivate(l.ViewActivationTypes.URLChanged)}})}function r(){function e(){var e=p.getOriginalPushState().apply(this,arguments);return o("pushState"),e}f.dispatch(u.ENSURE_ORIGINAL_PUSHSTATE),g.getGlobal("history").pushState=e}function a(){function e(){var e=p.getOriginalReplaceState().apply(this,arguments);return o("replaceState"),e}f.dispatch(u.ENSURE_ORIGINAL_REPLACESTATE),g.getGlobal("history").replaceState=e}function o(e){d.emit({type:"viewTrigger",name:"URLChanged",data:{source:e,newURL:g.getHref()}},!0)}var s=n(2),u=n(7),c=n(16),l=n(25),d=n(85),f=n(9),p=c.get("stores/history"),h=n(122),g=n(39),v="URLChanged";e.exports=function(e){i(),e.registerViewTrigger(v)};var m=s.partial(o,"hashchange")}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(109),a=n(220),o=n(23),s=n(122);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}),this))}),this)}function r(e,t,n){for(var i=e.target,r=0;i;){var s;try{s=c(i,t)}catch(s){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:n.id};return o.emitError(new l("Unable to evaluate match for element"),u),!1}if(s)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(84),s=n(75).create,u=n(79),c=n(221),l=t.Error=s("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(222)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){e.exports=function(e){e.registerApiModule("recommender",n(224))}}),(function(e,t,n){function i(e){return e===A.SELF_CONTAINED_MULTI_COL}function r(e){return e===A.SEPARATE_CATALOG_SINGLE_COL}function a(e,t){if(!i(t))return w in e?y.parse(e[w]):(I.warn('recommender / Expected key "'+w+'" not found'),[]);var n=new RegExp("^"+D+"(\\d+)$"),r=E.reduce(e,(function(t,i,r){var a=r.match(n);if(a){var o=y.parse(e[r]);o&&E.isObject(o)&&(t[a[1]]=o)}return t}),[]);return E.filter(r,(function(e){return!E.isUndefined(e)}))}function o(e,t){return[e,encodeURIComponent(t)].join("/")}function s(e,t){var n=function(e,t,n){if(!E.isArray(e)||E.isEmpty(e))throw new Error("No "+n+"s available");var i;if(t){if(i=E.find(e,{id:t}),!i)throw new Error("No "+n+" found with specified id "+t)}else{if(e.length>1)throw new Error("No "+n+" id specified when there are more than one available.");i=e[0]}return i},i=e.getRecommenderServices(),r=n(i,t&&t.recommenderServiceId,"recommender service");r.idTagName||(r.idTagName="id");var a=n(r.recommenders,t&&t.recommenderId,"recommender");return{recommenderService:r,recommender:a}}function u(e){var t=y.parse(e);return t.data}function c(e,t){return T.request({url:o(e,t)}).then((function(e){var t=u(e.response),n={};return b in t&&(n=y.parse(t[b])),n}))}function l(e,t,n,i){var s=!(!i||!i.fetchWithMetadata),c=i&&i.overrideServingUrl||t.servingUrl;return T.request({url:o(c,n)}).then((function(t){var n=[],o=u(t.response);return n=a(o,e.serviceVersion),s&&r(e.serviceVersion)?d(e,E.map(n,e.idTagName),i).then((function(e){return e=E.map(e,(function(e){return e instanceof Error&&(e={}),delete e["__proto__"],e})),E.merge(n,e)})):n}))}function d(e,t,n){var i=n&&n.overrideCatalogUrl||e.catalogUrl;return E.isString(t)?c(i,t):S.all(E.map(t,(function(e){return c(i,e)["catch"]((function(t){return I.warn("recommender / Failed to get recommendations for item:",e,t),t}))})))}function f(e,t,n){var i=s(e,n),r=i.recommenderService,a=i.recommender;return l(r,a,t,{overrideServingUrl:n&&n.overrideServingUrl,overrideCatalogUrl:n&&n.overrideCatalogUrl,fetchWithMetadata:!0})}function p(e,t,n){var i=s(e,n),a=i.recommenderService,o=i.recommender;if(!r(a.serviceVersion))throw new Error("Recommender service "+a.id+" serves self-contained recos. Use `fetchRecommendations` API call");return l(a,o,t,{overrideServingUrl:n&&n.overrideServingUrl,fetchWithMetadata:!1})}function h(e,t,n){var i=s(e,n),a=i.recommenderService;if(!r(a.serviceVersion))throw new Error("Recommender service "+a.id+" serves self-contained recos. Use `fetchRecommendations` API call");return E.isArray(t)&&t.length>R?S.reject("Cannot fetch more than "+R+" items"):d(a,t,n)}function g(e,t,n,i){return new v(e,t,n,i)}function v(e,t,n,i){this.recommenderSettings=t;var r=s(e,t);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=n,i&&(this.preFilter=i.preFilter,this.canonicalize=i.canonicalize,this.postFilter=i.postFilter),this._globalStore=e,this.reset()}function m(){var e={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return I.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),r(this.recommenderService.serviceVersion)?p(this._globalStore,this.targetId,this.recommenderSettings).then(E.bind((function(t){return e.recosNoMeta=E.filter(t,this.preFilter),e}),this)):f(this._globalStore,this.targetId,this.recommenderSettings).then(E.bind((function(t){return e.recos=E(t).filter(this.preFilter).map(this.canonicalize).filter(this.postFilter).value(),e}),this))}function _(e){var t=e.numNeeded,n=e.buffer,i=n.recosNoMeta.length-n.recosNoMetaOffset;if(t<=0||i<=0)return S.resolve(e);var r=5,a=Math.max(t,r),o=E.slice(n.recosNoMeta,n.recosNoMetaOffset,n.recosNoMetaOffset+a),s=E.map(o,this.recommenderService.idTagName);n.recosNoMetaOffset+=s.length;var u=e.recosSoFar;return I.debug("recommender / fetching metadata for",s,"from recommender",this.recommender.id),h(this._globalStore,s,this.recommenderSettings).then(E.bind((function(i){i=E.map(i,(function(e){return e instanceof Error?{}:e})),n.recos=E(o).merge(i).map(this.canonicalize).filter(this.postFilter).value();var r=E.slice(n.recos,0,t);return n.recosOffset=r.length,e.recosSoFar=u.concat(r),e.numNeeded-=r.length,e.numNeeded>0?_.call(this,e):e}),this))}var E=n(2),y=n(26),I=n(23),S=n(12).Promise,T=n(89),A={SELF_CONTAINED_MULTI_COL:1,SEPARATE_CATALOG_SINGLE_COL:2},b="itemMetadata",w="recos",D="reco",R=20;v.prototype.reset=function(){this._bufferPromise=null},v.prototype.next=function(e){var t=Math.floor(E.isNumber(e)?e:1);if(t<=0)throw new Error("Invalid argument "+e+". Must be positive integer");this._bufferPromise||(this._bufferPromise=m.call(this));var n=this._bufferPromise.then(E.bind((function(e){var n=[],i=e.recos.length-e.recosOffset;return i>0&&(n=e.recos.slice(e.recosOffset,e.recosOffset+t),e.recosOffset+=n.length,t-=n.length),t<=0?{result:n,buffer:e}:_.call(this,{buffer:e,recosSoFar:n,numNeeded:t}).then((function(e){return{result:e.recosSoFar,buffer:e.buffer}}))}),this));return this._bufferPromise=n.then((function(e){return e.buffer})),n.then((function(e){return e.result}))},e.exports=["stores/global",function(e){return{fetchRecommendations:E.partial(f,e),fetchRecommendedItems:E.partial(p,e),fetchItemMetadata:E.partial(h,e),getRecommendationsFetcher:E.partial(g,e)}}]}),(function(e,t,n){function i(e,t){if(this.change=r.cloneDeep(e),this.change=y.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime,this.disconnectObserverQueue=[],d.shouldObserveChangesIndefinitely()){h.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new m(T.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(T.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:T.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){g.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new b("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:T.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){h.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}this.cancelled=!1}var r=n(2),a=n(7),o=n(84),s=n(137),u=n(75).create,c=n(226),l=n(227),d=n(16).get("stores/directive"),f=n(79),p=n(228),h=n(9),g=n(23),v=n(229),m=n(230),_=n(136),E=n(39),y=n(231),I=n(99).create(),S={attributes:!0,childList:!0,subtree:!0,characterData:!0},T={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},A=!0,b=u("ChangeOverheatError");i.prototype.apply=function(){this.applyDeferred=l();try{if(r.isEmpty(this.change.attributes)&&r.isEmpty(this.change.css))return g.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var e=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};d.shouldObserveChangesUntilTimeout()?t={timeout:r.partial(_.isTimedOut,this.startTime),onTimeout:e}:d.isEditor()&&I.waitUntil(r.partial(_.isTimedOut,this.startTime)).then(e,e),this.unobserveSelector=I.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),t);var n=f.querySelectorAll(this.change.selector);r.each(n,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return g.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+e),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);if(n(),A){var i=r.bind((function(){E.setTimeout(r.bind((function(){this.cancelled||v.observe(a,e,S)}),this))}),this),a=v.create(r.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),a.disconnect(),n(),i()}),this));i(),this.disconnectObserverQueue.push(r.bind(a.disconnect,a))}this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n={};r.forOwn(this.change.attributes,(function(i,a){switch(a){case p.selectorChangeType.CLASS:r.isUndefined(e.className)||(n[p.selectorChangeType.CLASS]=e.className,e.className=i);break;case p.selectorChangeType.HREF:r.isUndefined(e.href)||(n[p.selectorChangeType.HREF]=e.href,e.href=i);break;case p.selectorChangeType.HTML:r.isUndefined(e.innerHTML)||(n[p.selectorChangeType.HTML]=e.innerHTML,
e.innerHTML=i,r.each(f.childrenOf(e),(function(e){e.setAttribute(t,"")})));break;case p.selectorChangeType.SRC:r.isUndefined(e.src)||(n[p.selectorChangeType.SRC]=e.src,e.src=i);break;case p.selectorChangeType.STYLE:break;case p.selectorChangeType.TEXT:r.isUndefined(e.textContent)||(n[p.selectorChangeType.TEXT]=e.textContent,e.textContent=i);break;default:throw new Error("Unrecognized attribute: "+a)}}));var i=y.createStylesFromChange(e.style.cssText,this.change);r.isString(i)&&(n[p.selectorChangeType.STYLE]=e.style.cssText,e.style.cssText=i),e.setAttribute(t,""),c.setData(e,this.change.id,this.identifier,n)},i.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),r.each(this.disconnectObserverQueue,(function(e){try{e()}catch(e){}}))},e.exports=function(e){e.registerChangeApplier(p.changeType.ATTRIBUTE,i)}}),(function(e,t,n){function i(e,t){return[e,t].join("_")}var r=n(2),a=n(137).CHANGE_DATA_KEY;t.getData=function(e,t,n){var r=i(t,n);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,n){e[a]&&delete e[a][i(t,n)]},t.setData=function(e,t,n,r){if("object"!=typeof r)throw new Error("setData expects an object");e[a]||(e[a]={}),e[a][i(t,n)]=r}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t){t.create=function(e){return new MutationObserver(e)},t.observe=function(e,t,n){e.observe(t,n)}}),(function(e,t,n){function i(e){this.windowLength=e,this.count=0,this.listeners={},this.isIncrementingTick=!1}var r=n(2),a=n(23),o=n(39);i.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(r.bind((function(){this.isIncrementingTick=!1}),this),0))},i.prototype.increment=function(){this.count+=1,r.forEach(this.listeners[String(this.count)],(function(e){e()})),o.setTimeout(r.bind(this.decrement,this),this.windowLength)},i.prototype.decrement=function(){this.count-=1,this.count<0&&(a.warn("Decremented down to negative count: ",this.count),this.count=0)},i.prototype.addListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.exports=i}),(function(e,t,n){var i=n(2),r=n(228);t.transformVisibilityAttributesToCSS=function(e){if(!e.attributes)return e;if(e.attributes[r.selectorChangeType.HIDE]||e.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(e));return e.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),e.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return e},t.createStylesFromChange=function(e,t){if(i.isEmpty(t.css))return t.attributes.style;var n="",r=t.attributes.style||"";return i.each(t.css,(function(e,t){var i=new RegExp(t+"\\s?:");i.test(r)||(n+=t+":"+e+";")})),i.isUndefined(t.attributes.style)?(e||"")+n:n+r}}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(227),o=n(228),s=n(144);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){function i(e,t){this.change=r.extend({},e),this.identifier=t.identifier}var r=n(2),a=n(227),o=n(228),s=n(105),u="showWidget";i.prototype.apply=function(){return s.emit({type:u,name:this.change.widget_id,data:this.change}),a().resolve(o.changeState.APPLIED)},e.exports=function(e){e.registerChangeApplier(o.changeType.WIDGET,i)}}),(function(e,t,n){function i(e,t,n,i){var l,d=e.decisionMetadata.experimentPriorities[i],f=function(n,i){var r=u.getExperimentById(e,i.entityId);return u.isValidExperiment(t,r)&&n.push(i.entityId),n},p=o.reduce(d,f,[]);if(!o.isEmpty(p)){var h,g=o.filter(d,{endOfRange:null});if(g&&g.length===d.length)h=r(p);else{if(0!==g.length)throw new c("You must specify weights for all or none of the experiments in each priority layer.");h=a(p,d)}if(l=s.chooseWeightedCandidate(n,e.id,h)){var v=u.getExperimentById(e,l);if(v)return v}}}function r(e){for(var t=[],n=Math.round(1e4/e.length),i=0;i<e.length;i++)t.push({entityId:e[i],endOfRange:n*(i+1)});return t[t.length-1].endOfRange=1e4,t}function a(e,t){for(var n=[],i=[],r=0,a=0;a<t.length;a++){var s=0;e.indexOf(t[a].entityId)>=0&&(s=0===a?t[0].endOfRange:t[a].endOfRange-t[a-1].endOfRange,r+=s,i.push({entityId:t[a].entityId,points:s}))}if(o.isEmpty(n))for(var u=0,c=0;c<i.length;c++){var l=Math.round(1e4*i[c].points/r)+u;n.push({entityId:i[c].entityId,endOfRange:l}),u=l}return n[n.length-1].endOfRange=1e4,n}var o=n(2),s=n(140),u=n(141),c=n(142).DecisionError,l="equal_priority",d={decideLayer:function(e,t){if(!e.decisionMetadata||!e.decisionMetadata.experimentPriorities)throw new c("No decisionMetadata.experimentPriorities on layer.");for(var n=e.decisionMetadata.experimentPriorities.length,r=0;r<n;r++){var a=i(e,t.audienceIds,t.bucketingId,r);if(a){var o=u.selectVariation(a,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap);if(!e.decisionMetadata.offerConsistency||u.hasVariationActionsOnView(o,t.pageId))return{experiment:a,variation:o}}}throw new c("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(e){return!(!e.decisionMetadata||!e.decisionMetadata.offerConsistency)}};e.exports=function(e){e.registerDecider(l,d)}})]);