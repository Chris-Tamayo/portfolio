import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// export function NavBar() {
//   return (
//     <Navbar fixed="top" expand="md" className="navbar">
//       <Container fluid className="m-2">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link data-menuanchor="home" href="#home">Home</Nav.Link>
//             <Nav.Link data-menuanchor="about" href="#about">About</Nav.Link>
//             <Nav.Link data-menuanchor="experience" href="#experience">Experience</Nav.Link>
//             <Nav.Link data-menuanchor="projects" href="#projects">Projects</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export function NavBar() {
    return (
    <nav id="navbar" class="navbar fixed-top navbar-expand-lg mx-4 my-2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
            <ul id="menu" class="navbar-nav ms-auto">
                <li data-menuanchor="home" class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li data-menuanchor="about" class="nav-item">
                    <a class="nav-link" href="#about">About Me</a>
                </li>
                <li data-menuanchor="experience" class="nav-item active">
                    <a class="nav-link" href="#experience">Experience</a>
                </li>
                <li data-menuanchor="projects" class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}