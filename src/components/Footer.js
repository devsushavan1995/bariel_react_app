import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  return (
    <div>
      <footer className='site-footer'>
        <div className='site-footer__top bg--primary'>
          <Container>
            <div className='site-footer__content row'>
              <div className='col-12 col-md-12 col-lg-6'>
                <div className='footer__about'>
                  <p>
                    <Link to='/'>
                      <img src='/images/logo-2.png' alt='light logo' />
                    </Link>
                  </p>
                  <p className='text--light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae hic enim quod iste esse, iusto inventore, ipsum molestias rem vero doloremque. Explicabo fugiat magni error, molestias eveniet quaerat. Esse.</p>
                  <ul className='social-icons-list d-flex'>
                    <li className='social-icon'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li className='social-icon'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li className='social-icon'>
                      <a href='#' target='_blank'>
                        <i class='fab fa-youtube'></i>
                      </a>
                    </li>
                    <li className='social-icon'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <h5 className='text--light'>Important Links</h5>
                <ul className='footer__menu'>
                  <li className='footer__menu-item'>
                    <Link to='/properties'>Properties</Link>
                  </li>
                  <li className='footer__menu-item'>
                    <Link to='/about-us'>About Us</Link>
                  </li>
                  <li className='footer__menu-item'>
                    <Link to='/'>Terms of Use</Link>
                  </li>
                  <li className='footer__menu-item'>
                    <Link to='/'>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <h5 className='text--light'>Contact Us</h5>
                <div className='footer__contact'>
                  <p className='text--light'>
                    Send Us Email
                    <br />
                    <a href='mailto:contact@company.com'>contact@company.com</a>
                  </p>
                  <p className='text--light'>
                    Call Us
                    <br />
                    <a href='tel:+1234567890'>+1234567890</a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className='site-footer__bottom bg--darkshade py-4'>
          <p className='text--light m-0 text-center'>© 2021 Bariel - Real Estate Theme by Sushavan Chakraborty</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
