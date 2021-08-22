const Embed = require("../util/ApiDiscord/embedhook");
const wh = require("../util/ApiDiscord/sendhook");
const add = require('../util/db/add.db');
const update = require("../util/db/update");
const deleteF = require("../util/db/delete")
const isIdDiscord = require('../util/ApiDiscord/isId');
const find = require('../util/db/find')
const { mainUrl } = require("../config/config")

module.exports = {
  get: (req, values) => {
    let data = find(req, { table: 'bot', columns: '*', limit: values ? values.limit : 25 })
    return data || [];
  },
  getOne: async (req, id) => {
    let data = await find(req, { table: 'bot', columns: '*', where: 'id = ' + id })
    const isDiscord = await isIdDiscord(req, id)
    if (!isDiscord) return;

    let unaproved = {
      error: true,
      message: "The bot hasn't been approved"
    }
    if(data[0].status === 0) return unaproved;

    console.log(data[0].status);

    return data;
  },
  create: async (req) => {
    let body = req.body;
    let user = body.owner || req.user.id || null;
    if(!user) return {error: true, message: 'This is not a valid ID '}

    const isDiscord = await isIdDiscord(req, body.id)
    if (!isDiscord) return {error: true, message: 'This is not a valid ID '}

    const getbot = await req.bot.users.fetch(body.id)
    const getuser = await req.bot.users.fetch(user)

    add(req, {
      id: body.id,
      username: isDiscord.username,
      shortdesc: body.shortdesc,
      prefix: body.prefix,
      owner: user
    })

    let bodyEmbed = `**Nombre bot**: ${getbot.username} 
    **ID Bot**: ${body.id}
    **Owner**: ${getuser.username}
    **Owner ID**: ${user}
    **Prefix**: ${body.prefix}
    **URL**: [Abrir](${mainUrl}/api/bot/${req.body.id})`

    let e = Embed.Embed("Nuevo bot añadido", bodyEmbed, getuser.username,getuser.avatarURL(), getbot.avatarURL(), "#3CB043")

    wh.send(e);


    return {
      id: body.id,
      username: isDiscord.username,
      shortdesc: body.shortdesc,
      prefix: body.prefix,
      owner: user
    }

  },
  update: async (req, id) => { 
    let body = req.body;
    let user = body.owner || req.user.id || null;
    if(!user) return {error: true, message: 'This is not a valid ID '}

    const isDiscord = await isIdDiscord(req, id)
    if (!isDiscord) return {error: true, message: 'This is not a valid ID '}

    let data = await find(req, { table: 'bot', columns: '*', where: 'id = ' + id })

    if(data[0].owner !== user) return { 
      "error": true,
      "message": "This is not your bot"
    }

    const getbot = await req.bot.users.fetch(id);
    const getuser = await req.bot.users.fetch(user);

    console.log("1", body)

    update(req, id, body)

    let bodyembed = `**Nombre bot**: ${getbot.username} 
    **ID Bot**: ${id}
    **Owner**: ${getuser.username}
    **Owner ID**: ${user}
    **URL**: [Abrir](${mainUrl}/api/bot/${req.body.id})`

    let em = Embed.Embed("Bot actualizado", bodyembed, getuser.username,getuser.avatarURL(), getbot.avatarURL(), "#FFFF00")

    wh.send(em);

    return {
      b
    }
  },
  delete: async (req, id) => { 
    let body = req.body;
    let user = body.owner || req.user.id;

    const isDiscord = await isIdDiscord(req, id)
    if (!isDiscord) return {error: true, message: 'This is not a valid ID '}

    let data = await find(req, { table: 'bot', columns: '*', where: 'id = ' + id })

    if(data[0].owner !== user) return { 
      "error": true,
      "message": "This is not your bot"
    }

    const getbot = await req.bot.users.fetch(id);
    const getuser = await req.bot.users.fetch(user);

    deleteF(req, {
      "id": id,
      "table": "bot"
    })

    let bodyembed = `**Nombre bot**: ${getbot.username} 
    **ID Bot**: ${id}
    **Owner**: ${getuser.username}
    **Owner ID**: ${user}`

    let em = Embed.Embed("Bot eliminado", bodyembed, getuser.username,getuser.avatarURL(), getbot.avatarURL(), "#FF0000")

    wh.send(em);

    return {
      "user": {
        "name": getuser.username,
        "id": getuser.id
      },
      "deleted": {
        "type": "bot",
        "name": getbot.username,
        "id": getbot.id
      }
    }
  }
}

/**
 * BODY:
 * id - Id del bot
 * faq_bot - informacion del bot
 * faq_tema - informacion para quien revise el bot
 * prefix - prefix del bot
 * owner - id quien esta haciendo la peticion
 */