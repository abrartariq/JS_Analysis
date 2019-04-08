_satellite.pushAsyncScript(function(event, target, $variables){
  $('div[data-href*=".pdf"]').on('click', function(){
  var $this = $(this);
  s.downloadUrl = $this.attr('data-href').toLowerCase();
  s.downloadUrl = s.server + ":" + s.eVar6 + ":file:" + s.downloadUrl;
  var prevpageval = Page.setPrevious() ? Page.setPrevious() : "[NO PREVIOUS PAGE AVAILABLE]"
  
  var oldpagename = digitalData.page.pagename;
  
  digitalData.util.trackPartialPageLoad(s.downloadUrl, {
  	events:["event11"], properties:{prop35: prevpageval}
  });
  
  //restore pagename for future link tracking, etc...
  digitalData.page.pagename = s.pageName = oldpagename;
});
});
