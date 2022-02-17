import React from "react";
import "./App.css";
import Login from "./compon/Login";
import Posts from "./compon/Posts/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginContext from "./compon/LoginContext";

function App() {
  const [token, setToken] = useState(false);

  if (!token) {
    return (
      <BrowserRouter>
        <LoginContext.Provider value={{  setToken }}>
          
          <Routes>
            <Route path="/" element={<Login/>} />
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <LoginContext.Provider value={{ setToken }}>
        <Routes>
          <Route path="/" element={<Posts/>} />
        </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    );
  }
}
export default App;
