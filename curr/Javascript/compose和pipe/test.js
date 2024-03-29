const { compose, composeReduceRight } = require("./compose.js")
const { pipe, pipeReduce } = require("./pipe")

const addOne = (num) => (num += 1)
const addTwo = (num) => (num += 2)
const multiplyTwo = (num) => (num *= 2)
const minusThree = (num) => (num -= 3)

console.log("===== test start =====")
console.log("===== compose =====")
console.log(compose(minusThree, multiplyTwo, addTwo, addOne)(1))
console.log(composeReduceRight(minusThree, multiplyTwo, addTwo, addOne)(1))
console.log("===== pipe =====")
console.log(pipe(addOne, addTwo, multiplyTwo, minusThree)(1))
console.log(pipeReduce(addOne, addTwo, multiplyTwo, minusThree)(1))
console.log("===== chain =====")
Promise.resolve(1)
  .then(addOne)
  .then(addTwo)
  .then(multiplyTwo)
  .then(minusThree)
  .then((res) => console.log(res))
