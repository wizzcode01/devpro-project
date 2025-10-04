import Navbar from "../components/Navbar"
import Hero from "../components/Horo"
import Work from "../components/Work"
import Project from "../components/Projects"
import Contributions from "../components/contributions"
import Blog from "../components/Blog"
import Footer from "../components/Footer"

const Landing = () => {
   return (
     <>
     <div className="bg-zinc-900">
        <Navbar/>
        <Hero/>
        <Work/>
        <Project/>
        <Contributions/>
        <Blog/>
        <Footer/>
      </div>
     </>
   )
}

export default Landing