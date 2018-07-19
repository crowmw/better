const mongoose = require('mongoose')
const { Schema } = mongoose

const EventSchema = new Schema({
  date: Schema.Types.Date,
  team_1: String,
  team_2: String,
  result: [Number],
  winner: Number,
  contestId: { type: Schema.Types.ObjectId, ref: 'Contest' }
})

mongoose.model('Event', EventSchema)
