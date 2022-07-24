import {memo} from "react";


const Input = (props) => {
  const {maxLength,value,className,type,placeholder,onChange} = props;
  return (
    <input
      maxLength={maxLength}
      value={value}
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default memo(Input);
