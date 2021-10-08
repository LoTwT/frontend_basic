require("./foreach")
require("./map")
require("./reduce")
require("./filter")

const arr = [1, 2, 3]

console.log("===== forEach =====")
arr.myForEach((value, index) => console.log(index, value))

console.log("===== map =====")
console.log(arr.myMap((value, index) => (value += 1)))

console.log("===== reduce =====")
console.log(arr.myReduce((pre, value) => (pre += value)))

console.log("===== filter =====")
console.log(arr.myFilter((value) => value % 2 === 0))
