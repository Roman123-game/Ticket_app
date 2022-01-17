import React from "react";
import "./App.css";
import Login from "./compon/Login";
import Posts from "./compon/Posts";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route exact path="/">
         home
          </Route>
          <Route path="/posts">
          POSTS
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
