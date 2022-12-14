import { AuthContext } from "../../contexts/auth.context"
import { useState, useEffect, useContext } from "react"
import postService from "../../services/post.service"
import { Row, Col } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


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


    console.log("IMMMMMM", posts)
    posts.map(ele => {
        if (ele.reportes.length > 0) {
            listReported.push(ele)
        }
        return listReported
    }
    )



    return (
        <>

            <h1>Listado de Posts reportados</h1>
            {listReported.map(elem => {
                return (
                    <Link to={`/detalles/${elem._id}`}>
                        <Nav.Link as="div">
                            <p>{elem.title}-----❌{elem.reportes.length}</p>
                        </Nav.Link>
                    </Link>

                )
            })
            }
        </>
    )

}
export default ListReportedPost