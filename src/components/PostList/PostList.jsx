import { Col, Row } from "react-bootstrap"
import PostCard from "../PostCard/PostCard"

const PostList = ({ posts, loadPosts }) => {

    return (
        <Row>
            {posts.map(elm => {

                return (
                    <Col sm={{ offset: 3, span: 7 }} key={elm._id} >
                        <PostCard  {...elm} loadPosts={loadPosts} />
                    </Col>
                )
            })}
        </Row>
    )




}

export default PostList