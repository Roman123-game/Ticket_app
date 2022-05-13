import MainContext from "../Context/MainContext";
import SignUp from "./SignUp/SignUp";
import "./Login.css";
import { useContext, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

const Login = (props) => {
  const [userPassword, setUserPassword] = useState("");
  const { setToken } = useContext(MainContext);
  const [openSignUp, setOpenSignUp] = useState(false);

  function LoginFunc(e) {
    e.preventDefault();
    const removeWhiteSpaces = userPassword.split(" ").join("");
    const lowerCasePassword = removeWhiteSpaces.toLowerCase();
    const warning = <div>&#x1F6AB;</div>;
    if (lowerCasePassword === "") {
      setToken(true);
    } else {
      alert(
        ` ${warning.props.children} ${userPassword} \nIncorrect Password \nTry again`
      );
    }
  }

  return (
    <div className="login">
      <h2 className="welcomeMsg">Welcome to</h2>
      <h1 className="titleLogin">Tickets</h1>
      <h3>Application that keeping all your tasks organized</h3>
      <label>Username</label>
      <input className="inputLogin" />
      <label>Password </label>
      <input
        className="inputLogin"
        value={props.value}
        onChange={(event) => {
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
      <h4 className="signUpMsg">
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
};

export default Login;
