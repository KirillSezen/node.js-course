const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const generateAccessToken = (id, roles) => {
	const payload = {
		id, roles
	}

	return jwt.sign(payload, process.env.JWT_TOKEN, {expiresIn: '12h'})
}

class authController {
	login = async (req, res) => {
		try {
			const errors = validationResult(req)
			if(!errors.isEmpty()) {
				return res.status(400).json({message: 'Ошибка при логине', errors})
			}

			const {username, password} = req.body

			const user = await User.findOne({username})
			if (!user) {
				return res.status(400).json({message: 'Пользователя с таким именем не существует'})
			}

			const comparePassword = bcrypt.compareSync(password, user.password)

			if(!comparePassword) {
				res.json({message: 'Неверный пароль'})
			}

			const token = generateAccessToken(user._id, user.roles)

			return res.json({token})
		} catch (e) {
			console.log(e)
			res.status(400).json({message: 'Login error'})
		}
	}

	registration = async (req, res) => {
		try {
			const errors = validationResult(req)
			if(!errors.isEmpty()) {
				return res.status(400).json({message: 'Ошибка при регистрации', errors})
			}

			const {username, password} = req.body

			const candidate = await User.findOne({username})
			if (candidate) {
				return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
			}

			const hashPassword = bcrypt.hashSync(password, 7)
			const userRole = await Role.findOne({value: 'USER'})
			const user = await User.create({username, password: hashPassword, roles: [userRole.value]})

			res.json({message: 'Пользователь успешно зарегистрирован'})
		} catch (e) {
			console.log(e)
			res.status(400).json({message: 'Registration error'})
		}
	}

	getUsers = async (req, res) => {
		try {
			const users = await User.find()
			res.send(users)
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new authController()