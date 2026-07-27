const userService = require("../service/user-service")

class UserController {
	async registration (req, res, next) {
		try {
			const {email, password} = req.body
			const userData = await userService.registration(email, password)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			return res.json(userData)
		} catch (e) {
			console.log(e)
		}

	}

	async login (req, res, next) {
		try {

		} catch (e) {
			console.log(e)
		}

		res.send('ok')
	}

	async logout (req, res, next) {
		try {

		} catch (e) {
			console.log(e)
		}

		res.send('ok')
	}

	activate (req, res, next) {
		try {

		} catch (e) {
			console.log(e)
		}

		res.send('ok')
	}

	refresh (req, res, next) {
		try {

		} catch (e) {
			console.log(e)
		}

		res.send('ok')
	}

	getUsers (req, res, next) {
		try {

		} catch (e) {
			console.log(e)
		}
		
		res.send('ok')
	}
}

module.exports = new UserController()