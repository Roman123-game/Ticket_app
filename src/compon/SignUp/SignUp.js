import React from 'react'
import "./SignUp.css";
import { useContext } from "react";
import SignContext from "./SignContext";
const  SignUp = () => {
    const {openSignUp ,setOpenSignUp } = useContext(SignContext);
    return (
        <div className='signUp'>
        <h1 className="titleSignUp"> SignUp Form</h1>
        <label>UserName</label>
           < input className="signUpInput"/>
           <label>UserEmail</label>
           < input className="signUpInput"/>
           <label>Password</label>
           < input className="signUpInput"/>
           <label>Password</label>
           < input className="signUpInput" />
           <button className="signUpBtn" onClick={()=>setOpenSignUp(!openSignUp)}>SignUp</button>
        </div>
    )
}

export default SignUp;
