import React from 'react'
import "./Posts.css"
import Button from './Button'
const Login = (props) => {
    return (
        <div>
           < input className='input' placeholder='User Name:any' />
           < input  className='input' placeholder='Password:test1234'/>
           <Button onClick={props.onClick}/>
        </div>
    )
}



export default Login
