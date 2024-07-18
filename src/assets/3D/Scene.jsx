/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf 
Author: DeimonIC93 (https://sketchfab.com/Deimon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gaming-cpu-0c8e8fe5fc9442788a205cb52908f2b6
Title: GAMING CPU
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')

  let scene = useThree(state => state.scene)
  let camera = useThree(state => state.camera)

  // camera.position.set(5,-6,0)
  // scene.position.set(3.7,-3,-9)



  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#model",
        start: 'top+=700 top',
        end: 'bottom+=500 bottom',
        endTrigger: "#about",
        scrub:1
      }
    })

    tl.fromTo(scene.position, {y: -9}, {y:-4})
      .to(scene.position, {x: -3})
      .to(scene.rotation, {y: 0.8}, "key1")
      .to(scene.position, {z:-2.5,x:-4}, "key1")
      .to(camera.position, {x:8, z:0}, "key1")


  }, [])

 


  return (
    <group {...props} dispose={null}>
      <group position={[0.406, 2.64, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[2.148, 1, 1]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.base} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.whitelist} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.minorwhite} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.whitemetallic} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.screen} />
      </group>
      <group position={[-3.271, 2.195, 0.049]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.198, 1.204, 1.659]}>
        <mesh geometry={nodes.Object_13.geometry} material={materials.base} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.cpupic} />
      </group>
      <group position={[-3.271, 2.195, 0.049]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.198, 1.204, 1.659]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.base} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.grphic} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.neonwhite} />
      </group>
      <group position={[-3.346, 2.018, 0.03]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.03, 0.01, 0.03]}>
        <mesh geometry={nodes.Object_22.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.neongreen} />
      </group>
      <group position={[-4.942, 0.899, -0.081]} rotation={[Math.PI, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_26.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-4.938, 0.887, -0.062]} rotation={[Math.PI, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_33.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.glass} />
      </group>
      <group position={[-4.942, 1.702, -0.081]} rotation={[Math.PI, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_36.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-4.938, 1.69, -0.062]} rotation={[Math.PI, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_43.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.glass} />
      </group>
      <group position={[-4.942, 2.508, -0.081]} rotation={[Math.PI, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_46.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-4.938, 2.496, -0.062]} rotation={[Math.PI, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_53.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.glass} />
      </group>
      <group position={[-4.942, 3.316, -0.081]} rotation={[Math.PI, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_56.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-4.938, 3.304, -0.062]} rotation={[Math.PI, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_63.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.glass} />
      </group>
      <group position={[-2.45, 4.093, -0.476]} rotation={[2.007, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_66.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-2.446, 4.105, -0.457]} rotation={[2.007, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_73.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.glass} />
      </group>
      <group position={[-3.28, 4.093, -0.476]} rotation={[2.007, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_76.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_78.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_79.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_81.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-3.277, 4.105, -0.457]} rotation={[2.007, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_83.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_84.geometry} material={materials.glass} />
      </group>
      <group position={[-4.099, 4.093, -0.476]} rotation={[2.007, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_86.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_87.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_88.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_89.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_91.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-4.095, 4.105, -0.457]} rotation={[2.007, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_93.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_94.geometry} material={materials.glass} />
      </group>
      <group position={[-4.944, 4.093, -0.476]} rotation={[2.007, 0, 0]} scale={0.266}>
        <mesh geometry={nodes.Object_96.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_97.geometry} material={materials.neonred} />
        <mesh geometry={nodes.Object_98.geometry} material={materials.neongreen} />
        <mesh geometry={nodes.Object_99.geometry} material={materials.neonyellow} />
        <mesh geometry={nodes.Object_100.geometry} material={materials.neonblue} />
        <mesh geometry={nodes.Object_101.geometry} material={materials.whitemetallic} />
      </group>
      <group position={[-4.941, 4.105, -0.457]} rotation={[2.007, 0, -1.387]} scale={0.216}>
        <mesh geometry={nodes.Object_103.geometry} material={materials.blackmetallic} />
        <mesh geometry={nodes.Object_104.geometry} material={materials.glass} />
      </group>
      <mesh geometry={nodes.Object_11.geometry} material={materials.base} position={[-3.716, 2.175, 0.049]} rotation={[Math.PI / 2, 0, 0]} scale={1.653} />
      <mesh geometry={nodes.Object_106.geometry} material={materials.whitelist} position={[-3.715, 4.367, -0.371]} scale={[1.665, 0.848, 0.456]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
