import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom' 


const App = () => {
  return (
    <div className='bg-slate-700 w-screen h-screen text-white '>
      
      <Header />
      <Outlet />
      <Footer />

    </div>
  )
}

export default App