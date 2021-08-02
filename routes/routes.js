const { Router } = require('express')
const passport = require('../server/passport')
const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/login', passport.authenticate('discord'), (req, res) => {
  res.redirect('/bot/add')
})

router.use('/', require('./bot.routes'))
router.use('/', require('./user.routes'))

module.exports = router
