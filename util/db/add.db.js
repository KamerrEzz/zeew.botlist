const find = require('./find')

module.exports = async (req, value) => {
  const findBot = await find(req, { columns: '*', table: 'bot', where: `id = ${value.id}` })
  if (findBot.length > 0) return

  req.db.query(`INSERT INTO bot (id, ShortDesc, prefix, owner) VALUES ('${value.id}','${value.ShortDesc}','${value.prefix}','${value.owner}')`)
}