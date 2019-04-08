_satellite.pushAsyncScript(function(event, target, $variables){
  //console.log('new pixel mgr for AEM functional');

$(document).ready(function() {
/** BEGIN WEB ANALYTICS PIXELS **/
Page.PixelManager.trackWithTnTRedirect = function(counter){
	var mboxName = Page.getName() + ":redirect";
	
	//limit the number of attempts
	if (mboxFactoryDefault.getMboxes().get(mboxName).length() > 0) { //if we have a response from T&T servers
		if (typeof TnT !== 'undefined' && TnT.suppressTracking) {
			return; // the user is part of the redirect pool - don't track
		} else {
			s.t(); //although page is configured for a redirect test, this user not selected as part of redirect pool, so track the page
		}
	} else if (counter === 3) {
		s.t();
	} else {
        	counter += 1;
        	setTimeout(Page.PixelManager.trackWithTnTRedirect, 500, counter);    
        }
}

/* begin - GA */
GAPixel = function($) {
		var gaLibURL = '//c1.sfdcstatic.com/content/dam/www/ocms/common/assets/js/ga360.js', clientID;
		gaLibURL = (Url && Url.getFullUrl ? Url.getFullUrl(gaLibURL) : gaLibURL);
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ 
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), 
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
		})(window,document,'script',gaLibURL,'ga'); 
		
		ga('create', 'UA-48200310-3', 'auto'); 
		ga('require', 'displayfeatures'); 
		ga('set', 'dimension2', vp.getType());	
		
		if(Page.isDemo() && Page.isConfirmation()){
			ga('set', {
				'dimension3': Page.getCloud(),
				'dimension4': Page.getLocale(),
				'metric4': 1,
				'metric8': 1
			});
		}
		if(Page.getName() == "SFDC:us:form:conf:testdrive" || Page.getName().indexOf("SFDC:us:form:conf:salesforce-for-sales-guided-tour") > -1 || Page.getName().indexOf("SFDC:us:form:conf:service-guided-tour") > -1|| Page.getName().indexOf("SFDC:us:form:conf:industries:healthcloud-guidedtour") > -1|| Page.getName().indexOf("SFDC:us:form:conf:industries:finserv-guidedtour") > -1|| Page.getName().indexOf("SFDC:us:form:conf:community-cloud-guidedtour") > -1|| Page.getName().indexOf("SFDC:us:form:marketingcloud:conf:guided-tour") > -1|| Page.getName().indexOf("SFDC:us:form:conf:app-cloud:guided-tour") > -1 ){

			ga('set', {
				'dimension3': s.eVar19,
				'dimension4': s.eVar3,
				'metric5': 1,
				'metric8': 1
			});
		}
		if(Page.getName().indexOf("SFDC:us:form:conf:contactme") > -1){

			ga('set', {
				'dimension3': Page.getCloud(),
				'dimension4': Page.getLocale(),
				'metric7': 1,
				'metric8': 1
			});
		}	
		try {		
			ga(function(tracker) {
				
				ga('set', 'dimension1', tracker.get('clientId'));  
				ga('send', 'pageview');				
			});
		} catch (e) {
			//
		}							
};
if (Page.getLocale() !== "cn") {  
  GAPixel();
}
/** END - GA  **/

//AA tracking
var trackAA = function() {
	var dontTrack = Page.isAjax() || Page.isLogin() || (typeof Page.suppressTracking === 'function' && Page.suppressTracking());	
	if (dontTrack) {	
	    return;	
	}	
	digitalData.util.pageLoad();	
	Page.PixelManager.s_tComplete = true;		
}
trackAA();



});
});
