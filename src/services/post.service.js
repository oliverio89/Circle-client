import axios from 'axios'

class PostService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/posts`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getPost() {
        return this.api.get('/getAllPosts')
    }

    getOnePost(post_id) {
        return this.api.get(`/getOnePost/${post_id}`)
    }

    savePOst(postData) {
        return this.api.post('/savePost', postData)
    }
}

const postService = new PostService()

export default postService