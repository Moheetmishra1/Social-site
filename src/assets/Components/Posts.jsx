import {usersPost} from "../Profiles"
import Post from "./Post"
import "../CSS/Posts.css"
import SalesList from "./SalesList";


export default function Posts(){

console.log(usersPost);
    return (
        <div className="mainPost">
        {usersPost.map(({profilePic,pname,pid,postPics,likes,comments,shares,desc},index)=>{
            return (
        <Post key={index} profilePic={profilePic} pname={pname} pid={pid} desc={desc} postPics={postPics} likes={likes} comments={comments} shares={shares} />
            )
      })}

      <SalesList />
       
        </div>
    )
}