import React from 'react'

function About() {
  return (
    <div className='text-black w-full rounded-tl-[30px] rounded-tr-[30px] bg-[#CDEA68] z-[3]'>

    <div className=' px-10 py-[8rem] text-[3vw] font-normal'>
        <h2 className='w-[85%]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline decoration-4 decoration-black'>raise funds, sell prod­ucts, ex­plain com­plex ideas</span>, and <span className='underline decoration-4 decoration-black'>hire great peo­ple.</span></h2>
    </div>

    <div className='border-t-2 border-zinc-400'>
        <h1 className=' px-10 text-[3.5vw]'>Our approach:</h1>
        <div className=' whitespace-nowrappx-10 py-[10px] text-white uppercase h-[30px] w-[70px] bg-black rounded-full items-center justify-center'>read more</div>
    </div>


    </div>
  )
}

export default About