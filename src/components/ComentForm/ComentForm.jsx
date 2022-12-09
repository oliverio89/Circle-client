import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import commentService from '../../services/comment.service'




const ComentForm = () => {
    const [commentData, setCommentData] = useState({
        owner: '',
        description: '',
    })

    const { description } = commentData
    const handleInputChange = e => {
        const { name, value } = e.target
        setCommentData({ ...commentData, [name]: value })
    }

    return (
        <Form onSubmit>
            <Form.Group className="mb-3" controlId="description">
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" >Pubilicar tu comentario</Button>
            </div>
        </Form>

    )
}

export default ComentForm

