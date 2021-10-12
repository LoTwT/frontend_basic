import express from "express"

import path from "path"
import { fileURLToPath } from "url"
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

const htmlFile = path.resolve(_dirname, "pages/spa.html")
// /products
// /product/123
app.get(/\/product(s|\/\d+)/, (req, res) => {
  res.sendFile(htmlFile)
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
