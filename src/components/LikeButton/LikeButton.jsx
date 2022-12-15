import postService from "../../services/post.service";
import './LikeButton.css'
import { AuthContext } from "../../contexts/auth.context";
import { useContext } from "react";


const LikeButton = ({ post_id, likes, loadPosts }) => {
    const addLike = () => {
        postService
            .giveLike(post_id)
            .then(() => loadPosts())
            .catch(err => console.log(err))
    }


    const quitLike = () => {
        postService
            .deleteLike(post_id)
            .then(() => loadPosts())
            .catch(err => console.log(err))

    }

    const { user } = useContext(AuthContext)

    return (
        likes.includes(user._id) ?
            <>
                <button className="dislikeBtn" onClick={quitLike}>
                    💖{likes.length}
                </button>
            </>
            :
            <>
                <button className="likeBtn" onClick={addLike}>
                    🤍{likes.length}
                </button>
            </>
    )



}

export default LikeButton


