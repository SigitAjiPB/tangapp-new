import Label from './Label';
import Input from './Input';

const InputForm = (props) => {
  const {label, htmlFor, type, placeholder, } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input id={htmlFor} type={type} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm