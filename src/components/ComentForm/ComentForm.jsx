import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import commentService from '../../services/comment.service'
import ErrorMessage from "../ErrorMessage/ErrorMessage"



const ComentForm = ({ closeModal, loadPosts, post_id }) => {
    const [commentData, setCommentData] = useState({
        owner: '',
        description: '',
    })
    const { description } = commentData
    const handleInputChange = e => {
        const { name, value } = e.target
        setCommentData({ ...commentData, [name]: value })
    }

    const [errors, setErrors] = useState([])

    const handleCommitSubmit = e => {
        e.preventDefault()
        commentService
            .saveComment(commentData, post_id)
            .then(() => {
                loadPosts()
                closeModal()
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errorMessages)
            })
    }

    return (
        <Form onSubmit={handleCommitSubmit}>
            <Form.Group className="mb-3" controlId="description">
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>
            {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}

            <div className="d-grid">
                <Button variant="dark" type="submit" >Pubilicar tu comentario</Button>
            </div>
        </Form>

    )
}

export default ComentForm

