const mongoose = require('mongoose')
const Event = mongoose.model('Event')
const Contest = mongoose.model('Contest')

const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.post('/api/event', requireLogin, async (req, res, next) => {
    const { date, team_1, team_2, result, winner, contestId } = req.body

    const event = new Event({
      date,
      team_1,
      team_2,
      result,
      winner,
      contestId
    })

    await event.save(async (err, res) => {
      if (err) return next(err)

      const contest = await Contest.findOne({
        createdBy: req.user._id,
        _id: contestId
      })
      contest.events.push(res._id)
      contest.save()
    })

    res.send(event)
  })
}
