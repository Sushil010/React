// import React,{useState} from 'react'

// function Products({age, data}) {
//   const [a,b]=useState(false);
  
//   return (
//     <div className='w-full h-60  text-white'>

//       <h1 className={`${a === false ? "text-red-600": "text-blue-600"}`}>
//         {a=== false ? "hello":"hi"}
//       </h1>

//       <button className='px-2 py-2 bg-red-700 rounded-md' onClick={()=>b(!a)}>Click</button>

//     {/* <h1>{age}</h1>
//     <h1>{data.age}</h1>
//     <h1>{data.name}</h1> */}
//     </div>
//   )
// }
// export default Products




import React, { useState } from 'react'

function Products() {
  const[a,b]=useState(true)
  return (

    <div div className='w-full h-60 text-white'>

      <div className={`${a === false?"bg-white":"bg-black"}`}></div>
      <button className='px-3 py-4 bg-green-800'
      onClick={()=>b(!a)}>Click</button>

    </div>

  )
}

export default Products