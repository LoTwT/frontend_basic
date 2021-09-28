// 利用 Promise 实现 3 秒量一次红灯，再过 2 秒量一次绿灯，再过 1 秒亮一次黄灯
// console.log 模拟亮灯

const trafficLight = {
  red: 3,
  green: 2,
  yellow: 1,
}

const triggerPromise = (action, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(action)
      resolve()
    }, delay * 1000)
  })

const orderTrafficLights = (config) => {
  let promise = Promise.resolve()
  for (const key in config) {
    promise = promise.then(() => triggerPromise(key, config[key]))
  }

  promise.then(() => orderTrafficLights(config))
}

orderTrafficLights(trafficLight)
