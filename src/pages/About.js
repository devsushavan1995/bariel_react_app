import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import { Link, useNavigate } from 'react-router-dom';
import { agentsInfo } from '../data/agentsData';
import Agent from '../components/Agent';
import Testimonials from '../components/Testimonials';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function About() {
  const navigate = useNavigate();
  const [crumbs, setCrumbs] = useState(['home', 'about Us']);
  // const selected = crumb => {
  //   crumb = "/" + crumb;
  //   navigate(crumb);
  // }
  return (
    <div className='site-content'>
      <Pagetitle title='about us' crumbs={crumbs} bgImage="about-us-pagetitle-bg.jpg" />
      <section className='section--padding about-detailed-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-md-12 col-lg-6 mb-4 mb-lg-0 text--center'>
              <img src='/images/img-1.jpg' alt='' className='d-inline-block' />
            </div>
            <div className='col-12 col-md-12 col-lg-6'>
              <div className='about-detailed__content text--center text--lg-left'>
                <p className='section__subheading text--secondary'>We Are BAriel</p>
                <h2 className='section__heading text--heading'>Common Sense Solutions For All.</h2>
                <p class='content__para text--para text--sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt ate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Link to='/about-us' className='btn__secondary d-inline-block mt-2'>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section--padding bg--light features-section'>
        <div className='container'>
          <p className='section__subheading text--secondary text-center'>Features</p>
          <h2 className='section__heading text--heading text-center'>Core Features</h2>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='feature bg--light-white mb-4'>
                <div className='feature__icon-container mb-4'>
                  <img src='images/maps.png' alt='' width='64' />
                </div>
                <h4 className='feature__title text--heading'>Search Property From Anywhere</h4>
                <p className='feature__desc text--para text--sm'>For each space we design, amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='feature bg--light-white mb-4'>
                <div className='feature__icon-container mb-4'>
                  <img src='images/businessman.png' alt='' width='64' />
                </div>
                <h4 className='feature__title text--heading'>Professional & Per Friendly Agents</h4>
                <p className='feature__desc text--para text--sm'>Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='feature bg--light-white'>
                <div className='feature__icon-container mb-4'>
                  <img src='images/house.png' alt='' width='64' />
                </div>
                <h4 className='feature__title text--heading'>Buy and Sell Awesome Property</h4>
                <p className='feature__desc text--para text--sm'>For each space we design, amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='stat-section section--padding text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
                <CountUp end={385} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h1 className="text--light font--para font--weight-500" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className='stat__title text--light text-uppercase'>properties to rent</p>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
              <CountUp end={520} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h1 className="text--light font--para font--weight-500" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className='stat__title text--light text-uppercase'>properties for sale</p>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
              <CountUp end={612} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h1 className="text--light font--para font--weight-500" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className='stat__title text--light text-uppercase'>properties under offer</p>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
              <CountUp end={30000} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h1 className="text--light font--para font--weight-500" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className='stat__title text--light text-uppercase'>square ft</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section--padding overflow-hidden'>
        <div className='container'>
          <div className='row mb-5 align-items-center text--center text--lg-left'>
            <div className='col-12 col-md-12 col-lg-6'>
              <p className='section__subheading text--secondary'>Our Agents</p>
              <h3 className='text--heading'>Take help to choose your property by our agents</h3>
            </div>
            <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center justify-content-lg-end'>
              <Link to='/agents' class='btn__secondary d-none d-lg-inline-block mt-4 mt-lg-0'>
                View All
              </Link>
            </div>
          </div>
          <div className='row'>
            {agentsInfo.map((agent, index) => {
              if (index < 4) {
                return <Agent agent={agent} />;
              }
            })}
          </div>
          <p className='text--center d-lg-none'>
            <Link to='/agents' class='btn__secondary d-inline-block d-lg-none mt-4'>
              View All
            </Link>
          </p>
        </div>
      </section>
      <section className='section--padding-bottom-only'>
        <div className='container'>
          <p className='section__subheading text--secondary text-center'>Feedback</p>
          <h2 className='section__heading text--heading text-center'>Happy Clients</h2>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

export default About;
