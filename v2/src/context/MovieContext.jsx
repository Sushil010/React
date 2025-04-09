import React, { createContext, useState } from 'react'
import axios from 'axios'
export const DataContext = createContext()
const MovieContext = ({children}) => {

    

    const [data, setData] = useState([])

    const fetcher=async()=>{
        const value= await axios.get('https://ghibliapi.vercel.app/films')
        setData(value.data)
    }


  return (
    <div>
        
        <DataContext.Provider value={{data,fetcher}}>
            {children}
        </DataContext.Provider>


    </div>
  )
}

export default MovieContext