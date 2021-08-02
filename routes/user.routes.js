const { Router } = require('express')
const { auth } = require('../util/middleware/auth')
const router = Router()

router.get('/user', auth, (req, res) => {
  res.json({
    user: req.user,
    bot: req.BotClient
  })
})

router.get('/user/:id', auth, (req, res) => {
  const id = req.params.id
  const servidor = req.BotClient.guilds.cache.get(id)
  const canales = servidor.channels.cache

  res.render('dash', {
    user: req.user,
    servidor,
    canales
  })
})

module.exports = router
