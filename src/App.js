import React from "react";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import "./App.css";

import Introduction from "./components/Introduction/Introduction";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Projects1 from "./components/Projects/Projects1";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Contact from "./components/Contact/Contact";
import Rikam from "./components/Rikam";
import Header from "./components/Header/Header";
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
        <Projects1 />
        <WorkExperience />
        {/* <Education /> */}
        <Contact />
        {/* <Resume /> */}
        {/* <Testimonials /> */}
        {/* <GitHubContributions/> */}
        <Rikam />
      </main>
      <footer>{/* Add footer content here */}</footer>
    </>
  );
};

export default App;
