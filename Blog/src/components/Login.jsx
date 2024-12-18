import React, { useState } from 'react'
import {Link,useFormAction,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import Input from './Input'
import {Button,Logo} from './index'
import authservice from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'




function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")


    //Flow:
    //below function(Login) will initiate once login button is pressed
    //data of user will passed to check Login data 
    //and if login data is correct
    //which has been stored in session variable below
    //userdata will be provided with getcurrentuser method
    //the authlogin is from redux toolkit
    //so to use any function within a redux toolkit useDispatch is used
    //Simply speaking communication between react and redux with help of useDispatch
    //and finally in place of Navigate there was link option too
    //Problem with Link is that we have to click it
    //But we can use Navigate to redirect directy without clicking


    const Login= async(data) =>{
        setError("")

        try {
           const session = await authservice.Login(data)
           if (session){
            const userData = await authservice.getCurrentUser()
            if (userData) dispatch(authLogin(userData))
            navigate("/")
           }
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <div>Login</div>
  )
}

export default Login