import React from 'react'
import { GoogleLogin } from 'react-google-login'
import './GoogleLoginComp.css'

const clientId = "104231836749-h4u7488kujnf42obp6dmbok7omn94clu.apps.googleusercontent.com"

const onSuccess =(res) =>{
  console.log("succes login ",res.rofileObj)
} 

const onFailure =(res) =>{
  console.log("failure login ",res)
} 

const GoogleLoginComp = () => {
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