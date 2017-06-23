// index.js
var express = require('express');
var app = express();


// '/greeting' -> location of resource
// req -> request
// res -> response
app.get('/greeting', function(req, res){
  res.send("Woohoo you found the greeting endpoint!")
});

// :name -> means it is a req parameter
app.get('/greeting/:name', function(req, res){
  var yourName = req.params.name;
  res.send("nice to meet you " + yourName);
});

//Challenge: define a reponse that can send back your favorite color
app.get('/color/:color', function(req, res){
  var yourColor = req.params.color;
  res.send("Your color is:  " + yourName);
});



// Challenge: Define a salutations endpoint
app.get('/salutations', function(req, res){
  res.send("Thank you Mr. Node 🤓")
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
