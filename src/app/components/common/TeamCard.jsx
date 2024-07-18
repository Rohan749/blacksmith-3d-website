import React from 'react'
import p1 from "../../../assets/images/p1.png"
import p2 from "../../../assets/images/p2.png"
import p3 from "../../../assets/images/p3.png"
import Image from 'next/image'
import Link from 'next/link'
import twitter from "../../../assets/images/twitter.png"
import linkedin from "../../../assets/images/linkedin.png"


const TeamCard = ({name, profile, position, twt, linkdn}) => {
  return (
    <div className=' w-full min-h-[20rem] flex flex-col items-center gap-3 team_card'>
      <div className='w-[83vw] sm:w-[25rem] rounded-full team_image_container'>
        <Image className='rounded-full' src={profile} alt={position} />
      </div>
      <div className='text-center text-2xl font-bold'>
        {name}
      </div>
      <div className='text-center text-xl '>
        {position}
      </div>
      <div className='flex items-center gap-4 justify-center '>
        <Link target='_blank' href={twt}>
          <Image className='h-[2rem] w-[2rem]' src={twitter} alt='twitter'/> 
        </Link>
        <Link target='_blank' href={linkdn}>
        <Image className='h-[2rem] w-[2rem]' src={linkedin} alt='linkedin'/> 
        </Link>
      </div>
    </div>
  )
}

export default TeamCard