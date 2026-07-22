const dotenv = require('dotenv')
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const urlParser = require('./framework/parseUrl')
const mongoose = require('mongoose');
const { setServers } = require('node:dns/promises')
setServers(["1.1.1.1", "8.8.8.8"])

dotenv.config()
const PORT = process.env.PORT || 3000

const app = new Application()

app.use(jsonParser)
app.use(urlParser('http://localhost:8800'))

app.addRouter(userRouter)

	

const uri = process.env.URI
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const start = async () => {
	try {
 		await mongoose.connect(uri, clientOptions);
		app.listen(PORT, () => {
		console.log(`Server started on Port: ${PORT}`)
	})
	} catch (e) {
		console.log(e)
	}

}

start();