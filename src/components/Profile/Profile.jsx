import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


function Profile() {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Row>
                <Col md={{ span: 4 }}>
                    <img src={user.imageUrl} style={{ width: '40%' }} />
                </Col>
                <Col>
                    <p>{user.name}</p>
                    <p>{user.bio}</p>
                </Col>

                <h1>Mis Publicaciones</h1>

                <Link to="/post">
                    <Button as="div" variant="dark">Volver a las Publicaciones</Button>
                </Link>
            </Row>
        </Container >


    );
}

export default Profile;