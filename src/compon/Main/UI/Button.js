import { FaFeatherAlt } from "react-icons/fa";
import React from "react";


const Button = React.memo((props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.typ}
    >
      <FaFeatherAlt />
    </button>
  );
});
export default Button;
