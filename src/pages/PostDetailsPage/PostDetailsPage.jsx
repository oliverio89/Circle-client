import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Button, Card, ButtonGroup, Nav, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import postService from "../../services/post.service"
import { AuthContext } from './../../contexts/auth.context'
import commentService from "../../services/comment.service"
import { useNavigate } from "react-router-dom"
import "./PostDetailsPage.css"

import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const PostDetailsPage = () => {

    const { user } = useContext(AuthContext)

    const [post, setPost] = useState()

    const { post_id } = useParams()




    const getPostDetails = (post_id) => {

        postService
            .getOnePost(post_id)
            .then(({ data }) => setPost(data))
            .catch(err => console.error(err))

    }
    useEffect(() => {
        getPostDetails(post_id)
    }, [])


    //button de eliminar el comentario

    const loadOnePost = () => {
        postService
            .getOnePost(post_id)
            .then(({ data }) => setPost(data))
            .catch(err => console.log(err))
    }


    const deleteComment = (comment_id) => {

        commentService
            .deleteComment(comment_id)
            .then(() => loadOnePost())
            .catch(err => console.error(err))

    }
    const navigate = useNavigate()
    const FinalActionsDeletePost = () => {

        loadOnePost()
        navigate('/post')
    }

    const deletePost = (post_id) => {

        postService
            .deletePost(post_id)
            .then(() => FinalActionsDeletePost())
            .catch(err => console.error(err))

    }
    useEffect(() => {
        loadOnePost()
    }, [])


    return (
        <MDBCard className="detailscard">
            {
                !post
                    ?
                    <h1>CARGANDO</h1>
                    :

                    <MDBRow className='g-0'>
                        <MDBCol md='7'>
                            <MDBCardImage src={post.imageUrl} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='5'>
                            <MDBCardBody>
                                <MDBCardTitle>Detalles de {post.title}</MDBCardTitle>
                                <hr />
                                <MDBCardText> <Link to={`/profile/${post.owner}`}>
                                    <Nav.Link as="div" className="logoCute">🍩ᗯᑎEᖇ
                                    </Nav.Link>
                                </Link>
                                </MDBCardText>
                                <MDBCardText>
                                    {post.description}
                                </MDBCardText>
                                <MDBCardText>
                                    {
                                        post.comments.map((elem) => {

                                            return (
                                                < div className="commentContainer" key={elem._id} >
                                                    <Link to={`/profile/${elem.owner?._id}`}>
                                                        <Nav.Link as="div">
                                                            <img src={elem.owner?.imageUrl} alt='fotoperfil' />
                                                        </Nav.Link>
                                                    </Link>
                                                    <p>  {elem.description}</p>

                                                    {(user._id === elem.owner._id) &&
                                                        <>
                                                            <Button variant="deleteComment" size="sm" onClick={() => deleteComment(elem._id)}>❌</Button>
                                                        </>

                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </MDBCardText>
                                <div className="volver">
                                    <Link to="/post">
                                        <Button as="div" variant="dark">Volver al Muro</Button>
                                    </Link>
                                    {
                                        (user.role === "ADMIN" || user._id === post.owner) &&
                                        <Button variant="danger" size="sm" onClick={() => deletePost(post_id)}>Eliminar el post</Button>
                                    }
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
            }
        </MDBCard>
    )
}

export default PostDetailsPage


