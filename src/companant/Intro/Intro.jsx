import React, { useEffect, useState } from 'react';
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
    <section id='intro'>
      <div id='left-content'>
        <h1 id='title'>Mr.SIVAKUMAR</h1><br />
        <h1 id='fsd'>DEVELOPER</h1>
        <p id='para'>
          I'm very interested in creating websites and apps
        </p>
        <button className='resume' onClick={handleResumeClick}>Resume</button>
      </div>
    </section>
  );
}

export default Intro;
