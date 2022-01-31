import React from 'react'
import Button from './Button'
import "./Posts.css";
const Login = (props) => {
  
    return (
        <div className='login'>
        <h3>Welcome to </h3>
        <h1> Golden Tickets</h1>
        <h4>Application that helping keep all your tasks organized</h4>
           < input className={props.className} placeholder='User Name'/>
           < input  className={props.className} placeholder='Password' value={props.value} 
             onChange={(event)=>props.onChange(props,event)}/>
           <Button onClick={(event)=>props.onClick(props,event)}/>
           <h5 className="loginMessage"> <i>
               *UserName: any
               *Password: test1234</i></h5>
        </div>
    )
}

export default Login
