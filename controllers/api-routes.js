const express = require('express')
const router = express.Router()

const Workout = require('../models/workout-model')

router.get('/api/workouts', async function (req, res) {
  const workouts = await Workout.find({})
  console.log(workouts)
  try {
    res.status(200).json(workouts)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/api/workouts/range', function (req, res) {
  res.json()
})

// Export the router.
module.exports = router
