import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex w-full justify-between items-start">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-sm" >
                  <img className="rounded-sm" src="https://res.cloudinary.com/dna3hwzre/image/upload/v1739999777/POT/erphxcw9ionbm1f6cvne.jpg" alt="" />
                </div>
                <span className="text-lg font-semibold">POT
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              © copyright Proof of Transaction 2025. All rights reserved.
            </p>
          </div>
<div className="flex w-[50%] justify-between items-start ">
          {/* Pages Links */}
          <div>
            <h3 className="font-semibold mb-3">Pages</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-3">Socials</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Register Links */}
          <div>
            <h3 className="font-semibold mb-3">Register</h3>
            <div className="flex flex-col gap-2">
              <Link to="/signup" className="text-gray-400 hover:text-white transition-colors">
                Sign Up
              </Link>
              <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/demo" className="text-gray-400 hover:text-white transition-colors">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Faded STARTUP text with fade-in effect */}
      <p class="text-center uppercase mt-20 text-5xl md:text-7xl lg:text-[8rem] xl:text-[7rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-800 inset-x-0"
      >PROOF OF TRANSACTION
      </p>
    </footer>
  )
}