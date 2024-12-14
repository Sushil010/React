import React from 'react'
import {useDispatch} from 'react-redux'
// import {Logout} from '../../appwrite/auth'
import authservice from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

const LogoutBtn = () => {


    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authservice.Logout.then(()=>
            dispatch(logout())
        )
    }

  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn