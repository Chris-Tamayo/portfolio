// import { Home } from './pages/Home';
// import { AboutMe } from './pages/AboutMe';
// import { Experience } from './pages/Experience';
// import ReactFullpage from '@fullpage/react-fullpage';

// function App() {
//   <ReactFullpage
//     //fullpage options
//     scrollingSpeed = {1000} /* Options here */

//     render={({ state, fullpageApi }) => {
//       return (
//         <ReactFullpage.Wrapper>
//           <div className='section'><Home /></div>
//           <div className='section'><AboutMe /></div>
//           <div className='section'><Experience /></div>
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// }

// export default App;

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './assets/global.css';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Experience } from './pages/Experience';

const App = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <div className="h-100">
          <div className="section"><Home /></div>
          <div className="section"><AboutMe /></div>
          <div className="section"><Experience /></div>
        </div>
      );
    }}
  />
);
export default App;