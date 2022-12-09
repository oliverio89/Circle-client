import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import { useContext, useState } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
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
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const [showForm, setShowForm] = useState('')
    const { user, logoutUser } = useContext(AuthContext)

    const editUser = () => {
        setShowForm('EditProfileForm')
        setShowModal(true)
    }

    const fireFinalActions = () => {
        navigate('/profile')
        closeModal()
    }

    const addFriend = (user_id) => {
        console.log('hiiiiii', user_id)

        userService
            .addFriend(user_id)
            .then()
            .catch(err => console.log(err))
    }

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

                <h4>Amigos</h4>

                <Button as="div" variant="dark" onClick={() => addFriend(user._id)}>Agregar Amigo</Button>

                <Col>
                    <h4>Mis Publicaciones</h4>
                </Col>
                <Button as="div" variant="warning" onClick={editUser}>Editar Perfil</Button>


                <Modal show={showModal} onHide={closeModal}>

                    <Modal.Header closeButton>
                        <Modal.Title>Editar Perfil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {showForm === 'EditProfileForm' && <EditProfileForm name={user.name} bio={user.bio} imageUrl={user.imageUrl} id={user._id} />}
                    </Modal.Body>
                </Modal>




                <Link to="/post">
                    <Button as="div" variant="dark">Volver a las Publicaciones</Button>
                </Link>





            </Row>
        </Container>
    );
}

export default ProfilePage;