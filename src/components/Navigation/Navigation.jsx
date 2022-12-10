
import { Nav, Container, Navbar, Button, Modal } from 'react-bootstrap'
// import MessageContext from '../UserMessage/UserMessage'
// import authService from '../../services/auth.service'
import SignupForm from '../SignupForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context';

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)

    // configurar modal
    const [showModal, setShowModal] = useState(false)
    // const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)
    const [showForm, setShowForm] = useState('')
    const SignUp = () => {
        setShowForm('signup')
        setShowModal(true)
    }
    const LogIn = () => {
        setShowForm('login')
        setShowModal(true)

    }
    const Navigate = useNavigate()

    const fireFinalActions = () => {
        console.log('Estoy llegando')
        Navigate('/post')
        closeModal()
    }



    const logout = () => {
        logoutUser()
        Navigate('/')
    }

    return (
        <Navbar bg="dark" expand="md" variant="dark" className="mb-5">
            <Container>

                <Link to="/">
                    <Navbar.Brand as="div"> Circle </Navbar.Brand>
                </Link>
                <Link to="/aboutus">
                    <Nav.Link as="div">About Us</Nav.Link>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user ?
                            <>
                                <Link to="/post">
                                    <Nav.Link as="div">Muro de publicaciónes</Nav.Link>
                                </Link>
                                <Link to={`/profile/${user._id}`}>
                                    <Nav.Link as="div">{!user ? '' : user.username}</Nav.Link>
                                </Link>
                                <Link to="/admin">
                                    <Nav.Link as="div">Panel de Administrador</Nav.Link>
                                </Link>
                                <Nav.Link as="div" onClick={logout}>Cerrar sesión</Nav.Link>

                            </>
                            :
                            <>
                                <div>
                                    <Button onClick={SignUp} variant="dark" size="sm">SignUp/login</Button>
                                </div>

                                <Modal show={showModal} onHide={closeModal}>
                                    <div>
                                        <Button onClick={SignUp} variant="dark" size="sm">SignUp</Button>
                                        <Button onClick={LogIn} variant="dark" size="sm">LogIn</Button>
                                    </div>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Welcome to Circle!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {showForm === 'signup' && <SignupForm fireFinalActions={fireFinalActions} />}
                                        {showForm === 'login' && <LoginForm fireFinalActions={fireFinalActions} />}
                                    </Modal.Body>
                                </Modal>

                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation

