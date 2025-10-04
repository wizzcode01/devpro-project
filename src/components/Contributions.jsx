import { FaShareAlt, FaStar } from "react-icons/fa"
import { HoverEffect } from "../ui/card-hover-effect";

const Contributions = () => {

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
             }]
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
             }]
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
             }]
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
             }]
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
             }]
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
             }]
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
             }]
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
             }]
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
             }]
        }
    ]
   return (
     <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-2xl md:text-3xl text-white mb-6 font-bold max-w-5xl mx-auto px-8 mt-40">
           Latest contributions to open source
        </h1>
        <div className="max-w-5xl mx-auto relative mb-20 overflow-hidden">
           <HoverEffect items={contributions} />
        </div>
    </div>
   )
}

export default Contributions