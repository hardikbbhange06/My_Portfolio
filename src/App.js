import React from 'react';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import './App.css';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
// import GitHubContributions from './components/GithubContributions';

const App = () => {
  return (
    <>
    {/* <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      
    </Routes>

    </Router> */}
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
       {/* <GitHubContributions/> */}
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </>
  );
};

export default App;
