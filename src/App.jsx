import { useState } from 'react'
import Herosection from './pages/Herosection'
import Crosshair from './components/Crosshair'
import  { Projects } from './pages/Projects'
import { Journey } from './pages/Journey'
import  { Contact } from './pages/Contact'
import SkillsSection from './pages/Skills'


function App() {

  return (
    <>
     {/* <Crosshair/> */}
      <Herosection />
      <SkillsSection/>
      <Projects />
      <Journey />
      <Contact/>
    </>
  )
}

export default App