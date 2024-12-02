import React from 'react'
import "../style/Navbar.css"
import "../style/responsive.css"
import logo from "../assets/Logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavbarSec() {
  return (
    <div className='nav'>
      <img src={logo}/>
      <Navbar expand="lg" className="cont">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='basic-navbar-nav'/>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#">BUY $HAPI</Nav.Link>
            <Nav.Link href="#road">ROADMAP</Nav.Link>
            <Nav.Link href="#white">WHITEPAPER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavbarSec