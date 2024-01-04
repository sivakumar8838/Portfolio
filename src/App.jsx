import React from 'react'
import Navbar from './companant/navbar/navbar'
import Intro from './companant/Intro/Intro'
import Projects from './companant/Projects/Projects'
import Skills from './companant/Skills/Skills'
import Education from './companant/Education/Educaion'
import Certification from './companant/Certification/About'
import Contact from './companant/Contact/Contact'

function App() {
  
 const projects = [
  {
    "title": "Resume Builder",
    "description": "Create and customize professional resumes effortlessly with a feature-rich resume builder. Tailor your resume to stand out with various templates and styling options. Powered by React, Redux, MongoDB and Node.js.",
    "sourceCode": "https://github.com/Vishnu-D-2002/Dynamic_Portfolio_-_Export_PDF-FE-",
    "liveDemo": "https://main--splendid-cat-8425a0.netlify.app/"
  },
  {
    "title": "URL Shortener",
    "description": "Shorten and share long URLs with ease, and gain insights into link performance through analytics. The URL shortener is built using React, Express, MongoDB, and Node.js to provide a robust and scalable solution.",
    "sourceCode": "https://github.com/Vishnu-D-2002/Dynamic_Portfolio_-_Export_PDF-FE-",
    "liveDemo": "https://main--spiffy-medovik-29bd79.netlify.app/"
  },
  {
    "title": "Login Authentication",
    "description": "Enhance your applications with secure user authentication and authorization features. This project utilizes Axios for seamless and reliable user management, integrated with React and Node.js.",
    "sourceCode": "https://github.com/Vishnu-D-2002/PWD_RST_FE",
    "liveDemo": "https://main--deft-fudge-828488.netlify.app/"
  },
  {
    "title": "Rest Countries ",
    "description": "Discover detailed information about countries and regions around the world. This interactive explorer, developed with DOM , Node.js and powered by the REST Countries API, allows users to explore diverse geographical and cultural data.",
    "sourceCode": "https://github.com/Vishnu-D-2002/task/tree/main/task-11",
    "liveDemo": "https://main--enchanting-swan-189083.netlify.app/task-11/weather_display.html"
  },
  {
    "title": "Tic Tac Toe Game",
    "description": "Play the classic Tic Tac Toe game with a simple and intuitive user interface. Enjoy a two-player game with alternating turns and responsive design.",
    "sourceCode": "https://github.com/Vishnu-D-2002/Tic-Tac-Toe",
    "liveDemo": "https://main--clinquant-jalebi-bd038c.netlify.app/"
  },
  {
    "title": "Dictionary App",
    "description": "Expand your vocabulary with a comprehensive Dictionary App. Look up word meanings and definitions effortlessly. Developed using DOM, Node.js and integrated with the Dictionary API for accurate and rich word data.",
    "sourceCode": " https://github.com/Vishnu-D-2002/task/tree/main/task-12/thirukkural",
    "liveDemo": " https://main--enchanting-swan-189083.netlify.app/task-12/thirukkural/"
  }
]
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects projects={projects}/>
      <Education />
      <Certification />
      <Contact />
    </div>
  )
}

export default App