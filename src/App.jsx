import React from 'react'
import Navbar from './companant/navbar/navbar'
import Intro from './companant/Intro/Intro'
import Projects from './companant/Projects/Projects'
import Skills from './companant/Skills/Skills'
import Education from './companant/Education/Educaion'
import Certification from './companant/Certification/About'
import Contact from './companant/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
 const projects = [
  {
    "title": "Kitchen Recipe management",
    "description": "This project, titled Kitchen Recipe Management, is a web application designed to streamline and simplify recipe management for your kitchen. Whether you're a cooking enthusiast or someone who loves organizing recipes, this application provides a user-friendly interface for managing and categorizing your favorite recipes.",
    "sourceCode": "	https://github.com/sivakumar8838/Kitchen-Recipe-management-Frontend",
    "liveDemo": "	https://statuesque-crisp-03f74c.netlify.app"
  },
  {
    "title": "ShoppingCard",
    "description": "Shorten and share long URLs with ease, and gain insights into link performance through analytics. The URL shortener is built using React, Express, MongoDB, and Node.js to provide a robust and scalable solution.",
    "sourceCode": ":https://github.com/sivakumar8838/ShoppingCard",
    "liveDemo": "https://main--spiffy-medovik-29bd79.netlify.app/"
  },
  {
    "title": "Login Page",
    "description": "Enhance your applications with secure user authentication and authorization features. This project utilizes Axios for seamless and reliable user management, integrated with React and Node.js.",
    "sourceCode": "https://github.com/sivakumar8838/Login-Fe",
    "liveDemo": "https://main--deft-fudge-828488.netlify.app/"
  },
  {
    "title": "Price Card ",
    "description": "Discover detailed information about countries and regions around the world. This interactive explorer, developed with DOM , Node.js and powered by the REST Countries API, allows users to explore diverse geographical and cultural data.",
    "sourceCode": "https://github.com/sivakumar8838/React-Price-Card-Task",
    "liveDemo": "https://cosmic-alpaca-5b0c4a.netlify.app"
  }
]
  return (
    <div>
      <Navbar />
      <Intro />
      <Certification />
      <Skills />
      <Projects projects={projects}/>
      <Education />
      <Contact />
    </div>
  )
}

export default App