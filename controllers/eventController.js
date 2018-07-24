import Event from '../models/Event'

export default {
  async findOne(req, res, next) {
    const event = await Event.findOne({ slug: req.params.slug })
    if (!event) return next()

    return res.status(200).send({ data: event })
  },

  async findAll(req, res, next) {
    const events = await Event.find().sort({ createdAt: 'desc' })
    if (!events) return next()
    return res.status(200).send({ data: events })
  },

  async create(req, res) {
    const event = await new Event({
      date: req.body.date,
      team_1: req.body.team_1,
      team_2: req.body.team_2,
      result: req.body.result,
      winner: req.body.winner,
      contestId: req.body.contestId
    }).save()

    return res.status(201).send({ data: event, message: 'Event was created.' })
  },

  async update(req, res, next) {
    const event = Event.findOne({ slug: req.params.slug })
    if (!event) return next()
    ;(event.date = req.body.date),
      (event.team_1 = req.body.team_1),
      (event.team_2 = req.body.team_2),
      (event.result = req.body.result),
      (event.winner = req.body.winner),
      (event.contestId = req.body.contestId)

    await event.save()

    return res.status(200).send({ data: event, message: 'Event was updated.' })
  },
  async delete(req, res, next) {
    const event = Event.findOne({ slug: req.params.slug })
    if (!event) return next()

    await event.remove()
    return res
      .status(200)
      .send({ data: req.params.slug, message: 'Event was deleted.' })
  }
}
