import { useState, useEffect } from "react"
import PostList from "../../components/CoastersList/CoastersList"
import postService from "../../services/post.service"
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const CoastersListPage = () => {

    const [posts, setPost] = useState()

    const loadPost = () => {
        postService
            .getPost()
            .then(({ data }) => {
                setPost(data)
                console.log(data)
            }
            )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadPost()
    }, [])

    return (

        <>
            <Container>
                <h1>Muro de comentarios</h1>

                <hr />
                <PostList posts={posts} />
                <hr />
                <Link to="/">
                    <Button variant="dark">Volver a inicio</Button>
                </Link>
            </Container>



        </>


    )
}

export default CoastersListPage