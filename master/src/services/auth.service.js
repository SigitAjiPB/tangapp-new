import axios from 'axios'
<<<<<<< HEAD

export const login = (data) => {
  axios.post('https://fakestoreapi.com/auth/login', data).then((res)=>{
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
=======
import jwt_decode from 'jwt-decode'

export const login = (data, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', data).then((res) => {
        callback(true, res.data.token)
    }).catch ((err)=> {
        callback(false, err)
    })
}
export const getUsername = (token) => {
    const decoded = jwt_decode(token)
    console.log(decoded)
    return decoded.user
>>>>>>> 0051938497877f77d88952b170f9d3faa3c55105
}