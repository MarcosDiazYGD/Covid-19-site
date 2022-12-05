import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { setLang } from '../store/slices/lang.slice';

const NavBar = () => {
  const dispatch = useDispatch()
  const setLanguage = (lang) => {
    dispatch(setLang(lang))
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" as={Link} to={'/'}><div className='container-logo'><p>COVID-19</p><span>INFORMATION</span></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/searchcountry'>Search</Nav.Link>
            <Nav.Link as={Link} to='/tips'>Tips</Nav.Link>

            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setLanguage('english')} >English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setLanguage('spanish')} >Español</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;