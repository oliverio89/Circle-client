import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () =>

    <footer>
        <Container className='footer link'>
            <Row>
                <Col sm={4}>
                    <h3>
                        Developers
                    </h3>
                    <br />
                    <a href="https://www.linkedin.com/in/jo%C3%A3opedro-moreira/" target="_blank" rel="noopener noreferrer">
                        <h6>João Pedro Moreira</h6>
                    </a>

                    <a href="https://www.linkedin.com/in/victor-wdfs/" target="_blank" rel="noopener noreferrer">
                        <h6>Victor Moreno</h6>
                    </a>

                    <a href="https://www.linkedin.com/in/yanxia-wu-7a9376117/" target="_blank" rel="noopener noreferrer">
                        <h6>Yanxia Wu</h6>
                    </a>


                </Col>
            </Row>
        </Container>
    </footer>


export default Footer