import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import Property from '../components/Property';
import Testimonials from '../components/Testimonials';
import Agent from '../components/Agent';
import { propertiesInfo } from '../data/propertyData';
import { agentsInfo } from '../data/agentsData';

function Home() {
  let noOfFeaturedProperty = 3;
  let noOfFeaturedCounter = 0;
  return (
      <div>
        <HeroSlider />
        {/* Services section */}
        <Services />
        {/* Stat section */}
        <section className='stat-section section--padding text-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <div className='stat'>
                  <CountUp end={385} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h1 className='text--light font--para font--weight-500' ref={countUpRef} />
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
                        <h1 className='text--light font--para font--weight-500' ref={countUpRef} />
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
                        <h1 className='text--light font--para font--weight-500' ref={countUpRef} />
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
                        <h1 className='text--light font--para font--weight-500' ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p className='stat__title text--light text-uppercase'>square ft</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Recently added section */}
        <section className='section--padding'>
          <div className='container'>
            <p className='section__subheading text--secondary text-center'>Properties</p>
            <h2 className='section__heading text--heading text-center'>Recently added</h2>
            <div className='row justify-content-center'>
              {propertiesInfo.map(property => (
                <Property data={property} />
              ))}
            </div>
          </div>
        </section>
        {/* About section */}
        <section className='section--padding about-section bg--center bg--cover bg--no-repeat'>
          <div className='container'>
            <div className='row align-items-center text--center text--lg-left'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <p className='section__subheading text--secondary'>We are Bariel</p>
                <h3 className='text--heading mb-4 mb-lg-2'>Common Sense Solutions For All Aspects Of Commercial Property, Development Land.</h3>
                <p className='mb-lg-0'>
                  <Link to='/contact-us' className='btn__secondary d-none d-lg-inline-block mt-4'>
                    Contact Us Now
                  </Link>
                </p>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <p className='text--para mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className='text--para mb-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                <p>
                  <img src='/images/about-sign-1.png' alt='' width='200' className='d-inline-block' />
                </p>
                <p className='text--secondary text--sm'>John Doe, Founder</p>
                <p className='mb-lg-0'>
                  <Link to='/contact-us' className='btn__secondary d-lg-none mt-3'>
                    Contact Us Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Properties section */}
        <section className='section--padding'>
          <div className='container'>
            <p className='section__subheading text--secondary text-center'>Featured</p>
            <h2 className='section__heading text--heading text-center'>Featured Properties</h2>
            <div className='row justify-content-center'>
              {propertiesInfo
                .filter(filtProp => filtProp.isFeatured)
                .map(property => {
                  if (noOfFeaturedCounter < 3) {
                    noOfFeaturedCounter++;
                    return <Property data={property} />;
                  }
                })}
            </div>
          </div>
        </section>
        {/* Agents section */}
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
        {/* Family/Commercial section */}
        <section className='overflow-hidden'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-6 bg--secondary'>
              <div className='cta-block-by-property-type section--padding text-center'>
                <div className='cta-block__icon text-center'>
                  <img src='/images/residential-icon.png' className='d-inline-block mb-4' alt='' width='128' />
                </div>
                <p className='section__subheading text--light'>RESIDENTIAL PROPERTY</p>
                <h3 className='cta-block__heading text--light'>Residential & Development Land</h3>
                <p className='mt-4'>
                  <Link to='/' class='btn__light'>
                    Check Residential Properties
                  </Link>
                </p>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-6 bg--center bg--cover bg--no-repeat' style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.5)), url(/images/meeting-room-commercial.jpg)' }}>
              <div className='cta-block-by-property-type section--padding text-center'>
                <div className='cta-block__icon text-center'>
                  <img src='/images/commercial-icon.png' className='d-inline-block mb-4' alt='' width='128' />
                </div>
                <p className='section__subheading text--light'>COMMERCIAL PROPERTY</p>
                <h3 className='cta-block__heading text--light'>Sense Solutions For All Aspects.</h3>
                <p className='mt-4'>
                  <Link to='/' class='btn__secondary'>
                    Get A Quote
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial section */}
        <section className='section--padding'>
          <div className='container'>
            <p className='section__subheading text--secondary text-center'>Feedback</p>
            <h2 className='section__heading text--heading text-center'>Happy Clients</h2>
            <Testimonials />
          </div>
        </section>
        {/* Blog section */}
        <section className='section--padding d-none'>
          <div className='container'>
            <p className='section__subheading text--secondary text-center'>Blog</p>
            <h2 className='section__heading text--heading text-center'>Latest News</h2>
          </div>
        </section>
      </div>
  );
}

export default Home;
