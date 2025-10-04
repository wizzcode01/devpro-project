import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import About from './pages/About'
import ProjectPage from './pages/ProjectPage'

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<ProjectPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
