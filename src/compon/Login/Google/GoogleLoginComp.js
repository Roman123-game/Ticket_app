import React from 'react'
import { GoogleLogin } from 'react-google-login'
import './GoogleLoginComp.css'
import {  useContext} from "react";
import MainContext from "../../Context/MainContext";


const GoogleLoginComp = () => {
  const clientId = "104231836749-h4u7488kujnf42obp6dmbok7omn94clu.apps.googleusercontent.com"

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