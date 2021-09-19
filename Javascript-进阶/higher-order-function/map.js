Array.prototype.myMap = function (callback) {
  if (!callback || typeof callback !== "function") {
    throw new Error("callback must be function")
  }

  const _result = []
  for (let i = 0; i < this.length; i++) {
    _result.push(callback.call(this, this[i], i))
  }

  return _result
}
