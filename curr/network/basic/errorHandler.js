import express from "express"
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.sendStatus(404)
})

app.listen(port, () => `server is running at http://localhost:${port}`)
