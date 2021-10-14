import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const _dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000

app.use(express.static(path.resolve(_dirname, "lib")))

const html = `
<html>
  <body>
    <script src="/require.js"></script>
    <script>
      require.path = "/"
      require(["add", "mult"], (add, mult) => {
        console.log(add(3, 5))
        console.log(mult(3, 5))
      })
    </script>
  </body>
</html>
`
app.get("/", (req, res) => {
  res.send(html)
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
