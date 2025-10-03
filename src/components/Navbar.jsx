import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/avatar.webp'

const Navbar = () => {

  return (
    <div className=''>
    <nav className="flex ">
        <div className="bg-gray-700  text-white fixed top-0 left-50%  md:w-3xl w-[95%] border border-gray-500 m-5 rounded-2xl h-14 flex gap-4 px-4">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 flex items-center justify-center font-bold rounded-full">
              <img src={Logo} alt="logo-img" className='rounded-full'/>
            </div>
            <span className="text-[15px] font-bold md:block hidden">Tyler Durden</span>
          </Link>
            <div className='flex items-center gap-2 md:gap-4 text-[15px] font-semibold'>
                <Link to='/blog' className=' text-gray-200 hover:text-gray-400'>About</Link>
                <Link to='/contributors' className=' text-gray-200 hover:text-gray-400'>Projects</Link>
                <Link to='/blog' className=' text-gray-200 hover:text-gray-400'>Contributions</Link>
                <Link to='/contributors' className=' text-gray-200 hover:text-gray-400'>Blogs</Link>
                <Link to='/contributors' className=' text-gray-200 hover:text-gray-400'>Events</Link>
            </div>
        </div>
        <button className="bg-gray-200 text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-300 cursor-pointer transition-colors font-semibold flex gap-2 items-center">
            Download CV
        </button>

    </nav>
     
    </div>
  )

}

export default Navbar