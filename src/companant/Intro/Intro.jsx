import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intro.css';

function Intro() {
  const [titleText, setTitleText] = useState("VISHNU");
  const [fsdText, setFsdText] = useState("FULL STACK DEVELOPER");

  const animateTitle = (text, setText) => {
    setText('');
    text.split('').forEach((letter, index) => {
      setTimeout(() => {
        setText(prevText => prevText + letter);
      }, index * 100); // Reduced the delay for a faster animation
    });
  };

  useEffect(() => {
    animateTitle("SIVAKUMAR", setTitleText);
    animateTitle('FULL STACK DEVELOPER', setFsdText);

    const intervalId = setInterval(() => {
      animateTitle("SIVAKUMAR", setTitleText);
      animateTitle('FULL STACK DEVELOPER', setFsdText);
    }, 14000);

    return () => clearInterval(intervalId);
  }, []);

  const handleResumeClick = () => {
    const resumeUrl = "https://drive.google.com/file/d/1D7P9Irdb1h9-QbjyAwBpbDjk-wPuriQ0/view?usp=drivesdk ";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id='intro' className='d-flex align-items-center justify-content-between'>
      <div id='left-content' className='text-center text-md-start'>
        <h1 id='title'>{titleText}</h1><br />
        <h1 id='fsd'>{fsdText}</h1>
        <p id='para' className='my-3'>
          I'm very interested in creating websites and apps
        </p>
        <button id='button1' className='btn btn-primary' onClick={handleResumeClick}> 
          <span className='Resume'> Resume</span>
        </button>
      </div>
      <div>
jpg        <img className='img-fluid' src='' alt='Sivakumar'/>
      </div>
    </section>
  );
}

export default Intro;
