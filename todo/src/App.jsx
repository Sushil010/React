import React, { useState } from 'react'
import { Todoprovider } from './context'


const App = () => {

  const [todos, settodos] = useState([])




  // todo here is a single individual todo item here.
  const addtodos=(todo)=>{
      settodos(prev=>[{id: Date.now(),...todo},...prev])
  }

  // const deletetodo=(id,todo)=>{
  //   settodos(prev=>prev.map((prevValue)=>{
  //     prevValue.id===id? '':'prevValue'
  //   }))
  // }
  

  const deletetodo=(id)=>{
    settodos(prev=>prev.filter((todo)=>todo.id!==id))
  }

  const toggletodo=(id)=>{
    settodos(prev=>prev.map((preValue)=>{
       preValue.id===id ? {...preValue,completed: !preValue.completed} : preValue 
    }))
  }

  const updatetodo=(id,todo)=>{
    settodos(prev=>prev.map((prevValue)=>{
      prevValue.id === id ? todo : prevValue
    }))
  }



  return (
    
    <>
    {/* todos here is actually list of all todos so is of the todos in usestate */}
    <Todoprovider value={{todos,addtodos,deletetodo,toggletodo,updatetodo}} >
      <div className='w-screen h-screen bg-zinc-700 text-white text-2xl'>
          
        App
          
      </div>
      </Todoprovider>

      </>
  )
}

export default App