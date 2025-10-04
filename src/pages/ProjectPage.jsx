import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Project from "../components/Projects"
const ProjectPage = () => {
   return (
     <div className="bg-zinc-900">  
      <Navbar/> 
      <div className="max-w-5xl mx-auto p-10"> 
        <div className="flex flex-col gap-6 mt-20">
           <h1 className="text-5xl font-bold text-white">I've been building a <span className="text-blue-400">lot of things</span></h1>
           <div className="leading-10 text-zinc-300 text-[15px] text-lg">
                <p>Come explore the fruits of my labor, from small experiments to full-blown web</p>
                <p>applications, each project showcases my love for coding and design.</p>
           </div>
        </div>
        <div className="mt-10">
        <Project/>
        </div>
      </div>
      <Footer/>
    </div>    
   )

}

export default ProjectPage