import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAppStore } from "@/store/index";
import apiClient from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/lib/constants";
import Aurora from '@/components/ui/Aurora';
import { BorderBeam } from "@/components/magicui/border-beam";

export default function SignUp() {
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recommandation, setRecommandation] = useState("");
  const [userName, setUserName] = useState("");

  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    return true;
  };
  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password should be same.");
      return false;
    }
    return true;
  };
  const handleLogin = async () => {
    try {
      if (validateLogin()) {
        const response = await apiClient.post(
          LOGIN_ROUTE,
          { email, password },
          { withCredentials: true }
        );
        if (response.data.user.id) {
          setUserInfo(response.data.user);
          if (response.data.user.profileSetup) navigate("/dashboard");
          else navigate("/profile");
        } else {
          console.log("error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    try {
      if (validateSignup()) {
        const response = await apiClient.post(
          SIGNUP_ROUTE,
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        if (response.status === 201) {
          setUserInfo(response.data.user);
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-transparent to-orange-900 opacity-50" />
      <Aurora
        colorStops={["#262626", "#FF94B4", "#252843"]}
        speed={3}
        className="h-[20vh] absolute"
      />
      <div className="relative -mt-16 z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-neutral-950 backdrop-blur-xl rounded-2xl p-8 space-y-4 relative overflow-hidden">
          <BorderBeam />
          <div className="flex justify-center relative">
            <img
              className="h-14 w-14 mx-auto my-5 rounded-lg"
              src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg"
              alt="Login Logo"
            />
          </div>
          <h1 className="text-2xl font-bold text-center text-white relative">Sign Up to POT</h1>
          <form  className="space-y-3 relative">
            <div className="space-y-1">
              <label className="text-sm text-gray-400" htmlFor="userName">User Name</label>
              <input
                type="text"
                id="userName"
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="User name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-400" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="name@work-email.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-400" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="******"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-400" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="******"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400" htmlFor="recommandation">Referral Code</label>
              <input
                type="text"
                id="recommandation"
                // value={recommandation}
                // onChange={(e) => setRecommandation(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Referral code"
              />
            </div>
            <button
              type="submit"
              onClick={handleSignup}
              className="w-full py-2 pt-4 px-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/loginpage" className="text-purple-500 hover:text-purple-400">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}