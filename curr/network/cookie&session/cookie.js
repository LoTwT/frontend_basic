import express from "express"

const app1 = express()
const app2 = express()
app1.set("etag", false)
app2.set("etag", false)

app1.get("/", (req, res) => {
  res.setHeader("Set-Cookie", "abc=123")
  res.send("ok")
})

app1.get("/api", (req, res) => {
  res.send("ok")
})

app2.get("/", (req, res) => {
  console.log(req.headers.cookie)
  res.setHeader("Set-Cookie", "abc=123")
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.send("ok")
})

app1.listen(3000)
app2.listen(3001)
