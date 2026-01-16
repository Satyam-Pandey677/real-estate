import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        <Image
            src="/landing-splash.jpg"
            alt='Rentiful Rental Platform Hero Section'
            fill
            className='object-cover object-center '
            priority
        />

        <div className='absolute inset-0 bg-black bg-opacity-60'></div>
    </div>
  )
}

export default HeroSection