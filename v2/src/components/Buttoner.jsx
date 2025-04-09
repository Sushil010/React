import React from 'react'
import axios from 'axios'
const Buttoner = () => {


    const extractor= async()=>{
  
        var datas= await axios.get('https://ghibliapi.vercel.app/films')
        console.log(datas.data)
        
      } 
  return (
    
    <>
    
        <div className='mt-12'>
            <button onClick={extractor} className='border p-1 bg-green-800 border-red-600 cursor-pointer active:scale-90'>
                Get movie
            </button>
            
        </div>

    </>
  )
}

export default Buttoner