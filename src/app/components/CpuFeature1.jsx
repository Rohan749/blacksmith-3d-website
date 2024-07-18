import React from 'react'

const CpuFeature1 = () => {
  return (
    <div id="feature" className='z-50 bottom_page2 text-white px-[1rem] sm:px-[3rem] xl:px-[6rem] py-[6rem]  min-h-[100vh] bg-black'>
       <header><span>I </span>Our Key Features</header>
      <div className='flex flex-col gap-[5rem] pt-[4rem]'>
        <div className='flex flex-col lg:flex-row items-center justify-between lg:w-[70%]'>
          <div className="head w-[100%] text-left ">
            01
          </div>
        <div className='lg:w-[100%]'>
          <subheader className="text-center lg:text-left">Twice as Fast CI</subheader>
          <div className='sm:text-lg lg:text-xl leading-[2rem] lg:leading-[2.4rem] py-4'>Run continuous integration up to 2x faster using high-performance gaming CPUs.</div>
        </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-between lg:w-[70%]'>
          <div className="head w-[100%] text-left ">
            02
          </div>
        <div className='lg:w-[100%]'>
          <subheader className="text-center lg:text-left">Cost Efficiency</subheader>
          <div className='sm:text-lg lg:text-xl leading-[2rem] lg:leading-[2.4rem] py-4'>Achieve up to 50% cost savings compared to traditional hyperscalers, eliminating the need for spot instances.</div>
        </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-between lg:w-[70%]'>
          <div className="head w-[100%] text-left ">
            03
          </div>
        <div className='lg:w-[100%]'>
          <subheader className="text-center lg:text-left">Easy Integration with GitHub Actions</subheader>
          <div className='sm:text-lg lg:text-xl leading-[2rem] lg:leading-[2.4rem] py-4'>Seamless transition to faster CI with a one-line change, complete with colocated warm caches and optimizations for common CI tasks like Docker image builds.</div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default CpuFeature1