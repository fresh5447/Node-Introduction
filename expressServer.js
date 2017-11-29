const express = require('express')
const app = express()

// Random middle ware I may or may not introduce

const myLogger = function (req, res, next) {
  console.log('REQUESTED PATH',req.route.path)
  console.log('REQUEST METHOD',req.route.methods)
  next()
}


app.get('/hello', myLogger, (req, res) => {
  res.send('Hello world')
})

app.get('/goodBye', myLogger, (req, res) => {
  res.send('Hello world')
})

const server = app.listen(4000,() => {
  console.log('Listening on port 4000')
})