import React, { useState } from 'react'

const Colors = () => {


   const [Background, setBackground] = useState("olive")
//    const changer=()=>{
//         setBackground("red")
//    }

  return (
    <div>

    <div className='flex items-center w-screen h-screen justify-center' 
    style={{backgroundColor: Background}}
    >
     
        <div className='mt-7 gap-6 flex items-center 
        justify-center rounded-md bottom'>

        <button 
        onClick={()=>setBackground("red")} 
        className='border flex items-center justify-center
         border-red-600 rounded-md'
        style={{backgroundColor:"red"}}>
                Red
        </button>

        <button 
        onClick={()=>setBackground("blue")} 
        className='border flex items-center justify-center
         border-blue-600 rounded-md'
        style={{backgroundColor:"blue"}}>
                Blue
        </button>


        <button 
        onClick={()=>setBackground("yellow")} 
        className='border flex items-center justify-center
         border-yellow-600 rounded-md'
        style={{backgroundColor:"yellow"}}>
                Yellow
        </button>


        <button 
        onClick={()=>setBackground("green")} 
        className='border flex items-center justify-center
         border-green-600 rounded-md'
        style={{backgroundColor:"green"}}>
                Green
        </button>


        </div>    
    
    </div>
    </div>
  )
}

export default Colors