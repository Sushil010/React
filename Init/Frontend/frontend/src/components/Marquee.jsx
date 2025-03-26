import {motion} from 'framer-motion'
import React from 'react'

function Marquee() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2"  className=' bg-[#004D43] rounded-tl-3xl rounded-tr-3xl py-24  w-full h-[70vh] z-[2] overflow-hidden'>

    <div className='border-t-2 border-b-2 border-zinc-600  whitespace-nowrap leading-none flex w-fit uppercase tracking-tighter text-[14rem]' >

        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration: 8}} className='pr-20'>we are ochi</motion.h1>

        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration: 8}} className='pr-20'>we are ochi</motion.h1>
        
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration: 8}} className='pr-20'>we are ochi</motion.h1>
  

    </div>

    

    

    </div>
  )
}

export default Marquee