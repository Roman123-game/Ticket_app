import Login from "./compon/Login/Login";
import Posts from "./compon/Posts/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainContext from "./compon/Context/MainContext";


function App() {
  const [token, setToken] = useState(false);
  const [openSignUp, setOpenSignUp ] = useState(false);
  if (!token) {
    return (
      <MainContext.Provider value={{ setToken, openSignUp, setOpenSignUp}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>
      </MainContext.Provider>
    );
  } else {
    return (
      <MainContext.Provider value={{ setToken, openSignUp, setOpenSignUp }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    );
  }
}
export default App;
