import Login from "./compon/Login/Login";
import Posts from "./compon/Posts/Posts";
import { useState, useReducer } from "react";
import MainContext from "./compon/Context/MainContext";
import { FaCartPlus } from "react-icons/fa";
import ReducerContext from "./compon/Context/ReducerContext";
import { v4 as uuidv4 } from "uuid";
import InitialPosts from "./compon/Data/InitialPosts";

function App() {
  const [token, setToken] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [valueInput, setValueInput] = useState("New Ticket");
  const [value, setValue] = useState("Shop");
  const [image, setImage] = useState(<FaCartPlus className="image" />);
  const [removeId, setRemoveId] = useState();

  const [state, dispatch] = useReducer(counterReducer, { posts: InitialPosts });

  function counterReducer(state, action) {
    switch (action.type) {
      case "ADD_POST":
        return {
          posts: [
            ...state.posts,
            {
              id: uuidv4(),
              image: image,
              listName: value,
              description: valueInput,
            },
          ],
        };
      case "REMOVE_POST":
        return { posts: state.posts.filter((itm) => itm.id !== removeId) };
      default:
        return console.log("default");
    }
  }
  return (
    <div>
      {token ? (
        <MainContext.Provider value={{ setToken, openSignUp, setOpenSignUp }}>
          <Login />
        </MainContext.Provider>
      ) : (
        <MainContext.Provider
          value={{
            setToken,
            valueInput,
            setValueInput,
            value,
            setValue,
            image,
            setImage,
            removeId,
            setRemoveId,
          }}
        >
          <ReducerContext.Provider value={{ state, dispatch }}>
            <Posts />
          </ReducerContext.Provider>
        </MainContext.Provider>
      )}
    </div>
  );
}
export default App;
