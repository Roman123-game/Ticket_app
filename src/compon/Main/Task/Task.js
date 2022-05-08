import { FaRegTrashAlt,FaGlobe } from "react-icons/fa";
import Tippy from "@tippy.js/react";

const Task = (props) => {
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
        <Tippy content="Users have same todo">
        <button className="buttonGlobe">
          <FaGlobe />
        </button>
        </Tippy>
        <Tippy content="Remove">
        <button className="buttonRem" onClick={()=>props.onClick(props)}>
          <FaRegTrashAlt />
        </button>
        </Tippy>
      </fieldset>
    </div>
  );
};

export default Task;
