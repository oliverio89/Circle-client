import { useState } from "react"
import { Form, Button, } from "react-bootstrap"
import postService from "../../services/post.service"
import uploadServices from "../../services/upload.service"

const EditPostForm = ({ closeModal }) => {

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        imageUrl: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setPostData({ ...postData, [name]: value })
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setPostData({ ...postData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        postService
            .savePost(postData)
            .then(() => closeModal())
            .catch(err => console.log(err))
    }

    const { title, description, imageUrl } = postData

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Subiendo imagen...' : 'Crear Post'}</Button>
            </div>
        </Form>
    )
}

export default EditPostForm