import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Contact />
        <Resume />
        <Testimonials />
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </>
  );
};

export default App;
