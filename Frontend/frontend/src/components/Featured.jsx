import React from 'react'

function Featured() {
  return (
    <div className=' w-full  text-black bg-red-800 '>
        <div className=' text-[3.5vw] py-24 tracking-tight'>
                <h1 className='px-10'>Featured projects</h1>
                <div className=' border-b-2 border-zinc-600 mt-6'>

                </div>
        </div>


        <div className=' flex w-full h-screen bg-orange-600'>

            <div className=' px-10 left w-1/2 h-full bg-gray-700'>
                <h3 className='uppercase '> cardboard spaceship</h3>

                <div className='h-[40.9vw] w-[50vw] bg-[url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")] bg-cover bg-no-repeat mt-5 rounded-3xl'>

                </div>

            </div>

            <div className='right'>
            <h3 className='uppercase '> cardboard spaceship</h3>

                <div className='h-[40.9vw] w-[50vw] bg-[url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")] bg-cover bg-no-repeat mt-5 rounded-3xl'>

                </div>

            </div>

        </div>

        



     


        

    </div>
  )
}

export default Featured