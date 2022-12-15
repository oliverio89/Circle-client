import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () =>

    <footer>
        <Container className='footer link'>
            <Row>
                <h3>
                    Developers
                </h3>
                <br />
            </Row>
            <Row className='align-items-center'>
                <Col>
                    <a href="https://www.linkedin.com/in/jo%C3%A3opedro-moreira/" target="_blank" rel="noopener noreferrer">
                        <h6>João Pedro Moreira </h6>
                        <img src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671094849/pngegg_rw5ped.png" />
                    </a>
                </Col>

                <Col>
                    <a href="https://www.linkedin.com/in/victor-wdfs/" target="_blank" rel="noopener noreferrer">
                        <h6>Victor Moreno García</h6>
                        <img src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671094849/pngegg_rw5ped.png" />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.linkedin.com/in/yanxia-wu-7a9376117/" target="_blank" rel="noopener noreferrer">
                        <h6>Yanxia Wu</h6>
                        <img src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671094849/pngegg_rw5ped.png" />
                    </a>
                </Col>
            </Row>

        </Container>
    </footer >


export default Footer