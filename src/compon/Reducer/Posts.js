import { useState, useMemo, useContext, useReducer } from "react";
import "./Posts.css";
import { v4 as uuidv4 } from "uuid";
import Task from "../Task/Task";
import Select from "../UI/Select";
import Input from "../UI/Input";
import Button from "../UI/Button";
import MainContext from "../Context/MainContext";
import UserInfo from "../ModalWindows/UserInfo";
import Settings from "../ModalWindows/Settings";
import initialPosts from "../Data/initialPosts"
import {
  FaLaptopCode,
  FaCocktail,
  FaCartPlus,
  FaUnlockAlt,
  FaStreetView,
  FaCogs,
} from "react-icons/fa";

const Posts = (props) => {
  const { setToken } = useContext(MainContext);
  const [showInfo, setShowInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [valueInput, setValueInput] = useState("New Ticket");
  const [value, setValue] = useState("Shop");
  const [image, setImage] = useState(<FaCartPlus className="image" />);
  const [removeId, setRemoveId] = useState("0");
  
  const [state, dispatch] = useReducer(counterReducer, { posts: initialPosts });

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

  function onChangeSel(event) {
    event.preventDefault();
    setValue(event.target.value);
    if (event.target.value === "Shop") {
      setImage(<FaCartPlus className="image" />);
    } else if (event.target.value === "Tech") {
      setImage(<FaLaptopCode className="image" />);
    } else if (event.target.value === "Rest") {
      setImage(<FaCocktail className="image" />);
    }
  }

  function changInp(event) {
    event.stopPropagation();
    event.preventDefault();
    setValueInput(event.target.value);
  }

  useMemo(() => {
    console.log("cashing");
  }, []);

  return (
    <div className="posts">
      <div className="gridContainer">
        <button
          className="buttonAdd grid"
          onClick={() => setShowInfo(!showInfo)}
        >
          <FaStreetView />
        </button>
        {showInfo && <UserInfo />}
        <button
          className="buttonAdd grid"
          onClick={() => setShowSettings(!showSettings)}
        >
          <FaCogs />
        </button>
        {showSettings && <Settings />}
        <button className="buttonAdd grid" onClick={() => setToken(false)}>
          <FaUnlockAlt />
        </button>
      </div>
      <hr />
      <h1>Golden Tickets</h1>
      <div>
        {state.posts.map((item) => (
          <Task
            image={item.image}
            listName={item.listName}
            postId={item.id}
            description={item.description}
            key={uuidv4()}
            onClick={(eventId) => {
              setRemoveId(eventId.postId);
              dispatch({ type: "REMOVE_POST" });
            }}
          />
        ))}
      </div>
      <Input
        value={valueInput}
        className="input"
        type="text"
        placeholder="New Ticket"
        maxLength="24"
        onChange={changInp}
      />
      <Select className="select" onChange={onChangeSel} />
      <Button
        className="buttonAdd"
        onClick={() => dispatch({ type: "ADD_POST" })}
      />
      <h6 className="messageTotally">
        You have
        <mark className="mark"> {state.posts.length} </mark>
        tickets totally
      </h6>
    </div>
  );
};

export default Posts;