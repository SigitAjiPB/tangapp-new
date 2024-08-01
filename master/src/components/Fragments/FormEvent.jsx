import InputForm from "../Elements/Input"

const FormEvent = ()=> {
    return (
        <form >
            <InputForm 
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            name='eventName'/>
            <InputForm 
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            name='eventName'/>
        </form>
    )
}

export default FormEvent