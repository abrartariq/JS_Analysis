_satellite.pushAsyncScript(function(event, target, $variables){
  Page.getInternalDriverSelectorStr = function() {
    return 'a[href*="?d="], a[href*="&d="], div.thumbnail-linked[data-href*="?d="], div.thumbnail-linked[data-href*="&d="]';
}

Page.isInternalLink = function(eventObj, link) {
    var tempElement;
    var returnVal = false;
     // the element is an anchor. 
    if (eventObj.currentTarget.hostname) {
        if (eventObj.currentTarget.hostname.indexOf('.salesforce.com') > -1) {
            returnVal = true;
        }
    } else if (link) {
        if (link.indexOf('/') === 0) {
            returnVal = true;
        } else {
            tempElement = document.createElement('a');
            tempElement.href = link;
            if (tempElement.hostname.indexOf('.salesforce.com') > -1) {
                returnVal = true;
            }
        }
    }
    return returnVal;
}

digitalData.util.mappings.google.trackUserBehavior = function() {
  $('body').on('click', Page.getInternalDriverSelectorStr(), function(e) {
    var $this = $(this);
    var CTAtext = '';
    var driver;
    var link = $this.attr("href") ? $this.attr("href") : $this.attr("data-href");

    // only to pages on www.salesforce.com
    if (Page.isInternalLink(e, link)) {
        CTAtext = $this.attr("href") ? $this.text().trim() : $this.get(0).outerText;
        driver = Util.convert15To18(Util.getParam('d', link));
        dataLayer.push({
            event: 'custEv_callToActionClick',
            eventCat: 'Call to Action Click',
            eventAct: digitalData.page.pagename + '|' + driver,
            eventLbl: CTAtext,
            eventVal: 0,
            nonInteraction: 0,
            calltoActionText: CTAtext
        });
        // prevent double tracking for nested clickable elements
        e.stopPropagation();
    } 
  });
};


$(document).ready(function() {
    digitalData.util.mappings.google.trackUserBehavior();
});



});
