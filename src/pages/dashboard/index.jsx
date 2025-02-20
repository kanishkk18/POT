

import React, { useState, useEffect } from "react";

import Mainsidebar from "@/pages/mainsidebar/page";
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { AlarmClock, ArrowRight, CloudSunIcon, Minus, Plus, TicketCheck } from 'lucide-react';
import { IconYoga } from '@tabler/icons-react';
import UserAvatar from "@/components/ui/comp-377"
import {
 
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelRoot,
  FloatingPanelTrigger,
  FloatingPanelBody,
  FloatingPanelHeader,

} from "@/components/ui/floatingPanel"
import { Badge } from "@/components/ui/badge"
import {
  Sun,
} from "lucide-react";
import { FamilyButtonDemo } from "@/components/ui/multiButton"
import moment from "moment";
import DashMusic from "../dashMusic/index"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "../overview/page"
import CryptoList from "@/components/cryptoList/CryptoList";


const Dashboard = () => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [date, setDate] = useState(new Date());
  const [weather, setWeather] = useState({
    temperature: "--",
    feelsLike: "--",
    high: "--",
    low: "--",
    condition: "--",
    humidity: "--",
    wind: "--",
    precipitation: "--",
    forecast: [],
  });
  

  // Timer to update time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Get user location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching location: ", error.message);
          alert("Unable to fetch your location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      if (location.latitude && location.longitude) {
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&temperature_unit=celsius&timezone=auto`
          );
          const data = await response.json();

          // Map weather codes to descriptions
          const mapWeatherCodeToDescription = ({ code }) => {
            const weatherDescriptions = {
                0: "Clear sky",
                1: "Mainly clear",
                2: "Partly cloudy",
                3: "Overcast",
                45: "Fog",
                48: "Depositing rime fog",
                51: "Light drizzle",
                53: "Moderate drizzle",
                55: "Dense drizzle",
                61: "Slight rain",
                63: "Moderate rain",
                65: "Heavy rain",
                71: "Slight snow",
                73: "Moderate snow",
                75: "Heavy snow",
                80: "Slight rain showers",
                81: "Moderate rain showers",
                82: "Violent rain showers",
                95: "Thunderstorm",
                96: "Thunderstorm with slight hail",
                99: "Thunderstorm with heavy hail",
            };
        
           return weatherDescriptions[code] || "Unknown";
        };

          // Update weather state
          setWeather({
            temperature: data.current_weather.temperature,
            feelsLike: data.current_weather.apparent_temperature,
            high: data.daily.temperature_2m_max[0],
            low: data.daily.temperature_2m_min[0],
            condition: mapWeatherCodeToDescription(data.current_weather.weathercode),
            humidity: "--", // Not available in Open-Meteo
            wind: data.current_weather.windspeed,
            precipitation: data.current_weather.precipitation || 0,
            forecast: data.daily.temperature_2m_max.map((temp, index) => ({
              day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                (new Date().getDay() + index) % 7
              ],
              temp,
            })),
          });
        } catch (error) {
          console.error("Failed to fetch weather data", error);
        }
      }
    };

    fetchWeather();
  }, [location]);


  return (
   
    <div className='flex bg-black w-full h-full overflow-hidden'>
      

      <Tabs defaultValue="dashboard" className="flex-[1] flex flex-col ">
  <TabsList className="absolute top-9 right-32 w-fit flex gap-4 p-4">
    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
    <TabsTrigger value="overview">Overview</TabsTrigger>
  </TabsList>
  <TabsContent value="dashboard" className="overflow-hidden flex "><Mainsidebar />
      <div className=" w-[100%] h-[100%] flex">
      
    <div className="flex-[0.7]  bg-transparent flex flex-col justify-start items-start p-4 h-screen relative">
     
      <div className="flex mt-3 mx-auto items-center w-[80%] justify-between">
        <h1 className="text-white text-xl">Weekly Pinned</h1>
        <Button variant="ghost" className='text-[#2647eb]'>view all</Button>
      </div>

      <div className="flex flex-col w-[80%] mt-4 mx-auto items-center">
        <div className="bg-neutral-900 max-h-[40%] overflow-scroll thin-scrollbar shadow-[0px_18px_50px_-10px_rgba(0,0,0,0.2)] justify-start items-start rounded-[12px] p-6 gap-4 w-full flex">
         <CryptoList/>
        </div>

    
        <Calendar
      mode="single"
      selected={date}
      onSelect={() => setDate(day)}
      className="bg-neutral-950  min-w-[60%] rounded-[12px] mt-4 p-6 overflow-hidden max-h-[60%] items-center"
    />
      </div>
    </div>

    <div className="flex-[1] overflow-y-scroll flex flex-col justify-start items-start p-4 h-screen scrollbar-thin">
      <div className="flex mt-2 w-[100%] px-4 justify-between items-center">
        <div className="flex flex-col">
        <h1 className='text-white font-semibold text-[32px]'>My Recommandation </h1>
        <h1 className='text-[#2647eb] font-semibold text-[32px]'>Tree</h1>
        </div>
        <div className="text-white bg-[#2647eb] rounded-lg"><Plus className='w-10 h-10 p-2'/></div>
      </div>

      <div className="px-4 w-full mt-4 gap-2 flex justify-center items-center"><Minus/>
      <div className="bg-[#2647eb] p-4 flex justify-between items-center px-6 rounded-[14px] w-[100%] ">
        <div className="flex gap-4 justify-center items-center">
        <div className="bg-white flex justify-center items-center rounded-lg w-8 h-8 p-1"><AlarmClock/>
        </div>
        <p className='text-[16px] font-sans text-white font-bold '>Wake up buddy</p>
        </div>
        <p className='text-[16px] font-sans text-white font-semibold'>7:00 AM</p>
      </div>
      </div>


      <div className="px-4 w-full mt-4 gap-2 text-white flex justify-center items-center"><Minus/>
      <div className="bg-neutral-950 py-4 flex justify-between items-start px-6 rounded-[14px] w-[100%] ">
        <div className="flex gap-4 justify-center items-start">
        <div className="bg-white flex justify-center items-center rounded-lg w-8 h-8 p-1"><IconYoga/>
        </div>
        <div className='text-[16px] font-sans flex flex-col text-white font-bold '>
          <h1>Daily Workout</h1>
          <div className="flex flex-col gap-2 list-disc"></div>
          <p className='text-[14px]  font-sans font-medium text-gray-500'>squats</p>
          <p className='text-[14px] font-sans font-medium text-gray-500'>chests</p>
          <p className='text-[14px] font-sans font-medium text-gray-500'>shoulder</p>
        </div>
        </div>
        <p className='text-[16px] font-sans text-white font-semibold'>8:00 AM</p>
      </div>
      </div>

    
    </div>
    <div className="flex-[0.6] py-6 px-6 justify-center items-center flex flex-col h-full">
      <div className="flex px-6 justify-between w-[90%]">
        <div className="">
         </div> 
         theme
          <div className="h-11 w-11 border-[#2647eb] border-[3px] rounded-full object-cover">
            <UserAvatar  />
          </div>
         
      </div>
      <div className="w-[92%] px-4 flex flex-col justify-center items-center mt-10">
<div className="w-full">
     <DashMusic/>
</div>


        <FloatingPanelRoot className="flex w-full mt-4 justify-center items-start px-6 bg-neutral-950 py-10 rounded-[14px] flex-col">
      {/* Trigger Panel */}
      <FloatingPanelTrigger className="bg-transparent border-none">
        <div className="flex justify-end items-end text-gray-500 pb-4 -mr-8">
        <p>{moment().format('LL')}</p>

        </div>
        <div className="flex justify-between gap-4 items-center pb-4">
        <h1 className="lg:text-[32px] md:text-[24px] text-[16px]  text-white font-sans font-semibold">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </h1>
        <p className="bg-blue-100 text-blue-600 w-fit px-2 rounded-xl">{weather.temperature}°C</p>
</div>
        <div className="text-[16px] flex text-left justify-start gap-1 items-start font-sans text-white font-semibold">
          <span className="text-left flex justify-start gap-2 items-start">
            <CloudSunIcon className="text-blue-800 text-start" />
          </span>
          <div className="flex gap-4 justify-center items-center"> <p className="font-medium">Feels like</p> <span className="font-bold text-neutral-500"> {weather.condition || "Loading..."}</span></div>
        </div>

      </FloatingPanelTrigger>

      {/* Panel Content */}
      <FloatingPanelContent  className="-mt-32 -ml-14 px-6 min-w-2xl border">
        {/* Panel Header */}
        <FloatingPanelHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Sun className="w-8 h-8 text-yellow-400 mr-2" />
              <h1 className="font-bold text-lg pr-4">Today's Weather</h1>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {weather.temperature}°C
            </Badge>
          </div>
          
        </FloatingPanelHeader>

        {/* Weather Info */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-bold">{weather.temperature}°C</p>
            <p className="text-sm text-gray-400">
              Feels like {weather.feelsLike}°C
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">{weather.condition}</p>
            <FloatingPanelBody>
              <p className="text-sm text-gray-400">
                High {weather.high}°C / Low {weather.low}°C
              </p>
            </FloatingPanelBody>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="space-y-2">
          <h4 className="font-medium">5-Day Forecast</h4>
          {weather.forecast.map((day, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{day.day}</span>
              <div className="flex items-center">
                <Sun className="w-4 h-4 text-blue-800 mr-2" />
                <span>{day.temp}°C</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <FloatingPanelFooter>
          <p className="text-xs text-gray-400">
            Last updated: {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>

      
        <div className="flex w-full max-h-fit mt-4 space-y-6 overflow-hidden justify-center items-start px-6 bg-neutral-950 pt-4 rounded-[14px] flex-col">
          <h1 className='lg:text-[20px] md:text-[20px] text-white text-[16px] leading-tight font-sans font-semibold'>Unsleash <br /> the professional <br /> super power</h1>
          <p className='text-[14px]  font-semibold text-gray-400'>Unlimited tasks, premium features and much more</p>
          <div className="flex items-end ">
          <img className='  h-28 justify-self-end -ml-3 w-auto' src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1730377159/CONFERIO/ix8hjpuaaqftbagoekit.png" alt="" />
           <FamilyButtonDemo/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </TabsContent>
  <TabsContent value="overview">
    <Overview/>
  </TabsContent>
</Tabs>
     </div>
     
     
  )
}

export default Dashboard;