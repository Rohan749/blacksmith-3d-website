"use client"
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from '@/assets/3D/Scene'

const CPUModel = () => {

  const orbitref = useRef();


  return (
    <div id='model' className='h-[100vh] w-[100vw] fixed bg-transparent top-0'>
        <Canvas 
        // camera={{fov: 55}}
        camera={{ position: [10,2,0], fov: 20 }}
        // scene={{position: [0, -4,0]}}
        >
            <ambientLight intensity={1.25}/>
            <directionalLight intensity={0.4} />
            <Model/>
            <Environment preset='apartment' />
                <OrbitControls ref={orbitref}
         
          enableZoom={false} enableRotate={false} />
        </Canvas>
    </div>
  )
}

export default CPUModel