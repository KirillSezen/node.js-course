import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'
import router from './router.js'
import fileUpload from 'express-fileupload'
import { setServers } from 'node:dns/promises'
setServers(["1.1.1.1", "8.8.8.8"])

const PORT = 5000
const DB_URL = "mongodb+srv://admin:admin@cluster0.rhhqrhw.mongodb.net/?appName=Cluster0"

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
	try {
		await mongoose.connect(DB_URL)
		app.listen(PORT, () => console.log(`server started on: ${PORT}`))
	} catch(e) {
		console.log(e)
	}
}

startApp()