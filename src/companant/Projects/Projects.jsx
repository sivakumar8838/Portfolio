import React from 'react';
import './Projects.css';


function Projects({ projects }) {
  return (
    <div id='project'>
      <h2 className='Project'>Projects</h2>
      <div>
        {projects.map((project) => (
          <section key={project._id} className='d'>
            <div className="card-container">
              <div className="card">
                <div className="front-content">
                  <p>{project.title}</p>
                </div>
                <div className="content">
                  <p className="heading">{project.title}</p>
                  <p className='p'>{project.description}</p>
                  <a href={project.sourceCode} target='_blank' rel='noopener noreferrer'> <button className='btn'>sourceCode</button></a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <button class="btn">
                    liveDemo
                  </button>

                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Projects;
