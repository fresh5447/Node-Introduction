const express = require('express')
const app = express()

// API PATTERN
app.METHOD('__URL__', function(request, response) {
  // Extract Info Out Of Request
  // Define Server Response
})

// OR IN ES6

app.METHOD('__URL__', (request, response) => {
  // Extract Info Out Of Request
  // Define Server Response
})

// Random middle ware I may or may not introduce

const myLogger =  (req, res, next) => {
  console.log('REQUESTED PATH',req.route.path)
  console.log('REQUEST METHOD',req.route.methods)
  next()
}

// Express Server and GET examples


app.get('/hello', myLogger, (req, res) => {
  res.send('A SIMPLE MESSAGE')
})

app.get('/good-bye', myLogger, (req, res) => {
  const name = "doug"
  res.json({message: 'You Made It', name})
})

app.get('/what-time-is-it', myLogger, (req, res) => {
  const getTime = new Date()
  res.json({message: 'The Time Is', time: getTime})
})

// Cheer & Jeer Challenge / They implement first
app.get('/cheer', (req, res) => {
  res.send('Its a beautiful day!')
})


app.get('/jeer',(req, res) => {
  res.send('Its a beautiful day -U2')
})


// Additional Get Requests:

// Challenge: Define a salutations endpoint
app.get('/salutations', (req, res) => {
  res.send("Thank you Mr. Node 🤓")
});


const server = app.listen(4000,() => {
  console.log('Listening on port 4000')
})