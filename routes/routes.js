const { Router } = require('express')
const passport = require('../server/passport')
const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/login', passport.authenticate('discord'), (req, res) => {
  res.redirect('/user')
})

router.use('/api', require('./api/bot'))
router.use('/api', require('./api/user'))
router.use('/', require('./user.routes'))

module.exports = router
