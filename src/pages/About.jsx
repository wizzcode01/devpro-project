import Logo from '../assets/avatar 2.webp'
import Navbar from '../components/Navbar'
import { FaTwitter, FaLinkedin, FaGithub, FaCheckCircle } from "react-icons/fa"
import Footer from '../components/Footer'

const About = () => {

    const timeline = [
  {
    year: "2023",
    events: [
      "Building a new startup, this time it's going to be a big one",
      "Started writing blogs as a daily habit. Won the nobel prize for literature",
      "My brother went on to pursue a career in music, he's now a famous singer",
    ],
  },
  {
    year: "2022",
    events: [
      "Bought a new M2 chip macbook pro wow this is crazy!",
      "Broke the chip as soon as I got it, had to buy a new one",
      "Bought a new M2 chip macbook pro and started living on the streets.",
    ],
  },
  {
    year: "2021",
    events: [
      "Won the interstate merathon, died 4 times on the way.",
      "Built a side project to help the people of my country win the war against covid",
      "Started a podcast with my brother, we talk about the latest tech news",
    ],
  },
  {
    year: "2020",
    events: [
      "Back at it again, this time joined facebook as a software engineer",
      "Went on to jump right in the metaverse, and joined Oculus as a software engineer",
      "Champion of international tetris competition held between me and my brother",
    ],
  },
  {
    year: "2019",
    events: [
      "Mid life crisis and decided to change career",
      "Went on to do a Masters in Data Science",
      "Ended up owning a farm and a small business",
    ],
  },
  {
    year: "2018",
    events: [
      "Graduate with a Bachelor of Mathematics",
      "Graduate with a Bachelor of Computer Science",
      "Graduate with a Bachelor of Statistics",
    ],
  },
];

  return (
    <div className="bg-zinc-900">  
      <Navbar/> 
      <div className="max-w-5xl mx-auto px-4"> 
        <div className="flex flex-col gap-8 mt-20">
          {/* Use grid properly */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
            
            {/* LEFT CONTENT */}
            <div className="md:col-span-3 flex flex-col gap-8 text-start">
              <h1 className="text-white text-5xl font-bold leading-tight">
                Hey! I'm <span className="text-blue-400">Tyler Durden </span> 
                and I'm a full stack soap engineer.
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                I've been obsessed with technology ever since I was a kid. When I wasn't taking apart my family's computer (sorry, mom), I was teaching myself how to code. Fast forward a few years, and now I'm a full-fledged code ninja with an insatiable thirst for creating beautiful websites and functional applications.
              </p>
            </div>
            
            {/* RIGHT CONTENT (Image + Socials) */}
            <div className="md:col-span-1 flex flex-col items-center gap-4 ">
              <div className="w-52 h-52 flex items-center justify-center font-bold rounded-2xl overflow-hidden">
                <img src={Logo} alt="logo-img" className="rounded-lg w-52 h-52 object-cover" />
              </div>
              <div className="flex items-center gap-6 text-zinc-500 text-2xl">
                <FaTwitter/> 
                <FaLinkedin/> 
                <FaGithub/>
              </div>
            </div>

          </div>
             <p className="text-zinc-400 text-lg leading-relaxed">
                When I'm not busy slaying bugs and writing code, I'm usually busy indulging in my two favorite hobbies: hot sauce and dad jokes. I firmly believe that a good laugh and a dash of hot sauce can fix just about anything, including bugs in my code (okay, maybe not that last part).
              </p>
              <div>
                 <h1 className='text-zinc-400'>Here's a timeline of what I've been upto</h1>
                 {timeline.map((item, index) => (
                 <div key={index} className='flex flex-col ml-14 gap-6 mt-10'>
                    <span className='text-xl font-bold text-white'>{item.year}</span>
                    <div>
                        {item.events.map((event, i) => (
                            <div
                                key={i}
                                className='flex items-center gap-2'>
                                <FaCheckCircle className=' text-blue-400'/> <p className='text-zinc-400 leading-relaxed'>{event}</p>
                            </div>
                        ))}
                    </div> 
                    <div className='border-b border-zinc-800'></div>     
                    </div>
                    ))}
              </div>
        </div>
      </div>
      <Footer/>
    </div>    
  )
}

export default About
