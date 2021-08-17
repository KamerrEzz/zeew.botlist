const find = require("./find");

module.exports = async (req, id, body) => {
  console.log("Entro: "+ id)
  const db = req.db;
  const findBot = await find(req, { columns: '*', table: 'bot', where: `id = ${id}` })
  if (findBot.length === 0) return false;

  let sql = `UPDATE bot SET `;

  if(body.shortDesc) {
    sql += `ShortDesc='${body.shortDesc}', `;
  }
  
  if(body.longDesc) {
    sql += `LongDesc='${body.longDesc}', `;
  }

  if(body.prefix) {
    sql += `prefix='${body.prefix}', `;
  }

  if(body.tags) {
    sql += `tags='${body.tags}', `
  }

  if(body.team) {
    sql += `team='${body.team}', `
  }

  sql += `update_at=${Date.now()} WHERE id='${id}';`

//  console.log(req.db)

  db.query(sql);
  return true;
}

/**
 * DATOS ACTUALIZABLES
 * ShortDescription
 * LongDescription
 * Prefix
 * team
 * tags
 * 
 * Actualizados automaticamente
 * La fecha de actualización
 */