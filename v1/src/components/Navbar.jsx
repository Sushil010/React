import React from 'react'

const Navbar = () => {
  return (
    <div>

    <nav className='bg-emerald-800 py-5 px-3 flex justify-around items-center'>
      <div className=''>
      <h3>Logo.</h3>
      </div>

      <div className='flex justify-center items-end gap-10'>
        <h4>About</h4>
        <h4>Home</h4>
        <h4>Services</h4>
        <h4>Contact Us</h4>
        <h4>Help</h4>
      </div>
    </nav>
    
    </div>
  )
}

export default Navbar