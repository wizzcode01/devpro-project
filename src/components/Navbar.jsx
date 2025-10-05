import { Link } from 'react-router-dom'
import Logo from '../assets/avatar.webp'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-evenly lg:max-w-5xl md:w-full w-[90%] m-0 md:ml-28 relative">
      {/* Navbar container */}
      <div className="bg-zinc-800 text-white border border-[#3f3f3f] flex items-center rounded-2xl h-13 px-4 w-[95%] md:w-2xl mt-7">
        <div className="flex items-center gap-4 md:gap-12 text-[15px] font-semibold w-full justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center font-bold rounded-full overflow-hidden">
              <img src={Logo} alt="logo-img" className="rounded-full" />
            </div>
            <span className="text-[14px] font-bold hidden md:block">Tyler Durden</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
            <Link to="/about" className="text-gray-200 hover:text-gray-400">About</Link>
            <Link to="/project" className="text-gray-200 hover:text-gray-400">Projects</Link>
            <Link to="/contributions" className="text-gray-200 hover:text-gray-400">Contributions</Link>
            <Link to="/blogs" className="text-gray-200 hover:text-gray-400">Blogs</Link>
            <Link to="/event" className="text-gray-200 hover:text-gray-400">Events</Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* CV Button (Desktop) */}
      <div className="mt-7 hidden md:block">
        <button className="text-white text-sm bg-gradient-to-r from-[#464d55] to-[#25292e] px-4 py-4 duration-150 active:outline-none hover:opacity-80 rounded-lg">
          Download CV
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-zinc-800 border-t border-[#3f3f3f] flex flex-col items-center gap-6 py-6 md:hidden z-50 rounded-b-2xl">
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-gray-400">About</Link>
          <Link to="/project" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-gray-400">Projects</Link>
          <Link to="/contributions" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-gray-400">Contributions</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-gray-400">Blogs</Link>
          <Link to="/event" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-gray-400">Events</Link>
          <button className="text-white text-sm bg-gradient-to-r from-[#464d55] to-[#25292e] px-4 py-2 duration-150 hover:opacity-80 rounded-lg">
            Download CV
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar

