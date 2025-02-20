import React, { useEffect, useState, useContext } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
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
  // const { setModalOpen } = useContext(LoginContext);
  const navigate = useNavigate(); 
  // Initialize navigate
  // const picLink = "https://i.pinimg.com/736x/54/3a/5f/543a5feab057a0db0d202419a6eae8bf.jpg";
  // const [pic, setPic] = useState([]);
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const localUser = JSON.parse(localStorage.getItem("user"));
  //   if (localUser && localUser._id) {
  //     fetch(`http://localhost:5000/user/${localUser._id}`, {
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("jwt"),
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result) {
  //           setPic(result.post || []);
  //           setUser(result.user || {});
  //         } else {
  //           console.error("No result found");
  //         }
  //       })
  //       .catch((error) => console.error("Error fetching user data:", error));
  //   } else {
  //     console.error("User ID not found in localStorage");
  //   }
  // }, []);

  // const handleNavClick = (to) => {
  //   const token = localStorage.getItem("jwt");
  //   if (!token) {
      
  //     navigate("/loginpage");  // Redirect to login page if not logged in
  //   } else {
  //     navigate(to);  // Navigate to the intended route if logged in
  //   }
  // };

  const navLinks = [
    { name: "Features", to: "/", restricted: false },
    { name: "Pricing", to: "/Pricing" },
    { name: "Support", to: "/support" },
  ];

  // const loginStatus = () => {
  //   const token = localStorage.getItem("jwt");
  //   return token || login;
  // };

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
          "hidden sm:flex fixed z-[5000] text-white top-3 inset-x-0 mx-auto px-2 py-[1.5] rounded-full items-center justify-between",
          className
        )}
        style={{
          borderRadius: "30px",
          width: navWidth,
          backgroundColor: backgroundColor,
          backdropFilter: `blur(${blur})`,
          transition: "width 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <Link to="/" className="flex items-center space-x-1">
          <img
            src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg"
            alt="logo"
            className="text-black p-1 rounded-lg h-12 w-12"
          />
        </Link>

        <div className="flex items-center space-x-6">
          {navLinks.map((navLink, index) => (
            <button
              key={navLink.name}
              onClick={() =>
                navLink.restricted ? handleNavClick(navLink.to) : navigate(navLink.to)
              }
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
        

       
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <img
                  src={user.Photo || picLink}
                  alt=""
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/profile">
                <DropdownMenuItem>Setting</DropdownMenuItem>
              </Link>
              <Link to="/support">
                <DropdownMenuItem>Support</DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="text-red-600" >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        
      </motion.div>
    </AnimatePresence>
  );
}

export default FloatingNav;
