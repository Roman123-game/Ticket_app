import React from 'react'

import Button from './Button'
const Login = (props) => {
    return (
        <div>
        <h3>Welcome to </h3>
        <h1> Golden Tickets</h1>
        <h5>Application that helping keep all your task organized</h5>
           < input className={props.className} placeholder='User Name' />
           < input  className={props.className} placeholder='Password'/>
           <Button onClick={props.onClick}/>
           <h6> <i>*Press button to login</i></h6>
        </div>
    )
}

export default Login
