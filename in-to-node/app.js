// IN REACT WOULD BE:
// import http from 'http'
const express = require('express')
const app = express()

// app.HTTP_METHOD('__URL__', (request, reponse) => {
//   // HANDLE CLIENT REQUEST
//   // SERVER SENDS RESPONSE
// })

// Test in Postman @ localhost:4000/hello-world
// Make sure it is a GET method

// GET EXAMPLES
app.get('/hello-world', (req, res) => {
  res.send('you found the hello world endpoint')
})

app.get('/goodbye', (req, res) => {
  console.log('request being made to /goodbye')
  res.send('Goodbye Point Found!')
})

app.get('/cheer', (req, res) => {
  res.send('happy day!')
})

app.get('/jeer', (req, res) => {
  res.send('sad day!')
})

const people = ['Jim', 'Jill']

app.get('/api/people', (req, res) => {
  // HANDLE ERROR SITUATION FIRST
  if(people.length < 1) {
    res.json({msg: 'NO PEOPLE'})
  } else {
    res.json({ msg: 'PEOPLE FOUND', data: people })
  }
})

// GET EXAMPLES WITH PARAMS
// function greeting(name) {

// }

app.get('/api/greeting/:name', (req, res) => {
  const name = req.params.name
  res.json({ data: `Hello ${name}` })
})

const colors = ['red', 'blue', 'yellow']

// Can accept a color as a param.
// 1) Respond with that color
// 2) If that that color is in our colors array,
// respond with a color found message
// else response with a different message

app.get('/api/colors/:color', (req, res) => {
  console.log(`selected color is ${req.params.color}`)
  if( !colors.includes(req.params.color) ) {
    res.json({ msg: `${req.params.color} not found` })
  } else {
    res.json({ data: req.params.color, colors: colors })
  }
})


app.listen(4000, () => {
  console.log('SERVER FIRED UP 🔥 🔥 🔥 🔥 ')
})


