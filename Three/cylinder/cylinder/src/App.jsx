import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

import Cyl from './Cyl'
import "./style.css"




const App = () => {
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight/>
      <Cyl/>
    </Canvas>
  )
}


export default App
