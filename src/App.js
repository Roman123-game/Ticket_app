import React from "react";
import "./App.css";
import Login from "./compon/Login";
import Posts from "./compon/Posts";
import { BrowserRouter, Route,  Routes,} from "react-router-dom";

function App() {



  return (
 
      <BrowserRouter>

       <Routes>
       <Route path ="/" index element={<Posts/>} />
       <Route path="/Login" element={<Login />}/>
     
       </Routes>
      </BrowserRouter>

  );
}
export default App;
