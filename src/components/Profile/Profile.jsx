import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import userService from "../../services/auth.service"

function Profile({ name, imageUrl, bio }) {

    const [user, setUser] = useState()

    const { user_id } = useParams()

    useEffect(() => {
        userService
            .getOneUser(user_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <p>{imageUrl}</p>
            <p>{name}</p>
            <p>{bio}</p>
            <Link to={`/post`}>
                <div className="d-grid">
                    <Button variant="dark" size="sm">Volver a las Publicaciones</Button>
                </div>
            </Link>
        </>
    );
}

export default Profile;