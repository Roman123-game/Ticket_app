import Login from "./compon/Login/Login";
import Posts from "./compon/Reducer/Posts";
import { useState } from "react";
import MainContext from "./compon/Context/MainContext";

function App() {
  const [token, setToken] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  if (!token) {
    return (
      <MainContext.Provider value={{ setToken, openSignUp, setOpenSignUp }}>
        <Login />
      </MainContext.Provider>
    );
  } else {
    return (
      <MainContext.Provider value={{ setToken }}>
        <Posts />
      </MainContext.Provider>
    );
  }
}
export default App;
