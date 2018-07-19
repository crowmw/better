const mongoose = require('mongoose')
const Contest = mongoose.model('Contest')

const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.get('/api/contest', requireLogin, async (req, res) => {
    const contest = await Contest.find({ createdBy: req.user._id })

    res.send(contest)
  })

  app.post('/api/contest', requireLogin, async (req, res) => {
    const { name, description, startDate, players, events } = req.body

    const contest = new Contest({
      name,
      description,
      startDate,
      players,
      events,
      createdBy: req.user._id
    })

    await contest.save()
    res.send(contest)
  })

  app.get('/api/contest/:id/events', requireLogin, async (req, res) => {
    const contests = await Contest.find({
      createdBy: req.user._id,
      _id: req.params.id
    }).populate('events')
    console.log(contests)
    if (contests) {
      res.send(contests.events)
    }
  })
}
