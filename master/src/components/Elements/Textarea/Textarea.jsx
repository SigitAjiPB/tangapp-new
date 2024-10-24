const Textarea = (props) => {

  const {textareaStyle, id, placeholder, value} = props
  return (
    <div>
      <textarea
        defaultValue={value}
        id ={id}
        className={textareaStyle}
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}

export default Textarea