import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { BoxesIcon } from 'lucide-react';
import { BorderBeam } from "@/components/magicui/border-beam";
import Aurora from '@/components/ui/Aurora';



export default function SignUp() {


  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Background gradient effect */}
     
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-transparent to-orange-900 opacity-50" />
       <Aurora
      colorStops={["#262626", "#FF94B4", "#252843"]}
      speed={3}
      className="h-[20vh] absolute "
    />
      <div className="relative -mt-16 z-10 min-h-screen flex flex-col items-center justify-center px-4">
     <div className="w-full max-w-md bg-neutral-950 backdrop-blur-xl rounded-2xl p-8 space-y-4 relative overflow-hidden">
     <BorderBeam/>

          {/* Logo */}
          <div className="flex justify-center relative">
          <img
          className="h-14 w-14 mx-auto my-5 rounded-lg"
          src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg"
          alt="Login Logo"
        />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-white relative">
            Sign Up to POT
          </h1>

          {/* Form */}
          <form  className="space-y-3 relative">
          <div className="space-y-1">
              <label className="text-sm text-gray-400" htmlFor="email">
                User Name
              </label>
              <input
                type="name"
                id="name"
                value=""
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="User name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value=""
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="name@work-email.com"
              />
            </div>

 <div className="space-y-1">
              <label className="text-sm text-gray-400" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                id="password"
                value=""
                
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="******"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400" htmlFor="email">
                Referal code
              </label>
              <input
                type="text"
                id="text"
                value=""
               
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Referal code"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 pt-4 px-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
            
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-sm text-gray-500">
          already have an account?{' '}
          <Link to="/loginpage" className="text-purple-500 hover:text-purple-400">
            Sign in
          </Link>
        </div>

      
      </div>
    </div>
  );
}