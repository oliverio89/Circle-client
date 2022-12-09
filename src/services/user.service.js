import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
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
        return this.api.put(`/editUser/${user_id}`)
    }

    deleteUser(user_id) {
        console.log('estoy entrando')
        return this.api.delete(`/deleteUser/${user_id}`)

    }

}

const userService = new UserService()

export default userService