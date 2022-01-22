import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import '../css/Header.css';
import { Offcanvas } from 'react-bootstrap';
import Select from 'react-select';
import SearchAdvanced from './SearchAdvanced';

function Header() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const locationOptions = [
    { value: 'New Town, Kolkata', label: 'New Town, Kolkata' },
    { value: 'Salt Lake, Kolkata', label: 'Salt Lake, Kolkata' },
    { value: 'Jadavpur, South 24 Paragana', label: 'Jadavpur, South 24 Paragana' },
    { value: 'Dumdum, North 24 Paragana', label: 'Dumdum, North 24 Paragana' },
    { value: 'Siliguri, Jalpaiguri', label: 'Siliguri, Jalpaiguri' },
    { value: 'Bishnupur, Bankura', label: 'Bishnupur, Bankura' },
  ];
  const propertyStatusOptions = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 'for rent',
      label: 'For Rent',
    },
    {
      value: 'for buy',
      label: 'For Buy',
    },
  ];
  const propertyTypeOptions = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 'shop',
      label: 'Shop',
    },
    {
      value: 'office',
      label: 'Office',
    },
    {
      value: 'apartment',
      label: 'Apartment',
    },
    {
      value: 'villa',
      label: 'Villa',
    },
  ];
  return (
    <div>
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
                    {/* <li className='main-nav-menu__item'>
                    <Link to='/blog'>Blog</Link>
                  </li> */}
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
          {/* Search Form starts */}
          <form action='' className='search-form'>
            <div className='row'>
              <div className='col-12 mb-3'>
                <label htmlFor='location' className='text--heading text--sm mb-2'>
                  Location
                </label>
                <Select options={locationOptions} />
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='location' className='text--heading text--sm mb-2'>
                  Property Status
                </label>
                <Select options={propertyStatusOptions} />
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='location' className='text--heading text--sm mb-2'>
                  Property Type
                </label>
                <Select options={propertyTypeOptions} />
              </div>
            </div>
            {toggle ? <SearchAdvanced isShownClass={'d-flex'} /> : <SearchAdvanced isShownClass={'d-none'} />}
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <input type='checkbox' name='advance-filter' className='search-form__checkbox--advanced-filter-trigger' onClick={() => setToggle(!toggle)} />
                <label htmlFor='advance-filter' className='text--heading text--sm'>
                  Advanced Filter
                </label>
              </div>
              <button type='submit' class='btn__secondary'>
                Search
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;
