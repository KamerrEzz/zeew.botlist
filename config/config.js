require('dotenv').config()

module.exports = {
  WH_URL: process.env.WH_URL,
  WH_PROFILE_IMG: process.env.WH_PROFILE_IMG,
  WH_NAME: process.env.WH_NAME,
  mainUrl: process.env.mainUrl,
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL,
  scope: ['identify', 'guilds'],
  token: process.env.token,
  botPrefix: process.env.botPrefix,
  adminTK: process.env.adminTK,
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    port: process.env.DB_PORT
  }
}
