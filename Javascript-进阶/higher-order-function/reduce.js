// 累加求和、对象转化
Array.prototype.myReduce = function (callback, init) {
  if (!callback || typeof callback !== "function") {
    throw new Error("callback must be function")
  }

  let i = 0
  let pre = init

  if (init == undefined) {
    pre = this[0]
    i = 1
  }

  for (i; i < this.length; i++) {
    pre = callback.call(this, pre, this[i], i, this)
  }

  return pre
}
