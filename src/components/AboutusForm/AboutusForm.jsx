import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
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

    // const Navigate = useNavigate()
    const fireFinalActions = () => {
        closeModal()
        // Navigate('/')
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
                <h3>¿Qué es Circle?</h3>
                <br />
                <p>Circle nació como una idea del proyecto final del Bootcamp de Desarrollador Web - Full Stack en Ironhack.
                    Esta nueva red social tiene como idea principal que los usuarios puedan ver a través de publicaciones lo que ocurre a su alrededor y así crear conexiones por proximidad.
                    Mediante la geolocalización, cada publicación recibe la ubicación actual del usuario y cada persona conectada solo puede ver lo que ha sido publicado en un radio de 10KM.
                    De esa manera es posible encontrar lugares para visitar, un nuevo lugar para comer, tomar algo  y también conectarse con alguién que esté cerca de tu casa, de tu lugar de trabajo o del lugar que estés visitando en este momento.
                </p>

                <div>
                    <Button onClick={Contact} variant="dark" size="sm">Contact Us</Button>
                </div>

                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Us!</Modal.Title>
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

