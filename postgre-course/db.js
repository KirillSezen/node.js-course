const Pool = require('pg').Pool
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.DB_NAME
})

module.exports = pool