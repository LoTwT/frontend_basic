import express from "express"

const app1 = express()
const port1 = 3000
app1.get("/", (req, res) => {
  res.send("hello1")
})

app1.listen(port1, () =>
  console.log(`server is running at http://localhost:${port1}`),
)

/** app1 devTools 测试代码 */
// fetch("http://localhost:3001/api")

// fetch("http://localhost:3001/api")
//   .then((res) => res.text())
//   .then((res) => console.log(res))

// fetch("http://localhost:3001/api", {
//   method: "POST",
//   heanders: { "content-type": "application/json" },
// })

// fetch("http://localhost:3001/api", { method: "PUT" })

// fetch("http://localhost:3001/api", {
//   method: "GET",
//   headers: { token: "123123" },
// })
/** app1 devTools 测试代码 */

const app2 = express()
const port2 = 3001

// 自定义 options 请求
app2.options("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", `http://localhost:${port1}`)
  res.set("Access-Control-Allow-Headers", "content-type,token")
  // 不限制 get post head
  res.set("Access-Control-Allow-Methods", "PUT")
  res.sendStatus(200)
})

app2.get("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", `http://localhost:${port1}`)
  res.send("go get")
})

app2.post("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", `http://localhost:${port1}`)
  res.send("go post")
})

// get post 是简单请求，而 put 不是
app2.put("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", `http://localhost:${port1}`)
  res.send("go put")
})

app2.listen(port2, () =>
  console.log(`server is running at http://localhost:${port2}`),
)
