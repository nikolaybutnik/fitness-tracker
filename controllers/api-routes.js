const express = require('express')
const router = express.Router()

const Workout = require('../models/workout-model')

// A route that finds all the workouts in the database.
router.get('/api/workouts', async function (req, res) {
  const workouts = await Workout.find({})
  try {
    res.status(200).json(workouts)
  } catch (err) {
    res.status(500).json(err)
  }
})

// A route that creates a new workout in the database when the New Workout button is pressed.
// The exercises in the workout are added through the put route.
router.post('/api/workouts', async function (req, res) {
  try {
    const newWorkout = await new Workout()
    newWorkout.save()
    res.status(201).json(newWorkout)
  } catch (err) {
    res.status(500).json(err)
  }
})

// A route that is triggered when the Add Exercises button is pressed when creating a new workout.
// The workout created through the post route is updated with the field values from thr form.
router.put('/api/workouts/:id', async function (req, res) {
  const id = req.params.id
  const workoutToUpdate = await Workout.updateOne(
    { _id: id },
    { $set: { exercises: req.body } }
  )
  // console.log(workoutToUpdate)
  const updatedWorkout = await Workout.findOne({ _id: id })
  try {
    res.status(200).json(updatedWorkout)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/api/workouts/range', function (req, res) {
  res.json()
})

// Export the router.
module.exports = router
