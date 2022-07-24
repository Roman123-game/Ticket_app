import "./SignUp.css";
import React from "react";

const SignUp = React.memo(() => {
  return (
    <div className="signUp">
      <h1 className="titleSignUp">SignUp Form</h1>
      <label>UserName</label>
      <input className="signUpInput" />
      <label>UserEmail</label>
      <input className="signUpInput" />
      <label >Password .</label>
      <input className="signUpInput" />
      <label> Password..</label>
      <input className="signUpInput" />
      <button className="signUpBtn">SignUp </button>
    </div>
  );
});

export default SignUp;
