
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function LampDemo() {
  return (
    (<LampContainer className="">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-12 bg-gradient-to-r from-[#F5B195] to-[#B8A5E3] py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent ">
         <div className="max-w-6xl mt-96 mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="w-16 h-16 bg-zinc-900 rounded-3xl mb-12 flex items-center justify-center">
           <img className="rounded-md" src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg" alt="" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#F5B195] to-[#B8A5E3] bg-clip-text text-transparent">
              Get started
            </span>
            {" "}with POT.
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 max-w-xl mb-8 text-md">
            Each subscription goes towards aggressively adding new features
            built with customers' best interests at heart, including your privacy.
          </p>

          {/* CTA Button */}
          <button className="px-16 py-2 rounded-full text-white bg-black/25 bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 border border-white border-opacity-20">
            Try it free
          </button>
        </div>

        {/* Footer */}
        
      </div>
      </motion.h1>
    </LampContainer>)
  );
}

export const LampContainer = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn(
        "relative flex  flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}>
      <div
        className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
          <div
            className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div
            className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
          <div
            className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div
            className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full  opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>

        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>)
  );
};
