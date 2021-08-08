module.exports = (req, { table, where, sort, limit, offset, columns }) => {
  return new Promise((resolve, reject) => {
    const db = req.db
    let sql = `SELECT ${columns} FROM ${table}`
    if (where) {
      sql += ` WHERE ${where}`
    }
    if (sort) {
      sql += ` ORDER BY ${sort}`
    }
    if (limit) {
      sql += ` LIMIT ${limit}`
    }
    if (offset) {
      sql += ` OFFSET ${offset}`
    }
    db.query(sql, function (err, rows) {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}
