const find = require('./find')

module.exports = {
  user: async (req, value) => {
  const findBot = await find(req, { columns: '*', table: 'user' , where: `id = ${value.id}` })
  if(findBot[0]) return;

  let sql = `INSERT INTO user (id , username) VALUES ('${value.id}', '${value.username}')`
  req.db.query(sql)
  return true;
  }
}