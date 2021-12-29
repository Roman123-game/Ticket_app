import React from "react";

const Task = (props) => {

  return (
    <div className="Task">
      <fieldset className="fieldset">
        <legend className="legend">{props.postId}</legend>
        <h4 className="Title"><b>{props.listName}</b></h4>
        <h6 className="bodyPost"><i>{props.description}</i></h6>
          <button className="buttonRem" onClick={()=>props.remove(props)}>&#x267B;</button>
      </fieldset>
    </div>
  );
};

export default Task;
