import Label from './Label';
import Input from './Input';
import { forwardRef } from 'react';

const InputForm = forwardRef((props, ref) => {
  const {label, htmlFor, type, placeholder,wrapp, inputStyle, labelStyle, onChange, value, name, readOnly} = props;
  return (
    <div className={wrapp}>
      <Label htmlFor={htmlFor} labelStyle={labelStyle}>{label}</Label>
      <Input id={htmlFor} type={type} placeholder={placeholder} inputStyle={inputStyle} onChange={onChange} value={value} rer={ref} name={name} readOnly={readOnly}/>
    </div>
  )
})

export default InputForm

