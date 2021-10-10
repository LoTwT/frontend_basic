import express from "express"

import path from "path"
import { fileURLToPath } from "url"
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.sendFile(path.resolve(_dirname, "handshake.html"))
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)

/** HTTP => WebSocket 协议转换 */
/** websocket 握手 */
import net from "net"
import parseHeader from "parse-headers"
import crypto from "crypto"

const server = net.createServer()
server.on("connection", (socket) => {
  socket.on("data", (buffer) => {
    const str = buffer.toString()
    const headers = parseHeader(str)

    // 验签
    const sha1 = crypto.createHash("sha1")
    sha1.update(
      headers["sec-websocket-key"] + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    )
    const acceptKey = sha1.digest("base64")

    let response = `HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-Websocket-Accept: ${acceptKey}


    `

    socket.write(response)
  })
})

server.listen(8080)
