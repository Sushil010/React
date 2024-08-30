// import React from 'react'
// import Products from './products'
// function App() {
//   return (
//     <div className='w-full h-screen bg-zinc-700'>
//       <div className='w-44 h-32 rounded-md bg-red-900'></div>
//       <Products/>

//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import Products from './products'

function App() {
  var[a,b]=useState(10)
  return (
    <div className='w-screen h-screen bg-black text-white p-10 text-3xl'>
      
      {/* <h1>{a}</h1>
      
      <button onClick={()=>b(11)} className='font-mono px-4 py-2 text-white rounded-md text-2xl bg-red-800'>Click</button> */}

      <Products age={a} data={{age:20, name: "hehe"}}/>
    
    
    
    
    
    
    </div>
  )
}

export default App

