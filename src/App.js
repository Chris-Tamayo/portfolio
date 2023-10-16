import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './assets/global.css';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Experience } from './pages/Experience';
import { Projects } from "./pages/Projects";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const fullpageOptions = {
  menu: '#menu',
  anchors: ['home', 'about', 'experience', 'projects'],
  // navigation: true,
  // navigationTooltips: ['Home', 'About', 'Experience', 'Projects'],
};

const App = () => (
  <>
    <NavBar />
    <ReactFullpage
      {...fullpageOptions}
      render={({ state, fullpageApi }) => {
        return (
          <div className="h-100">
            <div className="section" data-anchor="home">
              <Home />
            </div>
            <div className="section" data-anchor="about">
              <AboutMe />
            </div>
            <div className="section" data-anchor="experience">
              <Experience />
            </div>
            <div className="section" data-anchor="projects">
              <Projects />
            </div>
          </div>
        );
      }}
    />
    <Footer />
  </>

);
export default App;