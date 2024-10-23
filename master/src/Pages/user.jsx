import { useLogin } from "../hooks/useLogin"



const UserPage = ()=> {
    const username = useLogin()
    
    return (
        <div>
            <p>This user page owned by:{` ${username}`}</p>
        </div>
    )
}

export default UserPage