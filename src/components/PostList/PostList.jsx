import { Col, Row } from "react-bootstrap"
import PostCard from "../CoasterCard/CoasterCard"

const PostList = ({ posts }) => {

    return (
        <Row>
            {posts.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <PostCard  {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PostList