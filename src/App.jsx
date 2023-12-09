import React from 'react'
import Navbar from './companant/navbar/navbar'
import Intro from './companant/Intro/Intro'
import Projects from './companant/Projects/Projects'
import Skills from './companant/Skills/Skills'
import Education from './companant/Education/Educaion'
import Certification from './companant/Certification/Certification'
import Contact from './companant/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Education />
      <Certification />
      <Contact />
    </div>
  )
}

export default App