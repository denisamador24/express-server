const express = require('express')
const { math } = require('../data/courses.js')
const methodManager = require('../utils/methodManager.js')
const getMethodManager = require('../utils/getMethodManager.js')

const mathRouter = express.Router()
mathRouter.use(express.json())

// consult information
mathRouter.get('/', (req, res) => {
  res.send(math)
})
mathRouter.get('/:language', (req, res) => {
  getMethodManager(req, res, math)
})
mathRouter.get('/:language/:level', (req, res) => {
  getMethodManager(req, res, math)
})

// edit methods
mathRouter.post('/', (req, res) => {
  const newCourse = req.body
  math.push(newCourse)
  res.json(math)
})

const methodResolver = (req, res) => {
  methodManager(req, res, math)
} 

mathRouter.put('/:id', methodResolver)
mathRouter.patch('/:id', methodResolver)
mathRouter.delete('/:id', methodResolver)


module.exports = mathRouter

