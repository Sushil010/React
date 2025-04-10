import React, { createContext, useState } from 'react'
import axios from 'axios'
export const DataContext = createContext()
const MovieContext = ({children}) => {

       

    const [data, setData] = useState([])

    const fetcher=async()=>{
        const value= await axios.get('https://ghibliapi.vercel.app/films')
        setData(value.data)
        // console.log(value.data)
    }


  return (
    
        
        <DataContext.Provider value={{data,fetcher}}>
            {children}
        </DataContext.Provider>




   
  )
}

export default MovieContext