import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from './../pages/SignupPage/SignupPage'
<<<<<<< HEAD
import PostListPage from '../pages/PostPage/PostPage'
=======
import PostListPage from './../pages/post/postPage'
import PrivateRoute from "./PrivateRoute"

>>>>>>> 335e0d07a72487dff01e5fb0e309a44eb3dbd75a




const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<p>Circle</p>} />
            <Route path="/post" element={<PostListPage />} />
            <Route path="/profile" element={<PrivateRoute />} />
            <Route path="/aboutus" element={<p>Contacta con Nosotros</p>} />
            <Route path="/acceder" element={<LoginPage />} />
            <Route path="/*" element={<h1>404</h1>} />
            <Route path="/registro" element={<SignupPage />} />
<<<<<<< HEAD
=======
            {/* <Route path="/registro" element={<p>HIIIII</p>} /> */}

            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<p>Perfil</p>} />
                <Route path="/admin" element={<p>Panel de admin</p>} />
            </Route>


>>>>>>> 335e0d07a72487dff01e5fb0e309a44eb3dbd75a
        </Routes>
    )
}

export default AppRoutes