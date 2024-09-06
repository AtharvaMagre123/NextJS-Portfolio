

import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" >
      <video
        autoPlay
        muted
        loop
        className=" absolute rotate-180 top-[-200px]  h-30 w-full left-0 z-[1] object-cover "
      >
        <source src="/solarsys.webm" type="video/webm" />
      </video>
      <HeroContent/>
      </div>
  )
}

export default Hero
