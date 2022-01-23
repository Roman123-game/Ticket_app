import React from "react";
import { useState, useMemo } from "react";
import "./Posts.css";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

const Posts = () => {
  const [valueInput, setValueInput] = useState("New Ticket");
  const [newPost, setNewPost] = useState({});
  const [value, setValue] = useState("Shop");
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      listName: "Shop",
      description: "Buy Milk",
    },

    {
      id: uuidv4(),
      listName: "Rest",
      description: "Walk 7 km",
    },
    {
      id: uuidv4(),
      listName: "Tech",
      description: "Learn Angular",
    },
    {
      id: uuidv4(),
      listName: "Tech",
      description: "Learn Python",
    },
  ]);
  function remove(props) {
    console.log("remove function");
    const afterFilter = posts.filter((val) => val.id !== props.postId);
    setPosts(afterFilter);
  }
  function onChangeSel(event) {
    setValue(event.target.value);
  }
  function changInp(event) {
    event.stopPropagation();
    setValueInput(event.target.value);
  }
  function Add() {
    setNewPost({});
    setPosts([
      ...posts,
      { ...newPost, id: uuidv4(), listName: value, description: valueInput },
    ]);
  }
  useMemo(() => {
    console.log("cashing");
  }, []);

  return (
    <div className="Posts">
      Golden Tickets
      {posts.length ? (
        <div>
          {" "}
          {posts.map((item) => (
            <Task
              key={item.id}
              remove={remove}
              listName={item.listName}
              postId={item.id}
              description={item.description}
            />
          ))}{" "}
        </div>
      ) : (
        <div className="empty">Add Your First Ticket</div>
      )}
      <Input
        value={valueInput}
        className="input"
        type="text"
        placeholder="New Ticket"
        onChange={changInp}
      />
      <Select className="select" onChange={onChangeSel} />
      <Button onClick={Add} className="buttonAdd" type="text" />
      <h6 className="messageBottom">You have <mark>{posts.length} </mark> tickets totally</h6>
    </div>
  );
};

export default Posts;
