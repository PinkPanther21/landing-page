"use client";
import { NAVLINKS } from '@/constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type props = {
  showNav:  boolean,
  closeNav: ()=>void,
}

const MobileNav = ({showNav,closeNav}:props) => {
  const navOpenCloseStyle = showNav ? "translate-x-0":"translate-x-[-100%]"
  return (
    <div>
      <div className={`fixed ${navOpenCloseStyle} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}></div>

      <div className={`text-white ${navOpenCloseStyle} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[50%] bg-red-600 space-y-6 z-1050`}>
        {NAVLINKS.map((link)=>{
          return <Link key={link.id} href={link.url}>
          <p className='text-white w-fit text-[20px] ml-10 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
          </Link>
        })}

        <CgClose onClick={closeNav} className='absolute top-4 right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'/>
      </div>
    </div>
  )
}

export default MobileNav