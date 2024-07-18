import React from 'react'

const CpuFeature2 = () => {
  return (
    <div id="section2" className='bottom_page text-white px-[1rem] sm:px-[3rem] xl:px-[6rem] pt-[4rem] h-[100vh] '>
      {/* <header className='text-center'>Why are we using a Gaming CPU?</header> */}
      <div className='flex  lg:flex-row flex-col items-center justify-between h-[80%] py-[2rem]'>
        
        <div className='lg:w-[50%]'>
          <subheader className="text-left">Improved Efficiency</subheader>
          <div className='sm:text-lg lg:text-xl leading-[2rem] lg:leading-[2.4rem] py-4'>Their superior processing power leads to better resource utilization, resulting in more efficient CI operations.</div>
        </div>
        <div>
          <subheader className="text-left"></subheader>
        </div>
      </div>

    </div>
  )
}

export default CpuFeature2