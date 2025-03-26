import { motion } from 'framer-motion'
import React from 'react'

function About() {
  return (
    <div className=' parent text-black w-full rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] z-[3]'>

    <div className=' px-10 py-[8rem] text-[3vw] font-normal'>
        <h2 className='w-[85%]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline decoration-4 decoration-black'>raise funds, sell prod­ucts, ex­plain com­plex ideas</span>, and <span className='underline decoration-4 decoration-black'>hire great peo­ple.</span></h2>
    </div>

    <div className='flex justify-between py-5 px-10 border-t-2 border-zinc-400'>
      <div className='left'>
        <h1 className='  text-[3.5vw]'>Our approach:</h1>
        <div className=' whitespace-nowrap  text-white uppercase h-[70px] w-[200px] bg-slate-900 rounded-[40px] flex items-center justify-center font-medium gap-12'>Read more
          <div className='w-2 h-2 bg-white rounded-lg'></div>
        </div>



      </div>

      <div className='right h-[75vh] w-[48vw] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-contain bg-no-repeat rounded-3xl'>

      </div>
        
    </div>


    </div>
  )
}

export default About