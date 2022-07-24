import React from "react";

const Select = React.memo((props) => {
  return (
    <select className={props.className} onChange={props.onChange}>
      <option>Shopping</option>
      <option>Technology</option>
      <option>Pleasure</option>
      <option>Economy</option>
    </select>
  );
});

export default Select;
