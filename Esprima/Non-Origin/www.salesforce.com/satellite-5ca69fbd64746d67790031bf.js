_satellite.pushBlockingScript(function(event, target, $variables){
  window.OptanonWrapper = function() {
            //Check if user's cookies are enabled, if not remove One Trust from page
            var cookies = ("cookie" in document && (document.cookie.length > 0 || (document.cookie = "test").indexOf.call(document.cookie, "test") > -1));
            if (!cookies) {
                var box = document.getElementsByClassName('optanon-alert-box-wrapper')[0];
                box.remove();
                var bg = document.getElementById("optanon");
                bg.remove();
                return;
            }
            
            //Check if current page is Privacy page, if so do not display One Trust modal
            try{
                if(typeof digitalData !== "undefined" && digitalData.page.pagename !== "undefined") {
                    if(digitalData.page.pagename.indexOf(":company:privacy") > -1){
                        var el = document.getElementsByClassName("optanon-alert-box-wrapper");
                        var bg = [document.getElementById("optanon-popup-bg")];
                        function getCookie(name) {
                            var value = "; " + document.cookie;
                            var parts = value.split("; " + name + "=");
                            if (parts.length == 2) return parts.pop().split(";").shift();
                        }
                        function removeElement(elements) {
                            if (!getCookie('OptanonAlertBoxClosed')) {
                                if(elements.length > 0) {
                                    elements[0].style.display = "none";
                                }
                            }
                        }
                        removeElement(bg);
                        removeElement(el);
                    }

                }
                <!-- /* reinitialize active groups after user updates consent */ -->
                if (SfdcWwwBase.gdpr) {
                    SfdcWwwBase.gdpr.init();
                }
            }
            catch (error) {
                console.error(error.message);
            }       
        }
});
