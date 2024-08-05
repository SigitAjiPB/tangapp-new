const Input = (props) => {
  const {type, placeholder, name, id} = props;
  return (
    <input
      type={type}
      className="text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2"
      placeholder={placeholder}
      name={name}
      id={id}
    />


  )
}

export default Input; 