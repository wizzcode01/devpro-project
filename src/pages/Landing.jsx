import Navbar from "../components/Navbar"
import Hero from "../components/Horo"
import Work from "../components/Work"
import Project from "../components/Projects"

const Landing = () => {
   return (
     <>
     <div className="bg-[#141414]">
        <Navbar/>
        <Hero/>
        <Work/>
        <Project/>
      </div>
     </>
   )
}

export default Landing