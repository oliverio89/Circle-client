import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    addFriend(userData) {
        return this.api.post('/addFriend', userData)
    }

    editUser(user_id) {
        return this.api.user(`/edit/${user_id}`)
    }

    deleteUser(user_id) {
        return this.api.post(`/deleteUser/${user_id}`)
    }




}

const userService = new UserService()

export default userService