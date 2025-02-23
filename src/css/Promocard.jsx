import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { OrbitingCirclesDemo } from "./orbit";
import { Link } from "react-router-dom";

const WebsitePromoCard = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "conferio-bookings" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="bg-[#0A0A0A] rounded-[20px] shadow-lg mt-10 mb-10 flex flex-col lg:flex-row items-center justify-between h-auto min-w-full lg:h-[65vh]  md:p-10">
      {/* Left section with text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4 lg:p-14">
        <h1 className="text-white text-center text-2xl md:text-4xl font-bold mb-4">Join our community</h1>
        <p className="text-gray-300 text-sm md:text-lg mb-6 max-w-xl">
          Are you ready to scale the unscalable? If yes, Then click the button below <span className="text-yellow-400">✨</span>
        </p>
        <Link
          to="/loginpage"
          className="text-sm text-white font-medium relative w-[65%] md:w-[40%] lg:w-[30%] bg-black px-4 py-2 rounded-full text-center"
          data-cal-namespace="conferio-bookings"
          data-cal-link="kanishkkb18/conferio-bookings"
          data-cal-config='{"layout":"month_view"}'
        >
          <span>Get started</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </Link>
      </div>

      {/* Right section with images */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-6 lg:mt-0">
        <OrbitingCirclesDemo />
      </div>
    </div>
  );
};

export default WebsitePromoCard;