import { useContext,  useRef,  useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";
import "../../CSS/Login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthoContext } from "../Authontication";
import {checkEmail,checkPassword} from "../validation"



export default function Login(){
    let [user,setUser] = useState({email:"",password:""})
    let {login} = useContext(AuthoContext)
    let loginForm = useRef("")
    let loginError = useRef("")

    let navigateToHome = useNavigate()
    

    function updateChange({target:{name,value}}){
        setUser({...user,[name]:value})
    }

    let loginAccount = async (e)=>{
        e.preventDefault()
        let auth = getAuth()
        let er=checkEmail(user.email)
        console.log(er);
        if(er){
            loginForm.current.style="box-shadow:1px 2px 8px red"
            loginError.current.innerText=er;

            setTimeout(()=>{
                loginForm.current.style="box-shadow:none"
            loginError.current.innerText=""
    
            },3000)

            return;
            
        }

        er= checkPassword(user.password)
        if(er){
            loginForm.current.style="box-shadow:1px 2px 8px red"
            loginError.current.innerText=er;
            setTimeout(()=>{
                loginForm.current.style="box-shadow:none"
            loginError.current.innerText=""
    
            },3000)
            return;

        }


        try{
           let data = await signInWithEmailAndPassword(auth,user.email,user.password)
           login(user)
           navigateToHome('/')


        }catch(err){
            loginForm.current.style="box-shadow:1px 4px 8px red"
            loginError.current.innerText="Email or password is wrong"
            console.log("Error is ",err);

        }
        setTimeout(()=>{
            loginForm.current.style="box-shadow:none"
        loginError.current.innerText=""

        },3000)

    }

    

    return (
        <div className="login-Box">

        <form onSubmit={loginAccount} ref={loginForm} className="login-form">
            <img src="../../../public/images/login-image.jpg" alt="" style={{borderRadius:"10%",height:"200px",width:"266px",marginTop:"-2px"}} />
            <div className="loginError" ref={loginError} style={{color:"red"}}></div>
            <p className="login-head">Login</p>
            <InputComponent name="email" placeholder="Enter Email" type="email" onchange={updateChange} />
            <InputComponent name="password" placeholder="Enter password" type="password" onchange={updateChange} />
            <ButtonComponent className="login-button" >Login</ButtonComponent>
            <NavLink to='/signup' className="alreadyAc">Don't have an account</NavLink>
       
        </form>
        </div>
    )
}