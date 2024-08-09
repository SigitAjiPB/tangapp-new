import Label from './Label';
import Input from './Input';

const InputForm = (props) => {
  const {label, htmlFor, type, placeholder,wrapp, inputStyle, labelStyle, onChange, value} = props;
  return (
    <div className={wrapp}>
      <Label htmlFor={htmlFor} labelStyle={labelStyle}>{label}</Label>
      <Input id={htmlFor} type={type} placeholder={placeholder} inputStyle={inputStyle} onChange={onChange} value={value}/>
    </div>
  )
}

export default InputForm