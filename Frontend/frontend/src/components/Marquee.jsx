import {motion} from 'framer-motion'
import React from 'react'

function Marquee() {

  return (
    <div className=' bg-[#004D43] rounded-tl-3xl rounded-tr-3xl py-24  w-full h-[70vh] z-[2] '>

    <div className='border-t-2 border-b-2 border-zinc-600  whitespace-nowrap leading-none flex w-fit   uppercase gap-[5rem] tracking-tighter text-[14rem]' >

        <h1 >we are ochi</h1>
        <h1 >we are ochi</h1>

    </div>

    </div>
  )
}

export default Marquee