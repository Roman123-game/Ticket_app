import React from 'react'
import Button from './Button'
import "./Posts.css";
const Login = (props) => {
  
    return (
        <div className='login'>
        <h2>Welcome to </h2>
        <h1> Golden Tickets</h1>
        <h3>Application that helping keep all your tasks organized</h3>
           < input className={props.className} placeholder='User Name'/>
           < input  className={props.className} placeholder='Password' value={props.value} 
             onChange={(event)=>props.onChange(props,event)}/>
           <Button onClick={(event)=>props.onClick(props,event)}/>
           <h6 className="loginMessage"> <i>
               *UserName: any
               *Password: test1234</i></h6>
        </div>
    )
}

export default Login
