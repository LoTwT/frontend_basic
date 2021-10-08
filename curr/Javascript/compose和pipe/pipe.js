/**
 * 从左向右执行
 * @param  {...any} funcs
 * @returns
 */
const pipe = (...funcs) => {
  funcs = [...funcs]

  return (param) => {
    let _result = param
    for (let i = 0; i < funcs.length; i++) {
      _result = funcs[i](_result)
    }

    return _result
  }
}

const pipeReduce = (...funcs) => {
  if (funcs.length === 0) return (param) => param

  return (param) => [...funcs].reduce((res, callback) => callback(res), param)
}

module.exports = {
  pipe,
  pipeReduce,
}
