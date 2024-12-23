import Label from "../Input/Label";
import Textarea from "./Textarea";
const TextareaForm = (props) => {
  const {label, htmlFor, placeholder,wrapp, labelStyle, textareaStyle, value, name, readOnly} = props;
  return (
    <div className={wrapp}>
      <Label htmlFor={htmlFor} labelStyle={labelStyle}>{label}</Label>
      <Textarea id={htmlFor} placeholder={placeholder} textareaStyle={textareaStyle} value = {value} name ={name} readOnly ={readOnly}></Textarea>
    </div>
  )
}

export default TextareaForm