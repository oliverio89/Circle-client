import postService from "../../services/post.service";
import './LikeButton.css'

const LikeButton = ({ post_id, likes, loadPosts }) => {
    const addLike = () => {
        postService
            .giveLike(post_id)
            .then(() => loadPosts())
            .catch(err => console.log(err))
    }


    return (
        <>
            <button className="button" onClick={addLike}>{likes.length}Like</button>
        </>

    )
}

export default LikeButton