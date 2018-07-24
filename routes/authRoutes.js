import { Router } from 'express'
import passport from 'passport'
import authController from '../controllers/authController'
import { catchAsync } from '../middlewares/errors'

export default () => {
  const api = Router()

  // GET /auth/google
  api.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  // GET /auth/google/callback
  api.get(
    '/google/callback',
    passport.authenticate('google'),
    catchAsync(authController.googleCallback)
  )

  // GET /auth/logout
  api.get('/logout', catchAsync(authController.logout))

  // GET /auth/current_user
  api.get('/current_user', catchAsync(authController.currentUser))

  return api
}
