import { useState, useEffect } from 'react'
import Herosection from './pages/Herosection'
import Crosshair from './components/Crosshair'
import { Projects } from './pages/Projects'
import { Journey } from './pages/Journey'
import { Contact } from './pages/Contact'
import SkillsSection from './pages/Skills'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768
      setIsMobile(isSmall)

      if (isSmall) {
        setShowWarning(true)
        setTimeout(() => {
          setShowWarning(false)
        }, 5000)
      } else {
        setShowWarning(false)
      }
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile && showWarning) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
          fontSize: '1.5rem'
        }}
      >
        This website is not optimized for small screens.  
        <br />
        Please use a larger device for the best experience.
      </div>
    )
  }

  return (
    <>
      {/* <Crosshair /> */}
      <Herosection />
      <SkillsSection />
      <Projects />
      <Journey />
      <Contact />
    </>
  )
}

export default App


