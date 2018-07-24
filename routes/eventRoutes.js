import { Router } from 'express'
import eventController from '../controllers/eventController'

import requireLogin from '../middlewares/requireLogin'
import { catchAsync } from '../middlewares/errors'

export default () => {
  const api = Router()

  // GET /api/event/:slug
  api.get('/:slug', requireLogin, catchAsync(eventController.findOne))

  // GET /api/event
  api.get('/', requireLogin, catchAsync(eventController.findAll))

  // POST /api/event
  api.post('/', requireLogin, catchAsync(eventController.create))

  // PUT /api/event/:slug
  api.put('/:slug', requireLogin, catchAsync(eventController.update))

  // DELETE /api/event/:slug
  api.delete('/:slug', requireLogin, catchAsync(eventController.delete))

  return api
}
