import React from 'react'

const AboutUs = () => {
    return (
        <div id='about' className='relative'>
            <div id='about-us' className=' bottom_page bg-transparent px-[1rem] sm:px-[3rem] xl:px-[6rem] pt-[6rem]  h-[200vh] z-20'>
                <div className='flex lg:flex-row flex-col justify-between font_black'>
                    <header className='lg:w-[50%] '><span>I </span>About us</header>
                    <div className='lg:text-2xl text-xl lg:w-[55%] text-justify leading-9'>
                        At Blacksmith, we revolutionize continuous integration with high-performance gaming CPUs, providing faster, cost-effective, and reliable CI for engineering teams.
                    </div>
                </div>

            </div>
            <div className='bottom_text font-bold text-black'>
                BLACKSMITH
            </div>
        </div>
    )
}

export default AboutUs