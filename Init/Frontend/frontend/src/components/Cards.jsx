import React from 'react'
import { MdCopyright } from "react-icons/md";


function Cards() {
  return (
    <div className='gap-5 items-center px-10 flex w-full h-screen '>
      <div className='w-1/2 relative h-[25vw] '>
            <div className='w-full h-full flex items-center justify-center bg-[#004D43] rounded-2xl'>
            
            <div>
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" 
              
              style={{
                width:"10vw",
                height:"8.5vh"
              }}
              
              />
            </div>
            
            <div className='flex px-3  items-center bottom-5 left-10 absolute  h-[2vw] rounded-full border-2 font-light text-yellow-200 border-yellow-200'>
                  <MdCopyright/>2019-2024
            </div>
            
            </div>
      </div>  

      <div className='w-1/2 gap-5 flex h-[25vw] '>

        <div className='w-1/2 relative justify-center items-center flex rounded-2xl h-full bg-[#212121]'>

        <div>
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" 
              
              style={{
                width:"10vw",
                height:"10vh"
              }}
              
              />
            </div>

            <div className='flex px-3  items-center bottom-5 left-10 absolute  h-[2vw] rounded-full border-2 uppercase font-normal leading-none  border-white tracking-tighter'>
                  rating 5.0 on clutch
            </div>

        </div>

        <div className='w-1/2 relative justify-center items-center flex rounded-2xl h-full bg-[#212121]'>

        <div>
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" 
              
              style={{
                width:"8vw",
                height:"16vh"
              }}
              
              />
            </div>

            <div className='flex px-3  items-center bottom-5 left-10 absolute  h-[2vw] rounded-full border-2 font-normal leading-none  border-white tracking-tighter uppercase'>
                  business bootcamp alumni
            </div>

        </div>

      </div>


    </div>
  )
}

export default Cards