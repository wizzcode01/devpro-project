import Navbar from "../components/Navbar"
import Hero from "../components/Horo"
import Work from "../components/Work"

const Landing = () => {
   return (
     <>
     <div className="bg-[#080808]">
        <Navbar/>
        <Hero/>
        <Work/>
      </div>
     </>
   )
}

export default Landing