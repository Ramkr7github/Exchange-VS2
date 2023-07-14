import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {GiNorthStarShuriken} from "react-icons/gi"
import girl from '../assets/instant.png'
const Services = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <div>
       <div className='bg-[#0f0e0e] flex flex-col sm:flex-row justify-center items-center gap-x-[300px] sm:gap-x-[10px] mt-2 w-[550px] sm:w-full'>

       <div data-aos="fade-left" data-aos-duration="2000">
                <img src={girl} alt="instant" className='h-[350px] mt-3'/>
            </div>
            <div className='ml-8 px-36 py-8 ' data-aos="fade-right" data-aos-duration="2000">
                <h3 className='text-[#FE6602] font-bold py-3 text-[40px]'>INSTANT SERVICES</h3>
                <ul className='text-[#dff13c] animate-pulse'>
                    <li className='py-1 flex gap-2'><GiNorthStarShuriken /> 24X7 Instant Withdrawal & Deposit</li>
                    <li className='py-1 flex gap-2'><GiNorthStarShuriken /> Live Stream Of Popular Events</li>
                    <li className='py-1 flex gap-1'><GiNorthStarShuriken /> Trusted International Casinos available</li>
                    <li className='py-1 flex gap-1'><GiNorthStarShuriken /> Surety of Winning Rate</li>
                    <li className='py-1 flex gap-1'><GiNorthStarShuriken /> 24X7 Customer Support</li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Services
