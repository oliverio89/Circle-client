import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import userService from '../../services/user.service'

import LikeButton from '../../components/LikeButton/LikeButton';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';




const addFriend = (user_id) => {
    console.log('hiiiiii')
    userService
        .addFriend(user_id)
        .then(() => console.log(user_id))
        .catch(err => console.error(err))
}



function ProfilePage(name, bio, imageUrl, _id) {

    const navigate = useNavigate()
    const { user, logoutUser } = useContext(AuthContext)

    const deleteUser = (user_id) => {

        userService
            .deleteUser(user_id)
            .then(() => {
                navigate('/')
                logoutUser()
            }
            )
            .catch(err => console.error(err))

    }

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
                <Button variant="danger" size="sm" onClick={() => deleteUser(user._id)}>Eliminar Perfil</Button>
                <Button variant="warning" size="sm" onClick={() => (user._id)}>Editar Perfil</Button>

                <h4>Amigos</h4>

                <Button as="div" variant="dark" onClick={addFriend}>Agregar Amigo</Button>

                <Col>
                    <h4>Mis Publicaciones</h4>
                </Col>


                <Link to="/post">
                    <Button as="div" variant="dark">Volver a las Publicaciones</Button>
                </Link>
                < LikeButton />



            </Row>
        </Container>
    );
}
export default ProfilePage;