import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import ContactForm from '../components/ContactForm'
import '../css/Pages.css';
function Contact() {
  const [crumbs, setCrumbs] = useState(['home', 'contact us']);
  return (
    <div className='site-content site-content--contact-us'>
      <Pagetitle title='contact us' crumbs={crumbs} bgImage="contact-pagetitle-bg.jpg"/>
      <section className='contact-us-section section--padding'>
        <div className='container'>
          <p className='section__subheading text--secondary'>DROP US A LINE</p>
          <h2 className='section__heading text--heading'>Contact Us</h2>
          <div className='row align-items-center'>
            <div className='col-sm-12 col-md-12 col-lg-8 mb-5 mb-lg-0'>
                {/* Contact form  */}
                <ContactForm />
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4'>
              {/* Contact Information */}
              <div className='contact-info-container d-flex align-items-center mb-4'>
                <div className='contact-info__icon'>
                  <img src='/images/call.png' alt='' width='64' />
                </div>
                <div className='contact-info__content'>
                  <p className='contact-info__heading mb-1 text--secondary'>PHONE NUMBER</p>
                  <h5 className='contact-info__text'>+123 4567890</h5>
                </div>
              </div>
              <div className='contact-info-container d-flex align-items-center mb-4'>
                <div className='contact-info__icon'>
                  <img src='/images/email.png' alt='' width='64' />
                </div>
                <div className='contact-info__content'>
                  <p className='contact-info__heading mb-1 text--secondary'>EMAIL ADDRESS</p>
                  <h5 className='contact-info__text'>contact@company.com</h5>
                </div>
              </div>
              <div className='contact-info-container d-flex align-items-center'>
                <div className='contact-info__icon'>
                  <img src='/images/address.png' alt='' width='64' />
                </div>
                <div className='contact-info__content'>
                  <p className='contact-info__heading mb-1 text--secondary'>OFFICE ADDRESS</p>
                  <h5 className='contact-info__text'>Lorem Street, WA 5050</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
