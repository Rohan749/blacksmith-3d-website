"use client"

import React, { useLayoutEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Hero = () => {


  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP)
  const sectionRef = useRef(null)

  useLayoutEffect(() => {

    let Elem = sectionRef.current

    let trigger = ScrollTrigger.create({
      trigger: Elem,
    });


    return () => { if (trigger) trigger.kill() }
  }, [])

  useGSAP(
    () => {
        // gsap code here...
        gsap.to('.text_anim', { opacity: 1, stagger: 0.1, delay: 1}); 

        gsap.to('.spline_anim', { bottom: 0, delay: 1.5, ease: 'power3.out'})
    },
    { scope: sectionRef }
);


  return (
    <div ref={sectionRef} className='relative'>
      <div className='spline_anim absolute bottom-[-45rem] left-1/2 transform -translate-x-1/2 -translate-y-0 h-[50vh] lg:h-[100vh] w-[100vw] z-50'>
        <Spline
          scene="https://prod.spline.design/jnDvbjxYr5t-6cgS/scene.splinecode"
        />
      </div>
      <div id="hero"  className='hero_section  text-white px-[1rem]  sm:px-[3rem] relative xl:px-[9rem] pt-[4rem] h-[89vh] min-h-[40rem] '>
        <div className='flex flex-col items-center text-center'>
          <div className='title w-[100%] font-semibold'>
            <div className=''>
              <div className='xl:text-[90px] lg:text-[60px] text-[44px] text_anim opacity-0'>Supercharge your CLI with</div>
              <div className='xl:text-[120px] lg:text-[80px] text-[56px] text_anim opacity-0'>
                BLACKSMITH
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero