import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className='max-container padding-container flex flexCenter py-10 gap-10 md:gap-20 lg:gap-30 xl:flex-row bg-zinc-800'>
        <Image src='/red.jpg' alt='concert-red' width={300} height={50} className='border-2 border-black'/>
        <Image src='/yellow.jpg' alt='concert-yellow' width={300} height={50} className='border-2 border-black'/>
        <Image src='/blue.jpg' alt='concert-blue' width={300} height={50} className='border-2 border-black'/>
        
    </section>
  )
}

export default Banner