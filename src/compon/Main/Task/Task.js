import { FaRegTrashAlt,FaGlobe,FaPencilAlt } from "react-icons/fa";
import Tippy from "@tippy.js/react";
import React from "react";

const Task = React.memo((props) => {
  return (
    <div className="task">
      <fieldset className="fieldset">
        <legend className="legend">{props.postId}</legend>
        <h3> {props.image}</h3>
        <h4 className="title">
        {props.listName}
        </h4>
        <h6 className="bodyPost">
        {props.description}
        </h6>
        <div className="btnGrid">
        <Tippy content="Users have same todo">
        <button className="buttonGlobe">
          <FaGlobe />
        </button>
        </Tippy>
        <Tippy content="Edit">
        <button className="buttonEdit" onClick={()=>props.clickEditBtn(props)}>
          <FaPencilAlt />
        </button>
        </Tippy>
        <Tippy content="Remove">
        <button className="buttonRem" onClick={()=>props.clickGlobeBtn(props)}>
          <FaRegTrashAlt />
        </button>
        </Tippy>
        </div>
      </fieldset>
    </div>
  );
});

export default Task;
