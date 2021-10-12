import cluster from "cluster"
import os from "os"
import express from "express"

const numCPUs = os.cpus().length

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`)

  // Fork workers
  for (let i = 0; i < numCPUs - 1; i++) {
    cluster.fork()
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const app = express()
  app.listen(8080)
  console.log(`Worker ${process.pid} started`)
}
