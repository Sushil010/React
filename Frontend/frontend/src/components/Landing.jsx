import React from 'react'

function Landing() {
  return (
    <div className='Landing w-full h-screen bg-zinc-900 px-10 pt-2'>

    <div className='outer mt-[25vh]'>
      {["We create","eye-opening","presentations"].map((item,index)=>{
          return <div className='texter text-[100px] uppercase leading-[5.5vw] tracking-tighter font-medium'>
          <h1>{item}</h1>
      </div>
      })
      }
    </div>





    </div>
  )
}

export default Landing