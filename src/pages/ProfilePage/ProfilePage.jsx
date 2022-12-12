import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import userService from '../../services/user.service'
import LikeButton from '../../components/LikeButton/LikeButton';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import './ProfilePage.css'
import FriendsList from '../../components/FriendsList/FriendsList';



function ProfilePage() {



    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const [showForm, setShowForm] = useState('')
    const { user, logoutUser } = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState('')

    const editUser = () => {
        setShowForm('EditProfileForm')
        setShowModal(true)
    }

    const { user_id } = useParams()


    const loadUser = (user_id) => {

        userService
            .giveMeUser(user_id)
            .then((elm) => {
                setUserProfile(elm.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUser(user_id)
    }, [])

    const addFriend = (user_id) => {

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
            })
            .catch(err => console.error(err))
    }




    return (

        <Container>
            <Row className="d-none d-sm-none d-md-block d-lg-block profile">
                <Col sm={4}>
                    <img src={userProfile.imageUrl} style={{ width: '40%' }} />
                    <h5>{userProfile.name}</h5>
                    <p>{userProfile.bio}</p>
                    <Button variant="" size="sm" onClick={editUser}>Editar Perfil</Button>
                    <Button variant="" size="sm" onClick={() => deleteUser(userProfile._id)}>Eliminar Perfil</Button>
                </Col>
                <Col sm={8}>
                    <p>{userProfile.bio}</p>
                    <h4>Lista de Amigos </h4>
                    <p><FriendsList dataFriend={userProfile.friends ? userProfile.friends + 'pasa' : 'cargando'} /></p>
                </Col>
            </Row>

            <Button as="div" variant="dark" onClick={() => addFriend(user_id)}>Agregar Amigo</Button>

            <Col sm={12}>
                <h4>Mis Publicaciones</h4>
            </Col>

            <Modal show={showModal} onHide={closeModal}>

                <Modal.Header closeButton>
                    <Modal.Title>Editar Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showForm === 'EditProfileForm' && <EditProfileForm name={userProfile.name} bio={userProfile.bio} imageUrl={userProfile.imageUrl} id={userProfile._id} />}
                </Modal.Body>
            </Modal>

            <Link to="/post">
                <Button as="div" variant="dark">Volver a las Publicaciones</Button>
            </Link>


        </Container >
    )
}

export default ProfilePage;