;(function () {
  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context)
  }

  jQuery.fn = jQuery.prototype = {
    init: function () {},
  }

  jQuery.fn.init.prototype = jQuery.fn
  jQuery.extend = jQuery.fn.extend = function () {}
  window.$ = window.jQuery = jQuery
})()
