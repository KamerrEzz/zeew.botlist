const mysql = require('mysql2')
const db = require('../config/config')
const { host, name, user, pass, port, } = db.database;

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pass,
  database: name
})

module.exports = connection
