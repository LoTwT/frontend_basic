import express from "express"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

const pageDir = path.resolve(_dirname, "pages")
const htmls = fs.readdirSync(pageDir)

function displayHtmlFile(name) {
  return (req, res) => {
    const filePath = path.resolve(pageDir, name + ".html")
    res.sendFile(filePath)
  }
}

htmls.forEach((file) => {
  const [name, ext] = file.split(".")
  app.get("/" + name, displayHtmlFile(name))
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
