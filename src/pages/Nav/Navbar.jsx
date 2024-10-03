import React from 'react'
import logo from "../../assets/images.jpg"
import profileimg from "../../assets/construct.jpg"
export const Navbar = () => {
  return (
    <nav>
        <div className="px-[30px] flex justify-between bg-white py-2 ring-1 ring-slate-900/5 relative">
            <img src={logo} alt="" className='h-12 w-12 ' />
            <div className="flex items-center uppercase bg-orange-500 px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold  font-bold text-white">
                Admin Panel
            </div>
            <div className="">
                <img src={profileimg} alt="" className='h-12 w-12 rounded-full' />
            </div>
        </div>
    </nav>
  )
}
