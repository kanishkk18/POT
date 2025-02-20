import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { LoginContext } from "@/context/LoginContext";
import GridMotion from '@/css/gridmotion';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Sample image items
const items = [
  'https://i.pinimg.com/736x/a3/77/d0/a377d0c5cd548e9cb0ab6d279713da9a.jpg',
  'https://i.pinimg.com/736x/a3/77/d0/a377d0c5cd548e9cb0ab6d279713da9a.jpg',
  'https://i.pinimg.com/736x/a3/77/d0/a377d0c5cd548e9cb0ab6d279713da9a.jpg',
  'https://i.pinimg.com/736x/d0/47/1e/d0471ec581478894309827e6ce71b948.jpg',
  'https://i.pinimg.com/736x/56/9a/d8/569ad8070d1782fd86194f86ae7c501a.jpg',
  <div key='jsx-item-1'>
  </div>,
  'https://i.pinimg.com/736x/a3/77/d0/a377d0c5cd548e9cb0ab6d279713da9a.jpg',
  'https://i.pinimg.com/564x/2a/c7/a5/2ac7a575a3665b987f07535ce6915aa0.jpg',
  'https://i.pinimg.com/736x/1d/c5/f6/1dc5f69263067fbf36ed7ac55461ce8a.jpg',
  'https://i.pinimg.com/736x/98/75/13/98751312ce60180b879f200d256a7a6f.jpg',
  'https://i.pinimg.com/736x/96/d8/32/96d832a02f865e035ac7583f4efdbb7f.jpg',
  'https://i.pinimg.com/736x/c5/db/4d/c5db4d638994fd6ab303f3f1676f4043.jpg',
  'https://i.pinimg.com/736x/1d/c5/f6/1dc5f69263067fbf36ed7ac55461ce8a.jpg',
  'https://i.pinimg.com/736x/d0/47/1e/d0471ec581478894309827e6ce71b948.jpg',
  'https://i.pinimg.com/736x/d0/47/1e/d0471ec581478894309827e6ce71b948.jpg',
  <div key='jsx-item-2'>
  </div>,
  'https://i.pinimg.com/736x/1d/c5/f6/1dc5f69263067fbf36ed7ac55461ce8a.jpg',
  'https://i.pinimg.com/736x/af/b7/b7/afb7b7dda2947590f799aa56dfe477f7.jpg',
  'https://i.pinimg.com/736x/71/7e/3d/717e3d6f2b5b3b36e66d3820acf86f44.jpg',
  'https://i.pinimg.com/736x/56/9a/d8/569ad8070d1782fd86194f86ae7c501a.jpg',
  'https://i.pinimg.com/736x/98/75/13/98751312ce60180b879f200d256a7a6f.jpg',
  <div key='jsx-item-2'>
  </div>,
  'https://i.pinimg.com/736x/56/9a/d8/569ad8070d1782fd86194f86ae7c501a.jpg',
  'https://i.pinimg.com/736x/d0/47/1e/d0471ec581478894309827e6ce71b948.jpg',
  'https://i.pinimg.com/736x/56/9a/d8/569ad8070d1782fd86194f86ae7c501a.jpg',
  'https://i.pinimg.com/736x/a3/77/d0/a377d0c5cd548e9cb0ab6d279713da9a.jpg',
  'https://i.pinimg.com/736x/56/9a/d8/569ad8070d1782fd86194f86ae7c501a.jpg',
  <div key='jsx-item-3'>
  </div>,
 
  <div key='jsx-item-2'>
  </div>,
  <div key='jsx-item-2'>
  </div>,
 
  <div key='jsx-item-3'>
  </div>,
];

const SignIn = () => {
  
  return (
    <div className="flex justify-center items-center h-screen bg-black shadow-lg rounded-2xl mx-2 overflow-hidden">
      <div className="w-[60%]">
        <GridMotion items={items} />
      </div>

      <div className="flex flex-col justify-center bg-black p-20 w-1/2">
        <img
          className="h-14 w-14 mx-auto my-5 rounded-lg"
          src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg"
          alt="Login Logo"
        />
        <h1 className="text-4xl text-center text-white font-medium mb-8">
          Welcome Back
        </h1>

        <form
          className="flex flex-col gap-2 items-start w-full"
           // Prevent default form submission
        >
        <Label className='text-white text-md'>Email</Label>
          <Input
            className="w-full px-4 border border-neutral-700 py-5 mb-4 rounded-[12px] bg-neutral-950 text-white"
            type="email"
            placeholder="Enter email address"
            required
            value=""
           
          />
<Label className="text-white text-md" >Password</Label>
          <Input
            className="w-full px-4 border border-neutral-700 py-5 mb-4 rounded-[12px] bg-neutral-950 text-white"
            type="password"
            placeholder="Password"
            required
            value=""
           
          />
          <button
            className="w-full bg-gray-100 text-black py-3 rounded-[12px] font-semibold hover:bg-[#1f1f1f] hover:text-white transition duration-500 ease-in"
            type="button" // Set type to button to avoid form submission
             // Call postData on button click
          >
            Continue
          </button>
        </form>
        <Link to="/signup" className="text-neutral-600 text-center pt-2" >Don't have an account?
       <span className="text-white "> Sign up</span></Link>
      </div>
    </div>
  );
};

export default SignIn;
