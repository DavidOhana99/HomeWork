window.pcsTools = (function () {
    'use strict';
  
    function get(selector) {
      return document.querySelector(selector);
    }
  
    function setCss(element, property, value) {
      element.style[property] = value;
    }

    function hide(element) {
      setCss(element,'display','none')
    }

    function show(element) {
      setCss(element,'display','block')
    }
  
    function getCss(element, property) {
      return getComputedStyle(element)[property];
    }
  
    function on(element, event, callback) {
      element.addEventListener(event, callback);
    }

    function click(element, callback) {
      element.addEventListener('click', callback);
    }
  
    return {
      get,
      setCss,
      getCss,
      on,
      click,
      hide,
      show
    };
  }());
  