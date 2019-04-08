_satellite.pushAsyncScript(function(event, target, $variables){
  $('.region-selector_content .genericLinkListComponent .generic-links a').on('click', function(){

    var $this = $(this);
    var position = $this.parents('header') ? 'Header' : 'Footer';

    var linkID = $this.find(".li-wrap").text().trim();

    if(linkID != '') {
        
      // add customlink to page data
      digitalData.util.addPageData("customlink", "RegionSelector|" + position + "|" + linkID)

      // add module tracking to page data
      digitalData.util.addPageData("moduletracking", digitalData.page.pagename + "|RegionSelector|" + position + "|" + linkID);

      // track the behavior using digital data's new trackBehavior function
      digitalData.util.trackBehavior("Custom Link Click", ["customlink"], ["page.pagename", "page.segment", "page.cloud", "page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
    }

});
});
