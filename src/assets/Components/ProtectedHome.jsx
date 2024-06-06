import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthoContext } from "./Authontication";


export default function ProtectedHome({children}){
    let {isLogin} = useContext(AuthoContext)
    // console.log(mm);
    
    if(isLogin){
        return <>{children}</>
    }else{

        return <Navigate to='/login' />
    }

}