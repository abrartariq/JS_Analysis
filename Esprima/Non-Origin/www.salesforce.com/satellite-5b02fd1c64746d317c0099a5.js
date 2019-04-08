_satellite.pushAsyncScript(function(event, target, $variables){
  $('body').on('click', '.accordionContainer .panel .panel-heading a', function(){

    var $this = $(this);

    //check for collapsed class (avoid duplicate tracking on closing accordion)
    if($this.hasClass('collapsed'))
    {
        var panelTitle = $this.children(".panel-title").text().trim();

        //try another method to get title, just in case
        if(panelTitle == '')
        {
            panelTitle = $this.text().trim();
        }
        
       
        if(panelTitle != '')
        {

            // console.log("Clicked - " + panelTitle);
            // add customlink to page data
            digitalData.util.addPageData("customlink", panelTitle)

            // add module tracking to page data
            digitalData.util.addPageData("moduletracking", digitalData.page.pagename + "|accordions|" +  panelTitle);

            // track the behavior using digital data's new trackBehavior function
            digitalData.util.trackBehavior("Custom Link Click", ["customlink"], ["page.pagename", "page.segment", "page.cloud", "page.moduletracking","user[0].profile[0].usertype","page.customlink"]);        }
    }
});
});
