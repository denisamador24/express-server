const express = require('express')
const courses = require('./data/courses.js')
const mathRouter = require('./routes/math.js')
const programmingRouter = require('./routes/programming.js')
const PORT = process.env.PORT || 3000

const app = express()

// Routers
app.use('/api/courses/math', mathRouter)
app.use('/api/courses/programming', programmingRouter)

// Routing
app.get('/', (req, res) => {
  res.send('Firt express project 💻')
})
app.get('/api/courses', (req, res) => {
  res.json(courses)
})

// Listen
app.listen(PORT, () => {
  console.log('Server is running in https://localhost:' + PORT);
})