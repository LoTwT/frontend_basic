// 缓存
// 缓存是有大小限制的，需要跟对应同学协商能够使用多大空间
// 存储将被用到的数据，让数据访问更快
// 1. 命中：在缓存中找到了请求的数据
// 2. 不命中/穿透：缓存中没有需要的数据
// 3. 命中率：命中次数/总次数
// 4. 缓存大小：缓存中一共可以存多少数据
// 5. 清空策略：如果缓存空间不够，数据如何被替换
// ===
// 清空策略
// FIFO：Firit In First Out 先进先出
// LFU：Least Frequently used -> 优先级队列
// LRU：Least Recently used -> 优先级队列

import express from "express"

const app = express()
const port = 3000

const modifiedTime = new Date()

// etag 也是一种协商缓存
app.set("etag", false)
app.get("/x", (req, res) => {
  // 强制缓存
  // res.set("Cache-Control", "max-age=600")

  //协商缓存
  res.set("Last-Modified", modifiedTime)

  res.send("x3")
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
