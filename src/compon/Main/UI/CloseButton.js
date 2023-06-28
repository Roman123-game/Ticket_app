import {FaAngleDoubleUp } from "react-icons/fa";
import { memo } from "react";


const Button = (props) => {
  const { onClick, className, typ } = props
  return (
    <button
      onClick={onClick}
      className={className}
      type={typ}
    >
      <FaAngleDoubleUp />
    </button>
  );
};
export default memo(Button);
