import React from 'react'
// import Home from './components/Home'
import Card from './components/Card'

const App = () => {

  const info= async()=>{
  
    var datas= await axios.get('https://ghibliapi.vercel.app/films')
    console.log(datas)
    
  }
  
  return (
    <>
    
    <div className='text-white p-3 bg-black w-full h-[100vh]'>
      
      <Card/>
      hello
    </div>
    
    </>
    
  )
}

export default App