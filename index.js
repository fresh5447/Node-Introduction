// index.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// '/greeting' -> location of resource
// req -> request
// res -> response
app.get('/greeting', function(req, res){
  res.send("Woohoo you found the greeting endpoint!")
});

// :name -> means it is a req parameter
app.get('/greeting/:name', function(req, res){
  var yourName = req.params.name;
  res.send("Nice to meet you " + yourName);
});

//Challenge: define a reponse that can send back your favorite color
app.get('/color/:color', function(req, res){
  var yourColor = req.params.color;
  res.send("Your color is:  " + yourColor);
});

// Challenge: Define a salutations endpoint
app.get('/salutations', function(req, res){
  res.send("Thank you Mr. Node 🤓")
});


app.post('/products', function(req, res) {
  // req.body is all the info coming in from the form
  // we need to get name, color, and price.. out of req.body
  var name = req.body.name;
  var color = req.body.color;
  var price = req.body.price;

  var product = { name: name, color: color, price: price };

  res.json(product);

});


app.post('/customer', function(req, res){
  var customer = {name: req.body.name, email: req.body.email, paid: req.body.paid};
  res.json(customer)
});


app.listen(3000, function(){
  console.log('Listening on port 3000');
});
