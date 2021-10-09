// 并发处理和时间窗口
// 多个资源并发请求 -> Promise.all
// 基于时间窗口过滤重复请求
import fetch from "node-fetch"

function hash(...args) {
  return args.join(",")
}

function window_it(f, time = 50) {
  let w = {}
  let flag = false

  return (...args) =>
    new Promise((resolve) => {
      if (!w[hash(args)]) {
        w[hash(args)] = {
          func: f,
          args,
          resolvers: [],
        }
      }

      if (!flag) {
        flag = true
        setTimeout(() => {
          Object.keys(w).forEach((key) => {
            const { func, args, resolvers } = w[key]
            console.log("run once ====>")
            func(...args)
              .then((res) => res.text())
              .then((text) => {
                resolvers.forEach((r) => {
                  console.log("result anywhere ====>")
                  r(text)
                })
                flag = true
                w = {}
              })
          })
        }, time)
      }

      w[hash(args)].resolvers.push(resolve)
    })
}

const request = window_it(fetch, 20)

request("https://www.baidu.com")
request("https://www.baidu.com")
request("https://www.baidu.com")
request("https://www.baidu.com")
request("https://www.baidu.com")
