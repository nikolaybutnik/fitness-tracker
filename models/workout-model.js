const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      unique: true,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: true,
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
)

// Create a virtual, a property that isn't stored in the database, that computes the totalDuration.
// totalDuration is used in workout.js to display the total time put into an exercise.
workoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0)
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
