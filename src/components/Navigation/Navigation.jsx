
import { Nav, Container, Navbar, Button, Modal } from 'react-bootstrap'
import SignupForm from '../SignupForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context';
import './Navigation.css'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <h2>Circle</h2>
                <Link to="/" className='logopage'>
                    <Nav.Link as="div">
                        <img src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671028203/logo_en_naranja_arubcs.png" />
                    </Nav.Link>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/aboutus">
                            <Nav.Link as="div">About Us</Nav.Link>
                        </Link>


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
                                    <div className='con-btnStart'>
                                        <Button onClick={SignUp} variant="dark btnStart" size="sm"> ♥𝓈𝓉𝒶𝓇𝓉♥</Button>
                                    </div>
                                    <Link to="/map">
                                        <Nav.Link as="div">MAP</Nav.Link>
                                    </Link>

                                    <Modal show={showModal} onHide={closeModal}>
                                        <div className='btnSigLog'>
                                            <Button onClick={SignUp} variant="dark" size="sm">SignUp</Button>
                                            🍬𝒸𝒾𝓇𝒸𝓁𝑒
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
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation

