
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandBooking,
  IconBrandTabler,
  IconCalendar,
  IconCalendarEvent,
  IconMusicBolt,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MdTask } from "react-icons/md";


export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Calendar",
      href: "/",
      icon: (
        <IconCalendar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    
   
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div
    className={cn(
      "rounded-md flex flex-col md:flex-row bg-neutral-950 overflow-hidden",
      "h-screen w-fit" )}>

    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "kanishkk",
              to: "#",
              icon: (
                <img
                  src="https://i.pinimg.com/564x/3a/66/4d/3a664df2b760904f1f15275059c75a3b.jpg"
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
   
  </div>
);
}
export const Logo = () => {
return (
  <Link
    to="/"
    className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
  >
    <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium text-white whitespace-pre"
    >
      PO<span className="text-blue-600">T</span>
    </motion.span>
  </Link>
);
};
export const LogoIcon = () => {
return (
  <Link
    to="#"
    className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
  >
    <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
  </Link>
);
};
