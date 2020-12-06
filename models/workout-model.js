const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      rep: Number,
      sets: Number,
    },
  ],
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout