import { FaRegTrashAlt } from "react-icons/fa";

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
        <button className="buttonRem" onClick={()=>props.onClick(props)}>
          <FaRegTrashAlt />
        </button>
      </fieldset>
    </div>
  );
};

export default Task;
