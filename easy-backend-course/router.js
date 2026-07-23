import Router from 'express'
import Post from './Post.js'
import PostController from './PostController.js'

const router = new Router()


router.get('/posts', PostController.getAll)

router.get('/posts/:id', PostController.getById)

router.post('/posts', PostController.create)

router.put('/posts/:id', PostController.update)

router.delete('/posts/:id', PostController.remove)

export default router