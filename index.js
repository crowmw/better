import express from 'express'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import passport from 'passport'
import bodyParser from 'body-parser'

import keys from './config/keys'

import contest from './routes/contestRoutes'
import authorization from './routes/authRoutes'
import event from './routes/eventRoutes'

import { notFound, catchErrors } from './middlewares/errors'

import './services/passport'

mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

// routes config
app.use('/auth', authorization())
app.use('/api/contest', contest())
app.use('/api/event', event())

// errors handling
app.use(notFound)
app.use(catchErrors)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('listening on port', PORT)
