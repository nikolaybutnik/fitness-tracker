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
// The workout is created for the current day, and a new one will not be created if one already exists.
// The exercises in the workout are added through the put route.
router.post('/api/workouts', async function (req, res) {
  try {
    const newWorkout = await new Workout()
    const existingWorkout = await Workout.findOne({ day: newWorkout.day })
    console.log(newWorkout)
    console.log(existingWorkout)
    // Check database to see if workout already exists for current day. If not, create the new workout.
    if (!existingWorkout) {
      newWorkout.save()
      res.status(201).json(newWorkout)
    } else {
      res.status(200).json(existingWorkout)
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// A route that is triggered when the Add Exercises button is pressed when creating a new workout.
// The workout created through the post route is updated with the field values from the form.
// If a workout already exists for the current day, the previous workout is overwritten.
router.put('/api/workouts/:id', async function (req, res) {
  const id = req.params.id
  const workoutToUpdate = await Workout.updateOne(
    { _id: id },
    { $set: { exercises: req.body } }
  )
  const updatedWorkout = await Workout.findOne({ _id: id })
  try {
    res.status(200).json(updatedWorkout)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/api/workouts/range', async function (req, res) {
  const workouts = await Workout.find({}).sort({ day: -1 }).limit(7)
  const workoutsReversed = await workouts.reverse()
  // console.log(workouts)
  // console.log(workoutsReversed)
  try {
    res.status(200).json(workoutsReversed)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Export the router.
module.exports = router
