const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()

const info = process.env.INFO

const writeFileAsync = async (path, data) => {
	return new Promise((res, rej) => fs.writeFile(path, data, (err) => {
		if(err) {
			return rej(err.message)
		}
		res()
	}))
}

const appendFileAsync = async (path, data) => {
	return new Promise((res, rej) => fs.appendFile(path, data, (err) => {
		if(err) {
			return rej(err.message)
		}
		res()
	}))
}

const deleteFileAsync = async (path) => {
	return new Promise((res, rej) => fs.rm(path, (err) => {
		if(err) {
			return rej(err.message)
		}
		res()
	}))
}

const readFileAsync = async (path) => {
	return new Promise((res, rej) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
		if(err) {
			return rej(err.message)
		}
		res(data)
	}))
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), info)
	.then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
	.then(data => writeFileAsync(path.resolve(__dirname, 'count.txt'), String(data.split(' ').length)))
	.then(setTimeout(() => deleteFileAsync(path.resolve(__dirname, 'test.txt')), 5000))
	.catch(err => console.log(err))
