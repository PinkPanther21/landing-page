import Image from 'next/image'
import React from 'react'

const WhyChoose = () => {
  return (
    <div className='py-16'>
        <div className='w-[80%] sm:mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
            <div>
                <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:w-4/5'>
                The intelligent way to manage any project.
                </div>

                <p className='text-gray-600 text-lg mt-6 sm:w-4/5'>
                    Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.
                </p>

                <div>
                    <button className='mt-6 text-orange-400 font-medium cursor-pointer text-lg'>Get Started Now</button>
                    <span className='w-36 h-1 bg-orange-400 mt-2 block'></span>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <Image src={"/Image/w1.png"} alt='img' width={600} height={600}/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose