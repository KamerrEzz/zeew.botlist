const find = require('./find')

module.exports = async (req, value) => {
  const findBot = await find(req, { columns: '*', table: 'bot', where: `id = ${value.id}` })
  if (findBot.length > 0) return
  let sql = `INSERT INTO bot (id, username, shortdesc, prefix, owner) VALUES ('${value.id}','${value.username}','${value.shortdesc}','${value.prefix}','${value.owner}')`
  req.db.query(sql)
}