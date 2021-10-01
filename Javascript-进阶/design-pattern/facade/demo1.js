function Tab() {
  this.dom = null
}

Tab.prototype.initHTML = function () {}
Tab.prototype.changeTab = function () {}
Tab.prototype.eventBind = function () {}

Tab.prototype.init = function (config) {
  this.initHTML(config)
  this.eventBind()
}
