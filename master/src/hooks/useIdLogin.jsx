import { useEffect, useState } from "react"
import { getId } from "../services/auth.service"

export const useIdLogin = () => {
    const [userId, setUserId] = useState('')

    useEffect(()=> {
        const token = localStorage.getItem('token')
        if (token) {
            setUserId(getId(token))
        }  else {
            window.location.href = '/login '
        } 
    }, [])
    return userId
}   