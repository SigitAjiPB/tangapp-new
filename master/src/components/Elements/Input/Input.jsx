import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {type, placeholder,id, inputStyle, value, onChange, name, readOnly} = props;
  return (
    <input
      readOnly = {readOnly}
      required
      type={type}
      className={inputStyle}
      placeholder={placeholder}
      id={id}
      ref={ref}
      defaultValue={value}
      onChange={onChange}
      name={name}
    />
  )
})

export default Input; 