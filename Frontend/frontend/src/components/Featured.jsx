import React from 'react'
import { GoDotFill } from "react-icons/go";


function Featured() {
  return (
    <div className=' w-full  text-white'>
        <div className=' text-[3.5vw] py-24 tracking-tight'>
                <h1 className='px-10'>Featured projects</h1>
                <div className=' border-b-2 border-zinc-600 mt-6'>

                </div>
        </div>

        <div className='first px-10 relative w-full h-screen  -my-20 '>

          <div className='flex gap-[38.7vw] uppercase'>
          <div className='flex justify-center mt-20 items-center '>
              <div><GoDotFill/></div>
              <h3>cardboard</h3>
          </div>
         <div className='flex mt-20 justify-center items-center' >
              <div><GoDotFill/></div>
              <h3>ah2 and matt horn</h3>
         </div>
         </div>

          <div className='flex relative gap-5 w-[97%] h-[80%] '>

          
          <h1 className='text-[#CDEA68] uppercase text-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] leading-none tracking-tighter -translate-y-[50%]'>cardboard</h1>

            <div className='left w-1/2 h-full  rounded-2xl  bg-[url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")] bg-contain'>
            </div>

            <h1 className='leading-none tracking-tighter text-[#CDEA68] uppercase text-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>ah2 & matt horn</h1>

            <div className='right w-1/2 h-full  rounded-2xl  bg-[url("https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png")] bg-contain '>
            </div>

          </div>


        </div>


          <div className='flex gap-[8.5vw]'>
          
          <div className=' flex px-10 justify-center mt-14 mb-7 gap-4 items-center '>

          {['branded template','sales deck','social media templates'].map((item,index)=>(
            <div className='h-[2.5vw] px-3 flex justify-center items-center rounded-full uppercase whitespace-nowrap border-[0.1vw] '>{item}</div>

          ))
        }       
          </div>

          <div className='flex px-10 justify-center mt-14 mb-7 gap-4 items-center '>

          {['pitch deck'].map((item,index)=>(
            <div className='h-[2.5vw] px-3 flex justify-center items-center rounded-full uppercase whitespace-nowrap border-[0.1vw]'>{item}</div>

          ))
        }       
          </div>

          
         
         </div>

        



         <div className='second px-10 relative w-full h-screen  -my-20 '>

          <div className='flex gap-[43vw] uppercase'>
<div className='flex justify-center mt-20 items-center '>
    <div><GoDotFill/></div>
    <h3>fyde</h3>
</div>
<div className='flex mt-20 justify-center items-center' >
    <div><GoDotFill/></div>
    <h3>vise</h3>
</div>
          </div>

          <div className='images flex relative gap-5 w-[97%] h-[80%] '>

          <h1 className='text-[#CDEA68] uppercase text-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] leading-none tracking-tighter -translate-y-[50%]'>fyde</h1>




          <div className='left w-1/2 h-full  rounded-2xl  bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] bg-contain'>

          <h1 className='text-[#CDEA68] uppercase text-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] leading-none tracking-tighter -translate-y-[50%]'>vise</h1>

    

  </div>

  <div className='right w-1/2 h-full  rounded-2xl  bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")] bg-contain '>

  </div>

          </div>


          </div>


          <div className='flex gap-[11vw]'>

          <div className='flex px-10 justify-center mt-14 mb-7 gap-4 items-center '>

{['audit','copywriting','sales deck','slides design'].map((item,index)=>(
  <div className='h-[2.5vw] px-3 flex justify-center items-center rounded-full uppercase whitespace-nowrap border-[0.1vw]'>{item}</div>

))
}       
          </div>

          <div className='flex px-10 justify-center mt-14 mb-7 gap-4 items-center '>

{['agency','company presentation'].map((item,index)=>(
  <div className='h-[2.5vw] px-3 flex justify-center items-center rounded-full uppercase whitespace-nowrap border-[0.1vw]'>{item}</div>

))
}       
          </div>



          </div>


          <div className='third px-10 relative w-full h-screen  -my-20 '>

          <div className='flex gap-[41.5vw] uppercase'>
          <div className='flex justify-center mt-20 items-center '>
          <div><GoDotFill/></div>
            <h3>trawa</h3>
          </div>
          
          <div className='flex mt-20 justify-center items-center' >
            <div><GoDotFill/></div>
              <h3>premium blend</h3>
            </div>
          </div>

          <div className='flex relative gap-5 w-[97%] h-[80%] '>

          <h1 className='text-[#CDEA68] uppercase text-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] leading-none tracking-tighter -translate-y-[50%]'>trawa</h1>



  <div className='left w-1/2 h-full  rounded-2xl  bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")] bg-contain'>
  </div>

  <div className='right w-1/2 h-full  rounded-2xl  bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")] bg-contain '>

  </div>
{/* 
  <h1 className='text-[#CDEA68] uppercase text-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] leading-none tracking-tighter -translate-y-[50%]'>premium blend</h1> */}




          </div>


          </div>


          <div className='flex gap-[12vw]'>

          <div className='flex px-10 justify-center mt-14 mb-7 gap-4 items-center '>

          {['brand identity','design research','investor deck'].map((item,index)=>(
          <div className='h-[2.5vw] px-3 flex justify-center items-center rounded-full uppercase whitespace-nowrap border-[0.1vw]'>{item}</div>

          ))
          }       
          </div>

          <div className='flex px-10 justify-center mt-14 mb-7 gap-4 items-center '>

          {['branded template'].map((item,index)=>(
          <div className='h-[2.5vw] px-3 flex justify-center items-center rounded-full uppercase whitespace-nowrap border-[0.1vw]'>{item}</div>

          ))
          }       
          </div>



          </div>
        

        



     


        

    </div>
  )
}

export default Featured