import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import About from './pages/About'

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
