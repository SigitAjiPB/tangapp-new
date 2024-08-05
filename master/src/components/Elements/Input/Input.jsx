const Input = (props) => {
  const {type, placeholder,id, inputStyle} = props;
  return (
    <input
      type={type}
      className={inputStyle}
      placeholder={placeholder}
      id={id}
    />
  )
}

export default Input; 