import React from 'react'
import './Educaion.css';

const education = [
  {
    "school": "GOVERNMENT ARTS COLLEGE",
    "level": "BA",
    "title":"BA.Economics ",
    "percentage": 76,
    "description": "Bachelor of Arts in economics and Communication Arts (BA) with a remarkable 76% from GOVERNMENT ARTS COLLEGE ."
  },
  {
    "school": "V.Muthampatti Govt Hr Sec School",
    "level": "HSC",
    "title":"HIGHER SECONDARY",
    "percentage": 74,
    "description": "Achieved an impressive 76% in the Higher Secondary (12th Grade) fromV.Muthampatti Govt Hr Sec School."
  },
  {
    "school": "V.Muthampatti Govt Hr Sec School",
    "level": "SSLC",
    "title":"SECONDARY SCHOOL",
    "percentage": 69,
    "description": "Secured an Averag 69% in the Secondary School Leaving Certificate (10th Grade) from V.Muthampatti Govt Hr Sec School."
  }
];

function Education() {
  return (
    <section id='education'>
      <h2 className='section-title'>STUDIES</h2>
      {
        education.map((data,i) => (
          <div className="card1" key={i}>
            {/* <div> */}
              {/* <h1 className='educ_title'>{data.level}</h1>
            </div>
            <div className="card__content">
              <p className="card__title">{data.title}
              </p><p className="card__description">{data.description}</p>
            </div> */}
            <div class="card">
            <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">{data.level}</p>
                <p></p>
            </div>
            <div class="backSide">
                <p class="title">{data.title}</p>
                <p>{data.description}</p>
            </div>
        </div>
    </div>


</div>
          </div>
        ))
      }
     
    </section>
  )
}

export default Education