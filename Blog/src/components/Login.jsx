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
        <div
        className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(Login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    
                    //register is required as we are using Useform(taking it as basic syntax required for this portion)
                    //need to spread register?
                    //if we use register in any other place that value will get overwritten everytime something 
                    //gets registered

                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />


                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                    />

                   





                    <Button
                    type="submit"
                    className="w-full"
                    >Sign in</Button>




                    
                </div>
            </form>
            </div>
        </div>
      )
}

export default Login