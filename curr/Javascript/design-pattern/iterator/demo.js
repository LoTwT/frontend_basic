// 给项目数据添加迭代器
// 需求：对于后端数据经常需要遍历操作，可以封装一个迭代器使操作更方便
var data = [{ num: 1 }, { num: 2 }, { num: 3 }]

function IteratorFactory(data) {
  function Iterator(data) {
    this.data = data
  }

  Iterator.prototype.getHasSomeNum = function (handler, num) {
    var _arr = []
    var handlerFn

    if (typeof handler === "function") {
      handlerFn = handler
    } else {
      handlerFn = function (item) {
        if (item[handler] === num) {
          return item
        }
      }
    }

    for (var i = 0; i < this.data.length; i++) {
      var _result = handlerFn.call(this, this.data[i])
      if (_result) {
        _arr.push(_result)
      }
    }

    return _arr
  }

  return new Iterator(data)
}

console.log(IteratorFactory(data).getHasSomeNum("num", 1))
console.log(
  IteratorFactory(data).getHasSomeNum(function (item) {
    if (item.num - 1 === 2) {
      return item
    }
  }),
)
