// 防抖
// 被高频触发的操作实际触发一次即可。
// 1. 事件触发
// 2. 开启定时器
// 3. 再次触发，清除上一个定时器，开启一个新的定时器
// 4. 定时到，触发操作

const debounce = (fn, delay) => {
  let timer = null

  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, arguments), delay)
  }
}
