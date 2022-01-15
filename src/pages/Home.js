import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import * as propertyData from '../data/propertyData';
import Property from '../components/Property';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

function Home() {
  // console.log(propertyData);
  return (
    <div className='site-content'>
      <HeroSlider />
      {/* Services section */}
      <Services />
      {/* Stat section */}
      <section className='stat-section section--padding text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
                <h2 className='stat__count text--light'>385</h2>
                <p className='stat__title text--light text-uppercase'>properties to rent</p>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
                <h1 className='stat__count text--light'>385</h1>
                <p className='stat__title text--light text-uppercase'>properties to rent</p>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
                <h1 className='stat__count text--light'>385</h1>
                <p className='stat__title text--light text-uppercase'>properties to rent</p>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <div className='stat'>
                <h1 className='stat__count text--light'>385</h1>
                <p className='stat__title text--light text-uppercase'>properties to rent</p>
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
          <div className='row'>
            {propertyData.propertiesInfo.map(property => (
              <Property data={property} />
            ))}
          </div>
        </div>
      </section>
      {/* About section */}
      <section className='section--padding about-section bg--center bg--cover bg--no-repeat'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6 col-sm-12 col-md-12 col-lg-6'>
              <p className='section__subheading text--secondary'>We are Bariel</p>
              <h3 className='text--heading'>Common Sense Solutions For All Aspects Of Commercial Property, Development Land.</h3>
              <p className='mt-4'>
                <Link to='/contact-us' className='btn__secondary d-inline-block'>
                  Contact Us Now
                </Link>
              </p>
            </div>
            <div className='col-6 col-sm-12 col-md-12 col-lg-6'>
              <p className='text--para mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className='text--para mb-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
              <p>
                <img src='/images/about-sign-1.png' alt='' width='200' />
              </p>
              <p className='text--secondary text--sm'>John Doe, Founder</p>
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
            {propertyData.propertiesInfo.map(property => {
              if (property.isFeatured) {
                return <Property data={property} />;
              }
            })}
          </div>
        </div>
      </section>
      {/* Agents section */}
      <section className='section--padding-bottom-only'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-5'>
              <p className='section__subheading text--secondary'>Our Agents</p>
              <h3 className='text--heading'>Take help to choose your property by our agents</h3>
            </div>
            <div className='col-12 col-md-12 col-lg-7'></div>
          </div>
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
          <Testimonials/>
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
