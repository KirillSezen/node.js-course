import Post from "./Post.js"
import FileService from "./FileService.js"

class PostService {
	async create(post, picture) {
		const fileName = FileService.saveFile(picture)
		const createdPost = await Post.create({...post, picture: fileName})
		return createdPost
	}
	
	async getAll() {
		const posts = await Post.find()
		return posts
	}
	
	async getById(id) {
		const post = await Post.findById(id)
		return post
	}
	
	async update(id, post) {		
		const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true})
		return updatedPost
	}
	
	async remove(id) {
		const post = await Post.findByIdAndDelete(id)
		return post
	}
}

export default new PostService()