import express from "express"

import path from "path"
import { fileURLToPath } from "url"
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

app.use(express.static("staic"))
app.get("/", (req, res) => {
  res.sendFile(path.resolve(_dirname, "chatroom.html"))
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)

/** chatroom */
import { Server } from "socket.io"

const users = new Map()

function broadcast(type, message, sender) {
  for (const socket of users.keys()) {
    socket.send({ type, message, sender })
  }
}

const io = new Server(8080)
io.on("connect", (socket) => {
  // { type, message }
  // 学习资料 => linux epoll
  socket.on("message", (data) => {
    switch (data.type) {
      case "LOGIN":
        users.set(socket, { name: data.name })
        broadcast("LOGIN", `${data.name}加入了聊天`)
        break
      case "CHAT":
        const user = users.get(socket)
        broadcast("CHAT", data.message, user.name)
        break
    }
  })
})
