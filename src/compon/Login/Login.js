import MainContext from "../Context/MainContext";
import SignUp from "./SignUp/SignUp";
import "./Login.css";
import { useCallback, useContext, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import {memo} from "react";

const Login = (props) => {
  const [userPassword, setUserPassword] = useState("");
  const { setToken, username, setUsername } = useContext(MainContext);
  const [openSignUp, setOpenSignUp] = useState(false);

  const LoginFunc= useCallback((e)=> {
    e.preventDefault();
    const removeWhiteSpaces = userPassword.split(" ").join("");
    const lowerCasePassword = removeWhiteSpaces.toLowerCase();
    const warning = <p>&#x2718;</p>;
    if (lowerCasePassword === "test1234") {
      setToken(true);
    } else {
      alert(
        ` ${warning.props.children} ${userPassword} \nIncorrect Password \nTry again`
      );
    }
  },[userPassword, setToken])

  return (
    <div className="login">
      <h2 className="welcomeMsg">Welcome to</h2>
      <h1 className="titleLogin">Tickets</h1>
      <h3 className="titleMsg">Application that keeping all your tasks organized</h3>
      <label>Username</label>
      <input className="inputLogin" minLength={3}
        onBlur={(event) => {
          console.log(event.target.value);
          setUsername(event.target.value)
     
        }}
      />
      <label>Password </label>
      <input
        className="inputLogin"
        value={props.value}
        onBlur={(event) => {
          setUserPassword(event.target.value);
        }}
      />
      <button
        className="loginBtn"
        onClick={(e) => {
          LoginFunc(e);
        }}
      >
        Login
      </button>
      <h4 className="noAccountMsg">
        No Account ?
        <button
          className="signUpBtn"
          onClick={() => setOpenSignUp(!openSignUp)}
        >
          SignUp
        </button>
      </h4>
      <h5 className="loginBottomMsg">*UserName: any *Password: test1234</h5>
      <TransitionGroup>
        <CSSTransition key={uuidv4()} timeout={500} classNames="item">
          <div>{openSignUp && <SignUp />}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default memo(Login);
