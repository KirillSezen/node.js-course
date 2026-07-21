const path = require('path')
const fs = require('fs')

// fs.readFile(path.resolve(__dirname, 'count.txt'), {encoding: 'utf-8'}, (err, data) => {
// 	if (err) throw err

// 	console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'count.txt'))

// stream.on('data', (chunk) => {
// 	console.log('chunk ', chunk)
// })

// stream.on('open', () => console.log('начало'))
// stream.on('end', () => console.log('конец'))
// stream.on('error', (e) => console.log('ошибка: ', e))

// const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'count2.txt'))
// for(let i = 0; i <= 20; i++) {
// 	writeableStream.write(i + '\n')
// }
// writeableStream.end('end')

// const http = require('http')

// http.createServer((req, res) => {
// 	const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

// 	stream.pipe(res)
// })