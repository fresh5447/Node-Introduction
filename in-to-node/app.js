// IN REACT WOULD BE:
// import http from 'http'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// app.HTTP_METHOD('__URL__', (request, reponse) => {
//   // HANDLE CLIENT REQUEST
//   // SERVER SENDS RESPONSE
// })

app.post('/api/simple', (req, res) => {
  // req.body is all the form info
  console.log('REQUEST BODY', req.body)
  res.json(req.body)
})

app.post('/api/animals', (req, res) => {
  // const color = req.body.color
  // const type = req.body.type
  // const age = req.body.age
  // const name = req.body.name

  const {color, type, age, name} = req.body
  // exact same as code above
  // const animal = { color: color, type: type, age: age, name: name }
  const animal = { color, type, age, name }

  // res.json({ msg: 'Animal Created', animal: animal })
  res.json({ msg: 'Animal Created', animal })


})

// API Endpoint to POST a shape
// A shape has a color, sides, and name
// IF the shape has more than 4 we get an error msg
// ELSE we get a success msg and the shape..
const allShapes = []

app.post('/api/shapes', (req, res) => {
  const {color, name, sides} = req.body
  const shape = {color, name, sides}

  if(shape.sides > 4) {
    res.json({msg: `CAN NOT HAVE ${shape.sides} sidesrs`})
  } else {
    allShapes.push(shape)
    res.json({msg: 'SHAPE ADDED TO DB', data: allShapes})
  }

})


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


