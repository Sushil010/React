import React from 'react'

function Move() {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        
        <div className=' relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>

            <div className='flex gap-20 absolute  top-1/2 left-1/2
            -translate-x-[50%] -translate-y-[50%]'>

                <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-white'>
                    
                    <div className='relative
                    w-[8vw] h-[8vw] bg-black rounded-full'>
                        {/* <h1 className='text-white absolute  font-medium text-lg'>PLAY</h1> */}

                        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-[4vh] bg-red-500' >

                            <div className='w-[2vw] h-[2vw] rounded-full bg-white'>

                            </div>

                        </div>

                       

                    </div>


                </div>

                <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-white'>

                    <div className='relative w-[8vw] h-[8vw] bg-black rounded-full'>
                        {/* <h1 className='text-white absolute top-[50%] left-[50%] text-lg font-medium'>PLAY</h1> */}

                        
                    <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[4vh]  bg-red-500' >

                        <div className='w-[2vw] h-[2vw] rounded-full bg-white'>

                        </div>

                    </div>




                    </div>


                </div>



            </div>


        </div>

    </div>
  )
}

export default Move