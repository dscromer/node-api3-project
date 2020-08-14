const express = require('express')
const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")
const welcomeRouter = require("./welcome/welcome-router")

const server = express();
const port = process.env.PORT || 8080

server.use(express.json())

server.use(welcomeRouter)
server.use(userRouter)
server.use(postRouter)

//custom middleware

function logger(req, res, next) {
  const time = new Date().toISOString()
  console.log(`${time} ${req.method} ${req.url}`)
}

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

module.exports = server;