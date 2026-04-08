import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import WorkshopList from './pages/WorkshopList'
import WorkshopDetails from './pages/WorkshopDetails'
import ProposeWorkshop from './pages/ProposeWorkshop'
import Profile from './pages/Profile'

// Scrolls to top instantly on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{
        backgroundColor: '#0a0a0f',
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workshops" element={<WorkshopList />} />
            <Route path="/workshops/:id" element={<WorkshopDetails />} />
            <Route path="/propose" element={<ProposeWorkshop />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App