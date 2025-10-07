import { FaShareAlt, FaStar } from "react-icons/fa"
import { HoverEffect } from "../ui/card-hover-effect";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Contributions = () => {
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const contributions = [
         {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
               link: "https://github.com/manuarora700/react-code-editor"  
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/simple-developer-portfolio-website"
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/devmedium"
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/tictactoe"
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/sendgrid-contact-form"
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/100-days-interview-preparation"
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/tictactoe"
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/hashnode-github-backup"
            },
            {
                title: "react-code-editor",
                desc: "Build your own code editor that compiles and run 40+ porgramming languages.",
                icons : [{ 
                    icon: <FaShareAlt/>,
                    num: 57,
                 }, {
                    icon: <FaStar/>,
                    num: 158
                 }],
                 link: "https://github.com/manuarora700/100-days-interview-preparation"
            },
    ]
   return (
      <div className="max-w-5xl mx-auto  relative mb-20 px-8">
         <h1 className="text-2xl md:text-3xl text-white mb-6 font-bold mt-40">
         Latest contributions to open source
         </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-20 gap-10">
               {contributions.map((array, index) => (
                   <a
                     href={array?.link}
                     key={index}
                     className="relative group p-1 rounded-2xl "
                     onMouseEnter={() => setHoveredIndex(index)}
                     onMouseLeave={() => setHoveredIndex(null)}
                     >
                     <AnimatePresence>
                        {hoveredIndex === index && (
                           <motion.span
                          className="absolute inset-0 h-full w-full bg-neutral-200/10 dark:bg-zinc-800/80 rounded-2xl"
                           layoutId="hoverBackgroundContributions"
                           initial={{ opacity: 0 }}
                           animate={{
                              opacity: 1,
                              transition: { duration: 0.2 },
                           }}
                           exit={{
                              opacity: 0,
                              transition: { duration: 0.15, delay: 0.1 },
                           }}
                           />
                        )}
                     </AnimatePresence>
                     <div 
                     key={index}
                     className="relative z-10 flex flex-col justify-between items-start gap-3 border border-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-900 px-4 py-4 duration-150 rounded-xl shadow-sm">
                     <h1 className="text-lg font-semibold text-white">{array.title}</h1>
                     <p className="text-[15px] text-zinc-400  leading-relaxed">{array.desc}</p>

                     <div className="flex items-center gap-4 mt-2">
                     {array.icons.map((iconArray, id) => (
                        <div 
                           key={id}
                           className="flex  items-center gap-1 text-zinc-400 group-hover:text-blue-400 transition-colors duration-200">
                           {iconArray.icon}
                           {iconArray.num}
                        </div> 
                     ))}
                     </div>
                     </div>
                     </a>
                  ))}
                  
       </div>
       <div className="flex justify-center items-center">
          <Link to="/contributions" className="bg-zinc-900 text-white border border-zinc-400 hover:bg-zinc-800 p-2 px-8 rounded-lg mt-10">Show More</Link>
       </div>
     </div>
   )
}

export default Contributions