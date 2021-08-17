const { Router } = require('express')
const router = Router()
const Bot = require('../../controllers/bot');

router.get('/bot', async (req, res) => {
  const data = await Bot.get(req)
  res.status(202).json(data)
})
router.get('/bot/:id', async (req, res) => {
  const id = req.params.id;
  const data = await Bot.getOne(req, id);
  if (!data) return res.status(404).json({ error: true, message: 'No se encontro esa ID' })
  res.status(202).json({
    "api": true,
    "data": data
  })
})
router.post('/bot', async (req, res) => {
  let data = await Bot.create(req)
  console.log({ api: true, data })
  if (data) return res.status(202).json({
    "api": true,
    "data": data
  })
})
router.put('/bot/:id', async (req, res) => {
  let id = req.params.id;
  let data = await Bot.update(req, id);
  if (data) return res.status(202).json({
    "api": true,
    "data": data
  })
  if (!data) return res.status(500).json({
    "api": true,
    "error": true,
    "message": "Unknown error"
  })
})
router.delete('/bot/:id', async (req, res) => {
  let id = req.params.id;
  let data = await Bot.delete(req, id);
  if (data) return res.status(202).json({
    "api": true,
    "data": data
  })
  if (!data) return res.status(500).json({
    "api": true,
    "error": true,
    "message": "Unknow error"
  })

})

module.exports = router