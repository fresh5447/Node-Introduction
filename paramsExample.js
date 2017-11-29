var express = require('express')
var app = express()

app.get('/team/:name', (req, res) => {
  res.send("You picked " + req.params.name)
})

var server = app.listen(5000)