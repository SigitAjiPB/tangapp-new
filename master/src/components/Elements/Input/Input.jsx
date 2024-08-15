import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {type, placeholder,id, inputStyle} = props;
  return (
    <input
      type={type}
      className={inputStyle}
      placeholder={placeholder}
      id={id}
      ref={ref}
    />
  )
})

export default Input; 