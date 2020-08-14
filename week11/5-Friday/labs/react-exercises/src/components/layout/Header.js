import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="primary" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
          <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
          <NavDropdown.Item href="/todo">To Do List</NavDropdown.Item>
          <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
          <NavDropdown.Item href="/movies">Star Wars Movies</NavDropdown.Item>
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Lonely Boi</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </>
  )
}

export default Header
