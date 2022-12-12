import { Container, Row, Col, Button, Card, ButtonGroup, Nav, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"



const FriendsList = ({ dataFriend }) => {


    console.log(dataFriend)


    return (
        !dataFriend
            ? <p>Loading....</p>
            :
            <>
                {
                    dataFriend.map((data) => {
                        return (

                            < Row className="d-none d-sm-none d-md-block d-lg-block coment" key={data._id} >

                                <div className="col-md-6" >
                                    <Card.Text>{data.name}</Card.Text>
                                </div>
                                <div className="col-md-6">
                                    <Link to="/profile">
                                        <Nav.Link as="div">
                                            <img src={data.imageUrl} alt='fotoperfil' />
                                        </Nav.Link>
                                    </Link>
                                </div>
                            </Row>
                        )

                    })

                }
            </>
    )

}

export default FriendsList
