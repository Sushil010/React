import React from 'react'
import {useDispatch} from 'react-redux'
// import {Logout} from '../../appwrite/auth'
import authservice from '../../appwrite/auth'
import {logout} from '../../store/authSlice'






const LogoutBtn = () => {


    const dispatch = useDispatch()
    const logoutHandler=()=>{
        // Calls the Logout method from authservice to delete the
        //  user's session on the server (returns a promise).
        authservice.Logout.then(()=>
            dispatch(logout())
            // Once the promise resolves, dispatches the logout action
            //  from authSlice to update the Redux state (status set to false, userData cleared).
        )
    }

  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn