import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/SignupPage/LoginPage/LoginPage"
import SignupPage from './../pages/SignupPage/SignupPage'
import PostListPage from './../pages/post/postPage'




const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<p>Circle</p>} />
            <Route path="/post" element={<PostListPage />} />
            <Route path="/profile" element={<p>perfil</p>} />
            <Route path="/admin" element={<p>Panel de admin</p>} />
            <Route path="/aboutus" element={<p>Contacta con Nosotros</p>} />
            <Route path="/acceder" element={<LoginPage />} />
            <Route path="/*" element={<h1>404</h1>} />
            <Route path="/registro" element={<SignupPage />} />
            {/* <Route path="/registro" element={<p>HIIIII</p>} /> */}
        </Routes>
    )
}

export default AppRoutes