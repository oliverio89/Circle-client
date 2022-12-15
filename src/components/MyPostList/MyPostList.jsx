import { Container, Row, Col, Button, Card, ButtonGroup, Nav, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"



const MyPostList = ({ dataPost }) => {


    return (
        !dataPost
            ? <p> 🅻🅾🅰🅳🅸🅽🅶....</p>
            :
            <>
                {
                    dataPost.map((data) => {
                        return (
                            <Col sm={3} key={data._id} >
                                <h5>{data.title}</h5>
                                <Link to={`/detalles/${data._id}`}>
                                    <img src={data.imageUrl} style={{ width: '100%' }} alt='foto de la publicación' />
                                </Link>

                            </Col>

                        )

                    })

                }
            </>
    )

}

export default MyPostList