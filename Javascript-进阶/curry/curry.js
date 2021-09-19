// 柯里化的意义
// 典型柯里化函数 bind()
// 1. 不方便传入参数时 (回调)
// 2. 一个方法很多时候调用起来参数是固定的

// realize
Function.prototype.myBind = function (thisArg) {
  if (typeof this !== "function") return

  const _self = this
  const args = Array.prototype.slice.call(arguments, 1)

  return function () {
    return _self.apply(
      thisArg,
      args.concat(Array.prototype.slice.call(arguments)),
    )
  }
}

// eg.
const inputTest = (re, value) => {
  console.log(re.test(value))
}

const numberTest = inputTest.bind(this, /^[0-9]*$/)
const myNumberTest = inputTest.myBind(this, /^[0-9]*$/)

numberTest(123)
numberTest("abc")
numberTest(true)

myNumberTest(123)
myNumberTest("abc")
myNumberTest(true)
