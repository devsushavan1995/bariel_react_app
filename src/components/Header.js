import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import '../css/Header.css';
import { Offcanvas } from 'react-bootstrap';
import SearchForm from './SearchForm';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className='site-header bg-light text-center'>
        <Navbar collapseOnSelect expand='lg' fixed='top' className='site-header__main-nav py-2 py-lg-3'>
          <Container className='d-flex justify-content-between'>
            <Navbar.Brand>
              <Link to='/'>
                <img src='/images/logo.png' alt='logo' width='150' />
              </Link>
            </Navbar.Brand>
            <div>
              <button className='header__cta-btn--find-property text--heading bg--transparent p-0 d-lg-none' onClick={handleShow}>
                <span className='btn__icon'>
                  <i class='fas fa-search'></i>
                </span>
              </button>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-center'>
                <Nav>
                  <ul className='main-nav-menu d-lg-flex'>
                    <li className='main-nav-menu__item'>
                      <NavLink exact activeClassName='active' to='/'>
                        Home
                      </NavLink>
                    </li>
                    <li className='main-nav-menu__item'>
                      <NavLink activeClassName='active' to='/properties'>
                        Properties
                      </NavLink>
                    </li>
                    <li className='main-nav-menu__item'>
                      <NavLink activeClassName='active' to='/agents'>
                        Agents
                      </NavLink>
                    </li>
                    <li className='main-nav-menu__item'>
                      <NavLink activeClassName='active' to='/about-us'>
                        About Us
                      </NavLink>
                    </li>
                    <li className='main-nav-menu__item'>
                      <NavLink activeClassName='active' to='/blog'>
                        Blog
                      </NavLink>
                    </li>
                    <li className='main-nav-menu__item'>
                      <NavLink activeClassName='active' to='/contact-us'>
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
            <button className='btn__primary d-none d-lg-inline-block' onClick={handleShow}>
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
          <Offcanvas.Title className='text--heading'>Find Property</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Search Form */}
          <SearchForm/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
