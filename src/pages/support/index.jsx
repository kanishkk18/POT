import React from 'react';
import Navbar from "@/pages/navbar/Navbar";
import Spotlight from "@/components/ui/spotlight";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen ">
       <Navbar/>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-10"
        fill="white"
      />
    <div className=" text-white flex justify-center items-center py-48">
     
      <div className="w-full max-w-6xl px-4">
        {/* Contact Info Section */}
        <div className="md:flex md:space-x-20 space-y-10 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Contact us</h2>
            <p className="mb-6">
              We are always looking for ways to improve our products and services. 
              Contact us and let us know how we can help you.
            </p>
            <div className="space-y-2">
              <p>Email: <a href="mailto:contact@conferio.in" className="text-blue-400">contact@POT.in</a></p>
              <p>Phone: +91 827833465</p>
              <p>Support: <a href="mailto:support@conferio.in" className="text-blue-400">support@POT.in</a></p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-1/2 bg-[#141414] p-10 rounded-[20px]">
            <form className="space-y-4 w-full">
           
              <div className='w-full'>
                <label className="block text-sm font-medium mb-1">Full name</label>
                <input 
                  type="text" 
                  className="w-full p-2  bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John doe"
                />
              </div>
              <div className='w-full'>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-2 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="contact@POT.com"
                />
              </div>
              <div className='w-full'>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input 
                  type="text" 
                  className="w-full p-2 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Google, Meta, etc."
                />
              </div>
              <div className='w-full'>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  className="w-full p-2 h-32 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message here"
                />
              </div>
              <div>
                <button 
                  type="submit"
                  className="w-full p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
