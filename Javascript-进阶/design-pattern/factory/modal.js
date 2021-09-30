;(function () {
  // function infoPop() {}
  // function confirmPop() {}
  // function cancelPop() {}

  // function popFactory(type, content, color) {
  //   switch (type) {
  //     case "infoPop":
  //       return new infoPop(content, color)
  //     case "confirm":
  //       return new confirmPop(content, color)
  //     case "cancel":
  //       return new cancelPop(content, color)
  //     default:
  //       return undefined
  //   }
  // }

  function popFactory(type, content, color) {
    // 表明使用了 new 操作符
    if (this instanceof popFactory) {
      var s = new this[type](content, color)
    } else {
      return new popFactory(type, content, color)
    }
  }

  popFactory.prototype.infoPop = function (content, color) {}
  popFactory.prototype.confirmPop = function (content, color) {}
  popFactory.prototype.cancelPop = function (content, color) {}

  window.popFactory = popFactory
})()

popFactory("infoPop", "info", "lightblue")
