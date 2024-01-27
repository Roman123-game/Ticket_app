import Login from "./compon/Login/Login";
import Posts from "./compon/Main/Posts";
import { useState } from "react";
import MainContext from "./compon/Context/MainContext";
import {memo} from "react";



function App() {
  const [token, setToken] = useState(false);
 const [username, setUsername] = useState("")
  return (
        <MainContext.Provider value={{setToken,setUsername, username}}>
        {token ? <Posts/> :    <Login/>}
        </MainContext.Provider>
  );
}
export default memo(App);
