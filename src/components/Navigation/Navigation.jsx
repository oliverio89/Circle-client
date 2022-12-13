
import { Nav, Container, Navbar, Button, Modal } from 'react-bootstrap'
// import MessageContext from '../UserMessage/UserMessage'
// import authService from '../../services/auth.service'
import SignupForm from '../SignupForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context';
import './Navigation.css'

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

        Navigate('/post')
        closeModal()
    }



    const logout = () => {
        logoutUser()
        Navigate('/')
    }

    return (
        <Navbar className="mb-5 navbar">
            <Container>

                <Link to="/">
                    <Navbar.Brand as="div"> Circle </Navbar.Brand>
                </Link>
                <Link to="/aboutus">
                    <Nav.Link as="div">Nosotros</Nav.Link>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user ?
                            <>
                                <Link to="/post">
                                    <Nav.Link as="div">Publicaciónes</Nav.Link>
                                </Link>
                                <Link to={`/profile/${user._id}`}>
                                    <Nav.Link as="div">{!user ? '' : user.username}</Nav.Link>
                                </Link>
                                {
                                    (user.role === "ADMIN") &&
                                    <Link to="/admin">
                                        <Nav.Link as="div">Panel de Administrador</Nav.Link>
                                    </Link>
                                }

                                <Nav.Link as="div" onClick={logout}>Cerrar sesión</Nav.Link>
                                <Link to="/map">
                                    <Nav.Link as="div">MAP</Nav.Link>
                                </Link>
                            </>
                            :
                            <>
                                <div>
                                    <Button onClick={SignUp} variant="dark" size="sm">SignUp/login</Button>
                                </div>
                                <Link to="/map">
                                    <Nav.Link as="div">MAP</Nav.Link>
                                </Link>

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

