const {  MessageBuilder } = require('discord-webhook-node');

const def_img = "https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png";

const Embed = (title, body, author, author_img = def_img, bot_img = def_img, color = "RANDOM") => {

  return new MessageBuilder()
  .setAuthor("Realizado por: "+ author, author_img)
  .setTitle(title)
  .setThumbnail(bot_img)
  .setDescription(body)
  .setColor(color)
  .setTimestamp()

}

module.exports = {
  Embed
}