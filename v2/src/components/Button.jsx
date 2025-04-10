import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/MovieContext'

const Button = ({value}) => {
  
    
    
      const {data,fetcher}=useContext(DataContext)
      
      const readdata=()=>{
        fetcher()
        // console.log(data.map((item=>item.title)))
        
      }
      useEffect(() => {
        
        if(data.length>0){
          console.log(data.map(item=>item.image))
        }
      
        
      }, [data])
      


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