import mongoose from 'mongoose'
const { Schema } = mongoose

const User = new Schema(
  {
    googleId: String
  },
  {
    timestamps: true
  }
)

export default mongoose.model('User', User)
