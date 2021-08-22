const express = require('express')
const session = require('express-session')
const hbs = require('express-handlebars')
const passport = require('./passport')
const BotClient = require('./bot')
const cors = require('cors')
const db = require('./database')
const { token} = require('../config/config')
const path = require('path')
const app = express()

app
  .set('port', process.env.PORT || 3000)
  .use(express.static('public'))
  .use(express.json())
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(
    session({
      secret: 'dashboardfeliz',
      resave: false,
      saveUninitialized: false
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .set('views', path.join(__dirname, '../views'))
  .set('view engine', '.hbs')
  .engine('.hbs', hbs({ extname: '.hbs' }))
  .use((req, res, next) => {
    req.db = db
    req.bot = BotClient
    next()
  })
  .use('/', require('../routes/routes'))

module.exports = app
