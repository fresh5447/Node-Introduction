var express = require('express')
var app = express()

app.get('/cheer', (req, res) => {
  res.send('Its a beautiful day!')
})


app.get('/jeer',(req, res) => {
  res.send('Its a beautiful day -U2')
})

var server = app.listen(4000, () => {
  console.log('Listening on port 4000')
})