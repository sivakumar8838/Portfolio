import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects({ projects }) {
  return (
    <div id='project' className='container my-5'>
      <h2 className='text-center1 mb-4'>Projects</h2>
      <div className='row'>
        {projects.map((project) => (
          <div key={project._id} className='col-md-4 mb-4'>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  <a href={project.sourceCode} target='_blank' rel='noopener noreferrer' className='btn btn-primary me-2'>
                    Source Code
                  </a>
                  <a href={project.liveDemo} target='_blank' rel='noopener noreferrer' className='btn btn-secondary'>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
