import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import aceternity from "../assets/aceternity-img.webp";
import algochurn from "../assets/algochurn-img.webp";
import boxshadows from "../assets/boxshadows-img.webp";
import placeholdertech from "../assets/placeholdertech-img.webp";
import tailwindmasterkit from "../assets/tailwindmasterkit-img.webp";

import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const ProjectPage = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      image: aceternity,
      title: "Algochurn",
      description:
        "A web app that allows users to practice for front-end and UI interviews",
      link: "https://www.algochurn.com/",
    },
    {
      image: algochurn,
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://www.aceternity.com/",
    },
    {
      image: boxshadows,
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://www.tailwindmasterkit.com/",
    },
    {
      image: placeholdertech,
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://ui.aceternity.com/tools/box-shadows",
    },
    {
      image: tailwindmasterkit,
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://ww25.placeholdertech.in/?subid1=20251007-0106-29b4-8644-9e0ccc5b4400",
    },
  ];


   return (
     <div className="bg-zinc-900">  
      <Navbar/> 
      <div className="max-w-5xl mx-auto md:p-10 p-7"> 
        <div className="flex flex-col gap-6 mt-20">
           <h1 className="md:text-5xl text-3xl font-bold text-white">I've been building a <span className="text-blue-400">lot of things</span></h1>
           <div className="md:leading-10 text-zinc-300 text-[15px] text-lg">
                <p>Come explore the fruits of my labor, from small experiments to full-blown web</p>
                <p>applications, each project showcases my love for coding and design.</p>
           </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10 gap-8">
            {projects.map((item, idx) => (
               <a
                 href={item?.link}
                 key={item?.link}
                 className="relative group  block p-2 h-full w-full"
                 onMouseEnter={() => setHoveredIndex(idx)}
                 onMouseLeave={() => setHoveredIndex(null)}>
                 <AnimatePresence>
                   {hoveredIndex === idx && (
                     <motion.span
                       className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-zinc-800 block rounded-3xl pointer-events-none"
                       layoutId="hoverBackground"
                       initial={{ opacity: 0 }}
                       animate={{
                         opacity: 1,
                         transition: { duration: 0.15 },
                       }}
                       exit={{
                         opacity: 0,
                         transition: { duration: 0.15, delay: 0.2 },
                       }} />
                   )}
                 </AnimatePresence>
       
                 <div className="rounded-2xl h-full w-full overflow-hidden bg-zinc-800 border border-transparent  group-hover:dark:border-white/[0.2] relative z-20">
                   {/* Card Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-2xl"
                      />
                      <div className="p-4">
                        <h1 className="text-zinc-100 font-bold tracking-wide mt-4">{item.title}</h1>
                        <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">{item.description}</p>
                      </div> 
                 </div>
               </a>
             ))}
           </div>
      </div>
      <Footer/>
    </div>    
   )

}

export default ProjectPage