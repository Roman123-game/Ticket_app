import { useState, useMemo, useContext } from "react";
import "./Posts.css";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task/Task";
import Select from "../Main/UI/Select";
import Input from "../Main/UI/Input";
import Button from "../Main/UI/Button";
import MainContext from "../Context/MainContext";
import UserInfo from "../ModalWindows/UserInfo";
import ReducerContext from "../Context/ReducerContext";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { SliderPicker } from "react-color";
import {
  FaLaptopCode,
  FaCocktail,
  FaCartPlus,
  FaUnlockAlt,
  FaStreetView,
  FaHighlighter,
  FaMoneyBillAlt
} from "react-icons/fa";

const Posts = () => {
  const {setToken,valueInput, setValueInput, setValue, setImage,setRemoveId,
  } = useContext(MainContext);
  const { state, dispatch } = useContext(ReducerContext);
  const [showInfo, setShowInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [background, setBackground] = useState("#333333");

  function onChangeSel(event) {
    event.preventDefault();
    setValue(event.target.value);
    if (event.target.value === "Shopping") {
      setImage(<FaCartPlus className="image" />);
    } else if (event.target.value === "Technology") {
      setImage(<FaLaptopCode className="image" />);
    } else if (event.target.value === "Economy") {
      setImage(<FaMoneyBillAlt className="image" />);
    }
     else {
      setImage(<FaCocktail className="image" />);
    }
  }

  function changInp(event) {
    event.stopPropagation();
    event.preventDefault();
    setValueInput(event.target.value)

  }

  useMemo(() => {
    console.log("cashing");
  }, []);

  return (
    <div className="posts" style={{ background: background }}>
      <div className="gridContainer">

        <Tippy content='Information'>
          <button
            className="buttonAdd grid"
            onClick={() => setShowInfo(!showInfo)}
          >
            <FaStreetView />
          </button>
        </Tippy>
        {showInfo && <UserInfo />}
        <Tippy content='Options'>
          <button
            className="buttonAdd grid"
            onClick={() => setShowSettings(!showSettings)}
          >
            <FaHighlighter />
          </button>
        </Tippy>
        {showSettings && <SliderPicker 
        className="colorPicker" 
        color={background} 
        onChange={updatedColor => setBackground(updatedColor.hex)} /> }
        <Tippy content='Exit'>
          <button className="buttonAdd grid" onClick={() => setToken(false)}>
            <FaUnlockAlt />
          </button>
        </Tippy>
      </div>
      <hr style={{ backgroundColor: "silver" }} />
      <h1>Digital Tickets</h1>
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
