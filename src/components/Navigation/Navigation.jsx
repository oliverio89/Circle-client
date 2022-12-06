import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


// configurar Modal
import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import SignupForm from '../SignupForm/SignupForm';

// import './Navigation.css'
// import { useContext } from 'react'
// import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    // const { user, logoutUser } = useContext(AuthContext)


    // configuracion de Modal
    const [active, setActive] = useState(false)
    const toggle = () => {
        setActive(!active)
    }



    return (
        <Navbar bg="dark" expand="md" variant="dark" className="mb-5">
            <Container>
                {/* configurar Modal */}
                <button style={{
                    position: 'absolute',
                    top: '50%',
                    padding: 10,
                }} onClick={toggle}>Registro</button>
                <Modal active={active} toggle={toggle}>
                    <SignupForm />
                </Modal>



                <Link to="/">
                    <Navbar.Brand as="div"> Circle </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
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

                        {/* {user ?
                            <>
                                <Nav.Link as="div" onClick={logoutUser}>Cerrar sesión</Nav.Link>

                            </>
                            :
                            <> */}

                        <Link to="/registro">
                            <Nav.Link as="div">Registro</Nav.Link>
                        </Link>
                        <Link to="/acceder">
                            <Nav.Link as="div">Acceder</Nav.Link>
                        </Link>

                        {/* 
                            </>
                        } */}

                        {/* <Nav.Link as="div">¡Hola, {!user ? 'invitad@' : user.username}!</Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation

