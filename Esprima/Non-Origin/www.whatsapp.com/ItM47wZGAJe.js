if (self.CavalryLogger) { CavalryLogger.start_js(["KlAkN"]); }

__d("UniversalMicroSiteAttributeCollector",["immutable","getContextualParent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="data-ms";a={MS_ATTRIBUTE_NAME:g,collectClickDataAttributes:function(a){__p&&__p();var c=[],d=[],e={};a=a;var f=null;while(a){if(a instanceof Element){var h=a.getAttribute(g);if(h){h=JSON.parse(h);var i=h.creative,j=h.cmsid,k=h.destinationcmsid;h=babelHelpers.objectWithoutPropertiesLoose(h,["creative","cmsid","destinationcmsid"]);i&&c.push(i);j&&d.push(j);k!=null&&(f=k);Object.entries(h).forEach(function(a){var b=a[0];a=a[1];return e[b]=a!==null&&a!==void 0&&typeof a==="string"?a:JSON.stringify(a)})}}a=b("getContextualParent")(a)}return{creativePath:c,cmsidPath:d,destinationCmsid:f,extraData:b("immutable").Map(e)}}};e.exports=a}),null);
__d("UniversalMicroSiteTrackingUtils",["DOM","Parent","URI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="LinkshimAsyncLink.swap(";a={isLinkShimmed:function(a){var c=new(b("URI"))(a.getAttribute("href"));c=b("isLinkshimURI")(c);a=a.getAttribute("onmouseover");a=a&&a.startsWith(g);return c||a},getDestinationFromElement:function(a){if(a instanceof HTMLAnchorElement&&a.href)return a.href;a=b("Parent").byTag(a,"form");return a instanceof HTMLFormElement?b("DOM").scry(a,"input").reduce(function(a,b){return a.getQueryData()[b.name]?a:a.addQueryData(b.name,b.value)},new(b("URI"))(a.getAttribute("ajaxify")||a.action)).toString():null}};e.exports=a}),null);
__d("isInstagramURI",[],(function(a,b,c,d,e,f){function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:a.isSecure()&&a.isSubdomainOfDomain("instagram.com")}e.exports=a}),null);
__d("UniversalMicroSiteClickTracker",["invariant","Event","EventListener","Keys","Parent","SubscriptionsHandler","UniversalMicroSiteTrackingUtils","URI","isFacebookURI","isInstagramURI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=801,i=/async(?:-post)?|dialog(?:-post)?|theater|toggle/,j=!1;a=function(){__p&&__p();function a(a,c){this.$2=new(b("SubscriptionsHandler"))(),!j||!c||g(0,3518),this.$1=a,c&&!this.$4()?(this.$3=c,this.$5(),this.$6(),j=!0):this.$7()}var c=a.prototype;c.destroy=function(){this.$2.release()};c.$7=function(){var a=this;this.$2.addSubscriptions(b("EventListener").capture(document.body,"click",function(b){b=a.$8(b)||a.$9(b)||a.$10(b);b&&a.$1(b)}))};c.$5=function(){__p&&__p();var a=this;this.$2.addSubscriptions(b("Event").listen(document,"mousedown",function(c){__p&&__p();var d=a.$8(c);if(d)if(a.$11(d)&&(c.isRightClick()||c.ctrlKey)){var e=d.href;d.href=a.$3(d).toString();var f=b("Event").listen(d,"mouseout",function(a){f&&f.remove(),f=null,d.href=e},b("Event").Priority.URGENT)}else{var g=b("Event").listen(d,"click",function(b){g&&g.remove(),g=null,a.$1(d)},b("Event").Priority.URGENT);setTimeout(function(){g&&g.remove(),g=null},500)}},b("Event").Priority.URGENT),b("Event").listen(document,"keydown",function(c){var d=a.$8(c);if(d&&b("Event").getKeyCode(c)===b("Keys").RETURN){var e=b("Event").listen(d,"click",function(b){e&&e.remove(),e=null,a.$1(d)},b("Event").Priority.URGENT);setTimeout(function(){e&&e.remove(),e=null},500)}},b("Event").Priority.URGENT))};c.$6=function(){var a=this;this.$2.addSubscriptions(b("Event").listen(document,"click",function(b){b=a.$9(b)||a.$10(b);b&&a.$1(b)},b("Event").Priority.URGENT))};c.$10=function(a){a=b("Parent").byAttribute(a.getTarget(),"data-ms-clickable");return a instanceof HTMLElement?a:null};c.$9=function(a){a=b("Parent").byTag(a.getTarget(),"Button");return a instanceof HTMLButtonElement?a:null};c.$8=function(a){a=b("Parent").byTag(a.getTarget(),"A");return a instanceof HTMLAnchorElement?a:null};c.$11=function(a){__p&&__p();if(a.getAttribute("ajaxify"))return!1;if(a.rel&&a.rel.match(i))return!1;var c=a.getAttribute("href");if(!c||c.charAt(0)==="#")return!1;c=new(b("URI"))(c);if(!b("isFacebookURI")(c)&&!b("isInstagramURI")(c))return!1;return b("UniversalMicroSiteTrackingUtils").isLinkShimmed(a)?!1:!0};c.$4=function(){return window.innerWidth<h};return a}();e.exports=a}),null);
__d("UniversalMicroSiteLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LOAD:"load",CLIENT_ERROR:"client_error",CLIENT_LOADED:"client_loaded",DROPDOWN_CLOSE:"dropdown_close",DROPDOWN_OPEN:"dropdown_open",UNLOAD:"unload",CLICK:"click",SEARCH:"search",CUSTOM:"custom",VIDEO_PLAY:"video_play",VIDEO_PAUSE:"video_pause",VIDEO_FINISH:"video_finish",VIDEO_UNLOAD:"video_unload",ID_SYNC:"id_sync",REDIRECT_LOAD:"redirect_load",SERVER_ERROR:"server_error",WHATSAPP_CSAT_VIEW:"csat_view",WHATSAPP_CSAT_YES:"csat_yes",WHATSAPP_CSAT_NO:"csat_no",WHATSAPP_CSAT_CONFUSING:"csat_confusing",WHATSAPP_CSAT_QUESTION_NOT_ANSWERED:"csat_question_not_answered",WHATSAPP_CSAT_SOLUTION_DOES_NOT_WORK:"csat_solution_does_not_work",WHATSAPP_CSAT_DO_NOT_LIKE:"csat_do_not_like"})}),null);
__d("UniversalMicroSiteLoggerField",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CAMPAIGN_ID:"campaign_id",CLICK_CREATIVE_PATH:"click_creative_path",CLICK_FROM_CONTEXT_MENU:"click_from_context_menu",CMS_PATH:"cmsid_path",COUNTRY:"country",DESTINATION:"destination",DESTINATION_CMSID:"destination_cmsid",DROPDOWN_DURATION:"dropdown_duration",EVENT_TYPE:"event_type",EXTRA_DATA:"extra_data",FILE:"file",ID_SYNC:"id_sync",IS_ERROR:"is_error",IS_SPIDER:"is_spider",LAST_NAV_IMPRESSION_ID:"last_nav_impression_id",LINE:"line_number",MAX_PERCENT_PAGE_VIEWED:"max_percent_page_viewed",MAX_VIEWPORT_HEIGHT_PX:"max_viewport_height_px",MAX_VIEWPORT_WIDTH_PX:"max_viewport_width_px",MESSAGE:"message",ORIG_HTTP_REFERRER:"orig_http_referrer",ORIG_REQUEST_URI:"orig_request_uri",PATH_COMPONENTS:"path_components",PRIMARY_CMS_ID:"primary_cmsid",PRIMARY_CONTENT_LOCALE:"primary_content_locale",QUERY:"query",RANKED_SEARCH_RESULTS:"ranked_search_results",REGION:"region",SCROLLED:"scrolled",SEARCH_SESSION_ID:"search_session_id",SEARCH_FILTERS:"search_filters",SESSION_ID:"session_id",SITE:"site",STACK_TRACE:"stack_trace",STATUS_CODE:"status_code",VIDEO_DURATION:"video_duration",VIDEO_ID:"video_id",VIDEO_TIME_POSITION:"video_time_position"})}),null);
__d("UniversalMicroSiteLoggerSite",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ANALYTICS:"analytics",AUDIENCE_NETWORK:"audience_network",AUDIT_HOME:"audit_home",BLUEPRINT:"blueprint",BLUEPRINT_V2:"blueprint_v2",BOOST:"facebook_boost",BRAND_LAUNCHPAD:"brand_launchpad",CAREERS:"careers",COMMUNITY:"community",CRISIS_RESPONSE:"crisis_response",DIGITAL_LITERACY:"digital_literacy",DOGFOODING:"dogfooding",FB4B:"fb4b",FB4C:"fb4c",FB_AI:"fb_ai",FB_GAMING:"fb_gaming",FBIQ:"fbiq",GMS_HUB:"gms_hub",HELP_AT_PORTAL:"help_at_portal",IGB:"igb",INSTAGRAM_WELLBEING:"instagram_wellbeing",INTL_HELP:"intl_help",LOOP:"loop",MEDIA_PORTAL:"media_portal",MICRO_LOGGER_TEST:"micro_logger_test",MICRO_LOGGER_TEST_2:"micro_logger_test_2",ONBOARDING_PORTAL:"onboarding_portal",OPENSOURCE:"opensource",PEOPLE_PORTAL:"people_portal",PEOPLE_PORTAL_KB:"people_portal_kb",SAFETY_CENTER:"safety_center",WHATSAPP_FAQ:"whatsapp_faq",WHATSAPP_WWW:"whatsapp_www",WORKPLACE_MARKETING:"workplace_marketing"})}),null);
__d("UniversalMicroSiteTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("universal_micro_logger:UniversalMicroSiteLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("universal_micro_logger:UniversalMicroSiteLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("universal_micro_logger:UniversalMicroSiteLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClickCreativePath=function(a){this.$1.click_creative_path=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setClickFromContextMenu=function(a){this.$1.click_from_context_menu=a;return this};c.setCmsidPath=function(a){this.$1.cmsid_path=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setCountry=function(a){this.$1.country=a;return this};c.setDestination=function(a){this.$1.destination=a;return this};c.setDestinationCmsid=function(a){this.$1.destination_cmsid=a;return this};c.setDropdownDuration=function(a){this.$1.dropdown_duration=a;return this};c.setEventType=function(a){this.$1.event_type=a;return this};c.setFile=function(a){this.$1.file=a;return this};c.setIDSync=function(a){this.$1.id_sync=a;return this};c.setIsError=function(a){this.$1.is_error=a;return this};c.setLastNavImpressionID=function(a){this.$1.last_nav_impression_id=a;return this};c.setLineNumber=function(a){this.$1.line_number=a;return this};c.setMaxPercentPageViewed=function(a){this.$1.max_percent_page_viewed=a;return this};c.setMaxViewportHeightPx=function(a){this.$1.max_viewport_height_px=a;return this};c.setMaxViewportWidthPx=function(a){this.$1.max_viewport_width_px=a;return this};c.setMessage=function(a){this.$1.message=a;return this};c.setOrigHTTPReferrer=function(a){this.$1.orig_http_referrer=a;return this};c.setOrigRequestURI=function(a){this.$1.orig_request_uri=a;return this};c.setPathComponents=function(a){this.$1.path_components=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setPrimaryCmsid=function(a){this.$1.primary_cmsid=a;return this};c.setPrimaryContentLocale=function(a){this.$1.primary_content_locale=a;return this};c.setQuery=function(a){this.$1.query=a;return this};c.setRankedSearchResults=function(a){this.$1.ranked_search_results=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setRegion=function(a){this.$1.region=a;return this};c.setScrolled=function(a){this.$1.scrolled=a;return this};c.setSearchFilters=function(a){this.$1.search_filters=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setSearchSessionID=function(a){this.$1.search_session_id=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setSite=function(a){this.$1.site=a;return this};c.setStackTrace=function(a){this.$1.stack_trace=a;return this};c.setStatusCode=function(a){this.$1.status_code=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoDuration=function(a){this.$1.video_duration=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setVideoTimePosition=function(a){this.$1.video_time_position=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={click_creative_path:!0,click_from_context_menu:!0,cmsid_path:!0,country:!0,destination:!0,destination_cmsid:!0,dropdown_duration:!0,event_type:!0,file:!0,id_sync:!0,is_error:!0,last_nav_impression_id:!0,line_number:!0,max_percent_page_viewed:!0,max_viewport_height_px:!0,max_viewport_width_px:!0,message:!0,orig_http_referrer:!0,orig_request_uri:!0,path_components:!0,primary_cmsid:!0,primary_content_locale:!0,query:!0,ranked_search_results:!0,region:!0,scrolled:!0,search_filters:!0,search_session_id:!0,session_id:!0,site:!0,stack_trace:!0,status_code:!0,time:!0,vc:!0,video_duration:!0,video_id:!0,video_time_position:!0,weight:!0};e.exports=a}),null);
__d("UniversalMicroSiteVideoTracking",["SubscriptionList","UniversalMicroSiteLoggerEvent","VideoPlayerRegistry"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("SubscriptionList"))();function h(a){b("VideoPlayerRegistry").getList().forEach(function(c){if(c.isState("playing")){c=k(c,b("UniversalMicroSiteLoggerEvent").VIDEO_PLAY);a(c)}})}function i(){b("VideoPlayerRegistry").getList().forEach(j),b("VideoPlayerRegistry").addListener(b("VideoPlayerRegistry").ADDED,j)}function j(a){a.isState("playing")&&l(a,b("UniversalMicroSiteLoggerEvent").VIDEO_PLAY),a.addListener("beginPlayback",function(){return l(a,b("UniversalMicroSiteLoggerEvent").VIDEO_PLAY)}),a.addListener("pausePlayback",function(){return l(a,b("UniversalMicroSiteLoggerEvent").VIDEO_PAUSE)}),a.addListener("finishPlayback",function(){return l(a,b("UniversalMicroSiteLoggerEvent").VIDEO_FINISH)}),a.addListener("stateChange",function(){a.isState("destroyed")&&a.getOriginalPlayReason()&&l(a,b("UniversalMicroSiteLoggerEvent").VIDEO_UNLOAD)})}function k(a,b){return{event:b,currentTime:parseFloat(a.getCurrentTimePosition().toFixed(2)),duration:parseFloat(a.getPlaybackDuration().toFixed(2)),videoID:a.getVideoID()}}function l(a,b){g.fireCallbacks(k(a,b))}var m=!1;a={init:function(a){!m?(i(),m=!0):h(a);return g.add(a)}};e.exports=a}),null);
__d("UniversalMicroSiteViewportTracking",["invariant","Event","SubscriptionList","Vector","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=new(b("SubscriptionList"))(),k=0,l=0,m=0,n=!1;function o(){var a=b("Vector").getScrollPosition().y,c=b("Vector").getViewportDimensions().y,d=b("Vector").getDocumentDimensions().y;a=Math.floor((a+c)/d*100);k=Math.max(a,k);k>=100&&(h=null)}function p(){var a=b("Vector").getViewportDimensions();m=Math.max(a.x,m);l=Math.max(a.y,l)}function q(){k=0,l=0,m=0,n=!1,o(),p(),h||(h=b("Event").listen(window,"scroll",r(function(){o(),n=!0},100))),i||(i=b("Event").listen(window,"resize",r(function(){o(),p()},100)))}function r(a){return b("throttle")(function(){a(),j.fireCallbacks({hasScrolled:n,maxPercentVerticalViewportShown:k,maxViewportWidthPx:m,maxViewportHeightPX:l})},100)}var s=!1;function t(){s||g(0,4196)}a={init:function(a){q();s=!0;return a&&j.add(a)},getHasScrolled:function(){t();return n},getMaxPercentVerticalViewportShown:function(){t();return k},getMaxViewportWidthPx:function(){t();return m},getMaxViewportHeightPx:function(){t();return l}};e.exports=a}),null);
__d("WhatsAppUniversalMicroSiteTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WhatsAppUniversalMicroSiteLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WhatsAppUniversalMicroSiteLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WhatsAppUniversalMicroSiteLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCountry=function(a){this.$1.country=a;return this};c.setDeviceType=function(a){this.$1.device_type=a;return this};c.setEventType=function(a){this.$1.event_type=a;return this};c.setFasteditContentType=function(a){this.$1.fastedit_content_type=a;return this};c.setFasteditID=function(a){this.$1.fastedit_id=a;return this};c.setFasteditLang=function(a){this.$1.fastedit_lang=a;return this};c.setFasteditLastPushed=function(a){this.$1.fastedit_last_pushed=a;return this};c.setFasteditPlatform=function(a){this.$1.fastedit_platform=a;return this};c.setFasteditTitle=function(a){this.$1.fastedit_title=a;return this};c.setFasteditVisibility=function(a){this.$1.fastedit_visibility=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setFile=function(a){this.$1.file=a;return this};c.setIsError=function(a){this.$1.is_error=a;return this};c.setLineNumber=function(a){this.$1.line_number=a;return this};c.setMessage=function(a){this.$1.message=a;return this};c.setOrigHTTPReferrer=function(a){this.$1.orig_http_referrer=a;return this};c.setOrigRequestURI=function(a){this.$1.orig_request_uri=a;return this};c.setPrimaryCmsid=function(a){this.$1.primary_cmsid=a;return this};c.setPrimaryContentLocale=function(a){this.$1.primary_content_locale=a;return this};c.setRegion=function(a){this.$1.region=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setSite=function(a){this.$1.site=a;return this};c.setStackTrace=function(a){this.$1.stack_trace=a;return this};c.setStatusCode=function(a){this.$1.status_code=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.setWhatsappUniqueID=function(a){this.$1.whatsapp_unique_id=a;return this};return a}();c={country:!0,device_type:!0,event_type:!0,fastedit_content_type:!0,fastedit_id:!0,fastedit_lang:!0,fastedit_last_pushed:!0,fastedit_platform:!0,fastedit_title:!0,fastedit_visibility:!0,file:!0,is_error:!0,line_number:!0,message:!0,orig_http_referrer:!0,orig_request_uri:!0,primary_cmsid:!0,primary_content_locale:!0,region:!0,session_id:!0,site:!0,stack_trace:!0,status_code:!0,time:!0,weight:!0,whatsapp_unique_id:!0};e.exports=a}),null);
__d("XGBMDestinationCmsidAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/async/destinationcmsid/",{})}),null);
__d("XUniversalMicroLoggerShimController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/micro_site/url/",{destination:{type:"String",required:!0},site:{type:"Enum",required:!0,enumType:1},event_type:{type:"Enum",required:!0,enumType:1},click_from_context_menu:{type:"Bool",defaultValue:!1},max_viewport_height_px:{type:"Int"},max_viewport_width_px:{type:"Int"},primary_cmsid:{type:"Int"},cmsid_path:{type:"IntVector"},country:{type:"String"},region:{type:"Enum",enumType:1},primary_content_locale:{type:"String"},last_nav_impression_id:{type:"String"},session_id:{type:"String"},search_session_id:{type:"String"},click_creative_path:{type:"StringVector"},orig_http_referrer:{type:"String"},orig_request_uri:{type:"String"},scrolled:{type:"Bool",defaultValue:!1},max_percent_page_viewed:{type:"Int"},extra_data:{type:"StringToNullableStringMap",defaultValue:{}},destination_cmsid:{type:"String"}})}),null);
__d("UniversalMicroSiteTrackingController",["invariant","AsyncRequest","Banzai","ErrorUtils","SubscriptionList","UniversalMicroSiteAttributeCollector","UniversalMicroSiteClickTracker","UniversalMicroSiteLoggerEvent","UniversalMicroSiteLoggerField","UniversalMicroSiteLoggerSite","UniversalMicroSiteTrackingUtils","UniversalMicroSiteTypedLogger","UniversalMicroSiteVideoTracking","UniversalMicroSiteViewportTracking","URI","WhatsAppUniversalMicroSiteTypedLogger","XGBMDestinationCmsidAsyncController","XUniversalMicroLoggerShimController","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j,k,l,m,n,o,p,q,r,s,t=!1,u=new(b("SubscriptionList"))();function v(){__p&&__p();if(r===b("UniversalMicroSiteLoggerSite").WHATSAPP_FAQ||r===b("UniversalMicroSiteLoggerSite").WHATSAPP_WWW){var a=new(b("WhatsAppUniversalMicroSiteTypedLogger"))().setCountry(h).setOrigHTTPReferrer(k).setOrigRequestURI(l).setPrimaryCmsid(m).setPrimaryContentLocale(n).setSessionID(q).setSite(r);o&&a.setRegion(o);if(s){a.setFasteditID(s.get("id")).setFasteditLang(s.get("lang")).setFasteditTitle(s.get("title")).setFasteditContentType(s.get("content_type")).setFasteditPlatform(s.get("platform"));var c=s.get("last_pushed"),d=s.get("visibility");c&&a.setFasteditLastPushed(c);d&&a.setFasteditVisibility(d.split(","));c=s.get("whatsapp_unique_id");c&&a.setWhatsappUniqueID(c);d=s.get("device_type");d&&a.setDeviceType(d)}return a}return w()}function w(){var a=new(b("UniversalMicroSiteTypedLogger"))().setCountry(h).setLastNavImpressionID(j).setMaxPercentPageViewed(b("UniversalMicroSiteViewportTracking").getMaxPercentVerticalViewportShown()).setMaxViewportHeightPx(b("UniversalMicroSiteViewportTracking").getMaxViewportHeightPx()).setMaxViewportWidthPx(b("UniversalMicroSiteViewportTracking").getMaxViewportWidthPx()).setOrigHTTPReferrer(k).setOrigRequestURI(l).setPrimaryCmsid(m).setPrimaryContentLocale(n).setScrolled(b("UniversalMicroSiteViewportTracking").getHasScrolled()).setSearchSessionID(p).setSessionID(q).setSite(r);o&&a.setRegion(o);return a}function x(a){return u.add(a)}function y(a,b){return u.getCallbacks().reduce(function(b,c){return c({data:b,element:a})},b)}function z(a){var c=b("UniversalMicroSiteAttributeCollector").collectClickDataAttributes(a),d=b("immutable").Map(babelHelpers["extends"]({},i.toJS(),c.extraData.toJS()));a=y(a,d);return babelHelpers["extends"]({},a.toJS(),{cmsidPath:c.cmsidPath,clickCreativePath:c.creativePath,destinationCmsid:c.destinationCmsid})}function A(a){__p&&__p();var c=z(a),d=c.cmsidPath,e=c.clickCreativePath,f=c.destinationCmsid;c=babelHelpers.objectWithoutPropertiesLoose(c,["cmsidPath","clickCreativePath","destinationCmsid"]);var g=v();if(g instanceof b("WhatsAppUniversalMicroSiteTypedLogger"))g.setEventType(b("UniversalMicroSiteLoggerEvent").CLICK).logImmediately();else{a=b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a);g.setClickCreativePath(e).setClickFromContextMenu(!1).setCmsidPath(d).setDestination(a).setEventType(b("UniversalMicroSiteLoggerEvent").CLICK).updateExtraData(c);f==null&&a!=null?new(b("AsyncRequest"))().setURI(b("XGBMDestinationCmsidAsyncController").getURIBuilder().getURI()).setData({destination:a}).setHandler(function(a){a=a.getPayload();a.destinationcmsid!=null&&g.setDestinationCmsid(a.destinationcmsid);g.logImmediately()}).send():g.setDestinationCmsid(f).logImmediately()}}function B(a){var c=z(a),d=c.cmsidPath,e=c.clickCreativePath,f=c.destinationCmsid;c=babelHelpers.objectWithoutPropertiesLoose(c,["cmsidPath","clickCreativePath","destinationCmsid"]);w().setClickCreativePath(e).setClickFromContextMenu(!1).setDestinationCmsid(f).setCmsidPath(d).setDestination(b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a)).setEventType(b("UniversalMicroSiteLoggerEvent").SEARCH).updateExtraData(c).logImmediately()}function C(a,c){var d=z(a),e=d.cmsidPath,f=d.clickCreativePath,g=d.destinationCmsid;d=babelHelpers.objectWithoutPropertiesLoose(d,["cmsidPath","clickCreativePath","destinationCmsid"]);w().setClickCreativePath(f).setCmsidPath(e).setDestinationCmsid(g).setDestination(b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a)).setDropdownDuration(c).setEventType(b("UniversalMicroSiteLoggerEvent").DROPDOWN_CLOSE).updateExtraData(d).logVital()}function D(a){var c=z(a),d=c.cmsidPath,e=c.clickCreativePath,f=c.destinationCmsid;c=babelHelpers.objectWithoutPropertiesLoose(c,["cmsidPath","clickCreativePath","destinationCmsid"]);w().setClickCreativePath(e).setCmsidPath(d).setDestinationCmsid(f).setDestination(b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a)).setEventType(b("UniversalMicroSiteLoggerEvent").DROPDOWN_OPEN).updateExtraData(c).logVital()}function E(a){var c=z(a),d=c.cmsidPath,e=c.clickCreativePath,f=c.destinationCmsid;c=babelHelpers.objectWithoutPropertiesLoose(c,["cmsidPath","clickCreativePath","destinationCmsid"]);return b("XUniversalMicroLoggerShimController").getURIBuilder().setStringVector(b("UniversalMicroSiteLoggerField").CLICK_CREATIVE_PATH,e).setBool(b("UniversalMicroSiteLoggerField").CLICK_FROM_CONTEXT_MENU,!0).setIntVector(b("UniversalMicroSiteLoggerField").CMS_PATH,d).setString(b("UniversalMicroSiteLoggerField").COUNTRY,h).setString(b("UniversalMicroSiteLoggerField").DESTINATION,a.href).setEnum(b("UniversalMicroSiteLoggerField").EVENT_TYPE,b("UniversalMicroSiteLoggerEvent").CLICK).setString(b("UniversalMicroSiteLoggerField").LAST_NAV_IMPRESSION_ID,j).setInt(b("UniversalMicroSiteLoggerField").MAX_PERCENT_PAGE_VIEWED,b("UniversalMicroSiteViewportTracking").getMaxPercentVerticalViewportShown()).setInt(b("UniversalMicroSiteLoggerField").MAX_VIEWPORT_HEIGHT_PX,b("UniversalMicroSiteViewportTracking").getMaxViewportHeightPx()).setInt(b("UniversalMicroSiteLoggerField").MAX_VIEWPORT_WIDTH_PX,b("UniversalMicroSiteViewportTracking").getMaxViewportWidthPx()).setString(b("UniversalMicroSiteLoggerField").ORIG_HTTP_REFERRER,k).setString(b("UniversalMicroSiteLoggerField").ORIG_REQUEST_URI,l).setInt(b("UniversalMicroSiteLoggerField").PRIMARY_CMS_ID,m).setString(b("UniversalMicroSiteLoggerField").PRIMARY_CONTENT_LOCALE,n).setEnum(b("UniversalMicroSiteLoggerField").REGION,o).setBool(b("UniversalMicroSiteLoggerField").SCROLLED,b("UniversalMicroSiteViewportTracking").getHasScrolled()).setString(b("UniversalMicroSiteLoggerField").SEARCH_SESSION_ID,p).setString(b("UniversalMicroSiteLoggerField").SESSION_ID,q).setEnum(b("UniversalMicroSiteLoggerField").SITE,r).setStringToNullableStringMap(b("UniversalMicroSiteLoggerField").EXTRA_DATA,c).setString(b("UniversalMicroSiteLoggerField").DESTINATION_CMSID,f).getURI()}function F(a){w().setEventType(a.event).setVideoDuration(a.duration).setVideoID(a.videoID).setVideoTimePosition(a.currentTime).logVital()}function G(){v().setEventType(b("UniversalMicroSiteLoggerEvent").CLIENT_LOADED).logVital()}function H(){b("Banzai").subscribe(b("Banzai").SHUTDOWN,function(){v().setEventType(b("UniversalMicroSiteLoggerEvent").UNLOAD).logVital()})}function I(){b("ErrorUtils").addListener(function(a){var c=b("ErrorUtils").normalizeError(a);v().setEventType(b("UniversalMicroSiteLoggerEvent").CLIENT_ERROR).setIsError(!0).setFile(c.script).setLineNumber(c.line).setMessage(a.message).setStackTrace(c.stack).logVital()})}a={init:function(a,c,d,e,f,g,u,v,w,x,y,z,B){r=z,m=u,h=c,o=w,n=v,j=e,q=y,p=x,k=f?new(b("URI"))(f).getQualifiedURI().toString():null,l=g,i=b("immutable").Map(d),s=B,b("UniversalMicroSiteViewportTracking").init(),G(),t||(t=!0,new(b("UniversalMicroSiteClickTracker"))(A,a?E:null),b("UniversalMicroSiteVideoTracking").init(F),I(),H())},performAsyncClickLog:function(a){t||g(0,3658),A(a)},performAsyncSearchLog:function(a){t||g(0,3658),B(a)},performDropdownCloseLog:function(a,b){t&&C(a,b)},performDropdownOpenLog:function(a){t&&D(a)},subscribeDataManipulator:function(a){return x(a)}};e.exports=a}),null);
__d("FB4BDropdownLoggingController",["UniversalMicroSiteTrackingController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){function a(){this.$1=Date.now()}var c=a.prototype;c.logDropdownOpenEvent=function(a){this.$1=Date.now(),b("UniversalMicroSiteTrackingController").performDropdownOpenLog(a)};c.logDropdownCloseEvent=function(a){this.$1=(Date.now()-this.$1)/1e3,b("UniversalMicroSiteTrackingController").performDropdownCloseLog(a,this.$1),this.$1=Date.now()};return a}();e.exports=a}),null);
__d("WhatsAppFAQListViewScrollAnimation",["cx","Animation","CSS","Ease","URI","debounce"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_2r24",i="_2r26",j="_1__c",k=new(b("URI"))(document.URL),l={},m=b("Ease").makePowerInOut(3);a={resizeHiddenBody:function(a){a.style.marginTop=-1*a.clientHeight+"px"},hideBodyOnResize:function(a,b){var c=this,d=document.querySelector("."+i+"."+j+" ."+h);d!==a&&(a.style.marginTop="-9999px",l[b]!==null&&window.clearTimeout(l[b]),l[b]=window.setTimeout(function(){c.resizeHiddenBody(a)}))},connectRadio:function(a,c,d){__p&&__p();var e=this,f=document.body,g=a.parentElement,l=parseInt(c,10);if(f===null||g===null||g===void 0)return null;var n=g.querySelector("ul");c=g.querySelector("label");if(n===null||c===null)return null;n.style.transition="margin-top 0ms";this.resizeHiddenBody(n);window.addEventListener("resize",b("debounce")(function(){e.hideBodyOnResize(n,a.id)}));k.getQueryData().category===d&&this.openList(g,0);c.addEventListener("click",b("debounce")(function(a){__p&&__p();a=document.querySelector("."+i+"."+j+" ."+h);var c=document.querySelector("."+i+"."+j),d=!1,k=0;c!==null&&(k=c.getBoundingClientRect().top,d=k<0);var o=0;if(d){o=l;var p=f.scrollTop+k-100,q=window.setInterval(function(){f.scrollTop=Math.max(p,f.scrollTop)},l/5);window.setTimeout(function(){f.scrollTop=p,window.clearInterval(q)},l);new(b("Animation"))(f).duration(l*.9).ease(m).to("scrollTop",f.scrollTop+k-100).go()}a!==null&&new(b("Animation"))(a).duration(l).ease(m).to("margin-top",-1*a.clientHeight).go();c!==null&&b("CSS").removeClass(c,j);n!==a&&window.setTimeout(function(){e.openList(g,l)},o)}));return null},openList:function(a,c){b("CSS").addClass(a,j);a=a.querySelector("."+h);a!==null&&new(b("Animation"))(a).duration(c).ease(m).to("margin-top",0).go()},connectHeader:function(a){window.addEventListener("accordian_select",function(){b("CSS").addClass(a,"_7e95")})}};e.exports=a}),null);
__d("WhatsAppWebPage",["cx","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();a={toggleLanguagePicker:function(){var a=document.getElementById("lang-picker"),b=document.getElementById("lang-picker_bg");a!==null&&b!==null&&(a.style.display=a.style.display==="none"?"block":"none",b.style.display=a.style.display)},initLanguagePicker:function(){var a=document.getElementById("lang"),b=document.getElementById("lang-picker_bg");a!==null&&b!==null&&(a.onclick=this.toggleLanguagePicker,b.onclick=this.toggleLanguagePicker)},initSearchToggle:function(){var a=document.getElementById("icon-search");a!==null&&(a.onclick=function(){var a=document.getElementById("subheader");if(a){var c=b("CSS").matchesSelector(a,"_2ziw");window.scrollY>5?(window.scrollTo(0,0),c||b("CSS").addClass(a,"_2ziw")):b("CSS").toggleClass(a,"_2ziw")}})},initMobileMenu:function(){var a=document.getElementById("icon-drawer-open"),c=document.getElementById("icon-drawer-close"),d="_2ziw";a!==null&&c!==null&&(a.onclick=function(){var a=document.getElementById("menu-drawer");a!==null&&b("CSS").addClass(a,d)},c.onclick=function(){var a=document.getElementById("menu-drawer");a!==null&&b("CSS").removeClass(a,d)})},makeFixedHeaderTransluscent:function(a,c,d){d===void 0&&(d=!1),d&&(window.onscroll=function(){var d=document.getElementsByClassName(a);if(d.length>0){d=d[0];var e=Math.max(window.pageYOffset,document.documentElement?document.documentElement.scrollTop:0,document.body?document.body.scrollTop:0);e?b("CSS").addClass(d,c):b("CSS").removeClass(d,c)}})}};e.exports=a}),null);
__d("GoogleAnalyticsCookies",["BanzaiODS","DeferredCookie","WebStorage"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(){var a=b("WebStorage").getLocalStorageForRead();if(a==null){b("BanzaiODS").bumpEntityKey("cookies","google_analytics.localStorage.read.fail");return null}return a.getItem("ga_client_id")}function h(a){var c=b("WebStorage").getLocalStorage();if(c==null){b("BanzaiODS").bumpEntityKey("cookies","google_analytics.localStorage.write.fail");return}c.setItem("ga_client_id",a)}function i(a,c){var d=g();b("BanzaiODS").bumpEntityKey("cookies","google_analytics.localStorage.read");window.__ga("create",a,babelHelpers["extends"]({storage:"none",clientId:d},c));window.__ga(function(a){b("BanzaiODS").bumpEntityKey("cookies","google_analytics.localStorage.write"),h(a.get("clientId"))})}a={gaURI:"",writeGACookies:function(a,c,d,e,f,g){g===void 0&&(g=[]),this.gaURI=c,window.GoogleAnalyticsObject="__ga",window.__ga=window.__ga||function(){(window.__ga.q=window.__ga.q||[]).push(arguments)},window.__ga.l=1*new Date(),i(d,e),g.length>0&&(window.__ga("require","linker"),window.__ga("linker:autoLink",g)),f&&window.__ga("send","pageview"),a?b("DeferredCookie").registerCallbackOnCookieFlush(this.setupGA.bind(this)):this.setupGA()},setupGA:function(){var a=document.createElement("script"),b=document.getElementsByTagName("script")[0];a.async=!0;a.src=this.gaURI;b.parentNode&&b.parentNode.insertBefore(a,b)}};e.exports=a}),null);
__d("PostFormWithGetParams",["URI"],(function(a,b,c,d,e,f){"use strict";a={initGetParams:function(a,c){a.addEventListener("submit",function(){a.action=c.reduce(function(a,b){return a.addQueryData(b.name,b.value)},new(b("URI"))(a.action)).toString()})}};e.exports=a}),null);