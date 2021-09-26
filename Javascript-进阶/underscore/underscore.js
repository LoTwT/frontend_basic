;(function (root) {
  var _ = function (data) {
    if (!(this instanceof _)) {
      return new _(data)
    }
    this.wrapper = data
  }

  _.unique = function (source, callback) {
    var ref = []
    for (var i = 0; i < source.length; i++) {
      var target = callback ? callback(source[i]) : source[i]
      if (ref.indexOf(target) === -1) {
        ref.push(target)
      }
    }
    return ref
  }

  // 开启流式编程 (链式调用)
  _.chain = function (source) {
    var instance = _(source) // 特殊的实例对象
    instance._chain = true
    return instance
  }

  // 关闭流式编程
  _.prototype.end = function () {
    return this.wrapper
  }

  function model(instance, outcome) {
    if (instance._chain) {
      instance.wrapper = outcome
      return instance
    }

    return outcome
  }

  _.process = function (target) {
    var res = []
    for (var name in target) {
      res.push(name)
    }
    return res
  }

  /**
   *
   * @param {*} source 上一次调用的结果
   */
  _.template = function (source) {
    return source
  }

  var beforeHook = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      callback(arr[i])
    }
  }

  _.mixin = function (target) {
    beforeHook(_.process(target), function (key) {
      var func = target[key]
      _.prototype[key] = function () {
        var decon = [this.wrapper, ...arguments]
        Array.prototype.push.apply(decon, arguments)
        return model(this, func.apply(this, decon))
      }
    })
  }

  _.mixin(_)
  root._ = _
})(this)
