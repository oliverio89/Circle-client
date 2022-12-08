import { useState } from "react"
import { Form, Button, } from "react-bootstrap"
import postService from "../../services/post.service"
import uploadServices from "../../services/upload.service"

const EditPostForm = ({ closeModal, title, description, imageUrl, id, loadPosts }) => {




    const [postEditData, setPostEditData] = useState({
        title: title,
        description: description,
        imageUrl: imageUrl,
        id: id
    })

    const [loadingImage, setLoadingImage] = useState(false)



    const handleInputChange = e => {

        const { name, value } = e.target

        setPostEditData({ ...postEditData, [name]: value })
        console.log(postEditData.id)

    }






    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setPostEditData({ ...postEditData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }



    // con esto al pulsar el botón hace submit y se sube
    const handleFormSubmit = e => {
        e.preventDefault()
        postService
            .editPost(postEditData)
            .then(() => {
                loadPosts()
                closeModal()
            })
            .catch(err => console.log(err))
    }






    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" value={postEditData.title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={postEditData.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Subiendo imagen...' : 'Editar Post'}</Button>
            </div>
        </Form>
    )
}

export default EditPostForm