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

    const [posts, setPost] = useState(null)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const { user } = useContext(AuthContext)

    const loadPost = () => {
        postService
            .getPost()
            .then(({ data }) => setPost(data))
            .catch(err => console.log(err))
    }


    const fireFinalActions = () => {
        setShowToast(true)
        setToastMessage('Post creado en la BBDD')
        loadPost()
        closeModal()
    }

    useEffect(() => {
        loadPost()
    }, [])

    return (

        <>
            <Container>
                <h1>Muro de comentarios</h1>
                {user && <Button onClick={openModal} variant="dark" size="sm">Crear un nuevo Post</Button>}
                <hr />
                {!posts ? <Loader /> : <PostList posts={posts} fireFinalActions={fireFinalActions} />}
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
                    <NewPostForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>


        </>


    )
}

export default PostListPage