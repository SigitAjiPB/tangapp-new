import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const login = (data) => {
  axios.post('https://fakestoreapi.com/auth/login', data).then((res)=>{
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
import jwt_decode from 'jwt-decode'

export const getUsername = (token) => {
    const decoded = jwt_decode(token)
    console.log(decoded)
    return decoded.user
}