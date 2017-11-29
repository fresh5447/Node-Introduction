// hello world basic server

const http = require('http')

http.createServer((req, res) => {
  console.log('server running')
}).listen(3000)

