const Router = require('express')
const authController = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

const router = new Router()

router.post('/registration', [check('username', 'Имя пользователя не может быть пустым').notEmpty(), check('password', 'Пароль не может быть меньше 4 и больше 10 символов').isLength({min:4, max:10})], authController.registration)

router.post('/login', [check('username', 'Имя пользователя не может быть пустым').notEmpty(), check('password', 'Пароль не может быть меньше 4 и больше 10 символов').isLength({min:4, max:10})], authController.login)

router.get('/users', roleMiddleware(['ADMIN']), authController.getUsers)

module.exports = router