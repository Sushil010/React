// import { useTexture } from '@react-three/drei';
import React from 'react'
// import { Mesh } from 'three'
import * as THREE from 'three'; 

function Cyl() {
    // let tex=useTexture()
  return (
    <mesh>
        <cylinderGeometry args={[1,1,1,30,30,true]}/>
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>


    </mesh>
  )
}

export default Cyl