import { useEffect } from "react"
import { useState } from "react"
import { Form, Button, } from "react-bootstrap"
import postService from "../../services/post.service"
import uploadServices from "../../services/upload.service"

const NewPostForm = ({ closeModal, loadPosts }) => {

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        lat: 0,
        lng: 0


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
            .then(() => {
                loadPosts()
                closeModal()
            })
            .catch(err => console.log(err))
    }

    const { title, description, imageUrl, lat, lng } = postData


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            data => {
                const hola = data.coords.latitude
                const adios = data.coords.longitude
                console.log('soy location', data.coords.latitude)

                setPostData({ ...postData, lat: hola, lng: adios })
            })
    }, [])

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

export default NewPostForm