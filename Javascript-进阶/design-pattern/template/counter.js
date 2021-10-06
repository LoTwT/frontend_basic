function Counter() {
  this.beforeCounter = []
  this.afterCounter = []
}

Counter.prototype.addBefore = function (fn) {
  this.beforeCounter.push(fn)
}

Counter.prototype.addAfter = function (fn) {
  this.afterCounter.push(fn)
}

Counter.prototype.count = function () {
  var _resultNum = num
  var _arr = [baseCount]
  _arr = this.beforeCounter.concat(_arr)
  _arr = _arr.concat(this.afterCounter)

  function baseCount(num) {
    num += 4
    num *= 4
    return num
  }

  while (_arr.length > 0) {
    _resultNum = _arr.shift()(_resultNum)
  }

  return _resultNum
}

var countObj = new Counter()
countObj.addBefore(function (num) {
  num--
  return num
})
countObj.addAfter(function (num) {
  num *= 2
  return num
})
countObj.count(10)
