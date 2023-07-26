import React from 'react';
import { Button } from 'antd';

const Introduction = () => {
  return (
    <section id="introduction" className="section">
      <h1>Hello, I'm [Your Name]</h1>
      <p>Profession: [Your Profession]</p>
      <p>[Short summary highlighting your key strengths, goals, and areas of expertise]</p>
      <Button type="primary">Contact Me</Button>
    </section>
  );
};

export default Introduction;
