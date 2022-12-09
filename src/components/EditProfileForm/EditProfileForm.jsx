import { useState } from "react"
import { Form, Button, } from "react-bootstrap"
import userService from "../../services/user.service"
import uploadServices from "../../services/upload.service"

const EditProfileForm = ({ name, bio, imageUrl, id, }) => {

    const [userEditData, setUserEditData] = useState({
        name: name,
        bio: bio,
        imageUrl: imageUrl,
        id: id
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setUserEditData({ ...userEditData, [name]: value })
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setUserEditData({ ...userEditData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = e => {

        e.preventDefault()
        userService
            .editUser(userEditData)
            .then()
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={userEditData.name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" value={userEditData.bio} onChange={handleInputChange} name="bio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Subiendo imagen...' : 'Editar Profile'}</Button>
            </div>
        </Form>
    )
}

export default EditProfileForm