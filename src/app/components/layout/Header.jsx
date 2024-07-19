"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import logo from "@/assets/images/blacksmith.png"
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {

    const [navVisible, setNavVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const el = ref.current;
        gsap.to(el, {
            duration: 2, 
            y: '-9rem',
            scrollTrigger: {
                trigger: el,
                scrub: 1,
                start: 'top+=300 top',
            }
        })
    }, [])



    return (
        <nav ref={ref} className='flex items-center justify-between px-[1rem] sm:px-[3rem] xl:px-[6rem] py-[2rem] fixed w-[100vw] bg-black z-40'>
            <div className='h-[3rem] w-[3rem] flex items-center gap-2 font-bold text-xl z-50'>
                <Image src={logo} alt='Blacksmith' />
                <span>Blacksmith</span>
            </div>
            <div className='hidden xl:block z-50'>
                <ul className='flex gap-10 text-xl'>
                    <Link href=""><li>Home</li></Link>
                    <Link href=""><li>About us</li></Link>
                    <Link href=""><li>Features</li></Link>
                    <Link href=""><li>Team</li></Link>
                    <Link href=""><li>Contact us</li></Link>
                </ul>
            </div>
            <div className='hidden xl:block'>
                <button className='custom_btn'>Get started</button>
            </div>
            <div className='block xl:hidden  z-40'>
                <Hamburger onToggle={() => setNavVisible(!navVisible)} className="" />
            </div>
            <div className={`${navVisible ? "visible" : "hidden"} absolute right-0 top-0 h-[100vh] w-[15rem] bg-[#0292b4] z-30`}>
                <div className='py-[6rem] px-[1rem] text-xl'>
                    <ul className='flex flex-col gap-4 z-40 '>
                        <Link href=""><li>Home</li></Link>
                        <Link href=""><li>About us</li></Link>
                        <Link href=""><li>Features</li></Link>
                        <Link href=""><li>Team</li></Link>
                        <Link href=""><li>Contact us</li></Link>
                        <button className='custom_btn2 my-6'>Get started</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header