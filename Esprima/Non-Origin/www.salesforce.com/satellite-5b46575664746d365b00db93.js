_satellite.pushAsyncScript(function(event, target, $variables){
  $('div[data-qe^="Hotspot_"]').on('click', function(){

    var $this = $(this);
    var linkID = $this.data("qe").replace("Hotspot_","").trim();
    if(linkID != '')
    {
      //console.log("Clicked - " + linkID);
        
      // add customlink to page data
      digitalData.util.addPageData("customlink", linkID)

      // add module tracking to page data
      digitalData.util.addPageData("moduletracking", digitalData.page.pagename + "|Hotspot|" +  linkID);

      // track the behavior using digital data's new trackBehavior function
      digitalData.util.trackBehavior("Custom Link Click", ["customlink"], ["page.pagename", "page.segment", "page.cloud", "page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
    }

});
});
