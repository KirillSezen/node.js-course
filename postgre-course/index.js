const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`Сервер работает на: ${PORT}`))