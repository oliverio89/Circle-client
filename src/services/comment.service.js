import axios from 'axios'

class CommentService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/comment`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getComments() {
        return this.api.get('/getAllComments')
    }
    saveComment(commentData) {
        return this.api.post('/saveComment', commentData)
    }

    deleteComment(comment_id) {
        return this.api.delete(`/deletePost/${comment_id}`)
    }
}



const commentService = new CommentService()

export default commentService