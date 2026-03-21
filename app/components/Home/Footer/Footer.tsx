import React from 'react'
import Logo from '../../Helper/Logo'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-white border-t border-gray-200 mt-20'>
      <div className='w-[80%] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
      
        <div className='space-y-4'>
         <Logo />
         <p className='text-gray-500 text-sm leading-relaxed'>
            We're the digital agency to create your digital presence for better conversion and sales.
         </p>
        </div>

        <div>
            <h3 className='text-gray-400 font-medium mb-6'>Company</h3>
            <ul className='space-y-4 text-sm text-gray-700'>
              <li className='hover:text-black cursor-pointer'>About Us</li>
              <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
              <li className='hover:text-black cursor-pointer'>Terms & Conditions</li>
              <li className='hover:text-black cursor-pointer'>FAQ</li>
              <li className='hover:text-black cursor-pointer'>Contact</li>
            </ul>
        </div>

        <div>
            <h3 className='text-gray-400 font-medium mb-6'>Contact Details</h3>
            <ul className='space-y-5 text-sm text-gray-700'>
             <li className='flex items-start gap-3'>
               <span className='text-pink-500 text-lg'>🎈</span>
               <span>
                Texas <br /> United States
               </span>
             </li>
             <li className='flex items-start gap-3'>
               <span className='text-pink-500 text-lg'>📞</span>
               <div>
                <p>+91 222 333 444</p>
                <p className='text-gray-400'>Days - 8am - 10pm</p>
               </div>
             </li>
             <li className='flex items-start gap-3'>
               <span className='text-blue-500 text-lg'>📝</span>
               <span>
                info@gmail.com
               </span>
             </li>
            </ul>
        </div>

         <div> 
        <h3 className='text-gray-400 font-medium mb-6'>Follow us on social media</h3>
        <p className='text-gray-500 text-sm mb-6'>Get the latest trends updates right at your inbox.</p>
        <div className='flex flex-wrap gap-2 text-sm text-gray-700 mb-6'>
       <span className='hover:text-black cursor-pointer'>Facebook</span>.
        <span className='hover:text-black cursor-pointer'>Instagram</span>.
         <span className='hover:text-black cursor-pointer'>Twitter</span>.
        </div>

        <Image src={'/Image/footer.png'} alt='img' className='object-cover' width={200} height={200}/>
        </div>
      </div>
      <div className='border-t border-gray-200 py-6 text-center text-sm text-gray-500'>&copy; 2025 My Website</div>
    </div>
  )
}

export default Footer