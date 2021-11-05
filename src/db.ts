import mysql from 'mysql2'

const db = mysql.createConnection({
  host: process.env.MYSQL_SERVICE_HOST,
  user: 'brucewayne',
  password: 'batman',
  database: 'superhero',
})

export default db
