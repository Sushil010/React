import React, { useState } from 'react'

const App = () => {
  const [inputvalue, setinputvalue] = useState("")
  const Changer=(e)=>{
    setinputvalue(e.target.value)
  }
  return (
    
    <>
    
    <div className='h-screen bg-[#242424] w-screen text-white p-3 gap-2 flex'>  
      
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
        
        className='bg-blue-200 p-2 border border-black rounded rounded-20px'>
          Submit
        </button>
      </div>

    </div>
    
    </>
    
    
  )
}

export default App