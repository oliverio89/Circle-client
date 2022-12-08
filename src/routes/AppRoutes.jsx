import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from './../pages/SignupPage/SignupPage'
import PostListPage from '../pages/PostPage/PostPage'
import PrivateRoute from "./PrivateRoute"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
import AboutusPage from "./../pages/AboutusPage/AboutusPage"





const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<p>Circle</p>} />
            <Route path="/post" element={<PostListPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/acceder" element={<LoginPage />} />
            <Route path="/*" element={<h1>404</h1>} />
            <Route path="/registro" element={<SignupPage />} />
            {/* <Route path="/registro" element={<p>HIIIII</p>} /> */}

            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<p>Perfil</p>} />
                <Route path="/admin" element={<p>Panel de admin</p>} />
                <Route path="/post" element={<PostListPage />} />
            </Route>


        </Routes>
    )
}

export default AppRoutes