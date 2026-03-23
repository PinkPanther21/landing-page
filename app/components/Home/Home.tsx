"use client";
import Hero from './Hero/Hero'
import About from './About/About'
import WhyChoose from './WhyChooseUs/WhyChoose'
import TeamConnect from './TeamConnect/TeamConnect'
import Download from './DownloadSection/Download'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: string;
}

interface HomeProps {
  team: TeamMember[];
}

const Home = ({ team }: HomeProps) => {

  useEffect(()=>{
   const initAOS = async ()=>{
    await import('aos')
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom' 
    })
    }
    initAOS()
  },[])
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <WhyChoose />
      <TeamConnect team={team} />
      <Download />     
    </div>
  )
}

export default Home