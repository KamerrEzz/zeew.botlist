const { WH_URL, WH_PROFILE_IMG, WH_NAME } = require("../../config/config");
const { Webhook } = require('discord-webhook-node');
const wh = new Webhook(WH_URL);

wh.setUsername(WH_NAME);
wh.setAvatar(WH_PROFILE_IMG);

module.exports = {
  send: (embed) => {
    wh.send(embed)
  }
}