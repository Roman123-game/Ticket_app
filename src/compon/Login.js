import React from 'react'

import Button from './Button'
const Login = (props) => {
    return (
        <div>
           < input className={props.className} placeholder='Welcome to Tickets' ></input>
           < input  className={props.className} placeholder='Press button to Login'/>
           <Button onClick={props.onClick}/>
        </div>
    )
}



export default Login
