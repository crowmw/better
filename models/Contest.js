import mongoose from 'mongoose'
import URLSlugs from 'mongoose-url-slugs'
import User from './User'
import Event from './Event'
const { Schema } = mongoose

const Contest = new Schema(
  {
    name: String,
    description: String,
    startDate: Schema.Types.Date,
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    players: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
  },
  {
    timestamps: true
  }
)

Contest.plugin(URLSlugs('name', { field: 'slug', update: true }))

export default mongoose.model('Contest', Contest)
