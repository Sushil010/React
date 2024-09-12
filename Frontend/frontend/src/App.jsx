import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Move from './components/Move'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Ready from './components/Ready'
import Footer from './components/footer'

function App() {
  return (
    <div className='w-full min-h-screen overflow-x-hidden  text-white bg-zinc-900'>


    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    <Move/>
    <Featured/>
    <Cards/>
    <Ready/>
    <Footer/>
    
    </div>

    
  )
}

export default App