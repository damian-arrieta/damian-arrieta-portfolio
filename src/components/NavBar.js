import Logo from '../assets/imgs/logo.png';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img style={{height: '40px', width:'250px'}} src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a className='btn btn-outline-light btn-floating m-1' target="_blank" href="https://www.linkedin.com/in/damian-arrieta/"><i class="bi bi-linkedin text-light"></i></a>
                <a className='btn btn-outline-light btn-floating m-1' target="_blank" href="https://github.com/damian-arrieta"><i class="bi bi-github text-light"></i></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}