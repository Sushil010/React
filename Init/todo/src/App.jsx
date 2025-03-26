import React, { useState } from 'react'
import { Todoprovider } from './context'
import { useEffect } from 'react'
import TodoItem from './context/components/TodoItem'
import TodoForm from './context/components/TodoForm'

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
    settodos((prev)=>
      prev.map((preValue)=>
       preValue.id===id ? {...preValue, completed:!preValue.completed} : preValue 
    ))
  }

  const updatetodo=(id,todo)=>{
    settodos((prev)=>
      prev.map((prevValue)=>
      prevValue.id === id ? todo : prevValue
    ))
  }



  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if( todos && todos.length>0){
      settodos(todos)
    }

  }, [])

  useEffect(() => {
    
    localStorage.setItem("todos",JSON.stringify(todos))


  }, [todos])
  
  


  return (
    
    <>
    {/* todos here is actually list of all todos so is of the todos in usestate */}
    <Todoprovider value={{todos,addtodos,deletetodo,toggletodo,updatetodo}} >
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                       

                    </div>
                </div>
            </div>
      </Todoprovider>

      </>
  )
}

export default App