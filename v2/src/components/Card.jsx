
// https://openlibrary.org/search.json?q=the+lord+of+the+rings
// https://ghibliapi.vercel.app/films
import React, { useContext } from 'react'
import Button from './Button'
import { DataContext } from '../context/MovieContext'



const Card = () => {

  
  
    const {data,fetcher}=useContext(DataContext)
    


    
  return (
    
    <>
      <Button 
            
            value={'Enter'} />
            

        {/* <div className='bg-gray-600 p-4 text-black w-[20vw]
         h-[30vh] text-center border-amber-400 rounded-2xl'> */}
        
            {data.map(function(item,index){
              return <div key={index} className='bg-gray-600 grid grid-cols-3 p-4 text-black w-[20vw]
                    h-[30vh] text-center border-amber-400 rounded-2xl'>
                      
                      <h3>{item.title}</h3>

                </div>
            })}
            {/* <h3>Title</h3>

            <h4>Description</h4> */}

            
            
            
            


        
        {/* </div> */}



    </>
    
  )
}

export default Card