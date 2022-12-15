import { Container, Row, Col, Carousel } from "react-bootstrap"
import './HomePage.css'
import Footer from "../../components/Footer/Footer"

const HomePage = () => {

    return (
        <>
            <img
                className="d-block w-100 h-100"
                src="https://res.cloudinary.com/dtcpa2jtc/image/upload/v1671034774/fondo_background_mtmhsm.jpg"
                alt="First slide"
            />

            <Footer />

        </>
    )
}

export default HomePage

