const mysql = require('mysql2');
const { DB } = require('../../keys');

const connection = mysql.createConnection({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log('connect to database succusseful');
});

module.exports = connection;
