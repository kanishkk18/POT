"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const StickyScroll = ({
    content = [],  // Default to an empty array if content is not provided
    contentClassName
  }) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
      // target: ref
      container: ref,
      offset: ["start start", "end start"],
    });
    const cardLength = content.length;
  
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (cardLength === 0) return; // Early return if there are no cards
  
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      }, 0);
      setActiveCard(closestBreakpointIndex);
    });
  
    const backgroundColors = [
      "var(--black)",
      "var(--slate-950)",
      "var(--neutral-900)",
    ];
    const linearGradients = [
      "",
      "",
      "",
    ];
  
    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  
    useEffect(() => {
      setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);
  
    return (
      (<motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="md:h-screen h-[50vh] pr-2 w-full overflow-y-auto thin-scrollbar flex justify-center relative space-x-2 md:space-x-20 rounded-md "
        ref={ref}>
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-16 md:mt-52 font-bold md:text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white to-white">
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-xs line-clamp-5 md:line-clamp-6  md:text-base text-neutral-500 font-bold max-w-sm mt-2">
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
       <div className="md:p-4 p-1.5 transition duration-300 top-20  md:top-28 overflow-hidden bg-neutral-950 blur-10 border max-w-[55vw]  md:w-auto h-56 md:h-fit sticky border-zinc-800 rounded-lg  shadow-2xl">
       <div className="absolute left-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="absolute left-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            " md:w-[650px] md:pt-3 md:pl-3 bg-black/55  rounded-md md:h-[500px] lg:block shadow-xl shadow-brand/[0.2]",
            contentClassName
          )}>
          {content[activeCard]?.content ?? null}
        </div>
        <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      </div>
       
      </motion.div>)
    );
  };
  export default StickyScroll