import "../CSS/Post.css"

export default function Post({profilePic,pname,pid,desc,likes,comments,shares,postPics}){

    return (
        <div className="singlePost">
            <div className="postSection1">
                <div className="pPic-name">
                        <img src={profilePic} alt="" />
                        <div className="namesID">
                            <p className="pName">{pname}</p>
                            <p className="nameId">@{pid}</p>
                        </div>
                    </div>
                        <div className="symbol">⁝</div>
                </div>

                <div className="desc">{desc}<span style={{color:"#FF5E8A",fontSize:"14px"}}>Read More</span></div>

                <div className="postPic">
                    <img className="postPic1" src={postPics} alt="" />
                    <img className="postLike" src="../../../public/Images/heart2.png" alt="" />
                </div>

                <div className="likesDetails">
                    <div className="l1"><img src="../../../public/Images/heart3.png" alt=""  /> <p>{likes}</p></div>
                    <div className="l2"><img src="../../../public/Images/comment.png" alt="" /> <p>{comments}</p></div>
                    <div className="l3"><img src="../../../public/Images/share.png" alt="" /> <p>{shares}</p></div>
                </div>
        </div>

    )
}