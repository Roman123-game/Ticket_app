import React from "react";
import { useState, useMemo, useRef } from "react";
import "./App.css";
 import { v4 as uuidv4 } from "uuid";
import Task from "./compon/Task";
import Select from "./compon/Select";

function App() {

  const bodyInput = useRef('');
  const [newPost, setNewPost] = useState({});
  const [value, setValue] = useState("Shop");
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id:uuidv4(),
      listName: "Shop",
      description: "Buy Milk",
    },
  
    {
      id:uuidv4(),
      listName: "Rest",
      description: "Go",
    }, 
    {
      id:uuidv4(),
      listName: "Shop",
      description: "Buy Salt",
    },  
    {
      id: uuidv4(),
      listName: "Tech",
      description: "Learn Redux",
    },
    
  ]);
  function remove( props) {
    console.log("remove function");  
    const afterFilter =  posts.filter(val => val.id !== props.postId);
    console.log(afterFilter);
    setPosts(afterFilter);
  }
  function onChangeSel(event){
    setValue(event.target.value);
  }
  function Add() {
    setNewPost({});
    setPosts([
      ...posts,
      { ...newPost, id: uuidv4(), listName: value, description: bodyInput.current.value},
    ]);
  }

  useMemo(() => {
  return {...posts};
  }, [posts]);
  return (
    <div className="App">
    Golden Tickets
    {(posts.length)?
    // if else statement
     <div>
        {posts.map((item) => (
          <Task
          key={item.id}
            remove={remove}
            listName={item.listName}
            postId={item.id}
            description={item.description}
          ></Task>
        ))}
      </div>
      // continue if else statement
         :<div className="empty">Add Your First Ticket</div>}
        <input
        ref={bodyInput}
        id="input"
        className="input"
        type="text"
        placeholder="New Ticket"
      ></input>
      <Select className="select" onChange={onChangeSel}>
        <option value="Shop"></option>
        <option value="Tech"></option>
        <option value="Rest"></option>
      </Select>
      <button onClick={Add} className="buttonAdd" type="text">&#x1F4AC;
     
      </button>
    </div>
  );
}
export default App;
