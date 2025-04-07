import React, { useContext } from 'react'
import { DataContext } from '../src/context/UserContext'

const Contact = () => {
  const data = useContext(DataContext)
  return (
    <div>Contact {data}</div>
  )
}

export default Contact