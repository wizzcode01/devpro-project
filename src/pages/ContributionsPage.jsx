import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaShareAlt, FaStar } from "react-icons/fa"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContributionsPage = () => {
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
                 link: "https://github.com/manuarora700/javascript-interview-questions"
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
                 link: "https://github.com/manuarora700/react-onrender"
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
                 link: "https://github.com/manuarora700/create-react-app"
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
                 link: "https://github.com/manuarora700/portfolio"
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
                 link: "https://github.com/manuarora700/tailwind-vanillajs-boilerplate"
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
                 link: "https://github.com/manuarora700/swagshop"
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
                 link:"https://github.com/manuarora700/awesome-tech-blogs"
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
                 link: "https://github.com/manuarora700/fireship.io"
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
                 link: "https://github.com/manuarora700/mapfvisualizer"

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
                 link: "https://github.com/manuarora700/data-structures-algorithms-interviews"
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
                 link: "https://github.com/manuarora700/opensource.razorpay.com"
            }
        ]
    return (
    <div className="bg-zinc-900">  
      <Navbar/> 
    <div className="max-w-5xl mx-auto md:p-10 p-6"> 
        <div className="flex flex-col md:gap-6 gap-10 md:mt-20 mt-10">
            <h1 className="md:text-5xl text-3xl font-bold text-white">Committing Code and Crimes
           Against <span className="text-blue-400"> Open Source World</span></h1>
           <div className="md:leading-10 text-zinc-300 text-[15px] text-lg">
                <p>A place where you can witness my caffeinated coding adventures and see just how much</p>
                <p>coffee it takes to fuel my commits. from my first "Hello World" to my latest breakthrough,</p>
                <p>and everything in between.</p>
           </div>
        </div>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto md:mt-20 mt-10 gap-10 p-6">
                   {contributions.map((array, index) => (
                   <a
                     href={array?.link}
                     key={index}
                     className="relative group p-2 rounded-2xl "
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
                  className="flex  items-center gap-1 text-zinc-400 ">
                     {iconArray.icon}
                     {iconArray.num}
                  {/* <div className="flex items-center gap-1">
                     {iconArray.icon}
                     {iconArray.num}
                  </div> */}
                  </div> 
               ))}
               </div>
               </div>
             </a>
          ))}
       </div>
       <div className="flex justify-center items-center">
          <a href="https://github.com/manuarora700?tab=overview&from=2025-10-01&to=2025-10-06" target="_blank" className="bg-zinc-900 text-white border border-zinc-400 hover:bg-zinc-800 p-2 px-8 rounded-lg mt-10">View all on Github</a>
       </div>
    <Footer/>
    </div>
    )
}

export default ContributionsPage