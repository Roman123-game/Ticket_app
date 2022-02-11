import React from 'react'

import "./Login.css";
const Login = (props) => {
  
    return (
        <div className='login'>
        <h2>Welcome to </h2>
        <h1 className="welcomeMsg"> Golden Tickets</h1>
        <h3>Application that helping keep all your tasks organized</h3>
           < input className="inputLogin" placeholder='User Name'/>
           < input className="inputLogin"  placeholder='Password' value={props.value} 
             onChange={(event)=>props.onChange(props,event)}/>
           <button className="loginBtn" onClick={(event)=>props.onClick(props,event)}>Login</button>
           <h4 className="signUpMsg"> No Account? 
           <button className="loginBtn">SignUp</button>
           </h4>
           <h6 className="loginMsg"> <i>
               *UserName: any
               *Password: test1234</i></h6>
        </div>
    )
}

export default Login;
