import { useState, useContext, useReducer } from "react";
import "./Posts.css";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task/Task";
import  Select from "../Main/UI/Select";
import Input from "../Main/UI/Input";
import Button from "../Main/UI/Button";
import CloseButton from "../Main/UI/CloseButton";
import MainContext from "../Context/MainContext";
import UserInfo from "../ModalWindows/UserInfo";
import Data from "../Data/Data";
import PostsReducer from "../Reducer/PostsReducer";
import newPostsReducer from "../Reducer/newPostsReducer";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { SliderPicker } from "react-color";
import {
  FaLaptopCode,
  FaCocktail,
  FaCartPlus,
  FaUnlockAlt,
  FaStreetView,
  FaPalette,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { memo } from "react";

const Posts = () => {
  const [toggleGlobalPosts, setToggleGlobalPosts] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [background, setBackground] = useState("#0b2545");
  const [image, setImage] = useState(<FaCartPlus className="image" />);
  const [value, setValue] = useState("Shopping");
  const [valueInput, setValueInput] = useState("Please add New Ticket ");
  const { setToken, username } = useContext(MainContext);
  const [state, dispatch] = useReducer(PostsReducer, { posts: Data });
  const [newPosts, newDispatch] = useReducer(newPostsReducer, {newPosts: Data,});

  function onChangeSelect(event) {
    event.preventDefault();
    const targetValue = event.target.value;
    setValue(targetValue);
    if (targetValue === "Shopping") {
      setImage(<FaCartPlus className="image" />);
    } else if (targetValue === "Technology") {
      setImage(<FaLaptopCode className="image" />);
    } else if (targetValue === "Economy") {
      setImage(<FaMoneyBillAlt className="image" />);
    } else {
      setImage(<FaCocktail className="image" />);
    }
  }

  async function translate(currentPost) {
    const options = {
      method: 'POST',
      url: 'http://sery.eu-4.evennode.com/api/products',
      body: {
        name: currentPost
      }
    };


  }
  function Send(e){
    setToken(false);
    translate(e.target.value)

  }
  return (
    <div className="posts" style={{ background: background }}>
      <div className="gridContainer">
      <h1 className="digital">Digital Tickets</h1>
        <Tippy content="Information">
          <button className="buttonAdd" onClick={() => setShowInfo(!showInfo)}>
            <FaStreetView />
          </button>
        </Tippy>
        {showInfo && <UserInfo />}
        <Tippy content="Options">
          <button
            className="buttonAdd"
            onClick={() => setShowSettings(!showSettings)}
          >
            <FaPalette />
          </button>
        </Tippy>
        {showSettings && (
          <SliderPicker
            className="colorPicker"
            style={{ margin: "0" }}
            color={background}
            onChange={(updatedColor) => setBackground(updatedColor.hex)}
          />
        )}
        <Tippy content="Exit">
          <button className="buttonAdd" onClick={(e) => Send(e)}>
            <FaUnlockAlt />
          </button>
        </Tippy>
      </div>
      <hr className="hr" />
      <div>
        {state.posts.map((item) => (
          <Task
            username={username}
            image={item.image}
            listName={item.listName}
            postId={item.id}
            description={item.description}
            key={uuidv4()}
            clickRemoveBtn={(eventId) => {
              dispatch({ type: "REMOVE_POST", payload: eventId.postId });
            }}
            clickEditBtn={(ev) => {
              const edit = prompt("Enter new value", ev.description);
              dispatch({
                type: "EDIT_POST",
                payload: { edit, ev },
              });
            }}
            clickGlobeBtn={(ev) => {
              newDispatch({
                type: "GLOBE_POST",
                payload: ev.description,
              });
              setToggleGlobalPosts(true);
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
        onChange={(e) => setValueInput(e.target.value)}
      />
      <Select className="select" onChange={onChangeSelect} />
      <Button
        className="buttonAdd"
        onClick={() =>
          dispatch({
            type: "ADD_POST",
            payload: {
              image: image,
              value: value,
              valueInput: valueInput,
              username: username,
            },
          })
        }
      />
      <h6 className="messageTotally">
        You have
        <mark className="mark"> {state.posts.length} </mark>
        tickets totally
      </h6>
      {toggleGlobalPosts && (
        <div>
          {console.log(newPosts)}
          <hr className="hr" />
          <CloseButton className="closeButton" onClick={() => {
              newDispatch({
                type: "RETURN_POST",
              });
              setToggleGlobalPosts(false);
            }}></CloseButton>
          {newPosts.newPosts.map((item) => (
            <Task
              username={item.username}
              image={item.image}
              listName={item.listName}
              postId={item.id}
              description={item.description}
              key={uuidv4()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Posts);
