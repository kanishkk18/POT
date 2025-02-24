import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Home.css';
import tick from '@/Assets/tick.svg';
import rightarrow from '@/Assets/rightarrow.svg';
import GridCard from '@/css/Gridcards';
import Footer from '@/css/footer';
import MacbookScroll from '@/css/scroollaptop';
import StickyScroll from '@/css/stickyscro';
import BentoDemo from '@/css/Bentogrid';
import Lamp, { LampContainer } from "@/components/ui/lamp";
import PromoCard from "@/css/Promocard";
import Clients from "@/css/Clients";

import { BorderBeam } from '@/components/magicui/border-beam';
import Laptop from "@/css/laptop";
import ContainerTab from "../../components/ui/container-scroll-animation";
import Intelligence from '@/css/intelligence';
import HeroVideoDialog from '@/css/HeroVideoDialog';
import Keyboard from '@/components/ui/keyboard';
import { CardStack } from '@/components/ui/card-stack';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';


const content = [
  
  {
    title: "Crypto Charts",
    description:
      "POT seamlessly tracks your Currency and scouts new opportunities, keeping you informed about earnings dates and key performance indicators.",
    content: (
     <div className="h-full w-full flex items-center justify-center text-white">
  {/* Image for Laptops (md and above) */}
  <img
    src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739800188/POT/rl61gg2deng8ms4beyhj.png"
    width={400}
    height={400}
    className="hidden md:block h-full w-full object-cover rounded-tl-md rounded-br-md"
    alt="Linear board demo"
  />
  
  {/* Image for Small Screens (below md) */}
  <img
    src="https://res.cloudinary.com/dna3hwzre/image/upload/v1740170498/POT/komlfdu5bfuz8uotkbhe.png"
    className="block md:hidden h-full w-full object-cover rounded-tl-md rounded-br-md"
    alt="Linear board demo"
  />
</div>
    ),
  },
  {
    title: "Crypto Coins",
    description:
      "POT generates a personalized feed for you, providing direct access to market news and events. Saving you hundreds of hours in research time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
      {/* Image for Laptops (md and above) */}
      <img
        src="https://i.pinimg.com/736x/44/18/94/441894ddfcd410952a19ba5716802019.jpg"
        width={400}
        height={400}
        className="hidden md:block h-full w-full object-cover rounded-tl-md rounded-br-md"
        alt="Linear board demo"
      />
      
      {/* Image for Small Screens (below md) */}
      <img
        src="https://i.pinimg.com/736x/31/10/47/311047d39112a80b83298b966d87310a.jpg"
        className="block md:hidden h-full w-full object-cover rounded-tl-md rounded-br-md"
        alt="Linear board demo"
      />
    </div>
      
    ),
  },
  {
    title: "Crypto World",
    description:
    "Experience the future of Crypto World with POT! Discover cutting-edge design and innovative features, all wrapped in an ultra user-friendly environment that makes analyzing charts more effortless and enjoyable.",
        content: (
      <div
        className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://i.pinimg.com/736x/30/f4/5b/30f45b308f49cfcecae811f849c575a5.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-tl-md rounded-br-md"
          alt="linear board demo" />
      </div>
    ),
  },
  
  
];

export const Highlight = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
 
const CARDS = [
  
    {
      id: 0,
      name: "Satoshi Nakamoto",
      designation: "Blockchain Pioneer",
      content: (
        <p>
          The <Highlight>Proof of Transaction (POT)</Highlight> concept is a game-changer. 
          Transparent, secure, and lightning-fast transactions make this a must-have for the 
          crypto community.
        </p>
      ),
    },
    {
      id: 1,
      name: "Vitalik Buterin",
      designation: "Ethereum Co-Founder",
      content: (
        <p>
          <Highlight>POT is redefining crypto transparency</Highlight>. It's exactly what we need 
          for seamless and verifiable transactions across decentralized networks.
        </p>
      ),
    },
    {
      id: 2,
      name: "CZ Binance",
      designation: "Crypto Exchange Mogul",
      content: (
        <p>
          With <Highlight>POT integration</Highlight>, tracking transactions has never been easier. 
          This could be the future of verifiable and decentralized financial proof.
        </p>
      ),
    },
  ];


export default function Home() {
  const [isAppleHovered, setIsAppleHovered] = useState(false);

  return (
    <div className='bg-black overflow-x-hidden'>
      <Navbar />
      {/* <div className="w-full max-w-screen">
     <Hero/>
     </div> */}

{/* <div className=""><div className="b relative mb-12 overflow-hidden bg-gray-50 py-10 dark:bg-black md:py-40"><svg width="166" height="298" viewBox="0 0 166 298" fill="none" xmlns="http://www.w3.org/2000/svg" className="aspect-square pointer-events-none absolute inset-x-0 top-0 h-[100px] w-full md:h-[200px]"><line y1="-0.5" x2="406" y2="-0.5" transform="matrix(0 1 1 0 1 -108)" stroke="url(#paint0_linear_254_143)"></line><line y1="-0.5" x2="406" y2="-0.5" transform="matrix(0 1 1 0 34 -108)" stroke="url(#paint1_linear_254_143)"></line><line y1="-0.5" x2="406" y2="-0.5" transform="matrix(0 1 1 0 67 -108)" stroke="url(#paint2_linear_254_143)"></line><line y1="-0.5" x2="406" y2="-0.5" transform="matrix(0 1 1 0 100 -108)" stroke="url(#paint3_linear_254_143)"></line><line y1="-0.5" x2="406" y2="-0.5" transform="matrix(0 1 1 0 133 -108)" stroke="url(#paint4_linear_254_143)"></line><line y1="-0.5" x2="406" y2="-0.5" transform="matrix(0 1 1 0 166 -108)" stroke="url(#paint5_linear_254_143)"></line><defs><linearGradient id="paint0_linear_254_143" x1="-7.42412e-06" y1="0.500009" x2="405" y2="0.500009" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_254_143" x1="-7.42412e-06" y1="0.500009" x2="405" y2="0.500009" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear_254_143" x1="-7.42412e-06" y1="0.500009" x2="405" y2="0.500009" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_254_143" x1="-7.42412e-06" y1="0.500009" x2="405" y2="0.500009" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear_254_143" x1="-7.42412e-06" y1="0.500009" x2="405" y2="0.500009" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear_254_143" x1="-7.42412e-06" y1="0.500009" x2="405" y2="0.500009" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg><svg width="445" height="418" viewBox="0 0 445 418" fill="none" xmlns="http://www.w3.org/2000/svg" className="aspect-square pointer-events-none absolute inset-x-0 -bottom-20 z-20 h-[150px] w-full md:h-[300px]"><line x1="139.5" y1="418" x2="139.5" y2="12" stroke="url(#paint0_linear_0_1)"></line><line x1="172.5" y1="418" x2="172.5" y2="12" stroke="url(#paint1_linear_0_1)"></line><line x1="205.5" y1="418" x2="205.5" y2="12" stroke="url(#paint2_linear_0_1)"></line><line x1="238.5" y1="418" x2="238.5" y2="12" stroke="url(#paint3_linear_0_1)"></line><line x1="271.5" y1="418" x2="271.5" y2="12" stroke="url(#paint4_linear_0_1)"></line><line x1="304.5" y1="418" x2="304.5" y2="12" stroke="url(#paint5_linear_0_1)"></line><path d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417" stroke="url(#paint6_linear_0_1)" stroke-opacity="0.1" stroke-width="1.5"></path><path d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417" stroke="url(#paint7_linear_0_1)" stroke-opacity="0.1" stroke-width="1.5"></path><defs><linearGradient id="paint0_linear_0_1" x1="140.5" y1="418" x2="140.5" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_0_1" x1="173.5" y1="418" x2="173.5" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear_0_1" x1="206.5" y1="418" x2="206.5" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_0_1" x1="239.5" y1="418" x2="239.5" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear_0_1" x1="272.5" y1="418" x2="272.5" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear_0_1" x1="305.5" y1="418" x2="305.5" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint6_linear_0_1" x1="115" y1="390.591" x2="-59.1703" y2="205.673" gradientUnits="userSpaceOnUse"><stop offset="0.481613" stop-color="#F8F8F8"></stop><stop offset="1" stop-color="#F8F8F8" stop-opacity="0"></stop></linearGradient><linearGradient id="paint7_linear_0_1" x1="330" y1="390.591" x2="504.17" y2="205.673" gradientUnits="userSpaceOnUse"><stop offset="0.481613" stop-color="#F8F8F8"></stop><stop offset="1" stop-color="#F8F8F8" stop-opacity="0"></stop></linearGradient></defs></svg><svg width="1382" height="370" viewBox="0 0 1382 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-0 z-30 h-full w-full"><path d="M268 115L181.106 6.97176C178.069 3.19599 173.485 1 168.639 1H0" stroke="url(#paint0_linear_337_46)" stroke-opacity="0.1" stroke-width="1.5"></path><path d="M1114 115L1200.89 6.97176C1203.93 3.19599 1208.52 1 1213.36 1H1382" stroke="url(#paint1_linear_337_46)" stroke-opacity="0.1" stroke-width="1.5"></path><path d="M268 255L181.106 363.028C178.069 366.804 173.485 369 168.639 369H0" stroke="url(#paint2_linear_337_46)" stroke-opacity="0.1" stroke-width="1.5"></path><path d="M1114 255L1200.89 363.028C1203.93 366.804 1208.52 369 1213.36 369H1382" stroke="url(#paint3_linear_337_46)" stroke-opacity="0.1" stroke-width="1.5"></path><defs><linearGradient id="paint0_linear_337_46" x1="26.4087" y1="1.00001" x2="211.327" y2="175.17" gradientUnits="userSpaceOnUse"><stop offset="0.481613" stop-color="#F8F8F8"></stop><stop offset="1" stop-color="#F8F8F8" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_337_46" x1="1355.59" y1="1.00001" x2="1170.67" y2="175.17" gradientUnits="userSpaceOnUse"><stop offset="0.481613" stop-color="#F8F8F8"></stop><stop offset="1" stop-color="#F8F8F8" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear_337_46" x1="26.4087" y1="369" x2="211.327" y2="194.83" gradientUnits="userSpaceOnUse"><stop offset="0.481613" stop-color="#F8F8F8"></stop><stop offset="1" stop-color="#F8F8F8" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_337_46" x1="1355.59" y1="369" x2="1170.67" y2="194.83" gradientUnits="userSpaceOnUse"><stop offset="0.481613" stop-color="#F8F8F8"></stop><stop offset="1" stop-color="#F8F8F8" stop-opacity="0"></stop></linearGradient></defs></svg><svg xmlns="http://www.w3.org/2000/svg" width="807" height="797" viewBox="0 0 807 797" fill="none" className="pointer-events-none absolute -left-96 top-0 hidden h-full w-full dark:block"><path d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z" fill="url(#paint0_radial_254_135)"></path><path d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z" fill="url(#paint1_radial_254_135)"></path><defs><radialGradient id="paint0_radial_254_135" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.0001 15.8894) rotate(90.3625) scale(869.41 413.353)"><stop stop-color="#23268F"></stop><stop offset="0.25" stop-color="#1A266B"></stop><stop offset="0.573634" stop-color="#0C0C36"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><radialGradient id="paint1_radial_254_135" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127.5 -31) rotate(1.98106) scale(679.906 715.987)"><stop stop-color="#2E459F"></stop><stop offset="0.283363" stop-color="#1C379B"></stop><stop offset="0.573634" stop-color="#0D0D33"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient></defs></svg><svg xmlns="http://www.w3.org/2000/svg" width="551" height="295" viewBox="0 0 551 295" fill="none" className="pointer-events-none absolute -right-80 bottom-0 hidden h-full w-full dark:block"><path d="M118.499 0H532.468L635.375 38.6161L665 194.625L562.093 346H0L24.9473 121.254L118.499 0Z" fill="url(#paint0_radial_254_132)"></path><defs><radialGradient id="paint0_radial_254_132" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(412.5 346) rotate(-91.153) scale(397.581 423.744)"><stop stop-color="#253E9D"></stop><stop offset="0.25" stop-color="#1B3390"></stop><stop offset="0.573634" stop-color="#0C0D2F"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient></defs></svg><div className="relative z-20 flex flex-col items-center justify-center overflow-hidden rounded-3xl p-4 md:p-12"><a className="flex items-center gap-1 rounded-full border border-[#404040] bg-gradient-to-b from-[#5B5B5D] to-[#262627] px-4 py-1 text-center text-sm text-white" href="#"><span className="text-sm  font-medium tracking-tight px-4 py-2 rounded-full">
          Introducing ConferioCal 1.0
        </span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-white"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg></a><h1 className="bg-gradient-to-b from-black to-neutral-600 bg-clip-text py-4 text-center text-2xl text-transparent dark:from-white dark:to-[#999] md:text-4xl lg:text-7xl">Effortless Scheduling,<br /> Your Way!</h1><p className="mx-auto max-w-2xl py-4 text-center text-base text-neutral-600 dark:text-neutral-300 md:text-lg">With our state of the art, cutting edge, we are so back kinda hosting services, you can deploy your website in seconds.</p><div className="flex flex-col items-center gap-4 py-4 sm:flex-row"><a className="w-40 gap-1 rounded-full border border-[#404040] bg-gradient-to-b from-[#5B5B5D] to-[#262627] px-4 py-2 text-center text-sm text-white" href="#">Start a project</a><a className="w-40 gap-1 rounded-full border border-transparent bg-neutral-100 px-4 py-2 text-center text-sm text-black dark:bg-white" href="#">Book a call</a></div></div></div></div>

      */}

      <div className="relative mx-auto w-full flex justify-center items-center  ">
        <img className='absolute md:hidden top-24 h-60' src="https://res.cloudinary.com/dna3hwzre/image/upload/v1740173994/POT/enboloreojzvma2g88km.png" alt="" />
      </div>
      <div className="md:mt-20 -pt-96"> 
        <MacbookScroll/>
      </div>

      <div className="md:min-h-screen hidden w-full md:flex justify-start px-72 items-center z-50 bg-gray-950 my-32">
        <div className="flex justify-start ">
      <Keyboard/>
      </div>

      <div className=" h-[400px] w-[450px] rounded-2xl absolute right-60 px-8 bg-neutral-900 flex justify-center items-center">
      <CardStack items={CARDS} />
    </div>
      </div>

      {/* mobile keyboard */}

      <div className="md:min-h-screen md:hidden flex w-full justify-start items-center z-50 bg-gray-950 my-24">
        <div className="flex justify-start ">
     <img src="https://www.fey.com/marketing/_next/static/media/keyboard_2x.3a539063.jpg" alt="" />
      </div>

      <div className=" h-[150px] w-[150px] rounded-2xl absolute right-2 flex-col pt-6  px-8 bg-neutral-900 flex justify-center items-center">
      <CardStack items={CARDS} />
    </div>
      </div>



<div className=" bg-neutral-600">
    <Laptop/>
</div>


      <div className="h-auto w-full bg-black ">
        <div className="flex flex-col justify-center items-center text-white py-16">
        <h1 className="  text-center text-3xl font-bold"> 
          Your personal analyst. Always by your side.
        </h1>
        <p className='text-md text-center pt-2 font-bold text-neutral-600'>Our advanced wishlist constantly keeps you informed with personalized.<br/> revelent updates, allowing you to focus on what's important.</p>
        </div>
        <StickyScroll content={content} className="" />
      
      </div>

      <div className="h-auto w-full bg-black md:mt-8">
        <div className="flex flex-col justify-center items-center text-white py-16">
        <h1 className="  text-center text-3xl md:text-5xl font-bold"> 
        The magic of clarity.
        </h1>
        <p className='text-sm md:text-base max-w-xs md:max-w-lg text-center pt-4 font-bold text-neutral-600'>Fey's Analyze tool simplifies complex financial data into clear, easy-to-understand insights. Delivered in seconds.</p>
        </div>
        <ContainerTab/>
      </div>

      <Intelligence/>

      <div className="mx-3 pb-4 md:mx-16 my-20">
        <PromoCard />
      </div>
      {/* <Clients/> */}
      
      <section className="bg-black py-16 ">
      <LampContainer className="min-h-[35vh] "/>
      <div className=" max-w-3xl lg:max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-8">
            <button className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
              <span>Watch the guided tour</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.25 14.75V9.25L14.75 12L10.25 14.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
              Crypto is finally effortless.
            </span>
          </h2>

          <Link to="/loginpage"  onMouseEnter={() => setIsAppleHovered(true)}
            onMouseLeave={() => setIsAppleHovered(false)} className="border text-white px-5 py-2 rounded-full font-semibold hover:text-gray-900 hover:bg-gray-100 transition-colors">
      Join it today
          </Link>
        </div>

        <div className="relative h-[297px] w-full">
          
          <div className="absolute inset-0 flex justify-center">
            <img
              src="https://www.fey.com/marketing/_next/static/media/light.2e8d1e67.svg"
              alt=""
              className="w-[1140px] h-full object-cover"
            />
          </div>

          <img
            src="https://www.fey.com/marketing/_next/static/media/shadow.438a35a1.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          
          <img
            src="https://www.fey.com/marketing/_next/static/media/laptop-closed-off_4x.434654c4.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0">
            <img
              src="https://www.fey.com/marketing/_next/static/media/laptop-closed-on_4x.06eb6128.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

         
          <div 
            className="absolute inset-0"
            onMouseEnter={() => setIsAppleHovered(true)}
            onMouseLeave={() => setIsAppleHovered(false)}
          >
            <img
              src="https://www.fey.com/marketing/_next/static/media/apple-unhovered_4x.f4daffa8.png"
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                isAppleHovered ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <img
              src="https://www.fey.com/marketing/_next/static/media/apple-hovered_4x.981e3b1f.png"
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                isAppleHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}
