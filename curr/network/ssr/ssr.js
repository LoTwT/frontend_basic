import express from "express"
import { goRender, renderAsMap } from "./share/index.js"
import path from "path"
import { fileURLToPath } from "url"

const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

const html = goRender(renderAsMap.html)

app.get("/page-ssr.js", (req, res) => {
  // res.sendFile(path.resolve(_dirname, "lib/page-srr.js"))
  res.sendFile(path.resolve(_dirname, "dist/ssr.bundle.js"))
})

app.get("/page.js", (req, res) => {
  // res.sendFile(path.resolve(_dirname, "lib/page.js"))
  res.sendFile(path.resolve(_dirname, "dist/ssr.bundle.js"))
})

app.get("/", (req, res) => {
  res.send(`
<html>
  <body>
    <div id="root"></div>
    <script src="/page.js" type="module"></script>
  </body>
</html>
  `)
})

app.get("/ssr", (req, res) => {
  res.send(`
<html>
  <body>
    <div id="root">${html}</div>
    <script src="/page-ssr.js" type="module"></script>
  </body>
</html>
  `)
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
