import Post from "./Post.js"
import PostService from "./PostService.js"

class PostController {
	async create(req, res) {
		try{
			const post = await PostService.create(req.body, req.files.picture)
			return res.json(post)
		} catch(e) {
			res.status(500).json(e)
		}
	}

	async getAll(req, res) {
		try {
			const posts = await PostService.getAll()
			return res.json(posts)
		} catch(e) {
			res.status(500).json(e)
		}
	}

	async getById(req, res) {
		try {
			const {id} = req.params
			if (!id) {
				res.status(400).json({message: 'id не указан'})
			}
			const post = await PostService.getById(id)
			return res.json(post)
		} catch(e) {
			res.status(500).json(e)
		}
	}

	async update(req, res) {
		try {
			const {id} = req.params
			if (!id) {
				res.status(400).json({message: 'id не указан'})
			}

			const post = req.body
			if(!post._id) {
				res.status(400).json({message: 'id не указан'})
			}

			const updatedPost = await PostService.update(id, req.body)

			return res.json(updatedPost)
		} catch(e) {
			res.status(500).json(e)
		}
	}

	async remove(req, res) {
		try {
			const {id} = req.params
			if (!id) {
				res.status(400).json({message: 'id не указан'})
			}
			const post = await PostService.remove(id)
			return res.json(post)
		} catch(e) {
			res.status(500).json(e)
		}
	}

}

export default new PostController()