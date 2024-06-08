import { useContext } from "react";
import "../../CSS/Home.css"
import { AuthoContext } from "../Authontication";
import Menu from "../Menu"
import Posts from "../Posts";
import Slider from "../Slider";

export default function Home(){
    let {logout} = useContext(AuthoContext) 
    // console.log(l);


    return (
        <div className="gridBox">
            <div className="grid">
        <div className="logo">LOGO</div>
        <div className="searchBox"><div className="mag"></div>
        <div className="input"><input type="text" placeholder="Search here..." /></div>
        <div className="settingFilter"><img src="../../../public/Images/Component39.png" alt="" height="26px" width="26px" /><p className="filterText">Filters</p></div>
        
        </div>
        <div className="seller">Become a Saller</div>
        <Menu logOut={logout}/>
        <Posts />
        <Slider />
        </div>
        </div>
    )
}