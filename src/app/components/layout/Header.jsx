"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/assets/images/blacksmith.png"
import Link from 'next/link'
import Hamburger from 'hamburger-react'

const Header = () => {

    const [navVisible, setNavVisible] = useState(false);

    return (
        <nav className='flex items-center justify-between px-[1rem] sm:px-[3rem] xl:px-[6rem] py-[2rem] relative'>
            <div className='h-[3rem] w-[3rem] flex items-center gap-2 font-bold text-xl'>
                <Image  src={logo} alt='Blacksmith' />
                <span>Blacksmith</span>
            </div>
            <div className='hidden xl:block'>
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
            <div className='block xl:hidden  z-50'>
                <Hamburger onToggle={() => setNavVisible(!navVisible)} className="" />
            </div>

            <div className={`${navVisible ?  "visible" : "hidden"} absolute right-0 top-0 h-[100vh] w-[15rem] bg-[#0292b4] z-40`}>
            <div className='py-[6rem] px-[1rem] text-xl'>
                <ul className='flex flex-col gap-4 '>
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