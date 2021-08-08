const { Router } = require('express')
const { auth } = require('../util/middleware/auth')
const { peticion } = require('../util/schemas/bot')
const addHook = require('../util/hooks/add')
const addBotdb = require('../util/db/add.db')
const router = Router()

const ErrorHandler = {
  user_id: 'La id que has colocado no es valida'
}

router.get('/bot', (req, res) => {
  res.json({
    user: req.user,
    bot: req.BotClient
  })
})

router.get('/bot/add', auth, (req, res) => {
  res.render('bot/add', {
    user: req.user
  })
})

router.get('/bot/:id', auth, (req, res) => {
})

router.post('/bot/', auth, async (req, res) => {
  try {
    const { value, error } = peticion(req)
    if (error) return res.render('bot/error', { user: req.user, error: error.details.map(a => a.message) })
    const bot = await req.bot.users.fetch(req.body.id)
    if (!bot.bot) return res.render('bot/error', { user: req.user, error: 'Eso no es un bot' })

    const data = {
      ...value,
      ...bot
    }
    addHook(req, data)
    addBotdb(req, data)

    res.render('bot/sucess', {
      user: req.user,
      value,
      bot,
      date: new Date()
    })
  } catch (error) {
    console.log(error)
    const messageError = error.message.split(':')[0].split('\n')[1]
    let ErrorMsg
    if (messageError === 'user_id') ErrorMsg = ErrorHandler[messageError]
    else ErrorMsg = error

    res.render('bot/error', {
      user: req.user,
      error: ErrorMsg
    })
  }
})

router.put('/bot/:id', auth, (req, res) => { })
router.delete('/bot/:id', auth, (req, res) => { })

module.exports = router
