"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";
import  CanvasRevealEffect  from "./hovercard";
import { cn } from "@/lib/utils";


export const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={`meteor ${className} meteor-effect`}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

function CardSpotlight  ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
})  {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    (<div
      className={cn(
        "group/spotlight rounded-[20px] h-[85%] items-start relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 100%
            )
          `,
        }}>
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3} />
        )}
      </motion.div>
      <div className="card">
        <div className=" flex justify-center gap-3 bg-transparent items-start h-auto">
        <div className="meteor-icon-container ">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="meteor-icon text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
          
        </div> 
         <p className="text-[18px] font-bold text-white">Free</p>
        </div>
        <div className="flex items-center h-fit gap-1 text-white"><p className="text-[30px] font-semibold ">$0</p>/ month</div>
        <p className="text-gray-500 text-[14px] mt-1\">Perfect for tinkering on passion projects</p>
        <div className="w-full py-4 border-b border-gray-500">
        <button className="w-full font-bold text-black border-none bg-white"> Current Plan</button> 
        </div>
        
        <p className="text-white my-2 font-semibold text-xl">Features</p>
        <div className="">
        <p id="card-p" className="flex text-red-600 gap-1"><span className="font-medium text-white"> Meetings</span>up to 40 minutes per meeting</p>
        <p id="card-p" className="flex gap-1"><span className="font-medium text-white"> 100 Participants </span>   per meeting</p>
        <p id="card-p" className="flex gap-1"><span className="font-medium text-white">Whiteboard Basic</span> 3 editable boards</p>
        <p id="card-p" className="flex gap-1"><span className="font-medium text-white"> Team Chat</span></p>
        <p id="card-p" className="flex gap-1 "><span className="font-medium text-white">Mail and Calendar</span> 
        Client</p>
        <p id="card-p" className="flex gap-1"><span className="font-medium text-white"> Clips Basic</span>5 two-minute videos</p>
        <Meteors number={35} className="hover:none"/>
      
      </div></div>
      
    </div>)
  );
};

export default CardSpotlight;