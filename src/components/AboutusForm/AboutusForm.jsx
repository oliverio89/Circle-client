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
                <Card>
                    <Card.Img variant="top" src="https://www.purina.es/sites/default/files/2021-12/Getting-A-Cat1080x608.jpg" />
                    <Card.Body>
                        <Card.Title>About Us</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
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

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default AboutusForm

