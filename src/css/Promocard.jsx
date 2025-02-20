import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { OrbitingCirclesDemo } from "./orbit";
import { Link } from "react-router-dom";


const WebsitePromoCard = () => {

  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"conferio-bookings"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])


  return (
    <div className="bg-[#0A0A0A] h-[65vh] rounded-[20px] mt-10 mb-10 shadow-lg hidden md:flex lg:flex items-center justify-between">
      {/* Left section with text */}
      <div className="w-1/2 flex flex-col p-14">
        <h1 className="text-white text-4xl font-bold mb-4">
          Join our community
        </h1>
        <p className="text-gray-300 text-lg mb-6">
         Are you ready to scale the unscalable? if yes, <br /> Then click the button below <span className="text-yellow-400">✨</span>
        </p>
        
          <Link to="/loginpage" className="text-sm text-center text-white font-medium relative w-[30%] bg-black  dark:text-white px-4 py-2 rounded-full" data-cal-namespace="conferio-bookings"
	  data-cal-link="kanishkkb18/conferio-bookings"
	  data-cal-config='{"layout":"month_view"}'
	  >
            <span>Get started</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </Link>
        <div className="flex flex-row items-center mt-10 justify-start w-full">
     
    </div>
      </div>

      {/* Right section with images */}
      <div className="w-1/2 relative max-h-full overflow-hidden">
      <div className=" justify-start flex items-start w-full ">
 <OrbitingCirclesDemo/>
 </div>
</div>

    </div>
  );
};

export default WebsitePromoCard;
