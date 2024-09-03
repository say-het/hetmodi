import React from 'react';
import Experience from '../pages/experience';
import Projects from '../pages/projects';
import Aboutme from '../pages/aboutme';
import Education from '../pages/education';
// import '../App.css'
import './Left.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Leftsect = ({ index }) => {
    const components = [
        <Aboutme key="aboutme" />,
        <Experience key="experience" />,
        <Projects key="projects" />,
        <Education key="education" />
      ];
    
  return (
    <>
    <TransitionGroup>
      <CSSTransition
        key={index}  
        timeout={800}  
        classNames="fade" 
      >
        {components[index]}
      </CSSTransition>
    </TransitionGroup>
    </>
  );
};

export default Leftsect;
