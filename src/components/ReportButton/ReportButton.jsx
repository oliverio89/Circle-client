import postService from "../../services/post.service";
import './ReportButton.css'
import { AuthContext } from "../../contexts/auth.context";
import { useContext } from "react";
const ReportButton = ({ post_id, reportes, loadPosts }) => {

    const addReport = () => {
        postService
            .reportPost(post_id)
            .then(() => loadPosts())
            .catch(err => console.log(err))
    }

    const { user } = useContext(AuthContext)
    return (


        <>
            <button className="reportbutton" onClick={addReport}>
                {
                    reportes.includes(user._id) ?
                        "❌☠️"
                        :
                        "☠️？"
                }
            </button>
        </>
    )
}

export default ReportButton


