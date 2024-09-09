import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function Landing() {
  return (
    <div className='Landing w-full h-screen bg-zinc-900  pt-2'>

    {/* <div className='outer px-10 mt-[25vh]'>
      {["We create","eye-opening","presentations"].map((item,index)=>{
          return (
          <div className='texter text-[100px] uppercase leading-[5.5vw] tracking-tighter font-medium'>
          <h1>{item}</h1>
          </div>
          )
      })
      }
    </div>  */}



<div className='outer px-10 mt-[25vh]'>
      {["We create","eye-opening","presentations"].map((item,index)=>{
          return (
          <div className={`texter text-[100px] uppercase leading-[5.5vw] tracking-tighter font-medium
              ${index===1 ? 'ml-[80px]' :''}
          `}>
            {index === 1 && <div className='*:h-[20px] w-[40px] bg-red-500'></div>}
          <h1>{item}</h1>
          </div>
          )
      })
      }
    </div> 




    <div className='border-t-2  border-zinc-700 mt-[17vh]'> 
    </div>

  <div className='px-10 py-5  mt-[5px] flex        justify-between align-center'>
    {['For public and private companies','From the first pitch to IPO'].map((items,index)=>(
      <p className={`text-base tracking-tight leading-none  `}>{items}</p>
    ))
    }


  <div className='flex justify-center items-center gap-1'>
    <div className=' px-3 py-2  button uppercase bg-zinc-950 border-[.5px] rounded-full'>start the project

    </div>

    <div className='w-11 h-11 ml-[2px] rounded-full bg-zinc-950 border-[.5px] flex items-center justify-center'>
      <MdArrowOutward/>
    </div>
  </div>
    

    


    </div>



    <div></div>
    





    </div>
  )
}

export default Landing