import React from 'react'
import "./SignUp.css";
const  SignUp = (props) => {
  
    return (
        <div className='signUp'>
        <h1 className="titleSignUp"> SignUp Form</h1>
        <label>UserName</label>
           < input className="signUpInput"/>
           <label>Password </label>
           < input className="signUpInput" />
           <button className="signUpBtn">SignUp</button>
           <h4 className="signUpMsg">Login Page
           <a href={"/signup"} className="backToLogin">Login</a>
           </h4>
           <h5 className="commentMsg"> <i>for demonstration purpose only</i></h5>
        </div>
    )
}

export default SignUp;
