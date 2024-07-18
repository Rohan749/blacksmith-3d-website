import React from 'react'
import TeamCard from './common/TeamCard'
import p1 from "../../assets/images/p1.png"
import p2 from "../../assets/images/p2.png"
import p3 from "../../assets/images/p3.png"


const teamSection = [
  {
    name: "Aditya Jayaprakash",
    position: "Co-founder and CEO",
    profile: p1,
    link: {
      twitter: 'https://x.com/adijayaprakash',
      linkedin: "https://www.linkedin.com/in/adijp"
    }
  },
  {
    name: "Aditya Maru",
    position: "Co-founder and co-CTO",
    profile: p2,
    link: {
      twitter: 'https://x.com/adityamaru27',
      linkedin: "https://www.linkedin.com/in/maruaditya/"
    }
  },
  {
    name: "Aayush Shah",
    position: "Co-founder and co-CTO",
    profile: p3,
    link: {
      linkedin: "https://www.linkedin.com/in/aayushshah15",
      twitter: '',
    }
  },
]


const Teams = () => {
  return (
    <div id="teams" className='bg_section  text-white  px-[1rem] sm:px-[3rem] xl:px-[6rem] py-[6rem] text-center '>
        <header><span>I </span>Our Team</header>
        <div className=' flex items-center justify-between gap-4 py-[4rem]  overflow-x-scroll'>
          {
            teamSection.map((team, index) => (
              <div key={index}>
                <TeamCard name={team.name} position={team.position} profile={team.profile} twt={team.link.twitter} linkdn={team.link.linkedin} />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Teams