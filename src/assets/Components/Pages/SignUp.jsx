import { useContext, useState } from "react"
import {checkName,checkEmail,checkPassword,checkMobile,  validateForm } from "../validation.js"
import InputComponent from "../InputComponent.jsx"
import ButtomComponent from "../ButtonComponent.jsx"
import { NavLink, useNavigate } from "react-router-dom"
import "../../CSS/Signup.css"
// import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth'
import { AuthoContext } from "../Authontication.jsx"



export default function SignUp(){

    let [fdata,setFdata] = useState({fullName:"",password:"",confirmPassword:"",email:"",mobile:""})
    let [FormError,setFormError] = useState({})
    let navigateToHome = useNavigate()
    let {login} = useContext(AuthoContext)

console.log("signup");


    function updateChange({target:{value,name}}){
        setFdata({...fdata,[name]:value.trim()})
        switch(name){
            case "fullName" :{FormError.fullName =checkName(value.trim()); break;}
            case "email" :{FormError.email=checkEmail(value.trim()); break;}
            case "password" :{FormError.password=checkPassword(value.trim()); break;}
            case "mobile" :{FormError.mobile = checkMobile(value.trim()); break;}
        }     
    }

    let createAccount =  async()=>{

        const auth = getAuth();

            try{
                let data = await createUserWithEmailAndPassword(auth, fdata.email,fdata.password)
                console.log(data);
                login(fdata)
                // console.log(data.user);
                navigateToHome('/')


            }catch(err){
                console.log(err);
            }


        }
        

    let updateForm = (e)=>{
        e.preventDefault()
       
        let obj = validateForm(fdata)

        setFormError(obj)

        if(Object.keys(obj).length === 0){
            createAccount()           
        }else{
            return
        }        


    }
    

    return (    
        <div className="signup-Box" >
            <div className="formBox">
            <img src="../../public/Images/ecommerce-signup.jpg" alt="" />
            <p style={{color:"blue",fontWeight:"bold"}}>Create a new account.</p>
        <form  className="signupForm" onSubmit={updateForm}>
           
        <InputComponent name="fullName" placeholder="Full name"  type="text" onchange={updateChange} /> 
        <small style={{color:"red"}} >{FormError.fullName}</small>

        <InputComponent name="email" placeholder="Email" type="email" onchange={updateChange} /> 
        <small style={{color:"red"}} >{FormError.email}</small>

        <InputComponent name="mobile" placeholder="Mobile" type="text" onchange={updateChange} /> 
        <small style={{color:"red"}} >{FormError.mobile}</small>

        <InputComponent name="password" type="password" placeholder="password" onchange={updateChange} /> 
        <small style={{color:"red"}} >{FormError.password}</small>

        <InputComponent name="confirmPassword" placeholder="confirm password" type="password" onchange={updateChange} /> 
        <small style={{color:"red"}} >{FormError.confirmPassword}</small>

        <ButtomComponent className="createAccount">Create Account</ButtomComponent>
        <NavLink to='/login' className="log">Already have an account ?</NavLink>


        </form>
        </div>

        </div>
        
    )
}