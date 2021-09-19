// 节流
// 某个操作希望上一次的完成后再进行下一次 或者 隔一定时间触发一次
// 1. 事件触发
// 2. 操作执行
// 3. 关闭阀门
// 4. 后续触发无效
// 5. 一定时间 或 满足条件后，阀门打开
// 6. 操作能够再次触发

const throttle = (fn, delay) => {
  let canOperate = true

  return function () {
    if (canOperate) {
      canOperate = false

      setTimeout(() => {
        fn.apply(this, arguments)
        canOperate = true
      }, delay)
    } else {
      return null
    }
  }
}
