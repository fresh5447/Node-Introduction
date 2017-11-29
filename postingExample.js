var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

app.post('/login',(req, res) => {
  console.log(req.body.username, req.body.password)
  res.json({ user: req.body.username, password: req.body.password })
})

var server = app.listen(5000)