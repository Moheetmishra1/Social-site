import { getAuth, signOut } from "firebase/auth";
import {  createContext, useState } from "react";

export let AuthoContext = createContext("Provider is not available")

export default function Authontication({children}){
    let [isLogin,setIsLogin] = useState(null)
    let auth= getAuth()
   

    let login = (data)=>{
        setIsLogin(data)
    }  
    console.log("re-render");
    
    let logout = async()=>{
        try{
            let data = await signOut(auth)
            setIsLogin(null)
        }catch(err){
            console.log(err);
        }
    }

    return <AuthoContext.Provider value={{isLogin,login,logout}} >
        {children }
    </AuthoContext.Provider>
}

