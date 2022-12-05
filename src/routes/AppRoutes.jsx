import { Routes, Route } from "react-router-dom"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<p>Circle</p>} />
            <Route path="/post" element={<p>Muro de publicaciónes</p>} />
            <Route path="/profile" element={<p>perfil</p>} />
            <Route path="/admin" element={<p>Panel de admin</p>} />
            <Route path="/aboutus" element={<p>Contacta con Nosotros</p>} />
            <Route path="/acceder" element={<p>perfil</p>} />
            <Route path="/perfil" element={<p>perfil</p>} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes