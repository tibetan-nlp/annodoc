
/*
 *  thl-ttt-enable.js: A javascript script to include code for enabling
 *                     the Tibetan and Himalayan Library translation tool within an external page
 *
 *                     User can call THL Translations Tool by highlighting some Tibetan text and pressing Ctrl ?
 *
 *  Written by ndg8f, Feb. 26, 2013
 */

(function() {
  if (window.addEventListener) {
      // Standard
      window.addEventListener('load', jQueryCheck, false);
  }
  else if (window.attachEvent) {
      // Microsoft
      window.attachEvent('onload', jQueryCheck);
  }
  
  function jQueryCheck() {
    if (typeof jQuery === "undefined") {
      loadScript('http://www.thlib.org/global/js/jquery-latest.js', function() {
        loadScript('http://www.thlib.org/global/js/jquery-ui-themeless.min.js', function() {
            loadTTTEnableScripts();
        });
      });
    } else {
      loadTTTEnableScripts();
    }
  }
})();

function loadTTTEnableScripts() {
  loadScript('http://www.thlib.org/global/js/jquery.thl.popup.min.js', function() {
    loadScript('http://www.thlib.org/global/js/thl-tt-plugin.min.js', function() { 
      $('head').append('<link href="http://www.thlib.org/global/css/thl-tt-plugin.css" media="screen" rel="stylesheet" type="text/css" />');
      $('head').append('<link href="http://www.thlib.org/global/css/jquery.thl.popup.css" media="screen" rel="stylesheet" type="text/css" />');
    });
  });
}

function loadScript(src, callback) {
  var head = document.getElementsByTagName("head")[0];
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = function() {
      callback();
  };
  head.appendChild(script);
}