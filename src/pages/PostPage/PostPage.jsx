import { useState, useEffect, useContext } from "react"
import PostList from "../../components/PostList/PostList"
import postService from "../../services/post.service"
import { Container, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from "../../components/Loader/Loader"


import { MessageContext } from '../../contexts/userMessage.context'
import { AuthContext } from '../../contexts/auth.context'

import NewPostForm from './../../components/NewPostForm/NewPostForm'

const PostListPage = () => {

    const [posts, setPosts] = useState(null)
    const [deviceLocation, setGeolocation] = useState({
        lat: null,
        lng: null
    })

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const { user } = useContext(AuthContext)

    const loadPosts = () => {
        postService
            .getPost(deviceLocation)
            .then(({ data }) => {
                console.log(data)
                setPosts(data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            data => {
                const hola = data.coords.latitude
                const adios = data.coords.longitude
                setGeolocation({ lat: hola, lng: adios })
            },
            err => console.log('ERROR GEOLOCATION', err))

    }, [])


    useEffect(() => {
        deviceLocation.lat != null && loadPosts()
    }, [deviceLocation])

    return (

        <>
            <Container>
                <h1>Muro de comentarios</h1>
                {user && <Button onClick={openModal} variant="dark" size="lm">Crear un nuevo Post</Button>}
                <hr />
                {!posts ? <Loader /> : <PostList posts={posts} loadPosts={loadPosts} />}
                <hr />
                <Link to="/">
                    <Button variant="dark">Volver a inicio</Button>
                </Link>
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPostForm closeModal={closeModal} loadPosts={loadPosts} />
                </Modal.Body>
            </Modal>
        </>

    )
}

export default PostListPage