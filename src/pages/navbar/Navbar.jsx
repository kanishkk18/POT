import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "sonner";

function FloatingNav({ className }) {
  const { scrollYProgress } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visible, setVisible] = useState(true);
  const [navWidth, setNavWidth] = useState("90%");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [blur, setBlur] = useState("0px");
  const navigate = useNavigate(); 

  const navLinks = [
    { name: "Features", to: "/dashboard" },
    { name: "Pricing", to: "/Pricing" },
    { name: "Support", to: "/support" },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.03) {
        setVisible(true);
        setNavWidth("82%");
        setBackgroundColor("transparent");
        setBlur("0px");
      } else {
        if (direction < 0) {
          setVisible(false);
          setNavWidth("65%");
          setBackgroundColor("rgb(13,13,13)");
          setBlur("90px");
        } else {
          setVisible(true);
          setNavWidth("60%");
          setBackgroundColor("rgb(13,13,13)");
          setBlur("90px");
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed z-[5000] text-white top-3 inset-x-0 mx-auto px-2 py-1 sm:py-[1.5] rounded-full flex items-center justify-between",
          "w-full sm:w-[90%] md:w-[82%] lg:w-[65%]",
          "transform scale-100 sm:scale-75 md:scale-100",
          className
        )}
        style={{
          borderRadius: "30px",
          backgroundColor: backgroundColor,
          backdropFilter: `blur(${blur})`,
          transition: "width 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <Link to="/" className="flex items-center space-x-1">
          <img
            src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg"
            alt="logo"
            className="text-black p-1 rounded-lg h-[52px] w-[52px]"
          />
        </Link>

        <div className="flex items-center space-x-6">
          {navLinks.map((navLink, index) => (
            <button
              key={navLink.name}
              onClick={() => navigate(navLink.to)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex items-center"
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 rounded-[20px] bg-neutral-800"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10 text-sm text-white font-normal py-2 px-3 rounded-[20px] hover:text-neutral-300">
                {navLink.name}
              </span>
            </button>
          ))}
        </div>

        <Link to="/loginpage">
          <button className="border text-sm text-white font-medium relative border-white/[0.2] px-4 py-2 rounded-full">
            <span>Login</span>
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

export default FloatingNav;
