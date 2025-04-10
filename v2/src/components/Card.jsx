
// https://openlibrary.org/search.json?q=the+lord+of+the+rings
// https://ghibliapi.vercel.app/films
import React, { useContext, useState } from 'react'
import Button from './Button'
import { DataContext } from '../context/MovieContext'



const Card = () => {


  const [counters, setCounters] = useState()
  
  
    const {data,fetcher}=useContext(DataContext)
    
    const informer=()=>{
      setCounters(prev=>prev+7)
    }


    
  return (
    
    <>
      <Button 
            
            value={'Enter'} />
            

        {/* <div className='bg-gray-600 p-4 text-black w-[20vw]
         h-[30vh] text-center border-amber-400 rounded-2xl'> */}
        <div className='grid grid-cols-3'>
            {data.map(function(item,index){
              return <div key={index} className='bg-gray-600 m-8 p-4 text-black 
                     text-center border-amber-400 rounded-2xl'>
                      {/*           <img className='h-[150px] w-[150px] rounded-2xl' src={item.download_url} alt="" /> */}

                      <img className='' src={item.movie_banner} alt="" />
                      <h3 className='text-green-400 mt-3'>{item.title}</h3>
                      <h4 className='text-sm'>
                        
                        {item.description.length>100?item.description.slice(0,100)+'...':item.description}

                      </h4>

                </div>
            })}
          </div>
            {/* <h3>Title</h3>

            <h4>Description</h4> */}

            
            
            
            


        
        {/* </div> */}



    </>
    
  )
}

export default Card