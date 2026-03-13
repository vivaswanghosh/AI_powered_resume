import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ResumeBuilder from './pages/ResumeBuilder'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="mesh-gradient" />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/builder" element={<ResumeBuilder />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
