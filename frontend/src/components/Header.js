import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/card'>
              <Nav.Link className="d-flex align-items-center"> <FaShoppingCart /> <span className="p-2">Card</span> </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/signIn'>
              <Nav.Link  className="d-flex align-items-center"> <FaUser/> <span className="p-2">Sign In</span> </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
