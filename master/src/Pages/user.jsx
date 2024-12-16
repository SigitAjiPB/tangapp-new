import { useLogin } from "../hooks/useLogin"
import { useIatLogin } from "../hooks/useIatLogin"
import { useIdLogin} from "../hooks/useIdLogin"



const UserPage = ()=> {
    const username = useLogin()
    const userIat = useIatLogin()
    const userId = useIdLogin()
    
    return (
        <div className=" flex flex-col items-center justify-center space-y-6  divide-y  p-8 ">
            <div  className="bg-slate-200 h-40 w-40 rounded-full text-center flex justify-center items-center text-8xl text-slate-50 shadow-lg">
            <span>J</span>
            </div>

            <div className="flex flex-col justify-center items-center text-slate-600">
                <div>{` ${username}`}</div>
                <div>{`${userIat}`}</div>
                <div>{` ${userId}`}</div>

            </div>
        </div>
    )
}

export default UserPage