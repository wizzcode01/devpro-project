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
      <div className="bg-zinc-800 text-white border border-[#3f3f3f] flex items-center rounded-2xl h-13 px-4 w-[95%] md:w-2xl mt-7">
        <div className="flex items-center gap-4 md:gap-12 font-semibold w-full justify-between">
          <Link to="/" className="flex items-center gap-2 ">
            <div className="w-8 h-8 flex items-center justify-center font-bold rounded-full overflow-hidden">
              <img src={Logo} alt="logo-img" className="rounded-full" />
            </div>
            <span className="text-[15px] font-bold hidden md:block">Tyler Durden</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group px-3 py-2 rounded-2xl cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 bg-neutral-200/10 dark:bg-zinc-800/80 rounded-2xl"
                      layoutId={`hoverNavbar-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.2 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
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
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 hover:text-gray-400"
            >
              {link.title}
            </Link>
          ))}
          <button className="text-white text-sm bg-gradient-to-r from-[#464d55] to-[#25292e] px-4 py-2 duration-150 hover:opacity-80 rounded-lg">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
