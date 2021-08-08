const find = require('./find')

module.exports = async (req, value) => {
  const data = {
    id: value.id,
    ShortDesc: value.faq_bot,
    prefix: value.prefix,
    owner: req.user.id
  }
  const findBot = await find(req, { columns: '*', table: 'bot', where: `id = ${value.id}` })
  if (findBot || findBot.length > 0) return

  req.db.query('INSERT INTO bot (id, ShortDesc, prefix, owner) VALUES (?,?,?,?)', [data])
}

/*
  {
      - 'id: Number'
      - 'ShortDesc: Varchar 255'
      - 'LongDesc: Text'
      - 'prefix: Varchar 3'
      - 'owner: Number'
      - "team: Array"
      - "create_at: Date"
      - "update_at: Date"
      - "temp_likes: Number"
      - "temp_dislike: Number"
      - "likes: Number"
      - "dislikes: Number"
      - "tags: Array"
      - "isPremiun: Boolean"
      - "isZeew: Boolean"
      - "isZeewTEAM: boolean"
      - 'status: boolean' # true = aprovado - false = pendiente
  }
*/
/**
  {
  FAQ_TEAM: 'la de la mama ',
  prefix: 'zk!',
  id: '706649961630007316',
  faq_bot: 'la de la mama ',
  system: null,
  locale: null,
  flags: null,
  username: 'Zeew',
  bot: true,
  discriminator: '1088',
  avatar: '5e364ad46f9b27390938d48f1dd581d4',
  lastMessageID: null,
  lastMessageChannelID: null
}
*/
