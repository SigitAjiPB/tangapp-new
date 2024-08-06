const Textarea = (props) => {

  const {textareaStyle, id, placeholder} = props
  return (
    <div>
      <textarea
        id ={id}
        className={textareaStyle}
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}

export default Textarea