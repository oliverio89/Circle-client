import { useState, useEffect, useContext } from "react"
import PostList from "../../components/PostList/PostList"
import postService from "../../services/post.service"
import { Container, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from "../../components/Loader/Loader"
import './PostPage.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
            .then(({ data }) => setPosts(data))
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
            <Container className="postsContanier" >
                <div className="flotanteDiv">
                    <h3 className="muroName">🐇𝑀𝓊𝓇ｏ 𝒹𝑒 𝒫ｏ𝓈𝓉𝓈🐇</h3>
                    <ButtonGroup vertical className="btns">
                        {user && <Button onClick={openModal} variant="dark" size="lm"> ♥ crear un nuevo post ♥</Button>}
                        <h5 className="orangeHeart">♥ ♥ ♥ ♥ ♥ ♥  𝒸𝒾𝓇𝒸𝓁𝑒  ♥ ♥ ♥ ♥ ♥ ♥ </h5>
                        <Link to="/">
                            <Button className="btnVolver" variant="dark">Volver a inicio</Button>
                        </Link>
                    </ButtonGroup>
                </div>
                {!posts ? <Loader /> : <PostList posts={posts} loadPosts={loadPosts} />}
                <hr />

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