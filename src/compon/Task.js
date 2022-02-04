import React from "react";
import {FaRegTrashAlt} from "react-icons/fa";

const Task = (props) => {

  return (
    <div className="task">
      <fieldset className="fieldset">
        <legend className="legend">{props.postId}</legend>
       <image> {props.image}</image>
        <h4 className="title"><b>{props.listName}</b></h4>
        <h6 className="bodyPost"><i>{props.description}</i></h6>
          <button className="buttonRem" onClick={()=>props.remove(props)}><FaRegTrashAlt/></button>
      </fieldset>
    </div>
  );
};

export default Task;
