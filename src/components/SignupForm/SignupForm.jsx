import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"

import { useNavigate } from 'react-router-dom'

import { MessageContext } from './../../contexts/userMessage.context'


const SignupForm = ({ fireFinalActions }) => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        imageUrl: '',
        bio: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then((res) => {
                console.log(res, 'eiiiiiiiiiiiiiiiiiiiiii')

                setShowToast(true)
                setToastMessage('Usuario creado correctamente')
                fireFinalActions()
                navigate('/')
            })
            .catch(err => console.log(err))
    }



    const { username, password, email, name, imageUrl, bio } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" minLength={2} value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" minLength={3} value={password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" value={imageUrl === "" ? undefined : imageUrl} onChange={handleInputChange} name="imageUrl" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" value={bio} onChange={handleInputChange} name="bio" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>

        </Form>


    )
}

export default SignupForm