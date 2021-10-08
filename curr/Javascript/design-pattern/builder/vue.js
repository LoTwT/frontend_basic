function Vue() {
  if (!(this instanceof Vue)) {
    console.warn("please use new operator")
  }

  this._init(options)
}

Vue.prototype._init = function () {
  initMixin(Vue)
  stateMixin(Vue)
  eventsMixin(Vue)
  lifecycleMixin(Vue)
  renderMixin(Vue)
}
