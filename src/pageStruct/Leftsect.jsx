import React from 'react';
import Experience from '../pages/experience';
import Projects from '../pages/projects';
import Aboutme from '../pages/aboutme';
import Education from '../pages/education';

const Leftsect = ({ index }) => {
  return (
    <>
      {index === 0 && <Aboutme />}
      {index === 1 && <Experience />}
      {index === 2 && <Projects />}
      {index === 3 && <Education />}
    </>
  );
};

export default Leftsect;
    