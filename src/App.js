import React from "react";
import "./App.css";
import Login from "./compon/Login";
import Posts from "./compon/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(false);
  const [password, setPassword] = useState("");

  function updatePassword(props, event) {
    event.stopPropagation();
    setPassword(event.target.value);
  }
  function LoginFunc(props, event) {
    event.stopPropagation();
    const removeWhiteSpaces = password.split(' ').join('');
   const lowerCasePassword = removeWhiteSpaces.toLowerCase();
    if (lowerCasePassword === "test1234") {
      setToken(true);
    } else alert("wrong password");
  }
  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                className="input"
                value={password}
                onClick={LoginFunc}
                onChange={updatePassword}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
