import axios from 'axios'

class PostService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/post`
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

    savePost(postData) {
        return this.api.post('/savePost', postData)
    }

    editPost(palabra) {
        return this.api.put(`/editPost/${palabra.id}`, palabra)
    }

    // giveLike(giveLike) {
    //     return this.api.put(`/likePost`, giveLike)
    // }

    giveLike(comenData) {
        return this.api.put(`/likePost/${comenData}`)
    }

    // myCreate(myCreatedData) {
    //     return this.api.put(`/myCreated/${myCreatedData}`)
    // }
    deletePost(post_id) {
        return this.api.delete(`/deletePost/${post_id}`)
    }

}


const postService = new PostService()

export default postService