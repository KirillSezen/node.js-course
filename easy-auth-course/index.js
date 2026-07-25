const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const { setServers } = require('node:dns/promises')
setServers(["1.1.1.1", "8.8.8.8"])


const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
	try {
		await mongoose.connect(DB_URL)
		app.listen(PORT, () => console.log(`Server started at ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()