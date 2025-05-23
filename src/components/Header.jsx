import React, { useState } from 'react'
import { RxCaretDown,RxCaretRight } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='w-full bg-white px-6 sm:px-10 pt-4 flex justify-between items-center'>
        
        <div className="flex flex-row w-fit">
            {/* Logo */}
            <div className="flex flex-col ">
              <h1 className="font-bold text-2xl sm:text-[35px] text-black border-2 border-gray-900 px-2 rounded-full">
                TransactLink
              </h1>
              <span className="text-[11px] text-gray-900 ml-2 text-center">Empowering connectivity</span>
            </div>


            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row items-center space-x-8 text-gray-800 font-semibold text-[16px] ml-10">
                <span className="flex items-center space-x-1">
                <p>Platform</p>
                <RxCaretDown className='text-[20px]' />
                </span>

                <span className="flex items-center space-x-1">
                <p>Solutions</p>
                <RxCaretDown className='text-[20px]' />
                </span>

                <p>Resources</p>

                <span className="flex items-center space-x-1">
                <p>Company</p>
                <RxCaretDown className='text-[20px]' />
                </span>
            </div>
      </div>

      <div className="flex flex-row w-fit text-gray-800">
            <LuSearch className='text-[22px] mt-3 hidden md:flex'/>
            <button className="mx-6 text-[16px] font-semibold">Login</button>
            <button className="h-12 rounded text-[16px] font-semibold text-white w-fit px-6 bg-yellow-500">Get Started</button>
        </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-gray-700 text-1xl border border-gray-300  rounded-full p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white text-gray-900 flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-50">
          <span className="flex items-center border border-gray-200 rounded w-4/5 h-[2.5rem] justify-between px-4 text-[15px] font-semibold">
            <input type="text" placeholder='Search...' className="" />
            <LuSearch className="text-[20px]" />
          </span>

          <span className="flex items-center space-x-2 w-full h-20 justify-between border-b-[1px] border-gray-300">
            <p>Platform</p>
            <RxCaretRight className='text-[20px]'/>
          </span>

          <span className="flex items-center space-x-2 w-full h-20 justify-between border-b-[1px] border-gray-300">
            <p>Solutions</p>
            <RxCaretRight className='text-[20px]'/>
          </span>

          <span className="flex items-center space-x-2 w-full h-20 justify-between border-b-[1px] border-gray-300">
            <p>Resources</p>
          </span>

          <span className="flex items-center space-x-2 w-full h-20 justify-between border-b-[1px] border-gray-300">
            <p>Company</p>
            <RxCaretRight className='text-[20px]'/>
          </span>
        </div>
      )}
    </div>
  )
}

export default Header;
