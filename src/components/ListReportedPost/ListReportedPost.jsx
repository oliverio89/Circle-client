import { AuthContext } from "../../contexts/auth.context"
import { useState, useEffect, useContext } from "react"
import postService from "../../services/post.service"
import { Row, Col } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import './ListReportedPost.css'

const ListReportedPost = () => {



    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    const loadPosts = () => {
        postService
            .getAllPostAdmin()
            .then(({ data }) => setPosts(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadPosts()
    }, [])

    let listReported = []

    posts.map(ele => {
        if (ele.reportes.length > 0) {
            listReported.push(ele)
        }
        return listReported
    }
    )



    return (
        <div className="containerReportes">

            <h1>🐇 𝐿𝒾𝓈𝓉𝒶𝒹  𝒹𝑒 𝒫🍪𝓈𝓉𝓈 𝓇𝑒𝓅🏵𝓇𝓉𝒶𝒹♡𝓈🐇</h1>
            {listReported.map(elem => {
                return (
                    <Link to={`/detalles/${elem._id}`}>
                        <Nav.Link as="div">
                            <p className="reportTitle">{elem.title}-----❌{elem.reportes.length}</p>
                        </Nav.Link>
                    </Link>

                )
            })
            }
        </div>
    )

}
export default ListReportedPost