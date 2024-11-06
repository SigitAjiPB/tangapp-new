import InputForm from "../Input"
import Button from "../Button/index"
import PlusSvg from "../../../assets/svg/plus.svg"

export const ParticipantInput =()=> {
    return (
        <div>
            <div className="grid grid-cols-12 px-6 py-2 bg-slate-300 gap-2">
                <InputForm
                    wrapp='col-span-6 sm:col-span-4'
                    label='Participant' 
                    type='text' 
                    placeholder='Participant' 
                    name='participant'
                    htmlFor='Participant'
                    labelStyle="block text-sm font-medium text-gray-700"
                    inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                ></InputForm>
                <InputForm
                    wrapp='col-span-6 sm:col-span-4'
                    label='Initial Contribution' 
                    type='text' 
                    placeholder='$' 
                    name='InitialContribution'
                    htmlFor='Initial Contribution'
                    labelStyle="block text-sm font-medium text-gray-700"
                    inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                ></InputForm>
                <InputForm
                    wrapp='col-span-6 sm:col-span-4'
                    label='Event Name' 
                    type='text' 
                    placeholder='Event Name' 
                    name='eventName'
                    htmlFor='EventName'
                    labelStyle="block text-sm font-medium text-gray-700"
                    inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                ></InputForm>

                <Button variant="w-max text-[10px] justyfy-center item-center p-1 gap-1 text-white h-6 bg-gradient-to-r from-sky-400 to-sky-600 w-6 rounded-lg flex border row-start-3"><img src={PlusSvg} alt="" className="h-4 w-4"/> <p>add participant</p></Button>
            </div>
        </div>
    )
}