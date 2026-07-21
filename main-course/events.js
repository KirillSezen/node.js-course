const Emitter = require('events')
const dotenv = require('dotenv')

dotenv.config()

const emitter = new Emitter()

emitter.on('message', (data, second) => {
	console.log('first: ' + data)
	console.log('second: ' + second)
})

const info = process.env.INFO || ''

if (info) {
	emitter.emit('message', info, 123)
} else {
	emitter.emit('message', 'нету', 'пусто')
}