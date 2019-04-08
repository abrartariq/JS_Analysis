(function() {
  function injectSVG(svgURL, callback) {
    function handleError(string) {
      var error = new Error(string);

      console.error(error.toString());

      if (typeof callback === 'function') {
        callback(error);
      }
    }

    var error;
    // 200 for web servers, 0 for CEP panels
    if (this.status !== 200 && this.status !== 0) {
      handleError('AS.loadIcons: Failed to fetch icons, server returned ' + this.status);
      return;
    }

    // Parse the SVG
    var parser = new DOMParser();
    try {
      var doc = parser.parseFromString(this.responseText, 'image/svg+xml');
      var svg = doc.firstChild;
    }
    catch (err) {
      handleError('AS.loadIcons: Error parsing icon SVG sprite: ' + err);
      return;
    }

    // Make sure a real SVG was returned
    if (svg && svg.tagName === 'svg') {
      // Hide the element
      svg.style.display = 'none';

      svg.setAttribute('data-url', svgURL);

      // Insert it into the head
      document.head.insertBefore(svg, null);

      // Pass the SVG to the callback
      if (typeof callback === 'function') {
        callback(null, svg);
      }
    }
    else {
      handleError('AS.loadIcons: Parse SVG document contained something other than a SVG');
    }
  }

  function loadIcons(svgURL, callback) {
    // Request the SVG sprite
    var req = new XMLHttpRequest();
    req.open('GET', svgURL, true);
    req.addEventListener('load', injectSVG.bind(req, svgURL, callback));
    req.addEventListener('error', function(event) {
      console.log('AS.loadIcons: Request failed');
    });
    req.send();
  }

  window.$AS = window.AdobeSpectrum = window.AdobeSpectrum || {};
  AdobeSpectrum.loadIcons = loadIcons;
}());

!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=551)}({100:function(t,e,n){"use strict";e.a=function(){try{return window.parent.location.href.indexOf("/editor.html/")>=0}catch(t){return!1}}},551:function(t,e,n){n(552),t.exports=n(553)},552:function(t,e,n){"use strict";var r=n(65);(document.querySelectorAll(".dexter-Cta .spectrum-Icon").length>0||(0,r.isAuthor)())&&(window.AdobeSpectrum.loadIcons("/etc.fps.titan.dexterlibs/dexter/clientlibs/base/theme/dist/icons/spectrum-css-icons.svg"),window.AdobeSpectrum.loadIcons("/etc.fps.titan.dexterlibs/dexter/clientlibs/base/theme/dist/icons/spectrum-icons.svg"))},553:function(t,e){},65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(98),o=n(99),i=n(100);n.d(e,"isAuthor",function(){return r.a}),n.d(e,"isWcmmodeDisabled",function(){return o.a}),n.d(e,"isEditor",function(){return i.a})},98:function(t,e,n){"use strict";e.a=function(){return void 0!==window.Granite}},99:function(t,e,n){"use strict";e.a=function(){return window.location.href.indexOf("wcmmode=disabled")>=0}}});
