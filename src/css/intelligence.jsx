import { Card } from '@/components/ui/card';
import { ArrowLeft, Check, Laptop, MoreHorizontal, Plus } from 'lucide-react';
import React from 'react';

function Intelligence() {
    return (
        <div className="min-h-[90vh] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] my-5 bg-black/40 rounded-[80px] mx-32 flex items-center justify-center p-4">
        <div className=" p-4 w-full grid lg:flex gap-20 lg:justify-between items-center">
          <div className="space-y-6 w-[35%]">
            <div className="h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center">
              <Laptop className="h-6 w-6 text-zinc-400" />
            </div>
            <h1 className="text-3xl font-semibold text-zinc-100">Intelligence, delivered to you.</h1>
            <p className="text-md text-zinc-400">
            Get a tailored Monday morning brief directly in your inbox, crafted by your virtual personal analyst, spotlighting essential watchlist stories and earnings for the week ahead.
            </p>
          </div>
          
          <div className="relative flex h-full w-[70%] ">
          <div className="absolute rounded-[2rem] blur-2xl opacity-20" />
            <Card className="-mr-72 p-4 mt-14 max-h-[70vh] min-w-[30vw] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] border-collapse w-[100%] bg-black/60 backdrop-blur rounded-[1.5rem] overflow-hidden">
             
            <div className=" text-white p-4 rounded-xl max-w-3xl mx-auto text-sm">
      <h2 className="text-lg font-semibold">Good Morning, Warren</h2>
      <p className="text-gray-400 mt-2">
      Argentina’s Crypto Scandal: President Javier Milei is facing impeachment calls after endorsing and later distancing himself from the failed $LIBRA cryptocurrency. (Read more)      </p>

     

      <div className="mt-4">
       <img src="https://i.pinimg.com/736x/47/d3/6e/47d36eab2ad7496068569c27e70823d8.jpg" className='h-44 w-auto' alt="" />
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">$484.86</p>
        <p className="text-gray-400 text-xs">as of January 22, 2024</p>
      </div>
      
      <div className="flex items-center justify-between text-gray-400 text-xs mt-4">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-white rounded-full"></span> S&P 500
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Watchlist
        </span>
      </div>
      </div>
            
            </Card>
            
            <div className="absolute -mr-10 inset-0  rounded-[2rem] blur-2xl opacity-20" />
  <div className="border-zinc-800  border relative mx-auto backdrop-blur-[90px] rounded-[30px] p-4 w-fit">
            <Card className="p-4 min-h-[76vh] min-w-[28vw] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] border-collapse w-[100%] bg-black/60 backdrop-blur rounded-[1.5rem] overflow-hidden">
            <div className=" text-white p-4 rounded-xl max-w-3xl mx-auto text-sm">
      <h2 className="text-lg font-semibold">Watchlist performance</h2>
      <p className="text-gray-400 mt-2">
      Ethereum overtakes XRP in market value, AI drives growth, solana faces turbulence...
      </p>

      <div className="flex justify-between items-center  gap-2 mt-4">
        <div className="text-center bg-neutral-900 p-2 w-full rounded-lg">
          <p className="text-gray-400">S&P 500</p>
          <p className="text-red-500 text-lg">-0.07%</p>
        </div>
        <div className="text-center bg-neutral-900 p-2 w-full rounded-lg">
          <p className="text-gray-400">Your watchlist</p>
          <p className="text-green-500 text-lg">+2.16%</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-md font-semibold">Top movers</h3>
        <div className="mt-2 space-y-2">
          {[ 
            { ticker: "Bitcoin", price: "$96,104.06", change: "-1.30", color: "text-red-500" },
            { ticker: "Ethereum", price: "$2,740.60", change: "79.98%", color: "text-green-500" },
            { ticker: "XRP", price: "$2.66", change: "11.33%", color: "text-green-500" },
            { ticker: "solana", price: "$178.90", change: "5.15%", color: "text-green-500" },
            { ticker: "BNB", price: "$670.05", change: "14.30%", color: "text-green-500" }
          ].map((stock, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-700 rounded-full"></span>
                <span>{stock.ticker}</span>
              </span>
              <span className='text-center'>{stock.price}</span>
              <span className={stock.color}>{stock.change}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-neutral-900 p-2 px-4 rounded-xl">
        <h3 className="text-sm font-semibold">Earnings announcements</h3>
        <ul className="mt-2 space-y-1">
          {["NVDA", "MSFT", "AAPL"].map((ticker, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{ticker}</span>
              <span className="text-gray-400">Q3 earnings</span>
              <span className="text-gray-500">📅</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 border-t border-gray-700 pt-3 px-2">
        <h3 className="text-md font-semibold">Stories you’re watching</h3>
        <p className="text-gray-400 mt-1">Latest news for your top 5 stocks.</p>
      </div>
    </div>
            
            
            </Card>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Intelligence;