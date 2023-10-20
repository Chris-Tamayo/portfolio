import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import sun from '../assets/sun.png'
import moon from '../assets/moon.png';
import { useState } from 'react';

export function NavBar() {
  const [modeImg, setModeImg] = useState(moon);

  function handleClick() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      setModeImg(sun);
    } else {
      console.log("switching to light mode")
      setModeImg(moon);
    }
  }

  return (
    <Navbar fixed="top" expand="md" className="navbar shadow-sm">
      <Container fluid className="navbar-container m-2 justify-content-between">
        <div className="align-items-center">
          <img src={modeImg} id="dark-mode-toggle" alt="mode" onClick={handleClick}/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <ul id="menu" class="navbar-nav ms-auto">
                <li data-menuanchor="home" class="nav-item">
                     <a class="nav-link" href="#home">Home</a>
                </li>
                <li data-menuanchor="about" class="nav-item">
                    <a class="nav-link" href="#about">About Me</a>
                </li>
                <li data-menuanchor="experience" class="nav-item">
                    <a class="nav-link" href="#experience">Experience</a>
                </li>
                <li data-menuanchor="projects" class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
             </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export function NavBar() {
//     return (
//     <nav id="navbar" class="navbar fixed-top navbar-expand-lg mx-4 my-2">
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarContent">
//             <ul id="menu" class="navbar-nav ms-auto">
//                 <li data-menuanchor="home" class="nav-item">
//                     <a class="nav-link" href="#home">Home</a>
//                 </li>
//                 <li data-menuanchor="about" class="nav-item">
//                     <a class="nav-link" href="#about">About Me</a>
//                 </li>
//                 <li data-menuanchor="experience" class="nav-item">
//                     <a class="nav-link" href="#experience">Experience</a>
//                 </li>
//                 <li data-menuanchor="projects" class="nav-item">
//                     <a class="nav-link" href="#projects">Projects</a>
//                 </li>
//             </ul>
//         </div>
//     </nav>
//     )
// }