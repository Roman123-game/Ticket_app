import { FaRegTrashAlt, FaGlobe, FaPencilAlt, FaHamsa } from "react-icons/fa";
import Tippy from "@tippy.js/react";
import { memo } from "react";

const Task = (props) => {
  // const {username, image, listName, description} = props
  return (
    <div className="task">
      <fieldset className="fieldset">
        <legend className="legend">{props.username}</legend>
        <h3> {props.image}</h3>
        <h4 className="title">
          {props.listName}
        </h4>
        <h6 className="bodyPost">
          {props.description}
        </h6>
        <div className="btnGrid">
        <Tippy content="Return to posts">
            <button className="buttonReturn" onClick={() => props.clickReturnBtn(props)}>
              <FaHamsa />
            </button>
          </Tippy>
          <Tippy content="Users have same todo">
            <button className="buttonGlobe" onClick={() => props.clickGlobeBtn(props)}>
              <FaGlobe />
            </button>
          </Tippy>
          <Tippy content="Edit">
            <button className="buttonEdit" onClick={() => props.clickEditBtn(props)}>
              <FaPencilAlt />
            </button>
          </Tippy>
          <Tippy content="Remove">
            <button className="buttonRem" onClick={() => props.clickRemoveBtn(props)}>
              <FaRegTrashAlt />
            </button>
          </Tippy>
       
        </div>
      </fieldset>
    </div>
  );
};

export default memo(Task);
