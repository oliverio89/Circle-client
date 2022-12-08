import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import postService from "../../services/post.service"


const PostDetailsPage = () => {

    const [post, setPost] = useState()

    const { post_id } = useParams()

    useEffect(() => {
        postService
            .getOnePost(post_id)
            .then(({ data }) => setPost(data))
            .catch(err => console.error(err))
    }, [])

    // decostruir

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

        </Container >
    )
}

export default PostDetailsPage