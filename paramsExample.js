var express = require('express')
var app = express()


app.get('/team/:name', (req, res) => {
  res.send('You picked ' + req.params.name)
})

app.get('/greeting/:name', (req, res) => {
  var yourName = req.params.name
  res.send('Nice to meet you ' + yourName)
})

//Challenge: define a reponse that can send back your favorite color
app.get('/color/:color', (req, res) => {
  var yourColor = req.params.color
  res.send('Your color is:  ' + yourColor)
})

// It would be fun to do a challange where they have to take a parameter,
// define wether or not it is a palindrome

var server = app.listen(5000)