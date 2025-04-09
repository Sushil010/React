import React, { useContext } from 'react'
// import Home from './components/Home'
import Card from './components/Card'
import { DataContext } from './context/MovieContext'


const App = () => {

  const data=useContext(DataContext)
  console.log(data)

  
  return (
    <>
    
    <div className='text-white p-3 bg-black w-full h-[100vh]'>
      
      <Card/>
      
     
      
      
    </div>
    
    </>
    
  )
}

export default App