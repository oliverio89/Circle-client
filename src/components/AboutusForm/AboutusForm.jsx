import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactusForm from '../ContactusForm/ContactusForm';
// import { useNavigate } from 'react-router-dom';

function AboutusForm() {
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const [showContactForm, setShowContactForm] = useState('')

    const Contact = () => {
        setShowContactForm('contact')
        setShowModal(true)
    }

    const fireFinalActions = () => {
        closeModal()
    }


    return (
        <Row xs={1} md={2} className="g-4">

            <Col md={
                {
                    offset: 2, span: 8
                }
            }>
                <img src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671018929/Logo_Circle_frulq4.png" />
                <br />
                <h2>¿Qué es Circle?</h2>
                <br />
                <h6>Circle nació como una idea para el proyecto final de nuestro Bootcamp de Desarrollador Web - Full Stack en la escuela digital de Ironhack.
                    Circle es una nueva red social que tiene como idea principal que los usuarios puedan ver a través de publicaciones lo que ocurre a su alrededor y así crear conexiones por proximidad.
                    Mediante la geolocalización, cada publicación recibe la ubicación actual del usuario y cada persona conectada solo puede ver lo que ha sido publicado en un radio de 5KM de su geolocalización.
                    De esa manera es posible agregar a personas que se mueven en tu circulo cercano para visitar lugares, comer juntos, tomar algo, incluso comprar y vender material de segunda mano, como conectar a gente que esté sola.
                </h6>
                <br />
                <div>
                    <h5>Si tienes alguna duda o problema, no dudes en contactarnos!</h5>
                    <br />
                    <Button onClick={Contact} variant="dark" size="sm">Contacta con Nosotros!</Button>
                </div>

                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contacta con Nosotros!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {showContactForm === 'contact' && <ContactusForm fireFinalActions={fireFinalActions} />}
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default AboutusForm

