import { Container, Row, Col, Button, Card, ButtonGroup, Nav, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"



const FriendsList = ({ dataFriend, loadUser }) => {


    console.log(dataFriend)


    return (
        !dataFriend
            ? <p>Loading....</p>
            :
            <>
                {
                    dataFriend.map((data) => {
                        return (


                            <div key={data._id} >
                                <Link to={`/profile/${data._id}`}>
                                    <Nav.Link as="div">
                                        <img src={data.imageUrl} alt='fotoperfil' />
                                    </Nav.Link>


                                </Link>
                                <Card.Text>{data.name}</Card.Text>
                            </div>

                        )

                    })

                }
            </>
    )

}

export default FriendsList
