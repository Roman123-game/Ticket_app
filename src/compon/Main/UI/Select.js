import {memo} from "react";

const Select = (props) => {
  const {className,onChange} = props;
  return (
    <select className={className} onChange={onChange}>
      <option>Shopping</option>
      <option>Technology</option>
      <option>Pleasure</option>
      <option>Economy</option>
    </select>
  );
};

export default memo(Select);
