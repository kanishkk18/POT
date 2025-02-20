import OrbitingCircles from "@/components/magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[440px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-transparent ">
      
     <div className="h-20 w-20 p-2 border-dashed border rounded-full border-neutral-700"><img className="h-full w-full rounded-full" src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739822686/POT/vbxokshuzundxjowwsy9.png" alt="" /></div>
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-50"
       
        delay={20}
        radius={80}
      >
        <Icons.img1 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-50"
      
        delay={10}
        radius={80}
        
      >
        <Icons.img3 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-50"
      
        delay={15}
        radius={80}
        
      >
        <Icons.img8 />
      </OrbitingCircles>
       <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-50"
      
        delay={25}
        radius={80}
        
      >
        <Icons.img15 />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        reverse
      >
        <Icons.img1 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
        delay={24}
        reverse
      >
        <Icons.img2 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={30}
        reverse
      >
        <Icons.img2 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        reverse
      >
        <Icons.img4 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={28}
        reverse
      >
        <Icons.img5 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={26}
        reverse
      >
        <Icons.img6 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={32}
        reverse
      >
        <Icons.img7 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={22}
        reverse
      >
        <Icons.img8 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={22}
        reverse
      >
        <Icons.img9 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={22}
        reverse
      >
        <Icons.img10 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={20}
        reverse
      >
        <Icons.img11 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={18}
        reverse
      >
        <Icons.img12 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={16}
        reverse
      >
        <Icons.img13 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent z-50"
        radius={190}
       
        delay={14}
        reverse
      >
        <Icons.img14 />
      </OrbitingCircles>
      
    </div>
  );
}

const Icons = {
  img1: () => (
    <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/03/e6/72/03e67224b2f49e065e7c352cfa0ae1d9.jpg" alt="GitHub" />
  ),
  img2: () => (
   <img className=" z-50 bg-black rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/67/e2/63/67e263a545facdfce2088b655759f9f7.jpg" alt="GitHub" />
  ),
  img3: () => (
   <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/46/8a/2a/468a2ac728867de86e867faf59ed6ca0.jpg" alt="GitHub" />
  ),
  img4: () => (
    <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/e1/c9/42/e1c942c528b558eeab79b560ad21f117.jpg" alt="GitHub" />
  ),
  img5: () => (
    <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/99/10/29/9910299a110adb0029eb9c8ed7c327ed.jpg" alt="GitHub" />
  ),
  img6: () => (
    <img className=" z-50 bg-black rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/62/ca/a9/62caa95318c2e1220f78acca012069f6.jpg" alt="GitHub" />
  ),
  img7: () => (
    <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/48/c8/20/48c820b315d2b79bf648539c85e07909.jpg" alt="GitHub" />
  ),
  img8: () => (
   <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/e2/e5/68/e2e568608b7ff138bf42d31ef9e2039c.jpg" alt="GitHub" />
  ),
  img9: () => (
   <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://typehero.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F34467318%3Fv%3D4&w=64&q=75" alt="GitHub" />
  ),
  img10: () => (
    <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/42/85/68/4285689b48b21488a853f7736d3fd35f.jpg" alt="GitHub" />
  ),
  img11: () => (
    <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/02/b6/65/02b665fb3bafabb5689963d6ba578a53.jpg" alt="GitHub" />
  ),
  img12: () => (
    <img className=" z-50 bg-black rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/97/6c/13/976c136b75648b32ec0cc4eac3e41f6f.jpg" alt="GitHub" />
  ),
  img13: () => (
    <img className=" z-50 rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/7e/ff/4f/7eff4f6907e81de9b25da302457cb239.jpg" alt="GitHub" />
  ),
  img14: () => (
    <img className=" z-50 bg-black rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/24/b1/59/24b159f64fb7acf72a4044441f36d03f.jpg" alt="GitHub" />
  ),
  img15: () => (
    <img className=" z-50 bg-black rounded-full p-1 border border-dashed border-gray-500" src="https://i.pinimg.com/736x/b9/75/9a/b9759a96c9457c7ac362786d9edbb63e.jpg" alt="GitHub" />
  ),
  
};
