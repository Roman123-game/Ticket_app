import React from "react";
import "./App.css";
import Login from "./compon/Login";
import Posts from "./compon/Posts";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      Hello Word
      {/* <BrowserRouter>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </BrowserRouter> */}
    </div>
  );
}
export default App;
