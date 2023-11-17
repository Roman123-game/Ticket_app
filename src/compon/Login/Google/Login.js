import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId = "611336744283-pb1u0guaj2erfceptjpu19lndc7j7j9p.apps.googleusercontent.com"

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