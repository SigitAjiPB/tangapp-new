import { useEffect, useState } from "react"
import { getIat } from "../services/auth.service"

export const useIatLogin = () => {
    const [userIat, setUserIat] = useState('')

    useEffect(()=> {
        const token = localStorage.getItem('token')
        if (token) {
            setUserIat(getIat(token))
        }  else {
            window.location.href = '/login '
        } 
    }, [])
    return userIat
}   