import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
    <div className='w-screen h-screen bg-slate-600 text-1xl text-black'>
      
    <Login/>
    <Profile/>
      </div>

    

      </UserContextProvider>
  )
}

export default App