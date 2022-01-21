import React from 'react'
import Button from './Button'

const Login = (props) => {
  
    return (
        <div>
        <h3>Welcome to </h3>
        <h1> Golden Tickets</h1>
        <h5>Application that helping keep all your task organized</h5>
           < input className={props.className} placeholder='User Name'/>
           < input  className={props.className} placeholder='Password' value={props.value} 
             onChange={(event)=>props.onChange(props,event)}/>
           <Button onClick={(event)=>props.onClick(props,event)}/>
           <h6> <i>
               *UserName: any
               *Password: test1234</i></h6>
        </div>
    )
}

export default Login
