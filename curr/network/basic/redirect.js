import express from "express"
const app = express()
const port = 3000

app.get("/301", (req, res) => {
  res.redirect(301, "/def")
})

app.get("/302", (req, res) => {
  res.redirect(302, "/def")
})

app.get("/303", (req, res) => {
  res.redirect(303, "/def")
})

app.post("/307", (req, res) => {
  res.redirect(307, "/def")
})

app.get("/def", (req, res) => {
  res.send("This is def(get).")
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
