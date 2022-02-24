import Login from "./compon/Login/Login";
import Posts from "./compon/Reducer/Posts";
import { useState } from "react";
import MainContext from "./compon/Context/MainContext";
import {FaCartPlus} from "react-icons/fa";
function App() {
  const [token, setToken] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [valueInput, setValueInput] = useState("New Ticket");
  const [value, setValue] = useState("Shop");
  const [image, setImage] = useState(<FaCartPlus className="image" />);
  const [removeId, setRemoveId] = useState();
  if (!token) {
    return (
      <MainContext.Provider value={{ setToken, openSignUp, setOpenSignUp }}>
        <Login />
      </MainContext.Provider>
    );
  } else {
    return (
      <MainContext.Provider value={{ setToken,valueInput, setValueInput,value, 
        setValue,image, setImage,removeId, setRemoveId }}>
        <Posts />
      </MainContext.Provider>
    );
  }
}
export default App;
