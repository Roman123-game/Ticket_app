import "./SignUp.css";
import { useContext } from "react";
import LoginContext from "../Login/LoginContext";
const SignUp = () => {
  const { openSignUp, setOpenSignUp } = useContext(LoginContext);
  return (
    <div className="signUp">
      <h1 className="titleSignUp"> SignUp Form</h1>
      <label>UserName</label>
      <input className="signUpInput" />
      <label>UserEmail</label>
      <input className="signUpInput" />
      <label>Password</label>
      <input className="signUpInput" />
      <label>Password</label>
      <input className="signUpInput" />
      <button className="signUpBtn" onClick={() => setOpenSignUp(!openSignUp)}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
