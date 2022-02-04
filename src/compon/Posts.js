import React from "react";
import { useState, useMemo } from "react";
import "./Posts.css";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import {FaImage, FaAdversal, FaAccessibleIcon, FaAccusoft} from "react-icons/fa";


const Posts = () => {
  const [valueInput, setValueInput] = useState("New Ticket");
  const [newPost, setNewPost] = useState({});
  const [value, setValue] = useState("Shop");
  const [image, setImage] = useState(<FaImage className="image"/>);
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      image: <FaImage className="image"/>,
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      image: <FaImage className="image"/>,
      listName: "Tech",
      description: "Learn React.js",
    },

    {
      id: uuidv4(),
      image: <FaImage className="image"/>,
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      image: <FaImage className="image"/>,
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      image: <FaImage className="image"/>,
      listName: "Tech",
      description: "Learn React.js",
    },
  ]);
  function remove(props) {
    console.log("remove function");
    const afterFilter = posts.filter((val) => val.id !== props.postId);
    setPosts(afterFilter);
  }
  function onChangeSel(event) {
    setValue(event.target.value);
     if(value === "Shop"){
    setImage (<FaAdversal className="image"/>);
    console.log("tech")
     }
     else if(value === "Tech"){
      setImage (<FaAccessibleIcon className="image"/>);
     }
     else if(value === "Rest"){
      setImage (<FaAccusoft className="image"/>);
     }
     else {
      setImage (<FaImage className="image"/>);
     }
  }
  function changInp(event) {
    event.stopPropagation();
    setValueInput(event.target.value);
  }
  function Add() {
    // setImage (<FaLaptopCode className ="image"/>);
    setNewPost({});
    setPosts([
      ...posts,
      { ...newPost, id: uuidv4(),image : image ,listName: value, description: valueInput },
    ]);
  }
  useMemo(() => {
    console.log("cashing");
  }, []);

  return (
    <div className="Posts">
      <h1>
      Golden Tickets</h1>
      {posts.length ? (
        <div>
          {posts.map((item) => (
            <Task
              image = {item.image}
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
      />
      <Select className="select" onChange={onChangeSel}/>
      <Button onClick={Add} className="buttonAdd" type="text" />
      <h6 className="messageBottom">You have<mark className="mark"> {posts.length} </mark>tickets totally</h6>
    </div>
  );
};

export default Posts;
