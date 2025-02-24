import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/auth/index';
import Loginpage from './pages/auth/SignIn';
import Navbar from './pages/navbar/Navbar';
import SupportForm from "./pages/support";
import Home from './pages/home/Home';
import Pricing from "./pages/pricing";
import Profile from './pages/profile';
import Dashboard from "./pages/dashboard";
import AdminDash from "./pages/admindash/index"
import Wallet from "./pages/overview/page"


const App = () => {

  return ( 
  <BrowserRouter>

  
    <div>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Auth/>}/>
      <Route path="/loginpage" element={<Loginpage/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/support" element={<SupportForm/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/dashhboard" element={<AdminDash/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/*" element={<Navigate to='/'/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App;