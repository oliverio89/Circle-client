import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import userService from '../../services/user.service'
import LikeButton from '../../components/LikeButton/LikeButton';



// const addFriend = (firend_id) => {
//     console.log('hiiiiii')
//     userService
//         .findbyId(firend_id)
//         .then(() => console.log(firend_id))
//         .catch(err => console.error(err))
// }




function ProfilePage() {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Row>
                <Col md={{ span: 4 }}>
                    <img src={user.imageUrl} style={{ width: '40%' }} />
                </Col>
                <Col>
                    <p>{user.name}</p>
                    <p>{user.bio}</p>
                </Col>


                <h4>Amigos</h4>

                <Button as="div" variant="dark" onClick>Agregar Amigo</Button>

                <Col>
                    <h4>Mis Publicaciones</h4>
                </Col>


                <Link to="/post">
                    <Button as="div" variant="dark">Volver a las Publicaciones</Button>
                </Link>
                < LikeButton />


            </Row>
        </Container >


    );
}

export default ProfilePage;