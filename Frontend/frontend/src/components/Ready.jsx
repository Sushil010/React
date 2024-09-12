import React, { useEffect, useState} from 'react'

function Ready() {
  
    const [rotate, setrotate] = useState(0)


    useEffect(() => {
     window.addEventListener("mousemove",(e)=>{
          let x = e.clientX
          let y = e.clientY
  
          let win_x=window.innerWidth/2
          let win_y=window.innerHeight/2
  
  
          let delta_x= x-win_x
          let delta_y=y-win_y
  
          let angle=Math.atan2(delta_y,delta_x)*(180/Math.PI)
  
          setrotate(angle-180)
     })
    })
  
  
    return (
    <div className='relative w-full h-full bg-[#CDEA68]'>

   

        <div className='flex gap-20 absolute  top-1/2 left-1/2
            -translate-x-[50%] -translate-y-[90%]'>

                <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-white'>
                    
                    <div className='relative
                    w-[8vw] h-[8vw] bg-black rounded-full'>
                        {/* <h1 className='text-white absolute  font-medium text-lg'>PLAY</h1> */}

                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} 
                        className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-[4vh]' >

                            <div className='w-[2vw] h-[2vw] rounded-full bg-white'>

                            </div>

                        </div>

                       

                    </div>


                </div>

                <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-white'>

                    <div className='relative w-[8vw] h-[8vw] bg-black rounded-full'>
                        {/* <h1 className='text-white absolute top-[50%] left-[50%] text-lg font-medium'>PLAY</h1> */}

                        
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[4vh] ' >

                        <div className='w-[2vw] h-[2vw] rounded-full bg-white'>

                        </div>

                    </div>




                    </div>


                </div>



        </div>


        <div className=' text-black flex items-center py-28 justify-center uppercase text-[10vw]'>
            <h1 className='text-center tracking-tighter font-medium leading-[10vw]'>
                ready<br />
                to start<br />
                the project?
            </h1>
        </div>

        <div className='-mt-10 flex justify-center items-center'>

        <div className=' whitespace-nowrap  text-white uppercase h-[60px] w-[250px] bg-slate-900 rounded-[40px] flex items-center justify-center font-medium gap-8'>start the project
          <div className='w-2 h-2 bg-white rounded-lg'></div>
        </div>

        </div>

        <div className='text-black mt-4 -mb-5 text-[1.3vw] font-normal flex justify-center items-center'> 
            <h1>OR</h1>
        </div>


        <div className='mt-10 flex justify-center items-center'>

            <div className=' whitespace-nowrap  text-black  uppercase h-[60px] w-[250px]  rounded-[40px] flex items-center justify-center border-2 border-black font-normal gap-8'>hello@ochi.design
            <div className='w-2 h-2 bg-black rounded-lg'></div>
            </div>

        </div>

        


    </div>
  )
}

export default Ready