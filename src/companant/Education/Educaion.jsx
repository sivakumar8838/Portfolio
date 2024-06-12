import React from 'react';
import "./Educaion.css"


const education = [
  {
    "school": "GOVERNMENT ARTS COLLEGE",
    "level": "BA",
    "title": "BA.Economics",
    "percentage": 76,
    "description": "Bachelor of Arts in economics and Communication Arts (BA) with a remarkable 76% from GOVERNMENT ARTS COLLEGE."
  },
  {
    "school": "V.Muthampatti Govt Hr Sec School",
    "level": "HSC",
    "title": "HIGHER SECONDARY",
    "percentage": 74,
    "description": "Achieved an impressive 76% in the Higher Secondary (12th Grade) from V.Muthampatti Govt Hr Sec School."
  },
  {
    "school": "V.Muthampatti Govt Hr Sec School",
    "level": "SSLC",
    "title": "SECONDARY SCHOOL",
    "percentage": 69,
    "description": "Secured an Average 69% in the Secondary School Leaving Certificate (10th Grade) from V.Muthampatti Govt Hr Sec School."
  }
];

function Education() {
  return (
    <section id='education' className='container my-5'>
      <h2 className='section-title1 text-center mb-4'>STUDIES</h2>
      <div className='row'>
        {education.map((data, i) => (
          <div className='col-md-4 mb-4' key={i}>
            <div className='card h-100'>
              <div className='card-body d-flex flex-column'>
                <div className='mb-2'>
                  <h5 className='card-title'>{data.level}</h5>
                </div>
                <div className='mt-auto'>
                  <p className='card-subtitle mb-2'>{data.title}</p>
                  <p className='card-text'>{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
