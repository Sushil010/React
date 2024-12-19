import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import {Button,Logo} from './index'
import { useForm } from 'react-hook-form'
import authservice from '../appwrite/auth'
import {login as authLogin} from '../store/authSlice'
import Input from './Input'


function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const signup= async(data)=>{
        setError("")

        //reason behind not including authservice.login is that 
        //when user creates an account we donot need to again check the login detail
        //which was done previous according to the flow so directly dispatch the signup data into react state.
        try {
           const userData= await authservice.CreateAccount(data)
           if(userData){
                const userData = await authservice.getCurrentUser(data)
                if(userData){ dispatch(authLogin(userData))
                    navigate("/")
                    // const respond = await authservice.Login(session1)
                    // if (respond){dispatch(authLogin(respond))}
                    // navigate("/")
                }
           }
           
        } catch (error) {

            
        }
    

    }
  
    
  
  
    return (

    <div>
        Signup
    </div>
  )
}

export default Signup