import React from 'react';
import styled, { keyframes } from "styled-components";




// ------------------------------------------
const hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`;

const AnimatedGradientText = styled.h1`
  color: #ff5e00;
  background-image: linear-gradient(92deg, #ff5e00, #ffcc2a);
  background-clip: text;
  text-fill-color: transparent;
  animation: ${hue} 5s infinite linear;
  font-family: Arial, sans-serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  text-rendering: optimizeLegibility;
`;

const Skills = () => {
  return (
    <section id="skills" >
    <div >
    <>
        <>
          <div>
            <AnimatedGradientText>My Skills</AnimatedGradientText>
          </div>
        </>
      </>
   
    </div>
      
      <ul>
        <li>Frontend: [List of frontend technologies]</li>
        <li>Backend: [List of backend technologies]</li>
        <li>Programming Languages: [List of programming languages]</li>
        <li>Frameworks: [List of frameworks]</li>
        <li>Tools: [List of tools]</li>
      </ul>
    </section>
  );
};

export default Skills;
