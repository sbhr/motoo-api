const mysql = require('mysql');

const host = process.env.DB_HOST || '';
const user = process.env.DB_USER || '';
const password = process.env.DB_PASSWORD || '';
const database = process.env.DATABSE || '';

class Db {
  constructor() {
    this.connection = mysql.createConnection({
      host,
      user,
      password,
      database
    });
  }

  getAllWords () {
    this.connection.   
  }

}

module.exports = Db;