// 应对不稳定的网络环境-指数补偿
// 按照指数的时间倍数重复发送请求
// 超出时间后 fail
import fetch from "node-fetch"

function request(url) {
  let resolved = false
  let t = 1

  return new Promise((resolve) => {
    function doFetch() {
      if (resolved || t > 16) {
        return
      }

      fetch(url)
        .then((res) => {
          return res.text()
        })
        .then((res) => {
          if (!resolved) {
            console.log("t = ", t)
            resolve(res)
            resolved = true
          }
        })

      setTimeout(() => {
        doFetch()
        t *= 2
      }, t * 100)
    }

    doFetch()
  })
}

request("https://www.baidu.com").then((res) => {
  console.log(res.length)
})

// 用 Promise.race 实现
// 需优化，所有 fetch 都会发送
function request_race(url) {
  return Promise.race([
    fetch(url),
    wait(100, () => fetch(url)),
    wait(200, () => fetch(url)),
    wait(400, () => fetch(url)),
    wait(800, () => fetch(url)),
    wait(1600, () => fetch(url)),
  ])
}

function wait(ms, fn) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn())
    }, ms)
  })
}
