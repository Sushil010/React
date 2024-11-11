import React, { useState,useCallback,useEffect, useRef } from 'react'

const App = () => {
  
  const [Number, setNumber] = useState(false)
  const [Character, setCharacter] = useState(false)
  const [Length, setLength] = useState(8)
  const [Password,setPassword]=useState("")
  const passwordRef = useRef(null)



  const passwordGenerator= useCallback(
    () => {
      
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
      let pass="";

      if(Number) str+="0123456789";
      if(Character) str+=
      "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

      for (let i =1 ; i <= Length; i++){
        
        let charac = Math.floor(Math.random() * str.length +1)

        pass += str.charAt(charac)
      }

      setPassword(pass)



    },
    [Number,Character,Length],
  )

  const copyClipboard= useCallback(
    () => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,20)
      window.navigator.clipboard.writeText(Password)
    },
    [Password],
  )
  
  
 useEffect(() => {
   passwordGenerator()
 }, [Number,Character,Length])
 
  
  
  return (
    <div className='flex justify-center items-center w-screen h-screen text-white bg-[#242424] text-2xl'>
      
      <div className='bg-slate-600  px-4 py-8  w-[42vw] h-[9vw]'>
        <div className='upper_one'>

          <input
           type="text"
           placeholder='Password'
           className=' text-black w-[31vw] outline-none py-1 px-3 rounded-md h-[2.5vw]'
           value={Password}
           readOnly
           ref={passwordRef}
           />

          



          <button onClick={copyClipboard} className='bg-blue-600 w-[5vw] h-[2.6vw] shrink-0 rounded-md ml-2 active:scale-95 transition-transform duration-100'> 
            Copy 
          </button>

        </div>

        <div className='lower_one gap-5 py-4 flex justify-start items-center'>
          <div className='range_slider'>
            <input type="range" 
            max={90}
            min={2}
            value={Length}
            className=' text-sm cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-md ml-4'>Length:{Length}</label>

          </div>

          <div className='number_checkbox text-md px-3'>
            <input 
            type="checkbox" 
            id='numberInput'
            onChange={()=>{
              setNumber((prev)=>(!prev))
            }}
            />

            <label>
              Numbers
            </label>
          </div>


          <div className='character_checkbox text-md px-3'>
            <input 
            type="checkbox" 
            id='numberInput'
            onChange={()=>{
              setCharacter((prev)=>(!prev))
            }}
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