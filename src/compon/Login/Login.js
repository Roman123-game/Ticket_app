import "./Login.css";
import { useContext, useState } from "react";
import LoginContext from "./LoginContext";
import SignContext from "../SignUp/SignContext";
import SignUp from "../SignUp/SignUp";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [openSignUp, setOpenSignUp] = useState(false);
  const { setToken } = useContext(LoginContext);

  function LoginFunc(e) {
    e.preventDefault();
    e.stopPropagation();

    const removeWhiteSpaces = password.split(" ").join("");
    const lowerCasePassword = removeWhiteSpaces.toLowerCase();
    if (lowerCasePassword === "test1234") {
      setToken(true);
    } else {
      alert(`${password} \n  Not right password \n  Try again`);
    }
  }

  function updatePassword(event) {
    event.preventDefault();
    event.stopPropagation();

    setPassword(event.target.value);
  }

  return (
    <div className="login">
      <h2 className="welcomeMsg">Welcome to </h2>
      <h1 className="titleLogin"> Golden Tickets</h1>
      <h3>Application that keeping all your tasks organized</h3>
      <label>UserName</label>
      <input className="inputLogin" />
      <label>Password </label>
      <input
        className="inputLogin"
        value={props.value}
        onBlur={(event) => {
          updatePassword(event);
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
        No Account?
        <button
          className="signUpBtn"
          onClick={() => setOpenSignUp(!openSignUp)}
        >
          SignUp
        </button>
      </h4>
      <h6 className="loginBottomMsg">
        *UserName: any *Password: test1234
      </h6>
    
      <TransitionGroup>
        <CSSTransition key={uuidv4()} timeout={500} classNames="item">
          <SignContext.Provider value={{ openSignUp, setOpenSignUp }}>
            {openSignUp && <SignUp />}
          </SignContext.Provider>
        </CSSTransition>
      </TransitionGroup>
      
    </div>
  );
};

export default Login;
