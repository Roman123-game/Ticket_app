import React from 'react'
import "./Posts.css"
import Button from './Button'
const Login = (props) => {
    return (
        <div>
           < input className='input' placeholder='Welcome' />
           < input  className='input' placeholder='Press button to Login'/>
           <Button onClick={props.onClick}/>
        </div>
    )
}



export default Login
