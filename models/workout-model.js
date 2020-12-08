const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    unique: true,
    default: new Date().setHours(0, 0, 0, 0),
  },
  exercises: [
    new Schema({
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
    }),
  ],
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
