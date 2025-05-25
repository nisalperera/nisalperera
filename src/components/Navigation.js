import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// function Navigation() {
//   return (
//     <Navbar bg="light" expand="lg" fixed="top">
//       <Navbar.Brand as={NavLink} to="/summary">Nisal Perera</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarNav" />
//       <Navbar.Collapse id="navbarNav">
//         <Nav className="ms-auto">
//           <Nav.Link as={NavLink} to="/summary">Summary</Nav.Link>
//           <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
//           <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
//           <Nav.Link as={NavLink} to="/certifications">Certifications</Nav.Link>
//           <Nav.Link as={NavLink} to="/languages">Languages</Nav.Link>
//           <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
//           <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
//           <Nav.Link as={NavLink} to="/references">References</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }


function Navigation({ certifications }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Nisal Perera</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#summary">Summary</a></li>
                        <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        {certifications &&
                            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>}
                        <li className="nav-item"><a className="nav-link" href="#languages">Languages</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#references">References</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;
