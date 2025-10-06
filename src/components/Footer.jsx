import { Link } from 'react-router-dom'
import Logo from '../assets/avatar.webp'
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"


const Footer = () => {
  return (
    <div className='lg:max-w-5xl mx-auto w-full'>
        <div className='flex flex-col items-center justify-center gap-5 text-zinc-100 lg:p-32 p-5 lg:mt-0 mt-20'>
            <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center font-bold rounded-full">
                    <img src={Logo} alt="logo-img" className="rounded-full" />
                </div>
                <span className="lg:text-2xl text-lg font-bold ">Tyler Durden</span>
            </Link>
        <nav className="lg:flex lg:flex-row flex flex-col  lg:items-center gap-7 md:gap-12 text-[15px] font-semibold">
            <Link>About </Link>
            <Link>Project</Link>
            <Link>Contribution</Link>
            <Link>Blogs</Link>
            <Link>Events</Link>
        </nav>
        <div className="border-t border-zinc-600 flex flex-col items-center gap-3">
          <small className='m-3 text-zinc-300'>© 2025 Devpro Portfolio Template. All rights reserved.</small>
          <div className="flex items-center gap-8 text-zinc-500 cursor-pointer">
            <FaTwitter className='hover:text-zinc-600'/> <FaLinkedin className='text-zinc-600'/> <FaGithub className='text-zinc-600'/>
          </div>
        </div>  
        </div>
    </div>
  )
}

export default Footer 