import React from 'react'

import Button from './Button'
const Login = (props) => {
    return (
        <div>
        <h1>Welcome to Tickets</h1>
        <h6>Press button ot login</h6>
           < input className={props.className} placeholder='User Name' ></input>
           < input  className={props.className} placeholder='Password'/>
           <Button onClick={props.onClick}/>
        </div>
    )
}



export default Login
