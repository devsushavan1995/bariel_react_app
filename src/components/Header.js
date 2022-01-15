import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { Offcanvas , Button } from 'react-bootstrap';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <header className='site-header bg-light text-center'>
        <Navbar collapseOnSelect expand='lg' fixed='top' className='site-header__main-nav py-3'>
          <Container className="d-flex justify-content-between">
            <Navbar.Brand>
              <Link to='/'>
                <img src='/images/logo.png' alt='logo' width='150' />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-center'>
              <Nav>
                <ul className='main-nav-menu d-lg-flex'>
                  <li className='main-nav-menu__item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='main-nav-menu__item'>
                    <Link to='/properties'>Properties</Link>
                  </li>
                  <li className='main-nav-menu__item'>
                    <Link to='/agents'>Agents</Link>
                  </li>
                  <li className='main-nav-menu__item'>
                    <Link to='/about-us'>About Us</Link>
                  </li>
                  {/* <li className='main-nav-menu__item'>
                    <Link to='/blog'>Blog</Link>
                  </li> */}
                  <li className='main-nav-menu__item'>
                    <Link to='/contact-us'>Contact Us</Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
            <button className='btn__primary' onClick={handleShow}>
              <span className='btn__icon'>
                <i class='fas fa-search'></i>
              </span>
              <span className='btn__text'>Find Property</span>
            </button>
          </Container>
        </Navbar>
      </header>
      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;
