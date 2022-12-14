import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import { MessageContext } from './../../contexts/userMessage.context'
// configurar forma de recargar fotos
import uploadServices from "../../services/upload.service"

const SignupForm = ({ fireFinalActions }) => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        imageUrl: "https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671041357/imagen_por_defecto_xwpnsv.webp",
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
                setShowToast(true)
                setToastMessage('Usuario creado correctamente')
                fireFinalActions()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    // configurar forma de recargar fotos
    const [loadingImage, setLoadingImage] = useState(false)
    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setSignupData({ ...signupData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }



    const { username, password, email, name, bio } = signupData

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
                <Form.Control type="file" onChange={handleFileUpload} name="imageUrl" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" value={bio} onChange={handleInputChange} name="bio" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Subiendo imagen...' : 'Registrar'}</Button>
            </div>

        </Form>


    )
}

export default SignupForm