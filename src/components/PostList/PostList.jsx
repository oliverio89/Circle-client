import { Col, Row } from "react-bootstrap"
import PostCard from "../PostCard/PostCard"

const PostList = ({ posts, loadPosts }) => {


    return (
        <Row>
            {posts.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >

                        <PostCard  {...elm} loadPosts={loadPosts} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PostList