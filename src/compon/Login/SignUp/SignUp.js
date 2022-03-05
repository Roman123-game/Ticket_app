import "./SignUp.css";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
const SignUp = () => {
  const { setOpenSignUp } = useContext(MainContext);
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
      <button className="signUpBtn" onClick={() => setOpenSignUp(false)}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
