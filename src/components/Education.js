import React from 'react';

const Education = () => {
  // Replace this with your educational qualifications and courses
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      university: 'Your University',
      year: 'Year of Graduation',
    },
    // Add more education objects as needed
  ];

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      {educationData.map((education, index) => (
        <div key={index} className="education-card">
          <h3>{education.degree}</h3>
          <p>{education.university}</p>
          <p>{education.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
