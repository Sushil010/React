import React, { useContext } from 'react'
import { DataContext } from '../src/context/UserContext'

const Products = () => {
  const datas = useContext(DataContext)
  
  return (
    <div>Products {datas}</div>
  )
}

export default Products