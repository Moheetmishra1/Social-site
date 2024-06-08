import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ButtonComponent from "./ButtonComponent";
import "../CSS/Navbar.css"
import { AuthoContext } from "./Authontication";


export default function Navbar(){

    let {isLogin} = useContext(AuthoContext)

    return (<>
        {!isLogin && <>  <div className="navbar">
        <NavLink to="/" >Home</NavLink>
            <NavLink to="/login" >Login</NavLink>
            <NavLink to="/signup" >Registration</NavLink>  

        </div>
        </>}
        </>
    )
}