const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
	res.send('Hello Postgres + Node.js')
})

app.listen(PORT, () => console.log(`Сервер работает на: ${PORT}`))