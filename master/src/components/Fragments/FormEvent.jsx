import InputForm from "../Elements/Input"

const FormEvent = ()=> {
    return (
        <form className="mt-8 grid grid-cols-6 gap-6">
            <InputForm 
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            htmlFor='eventName'
            />
            <InputForm 
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            htmlFor='eventName'/>
        </form>
    )
}

export default FormEvent