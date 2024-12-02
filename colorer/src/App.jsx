import React, { useState } from 'react'

// const App = () => {

//   const [Color, setColor] = useState("Yellow")

  

//   const colorHandler=()=>{
//     setColor("red")
//   }

//   return (
//     <>
    
//     <div className='w-screen h-screen bg-blue-600 text-black text-2xl'>
      
//       <h1 style={{color: Color}}>
//         This is a {Color} text
//       </h1>

//      <button onClick={colorHandler} className='border-black border rounded-md p-2'>
//       Red
//      </button>
      
//       </div>
    
//     </>
    
    
    
//   )
// }

// export default App


// const App=()=>{

//   const [value, setvalue] = useState(0)

//   const Increment=()=>{

//     if(value<4)
//       setvalue(value+1)
      
//     // else{alert("Cannot proceed")
//     // }

    
//   }

//   const Decrement =()=>{
//     if(value>0)
//       setvalue(value-1)
//   }

// return(
//   <>
//   <div className='flex flex-col justify-center items-center text-black text-2xl w-screen h-screen bg-blue-800'>

//   {value>3 && <h1>Cannoot go beyond this</h1>}
//   <h1>
//     Counter-App-- Counter-Value: {value}
//   </h1>


//   {value<=0 && <h1>Lower Level Reached</h1>}
//   <button onClick={Increment} className='mt-4 p-2 border border-black'>
//     Increase Counter
//   </button>

//   <button onClick={Decrement} className='mt-3 border border-black p-2'>
//     Decrease Counter
//   </button>

//   </div>
  
  
//   </>

// )
// }



const App=()=>{

    const [background, setbackground] = useState("#5f249f")

    const bgChanger=()=>{
        setbackground("Red")
    }

    const bbgChanger=()=>{
        setbackground("Blue")
    }


return(

<>
<div style={{background:background}}  className='w-screen h-screen text-2xl bg-purple-700'>
    <div className='flex justify-center items-center'>
        Color Switcher
    </div>
   

    <div className='flex gap-4 justify-center items-center mt-2'>
        <button onClick={bgChanger} className='border border-black rounded-md p-2'>
            Red
        </button>

        <button onClick={bbgChanger} className='border border-black rounded-md p-2'>
            Blue
        </button>


    </div>
</div>

</>

)
  


}


export default App








