const express = require('express')
const router = express.Router()

const Workout = require('../models/workout-model')

router.get('/', function (req, res) {
  res.sendFile('index.html')
})

router.get('/api/workouts', function (req, res) {
  res.json()
})

router.get('/api/workouts/range', function (req, res) {
  res.json()
})

// Export the router.
module.exports = router
