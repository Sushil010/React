
// https://openlibrary.org/search.json?q=the+lord+of+the+rings
// https://ghibliapi.vercel.app/films
import React, { useContext } from 'react'
import Button from './Button'
import { DataContext } from '../context/MovieContext'



const Card = () => {

  
  
    const {data,fetcher}=useContext(DataContext)
    // console.log(data)


    
  return (
    
    <>

        <div className='bg-gray-600 text-black w-[20vw] h-[30vh] text-center border-amber-400 rounded-2xl'>
        
            <h3>Title</h3>

            <h4>Description</h4>

            <Button 
            
            value={'Enter'} />
            
            
            
            


        
        </div>



    </>
    
  )
}

export default Card