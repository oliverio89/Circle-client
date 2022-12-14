import { Container, Row, Col, Carousel } from "react-bootstrap"
import AboutusForm from "../../components/AboutusForm/AboutusForm"
import './HomePage.css'
import Footer from "../../components/Footer/Footer"

const HomePage = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item className='IndexCarousel'>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671034774/fondo_background_mtmhsm.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='IndexCarousel'>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671038105/background_gris_marker_hq9isc.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='IndexCarousel'>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671038084/background_color_lc02r6.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Footer />

        </>
    )
}

export default HomePage

