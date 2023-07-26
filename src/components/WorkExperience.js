import React from 'react';

const WorkExperience = () => {
  // Replace this with your work experience data
  const workExperienceData = [
    {
      company: 'Company 1',
      role: 'Your role in Company 1',
      responsibilities: 'Your responsibilities in Company 1',
      achievements: 'Your achievements in Company 1',
    },
    // Add more work experience objects as needed
  ];

  return (
    <section id="work-experience" className="section">
      <h2>Work Experience</h2>
      {workExperienceData.map((experience, index) => (
        <div key={index} className="work-experience-card">
          <h3>{experience.company}</h3>
          <p>Role: {experience.role}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>Achievements: {experience.achievements}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
