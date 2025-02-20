import React from 'react';
import herologo from '@/Assets/herologo.mp4';
import { Cover } from "@/components/ui/cover";
import { Link } from 'react-router-dom';
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
   
         <div className="hero pt-20">
        <div className="ticker">

        <Marquee
        pauseOnHover
        reverse
        
        className="absolute overflow-hidden w-[45%] left-0 [--duration:14s] [mask-image:linear-gradient(to_right,transparent_10%,#000_100%)] "
     id="tickerimg" >
          <figure
            className={cn(
              "relative gap-2 flex justify-center space-x-0 w-full h-[300px] cursor-pointer overflow-hidden",
              "transform-gpu transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405537/CONFERIO/fbj7pfevl1av3zmasts9.jpg" alt="" />
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405603/CONFERIO/pwdqeuwyde09vddrmtec.jpg" alt="" />
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405537/CONFERIO/fbj7pfevl1av3zmasts9.jpg" alt="" />
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405603/CONFERIO/pwdqeuwyde09vddrmtec.jpg" alt="" />
          </figure>
       
      </Marquee>
          
      <Marquee
        pauseOnHover
        className="absolute overflow-hidden w-[45%] right-0 [--duration:14s] [mask-image:linear-gradient(to_left,transparent_10%,#000_100%)] "
     id="ticker-img" >
          <figure
            className={cn(
              "relative flex w-full h-[300px] cursor-pointer overflow-hidden gap-2",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405486/CONFERIO/rn3yxsvfabdk0iqgqdp3.jpg" alt="" />
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405603/CONFERIO/pwdqeuwyde09vddrmtec.jpg" alt="" />
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405537/CONFERIO/fbj7pfevl1av3zmasts9.jpg" alt="" />
            <img className='w-[400px] h-full object-cover' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718405603/CONFERIO/pwdqeuwyde09vddrmtec.jpg" alt="" />
             </figure>
       
      </Marquee>

          <div className="flex justify-center items-center ml-auto mr-auto z-50">
            <div className="herotext">
              <div className="herologo">
                <video autoPlay loop muted src={herologo}></video>
              </div>
              <span className='' >Connecting you through the<br /> <Cover>Universe</Cover></span>
              <p className='mt-4'>Conferio is a platform where you can conduct high-quality <br /> and secure video calls and meetings.</p>
              <div className="herobuttons mt-4">
                <Link to="https://8080-idx-briefinggit-1727187725691.cluster-nx3nmmkbnfe54q3dd4pfbgilpc.cloudworkstations.dev/"><button className="hero-button px-5 py-2 border border-white/25 rounded-[20px] w-[11vw] flex justify-center text-center bg-transparent font-sans bg-white hover:bg-transparent hover:text-white text-black font-medium">Create a meeting
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" /></button></Link>
                <Link to="/pricing"> <button className="hero-button  px-5 py-2 border border-white/25 rounded-[20px] w-[11vw] flex justify-center text-center bg-transparent font-sans text-white">Explore Plans</button></Link>

              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Hero