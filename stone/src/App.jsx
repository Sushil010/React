import React, { useState } from 'react'
import { div } from 'three/tsl'

const App = () => {
  const [inputvalue, setinputvalue] = useState("")
  const [handleinput, sethandleinput] = useState([])
  
  // For seeing changes that user types in in real time
  const Changer=(e)=>{
    setinputvalue(e.target.value)
    console.log(inputvalue)
  }

  const Submitter=()=>{
    if (inputvalue.trim()!=""){
      sethandleinput([...handleinput,inputvalue])
      setinputvalue("")
    }
    
  }

  const Handler=()=>{
    sethandleinput(handleinput.slice(0,-1))
  }

  return (
    
    <>
    
    <div className='h-screen bg-[#242424] w-screen text-white p-3 gap-2'>  
      
      <div className=''>
        <input
        className='border border-white p-2 rounded rounded-20px' 
        onChange={Changer}
        value={inputvalue}
        type="text" 
        placeholder='Enter lists' />

      </div>
      <div>
        <button 
        // onClick={()=>{console.log(" Submit Clicked")}}
        onClick={Submitter}
        className='bg-blue-200 p-2 border cursor-pointer border-black rounded rounded-20px'>
          Submit
        </button>

        <button
          // onClick={()=>{console.log("Delete Clicked")}}
          onClick={Handler}
          className='bg-blue-200 cursor-pointer p-2 border border-black rounded rounded-20px'>
          Delete
        </button>
      </div>
      {handleinput.map((value,index)=>(
        <div key={index}>
          {value}
        </div>  
        
      
      ))}
    </div>
    <div>
      
    </div>
    
    </>
    
    
  )
}

export default App