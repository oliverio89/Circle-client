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


    getPost(deviceLocation) {
        return this.api.get(`/getAllPosts?lat=${deviceLocation.lat}&lng=${deviceLocation.lng}`)
    }
    getAllPostAdmin() {
        return this.api.get(`/getAllPostsAdmin`)
    }

    getOnePost(post_id) {
        return this.api.get(`/getOnePost/${post_id}`)
    }

    savePost(postData) {
        return this.api.post('/savePost/', postData)
    }

    editPost(palabra) {
        return this.api.put(`/editPost/${palabra.id}`, palabra)
    }

    giveLike(comenData) {
        return this.api.put(`/likePost/${comenData}`)
    }

    deleteLike(disLikeData) {
        return this.api.put(`/dislikePost/${disLikeData}`)
    }

    reportPost(report) {
        return this.api.put(`/reportPost/${report}`)
    }

    deletePost(post_id) {
        return this.api.delete(`/deletePost/${post_id}`)
    }

}


const postService = new PostService()

export default postService