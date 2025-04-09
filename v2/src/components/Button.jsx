import React, { useContext } from 'react'
import { DataContext } from '../context/MovieContext'

const Button = ({value}) => {
  
    
    
      const {data,fetcher}=useContext(DataContext)
      
      const readdata=()=>{
        fetcher()
        console.log(data.title)
        
      }


    return (

    <div className=''>

        
        
        <button
            onClick={readdata} 
            
        
        className='border p-1 cursor-pointer active:scale-90 border-amber-700 bg-green-700'>
            {value}
        </button>

    </div>
  )
}

export default Button