const { Client } = require('discord.js')
const client = new Client()

const { token, botPrefix } = require('../config/config')
const prefix = botPrefix;



client.on('ready', () => {
  console.log(`Bot ${client.user.tag} Prendido en la web`)
})

client.on('interactionCrate', async (int) => {
  //if(!int.isCommand()) return;
   if (int.commandName === 'ping') {
    await int.reply('Pong!');
  }
})

client.login(token)
module.exports = client;