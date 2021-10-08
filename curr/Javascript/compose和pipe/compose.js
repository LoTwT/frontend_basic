/**
 * 从右向左执行
 * 前一个函数的结果是后一个函数的参数
 * @param  {...any} funcs
 * @returns
 */
const compose = (...funcs) => {
  funcs = [...funcs]

  return (param) => {
    let _result = param
    for (let i = funcs.length - 1; i >= 0; i--) {
      _result = funcs[i](_result)
    }
    return _result
  }
}

const composeReduceRight = (...funcs) => {
  if (funcs.length === 0) return (param) => param

  return (param) =>
    [...funcs].reduceRight((res, callback) => callback(res), param)
}

module.exports = {
  compose,
  composeReduceRight,
}
