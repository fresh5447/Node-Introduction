// hello world basic server
const http = require('http')

http.createServer().listen(3000, () => {
  console.log("SERVER RUNNING")
})

