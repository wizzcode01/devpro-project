import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Blog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogPosts = [
    {
      date: "November 28, 2022",
      title: "What is a website template",
      desc: "A website template is a pre-designed website that can be customized to suit your needs. In this post, we’ll take a look at what a website template is and why it can be a great creative outlet for writers",
      uses: [
        {
          name: "16 Inch M2 MacBook Pro",
          desc: "My main machine for development that I've been using for over 6 months now. Such a beast of a machine. I love it.",
        },
        {
          name: "iPad Pro 12.9",
          desc: "Overrated in my opinion. I use it for reading books and watching movies. I don't use it for development.",
        },
      ],
    },
    {
      date: "September 2, 2022",
      title: "What is a blog anywhere",
      desc: "A blog is a website that is updated regularly with new content. It is a great way to share your thoughts and ideas with the world. In this blog post, we will discuss what a blog is and how to create one.",
      uses: [
        {
          name: "Keychron K2",
          desc: "My main keyboard for development. I love the clicky keys and the compact size. I use it with a Logitech MX Master 3 mouse.",
        },
        {
          name: "Logitech MX Master 3",
          desc: "My main mouse for development. I love the scroll wheel and the thumb buttons. I use it with a Keychron K2 keyboard.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-10">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="grid grid-cols-4 gap-6">
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

            {/* Uses (mapped correctly) */}
            <div className="col-span-1 flex flex-col gap-4 text-start text-white p-4">
              <h1 className="font-bold">Uses</h1>
              {post.uses.map((use, Idx) => (
                <div key={Idx}>
                  <h2 className="text-white font-bold text-sm">{use.name}</h2>
                  <p className="text-zinc-400 text-sm">{use.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
