import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Move from './components/Move'

function App() {
  return (
    <div className='w-full min-h-screen overflow-x-hidden  text-white bg-zinc-900'>


    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    <Move/>
    </div>

    
  )
}

export default App