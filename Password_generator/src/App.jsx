import React from 'react'

const App = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen text-white bg-[#242424] text-2xl'>
      
      <div className='bg-slate-600  px-4 py-8  w-[42vw] h-[9vw]'>
        <div className='upper_one'>

          <input
           type="text"
           placeholder='Password'
           className=' text-black w-[31vw] outline-none py-1 px-3 rounded-md h-[2.5vw]'
           readOnly
           />

          



          <button className='bg-blue-600 w-[5vw] h-[2.6vw] shrink-0 rounded-md ml-2 active:scale-95 transition-transform duration-100'> 
            Copy 
          </button>

        </div>

        <div className='lower_one gap-5 py-4 flex justify-start items-center'>
          <div className='range_slider'>
            <input type="range" 
            max={90}
            min={8}
            // value={}
            className=' text-sm cursor-pointer'
            // onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-md ml-4'>Length:</label>

          </div>

          <div className='number_checkbox text-md px-3'>
            <input 
            type="checkbox" 
            id='numberInput'
            // onChange={()=>{
            //   setNumberAllowed((prev)=>(!prev))
            // }}
            />

            <label>
              Numbers
            </label>
          </div>


          <div className='character_checkbox text-md px-3'>
            <input 
            type="checkbox" 
            id='numberInput'
            />

            <label>
              Characters
            </label>
          </div>


        </div>


      </div>
      
    </div>
  )
}

export default App