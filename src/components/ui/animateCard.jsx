import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import { Bitcoin } from "lucide-react";
import { IconCurrencyEthereum, IconCurrencySolana, IconCurrencyXrp } from "@tabler/icons-react";

export default function AnimatedCard() {
  return (
    (<Card className="w-full">

      <CardSkeletonContainer>
 
        <Skeleton />
      </CardSkeletonContainer>
     <CardTitle className="text-blue-600 font-bold text-2xl">Live Pricing.<br/>
        <span>Emphasis on live.</span>
      </CardTitle>

      <CardDescription>
      244.47
      </CardDescription>
    </Card>)
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    (<div
      className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <ClaudeLogo className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <GoCopilot className="h-6 w-6 text-white" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <MetaIconOutline className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <GeminiLogo className="h-4 w-4 " />
        </Container>
      </div>
      <div
        className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>)
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    (<div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white"></motion.span>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "max-w-full w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(0,0,0,0.7)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}>
      {children}
    </div>)
  );
};

export const CardTitle = ({
  children,
  className
}) => {
  return (
    (<h3
      className={cn("text-lg font-semibold text-white py-2", className)}>
      {children}
    </h3>)
  );
};

export const CardDescription = ({
  children,
  className
}) => {
  return (
    (<p
      className={cn(
        "text-sm font-normal text-neutral-400 max-w-sm",
        className
      )}>
      {children}
    </p>)
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true
}) => {
  return (
    (<div
      className={cn("h-[15rem] md:h-[20rem] rounded-xl z-40", className, showGradient &&
        "bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]")}>
      {children}
    </div>)
  );
};

const Container = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}>
      {children}
    </div>)
  );
};

export const ClaudeLogo = ({
  className
}) => {
  return (
    (<div 
      className={className}>
        <IconCurrencyXrp className="text-white h-full w-full"/>
      </div>)
  );
};

export const OpenAILogo = ({
  className
}) => {
  return (
    ( <div className={className}>
         <Bitcoin className="text-white h-full w-full"/>
    </div>
    )
  );
};
export const GeminiLogo = ({
  className
}) => {
  return (
    (<div className="">
       <IconCurrencySolana className="text-white h-full w-full"/>
        <radialGradient
          id="prefix__paint0_radial_980_20147"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
          <stop offset=".067" stop-color="#9168C0" />
          <stop offset=".343" stop-color="#5684D1" />
          <stop offset=".672" stop-color="#1BA1E3" />
        </radialGradient>
      
    </div>)
  );
};

export const MetaIconOutline = ({
  className
}) => {
  return (
    (<div className="">
        <IconCurrencyEthereum className="text-white h-full w-full"/>
        <linearGradient
          id="linear-gradient"
          x1="62.34"
          y1="101.45"
          x2="260.34"
          y2="91.45"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#0064e1" />
          <stop offset="0.4" stop-color="#0064e1" />
          <stop offset="0.83" stop-color="#0073ee" />
          <stop offset="1" stop-color="#0082fb" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="41.42"
          y1="53"
          x2="41.42"
          y2="126"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#0082fb" />
          <stop offset="1" stop-color="#0064e0" />
        </linearGradient>
        </div>)
  );
};
