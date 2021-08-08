const { MessageEmbed } = require('discord.js')

module.exports = (req, values) => {
  const bot = req.bot
  const URI = `https://discord.com/api/oauth2/authorize?client_id=${values.id}&permissions=0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&scope=bot%20applications.commands`

  const embed = new MessageEmbed()
    .setTitle('Nuevo peticion')
    .setColor(0xFF0000)
    .addField('Bot', `Prefix: ${values.prefix}
    ID: ${values.id}
    Invitacion: ${URI}`)
    .addField('Informacion', `${values.FAQ_TEAM}`)
    .addField('Informacion Bot', `${values.faq_bot}`)

  bot.guilds.resolve('739306480586588241').channels.resolve('871780053715923045').send(embed)
}
