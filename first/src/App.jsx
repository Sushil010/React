import React from 'react'
import Test from './components/Test'
import UserList from './components/UserList'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <div className='bg-zinc-600 w-screen h-screen text-3xl text-white'>
      
      {/* <Test/> */}
      <UserList/>
      <ProductList/>

    </div>
  )
}

export default App