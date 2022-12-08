import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../../components/LoginForm/LoginForm'
const LoginPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/post')
    }

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Acceder</h1>

                    <hr />

                    <LoginForm fireFinalActions={fireFinalActions} />

                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage