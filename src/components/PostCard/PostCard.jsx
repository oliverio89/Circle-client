import './PostCard.css'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { Button, Accordion, Modal, Row, Nav } from 'react-bootstrap';
import { AuthContext } from './../../contexts/auth.context'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import postService from '../../services/post.service';
import EditPostForm from '../EditPostForm/EditPostForm';
import ComentForm from '../ComentForm/ComentForm';
import LikeButton from '../LikeButton/LikeButton';
import ReportButton from '../ReportButton/ReportButton';



function PostCard({ title, description, imageUrl, _id, owner, loadPosts, comments, likes, reportes, createdAt }) {

    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const [showCommentModal, setCommentModal] = useState(false)
    const openCommentModal = () => setCommentModal(true)
    const closeCommentModal = () => setCommentModal(false)

    const deletePost = (post_id) => {

        postService
            .deletePost(post_id)
            .then(() => loadPosts())
            .catch(err => console.error(err))

    }

    const dayName = new Date(createdAt).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
    });



    return (

        <MDBCard className='cardstyle'>
            <MDBRow className='g-0'>
                <MDBCol md='5'>
                    {imageUrl ?
                        <>
                            <MDBCardImage src={imageUrl} alt='...' fluid />
                        </>
                        : <></>
                    }

                </MDBCol>
                <MDBCol md='7'>
                    <MDBCardBody>
                        <MDBCardTitle>{title}</MDBCardTitle>
                        <Link to={`/detalles/${_id}`}>
                            <Button className='detallesBtn' variant="dark" size="sm">Ver detalles</Button>
                        </Link>
                        <hr />
                        <MDBCardText>
                            {description}
                        </MDBCardText>
                        <MDBCardText>
                            <small className='text-muted'>Created:{dayName}</small>
                        </MDBCardText>
                        <hr />
                        <MDBCardText className='btnContainer'>
                            <LikeButton post_id={_id} likes={likes} loadPosts={loadPosts} />
                            <ReportButton post_id={_id} reportes={reportes} loadPosts={loadPosts} />
                        </MDBCardText>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Comentarios({comments?.length})</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        comments?.map((elem) => {

                                            return (
                                                < div className="commentContainer" key={elem._id} >
                                                    <Link to={`/profile/${elem.owner?._id}`}>
                                                        <Nav.Link as="div">
                                                            <img src={elem.owner?.imageUrl} alt='' />
                                                        </Nav.Link>
                                                    </Link>
                                                    <p>{elem.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <MDBCardText className='btnContainer'>
                            <Button onClick={openCommentModal} variant="dark" size="sm">Comentar</Button>
                            {
                                (owner._id === user?._id || user.role === "ADMIN") &&

                                <>
                                    <Button onClick={openModal} variant="dark" size="sm">Editar Post</Button>
                                    <Button variant="danger" size="sm" onClick={() => deletePost(_id)}>Eliminar</Button>
                                </>
                            }
                        </MDBCardText>
                        <Modal show={showCommentModal} onHide={closeCommentModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Escribir tu comentario</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ComentForm closeModal={closeCommentModal} loadPosts={loadPosts} post_id={_id} />
                            </Modal.Body>
                        </Modal>
                        <Modal show={showModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Editar Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <EditPostForm closeModal={closeModal} loadPosts={loadPosts} title={title} description={description} imageUrl={imageUrl} id={_id} />
                            </Modal.Body>
                        </Modal>



                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    )
}

export default PostCard