import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import userService from '../../services/user.service'
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import './ProfilePage.css'
import FriendsList from '../../components/FriendsList/FriendsList';
import MyPostList from '../../components/MyPostList/MyPostList';
import Loader from '../../components/Loader/Loader';

function ProfilePage() {

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const [showForm, setShowForm] = useState('')
    const { user, logoutUser, refreshToken } = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState(null)




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

    const loadUserProfile = () => {

        userService
            .giveMeUser(userProfile._id)
            .then((elm) => {
                setUserProfile(elm.data)
            })
            .catch(err => console.log(err))
    }




    useEffect(() => {
        loadUser(user_id)
    }, [user_id])



    const addFriend = (user_id) => {

        userService
            .addFriend(user_id)
            .then(() => refreshToken())
            .catch(err => console.log(err))
    }

    const deleteFriend = (user_id) => {

        userService
            .deleteFriend(user_id)
            .then(() => refreshToken())
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

    useEffect(() => {
        loadUser(user_id)
    }, [user_id])




    return (

        !userProfile
            ? <Loader />
            :
            <Container>
                <Row className=" profile">

                    <Col sm={4} key={userProfile._id} >
                        <br />
                        <br />
                        <img src={userProfile.imageUrl} alt="" />
                        <br />
                        <h4>{userProfile.name}</h4>
                        <p>{userProfile.bio}</p>
                        {
                            user._id === userProfile._id
                                ?

                                <>

                                    <Button variant="" size="sm" onClick={() => editUser(userProfile._id)}>Editar Perfil</Button>
                                    <Button variant="" size="sm" onClick={() => deleteUser(userProfile._id)}>Eliminar Perfil</Button>

                                    <Modal show={showModal} onHide={closeModal}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Editar Perfil</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {showForm === 'EditProfileForm' && <EditProfileForm name={userProfile.name} bio={userProfile.bio} imageUrl={userProfile.imageUrl} id={userProfile._id} closeModal={closeModal} refreshToken={refreshToken} loadUserProfile={loadUserProfile} />}
                                        </Modal.Body>
                                    </Modal>
                                </>

                                : <>
                                    {
                                        user.friends.includes(userProfile._id)
                                            ?
                                            <>
                                                <Button variant="" onClick={() =>

                                                    deleteFriend(user_id)
                                                }>Eliminar Amigo</Button>
                                            </>
                                            :
                                            <>
                                                <Button variant="" onClick={() =>
                                                    addFriend(user_id)
                                                }>Agregar Amigo</Button>
                                            </>




                                    }
                                </>

                        }
                    </Col>
                    <Col md={{ span: 2, offset: 2 }}></Col>
                    <Col sm={4}>
                        <br />
                        <br />
                        <h4>Amigos</h4>
                        <div className="d-flex flex-wrap gap-3 friend">
                            <FriendsList dataFriend={userProfile.friends} loadUser={loadUser} />
                        </div>
                    </Col>
                    <Link to="/post">
                        <Button variant="">Publicaciones</Button>
                    </Link>
                </Row>
                <br />
                <Row className='justify-content-center publi2'>
                    <h4>Mis Publicaciones</h4>

                    <MyPostList dataPost={userProfile.createdPosts} />
                    {
                        (user.role === "ADMIN") &&
                        <>
                            <Button variant="" size="sm" onClick={() => deleteUser(userProfile._id)}>Eliminar Perfil</Button>
                        </>
                    }


                </Row>
            </Container>
    )
}

export default ProfilePage;