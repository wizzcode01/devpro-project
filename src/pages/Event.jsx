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
            link: "Watch Video"

        },
    },    
    
    {
         image : event2,
         desc :  {
            mean: "roc8.careers",
            title: "Crafting The Perfect Portfolio Website For Developers ",
            heads: "Talked about how to effectively utilise a portfolio website to put yourself in the best position to win.",
            link: "Watch Video"

        },
    },
    
    {
        image : event3,
         desc :  {
            mean: "Youtube",
            title: "How To Use Algochurn To Clear Technical Interviews With Ease. ",
            heads: "Algochurn is a free resource that helps front-end developers practice machine coding questions. Here I talk about how to effectively make use of Algochurn.",
            link: "Watch Video"

        },
    },    
    {
         image : event4,
         desc : {
            mean: "Youtube",
            title: "How To Implement Debouncing In React ",
            heads: "Debouncing is a method of preventing a function from being invoked too often. In this video, I talk about how to create a custom debounce function from scratch.",
            link: "Watch Video"

        },
    }    
   
    ]
   return (
    <div className="bg-zinc-900">  
      <Navbar/> 
    <div className="max-w-5xl mx-auto p-10 "> 
        <div className="flex flex-col gap-6 mt-20">
           <h1 className="text-5xl font-bold text-white">I speak at conferences about how  <span className="text-blue-400">PHP is the best</span></h1>
           <div className="leading-10 text-zinc-300 text-[15px] text-lg">
                <p>I don't understand why people are after Angular and React when PHP is still the OG of</p>
                <p>web development. I've been building a lot of things, from small experiments to full-blown</p>
                <p>web applications, each project showcases my love for coding and design.</p>
           </div>
        </div>
    {events.map((eventData, index) => (
     <div 
     key={index}
     className="flex items-center gap-5 ml-10 group cursor-pointer">
          <img src={eventData.image} alt="" className="w-72 h-72 object-contain" />

        <div
        className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-zinc-400">
                |  {eventData.desc.mean}
            </div>
            <div className="flex flex-col gap-3 w-[70%] text-zinc-200">
            <h1 className="text-white font-semibold text-xl">{eventData.desc.title}</h1>
            <p className="text-sm text-zinc-300">{eventData.desc.heads}</p>
            <small className="flex items-center group-hover:text-blue-400 transition duration-150 gap-2 text-zinc-500 text-[16px]"><FaYoutube/>{eventData.desc.link}</small>
            </div>
        </div>  
     </div>
     ))}
     </div>
     <Footer/>
    </div> 
   )
}

export default Event