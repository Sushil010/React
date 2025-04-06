import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div>

    <nav className='bg-emerald-800 py-5 px-3 flex justify-around items-center'>
      <div className=''>
      <h3>Logo.
        
      </h3>
      </div>

      <div className='flex justify-center items-end gap-10'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        
      </div>
    </nav>
    
    </div>
  )
}

export default Navbar