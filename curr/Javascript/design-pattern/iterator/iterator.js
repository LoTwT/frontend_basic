// 在不暴露对象内部结构的同时，可以顺序的访问对象内部数据
// 帮助简化循环，简化数据操作
function Iterator(item) {
  this.item = item
}

Iterator.prototype.dealEach = function (fn) {
  for (var i = 0; i < this.item.length; i++) {
    fn(this.item[i], i)
  }
}
