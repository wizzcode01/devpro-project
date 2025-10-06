import event1 from "../assets/event1.webp"
import event2 from "../assets/event2.webp"
import event3 from "../assets/event3.webp"
import event4 from "../assets/event4.webp"
import { FaYoutube } from "react-icons/fa"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Event = () => {

  const events = [
    {
        image : event1,
        desc :  {
            mean: "codementor.io",
            title: "Components Of A Great Portfolio ",
            heads: "I talk about how to create a targeted website to land more job interviews and freelance clients with all the other things that matter. Hosted on codementor.",
            link: "Watch Video",
            link2: "https://www.youtube.com/watch?v=viXpJ5Xwtfs"

        },
    },    
    
    {
         image : event2,
         desc :  {
            mean: "roc8.careers",
            title: "Crafting The Perfect Portfolio Website For Developers ",
            heads: "Talked about how to effectively utilise a portfolio website to put yourself in the best position to win.",
            link: "Watch Video",
            link2: "https://www.youtube.com/watch?v=yKVCl1jFkQQ"

        },
    },
    
    {
        image : event3,
         desc :  {
            mean: "Youtube",
            title: "How To Use Algochurn To Clear Technical Interviews With Ease. ",
            heads: "Algochurn is a free resource that helps front-end developers practice machine coding questions. Here I talk about how to effectively make use of Algochurn.",
            link: "Watch Video",
            link2: "https://www.youtube.com/watch?v=sZA-WrS39KI&t=19s",

        },
    },    
    {
         image : event4,
         desc : {
            mean: "Youtube",
            title: "How To Implement Debouncing In React ",
            heads: "Debouncing is a method of preventing a function from being invoked too often. In this video, I talk about how to create a custom debounce function from scratch.",
            link: "Watch Video",
            link2: "https://www.youtube.com/watch?v=uncrKqVtgrc",

        },
    }    
   
    ]
   return (
    <div className="bg-zinc-900">  
      <Navbar/> 
    <div className="max-w-5xl mx-auto md:p-10 p-6"> 
        <div className="flex flex-col gap-6 md:mt-20 mt-10">
           <h1 className="md:text-5xl text-3xl font-bold text-white">I speak at conferences about how  <span className="text-blue-400">PHP is the best</span></h1>
           <div className="md:leading-10 text-zinc-300 text-[15px] text-lg">
                <p>I don't understand why people are after Angular and React when PHP is still the OG of</p>
                <p>web development. I've been building a lot of things, from small experiments to full-blown</p>
                <p>web applications, each project showcases my love for coding and design.</p>
           </div>
        </div>
    {events.map((eventData, index) => (
     <a 
     href={eventData?.desc.link2}
     target="_blank"
     key={index}
     className="md:flex md:flex-row flex flex-col items-center gap-5 md:ml-20 group cursor-pointer md:mt-0 mt-20">
         <div className="md:w-72 md:h-72 w-full h-full rounded-2xl overflow-hidden flex-shrink-0">
            <img
                src={eventData.image}
                alt=""
                className="w-full h-full md:object-contain object-cover"
            />
        </div>


          
        <div
            className="flex flex-col md:gap-6 gap-3 ">
            <div className="flex items-center gap-4 text-zinc-400">
                |  {eventData.desc.mean}
            </div>
            <div className="flex flex-col gap-3 md:w-[70%] text-zinc-200">
            <h1 className="text-white font-semibold md:text-xl text-lg">{eventData.desc.title}</h1>
            <p className="text-sm text-zinc-400">{eventData.desc.heads}</p>
            <small className="flex items-center group-hover:text-blue-400 transition duration-150 gap-2 text-zinc-500 text-[16px]"><FaYoutube/>{eventData.desc.link}</small>
            </div>
        </div>  
     </a>
     ))}
     </div>
     <Footer/>
    </div> 
   )
}

export default Event