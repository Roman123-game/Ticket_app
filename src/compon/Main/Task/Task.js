import { FaRegTrashAlt, FaGlobe, FaPencilAlt } from "react-icons/fa";
import Tippy from "@tippy.js/react";
import { memo } from "react";

const Task = (props) => {
  const {username, image, listName, description} = props
  return (
    <div className="task">
      <fieldset className="fieldset">
        <legend className="legend">{username}</legend>
        <span> {image}</span>
  
        <span className="bodyPost">
          {description}
        </span>


        <div className="btnGrid">
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
