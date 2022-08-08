import { FaFeatherAlt } from "react-icons/fa";
import { memo } from "react";


const Button = (props) => {
  const { onClick, className, typ } = props
  return (
    <button
      onClick={onClick}
      className={className}
      type={typ}
    >
      <FaFeatherAlt />
    </button>
  );
};
export default memo(Button);
