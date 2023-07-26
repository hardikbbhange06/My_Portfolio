import React from 'react';

const Projects = () => {
  // Replace this with your project data
  const projectsData = [
    {
      name: 'Project 1',
      overview: 'Brief overview of Project 1',
      technologies: 'Technologies used in Project 1',
      challenges: 'Challenges faced in Project 1',
      solutions: 'Solutions implemented in Project 1',
      liveLink: 'Link to live project (if available)',
      repoLink: 'Link to project repository',
    },
    // Add more project objects as needed
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.overview}</p>
          <p>Technologies: {project.technologies}</p>
          <p>Challenges: {project.challenges}</p>
          <p>Solutions: {project.solutions}</p>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Project
          </a>
          <br />
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
