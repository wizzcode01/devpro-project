import Logo from '../assets/avatar.webp'
import Navbar from '../components/Navbar'
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const About = () => {
  return (
    <div className="bg-zinc-900">   
      <div className="max-w-5xl mx-auto px-4"> {/* added px-4 for spacing on small screens */}
        <Navbar/>
        <div className="flex flex-col gap-20">
          {/* Use grid properly */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
            
            {/* LEFT CONTENT */}
            <div className="md:col-span-3 flex flex-col gap-4 text-start">
              <h1 className="text-white text-5xl">
                Hey! I'm <span className="text-blue-400">Tyler Durden </span> 
                and I'm a full stack soap engineer.
              </h1>
              <p className="text-zinc-400">
                I've been obsessed with technology ever since I was a kid. When I wasn't taking apart my family's computer (sorry, mom), I was teaching myself how to code. Fast forward a few years, and now I'm a full-fledged code ninja with an insatiable thirst for creating beautiful websites and functional applications.
              </p>
              <p className="text-zinc-400">
                When I'm not busy slaying bugs and writing code, I'm usually busy indulging in my two favorite hobbies: hot sauce and dad jokes. I firmly believe that a good laugh and a dash of hot sauce can fix just about anything, including bugs in my code (okay, maybe not that last part).
              </p>
            </div>
            
            {/* RIGHT CONTENT (Image + Socials) */}
            <div className="md:col-span-1 flex flex-col items-center gap-4">
              <div className="w-56 h-56 flex items-center justify-center font-bold rounded-lg overflow-hidden">
                <img src={Logo} alt="logo-img" className="rounded-lg w-56 h-56 object-cover" />
              </div>
              <div className="flex items-center gap-6 text-zinc-500 text-2xl">
                <FaTwitter/> 
                <FaLinkedin/> 
                <FaGithub/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>    
  )
}

export default About
