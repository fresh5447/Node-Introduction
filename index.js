var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var instagrams = [
  { text: "Hello there", time: new Date().getTime() - 12300 },
  { text: "Thanks, pal", time: new Date().getTime() - 1000 },
  { text: "That's offensive", time: new Date().getTime() },

]

app.use(express.static(__dirname + '/public'));

app.get('/instagrams', function(req, res) {
  res.json({ message: "Found Data", data: instagrams })
})

app.post('/instagrams', function(req, res) {
  var newGram = { text: req.body.post, time: new Date().getTime() };
  instagrams.push(newGram);
  res.json({message: "Post Success", data: instagrams});
})

var server = app.listen(3000);
