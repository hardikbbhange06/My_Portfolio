import React from "react";
import "./Portfolio.css"

const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <div className="animate-charcter1">
        <div>
          <h2>About Me</h2>
        </div>
      </div>

      {/* <p>[Detailed section about yourself, your background, education, work experience, and motivation to pursue a career in technology]</p> */}
      <div className="yourself">
      <>
      <p>
          I am Hardik Bhange, a motivated individual with a background in
          Engineering from G. H. Raisoni Academy Of Engineering And Technology,
          Nagpur. I have practical experience as a React JS Developer and Java
          Developer, having worked on various projects during my internships and
          training. My passion for technology and coding drives me to
          continuously improve and innovate in the field of web development.
        </p>
      </>
       
      </div>
    </section>
  );
};

export default AboutMe;
