

import { useState } from "react";
import { ArrowRight, XIcon } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const CONTAINER_SIZE = 550;

const FamilyButton = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden ",
        "bg-gradient-to-b from-neutral-900 to-black",
        isExpanded
          ? "w-[320px] -mr-10 bg-gradient-to-b dark:from-stone-900 dark:to-neutral-900/80"
          : "dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-b"
      )}
    >
      <div className="rounded-[23px]">
        <div className="rounded-[22px]">
          <div className="rounded-[21px] flex items-center justify-center">
            <FamilyButtonContainer
              isExpanded={isExpanded}
              toggleExpand={toggleExpand}
            >
              {isExpanded ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                >
                  {children}
                </motion.div>
              ) : null}
            </FamilyButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const FamilyButtonContainer = ({ isExpanded, toggleExpand, children }) => {
  return (
    <motion.div
      className={cn(
        "relative border-white/10 border shadow-lg flex flex-col items-center text-white cursor-pointer z-50",
        !isExpanded
          ? "bg-gradient-to-b   from-stone-700 to-neutral-800/80 z-50"
          : "bg-muted/10 dark:bg-black"
      )}
      layoutRoot
      layout
      initial={{ borderRadius: 21 }}
      animate={
        isExpanded
          ? {
              borderRadius: 20,
              width: CONTAINER_SIZE,
              height: CONTAINER_SIZE + 50,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 400,
                when: "beforeChildren",
              },
            }
          : {
              borderRadius: 21,
              width: "3rem",
              height: "3rem",
            }
      }
    >
      {children}

      <motion.div
        className="absolute"
        initial={{ x: "-50%" }}
        animate={{
          x: isExpanded ? "0%" : "-50%",
          transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        style={{ left: isExpanded ? "" : "50%", bottom: 6 }}
      >
        {isExpanded ? (
          <motion.div
            className="p-[6px] group bg-black/50 border border-cyan-100/30 hover:border-neutral-200 text-orange-50 rounded-full shadow-2xl transition-colors duration-300"
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={false}
            animate={{
              rotate: -360,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <XIcon className="h-6 w-6 text-cyan-100/30 dark:text-neutral-400/80 group-hover:text-neutral-500 transition-colors duration-200" />
          </motion.div>
        ) : (
          <motion.div
            className="p-[5px] group bg-[#2647eb] text-cyan-50 border border-cyan-100/10 shadow-2xl transition-colors duration-200"
            style={{ borderRadius: 24 }}
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={{ rotate: 180 }}
            animate={{
              rotate: 0,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <ArrowRight className="h-5 w-5 text-black dark:text-white" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export { FamilyButton };
