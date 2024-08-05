const Input = (props) => {
  const {type, placeholder, name,id, inputStyle} = props;
  return (
    <input
      type={type}
      className={inputStyle}
      placeholder={placeholder}
      name={name}
      id={id}
    />
  )
}

export default Input; 