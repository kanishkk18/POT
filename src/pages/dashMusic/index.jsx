import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import {ElasticSlider} from '@/components/ui/musicslider'
  
  
  
const DashMusic = () => {
  return (
    <div>
         <HoverCard>
  <HoverCardTrigger> <div className="flex  justify-center items-start px-6 bg-neutral-950 py-6 rounded-[14px] flex-col">
          <div className="flex gap-4">
            <img className='h-10 w-10 rounded-lg' src="https://i1.sndcdn.com/artworks-000675219829-3jglm5-t500x500.jpg" alt="" />
            <div className="flex flex-col justify-center items-start text-white text-start">
              <p className='text-[16px] font-bold'>Godzila </p>
              <p className='text-[12px] font-bold'>Eminem</p>
            </div>
            </div>
            <div className="flex my-4">
            <ElasticSlider
  leftIcon={<></>}
  rightIcon={<></>}
  startingValue={500}
  defaultValue={750}
  maxValue={1000}
  isStepped
/>
</div>
        </div>
        </HoverCardTrigger>
  <HoverCardContent className=" border-none -mt-[18%] w-[40vw] -ml-[67%]  shadow-lg rounded-2xl">
  <div className="flex min-w-full flex-col overflow-hidden max-h-[48%] w-[40%] z-50 gap-5 bg-surface-background ">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full z-10">
        <button
          className="flex justify-center items-center rounded-md text-inherit cursor-pointer p-2"
          aria-label="Like"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            ></path>
          </svg>
        </button>
        <span className="font-bold text-lg text-brand-on-background-medium">
          League of Legends
        </span>
        <div className="flex gap-1 w-8 h-8">
          <div className="flex bg-neutral-strong rounded-sm w-1"></div>
          <div className="flex bg-neutral-strong rounded-sm w-1"></div>
          <div className="flex bg-neutral-strong rounded-sm w-1"></div>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="text-center">
          <span className="text-2xl font-bold text-blue-700">
            Warriors
          </span>
          <span className="block text-sm font-semibold  text-brand-on-background-medium mb-4">
            Imagine Dragons
          </span>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <button
            className="rounded-md p-2 text-inherit cursor-pointer"
            aria-label="Previous"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z"></path>
            </svg>
          </button>
          <button
            className="rounded-full bg-primary text-white p-3 cursor-pointer"
            aria-label="Pause"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"></path>
            </svg>
          </button>
          <button
            className="rounded-md p-2 text-inherit cursor-pointer"
            aria-label="Next"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.288 4.818A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.552l-6.323-3.906A1.5 1.5 0 0 0 10 6.095v2.972a1.506 1.506 0 0 0-.389-.343L3.288 4.818Z"></path>
            </svg>
          </button>
        </div>
        
      </div>
      <div className="relative w-[100%] h-48 overflow-hidden rounded-xl">
        <img
          alt="Music player album cover"
          src="https://once-ui.com/_next/image?url=%2Fimages%2Fdocs%2Fimagine-dragons-warriors.png&w=640&q=75"
          
          objectFit="cover"
          priority
          className='object-cover '
        />
      </div>
      </div>
    

      {/* Progress Bar */}
      <div className="flex flex-col gap-2 px-5 py-1 w-full">
        <div className="flex rounded-full bg-neutral-strong w-full h-1">
          <div className="bg-red-500 h-full rounded-full w-1/2"></div>
        </div>
        <div className="flex justify-between text-sm text-neutral-on-background-weak">
          <span>2:37</span>
          <span>3:15</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
    </div>
  )
}

export default DashMusic