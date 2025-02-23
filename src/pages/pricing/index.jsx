
import "@/css/style.css";
import Navbartwo from "@/pages/navbar/Navbar";
import { useMotionValue, motion, } from "framer-motion";
import React, { useState } from "react";
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import AnimatedCard from "@/components/ui/animateCard"
import WorldMap from "@/components/ui/world-map";
import Lamp from "@/components/ui/lamp";
import { useSpring, animated } from '@react-spring/web';
import Aurora from '@/components/ui/Aurora';
import FadeContent from '@/components/ui/fadecontent'
import Footer from "@/css/footer"

export default function MeteorsDemo() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = React.useRef(null);
  const { scrollY } = useScroll(); 
  const height = useTransform(scrollY, [0, 100], ["60vh", "50vh"]); 
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
 
  const [{ scale, y }, api] = useSpring(() => ({
    scale: 1,
    y: 0,
    config: { mass: 1, tension: 200, friction: 30 }
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = 1 - Math.max(0, Math.min(1, (top + height) / (windowHeight + height)));
      
      setScrollProgress(progress);
      

  api.start({
    scale: 1 - progress * 0.5, // Scale from 1 to 0.5
    y: -progress * 100 // Move upward while scrolling
  });
};

  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [api]);


  return (
    <div className="bg-black flex flex-col min-h-full">
      <Navbartwo/>

      <div
      className="h-[250vh] bg-black min-w-full dark:border dark:border-white/[0.1] rounded-md relative overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>

<div className="">
  <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  speed={10}
  className="h-[20vh]"
/>
    <div className="h-[150vh]">
     {/* Scroll container */}
      <div 
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center"
      >

        <animated.div
          style={{
            transform: y.to(y => `translateY(${y}px) scale(${scale})`),
          }}
          className="relative transition-transform duration-300"
        >
          <animated.h1  className="text-2xl md:text-3xl px-4 font-bold text-white text-center">
          Join our Community with just
          </animated.h1>
          <div className="flex justify-center items-start px-10 max-w-3xl">
          <img src="https://res.cloudinary.com/dna3hwzre/image/upload/v1740067658/POT/ezj59eiujl8b7jauuvyw.png"
      alt="Scaling content"
      className="md:w-fit w-44 h-fit  md:mb-20 rounded-2xl shadow-xl"
      style={{ height }}
    />
          
          </div>
        </animated.div>
      
      </div>

      {/* Next content section */}
      <div className={`transition-opacity  duration-500  ${
        scrollProgress > 0.9 ? 'opacity-100' : 'opacity-1'
      }`}>
        <div className="container  mx-auto max-w-4xl text-start my-24 md:my-28">
        
          <h2 className="text-md lg:text-3xl pb-2 font-bold md:pb-8 text-start pointer-events-none  bg-gradient-to-r from-purple-400 to-yellow-200 bg-clip-text  leading-none text-transparent "> POT is a thriving community dedicated to crypto traders, offering reliable insights and verified transaction data. We focus on transparency and accuracy, empowering traders with real-time information and peer-reviewed analytics. Unlike platforms with unverified claims or high subscription fees, POT provides an affordable, trustworthy space where traders can connect, share, and grow.</h2>
        
        </div>
      </div>
    </div>
    </div>
      
       {/* <BackgroundCellAnimation /> */}
      
      
    <div className=" w-full justify-center gap-6 mt-20 min-h-screen items-center flex">
  
  <div className="preview flex min-h-[350px] bg-neutral-950 w-full justify-center p-2 sm:p-10 items-center"><div className="w-full max-w-7xl mx-auto  px-4 md:px-8"><div className="relative w-fit mx-auto p-4 flex items-center justify-center"><div className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-900 w-full" ><div className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-950 bg-neutral-200 opacity-1 will-change-auto" ></div><div className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-950 bg-neutral-200 opacity-100 will-change-auto"></div><div className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-900 bg-neutral-200 opacity-100 will-change-auto" ></div><div className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-900 bg-neutral-200 opacity-100 will-change-auto" ></div></div><h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-8000 text-neutral-100 ">Value is what you get.</h2></div><p className="max-w-xl text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">For $5 a month or $60 a year, you'll unlock access to AI driven market insights, real-time asset pricing, a lightning-fast screener, ad-free news and much more.</p><div className="mt-20  grid cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem]"> <div className="group isolate relative rounded-2xl bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-3">
  <video src="https://cdn.dribbble.com/userupload/12883516/file/original-736c88e6feac926f0e48226976d73dba.mp4" autoPlay muted loop className="w-full h-full object-cover"/>
  <div className="-pt-32 ml-6 h-40 relative">
    <h3 className="font-sans text-2xl font-medium tracking-tight absolute bottom-0 left-0 text-neutral-100">
      <span className="pointer-events-none pl-4 whitespace-pre-wrap bg-gradient-to-r from-green-400 to-sky-400 bg-clip-text text-start z-50 text-3xl font-semibold leading-none text-transparent">Market Analysis</span> <br/>
      at your fingertips.
    </h3>
  </div>
</div>

  <div className="group isolate rounded-2xl bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-2"><div className="overflow-hidden relative  w-full h-full"> <div className="  bg-black  w-full">
      <div className="max-w-7xl mx-2 mt-1 text-start">
        <p className="font-semibold text-xl mb-1 md:text-4xl text-white ">
          Available{" "}
          <span className="text-neutral-400">
            {" everywhere".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>

        <p className="text-gray-500 max-w-2xl text-start text-sm">Access our platform from anywhere <br/> in the world with our globally distributed network.</p>
       
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      /> <h1 className="pointer-events-none pl-4 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-start z-50 text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">100+ <br/>
    Countries</h1>
    </div> </div></div>
  
  <div className="group isolate rounded-2xl bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex  justify-between md:col-span-2"> <AnimatedCard/> </div>
  
  <div className="group isolate rounded-2xl bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-3"><div className="p-6 py-8"><h1 className="font-sans  font-medium tracking-tight text-2xl  text-blue-600"><span className="text-white">Crypto Screener</span> At the speed of thought.</h1></div><div className="overflow-hidden relative w-full h-full"><div className="w-full h-full p-2 rounded-xl  bg-neutral-950 border-2 border-neutral-700 ml-6 mt-2"><img src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739800188/POT/rl61gg2deng8ms4beyhj.png" alt="Dashboard" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="w-full object-cover rounded-lg " style={{ color: "Transparent" }} /></div></div></div></div></div></div>
          

  
    </div>

     <div className="border-b max-h-screen  border-neutral-800">
            <Lamp />
            
          </div> 
    <div className="border-t border-neutral-700">
  <Footer/>
  </div>
    </div>
  );
}
