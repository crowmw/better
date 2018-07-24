import Contest from '../models/Contest'

export default {
  async findOne(req, res, next) {
    const contest = await Contest.findOne({ slug: req.params.slug })
    if (!contest) return next()
    return res.status(200).send({ data: contest })
  },

  async findAll(req, res) {
    const contests = await Contest.find().sort({ createdAt: 'desc' })
    if (!contests) return next()
    return res.status(200).send({ data: contests })
  },

  async create(req, res) {
    const contest = await new Contest({
      name: req.body.name,
      description: req.body.description,
      startDate: req.body.startDate,
      players: req.body.players,
      events: req.body.events,
      createdBy: req.user._id
    }).save()

    return res
      .status(201)
      .send({ data: contest, message: 'Contest was created.' })
  },

  async update(req, res, next) {
    const contest = await Contest.findOne({ slug: req.params.slug })
    if (!contest) return next()

    contest.name = req.body.name
    contest.description = req.body.description
    contest.startDate = req.body.startDate
    contest.players = req.body.players
    contest.events = req.body.events

    await contest.save()

    return res
      .status(200)
      .send({ data: contest, message: 'Contest was updated.' })
  },

  async delete(req, res, next) {
    const contest = await Contest.findOne({ slug: req.params.slug })
    if (!contest) return next()

    await contest.remove()
    return res
      .status(200)
      .send({ data: req.params.slug, message: 'Contest was deleted.' })
  }
}
