import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authservice from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import {Header,Footer} from './components/index'


const App = () => {

  const [loading, setloading] = useState(true)

  const dispatch= useDispatch()


  //Ass application will load
  //ask the applcation if user is logged in or not
  useEffect(() => {
    
    authservice.getCurrentUser()
    .then((userData)=>
      {
        if (userData) {
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })
    
      .finally(()=>{setloading(false)})

  }, [])
  

 return !loading ? 


  <div className='w-screen h-screen bg-slate-700 text-white text-2xl'>
    <Header /> 
    <main>
      <div class="flex-col gap-4 w-full flex items-center justify-center">
        <div
        class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
        >
        <div
          class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
        >   
        </div>
        </div>
      </div>
      </main>
    <Footer/>
  </div>
 
 

  :
  null
}
export default App