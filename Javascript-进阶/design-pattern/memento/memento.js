// 记录对象内部的状态
// 当有需要时，回滚到之前的状态，或者方便调用
function Memento() {
  var cache = {}

  return function (cacheName) {
    if (cache[cacheName]) {
      // 执行有缓存的操作
    } else {
      // 执行没有缓存的操作
    }
  }
}

var MementoFn = Memento()
MementoFn("action")
