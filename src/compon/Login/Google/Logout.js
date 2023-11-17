import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = "611336744283-pb1u0guaj2erfceptjpu19lndc7j7j9p.apps.googleusercontent.com"

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