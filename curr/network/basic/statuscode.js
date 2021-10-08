import express from "express"
const app = express()
const port = 3000

app.get("/greetings", (req, res) => {
  res.send("Hi!")
})

app.post("/product", (req, res) => {
  // devTools 模拟post
  // fetch("/product", {
  //   method: "post",
  //   headers: { "content-type": "application/json" },
  //   body: JSON.stringify({ name: "lo" }),
  // })

  const contentType = req.headers["content-type"]
  let body = null

  // req 对象继承了 stream 的特性
  // 流过大时会多次触发，tcp 分包
  let responseText = ""
  req.on("data", (buffer) => {
    responseText += buffer.toString("utf-8")
  })

  req.on("end", () => {
    switch (contentType) {
      case "application/json":
        body = JSON.parse(responseText)
        res.set("content-type", "application/json")
        res.status(201).send(JSON.stringify({ success: true, data: body }))
        break
    }
  })
})

app.put("/product/:id", (req, res) => {
  console.log(req.params.id)
  res.sendStatus(204)
})

app.delete("/product/:id", (req, res) => {
  console.log(req.params.id)
  res.sendStatus(204)
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
