import Login from "./compon/Login/Login";
import Posts from "./compon/Main/Posts";
import { useState } from "react";
import MainContext from "./compon/Context/MainContext";

function App() {
  const [token, setToken] = useState(false);
  return (
    <div>
      {token ? (
        <MainContext.Provider value={{setToken}}>
          <Posts />
        </MainContext.Provider>
      ) : (
        <MainContext.Provider value={{setToken}}>
          <Login />
        </MainContext.Provider>
      )}
    </div>
  );
}
export default App;
