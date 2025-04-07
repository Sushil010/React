import React, { useState } from 'react'
import Button from './Button'

const Home = () => {
    const [task, setTask] = useState("")
    // const [showdiv, setShowdiv] = useState(false)
    const [submittedtask, setSubmittedTask] = useState([])

    
    
    const setChanger=(e)=>{
        e.preventDefault()
        console.log(task)
        if(task.trim()==="") return
        setSubmittedTask(prev=>[...prev,task])
        setTask('')
        // setShowdiv(true)  
        
    }

    const recaller=(deleteindex)=>{
        console.log("deleter")
        setSubmittedTask(prev=>prev.filter((_,index)=>index!==deleteindex))
    }
    
  return (
    <>
    
    <div className='p-4 gap-1.5 flex'>
        <div className=''>
            <form 
            action=""
            onSubmit={setChanger}
            >
                <input 
                value={task}
                onChange={(e)=>{
                    setTask(e.target.value)
                }}
                
                className='border border-white p-1' 
                type="text" 
                placeholder='Enter items' />


            </form>
          
            
        </div>
        <Button value={"Submit"}/>  
    </div>
    {/* {showdiv && (
        <div className='ml-4 w-[30vw] h-[5vh] bg-yellow-500 text-black'>
            <h3>{submittedtask}</h3>
        </div>
    )} */}
    
    {
    
    submittedtask.map(function(value,index){
        return <div className='ml-4 flex w-[30vw] mb-2 h-[5vh] bg-yellow-500 text-black' key={index}>
                    <h1>{index+1}.{value}</h1>
                    <div className=''>
                        <button
                        onClick={()=>{recaller(index)}}
                        className='border p-1 cursor-pointer active:scale-90 border-amber-700 bg-red-700'>
                            Delete
                        </button>
                    </div>
                </div>


    })
    
    }
    
    </>
    
  )
}

export default Home