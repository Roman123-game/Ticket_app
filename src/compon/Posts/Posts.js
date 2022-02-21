import { useState, useMemo, useContext } from "react";
import "./Posts.css";
import { v4 as uuidv4 } from "uuid";
import Task from "../Task/Task";
import Select from "../UI/Select";
import Input from "../UI/Input";
import Button from "../UI/Button";
import LoginContext from "../Login/LoginContext";
import {
  FaLaptopCode,
  FaCocktail,
  FaCartPlus,
  FaUnlockAlt,
  FaStreetView,
  FaCogs,
} from "react-icons/fa";

import UserInfo from "../UserInfo/UserInfo";
import Settings from "../Settings/Settings";

const Posts = (props) => {
  const { setToken } = useContext(LoginContext);
  const [showInfo, setShowInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [valueInput, setValueInput] = useState("New Ticket");
  const [value, setValue] = useState("Shop");
  const [image, setImage] = useState(<FaCartPlus className="image" />);
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      image: <FaLaptopCode className="image" />,
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      image: <FaCocktail className="image" />,
      listName: "Rest",
      description: "Walk 7 km",
    },
    {
      id: uuidv4(),
      image: <FaCartPlus className="image" />,
      listName: "Shop",
      description: "Buy Orange",
    },
    {
      id: uuidv4(),
      image: <FaLaptopCode className="image" />,
      listName: "Tech",
      description: "Learn Angular",
    },
  ]);

  function remove(props) {
    console.log("remove function");
    const afterFilter = posts.filter((val) => val.id !== props.postId);
    setPosts(afterFilter);
  }
  function onChangeSel(event) {
    event.stopPropagation();
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
  function Add() {
    setImage(image);
    setPosts([
      ...posts,
      { id: uuidv4(), image: image, listName: value, description: valueInput },
    ]);
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
      <hr className="hr" />
      <h1>Golden Tickets</h1>
      {posts.length ? (
        <div>
          {posts.map((item) => (
            <Task
              image={item.image}
              key={item.id}
              remove={remove}
              listName={item.listName}
              postId={item.id}
              description={item.description}
            />
          ))}
        </div>
      ) : (
        <div className="noTasks">Add Your First Ticket</div>
      )}
      <Input
        value={valueInput}
        className="input"
        type="text"
        placeholder="New Ticket"
        onChange={changInp}
        maxLength="29"
      />

      <Select className="select" onChange={onChangeSel} />
      <Button onClick={Add} className="buttonAdd" type="text" />
      <h6 className="messageTotally">
        You have<mark className="mark"> {posts.length} </mark>tickets totally
      </h6>
    </div>
  );
};

export default Posts;
