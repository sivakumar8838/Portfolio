import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
  return (
    <div id='about' className='py-5'>
      <div className='container'>
        <h1 className='Project2 text-center mb-4' >About</h1>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='animate-charcter text-center'>
              I am a passionate full-stack developer with expertise in building web applications using various technologies.
              My journey in software development started with a curiosity to create meaningful and efficient solutions to 
              real-world problems. I have experience working with frontend technologies like ReactJS, HTML, CSS, and backend 
              technologies such as Node.js, Express, and MongoDB. With a strong foundation in programming and problem-solving,
              I aim to deliver high-quality and user-friendly applications. When I'm not coding, you can find me exploring new
              technologies, learning, and expanding my skillset.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
