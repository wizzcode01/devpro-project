import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BlogPage = () => {
   const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogPostsPage = [
    {
      date: "November 28, 2022",
      title: "What is a website template",
      desc: "A website template is a pre-designed website that can be customized to suit your needs. In this post, we’ll take a look at what a website template is and why it can be a great creative outlet for writers",
    
    },
    {
      date: "September 2, 2022",
      title: "What is a blog anywhere",
      desc: "A blog is a website that is updated regularly with new content. It is a great way to share your thoughts and ideas with the world. In this blog post, we will discuss what a blog is and how to create one.",

    },
  ];

   return (
     <div className="bg-zinc-900">  
      <Navbar/> 
      <div className="max-w-5xl mx-auto p-10 "> 
        <div className="flex flex-col gap-10 mt-20 w-3xl">
           <h1 className="text-5xl font-bold text-white">All my  <span className="text-blue-400">Technical Knowledge</span>{" "}in one place</h1>
           <div className="leading-8 text-zinc-300 text-[15px] text-lg">
                <p>Come explore the fruits of my labor, from small experiments to full-blown web</p>
                <p>applications, each project showcases my love for coding and design.</p>
           </div>
        </div>
        <div className="mt-10">
        <div className="flex flex-col gap-10">
        {blogPostsPage.map((post, idx) => (
          <div key={idx} className="grid grid-cols-3 gap-6 w-3xl">
            {/* Blog Content with Hover Effect */}
            <div
              className="relative group col-span-3 p-4 rounded-2xl"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200/10 dark:bg-zinc-800/80 rounded-2xl"
                    layoutId="hoverBackgroundBlog"
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

              <div className="relative z-10 flex flex-col mx-auto gap-5 leading-relaxed text-white">
                    <div className="flex items-center gap-4 text-zinc-500">
                    | <small>{post.date}</small>
                    </div>
                    <h2 className="text-[17px] font-semibold">{post.title}</h2>
                    <p className="text-zinc-200 text-[15px]">{post.desc}</p>
                    <a href={post.link} className="text-blue-400">
                    Read more
                    </a>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
      <Footer/>
    </div>  
   )
}

export default BlogPage