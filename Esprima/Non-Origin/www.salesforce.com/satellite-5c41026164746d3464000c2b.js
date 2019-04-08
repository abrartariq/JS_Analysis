_satellite.pushBlockingScript(function(event, target, $variables){
  Page.saveDriver = function() {
    vp.activityData['l_dtype'] = this.driver.type;
    // Driver is hardcoded since it is the default driver
    // See JSON below in driverLookup() below to see the driver for Typed/Bookmarked, which should match the one in this block
    if (Page.getDriver() && Page.getDriver()['id'] === "Typed/Bookmarked" && Page.getDriver()['type'] === "Typed/Bookmarked") {
        vp.activityData['d'] = '7010M000002Mw7O';
    } else {
        vp.activityData['d'] = Util.getParam('d') ? Util.getParam('d') : this.driverLookup.getDefault(this.driver.type, this.driver.id);
    }
    vp.saveActivityData();
}


Page.driverLookup.types = [
    { name:'SEM', qp:'d,dcmp', cb:'getSearchData' }
    ,{ name:'Email', qp:'d', cb:'getEmail', d:'70130000000sUfv' }
    ,{ name:'BAN', qp:'d,ban', cb:'getDisplay' }
    ,{ name:'SEO', cb:'getSearchData', d:'70130000000sUVb' }
    ,{ name:'Paid Social Media', qp:'d', cb:'getSocial' }
    ,{ name:'Social Media', d:'70130000000sUVl', pm:[
        { name:'youtube', ms:'youtube.com' }
        ,{ name:'vidyard', ms:'vidyard.com' }
        ,{ name:'twitter', ms:'twitter.com,.t.co,/t.co/', d:'70130000000szyK' }
        ,{ name:'linkedin', ms:'linkedin.com,lnkd.in', d:'70130000000szyP' }
        ,{ name:'facebook', ms:'facebook.com', d:'70130000000szyF' }
        ,{ name:'instagram', ms:'instagram.com', d:'701300000025Rrr' }
        ,{ name:'flickr', ms:'flickr.com,flickr.net' }
        ,{ name:'slideshare', ms:'slideshare.com,slideshare.net' }
        ,{ name:'googleplus', ms:'plus.google.com,plus.url.google.com', d:'70130000000szyU' }
        ,{ name:'vimeo' , ms:'vimeo.com' }
        ,{ name:'pinterest', ms:'pinterest.com,pintrest.com', d:'70130000000szyZ' }
        ,{ name:'foursquare' , ms:'foursquare.com' }
        ,{ name:'stumbleupon' , ms:'stumbleupon.com' }
        ,{ name:'yelp' , ms:'yelp.com' }
        ,{ name:'myspace', ms:'myspace.com' }
        ,{ name:'xing' , ms:'xing.com' }
        ,{ name:'mixi' , ms:'mixi.jp' }
        ,{ name:'viadeo' , ms:'viadeo.com' }
        ,{ name:'friendster' , ms:'friendster.com' }
        ,{ name:'badoo' , ms:'badoo.com' }
        ,{ name:'bebo' , ms:'bebo.com' }
        ,{ name:'hi5' , ms:'hi5.com' }
        ,{ name:'myyearbook' , ms:'myyearbook.com' }
        ,{ name:'nig' , ms:'nig.com' }
        ,{ name:'tumblr' , ms:'tumblr.com' }
        ,{ name:'xanga' , ms:'xanga.com' }
        ,{ name:'yammer' , ms:'yammer.com' }
        ,{ name:'medium' , ms:'medium.com' }
    ]}
    ,{ name:'SFDC Network', d:'70130000000sUW0', pm: [
        { name:'[AppExchange]', ms:'appexchange.salesforce.com,appexchangejp.salesforce.com,sites.secure.force.com/appexchange' }
        ,{ name:'[Community Site]', ms:'success.salesforce.com,sites.secure.force.com' }
        ,{ name:'[DeveloperForce]', ms:'developer.salesforce.com' }
        ,{ name:'[Help&Training]', ms:'help.salesforce.com' }
        ,{ name:'[Foundation]', ms:'foundation.force.com,salesforcefoundation.org' }
        ,{ name:'[VMForce]', ms:'vmforce.com' }
        ,{ name:'[YourServiceCloud.com]', ms:'yourservicecloud.com,yourservicecloud.force.com' }
        ,{ name:'[JoinTheConversations.com]', ms:'jointheconversations.com' }
        ,{ name:'[Chatter.com]', ms:'chatter.com' }
        ,{ name:'[Site.com]', ms:'site.com' }
        ,{ name:'[Work.com]', ms:'work.com' }
        ,{ name:'[Database.com]', ms:'database.force.com,database.com' }
        ,{ name:'[Data.com]', ms:'data.com' }
        ,{ name:'[Jigsaw.com]', ms:'jigsaw.com' }
        ,{ name:'[Force.com]', ms:'www.force.com' }
        ,{ name:'[Force.com Sites]', ms:'.force.com' }
        ,{ name:'[www.salesforce.com]', ms:'www.salesforce.com' }
        ,{ name:'[trust.salesforce.com]', ms:'trust.salesforce.com' }
        ,{ name:'[Salesforce Blogs]', ms:'blogs.salesforce.com, cloudblog.salesforce.com' }
        ,{ name:'[Salesforce.com App]', ms:'.salesforce.com' }
        ,{ name:'[Desk.com]', ms:'.desk.com' }
        ,{ name:'[Relateiq.com]', ms:'.salesforceiq.com' }
        ,{ name:'[Steelbrick.com]', ms:'.steelbrick.com, steelbrick.de' }
        ,{ name:'[Demandware]', ms:'.demandware.com' }
        ,{ name:'[Beyondcore]', ms:'.beyondcore.com,https://beyondcore.com' }
        ,{ name:'[Heywire]', ms:'.heywire.com' }
        ,{ name:'[Quip]', ms:'.quip.com,https://quip.com' }
        ,{ name:'[Gravity Tank]', ms:'.gravitytank.com' }
        ,{ name:'[MuleSoft]', ms:'mulesoft.com'}
        ,{ name:'[CloudCraze]', ms:'cloudcraze.com'}
    ]}
    ,{ name:'External Websites', cb:'getReferredDriver', d:'70130000000sUVv' }
    ,{ name:'Other', qp:'d', cb:'fixInternal' }
    ,{ name:'Typed/Bookmarked', d:'7010M000002Mw7O' }
]

});
