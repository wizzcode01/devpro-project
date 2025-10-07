import { Link } from 'react-router-dom';
import Logo from '../assets/avatar.webp';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/project" },
    { title: "Contributions", path: "/contributions" },
    { title: "Blogs", path: "/blogs" },
    { title: "Events", path: "/event" },
  ];

  return (
    <div className="flex justify-evenly lg:max-w-6xl mx-auto md:w-full w-[90%] relative">
      <div className="lg:bg-zinc-800 md:text-white lg:border lg:border-[#3f3f3f] flex items-center rounded-2xl h-13 px-4 w-[95%] md:w-2xl lg:mr-14 mt-7">
        <div className="flex items-center gap-4  font-semibold w-full lg:w-96 justify-between">
          <Link to="/" className="">
            <div className="flex items-center justify-start w-36 gap-2 font-bold overflow-hidden">
              <img src={Logo} alt="logo-img" className="w-8 h-8 rounded-full" />
              <span className="text-[15px] font-bold hidden md:block">Tyler Durden</span>
            </div>
           
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] w-96 font-semibold">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group px-2 py-2 rounded-2xl cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 bg-[rgba(229,229,229,0.1)] dark:bg-[rgba(63,63,70,0.8)] rounded-2xl z-0 will-change-transform will-change-opacity"
                      layoutId={"hoverNavbar"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.2 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}}
                    />
                  )}
                </AnimatePresence>
                <Link
                 key={index}
                  to={link.path}
                  className="relative z-10 text-gray-200 "
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* CV Button (Desktop) */}
      <div className="mt-7 hidden lg:block">
        <button className="text-white text-sm bg-gradient-to-r from-[#464d55] to-[#25292e] px-4 py-4 duration-150 active:outline-none hover:opacity-80 rounded-lg">
          Download CV
        </button>
      </div>

      {/* Medium-mobile Menu */}
      {isOpen && (
        <div className="absolute min-h-screen bg-zinc-800 top-20 left-0 w-full flex flex-col justify-center items-center gap-10 lg:hidden z-50 rounded-b-2xl">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 text-lg hover:text-gray-400"
            >
              {link.title}
            </Link>
          ))}
          <button className="text-white text-lg bg-gradient-to-r from-[#464d55] to-[#25292e] px-4 py-2 duration-150 hover:opacity-80 rounded-lg">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
