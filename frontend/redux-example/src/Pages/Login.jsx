import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/features/userSlice'
//import { setUser } from '../redux/actions/userActions'


function Login() {
  const dispatch=useDispatch()
const handleLogin=()=>{
//dispatch(setUser({name:"kedar",email:"kedar@gmail.com"}))
dispatch(setUser({name:"kedar",email:"kedar@gmail.com"}))

}

  return (
    <>
    <div>Login</div>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login