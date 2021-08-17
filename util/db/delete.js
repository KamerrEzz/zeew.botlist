const find = require('./find')

module.exports = async (req, {id, table}) => {
  const findBot = await find(req, { columns: '*', table , where: `id = ${id}` })
  if (findBot.length === 0) return;

  req.db.query(`DELETE FROM ${table} WHERE id = '${id}'`)
  return true;
} 