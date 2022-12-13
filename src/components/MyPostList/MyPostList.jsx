import { Container, Row, Col, Button, Card, ButtonGroup, Nav, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"



const MyPostList = ({ dataPost }) => {


    console.log('soy data post', dataPost)


    return (
        !dataPost
            ? <p>Loading....</p>
            :
            <>
                {
                    dataPost.map((data) => {
                        return (


                            <Col sm={3} key={data._id} >
                                <h6>{data.title}</h6>
                                <img src={data.imageUrl} style={{ width: '100%' }} alt='foto de la publicación' />
                            </Col>

                        )

                    })

                }
            </>
    )

}

export default MyPostList

                                // <div className="col-md-6">
                                //     <Link to="/profile">
                                //         <Nav.Link as="div">

                                //         </Nav.Link>
                                //     </Link>
                                // </div>