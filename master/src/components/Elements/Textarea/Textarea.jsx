const Textarea = (props) => {

  const {textareaStyle, id, placeholder, value, readOnly} = props
  return (
    <div>
      <textarea
        readOnly={readOnly} 
        defaultValue={value}
        id ={id}
        className={textareaStyle}
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}

export default Textarea