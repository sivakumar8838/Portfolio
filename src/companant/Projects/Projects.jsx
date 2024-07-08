import React, { useState } from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div id='project1' className='container my-5'>
      <h2 className='text-center1 mb-4'>Projects</h2>
      <div className='row justify-content-center'>
        <div className='col-md-6 mb-5'>
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{currentProject.title}</h5>
              <p className="card-text">{currentProject.description}</p>
              <div className="mt-auto">
                <a href={currentProject.sourceCode} target='_blank' rel='noopener noreferrer' className='btn btn-primary me-2'>
                  Source Code
                </a>
                <a href={currentProject.liveDemo} target='_blank' rel='noopener noreferrer' className='btn btn-secondary'>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col text-center'>
          <button onClick={handleNext} className='btn btn-primary'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
