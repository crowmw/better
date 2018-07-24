import { Router } from 'express'
import { catchAsync } from '../middlewares/errors'
import contestController from '../controllers/contestController'
import requireLogin from '../middlewares/requireLogin'

export default () => {
  const api = Router()

  // GET /contest/:slug
  api.get('/:slug', requireLogin, catchAsync(contestController.findOne))

  // GET /contest
  api.get('/', requireLogin, catchAsync(contestController.findAll))

  // POST /contest
  api.post('/', requireLogin, catchAsync(contestController.create))

  // PUT /contest/:slug
  api.put('/', requireLogin, catchAsync(contestController.update))

  // DELETE /contest/:slug
  api.delete('/:id', requireLogin, catchAsync(contestController.delete))

  return api
}
