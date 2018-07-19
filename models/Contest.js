const mongoose = require('mongoose')
const { Schema } = mongoose

const ContestSchema = new Schema({
  name: String,
  description: String,
  startDate: Schema.Types.Date,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  players: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
})

mongoose.model('Contest', ContestSchema)
