const Joi = require('joi')
module.exports = {
  peticion: (req) => {
    const data = {
      FAQ_TEAM: req.body.FAQ_TEAM,
      prefix: req.body.prefix,
      id: req.body.id,
      faq_bot: req.body.faq_bot
    }

    const validate = Joi.object({
      FAQ_TEAM: Joi.string().min(3).max(20).required(),
      prefix: Joi.string().min(1).max(3).required(),
      id: Joi.string().max(20).required(),
      faq_bot: Joi.string().min(3).max(30).required()
    })

    return validate.validate(data)
  }
}
