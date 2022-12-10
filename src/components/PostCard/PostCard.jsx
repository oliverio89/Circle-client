import { Nav, Button, ButtonGroup, Card, Modal, Row } from 'react-bootstrap';
import './PostCard.css'

import { AuthContext } from './../../contexts/auth.context'
import { useContext, useState } from 'react';


import { Link } from 'react-router-dom'
import postService from '../../services/post.service';
import EditPostForm from '../EditPostForm/EditPostForm';
import ComentForm from '../ComentForm/ComentForm';
import LikeButton from '../LikeButton/LikeButton';

function PostCard({ title, description, imageUrl, _id, owner, loadPosts, comments, likes }) {

    const { user } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)





    const deletePost = (post_id) => {

        postService
            .deletePost(post_id)
            .then(() => loadPosts())
            .catch(err => console.error(err))

    }



    return (
        <Card className="mb-4 PostCard">
            <Card.Img variant="top" src={imageUrl} />

            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Link to={`/detalles/${_id}`}>
                    <Button variant="dark" size="sm">Ver detalles</Button>
                </Link>

                <LikeButton post_id={_id} likes={likes} loadPosts={loadPosts} />


                {
                    comments.map((elem) => {

                        return (
                            < Row className="d-none d-sm-none d-md-block d-lg-block coment" key={elem._id} >

                                <div className="col-md-6" >

                                    <Card.Text>{elem.description}</Card.Text>
                                </div>
                                <div className="col-md-6">
                                    <Link to="/profile">
                                        <Nav.Link as="div">
                                            <img src={elem.owner.imageUrl} alt='fotoperfil' />
                                        </Nav.Link>
                                    </Link>
                                </div>
                            </Row>
                        )
                    })
                }

                {
                    !owner || owner !== user?._id
                        ?
                        <>
                            <Button onClick={openModal} variant="primary" size="sm">Comentar</Button>

                            <Modal show={showModal} onHide={closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Escribir tu comentario</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ComentForm closeModal={closeModal} loadPosts={loadPosts} post_id={_id} />
                                </Modal.Body>
                            </Modal>
                        </>
                        :
                        <>
                            <div className="d-grid">
                                <ButtonGroup aria-label="Basic example">

                                    <Button onClick={openModal} variant="dark" size="sm">Editar Post</Button>
                                    <Modal show={showModal} onHide={closeModal}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Editar Post</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <EditPostForm closeModal={closeModal} loadPosts={loadPosts} title={title} description={description} imageUrl={imageUrl} id={_id} />
                                        </Modal.Body>
                                    </Modal>
                                    <Button variant="danger" size="sm" onClick={() => deletePost(_id)}>Eliminar</Button>
                                </ButtonGroup>
                            </div>
                        </>
                }
            </Card.Body>
        </Card>
    )
}

export default PostCard