import React from 'react'
import Props from './componenets/Props'

const App = () => {
  return (
    <>
   <div className='bg-zinc-800 w-screen h-screen text-2xl text-white '>
      
      <div className='flex justify-center items-center gap-11 py-16'>

      <Props userName="Monkey NFT" price="$43"/>
      <Props userName="Monkey"/>

      </div>
    
    </div>

    </>
   
  )
}

export default App