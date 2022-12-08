import { Col, Row } from "react-bootstrap"
import PostCard from "../PostCard/PostCard"

const PostList = ({ posts, fireFinalActions }) => {


    return (
        <Row>
            {posts.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >

                        <PostCard  {...elm} fireFinalActions={fireFinalActions} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PostList