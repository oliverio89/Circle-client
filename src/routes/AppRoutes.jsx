import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from './../pages/SignupPage/SignupPage'
import PostListPage from '../pages/PostPage/PostPage'
import PrivateRoute from "./PrivateRoute"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
import AboutusPage from "../pages/AboutusPage/AboutusPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PanelAdminPage from "../pages/PanelAdminPage/PanelAdminPage"




const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<p>Circle</p>} />
            <Route path="/acceder" element={<LoginPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/*" element={<h1>404</h1>} />

            <Route element={<PrivateRoute />}>
                <Route path="/detalles/:post_id" element={<PostDetailsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/admin" element={<PanelAdminPage />} />
                <Route path="/post" element={<PostListPage />} />
            </Route>


        </Routes>
    )
}

export default AppRoutes