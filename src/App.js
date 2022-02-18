import React from "react";
import "./App.css";
import Login from "./compon/Login/Login";
import Posts from "./compon/Posts/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginContext from "./compon/Login/LoginContext";
import SignContext from "./compon/SignUp/SignContext";

function App() {
  const [token, setToken] = useState(false);

  if (!token) {
    return (
      <LoginContext.Provider value={{ setToken }}>
        <SignContext.Provider value ={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
        </SignContext.Provider>
      </LoginContext.Provider>
    );
  } else {
    return (
      <LoginContext.Provider value={{ setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    );
  }
}
export default App;
