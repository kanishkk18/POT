
import { Calendar, Bell, Mail, Search, MoreHorizontal, ChevronRight, Users, DollarSign, CreditCard } from 'lucide-react';
import { Plus, ArrowDown, FileText, Split } from 'lucide-react';
import { GlareCard } from "@/components/ui/glare-card";
import { IconBrandPaypal } from '@tabler/icons-react';
import { Card } from '@/components/ui/card';
import ChartImg from '@/Assets/chartimg.png';
import CryptoChart from "@/components/cryptoChart/CryptoChart";
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useId, useRef, } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler } from "chart.js";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import RecentTransaction from '@/components/recenttransaction/index';
import CryptoEcosystem from '../../Controllers/cryptoController';



ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale, Filler);


function Overview() {
  const [loading, setLoading ] = useState(false)
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCoins, setSelectedCoins] = useState(["bitcoin", "ethereum"]);
  const [chartData, setChartData] = useState(null);
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const id = useId();
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };


  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 12,
            page: 1,
          },
        });
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  const handleDeposit = async () =>{
    setLoading(true);
    try{
      const response = await fetch("/cryptoController", {
        method: "Post",
        headers:{
          "content-type" : "application/json",
        },
          body: JSON.stringify({
            email: "",
            amount:5,
          }),
        });

         const data = await response.json();
         if (response.ok) {
          alert("Deposit succesfully! New balance " + data.newBalance);
         }  else{
          alert ("Error" + data.message);
         }
          } catch (error ) {
          console.error("Deposit failed:", error);
          alert("something went wrong.");

         }
         setLoading(false);
        };

        useEffect(() => {
          const fetchChartData = async () => {
        try {
          const datasets = await Promise.all(
            selectedCoins.map(async (coin) => {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin}/market_chart`,
            { params: { vs_currency: "usd", days: "7" } }
          );
            return {
              label: coin.toUpperCase(),
              data: response.data.prices.map((price) => price[1]),
              borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              fill: true,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            };
          })
        );

        setChartData({
          labels: Array.from({ length: 7 }, (_, index) => `Day ${index + 1}`),
          datasets,
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [selectedCoins]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "cryptocurrency",
            apiKey: "dde3f1c1d1df41be868414c6f6ee9809",
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);


  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden">

      {/* Header */}
      <header className="flex md:px-4 md:mt-2 md:justify-between justify-center items-center md:mb-6">

        <Link to="/" className=" hidden md:flex items-center space-x-1">
          <img
            src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg"
            alt="logo"
            className="text-black p-1 rounded-lg h-12 w-12"
          />
        </Link>

        {/* <div>
          <h1 className="text-2xl font-bold">My Dashboard</h1>
          <div className="flex space-x-6 mt-2 text-gray-400">
            <span className="hover:text-white cursor-pointer">Booking</span>
            <span className="hover:text-white cursor-pointer">Amenities</span>
            <span className="hover:text-white cursor-pointer">Customization</span>
            <span className="hover:text-white cursor-pointer">Locality</span>
          </div>
        </div>   */}

        <Dialog className=" border-none ">
          <DialogTrigger><div className="relative mt-4">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Reports"
              className="bg-[#1A1D24] pl-20 pr-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div></DialogTrigger>
          <DialogContent className="bg-black max-h-[90%] pb-4  border-none overflow-scroll thin-scrollbar">
            <DialogHeader>
              <DialogTitle className="text-white pb-4">Crypto Currenct Listing</DialogTitle>
              <DialogDescription>
                <div className=" text-white">
                  <input
                    type="text"
                    placeholder="Search Crypto..."
                    className="p-2 rounded bg-gray-800 w-full mb-4"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {coins
                      .filter((coin) => coin.name.toLowerCase().includes(search))
                      .map((coin) => (
                        <div
                          key={coin.id}
                          className="p-4 bg-gray-800 rounded-lg cursor-pointer"
                          onClick={() => navigate(`/coin/${coin.id}`)}
                        >
                          <img src={coin.image} alt={coin.name} className="w-10 h-10 mx-auto" />
                          <p className="text-center mt-2 font-bold">{coin.name}</p>
                          <p className="text-center">${coin.current_price.toFixed(2)}</p>
                        </div>
                      ))}
                  </div>

                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="hidden md:flex items-center space-x-4 ">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-10 h-10 rounded-full mt-1"
          />
        </div>
      </header>



      <div className="md:flex ">
        <div className="w-[100%] md:p-3 p-4 md:flex md:flex-col grid">
          <div className="gap-3  w-[100%] md:flex">
            <div className="flex w-full md:w-[45%] flex-col gap-2">
              <div className="flex gap-3">
                <div className="flex items-center justify-center rounded-2xl bg-[#2b2f55] text-white h-40 w-full p-4">
                  80%
                </div>
                <div className="flex bg-yellow-400  flex-col items-center justify-center rounded-2xl  text-white h-40 w-full p-4">
                  <h1 className='text-2xl font-mono text-black font-bold '>22%</h1>
                  <p className='text-black font-sans font-bold'> Today's Profit</p>

                </div>
              </div>
              <GlareCard className="rounded-xl min-h-[22.5vh] ">
                <Card className=" bg-green-400 min-h-full space-y-2 rounded-xl px-6 py-4 border-none "> <CreditCard />
                  <p className='flex text-xl font-bold'> <DollarSign className='' /> 6421.50 </p>
                  <p className='text-md font-bold'>Balance</p>
                  <p className='text-sm font-bold flex text-start'>****  ****  ****  3457</p>
                </Card> </GlareCard>



            </div>
            <div className="h-fit rounded-xl justify-start mt-2 md:mt-0 w-full md:w-60 bg-neutral-900 p-4 py-4 space-y-2 md:flex md:flex-col">
              <div className="justify-center gap-2 flex flex-col items-center"> <DollarSign className='bg-green-600 text-black  h-12 w-12 rounded-full p-2' />
                <p className='text-xl pb-1 font-semibold'>Today's Earning</p></div>
              <div className="flex flex-col justify-between gap-2">
                <p className='text-green-400 font-semibold text-sm'>mon 18 - Web 20</p>
                <h1 className='flex justify-start items-center text-xl font-medium text-start'> <DollarSign className='h-5 w-5' /> 894.18</h1>
              </div>
              <div className="border-t border-b border-neutral-600 p-2 rounded-2xl"> <img src={ChartImg} alt="" /> </div>
            </div>
            <div className="md:flex w-full my-2 grid grid-cols-1 md:flex-col gap-2">
              <Card className="bg-[#141519] h-full border-none w-full md:w-60 rounded-xl p-4 text-white">
                <p>Today's Activity</p>
                <p className='flex'> <DollarSign className='h-5 w-5' /> 2890.14 </p>
                <Card className=" bg-[#000000]/40  shadow-[20px] pl-2 rounded-xl p-4 text-gray-200 border-none">
                  <p> Today's Buy</p>
                  <h1>24</h1>
                </Card>
              </Card>
              <Card className="bg-[#2643b7] h-full border-none w-full md:w-60 rounded-xl p-4 text-white">
                <p>Today's Activity</p>
                <p className='flex'> <DollarSign className='h-5 w-5' /> 2890.14 </p>
                <Card className=" bg-[#000000]/40  shadow-[20px] pl-2 rounded-xl p-4 text-gray-200 border-none">
                  <p> Today's Buy</p>
                  <h1>24</h1>
                </Card>
              </Card>
            </div>
          </div>

          <div className="md:flex w-full space-y-2 max-w-screen md:gap-3 justify-center items-center md:mt-2">
            <Card className=" md:w-full md:max-w-full min-h-72 h-72 bg-neutral-900 rounded-xl border-none  md:ml-1  flex justify-center items-center">
              <CryptoChart coinId="bitcoin" />
            </Card>


            <Card className=" p-4 w-full max-h-72 thin-scrollbar bg-neutral-900 rounded-xl border-none overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 text-white text-center">Real-Time Crypto News</h2>
              <div className="space-y-4">
                {news.slice(0, 10).map((article, index) => (
                  <div key={index} className="border-b border-gray-700 pb-2 animate-slide-down">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      {article.title}
                    </a>
                    <p className="text-sm text-gray-400">{article.source.name} - {new Date(article.publishedAt).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </Card>

          </div>

        </div>
        {/* Right Column */}

        <div className="pb-10 md:pb-2 px-2 md:pr-2 rounded-xl overflow-hidden">
          <div className="h-fit  rounded-3xl md:rounded-2xl bg-[#0A0B14] text-white p-2  md:flex items-center justify-center">
            <div className="md:grid flex flex-col-reverse md:grid-cols-2 p-2  gap-2 max-w-3xl w-full">

              <div className="bg-[#14152A] h-full rounded-2xl p-8 border-[1px] border-neutral-800">
                <div className="flex flex-col items-center mb-8 ">
                  <div className="w-12 h-12 bg-[#6366F1] rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-1">USDT withdrawal</h2>
                  <span className="text-[#22C55E]">Successful</span>
                </div>

                <div className="space-y-6 pt-8 border-t-[1px] border-neutral-800">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date</span>
                    <span>March 6, 2024, 8:36 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount</span>
                    <span>-$50.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Exclude from analytics</span>
                    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                      <input type="checkbox" className="peer absolute w-12 h-6 opacity-0 z-10 cursor-pointer" />
                      <div className="w-12 h-6 bg-gray-700 peer-checked:bg-[#6366F1] rounded-full transition-colors duration-200"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 peer-checked:translate-x-6"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-20 flex">
                  <button className="flex items-center border border-neutral-900 justify-center w-full space-x-2 py-1 px-4 rounded-xl bg-[#000000] hover:bg-[#22234A] transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Statement</span>
                  </button>
                </div>
              </div>


              <div className=" rounded-3xl p-8">
                <div className="flex flex-col justify-center items-center space-x-4 mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <h2 className="text-xl">Hi, Zsofia</h2>
                </div>

                <div className="mb-12 text-center">
                  <div className="flex justify-center items-center mb-2">
                    <span className="text-4xl font-bold">$64,648</span>
                    <span className="text-4xl font-bold text-gray-500">.00</span>
                  </div>
                  <span className="text-gray-400">Current balance</span>
                </div>

                <div className="grid grid-cols-2  mb-8 bg-[#0a0b15] rounded-2xl border border-neutral-700">
                  <Link to="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=google.com" className="flex flex-col border-r border-neutral-700 items-center justify-center p-8 hover:bg-[#22234A] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#2A2B4A] flex items-center justify-center mb-2">
                      <Plus className="w-6 h-6" />
                    </div>
                    <span>Add</span>
                  </Link>
                  <Link to="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=google.com" className="flex flex-col items-center justify-center p-8  hover:bg-[#22234A] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#2A2B4A] flex items-center justify-center mb-2">
                      <ArrowDown className="w-6 h-6" />
                    </div>
                    <span>Withdraw</span>
                  </Link>
                </div>

                <button className="w-full py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition-colors font-medium">
                  Continue
                </button>
              </div>
            </div>

          </div>

          <div className="*:not-first:mt-2 rounded-lg px-1  py-2 gap-2 flex justify-between items-center">
            {/* <Label htmlFor={id}>your referral code</Label> */}
            <div className="relative  w-full">
              <Input
                ref={inputRef}
                id={id}
                className="pe-9 bg-neutral-800 border border-neutral-600"
                type="text"
                defaultValue="2d48b93"
                readOnly
              />
              <TooltipProvider delayDuration={0} className="">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopy}
                      className="text-muted-foreground/80 hover:text-foreground  focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                      aria-label={copied ? "Copied" : "Copy to clipboard"}
                      disabled={copied}
                    >
                      <div
                        className={cn(
                          "transition-all",
                          copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                        )}
                      >
                        <CheckIcon className="stroke-emerald-500" size={16} aria-hidden="true" />
                      </div>
                      <div
                        className={cn(
                          "absolute transition-all",
                          copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                        )}
                      >
                        <CopyIcon size={16} aria-hidden="true" />
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="px-2 py-1 text-xs">Copy to clipboard</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Dialog >
              <DialogTrigger className="w-full bg-black">
                <Button variant="default" className="w-full">Recent Transactions</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Your Transactions</DialogTitle>
                  <DialogDescription>
                    {/* recent tansaction */}
                    <RecentTransaction />

                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Overview;