import React from "react";
import { Container, Navbar, Nav,NavDropdown } from "react-bootstrap";
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {logout} from '../actions/userAciton';
const Header = () => {

  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.userLogin);
  
  const logoutHandler = () => {
    dispatch(logout());
  }
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
              <LinkContainer to='/cart'>
              <Nav.Link className="d-flex align-items-center"> <FaShoppingCart /> <span className="p-2">Card</span> </Nav.Link>
              </LinkContainer>
              {userInfo ?
               <NavDropdown title={userInfo.name} id='username' className="my-3">
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>
               </NavDropdown>
              : <LinkContainer to='/login'>
              <Nav.Link  className="d-flex align-items-center"> <FaUser/> <span className="p-2">Sign In</span> </Nav.Link>
              </LinkContainer>}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
