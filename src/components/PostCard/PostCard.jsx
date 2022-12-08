import { Button, ButtonGroup, Card, Modal } from 'react-bootstrap';
import './PostCard.css'

import { AuthContext } from './../../contexts/auth.context'
import { useContext, useState } from 'react';


import { Link } from 'react-router-dom'
import postService from '../../services/post.service';
import EditPostForm from '../NewPostForm/NewPostForm';



function PostCard(props) {

    const { title, imageUrl, _id, owner, fireFinalActions } = props
    const { user } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)



    const deletePost = (post_id) => {

        postService
            .deletePost(post_id)
            .then(() => fireFinalActions())
            .catch(err => console.error(err))

    }


    return (
        <Card className="mb-4 PostCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {
                    !owner || owner != user?._id
                        ?
                        <>
                            <Link to={`/detalles/${_id}`}>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm">Ver detalles</Button>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <div className="d-grid">
                                <ButtonGroup aria-label="Basic example">
                                    <Link to={`/detalles/${_id}`}>
                                        <Button variant="dark" size="sm">Ver detalles</Button>
                                    </Link>
                                    <Button onClick={openModal} variant="dark" size="sm">Editar Post</Button>
                                    <Modal show={showModal} onHide={closeModal}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Editar Post</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <EditPostForm fireFinalActions={fireFinalActions} />
                                        </Modal.Body>
                                    </Modal>
                                    <Button variant="danger" size="sm" onClick={() => deletePost(_id)}>Eliminar</Button>
                                </ButtonGroup>
                            </div>

                        </>

                }
            </Card.Body>
        </Card>
    );
}

export default PostCard;