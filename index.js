// index.js
var express = require('express');
var app = express();


// '/greeting' -> location of resource
// req -> request
// res -> response
app.get('/greeting', function(req, res){
  res.send("Woohoo you found the greeting endpoint!")
});

// Challenge: Define a salutations endpoint
app.get('/salutations', function(req, res){
  res.send("Thank you Mr. Node 🤓")
});


app.listen(3000, function(){
  console.log('Listening on port 3000');
});
