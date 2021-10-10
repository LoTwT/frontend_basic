import express from "express"
import fileUpload from "express-fileupload"

import path from "path"
import { fileURLToPath } from "url"
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

app.get("/submit", (req, res) => {
  res.sendFile(path.resolve(_dirname, "submit.html"))
})

app.post("/submit", fileUpload(), (req, res) => {
  req.files.file.mv(path.resolve(_dirname, "imgs/a.jpg"))
  res.status(201).send("ok")
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
