import React from 'react'
import { GoogleLogin } from 'react-google-login'
import './GoogleLoginComp.css'
import {  useContext} from "react";
import MainContext from "../../Context/MainContext";


const GoogleLoginComp = () => {
  const clientId = "464357049267-2j6r2ee11mg2nl9gugn4qg7d9fn1hvj2.apps.googleusercontent.com"

  const onSuccess =(res) =>{
    console.log("succes login ",res.rofileObj)
    setToken(true)
  } 
  
  const onFailure =(res) =>{
    console.log("failure login ",res)
  } 

  const { setToken, username, setUsername } = useContext(MainContext);

  return (
    <div className="signInButton">
    <GoogleLogin
    className="googleLogin"
    clientId={clientId}
    buttonText='Login'
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy='single_host_origin'
    isSignedIn={true}
    />
    
    
    </div>
  )
}

export default GoogleLoginComp