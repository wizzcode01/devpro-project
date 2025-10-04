import { Link } from 'react-router-dom'
import Logo from '../assets/avatar.webp'

const Navbar = () => {
  return (
    <div className='flex justify-evenly max-w-5xl ml-28'>
    <nav className="bg-zinc-800 text-white border border-[#3f3f3f] flex items-center rounded-2xl h-13 px-4 w-[95%] md:w-2xl mt-7 ">
     <div className='flex items-center gap-4 md:gap-12 text-[15px] font-semibold'>
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center font-bold rounded-full overflow-hidden">
          <img src={Logo} alt="logo-img" className="rounded-full" />
        </div>
        <span className="text-[14px] font-bold hidden md:block">Tyler Durden</span>
      </Link>

        <Link to="/about" className="text-gray-200 hover:text-gray-400">About</Link>
        <Link to="/project" className="text-gray-200 hover:text-gray-400">Projects</Link>
        <Link to="/contributions" className="text-gray-200 hover:text-gray-400">Contributions</Link>
        <Link to="/blogs" className="text-gray-200 hover:text-gray-400">Blogs</Link>
        <Link to="/events" className="text-gray-200 hover:text-gray-400">Events</Link>
    </div>   
    </nav>
      <div className='mt-7'>
        <button className="text-white text-sm bg-gradient-to-r from-[#464d55] to-[#25292e] px-4 py-4 duration-150 active:outline-none hover:opacity-80 rounded-lg">
          Download CV
        </button>
      </div>
    </div>
  )
}

export default Navbar
