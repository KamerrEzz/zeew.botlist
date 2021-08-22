const { Router } = require('express')
const router = Router()
const User = require('../../controllers/user');

router.get('/user', async (req, res) => {
    const data = await User.get(req);
     res.status(202).json(data)
})
router.get('/user/:id', async (req, res) => {
  const id = req.params.id;
  const data = await User.getOne(req, id);
  if(!data) return res.status(404).json({api: true, message: 'not found user'});
  res.status(202).json({api: true, data});
})
// router.post('/user', async (req, res) => {
//   let id = req.body.id
//   const data = await User.create(req, id);
//   res.status(202).json({api: true, data});
// })
// router.put('/user/:id', async (req, res) => {
//   let id = req.params.id;

// })
// router.delete('/user/:id', async (req, res) => {
//   let id = req.params.id;
//   const data = await User.delete(req, id);
//   res.status(202).json({api: true, data});
// })

module.exports = router