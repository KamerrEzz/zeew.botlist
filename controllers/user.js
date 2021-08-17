const find = require('../util/db/find')
const add = require('../util/db/add')
const del = require('../util/db/delete')

module.exports = {
  async get(req, values){
    let data = await find(req, { table: 'user', columns: '*', limit: values ? values.limit : 25 })
    return data || [];
  },
  async getOne(req, id){
    let data = await find(req, { table: 'user', columns: '*', where: 'id = ' + id })
    return data[0]
  },
  async create(req, id){
    const getuser = await req.bot.users.fetch(id)
    if(!getuser) return {api: true, message: 'This is not a valid ID'}
    if(getuser.bot)  return {api: true, message: 'This is a bot'}

    await add.user(req, {id, username: getuser.username})
    
    return {
      id: getuser.id,
      username: getuser.username
    }
  },
  update(){},
  async delete(req, id){
    const remove = await del(req, {
      "id": id,
      "table": "user"
    })
    if(!remove) return {api: true, message: 'no found user'};

    return true;

  }
}