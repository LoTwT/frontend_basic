Array.prototype.myFilter = function (callback) {
  const _result = []

  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i)) {
      if (typeof this[i] === "object") {
        _result.push(Object.create(this[i]))
      } else {
        _result.push(this[i])
      }
    }
  }

  return _result
}
