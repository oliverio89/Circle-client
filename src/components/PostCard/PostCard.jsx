import './PostCard.css'
import { Button, ButtonGroup, Card } from 'react-bootstrap';

import { AuthContext } from './../../contexts/auth.context'
import { useContext } from 'react';


import { Link } from 'react-router-dom'
import postService from '../../services/post.service';

function PostCard(props) {

    const { title, imageUrl, _id, owner, fireFinalActions } = props
    const { user } = useContext(AuthContext)



    const deletePost = (post_id) => {

        postService
            .deletePost(post_id)
            .then(() => fireFinalActions())
            .catch(err => console.error(err))

    }


    return (
        <Card className="mb-4 PostCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {
                    !owner || owner != user?._id
                        ?
                        <>
                            <Link to={`/detalles/${_id}`}>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm">Ver detalles</Button>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <div className="d-grid">
                                <ButtonGroup aria-label="Basic example">
                                    <Link to={`/detalles/${_id}`}>
                                        <Button variant="dark" size="sm">Ver detalles</Button>
                                    </Link>
                                </ButtonGroup>
                                <Button variant="danger" size="sm" onClick={() => deletePost(_id)}>Eliminar</Button>
                            </div>

                        </>

                }
            </Card.Body>
        </Card>
    );
}

export default PostCard;