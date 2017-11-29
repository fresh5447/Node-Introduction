const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/user',(req, res) => {
  console.log(req.body.username, req.body.password)
  res.json({ user: req.body.username, password: req.body.password })
})

app.post('/products', (req, res) => {
  // req.body is all the info coming in from the form
  // we need to get name, color, and price.. out of req.body
  const name = req.body.name;
  const color = req.body.color;
  const price = req.body.price;
  const product = { name: name, color: color, price: price };

  res.json(product);

});


app.post('/customer', (req, res) => {
  const customer = {name: req.body.name, email: req.body.email, paid: req.body.paid};
  res.json(customer)
});


const server = app.listen(5000)