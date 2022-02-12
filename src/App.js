import React from "react";
import "./App.css";
import Login from "./compon/Login";
import Posts from "./compon/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SignUp from "./compon/SignUp";
import LoginContext from "./compon/LoginContext";

function App() {
  const [token, setToken] = useState(false);

  if (!token) {
    return (
      <BrowserRouter>
        <LoginContext.Provider value={{ token, setToken }}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </LoginContext.Provider>
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
