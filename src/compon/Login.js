import React from 'react'

import "./Login.css";
const Login = (props) => {
  
    return (
        <div className='login'>
        <h2 className="welcomeMsg">Welcome to </h2>
        <h1 className="titleLogin"> Golden Tickets</h1>
        <h3>Application that keeping all your tasks organized</h3>
        <label>UserName</label>
           < input className="inputLogin"/>
           <label>Password </label>
           < input className="inputLogin" value={props.value} 
             onChange={(event)=>props.onChange(props,event)}/>
           <button className="signUpBtn" onClick={(event)=>props.onClick(props,event)}>Login</button>
           <h4 className="signUpMsg"> No Account? 
           <a href={"https://tickets-rb.netlify.app/signup"} className="signUpLink">SignUp</a>
           </h4>
           <h6 className="loginMsg"> <i>
               *UserName: any
               *Password: test1234</i></h6>
        </div>
    )
}

export default Login;
