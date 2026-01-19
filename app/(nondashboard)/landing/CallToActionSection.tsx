"use client"

import Image from 'next/image'
import {motion} from "framer-motion"

const CallToActionSection = () => {
  return (
    <div className='relative py-24'>
        <Image
            src="/landing-call-to-action.jpg"
            alt='Rentalfull Seach Section Background'
            fill 
            className='object-cover object-center'
        />

        <div className='absolute inset-0 bg-black/60'></div>

        <motion.div
            initial={{opacity:0, y:20}}
            transition={{duration:0.5}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='relative max-w-41 xl:max-w-6xl mx-auto px-6 sm:px-12 xl:px-16 py-12'
        >
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className='mb-6 md:mb-0 md:mr-10'>
                    <h2 className='text-2xl font-bold text-while '>
                        Find Your Dream Rental Property  
                    </h2>
                </div>
                <div >
                    <p className='text-white mb-3 '>
                        Discover a wide range of rental properties in your desired location.
                    </p>
                </div>
            </div>
        </motion.div>

    </div>
  )
}

export default CallToActionSection