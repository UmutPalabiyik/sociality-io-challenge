import "./Post.scss"

const Post = () => {
    return(
        <div className="post">
            <div className="post__social"></div>
            <div className="post__contentiner">
                <div className="post__heading">
                    <div className="post__date"></div>
                    <div className="post__icons"></div>
                </div>
                <div className="post__content"></div>
            </div>
        </div>
    )
}

export default Post;