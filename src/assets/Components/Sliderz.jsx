import "../CSS/Sliderz.css"
export default function Sliderz({backPic,profilePic,pname,pid}){
console.log(backPic,profilePic);
    return (
        <div className="sliderz" style={{backgroundImage: `url(${backPic})`,backgroundSize:"100% 100%"}} >
           
           <div className="green"></div>
           <div className="pdetails"> <img src={profilePic} alt="" />
                <div><p>{pname}</p>
                <p>{pid}</p>
                </div>

           </div>
            
        </div>
    )
}