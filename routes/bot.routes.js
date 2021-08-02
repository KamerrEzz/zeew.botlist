const { Router } = require('express')
const { auth } = require('../util/middleware/auth')
const Joi = require('joi')
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
  const id = req.params.id
  const servidor = req.BotClient.guilds.cache.get(id)
  const canales = servidor.channels.cache

  res.render('dash', {
    user: req.user,
    servidor,
    canales
  })
})

router.post('/bot/', auth, async (req, res) => {
  try {
    const { FAQ_TEAM, prefix, id, faq_bot } = req.body

    const bot = await req.bot.users.fetch(id)
    if (!bot.bot) return res.render('bot/error', { user: req.user, error: 'Eso no es un bot' })

    res.render('bot/sucess', {
      user: req.user,
      FAQ_TEAM,
      prefix,
      id,
      faq_bot
    })
  } catch (error) {
    console.log(error)

    const messageError = error.message.split(':')[0].split('\n')[1]
    let ErrorMsg
    if (messageError === 'user_id') ErrorMsg = ErrorHandler[messageError]
    else ErrorMsg = 'Ha ocurrido un error al mandar la peticion'

    res.render('bot/error', {
      user: req.user,
      error: ErrorMsg
    })
  }
})

router.put('/bot/:id', auth, (req, res) => { })
router.delete('/bot/:id', auth, (req, res) => { })

module.exports = router
