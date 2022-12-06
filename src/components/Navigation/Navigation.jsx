// configurar Modal
import { Nav, Container, Navbar, Button, Modal } from 'react-bootstrap'
// import MessageContext from '../UserMessage/UserMessage'
// import authService from '../../services/auth.service'
import SignupForm from '../SignupForm/SignupForm'
// import LoginForm from '../LoginForm/LoginForm'



import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context';


const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)

    // configurar modal

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)




    const fireFinalActions = () => {
        closeModal()
    }



    return (
        <Navbar bg="dark" expand="md" variant="dark" className="mb-5">
            <Container>


                <Link to="/">
                    <Navbar.Brand as="div"> Circle </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="div">{!user ? '' : user.username}</Nav.Link>




                        <div>
                            <Button onClick={openModal} variant="dark" size="sm">Registrar</Button>
                            <Button onClick={openModal} variant="dark" size="sm">Acceder</Button>
                        </div>
                        <Modal show={showModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Registrar</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <SignupForm fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        {/* <Modal show={showModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Acceder</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <LoginForm fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal> */}






                        {user ?
                            <>
                                <Link to="/post">
                                    <Nav.Link as="div">Muro de publicaciónes</Nav.Link>
                                </Link>
                                <Link to="/profile">
                                    <Nav.Link as="div">Perfil</Nav.Link>
                                </Link>
                                <Link to="/admin">
                                    <Nav.Link as="div">Panel de Administrador</Nav.Link>
                                </Link>
                                <Link to="/aboutus">
                                    <Nav.Link as="div">Sobre Nosotros</Nav.Link>
                                </Link>
                                <Nav.Link as="div" onClick={logoutUser}>Cerrar sesión</Nav.Link>

                            </>
                            :
                            <>
                                {/* hay que quitarlo para disenar un modal para ambos registrar y login */}
                                <Link to="/registro">
                                    <Nav.Link as="div">Registro</Nav.Link>
                                </Link>


                                <Link to="/acceder">
                                    <Nav.Link as="div">Acceder</Nav.Link>
                                </Link>



                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation

