const Input = (props) => {
  const {type, placeholder, name} = props;
  return (
    <input
      type={type}
      className="text-sm rounded border w-full text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      name={name}
    />


  )
}

export default Input;