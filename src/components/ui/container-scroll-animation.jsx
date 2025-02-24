"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ContainerScroll ({
  titleComponent,
  children
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    (<div
      className="h-[40rem] md:h-[50rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}>
      <div
        className="py-0 md:py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>)
  );
};

export const Header = ({
  translate,
  titleComponent
}) => {
  return (
    (<motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>)
  );
};

export const Card = ({
  rotate,
  scale,
  children
}) => {
  return (
    (<motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl md:-mt-10 -mt-80 mx-auto h-[25rem] md:h-[40rem] w-full border-2 md:border-4 border-[#161616e7] p-2 md:p-6 bg-[#000000] rounded-[30px] shadow-2xl">
      <div
        className=" h-full w-full  overflow-hidden rounded-3xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl ">
       
       <video className="h-full w-full object-cover" autoPlay muted loop src="https://cdn.pixabay.com/video/2024/03/15/204306-923909642_large.mp4" alt="" />
      </div>
    </motion.div>)
  );
};
