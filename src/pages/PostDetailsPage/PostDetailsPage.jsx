import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Button, Card, ButtonGroup, Nav, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import postService from "../../services/post.service"
import { AuthContext } from './../../contexts/auth.context'



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

    // decostruir

    // const { title, description, comments, imageUrl } = post

    return (

        <Container>

            {
                !post
                    ?
                    <h1>CARGANDO</h1>
                    :
                    <>
                        <h1 className="mb-4">Detalles de {post.title}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6, offset: 1 }}>
                                <h3>Especificaciones</h3>
                                <p>{post.description}</p>
                                <hr />

                                {
                                    post.comments.map((comment) => {

                                        return (
                                            < Row className="d-none d-sm-none d-md-block d-lg-block coment" key={comment._id} >

                                                <div className="col-md-6" >

                                                    <Card.Text>{comment.description}</Card.Text>
                                                </div>
                                                <div className="col-md-6">
                                                    <Link to="/profile">
                                                        <Nav.Link as="div">
                                                            <img src={comment.owner.imageUrl} alt='fotoperfil' />
                                                        </Nav.Link>
                                                    </Link>
                                                </div>
                                            </Row>
                                        )
                                    })
                                }



                                <Link to="/post">
                                    <Button as="div" variant="dark">Volver al Muro</Button>
                                </Link>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={post.imageUrl} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container>
    )
}

export default PostDetailsPage