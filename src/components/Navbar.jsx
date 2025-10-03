import { Link } from 'react-router-dom'
import Logo from '../assets/avatar.webp'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-evenly w-full'>
    <nav className="bg-[#202020] text-white border border-[#3f3f3f] flex items-center rounded-2xl h-13 px-4 w-[95%] md:w-2xl m-7 ">
     <div className='flex items-center gap-4 md:gap-12 text-[15px] font-semibold'>
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center font-bold rounded-full overflow-hidden">
          <img src={Logo} alt="logo-img" className="rounded-full" />
        </div>
        <span className="text-[14px] font-bold hidden md:block">Tyler Durden</span>
      </Link>

        <Link to="/about" className="text-gray-200 hover:text-gray-400">About</Link>
        <Link to="/projects" className="text-gray-200 hover:text-gray-400">Projects</Link>
        <Link to="/contributions" className="text-gray-200 hover:text-gray-400">Contributions</Link>
        <Link to="/blogs" className="text-gray-200 hover:text-gray-400">Blogs</Link>
        <Link to="/events" className="text-gray-200 hover:text-gray-400">Events</Link>
    </div>   
    </nav>
      <div>
        <button className="bg-gray-700 text-white text-[15px] px-3 py-4 rounded-lg hover:bg-gray-300 cursor-pointer transition-colors ">
          Download CV
        </button>
      </div>
    </div>
  )
}

export default Navbar
