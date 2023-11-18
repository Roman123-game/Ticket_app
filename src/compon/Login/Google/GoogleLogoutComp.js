import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = "104231836749-h4u7488kujnf42obp6dmbok7omn94clu.apps.googleusercontent.com"

const onLogoutSuccess =(res) =>{
  console.log("succes logout ")
} 



const GoogleLogoutComp = () => {
  return (
    <div className="signInButton">
    <GoogleLogout
    clientId={clientId}
    buttonText='Logout'
    onLogoutSuccess={onLogoutSuccess}
    cookiePolicy='single_host_origin'
    isSignedIn={true}
    />
    
    
    </div>
  )
}

export default GoogleLogoutComp