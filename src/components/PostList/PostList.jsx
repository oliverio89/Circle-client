import { Col, Row } from "react-bootstrap"
import PostCard from "../PostCard/PostCard"

const PostList = ({ posts, loadPosts }) => {

    return (
        <Row>
            {posts.map(elm => {
                console.log('soyid', elm._id)
                return (
                    <Col sm={{ offset: 3, span: 6 }} key={elm._id} >
                        <PostCard  {...elm} loadPosts={loadPosts} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PostList