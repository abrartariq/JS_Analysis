window.optimizely.push({type:"load",data:{changes:[{"dependencies": [], "type": "custom_code", "id": "406DFCB2-265C-4021-9D7D-02E06844FAE5", "value": function($){// Mar 2019 INYT BAU - Project Ocean -- welcome
var utils = window.optimizely.get('utils');
var opt_console = window.NYToptly.opt_console;

var getCookie = function (c_name) {
  var cookval = '';
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      cookval = unescape(y);
    }
  }
  return cookval;
};

function getCurrentLocation() {
  var country;
  var testLocation = window.NYToptly.getQueryParameter('location') || getCookie('abTestLocation');
  
  if (testLocation && testLocation !== '') {
    country = testLocation;
  }
  else {
    country = window.optimizely.get('visitor').location.country;
    var eurozone = ['DE', 'AD', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'EE', 'FR', 'GR', 'VA', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'MC', 'PL', 'PT', 'RO', 'SM', 'SK', 'SI', 'ES', 'CH', 'DK', 'FI', 'SE', 'NO', 'NL'];
    // Asia = Singapore (SG), South Korea (KR), Hong Kong (HK), China (CN), Japan (JP)
    var asia = ['SG', 'KR', 'HK', 'CN', 'JP'];
    if (eurozone.indexOf(country) > -1) {
      country = 'EU';
    }
    else if (asia.indexOf(country) > -1) {
      country = 'ASIA';
    }
    else if (country !== 'CA' && country !== 'EU' && country !== 'GB' && country !== 'AU' && country !== 'IN') {
      country = 'ROW';
    }
  }
  return country;
}
var queryCountry = getCurrentLocation();

var currencyData = {
  ROW: {
    heading_1: "From China business conditions<br />to French novel recommendations.",
    heading_2: "Our journalists deliver the facts.",
    offer: 'International readers<br />subscribe for <span style="white-space: nowrap">$1 a week.</span>'
  },
  GB: {
    heading_1: "From European migration<br />to Brexit negotiation.",
    heading_2: "Follow the facts across continents.",
    offer: 'Readers in the U.K.<br />subscribe for just <span style="white-space: nowrap">£1 a week.</span>'
  },
  EU: {
    heading_1: "From European migration<br />to Brexit negotiation.",
    heading_2: "Follow the facts across continents.",
    offer: 'Readers in Europe<br />subscribe for just <span style="white-space: nowrap">€1 a week.</span>'
  },
  CA: {
    heading_1: "From China business conditions<br />to French novel recommendations.",
    heading_2: "Our journalists deliver the facts.",
    offer: 'Readers in Canada<br />subscribe for <span style="white-space: nowrap">$2 (Cdn) a week.</span>'
  },
  AU: {
    heading_1: "From China business conditions<br />to French novel recommendations.",
    heading_2: "Our journalists deliver the facts.",
    offer: 'Readers in Australia<br />subscribe for <span style="white-space: nowrap">A$2 a week.</span>'
  },
  ASIA: {
    heading_1: "From the T.P.P.<br />to the D.P.R.K.",
    heading_2: "We report the facts.<br />Without fear or favor.",
    offer: 'Readers in Asia<br />subscribe for <span style="white-space: nowrap">$1 a week.</span>'
  }
};

var changeOfferTextWelc = function (currency) {
  setInnerHTML(document.querySelector('.heading_1'), currencyData[currency].heading_1);
  setInnerHTML(document.querySelector('.heading_2'), currencyData[currency].heading_2);
  setInnerHTML(document.querySelector('.welc-offer'), currencyData[currency].offer);
};

var vi_welcome = function () {
  changeOfferTextWelc(queryCountry);
  
  // remove login if logged in
  if (window.NYToptly.jkidd.user.type === 'regi' && window.NYToptly.jkidd.user.isLoggedIn) {
    document.querySelector('.vi_welcome').classList.add("user-logged-in");
  }
};

window.NYToptly.vi_welcome_function = vi_welcome;

function setInnerHTML(el, theHtml) {
  el.innerHTML = theHtml;
}
}}, {"name": "Welcome Ad with ABRA Support", "config": {"welcome_content_css": "@charset \"UTF-8\";\n@font-face {\n  font-family: franklin-italic-600;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.ttf) format(\"truetype\");\n  font-style: italic;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: franklin-normal-600;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.ttf) format(\"truetype\");\n  font-style: normal;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: franklin;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.ttf) format(\"truetype\");\n  font-style: italic;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: franklin;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.ttf) format(\"truetype\");\n  font-style: normal;\n  font-weight: 600;\n}\n\n.font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n#vi_welcome_close {\n  position: absolute;\n  border-radius: 50%;\n  background-clip: padding-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0, 0, 0, 0.15);\n  -webkit-transition: background-color 0.2s ease-in;\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  line-height: normal;\n  vertical-align: middle;\n  z-index: 10;\n}\n\n#vi_welcome_close:hover {\n  background-color: #333;\n}\n\n#vi_welcome_close:before {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n#vi_welcome_close:after {\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n#vi_welcome_close:before,\n#vi_welcome_close:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  background-color: #fff;\n  top: 10px;\n  left: 6px;\n  width: 10px;\n  height: 2px;\n}\n\n.welcomeAdContent {\n  position: relative;\n  display: block;\n  max-width: 800px;\n  height: 425px;\n  max-height: 93vh;\n  margin: 0 auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 100px 20px 0 20px;\n  background-color: #B5B9D2;\n  font-weight: 500;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #333;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.25);\n}\n\n@media screen and (min-width: 768px) {\n  .welcomeAdContent {\n    height: 320px;\n    padding-top: 60px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .welcomeAdContent {\n    padding: 50px 38px 24px 38px;\n  }\n}\n\n.welcomead_logo_nyt {\n  position: absolute;\n  width: 153px;\n  height: auto;\n  bottom: 20px;\n  right: 20px;\n}\n\n@media screen and (min-width: 1024px) {\n  .welcomead_logo_nyt {\n    right: 38px;\n  }\n}\n\n.welcomeAdCopy {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 19px;\n}\n\n@media screen and (min-width: 375px) {\n  .welcomeAdCopy {\n    font-size: 20px;\n    line-height: 22px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .welcomeAdCopy {\n    font-size: 26px;\n    line-height: 28px;\n  }\n}\n\n.welcomeAdCopy .copy-body span {\n  display: block;\n  color: #000;\n}\n\n.welcomeAdCopy .copy-body .story {\n  color: #593DCE;\n  font-weight: 900;\n}\n\n.welcomeAdCopy .welc-offer {\n  display: block;\n  margin-top: 20px;\n  color: #fff;\n  font-weight: 700;\n}\n\n.welcomeAdCta {\n  display: block;\n  width: 116px;\n  height: 30px;\n  margin-top: 16px;\n  background: #593DCE;\n  border-radius: 3px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: bold;\n  line-height: 34px;\n  color: #fff;\n}\n\n@media screen and (min-width: 375px) {\n  .welcomeAdCta {\n    margin-top: 16px;\n  }\n}\n\n.welcomead_login {\n  position: absolute;\n  width: 100%;\n  top: 18px;\n  left: 20px;\n  color: #fff;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 10px;\n  font-weight: 300;\n}\n\n.welcomead_login a {\n  text-decoration: underline;\n  color: #fff;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n  .welcomead_login {\n    width: auto;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .welcomead_login {\n    top: 30px;\n    right: 38px;\n    left: unset;\n  }\n}\n\n.user-logged-in .welcomead_login {\n  display: none;\n}\n", "session_cap": "1", "creator": "AS", "custom_js": "", "session_cap_hours": 1, "welcome_campaign_name": "nons_usgm_october_sale_welcome_1018", "click2": "", "freq_cap_number": "3", "welcome_content_html": "<a class=\"welcomeAdContent\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.nytimes.com/subscription?campaignId=7WRJW\">\n  <img class=\"welcomead_logo_nyt\" src=\"https://mwcm.nyt.com/dam/mkt_assets/exo/img/nyt-logo-379x64-wht.svg\" alt=\"The New York Times\" />\n  <div class=\"welcomeAdCopy\">\n    <div class=\"copy-body\">\n      <span class=\"story heading_1\">From China business conditions<br>to French novel recommendations.</span>\n      <span class=\"headline heading_2\">Our journalists deliver the facts.</span>\n    </div>\n\n    <span class=\"welc-offer\">Subscribe to The Times <span style=\"white-space:nowrap;\">for $2 a week.</span></span>\n  </div>\n  <span class=\"welcomeAdCta\">SEE MY OPTIONS</span>\n</a>\n<div class=\"welcomead_login\">\n  Already a Subscriber? <a href=\"https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=optvi&redirect_uri=https%3A%2F%2Fwww.nytimes.com/\" target=\"_blank\">Log in</a>\n</div>", "abra_test": "", "click4": "", "click1": "", "message_type": "WelcomeAd", "click3": "", "freq_cap_days": 386}, "id": "44B28E08-AF0E-427E-8E89-CBDF2CE8053F", "dependencies": [], "type": "widget", "widget_id": "11390470128"}]}});