const dotenv = require('dotenv')
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const urlParser = require('./framework/parseUrl')

dotenv.config()
const PORT = process.env.PORT || 3000

const app = new Application()

app.use(jsonParser)
app.use(urlParser('http://localhost:8800'))

app.addRouter(userRouter)

app.listen(PORT, () => {
	console.log(`Server started on Port: ${PORT}`)
})