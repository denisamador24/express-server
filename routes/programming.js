const express = require('express')
const { programming } = require('../data/courses.js')
const methodManager = require('../utils/methodManager.js')
const getMethodManager = require('../utils/getMethodManager.js')

const programmingRouter = express.Router()
// Middleware
// se ejecuta despues de recivir solicitud y antes de enviar
programmingRouter.use(express.json())

// consult information
programmingRouter.get('/', (req, res) => {
  res.send(programming)
})
programmingRouter.get('/:language', (req, res) => {
  getMethodManager(req, res, programming)
})
programmingRouter.get('/:language/:level', (req, res) => {
  getMethodManager(req, res, programming)
})

// edit methods
programmingRouter.post('/', (req, res) => {
  const newCourse = req.body
  programming.push(newCourse)
  res.json(programming)
})

const methodResolver = (req, res) => {
  methodManager(req, res, programming)
} 

programmingRouter.put('/:id', methodResolver)
programmingRouter.patch('/:id', methodResolver)
programmingRouter.delete('/:id', methodResolver)


module.exports = programmingRouter