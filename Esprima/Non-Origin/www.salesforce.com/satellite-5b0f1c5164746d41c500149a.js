_satellite.pushAsyncScript(function(event, target, $variables){
  $('body').on('click', 'a[data-qe^="TRACK_CUSTOMLINK_"],img[data-qe^="TRACK_CUSTOMLINK_"],div[data-qe^="TRACK_CUSTOMLINK_"]', function(){

    var $this = $(this);
    var linkID = $this.data("qe").replace("TRACK_CUSTOMLINK_","").trim();
    if(linkID != '')
    {
      //console.log("Clicked - " + linkID);
        
      // add customlink to page data
      digitalData.util.addPageData("customlink", linkID)

      // add module tracking to page data
      digitalData.util.addPageData("moduletracking", digitalData.page.pagename + "|customLink|" +  linkID);

      // track the behavior using digital data's new trackBehavior function
      digitalData.util.trackBehavior("Custom Link Click", ["customlink"], ["page.pagename", "page.segment", "page.cloud", "page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
    }

});
});
