const Input = (props) => {
  return (
    <input
      maxLength={props.maxLength}
      value={props.value}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
export default Input;
