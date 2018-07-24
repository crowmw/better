import mongoose from 'mongoose'
import URLSlugs from 'mongoose-url-slugs'
const { Schema } = mongoose

const EventSchema = new Schema(
  {
    date: { type: Schema.Types.Date, default: new Date() },
    team_1: { type: String, default: 'team1', trim: true },
    team_2: { type: String, default: 'team2', trim: true },
    result: [Number],
    winner: Number,
    contestId: { type: Schema.Types.ObjectId, ref: 'Contest' }
  },
  {
    timestamps: true
  }
)

EventSchema.plugin(URLSlugs('team_1 team_2', { field: 'slug', update: true }))

export default mongoose.model('Event', EventSchema)
