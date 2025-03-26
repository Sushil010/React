import React from 'react'

const Test = () => {

    const numbers=[1,2,3,4,5]


  return (
    <div className='w-screen h-screen bg-zinc-700 text-white text-2xl'>
        Hello there!!!

    {numbers.map((number)=>(
        
        // <div key={number}>{number} </div>
        <ul>
            <li>{number}</li>
            {/* <li>{number}</li>
            <li>{number}</li>
            <li>{number}</li>
            <li>{number}</li> */}
        </ul>
       
    ))}
    

    </div>
  )
}

export default Test