
const Label = (props)=> {
  const {children, htmlFor, labelStyle} = props
  return (
    <label
      htmlFor={htmlFor}
      className={labelStyle}>
      {children}
    </label>

  )
}

export default Label