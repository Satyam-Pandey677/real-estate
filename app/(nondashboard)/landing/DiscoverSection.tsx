"use client"

import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';


const containerVariant = {
    hidden: {opacity:0 },
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.2
        }
    }
}

const itemVariant={
    hidden:{opacity:0, y:20},
    visible:{opacity:1, y:20}
};



const DiscoverSection = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.8}}
        variants={containerVariant}
        className='py-12 bg-white mb-16' 
    >

        <div className='max-w-4xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16'>
            <motion.div
                variants={itemVariant}
                className='my-12 text-center'
            >
                <h2 className='text-3xl font-semibold leading-tight text-gray-800'>
                    Discover
                </h2>

                <p className='mt-4 text-lg text-gray-600'>
                    Find your Dream Rental Property Today
                </p>

                <p className='mt-2 text-gray-500 max-w-3xl mx-auto'>
                    Searching for your dream rental property has never been easiar.With our user-friendly search feature, you can quickly find the perfect home that meets all yours needs. Starts your search today and discover your dream rental property.
                </p>
            </motion.div>

            <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16'>
                {[0,1,2].map((index) => (
                    <motion.div key={index} variants={itemVariant}>
                        <FeatureCard
                            imageSrc={`/landing-search${3 - index}.png`} 
                            title={
                                [
                                    "TrushWorthy and verified Listings",
                                    "Browse Rental Listing with Ease",
                                    "Simplify Your Rental Search with Advance"
                                ][index]
                            }
                            discription={
                                [
                                    "Descover the best rental option with user review and ratings",
                                    "GEt access to user review and rating for a better understandingof rental option.",
                                    "Find trustworthy and verified rental listing to ensure a hassle-free exprence."
                                ][index]
                            }
                            linkText={["Explore", "Search", "Discover"][index]}
                            linkHref={["/explore", "/search", "/discover"][index]}
                        />
                    </motion.div>
                ))}
            </div>
        </div>

    </motion.div>
  )
}

const FeatureCard =({
    imageSrc,
    title,
    discription,
    linkText,
    linkHref
}:{
    imageSrc:string,
    title:string,
    discription:string,
    linkText:string,
    linkHref:string
}) => (
    <div className='text-center '>
        <div className='p-4 rounded-lg mb-4 item-center justify-center h-48'>
            <Image
                src={imageSrc}
                alt={title}
                width={400}
                height={400}
                className='w-full h-full object-contain'
            />
        </div>
        <h3 className='text-xl font-semibold mb-2'>
            {title}
        </h3>
        <p className='mb-4 '>{discription}</p>
        <Link 
            href={linkHref}
            className=' inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100'
            scroll={false}
        >{linkText}</Link>
    </div>
)

export default DiscoverSection;